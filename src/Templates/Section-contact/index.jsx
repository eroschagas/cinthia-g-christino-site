import { useState } from "react";
import { Footer } from "../../Components/Footer";
import {
  CopyIcon,
  InstagramLogo,
  MailLogo,
  WhatsappLogo,
} from "../../Components/svg/Social";
import { useLanguageContext } from "../../Context/Language";

export const Contact = () => {
  const [language] = useLanguageContext();
  const [copy, setCopy] = useState({
    class: "",
    labelpt: "Copiar",
    labelen: "Copy",
  });
  const handleCopyHover = () => {
    setCopy({
      ...copy,
      class: "copy-button-label-display",
    });
  };
  const handleCopyClick = () => {
    setCopy({
      ...copy,
      labelpt: "Copiado",
      labelen: "Copied",
    });
    navigator.clipboard.writeText("cinthiagoch@gmail.com");
  };
  const handleCopyExit = () => {
    setCopy({
      ...copy,
      class: "",
      labelpt: "Copiar",
      labelen: "Copy",
    });
  };
  return (
    <section id="contact">
      <div className="general-spacing"></div>
      {language ? (
        <h1 className="section-title">Contato</h1>
      ) : (
        <h1 className="section-title">Contact</h1>
      )}

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
            href={
              language
                ? "mailto:cinthiagoch@gmail.com?Subject=Solicitação%20de%20orçamento&Body=Nome:%20%0AWhatsApp:%20%0ATipo%20de%20serviço:%20%0A(Em%20caso%20de%20tradução,%20favor%20anexar%20o%20documento%20a%20ser%20traduzido.)"
                : "mailto:cinthiagoch@gmail.com?Subject=Budget%20request&Body=Name:%20%0AWhatsApp:%20%0AJob%20type:%20%0A(In%20case%20of%20translation,%20please%20attach%20the%20document%20to%20be%20translated.)"
            }
            target="_blank"
            className="contact-mail"
            rel="noreferrer"
          >
            <MailLogo />
            <p>cinthiagoch@gmail.com</p>
          </a>
          <div className="copy-button-wrapper">
            <button
              className="copy-button"
              onMouseOver={handleCopyHover}
              onMouseLeave={handleCopyExit}
              onClick={handleCopyClick}
            >
              <CopyIcon />
            </button>
            <div
              className={"copy-button-label " + copy.class}
            >
              {language ? copy.labelpt : copy.labelen}
            </div>
          </div>
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
