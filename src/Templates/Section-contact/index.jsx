import { Footer } from "../../Components/Footer";
import {
  CopyIcon,
  InstagramLogo,
  MailLogo,
  WhatsappLogo,
} from "../../Components/svg/Social";

export const Contact = () => {
  return (
    <section id="contact">
      <div className="general-spacing"></div>
      <h1 className="contact-title">Contato</h1>
      <div className="contact-info">
        <a
          href="https://wa.me/5541999771495"
          target="_blank"
          className="contact-whatsapp"
          rel="noreferrer"
        >
          <WhatsappLogo />
          <p>+55 (41) 99977-1495</p>
        </a>
        <div className="contact-mail-wrapper">
          <a
            href="mailto:cinthiagoch@gmail.com?Subject=Solicitação%20de%20orçamento&Body=Nome:%20%0AWhatsApp:%20%0ATipo%20de%20serviço:%20%0A(Em%20caso%20de%20tradução,%20favor%20anexar%20o%20documento%20a%20ser%20traduzido.)"
            target="_blank"
            className="contact-mail"
            rel="noreferrer"
          >
            <MailLogo />
            <p>cinthiagoch@gmail.com</p>
          </a>
          <button
            className="copy-button"
            onClick={() =>
              navigator.clipboard.writeText(
                "cinthiagoch@gmail.com",
              )
            }
          >
            <CopyIcon />
          </button>
        </div>
        <a
          href="https://www.instagram.com/cinthiagoch"
          target="_blank"
          className="contact-instagram"
          rel="noreferrer"
        >
          <InstagramLogo />
          <p>Instagram</p>
        </a>
      </div>
      <Footer />
    </section>
  );
};
