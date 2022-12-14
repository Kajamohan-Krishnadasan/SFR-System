const express = require("express");
const app = express();
const port = 3001;
const mysql = require("mysql");

const host = "localhost";
const userName = "root";
const password = "";
const databaseName = "sfrs_db";

// MySql Database
const db = mysql.createConnection({
  host: host,
  user: userName,
  password: password,
  database: databaseName,
});

// Connect to the database
db.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }
  console.log("Connected to the MySQL server....");
});

const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");

const cors = require("cors");
app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

/**********************************************************/
// upload admin image
app.use("/uploads", express.static("./uploads"));

const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "./uploads");
  },
  filename: (req, file, callBack) => {
    callBack(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const maxSize = 3 * 1000 * 1000; // Maximum size 3MB
const upload = multer({
  storage: storage,
  limits: {
    // limit the file size
    fileSize: maxSize,
  },
});


app.post("/upload", (req, res) => {
  try {
    const uploadHandler = upload.single("image");

    uploadHandler(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        if (err.code == "LIMIT_FILE_SIZE") {
          return res.send({
            message: "Maximum file size is 3MB",
          });
        }
      } else if (req.file == null || req.file == undefined) {
        return res.send({
          message: "No file!",
        });
      } else if (err) {
        return res.send({ err: err });
      }

      const first_Name = req.body.firstName;
      const last_Name = req.body.lastName;
      const email_address = req.body.emailaddress;
      const password = req.body.password;
      const imgsrc =
        `./uploads/${req.file.fieldname}_${Date.now()}${path.extname(req.file.originalname)}`;
      const params = [first_Name, last_Name, email_address, password, imgsrc];
      const uploadQuery =
        "INSERT INTO image (first_name, last_name, email, password, img_path) VALUES (?,?,?,?,?)";

      db.query(uploadQuery, params, (err, results) => {
        if (err) {
          res.send({ err: err });
        } else {
          console.log("Uploaded Successfully");
          res.send({
            success: "Uploaded to the server",
          });
        }
      });
    });
  } catch (error) {
    res.send({ err: error });
  }
});



// get admin data
app.get("/getAdminImage", (req, res) => {
  const email = req.body.email;
  console.log(email);
  const sqlSelect = "SELECT * FROM image WHERE email = ? ";
  // const sqlSelect = "SELECT * FROM image";

  try {
    db.query(sqlSelect, [email], (err, result) => {
      if (err) {
        res.send({ err: err });
      } else if (result.length > 0) {
        // console.log(result.length);
        res.send(result );
      } else {
        res.send({ message: "Details not found" });
      }
    });
  } catch (err) {
    res.send({
      status: 400,
      err: err,
    });
  }
});

// create new normal user account
app.post("/newuserinsert", (req, res) => {
  const userName = req.body.userName;
  const userEmail = req.body.userEmail;
  const userPassword = req.body.userPassword;
  const sqlInsert = "INSERT INTO users (name, email, password) VALUES (?,?,?)";

  if (userEmail) {
    const sqlSelect = "SELECT * FROM users WHERE email = ? AND type = 'N' ";
    db.query(sqlSelect, [userEmail], (err, result) => {
      if (err) {
        console.log(err);
      }
      if (result.length > 0) {
        res.send({
          message: "Email Address already exists.",
        });

        console.log("already have a account");
        res.end();
      } else {
        if (userName && userEmail && userPassword) {
          const params = [userName, userEmail, userPassword];
          db.query(sqlInsert, params, (err) => {
            if (err) {
              res.send({ err: err });
            } else {
              res.send({
                success: "Account Created Successfully.",
              });
              console.log("Account Created Successfully.");
            }
            res.end();
          });
        }
      }
    });
  }
});

// User login and get data from user table (Normal User)
app.post("/userlogin", (requests, response) => {
  const userEmail = requests.body.userEmail;
  const userPassword = requests.body.userPassword;
  const params = [userEmail, userPassword];
  const sqlSelect =
    "SELECT * FROM users WHERE email = ? AND password = ? AND type = 'N' ";
  db.query(sqlSelect, params, (err, result) => {
    if (err) {
      response.send({ err: err });
    }

    if (result.length > 0) {
      response.send(result);
    } else {
      response.send({ message: "Incorrect Email Address or Password" });
      console.log("Incorrect Email Address or Password");
    }
  });
});

// User login and get data from user table (Admin User)
app.post("/adminlogin", (requests, response) => {
  const userEmail = requests.body.userEmail;
  const userPassword = requests.body.userPassword;
  const params = [userEmail, userPassword];
  const sqlSelect =
    "SELECT * FROM users WHERE email = ? AND password = ? AND type = 'A' ";
  db.query(sqlSelect, params, (err, result) => {
    if (err) {
      response.send({ err: err });
    }

    if (result.length > 0) {
      response.send(result);
    } else {
      response.send({ message: "Incorrect Email Address or Password" });
      console.log("Incorrect Email Address or Password");
    }
  });
});

// Get all Client details (Normal Users)
app.get("/allClients", (request, response) => {
  const sqlSelect = "SELECT * FROM users WHERE type = 'N' ";
  // const q = request.query.q;
  db.query(sqlSelect, (err, result) => {
    if (err) {
      response.send({ err: err });
    } else if (result.length > 0) {
      response.send(result);
      // console.log(result);
    } else {
      response.send({ message: "No client Found" });
      response.end();
    }
  });
});

// Get all Admin details
app.get("/allAdmins", (request, response) => {
  const sqlSelect = "SELECT * FROM users WHERE type = 'A' OR type = 'S'";
  // const q = request.query.q;
  db.query(sqlSelect, (err, result) => {
    if (err) {
      response.send({ err: err });
    } else if (result.length > 0) {
      response.send(result);
      // console.log(result);
    } else {
      response.send({ message: "No Admin Found" });
      response.end();
    }
  });
});

// // Get all Categories details
// app.get("/allCategory", (request, response) => {
//   const sqlSelect = "SELECT * FROM Category_list WHERE status = 1 AND delete_status = 1 ";
//   // const q = request.query.q;
//   db.query(sqlSelect, (err, result) => {
//     if (err) {
//       response.send({ err: err });
//     } else if (result.length > 0) {
//       response.send(result);
//     } else {
//       response.send({ message: "No Category Found" });
//       response.end();
//     }
//   });
// });

// // Get all Booking details
// app.get("/allCategory", (request, response) => {
//   const sqlSelect = "SELECT * FROM Booking_List WHERE status = 1 ";
//   // const q = request.query.q;
//   db.query(sqlSelect, (err, result) => {
//     if (err) {
//       response.send({ err: err });
//     } else if (result.length > 0) {
//       response.send(result);
//     } else {
//       response.send({ message: "No Category Found" });
//       response.end();
//     }
//   });
// });

/*********************************************************/
app.listen(port, () => {
  console.log("Server is Started");
});
