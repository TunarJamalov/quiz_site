const htmlQuiz = [
  {
    Question:
      "HTML-də aşağıdakılardan hansı xarici skriptin idxalını göstərmək üçün düzgün yoldur?",
    Answer: "<script src='index.js'></script>",
    Distractor1: "<script add='index.js'></script>",
    Distractor2: "<script adding-js='index.js'></script>",
    Distractor3: "<script js='index.js'></script>",
    Explanation:
      "Skript elementindən istifadə edərək xarici skriptin necə idxal olunacağını göstərmək istəyirsinizsə, o zaman aşağıdakı sintaksisdən istifadə etməlisiniz: <script src='index.js'></script>",
    Link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script"
  },
  {
    Question: "HTML-də favikon daxil etmək üçün hansı teq istifadə olunur?",
    Answer: "<link>",
    Distractor1: "<fav>",
    Distractor2: "<favicon>",
    Distractor3: "<icon>",
    Explanation: "Link etiketi vebsayta favikon əlavə etmək üçün istifadə olunur.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link"
  },
  {
    Question:
      "Aşağıdakılardan hansı HTML-də anchor elementi yaratmağın düzgün yoludur?",
    Answer: "<a href= 'www.audevelopers.com'> AuDevelopers </a>",
    Distractor1: "<a>www.audevelopers.com <AuDevelopers /a>",
    Distractor2: "<a href='www.audevelopers.com' AuDevelopers /a>",
    Distractor3: "<a link='www.audevelopers.com' AuDevelopers > </a>",
    Explanation:
      "HTML-də veb-səhifədə keçidlər yaratmaq üçün anchor elementindən istifadə olunur. Düzgün sintaksis budur: <a href= 'www.audevelopers.com'> AuDevelopers </a>",
    Link: "https://www.freecodecamp.org/news/the-html-a-tag-anchor-tag-example-code/"
  },
  {
    Question: "HTML-də boş etiket dedikdə nə nəzərdə tutulur?",
    Answer: "Boş teq bağlama teqini tələb etmir",
    Distractor1: "HTML-də belə boş etiket anlayışı yoxdur",
    Distractor2: "Boş teqdə heç bir məzmun ola bilməz",
    Distractor3: "Bunların heç biri",
    Explanation:
      "HTML-də boş teqlər bağlanma teqini tələb etməyən teqlərdir.",
    Link: "https://www.freecodecamp.org/news/empty-and-blank-53b9e96151cd/"
  },
  {
    Question:
      "Üçüncü tərəf JavaScript kitabxanasına keçid və onu səhifənizdə əlçatan etmək üçün hansı HTML elementindən istifadə olunur?",
    Answer: "<script>",
    Distractor1: "<input>",
    Distractor2: "<head>",
    Distractor3: "<html>",
    Explanation:
      "Xarici 3-cü tərəf JavaScript kitabxanasına keçid və onun API funksionallığına qoşulmaq üçün <script> elementindən istifadə edə bilərsiniz.",
    Link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs"
  },
  {
    Question: "HTML5-də neçə head elementi var?",
    Answer: "6",
    Distractor1: "4",
    Distractor2: "8",
    Distractor3: "1",
    Explanation: "HTML5-də 6 head elementi var.",
    Link: "https://youtu.be/kUMe1FH4CHE?t=1219"
  },
  {
    Question: "h1 başlıq teqinin şrift ölçüsü nədir?",
    Answer: "2em",
    Distractor1: "3em",
    Distractor2: "3.4em",
    Distractor3: "2.7em",
    Explanation: "h1 elementinin şrift ölçüsü standart olaraq 2em-dir",
    Link: "https://www.freecodecamp.org/news/how-to-change-text-size-in-html/"
  },
  {
    Question: "HTML5-də sənəd növü necə işə salınır?",
    Answer: "<!DOCTYPE HTML>",
    Distractor1: "</DOCTYPE HTML>",
    Distractor2: "</DOCTYPE>",
    Distractor3: "<!HTML>",
    Explanation: "<!DOCTYPE HTML> HTML5 üçün DOCTYPE bəyannaməsidir.",
    Link: "https://www.freecodecamp.org/news/html5-tags-you-might-not-know/"
  },
  {
    Question:
      "HTML-də <div> və <span> teqi arasında nə fərq var?",
    Answer:
      "<div> ümumi blok səviyyəli teq lazım olduğu yerlərdə, <span> isə ümumi daxili teq lazım olduqda istifadə olunur.",
    Distractor1:
      "<div> ümumi inline teq lazım olduğu yerlərdə, <span> isə ümumi blok səviyyəli teq lazım olduqda istifadə olunur.",
    Distractor2:
      "<div> səhifədə kiçik bölmələr üçün istifadə olunur, <span> isə bir sıra boyunca yayılmaq üçün istifadə olunur.",
    Distractor3:
      "<div> sənaye standartı defolt teqdir, lakin istəyirsinizsə, <span> istifadə edə bilərsiniz.",
    Explanation:
      " div blok səviyyəli elementdir, span isə daxili elementdir. Blok səviyyəli elementlər yeni sətirdən başlayır və mövcud olan tam genişliyi tutur (mümkün qədər sola və sağa uzanır). Sətirli elementlər ətrafdakı məzmunun içərisində oturur (yeni sətirdə başlamır və yalnız lazım olan qədər genişlik tutur).",
    Link: "https://www.freecodecamp.org/news/span-vs-div-html-tags-what-is-the-difference/"
  },
  {
    Question: "HTML-də forma təqdim etmək üçün standart üsul nədir?",
    Answer: "GET",
    Distractor1: "POST",
    Distractor2: "PUT",
    Distractor3: "SUBMIT",
    Explanation:
      "Əgər formada metod atributundan istifadə edilmirsə, avtomatik olaraq istifadəçinin GET metodundan istifadə etmək istədiyi güman edilir, çünki bu standart metoddur.",
    Link: "https://www.freecodecamp.org/news/html-form-input-type-and-submit-button-example/"
  },
  {
    Question:
      "HTML-də aşağıdakı seçimlərdən hansı <input> teqi üçün qanuni tip atributu deyil?",
    Answer: "<input type='num'>",
    Distractor1: "<input type='week'>",
    Distractor2: "<input type='tel'>",
    Distractor3: "<input type='color'>",
    Explanation:
      "<input> teqi HTML formasında giriş sahəsi yaratmaq üçün istifadə olunur. Type atributu göstəriləcək giriş sahəsinin növünü təyin edir. type='num' giriş teqi üçün etibarlı atribut deyil.",
    Link: "https://www.freecodecamp.org/news/text-box-in-html-the-input-field-html-tag/"
  },
  {
    Question: "HTML-də <canvas> teqinin əsas məqsədi nədir?",
    Answer: "JavaScript vasitəsilə bitmap üzərində rəsm çəkməyə imkan verir.",
    Distractor1: "Annotasiya edilmiş şəkilləri göstərir.",
    Distractor2: "Veb səhifədə vektor şəkillərini göstərməyə imkan verir.",
    Distractor3: "Bu veb-səhifədə rastr şəkilləri göstərməyə imkan verir.",
    Explanation:
      "<canvas> teqi JavaScript istifadə edərək veb-səhifədə qrafika çəkmək üçün istifadə olunur. Bu, qrafika üçün konteynerdir və əslində heç bir şey göstərmir.",
    Link: "https://www.freecodecamp.org/news/full-overview-of-the-html-canvas-6354216fba8d/"
  },
  {
    Question: "HTML-də <adress> teqi nədir?",
    Answer: "ünvan məlumatlarını yerləşdirmək üçün bölmə",
    Distractor1: "bağlantılar üçün bir yer",
    Distractor2: "şəkillər üçün yer",
    Distractor3: "cədvəl məlumatları üçün yer",
    Explanation:
      "Ünvan etiketi ünvan məlumatlarını yerləşdirmək üçün bölmə kimi istifadə olunur",
    Link: "https://www.freecodecamp.org/news/semantic-html5-elements/"
  },
  {
    Question: "HTML-də <article> teqi nədir?",
    Answer:
      "HTML səhifəsinin əsas məzmunundan asılı olmayan məzmun üçün istifadə olunan etiket",
    Distractor1: "Sitat üçün istifadə olunan etiket",
    Distractor2: "Kod üçün istifadə olunan etiket",
    Distractor3: "Bağlantılar üçün istifadə olunan etiket",
    Explanation:
      "Article elementi HTML səhifəsinin əsas məzmunundan asılı olmayan məzmun üçün istifadə olunur",
    Link: "https://www.freecodecamp.org/news/semantic-html-alternatives-to-using-divs/"
  },
  {
    Question:
      "HTML-də sol tək sitat simvolu üçün xarakter obyekti nədir?",
    Answer: "&lsquo;",
    Distractor1: "&rsquo;",
    Distractor2: "&leftquo;",
    Distractor3: "&lsquotes;",
    Explanation:
      "The &lsquo; simvol obyekti HTML-də sol tək sitat simvolunu göstərmək üçün istifadə olunur.",
    Link: "https://www.freecodecamp.org/news/ascii-table-hex-to-ascii-value-character-code-chart-2/"
  },
  {
    Question:
      "HTML-də sənədə əlavə edilmiş məzmunu göstərən element teqi nədir?",
    Answer: "<ins>",
    Distractor1: "<map>",
    Distractor2: "<mark>",
    Distractor3: "<dd>",
    Explanation: "ins etiketi sənədə əlavə edilmiş məzmunu göstərir",
    Link: "https://devdocs.io/html/element/ins"
  },
  {
    Question: "HTML-də başlıq atributunun img teqində nə işi var?",
    Answer: "təsvir haqqında əlavə məlumat verir",
    Distractor1: "img teqinin üstündə başlıq yaradır",
    Distractor2: "img teqinin altında başlıq yaradır",
    Distractor3: "img teqinin solunda başlıq yaradır",
    Explanation:
      "Başlıq atributu şəkil haqqında əlavə məlumat vermək üçün istifadə edilə bilər",
    Link: "https://www.freecodecamp.org/news/img-html-image-tag-tutorial/"
  },
  {
    Question: "HTML-də src atributu img teqində nə edir?",
    Answer: "Şəkil üçün mənbəni təmsil edir",
    Distractor1: "Şəkil üçün təsviri mətn təqdim edir",
    Distractor2: "Şəklin hündürlüyünü təmin edir",
    Distractor3: "Şəklin genişliyini təmin edir",
    Explanation:
      "src atributu təsvirin mənbəyini təmsil edir ki, brauzer onu harada tapacağını bilsin.",
    Link: "https://www.freecodecamp.org/news/img-html-image-tag-tutorial/"
  },
  {
    Question: "HTML-də şərhi necə yazırsınız?",
    Answer: "<!-- I am a comment! -->",
    Distractor1: "X!--I am a comment!--X",
    Distractor2: "V!--I am a comment!--V",
    Distractor3: ">!--I am a comment!--<",
    Explanation: "HTML teqinin sintaksisi <!-- Salam! -->",
    Link: "https://www.freecodecamp.org/news/html-comment-how-to-comment-out-a-line-or-tag-in-html/"
  },
  {
    Question:
      "HTML-də DOM elementlərini seçmək üçün bu üsullardan hansı istifadə olunmur?",
    Answer: "typeof",
    Distractor1: "getElementById",
    Distractor2: "querySelector",
    Distractor3: "querySelectorAll",
    Explanation:
      ".querySelector(), .querySelectorAll() və .getElementById() daxil olmaqla HTML sənədindən elementləri seçmək üçün bir neçə üsul var.",
    Link: "https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/"
  },
  {
    Question:
      "HTML-də mətn kimi xüsusi daxili məzmunu hədəfləmək üçün hansı teq istifadə olunur?",
    Answer: "<span>",
    Distractor1: "<div>",
    Distractor2: "<s>",
    Distractor3: "<i>",
    Explanation:
      "<span> teqi mətn kimi xüsusi daxili məzmunu hədəfləmək üçün istifadə olunur. Mətnin yalnız müəyyən hissələrinə üslub vermək istədiyiniz zaman bu faydalıdır.",
    Link: "https://www.freecodecamp.org/news/span-html-how-to-use-the-span-tag-with-css/"
  },
  {
    Question: "HTML-də, HTML faylında metadata nədir?",
    Answer: "Birbaşa göstərilməyən veb səhifə haqqında məlumat.",
    Distractor1: "Saytın istifadəçiləri haqqında məlumat",
    Distractor2: "Veb səhifəni saxlayan server haqqında məlumat.",
    Distractor3: "İstifadə olunan CSS versiyası haqqında məlumat.",
    Explanation:
      "Metadata birbaşa göstərilməyən veb səhifə haqqında məlumatdır. Buraya onun adı, skriptləri, üslub cədvəlləri və müəllif məlumatları haqqında məlumat daxildir.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head"
  },
  {
    Question: "HTML-də body teqləri hansılardır?",
    Answer: "HTML sənədi üçün əsas məzmunu müəyyən edir",
    Distractor1: "HTML sənədi üçün başlıq məzmununu müəyyən edir",
    Distractor2: "HTML sənədi üçün təsvirin məzmununu müəyyən edir",
    Distractor3: "HTML sənədi üçün cədvəl məzmununu müəyyən edir",
    Explanation: "Body teqləri HTML sənədinin əsas məzmununu müəyyənləşdirir",
    Link: "https://www.freecodecamp.org/news/what-is-html-definition-and-meaning/"
  },
  {
    Question: "HTML-də <td> teqi nədir?",
    Answer: "Cədvəldə məlumat xanaları yaratmaq üçün istifadə olunan element",
    Distractor1: "İxtisarı təmsil edən etiket",
    Distractor2: "Söz fasilələri yaratmaq üçün istifadə olunan etiket",
    Distractor3: "Üfüqi xətt yaratmaq üçün istifadə olunan etiket",
    Explanation:
      "<td> teqi cədvəldə verilənlər xanalarını yaratmaq üçün istifadə olunan elementdir",
    Link: "https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/"
  },
  {
    Question: "HTML-də details elementi nə edir?",
    Answer:
      "element açıq vəziyyətə keçirildikdə məlumatı göstərir",
    Distractor1: "mətni sağdan sola çevirir",
    Distractor2:
      "cari istiqaməti ləğv edir və mətni yeni istiqamətdə göstərir",
    Distractor3: "abbr teqi üçün təsviri mətn təqdim edir",
    Explanation:
      "Details etiketi element açıq vəziyyətə keçirildikdə məlumatı göstərir",
    Link: "https://devdocs.io/html/element/details"
  },
  {
    Question:
      "Normal ifadə ilə nümunəni uyğunlaşdırmaq üçün HTML-də <input>-a hansı atribut əlavə edə bilərsiniz?",
    Answer: "pattern",
    Distractor1: "regex",
    Distractor2: "match",
    Distractor3: "find",
    Explanation:
      "Nümunə atributu mətn sahəsində nümunəni yoxlamaq üçün istifadə olunur. Nümunəni müəyyən etmək üçün bu atribut üçün müntəzəm ifadə təyin edə bilərsiniz.",
    Link: "https://www.freecodecamp.org/news/form-validation-with-html5-and-javascript/"
  },

  {
    Question: "HTML-də select teqində size atributu nə edir?",
    Answer: "default olaraq göstərilən seçimlərin sayını təyin edir",
    Distractor1: "select teqinin enini təyin edir",
    Distractor2: "select teqinin hündürlüyünü təyin edir",
    Distractor3: "select teqinin enini və hündürlüyünü təyin edir",
    Explanation:
      "Size atributu, açılan seçim menyusunda defolt olaraq göstərilən seçimlərin sayını təyin edir",
    Link: "https://www.freecodecamp.org/news/html-select-tag-how-to-make-a-dropdown-menu-or-combo-list/"
  },
  {
    Question:
      "HTML-də target atributunun hansı dəyəri yeni tabda keçid açır?",
    Answer: "_blank",
    Distractor1: "_parent",
    Distractor2: "_self",
    Distractor3: "_top",
    Explanation:
      "Varsayılan olaraq, brauzer eyni tabda bağlantıları açır. Linki yeni tabda açmaq üçün hədəf atributunu _blank dəyəri ilə açılış <a> teqinə əlavə edə bilərsiniz.",
    Link: "https://www.freecodecamp.org/news/what-is-a-hyperlink-definition-for-html-link-beginners/"
  },
  {
    Question: "HTML-də hiperlink yaratmaq üçün hansı teq istifadə olunur?",
    Answer: "<a>",
    Distractor1: "<hyperlink>",
    Distractor2: "<href>",
    Distractor3: "<link>",
    Explanation:
      "Siz <a> açılış və </a> etiketindən istifadə etməklə bağlantılar yaradırsınız.",
    Link: "https://www.freecodecamp.org/news/what-is-a-hyperlink-definition-for-html-link-beginners/"
  },
  {
    Question:
      "HTML-də elementin tab mövqeyini təyin etməyə imkan verən atributun adı nədir?",
    Answer: "tabindex",
    Distractor1: "style",
    Distractor2: "hover",
    Distractor3: "name",
    Explanation:
      "Elementin tab mövqeyini təyin etmək üçün tabindex atributundan istifadə edə bilərsiniz",
    Link: "https://www.freecodecamp.org/news/html-roving-tabindex-attribute-explained-with-examples/"
  },
];
export default htmlQuiz;
