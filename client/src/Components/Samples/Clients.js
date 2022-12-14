// import Axios from "axios";

// // const Clients = [
// //   {
// //     DateCreated: "2022-10-13",
// //     Contact: {
// //       mobile: "077123456789",
// //       mailID: "2022e001@eng.jfn.ac.lk",
// //     },
// //     Name: "Kajamohan",
// //     Status: "Active",
// //   },
// //   {
// //     DateCreated: "2022-10-13",
// //     Contact: {
// //       mobile: "077123456789",
// //       mailID: "2022e001@eng.jfn.ac.lk",
// //     },
// //     Name: "Kajamohan",
// //     Status: "Inactive",
// //   },
// //   {
// //     DateCreated: "2022-10-13",
// //     Contact: {
// //       mobile: "077123456789",
// //       mailID: "2022e001@eng.jfn.ac.lk",
// //     },
// //     Name: "Kajamohan",
// //     Status: "Inactive",
// //   },
// //   {
// //     DateCreated: "2022-10-13",
// //     Contact: {
// //       mobile: "077123456789",
// //       mailID: "2022e001@eng.jfn.ac.lk",
// //     },
// //     Name: "Kajamohan",
// //     Status: "Active",
// //   },
// //   {
// //     DateCreated: "2022-10-13",
// //     Contact: {
// //       mobile: "077123456789",
// //       mailID: "2022e001@eng.jfn.ac.lk",
// //     },
// //     Name: "Kajamohan",
// //     Status: "Active",
// //   },
// // ];

// //  function Clients() {
// //   let ClientsDetails = [];
// //   let datasets =  Axios.post("http://localhost:3001/allClients").data;

// //   if (datasets.length > 0) {
// //     datasets.forEach((element) => {
// //       ClientsDetails.push(element);
// //     });
// //     return datasets;
// //   }
// //   // .then((res) => {
// //   //   if (!res.data.message) {
// //   //     //  data = res.data.result;
// //   //     res.data.forEach((element) => {
// //   //       ClientsDetails.push(element);
// //   //     });
// //   //     console.log(res.data);
// //   //     return res.data;
// //   //   }
// //   // })
// //   // .catch((err) => {
// //   //   console.log(err);
// //   // });

// //   // console.log(typeof ClientsDetails);
// // }

// export { Clients };

// import Axios from "axios";
// function getAllClients() {
//   console.log("get all Clients 1 ");
//   //   let clients = [];
//   Axios.get("http://localhost:3001/allClients")

//     .then((res) => {
//       if (!res.data.message) {
//         // setTableItem(res.data);
//         // console.log(typeof res.data);
//         console.log(res.data);
//         // while (res.data > 0) {
//         //   res.data.map((list) => {
//         //     clients.push(list);
//         //   });
//         // }
//         // return clients;
//       } else {
//         console.log(res.data.message);
//       }
//     })
//     .catch((err) => {
//       console.log("Error");
//     });
//   // return clients;
// }

// export default getAllClients;
