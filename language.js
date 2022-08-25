const switchLangButton = document.getElementById("switch_lg_btn");
const outputHeader = document.getElementById("js-header-text");
const outputContent = document.getElementById("js-content-text");
const outputTitleEl = document.getElementById("js-content-title");
const outputWordsEl = document.getElementById("js-content-words");
const outputWordsFinalEl = document.getElementById("js-content-words-final");
const outputSongsTitle = document.getElementById("js-songs-title");
const outputFogTxt = document.getElementById("js-songs-fog");
const outputPineTxt = document.getElementById("js-songs-pine");
const outputCherryTxt = document.getElementById("js-songs-cherry");
const outputRiverTxt = document.getElementById("js-songs-river");
const outputRoseTxt = document.getElementById("js-songs-rose");
const outputFirePineTxt = document.getElementById("js-songs-fire-pine");
const outputMooseTxt = document.getElementById("js-songs-moose");

const textOnPage = [
  {
    key: "BY",
    headerTxt:
      '"Замо́ва" — старажытны жанр народнай паэзіі, слоўная формула, якой надавалася магічнае значэньне.',
    contentTxt: `Наш праект гэта даслед на тэму з'яулення народнай песні яе роля ў жыцці продкаў і ў жыцці сучаснага соцыўма. 
    Эксперымент на конт магчымай актуалізацыі народнай творчасці ў сучасным уяўленні, актуалізацыя народнай песні.`,
    wordsTxt: `Дрэва без каранёў не бывае. Ёсць свае карані і ў
    кожнага з нас. I ўваходзяць яны ў глыбіню стагоддзяў.
    Праўда, не заўсёды лёгка іх адшукаць, дакапацца да іх. Не
    ва ўсіх, далёка не ва ўсіх продкі чым-небудзь вызначыліся,
    праславіліся. Ды і хто яны такія, каб трапляць на старонкі
    летапісаў ці ў аналы гісторыі?
    У большасці гэта былі звычайныя, простыя людзі –
    асочвалі звяроў, лавілі рыбу, засявалі поле, даглядалі
    худобу, гадавалі дзяцей, словам, жылі. Жылі ціха,
    малапрыкметна. Так і паміралі.
    Што хвалявала нашых продкаў, пра што яны думалі,
    блукаючы, ходзячы па лесе, працуючы на пажарышчах,
    палянах, у балоце? Ці калі дома, у куранях і хатах, сядзелі ў
    доўгія цёмныя асеннія вечары і ночы, у зімовыя халады і
    сцюжы, у асеннюю бездараж і вясновае разводдзе?
    Калі я бываю дома, там, дзе нарадзіўся, я падоўгу стаю на
    могілках – яны ў нас трохі ўбаку ад вёскі, на пагорку,
    парослым старым і маладым хвойнікам, – і, гледзячы на
    крыжы, – чорныя, падгнілыя, а некаторыя і паваленыя,
    амшэлыя, – думаю пра гэта. I разгадку спрабую шукаць у тых песнях, казках, легендах,
    прыказках і прымаўках, што пакінулі продкі і якія чуў я ў
    маленстве, на якіх выхоўваўся, рос, як кажуць у нас, на лес
    гледзячы...`,
    finalTxt: `
    Узыходзіць сонца і заходзіць... Святло – цемра, дзень –
    ноч... I зноў: святло – цемра, дзень – ноч... Прылятаюць з
    выраю птушкі і адлятаюць у вырай... Зелянеюць дрэвы,
    кусты і жаўцеюць, скідваюць з сябе лісце, астаюцца быццам
    голыя... Падае ў зямлю зерне, прарастае, дае ўсходы і
    новае зерне – новае насенне... Вясна, лета, восень, зіма... I
    зноў: вясна, лета, восень, зіма... За адным пакаленнем
    людзей ідзе яшчэ і яшчэ пакаленне... Што значым ты, я, ён,
    яна, усе мы ў гэтым няспынным і вечным кругазвароце? 
    Нараджаемся, жывём, паміраем... Як нараджаліся, жылі і
    памёрлі многія-многія мільёны, мільярды ўжо да нас. У чым
    сэнс чалавечага існавання, жыцця, з’яўлення на свет?
    Дзеля чаго нараджаліся і нараджаемся, што павінны
    зрабіць, пакінуць нашчадкам, тым, хто прыйдзе на змену,
    будзе жыць пасля нас? У каго спытаць, хто, хто скажа,
    навучыць?.. А можа... I не спрабаваць шукаць адказу, не
    думаць пра тое, чаго пры ўсім сваім жаданні ўсё адно не
    ўведаеш, не пытаць ні ў кога ні пра што, а жыць, як
    набяжыць... Жыць, як жылі бацькі, дзяды, прадзеды нашы...
    А яны... Што ведаем мы пра іх, нашых бацькоў, дзядоў,
    прадзедаў, пра іхняе жыццё-быццё, іхнія думкі і мары,
    клопат і дбанне? Ну не пра ўсіх, хто жыў даўным-даўно, дык
    хоць бы пра свой род, сваіх продкаў?..`,
    titleTxt: "Tэкст выкарыстаны у спектаклі",
    songsTxt: `Песні`,
    behindFog: `За туманам Нічаго не відна...
     Толькі відна Дуба зелянога.
    Пад тым дубам Крыніца стаяла.
     З той крыніцы Дзеўка ваду брала.
     Абараніла Залатое калечка.
     "А хто ж тое Калечка дастане,
    Той са мною На рушнічак стане." (возьме ў жены)
    Адазваўся Хлопец маладзенькі:
    "А я ж тваё Калечка дастану,
    Я ж з табою На рушнічак стану!"
    "Лепей буду Палын горкі есці, 
    Чым з табою За столікам сесці!"`,
    pine: `Зашумела сасоначка Над усходам сонца.
    Заплакала дзяўчынанька, Гледзячы ў аконца.
    "А мая ж ты, матуленька! Чаму не будзіла,
    Як першая кампанячка У войска вырушыла?"
    "А мая ж ты, дачушанька! Таму не будзіла,
    Што твой мілы ўпярод пайшоў, Каб ты не тужыла"
    "А мая ж ты, матуленька! Не тужу, не плачу,
    Толькі выйду на вулачку - Сцежачкі не бачу!"
    "А мая ж ты матуленька! Купі ты мне шоўку-
    Буду шыць і вышываці Міламу кашульку."
    Шыла-шыла, вышывала-Не хваціла шоўку.
    Любілася - кахалася, Да не знала толку.`,
    cherry: `Зялёная вішня З-пад кораня выйшла.
    Аддала ж  мяне маці Дзе я непрывычна.
    Як выйду на гору Ды  крыкну дадому:
    "Вары, маці, вячэру Шчэ і на маю долю!"
    "Ты думаеш, мама. Што я тут не плачу -
    За горкімі слязамі Я свету не бачу.
    Ты думаеш, мама, Што я тут раюю-
    Прыдзі, падзівіся, Як я тут гарую.
    Успамяні ж мяне, мама, Хоць раз у суботу,
    Як я успамінаю, Ідучы на работу.
    Успамяні ж мяне, мама, Хоць раз у нядзелю,
    Як я успамінаю Сцелючы пасцелю.
    Успамяні ж мяне, мама, Хоць раз у аўторак,
    Як я успамінаю на дзень Разоў сорак."`,
    river: `...`,
    rose: ` А ў садзе ружа, Мілы мой Божа -
    Несчасна мая Доль.
    Не порадзіны, Не колядзіны -
    Не родныя Мамкі. 
    Пасылала б я Чорну галачку
    На той свет Па мамку.
    Сакаліначку На Украіначку
    На сваю Радзімку.
    Саколік ляціць Не далётае
    Мамачка даўно Ждзёць.
    "Ой, рада б я ўстаць,
    Мае дзіцяці - Парадак Павесці.
    Бо сыра зямля На грудзі лягла -
    Не магу я Устаці.
    Сасновы дошкі Сціснулі ножкі -
    Не магу пайсці, Ісці."`,
    firePine: `Агу, вясна! Агу, красна!
    А што ж ты нам прынесла?
    Весначуха-балбатуха, 
    Воран крача- Сыра хоча! Сыра хоча,
    Дзеўка плача - Замуж хоча!
    Не крач, воран - Накрачэшся!
    Не плач, дзеўка - Наплачэшся!
    Воран крача-Сыра з'еўшы,
    Дзеўка плача Сына меўшы.
    Гарэла сосна, Палала.
    Пад ёю дзеўка Стаяла.
    Рускую косу Часала.
    "Ой, косы-косы Вы ж мае!
    Мала служылі Вы ў мяне!
    Ой, больш служыць Не будзеце!
    Пад белы вялён (вэлюм) Пойдзеце!"`,
    moose: ` Ой злавілі Ды сівогога лося У гаросе.
    Як і пачула Яно старая ласіца У лузе.
    Як і кінула Крутыя рогі Пад ногі.
    "Няхай мае Крутыя рогі Прападуць!
    Куды ж майго Сівога лася Павядуць?"`,
  },
  {
    key: "PL",
    headerTxt:
      '"Zamova" to starożytny gatunek poezji ludowej, formuła słowna, której nadano magiczne znaczenie.',
    contentTxt: `Nasz projekt jest badaniem powstawania pieśni ludowej, jej roli w życiu naszych przodków oraz w życiu współczesnego społeczeństwa.
    Eksperyment nad możliwą aktualizacją sztuki ludowej we współczesnej wyobraźni, aktualizacja pieśni ludowej.`,
    wordsTxt: `Nie ma drzewa bez korzeni. Ma swoje korzenie w
    każdy z nas. I wchodzą w głąb wieków.
    Jednak nie zawsze jest łatwo je znaleźć, dotrzeć do nich. Nie
    w sumie, daleko od wszystkiego, przodkowie w jakiś sposób wyróżniali się,
    stać się sławnym. I kim oni są, aby dostać się na strony?
    w annałach czy w annałach historii?
    Większość z nich to zwykli, prości ludzie -
    polowali na zwierzęta, łowili ryby, obsiewali pole, dbali o nie
    żywy inwentarz, wychowane dzieci, jednym słowem, żyły. Mieszkałem spokojnie
    niepozorny. Tak zginęli. Co martwiło naszych przodków, o czym myśleli
    wędrówki, spacery po lesie, praca w remizach strażackich,
    polany na bagnach? Albo kiedy w domu, w kurnikach i domach, siedziałem w
    długie ciemne jesienne wieczory i noce, zimą mroźne i
    zimno, jesienią bezdrożność i wiosenny rozwód?
    Kiedy jestem w domu, gdzie się urodziłam, stoję bardzo długo
    cmentarz - mamy go trochę za wsią, na wzgórzu,
    porośnięte starymi i młodymi iglakami, - i patrząc na
    krzyże, - czarne, zgniłe, a niektóre nawet powalone,
    omszały, - myślę o tym. Staram się znaleźć rozwiązanie w tych piosenkach, bajkach, legendach,
    przysłowia i powiedzenia, które moi przodkowie odeszli i które słyszałem w
    dzieciństwo, w którym się wychował, wyrosło, jak mówią w naszym kraju, na lesie
    oglądanie...Kogo to obchodzi, on jest właścicielem...
    Świat nie jest pozbawiony dobrych ludzi...
    I będziemy żyć i będziemy bawić się, a śmierć nadejdzie - umrzemy.`,
    finalTxt: `
    Słońce wschodzi i zachodzi... Światło - ciemność, dzień -
    noc... I znowu: światło - ciemność, dzień - noc... Lecą z
    ptaki odlatują i odlatują... drzewa zielenieją,
    krzaki też żółkną, opadają liście i pozostają jakby
    nagi... Ziarno wpada do ziemi, kiełkuje, daje kiełki i
    nowe ziarno - nowe ziarno... Wiosna, lato, jesień, zima... I
    znowu: wiosna, lato, jesień, zima... Jedno pokolenie później
    pokolenie za pokoleniem... Co ty, ja, on ma na myśli?
    ona, my wszyscy w tym nieustannym i wiecznym cyklu? Rodzimy się, żyjemy, umieramy... Jak się rodziliśmy, żyliśmy
    wiele, wiele milionów, miliardów zmarło przed nami. W czym
    sens ludzkiej egzystencji, życia, narodzin?
    Za to, co urodziliśmy się i urodziliśmy, co powinniśmy
    zrobić, pozostawić potomnym, tym, którzy przyjdą się zmienić,
    będzie żyć po nas? Kogo zapytać, kogo, kto powie
    uczyć?... A może... nie będę próbował znaleźć odpowiedzi, nie
    myśleć o czymś, co pomimo całego pragnienia, wciąż nie jest
    nauczysz się nie pytać nikogo o nic, ale żyć jak
    uciekać... żyć tak, jak żyli nasi rodzice, dziadkowie, pradziadkowie...
    A oni... Co o nich wiemy, nasi rodzice, dziadkowie,
    pradziadkowie, o swoim życiu, swoich myślach i marzeniach,
    troska i troska? Cóż, nie o wszystkich, którzy żyli dawno temu
    przynajmniej o twojej rodzinie, twoich przodkach?`,
    titleTxt: "Tekst użyty w sztuce",
    songsTxt: `Piosenki`,
    behindFog: ` Za mgłą Nie widzę nic...
     Tylko widoczne Zielony dąb.
    Pod tym dębem Strumień płynął.
     Z tego strumienia Dziewczyna wzięła wodę.
     Upuszczony Złoty pierścionek.
     "A kto to jest? Pierścień dostanie
    Ten ze mną Stanie się ręcznikiem. (poślubić) 
    odpowiedział Młody chłopak:
    "Jestem twój dostanę pierścionek
    jestem z tobą Stanę na ręczniku!"
    "Wolałbym Piołun jest zjadany
    A ty Usiądź przy stole!”`,
    pine: `Sosna wydała dźwięk Nad wschodem słońca.
    Dziewczyna płakała Patrząc przez okno.
    „A ty jesteś moja, mamo! Dla czego się nie obudziłeś
    Jako pierwsza Grupa ludzi Czy wstąpiłeś do armii?
    "A ty jesteś moja, mała dziewczynko! Dla tego się nie obudziłem
    Że twoja ukochana odeszła Abyś nie tęsknił"
    „A ty jesteś moja, mamo! Nie tęsknię, nie płaczę
    Po prostu wyjdę na ulicę - Nie widzę ścieżki!”
    „A ty jesteś moją matką! kup mi jedwab-
    Uszyję i wyszyję Urocza koszula."
    Szyte, szyte, haftowane - Zabrakło jedwabiu.
    Kochany - kochany Nie wiedziałem, o co chodzi.`,
    cherry: `Spod korzenia wyszła zielona wiśnia.
    Moja mama dała mi miejsce, do którego nie jestem przyzwyczajony.
    Gdy wejdę na górę, krzyknę do domu:
    "Gotuj, mamo, obiad dla mnie też!"
    "Myślisz, mamo. Że tu nie płaczę -
    Za gorzkimi łzami nie widzę świata.
    Czy myślisz, mamo, co tutaj polecam-
    Chodź, zobacz jak tu płonę.
    Zapamiętaj mnie mamo, przynajmniej raz w sobotę,
    Jak pamiętam do pracy.
    Zapamiętaj mnie mamo, przynajmniej raz w niedzielę,
    Jak pamiętam leżałem w łóżku.
    Zapamiętaj mnie mamo, chociaż raz we wtorek,
    Jak pamiętam w dniu czterdziestu czasów”.`,
    river: `...`,
    rose: `A w ogrodzie jest róża, mój drogi Boże -
    Mój los jest niefortunny.
    Nie rodziny, nie Boże Narodzenie -
    Nie rodzima mama.
    Wysłałbym czarny znacznik wyboru
    Na tamten świat, mamo.
    Sakolinachku na Ukrainiechku
    Do mojej ojczyzny.
    Sokół leci, nie lata
    Mamusia czekała bardzo długo.
    "Och, chciałbym móc wstać,
    Moje dzieci - Rozkaz przyniesienia.
    Ponieważ mokra ziemia leżała na piersi -
    Nie mogę wstać.
    Deski sosnowe Ściśnięte nogi -
    Nie mogę iść, Idź."`,
    firePine: `Ach, wiosna! Och, jest czerwony!
    A co nam przyniosłeś?
    Sprężynowiec gadułą,
    Wrona rechocze - Ser chce! ser chce
    Dziewczyna płacze - chce wyjść za mąż!
    Nie przestawaj, wrona - przestaniesz!
    Nie płacz dziewczyno - będziesz płakać!
    Kruk kruk, po zjedzeniu sera,
    Dziewczynka płacze z synem.
    Sosna płonęła, Palala.
    Pod nią stała dziewczyna.
    Rosyjski warkocz Chasali.
    „Och, warkocze, warkocze, jesteś mój!
    Trochę mi służyłeś!
    Och, już nie będziesz służyć!
    Pod białą zasłoną (welon) Idź!"`,
    moose: `Och, złapali szarego łosia w lesie.
    Jak stara łasica usłyszała to na łące.
    Gdy rzuciła strome rogi pod jej stopy.
    „Niech moje fajne rogi znikną!
    Dokąd zabiorą mojego szarego łosia?`,
  },
  {
    key: "EN",
    headerTxt:
      '"Zamova" is an ancient genre of folk poetry, a verbal formula that was given a magical meaning.',
    contentTxt: `Our project is a research on the emergence of a folk song, its role in the life of our ancestors and in the life of modern society.
    An experiment on the possible actualization of folk art in the modern imagination, actualization of a folk song.`,
    wordsTxt: `There is no tree without roots. It has its roots in
    each of us. And they enter the depths of centuries.
    However, it is not always easy to find them, to get to them. No
    in all, far from all, ancestors distinguished themselves in some way,
    became famous. And who are they to get on the pages
    annals or in the annals of history?
    Most of them were ordinary, simple people -
    they hunted animals, caught fish, sowed the field, took care of it
    livestock, raised children, in a word, lived. Lived quietly
    inconspicuous. That's how they died. What worried our ancestors, what they thought about
    wandering, walking in the forest, working at the fire stations,
    clearings, in the swamp? Or when at home, in chicken coops and houses, sat in
    long dark autumn evenings and nights, in winter cold and
    cold, in the autumn roadlessness and spring divorce?
    When I'm at home, where I was born, I stand for a long time
    cemetery - we have it a little away from the village, on a hill,
    overgrown with old and young conifers, - and, looking at
    crosses, - black, rotten, and some even fallen,
    mossy, - I think about it. And I try to find the solution in those songs, fairy tales, legends,
    proverbs and sayings that my ancestors left and that I heard in
    childhood, in which he was brought up, grew, as they say in our country, on a forest
    watching... Who cares, he owns...
    The world is not without good people...
    And we will live, and we will play, and death will come - we will die.`,
    finalTxt: `The sun rises and sets... Light - darkness, day -
    night... And again: light - darkness, day - night... They fly from
    the birds fly away and fly away... the trees turn green,
    the bushes also turn yellow, drop their leaves, and remain as if
    naked... A seed falls into the ground, germinates, gives sprouts and
    new grain - new seed... Spring, summer, autumn, winter... I
    again: spring, summer, autumn, winter... One generation later
    generation after generation... What do you, I, he mean?
    she, all of us in this ceaseless and eternal cycle? We are born, we live, we die... As we were born, we lived
    many, many millions, billions died before us. In what
    the meaning of human existence, life, birth?
    For what we were born and we are born, what we should
    to make, to leave to posterity, to those who will come to change,
    will live after us? Who to ask, who, who will tell
    teach?... Or maybe... I won't try to find an answer, no
    to think about something that, despite all one's desire, is still not
    you will learn not to ask anyone about anything, but to live how
    to run... To live as our parents, grandfathers, great-grandfathers lived...
    And they... What do we know about them, our parents, grandfathers,
    great-grandfathers, about their life-being, their thoughts and dreams,
    care and concern? Well, not about everyone who lived a long time ago, then
    at least about your family, your ancestors?...`,
    titleTxt: "Text used in the play",
    songsTxt: `Piosenki`,
    behindFog: `Behind the fog Everithing is hidden...
     only green oak is visible.
    a stream flows under this oak.
     From this steam the girl take water.
     she drop on the steam her golden ring.
     "And who can find this ring,
    that person stand with me
     on a towel. (merry me)"
    Yang men answered:
    "I will find your ring. I will stand with you on a towel!"
    "It's better to eat bitter sagebrush, 
    than sit with you at the table!"`,
    pine: `The pine tree made a noiseAbove the sunrise.
    The girl cried Looking out the window.
    "And you are mine, mother! Why didn't you wake up
    As the first company Did you join the army?"
    "And you are mine, little girl! That's why I didn't wake up
    That your sweetheart has gone So that you don't miss"
    "And you are mine, mother! I don't miss, I don't cry
    I'll just go out into the street - I can't see the path!"
    "And you are my mother! buy me silk-
    I will sew and embroider Sweet shirt."
    Sewed, sewed, embroidered-There was not enough silk.
    Loved - loved I didn't know the point.`,
    cherry: `A green cherry came out from under the root.
    My mother gave me where I am not used to.
    As I climb the mountain, I will shout home:
    "Cook, mother, dinner for me too!"
    "You think, mom. That I'm not crying here -
    Behind the bitter tears I do not see the world.
    Do you think, mom, What am I recommending here-
    Come, see how I burn here.
    Remember me, mother, At least once on Saturday,
    As I remember, going to work.
    Remember me, mom, At least once on Sunday,
    As I remember, I was lying in bed.
    Remember me, mom, even once on Tuesday,
    As I remember on the day of the Forty Times."`,
    river: `...`,
    rose: `And there is a rose in the garden, my dear God -
    My fate is unfortunate.
    Not families, not Christmas -
    Not native Mom.
    I would send a black check mark
    To the other world, Mom.
    Sakolinachku On Ukrainachku
    To my homeland.
    The falcon flies. It does not fly
    Mommy has been waiting for a long time.
    "Oh, I wish I could get up,
    My children - The order to bring.
    Because the wet earth lay on the chest -
    I can not get up.
    Pine boards Squeezed the legs -
    I can't go, Go."`,
    firePine: `Ah, spring! Oh, it's red!
    And what did you bring us?
    Spring-eared chatterbox,
    Crow croaks - Cheese wants! cheese wants
    The girl is crying - She wants to get married!
    Don't stop, crow - you will stop!
    Don't cry, girl - You'll cry!
    The raven raven, having eaten the cheese,
    A girl is crying with her son.
    The pine was burning, Palala.
    A girl was standing under her.
    Chasala's Russian braid.
    "Oh, braids, braids, you are mine!
    You served me a little!
    Oh, you won't serve anymore!
    Under the white veil (veil) Go!"`,
    moose: `Oh, they caught a gray moose in the forest.
    As the old weasel heard it in the meadow.
    As she threw the steep horns Under her feet.
    "Let my Cool Horns Be Vanished!
    Where will they take my gray elk?"`,
  },
];

let count = 0;

const changeTextFunc = (num) => {
  outputHeader.textContent = textOnPage[num].headerTxt;
  outputContent.textContent = textOnPage[num].contentTxt;
  outputTitleEl.textContent = textOnPage[num].titleTxt;
  outputWordsEl.textContent = textOnPage[num].wordsTxt;
  outputWordsFinalEl.textContent = textOnPage[num].finalTxt;
  outputSongsTitle.textContent = textOnPage[num].songsTxt;
  outputFogTxt.textContent = textOnPage[num].behindFog;
  outputPineTxt.textContent = textOnPage[num].pine;
  outputCherryTxt.textContent = textOnPage[num].cherry;
  outputRiverTxt.textContent = textOnPage[num].river;
  outputRoseTxt.textContent = textOnPage[num].rose;
  outputFirePineTxt.textContent = textOnPage[num].firePine;
  outputMooseTxt.textContent = textOnPage[num].moose;
};

const switchLang = (e) => {
  e.stopPropagation();

  if (count < textOnPage.length - 1) {
    count += 1;
    e.target.textContent = textOnPage[count].key;
    changeTextFunc(count);
  } else {
    count = 0;
    e.target.textContent = textOnPage[count].key;
    changeTextFunc(count);
  }
};

switchLangButton.addEventListener("click", switchLang);
