const switchLangButton = document.getElementById("switch_lg_btn");
const outputHeader = document.getElementById("header-text");
const outputContent = document.getElementById("content-text");

const textOnPage = {
  by: {
    key: "BY",
    headerTxt:
      "Замо́ва — старажытны жанр народнай паэзіі, слоўная формула, якой надавалася магічнае значэньне.",
    contentTxt: `Асэнсаванне сувязі культуры, мовы, песні як сродкаў сувязі з радзімай. 
    Даслед на тэму з'яулення народнай песні яе роля ў жыцці продкаў і у жыцці сучаснага соцыўма. 
    Мова як праява нацыянальнай ідэнтычнасці.
    Эксперымент на конт магчымай актуалізацыі народнай творчасці ў сучасным уяўленні, актуалізацыя народнай песні.`,
  },
  pl: {
    key: "PL",
    headerTxt:
      "Zamova to starożytny gatunek poezji ludowej, formuła słowna, której nadano magiczne znaczenie.",
    contentTxt: `Zrozumienie związku kultury, języka i pieśni jako środków komunikacji z ojczyzną.
    Badania nad powstawaniem pieśni ludowej, jej rolą w życiu przodków oraz w życiu współczesnego społeczeństwa.
    Język jako przejaw tożsamości narodowej.
    Eksperyment nad możliwą aktualizacją sztuki ludowej we współczesnej wyobraźni, aktualizacja pieśni ludowej.`,
  },
  en: {
    key: "EN",
    headerTxt:
      "Zamova is an ancient genre of folk poetry, a verbal formula that was given a magical meaning.",
    contentTxt: `Understanding the connection between culture, language, and song as means of communication with the motherland.
    Research on the emergence of a folk song, its role in the life of ancestors and in the life of modern society.
    Language as a manifestation of national identity.
    An experiment on the possible actualization of folk art in the modern imagination, actualization of a folk song.`,
  },
};

const switchLang = (e) => {
  e.stopPropagation();
  if (e.target.textContent === "BY") {
    e.target.textContent = textOnPage.pl.key;
    outputHeader.textContent = textOnPage.pl.headerTxt;
    outputContent.textContent = textOnPage.pl.contentTxt;
  } else if (e.target.textContent === "PL") {
    e.target.textContent = textOnPage.en.key;
    outputHeader.textContent = textOnPage.en.headerTxt;
    outputContent.textContent = textOnPage.en.contentTxt
  } else if (e.target.textContent === "EN") {
    e.target.textContent = textOnPage.by.key;
    outputHeader.textContent = textOnPage.by.headerTxt;
    outputContent.textContent = textOnPage.by.contentTxt
  }
};

switchLangButton.addEventListener("click", switchLang);
