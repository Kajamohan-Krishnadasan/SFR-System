import React from "react";
import "../Assets/Styles/Header.Module.css";
import { useNavigate } from "react-router-dom";

import "../Assets/Styles/Public.Module.css";
import ImageSlider from "../Components/ImageSlider/ImageSlider";
import { img1, img2, img3, img4 } from "../Assets/Images/Images";
import Footer from "../Components/Footer/Footer";

const Public = () => {
  const navigate = useNavigate();

  const PublicPage = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const loginPage = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const loginAdminPage = (e) => {
    e.preventDefault();
    navigate("/admin-login");
  };

  const RegisterPage = (e) => {
    e.preventDefault();
    navigate("/sign-up");
  };

  const slides = [
    { url: `url(${img1})`, title: "img 1" },
    { url: `url(${img2})`, title: "img 2" },
    { url: `url(${img3})`, title: "img 3" },
    { url: `url(${img4})`, title: "img 4" },
  ];

  return (
    <div className="public-main">
      <nav className="main-nav-bar">
        <div className="header-left">
          <div className="heading" onClick={PublicPage}>Sport Facilities Reservation System</div>
          <button className="Public-page-button-home Active" onClick={PublicPage}>
            Home
          </button>
        </div>

        <div className="header-right">
          <button className="Public-page-button" onClick={loginPage}>
            Login
          </button>{" "}
          |
          <button className="Public-page-button" onClick={RegisterPage}>
            Register
          </button>{" "}
          |
          <button className="Public-page-button" onClick={loginAdminPage}>
            Admin
          </button>
        </div>
      </nav>
      <main className="main-area">
        <div className="img-container">
          <ImageSlider slides={slides} />
        </div>
        <div className="public-main-des">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quo error at consequatur vero officiis soluta beatae nemo blanditiis sunt aliquid, repellat minima dolores quisquam, rem, dolorem inventore in obcaecati?
          Sequi quasi distinctio tenetur aperiam at natus aliquid iure quidem quod laborum vero maxime, alias neque quisquam architecto commodi voluptatibus! Neque similique eos libero sequi quis praesentium ratione in consequatur?
          Maiores temporibus nemo sed ipsa veniam eos rem. Sunt, quis repellat animi velit similique in, numquam explicabo porro beatae qui reprehenderit commodi magni id fugit voluptatem eligendi quo vel magnam!
          Expedita unde neque aut velit? Cum, ut! Nisi illum adipisci autem? Recusandae nemo, repudiandae sunt nisi odio nam et. Quas optio ad consequatur earum illum autem aut non nobis dignissimos?
          Illo tempora quo harum, reprehenderit aliquam voluptatibus voluptatem porro perspiciatis officia modi vitae eaque error, saepe velit adipisci, inventore laborum cum laboriosam at. Esse at maxime aut sit reiciendis quod.
          Deleniti amet optio, unde quibusdam totam voluptas nobis dolores aspernatur. Sint quis sapiente est, unde vel eum? Provident, dolores. Vel incidunt rem eaque iste nemo itaque. Cumque rem hic earum.
          Numquam doloremque a doloribus aspernatur, dolor, consequatur saepe accusamus repellat nulla debitis sequi reiciendis autem impedit? Vero at magnam quod porro perferendis suscipit tenetur aliquid temporibus. Consequuntur eligendi necessitatibus obcaecati.
          Dolorum quasi aperiam iste dicta in nesciunt minus porro! Tenetur dolorem minima voluptate, facilis quae ad neque sint quia omnis eius. Consequatur qui doloremque unde perferendis mollitia eligendi placeat at!
          Accusantium, perspiciatis quisquam quaerat consequatur nesciunt facilis minus impedit reprehenderit? Natus expedita inventore quasi optio accusamus, ea quibusdam ratione, est quas qui commodi obcaecati necessitatibus saepe fuga dolore temporibus esse.
          Eos laudantium voluptatum provident, hic quo dolorem illum, aliquam iusto atque minima fugit mollitia reiciendis cupiditate iure, voluptatem vel earum ex odit quidem itaque. Deserunt optio vel quod incidunt libero.
          Aspernatur cum quidem dolores distinctio inventore blanditiis nobis, nihil facere ipsam, nulla, odit ut repellendus alias perferendis cupiditate. Eveniet accusantium nam corporis velit veniam laboriosam cupiditate ullam dolorem laborum obcaecati.
          Rerum laudantium sunt, similique quasi corrupti delectus architecto et nihil veniam minima. Facilis quia itaque temporibus error officia magni adipisci delectus vel iure? Nemo, ratione blanditiis optio facere laborum temporibus?
          Repudiandae facilis atque qui aliquid soluta voluptatum sunt, fugit dolorem ipsam iure nisi asperiores quos vitae enim veritatis molestias reiciendis rem, iusto non eius hic nam. Exercitationem ipsum at perferendis!
          Quaerat asperiores quisquam ipsam! Facere, magni hic? Dignissimos corporis, tempore ullam omnis dolorum perferendis voluptatibus enim voluptates necessitatibus maiores esse commodi sit porro tempora ad assumenda voluptate ut vitae? Praesentium.
          Exercitationem, perferendis. Esse architecto consectetur ea. Iure, quod. Labore, voluptatibus veniam culpa nesciunt libero obcaecati eius recusandae, nobis maxime ipsum numquam, beatae ipsam magnam? Dolorem accusantium quasi temporibus et vel?
          Dolores atque explicabo, expedita fugiat illum dicta similique quibusdam recusandae eligendi quaerat maiores! Consequuntur fugiat nam, error quae ipsam commodi? Accusantium perferendis modi recusandae praesentium quia, deserunt quis nulla incidunt!
          Pariatur ullam quidem aliquid cumque distinctio quasi, nostrum cum exercitationem blanditiis alias eligendi quis quia et! Fugiat exercitationem aliquam nisi incidunt, culpa, vel molestiae provident blanditiis perspiciatis voluptas consequatur sapiente!
          Esse sit sequi distinctio dolorem culpa recusandae modi, id neque? Dolores excepturi nihil ducimus consectetur porro in modi voluptates. Nisi cupiditate ut velit mollitia sint? Numquam cupiditate magni alias corporis.
          Iusto magnam, temporibus accusamus laborum ad quasi qui maiores. Odit quasi odio laudantium cupiditate libero illum, neque iste asperiores suscipit consequuntur cum assumenda nisi at est alias. Tenetur, tempore quis.
          Porro ipsam labore adipisci veniam inventore amet ipsa quaerat consequuntur, officia animi voluptas quae perferendis esse tempora! Facere quae, aspernatur eligendi, voluptates, ut dolorum dolorem sed et recusandae vero ipsum.
          Quisquam, libero? Ipsum expedita illo voluptatum, enim animi quam odio consequatur quo hic cupiditate qui nobis ipsa accusantium. A mollitia debitis ex minus eius, velit similique porro natus quae! Fuga.
          Aliquid possimus rem repellat labore esse perferendis, quasi autem nostrum doloremque, ipsa minus debitis dolore odit dolor, corrupti ducimus! Consequatur nostrum saepe quibusdam animi. Quasi debitis aliquid saepe iusto ea?
          Iusto maxime sed reiciendis accusamus distinctio quibusdam natus adipisci minima, nisi vel facere quos provident numquam tenetur alias cupiditate recusandae esse nostrum placeat aperiam tempore officia delectus! Quae, laborum error.
          Laborum architecto assumenda porro at nobis iure unde a mollitia quia, ex, velit praesentium iusto autem voluptate eveniet ullam dicta nisi! Saepe blanditiis, quasi quos dolore cupiditate ipsam sapiente ad!
          Amet dolorum molestias eligendi maiores iure impedit voluptatem a, minima explicabo eum vero adipisci quidem laborum aut! Ducimus, amet! Neque sapiente labore repudiandae tempore est impedit quam, numquam repellendus quis?
          Blanditiis ea quam atque harum natus saepe nostrum quis, esse vel ab voluptates repellendus odit eaque rem et! Quis magnam expedita fuga, incidunt nulla totam mollitia velit. Voluptatum, aliquam libero?
          Reprehenderit libero eveniet nemo non laborum molestiae labore magnam nihil exercitationem rerum qui accusamus totam, esse nostrum eligendi odit odio dolores, ut minus consequatur dolore repellendus. Ratione enim alias animi.
          Nam sequi commodi doloribus repudiandae laborum inventore culpa temporibus, quos obcaecati magnam voluptate est quia accusantium, quasi earum, cumque unde! Incidunt et ipsa, iure expedita veniam hic doloremque atque sed.
          Vel qui ratione saepe doloremque optio ad quidem repudiandae illum, quas fuga quisquam accusantium expedita voluptatem temporibus praesentium facere ex omnis numquam facilis? Labore aspernatur ab temporibus nesciunt provident magni.
          Tempore fugiat, hic dolorum quasi autem veritatis voluptates ab voluptatem? Minima omnis dolor quos explicabo libero voluptate autem eius id obcaecati consequatur est, eveniet cupiditate fuga nostrum in maiores illum?
          Doloremque atque quo magnam asperiores soluta, debitis recusandae aliquid ipsa neque velit pariatur corrupti a necessitatibus expedita quaerat quia laborum accusamus illo consectetur facilis. Nesciunt impedit adipisci assumenda dicta laboriosam?
          Optio architecto quae quibusdam voluptate quos ipsa delectus corrupti quidem nemo reiciendis sapiente soluta animi eveniet, esse aut eaque ad sed sequi libero unde, fuga cumque consequatur? Dolor, doloremque voluptatum?
          Pariatur vel optio sapiente aliquam velit blanditiis perspiciatis rerum fugiat nesciunt asperiores quas voluptate ratione voluptatibus, veritatis ad natus modi sed, numquam eius? Quae facere cumque qui possimus aut inventore!
          Eveniet, ipsam? Nostrum excepturi a, illo sit saepe neque dolor obcaecati, rem tempora explicabo iure laudantium enim aliquid commodi aut corporis? Nihil reiciendis alias nemo dignissimos dolores aliquam molestias vitae?
          Est laudantium accusantium aliquid consequatur iste blanditiis omnis corporis ab tempore eaque perferendis rerum quam recusandae, dolorum unde. Officiis animi dolorem pariatur omnis ea aliquam obcaecati accusamus delectus, perferendis excepturi.
          Soluta esse aut, asperiores sequi magnam eligendi dolor cupiditate neque, excepturi, est in. Sit natus maxime expedita deserunt aspernatur molestias consectetur labore praesentium quis aliquid, architecto sed dolorem laboriosam qui.
          Nihil debitis assumenda itaque culpa animi nulla, ut voluptas dolore tempore repudiandae iure natus est qui necessitatibus tempora accusamus aperiam earum quibusdam mollitia beatae magnam ipsa. Vero ducimus suscipit natus?
          Corporis dignissimos modi laboriosam voluptatibus exercitationem facere quia accusamus. Vero debitis, autem ut officiis explicabo beatae quos maiores tempora amet voluptatem illo dolores rem magni ducimus, cum tenetur dicta iusto.
          Dolor cupiditate perferendis neque pariatur recusandae soluta maiores ratione excepturi totam ipsa sunt, reprehenderit officia odio ducimus nesciunt facilis tenetur. Error iure facere, fuga corporis deleniti mollitia nisi maxime quis.
          Et ducimus nulla natus, voluptate, deleniti officiis libero dicta voluptas facere perferendis laborum consequuntur ipsam, quisquam illum aliquid sapiente ratione exercitationem voluptatibus enim laudantium. Qui provident consectetur cumque tenetur aut.
          Facere laudantium laboriosam, numquam nostrum rem vel labore, quaerat asperiores provident, ratione recusandae repudiandae id modi quam cum quibusdam nesciunt. Quibusdam voluptatibus accusantium alias corrupti commodi a distinctio omnis reprehenderit?
          Ut exercitationem sed dolores mollitia eius atque consequuntur nesciunt quaerat illo numquam laborum, voluptate pariatur, reiciendis magnam, itaque cumque neque beatae explicabo dolorem velit reprehenderit. Rerum repellat cum natus eius?
          Nobis, dignissimos id enim necessitatibus cumque quae dolor! Sint neque iusto tempore enim, nemo mollitia vel amet cum est voluptate at! Adipisci vel unde quasi ducimus labore nisi, omnis veritatis.
          Temporibus tenetur adipisci, aut, fugiat aperiam qui earum, consectetur quos voluptatem nemo totam minus. Vitae quisquam voluptate quis aut cum consectetur, beatae cumque, ducimus enim quod neque quia sunt voluptates?
          Nisi facere error reiciendis magni fugit. Consequatur voluptatem cumque enim officia molestias ab, perspiciatis iste numquam officiis dolore eveniet. Iusto dolores saepe nisi incidunt odio perferendis natus placeat aut minima?
          Sint molestiae illo corporis quibusdam illum fugit minus, voluptatum animi deserunt non? Voluptatum placeat cum vero, itaque voluptates nisi voluptatem dignissimos ratione quisquam unde assumenda temporibus quam ipsum atque error.
          Deleniti quis dolorem quas ipsam sequi temporibus numquam dolor doloribus magnam veritatis repudiandae esse maiores, quos, hic ipsum obcaecati repellendus mollitia iure veniam iste est? Minus repellat aliquid explicabo voluptatum.
          Minima, perferendis. Tempora totam, a consequatur sapiente inventore vitae, praesentium maiores sint optio soluta necessitatibus aut illum eius cum ipsam facilis dolor aliquid dolores voluptas quasi! Eius, perferendis! Amet, similique?
          Nulla quia quo aut tenetur odio illo blanditiis nemo, tempora perspiciatis a voluptate recusandae autem expedita laudantium fugiat nesciunt in rerum accusantium, impedit cupiditate quidem sequi dolor aliquid libero. Dolore.
          Consectetur facilis, enim nam ratione nihil blanditiis accusantium neque magni maxime odio assumenda, alias aliquam voluptas optio animi aperiam ea provident ullam repellat. Veritatis, obcaecati alias. Maiores corporis alias quos.
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Public;
