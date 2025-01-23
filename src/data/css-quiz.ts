const cssQuiz = [
  {
    Question: "CSS-də üslubların tətbiq edilmə sırası necə təyin olunur?",
    Answer: "Spesifiklik qaydalarına və sonra qayda deklarasiyasının sırasına görə.",
    Distractor1: "HTML sənədindəki üslublar həmişə birinci tətbiq olunur.",
    Distractor2: "Inline üslublar həmişə external stylesheet-dən sonra tətbiq olunur.",
    Distractor3: "Prioritet istifadəçi təriflərinə verilir.",
    Explanation: "CSS-də spesifiklik və deklarasiya sırası, hansı qaydanın tətbiq olunacağını müəyyən edir. Inline üslublar daha spesifikdir və external stylesheet-dən əvvəl tətbiq olunur.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity"
  },
  {
    Question: "CSS-də hansı xassə elementin fon rəngini təyin edir?",
    Answer: "background-color",
    Distractor1: "color",
    Distractor2: "border-color",
    Distractor3: "font-color",
    Explanation: "background-color xassəsi elementin arxa planının rəngini təyin etmək üçün istifadə olunur.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/CSS/background-color"
  },
  {
    Question: "Flexbox ilə əsas ox istiqaməti necə dəyişdirilir?",
    Answer: "flex-direction",
    Distractor1: "align-items",
    Distractor2: "justify-content",
    Distractor3: "direction",
    Explanation: "flex-direction xassəsi əsas oxun istiqamətini dəyişdirərək elementlərin necə hizalanacağını müəyyən edir.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction"
  },
  {
    Question: "CSS-də margin xassəsi nə üçündür?",
    Answer: "Elementlər arasında xarici boşluq yaratmaq.",
    Distractor1: "Elementin ölçüsünü təyin etmək.",
    Distractor2: "Elementin daxili boşluğunu təyin etmək.",
    Distractor3: "Elementin font ölçüsünü təyin etmək.",
    Explanation: "margin xassəsi elementlər arasında boşluq yaratmaq üçün istifadə olunur.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/CSS/margin"
  },
  {
    Question: "CSS-in hansı qayda dəsti media sorğuları üçün istifadə olunur?",
    Answer: "@media",
    Distractor1: "@screen",
    Distractor2: "@responsive",
    Distractor3: "@viewport",
    Explanation: "@media qayda dəsti media sorğularını tətbiq etməyə imkan verir, ekran ölçüsü kimi şərtlərə əsasən üslublar tətbiq olunur.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/CSS/@media"
  },
  {
    Question: "CSS-də z-index hansı məqsədlə istifadə olunur?",
    Answer: "Elementlərin üst-üstə düşmə sırasını təyin etmək.",
    Distractor1: "Elementin şəffaflığını təyin etmək.",
    Distractor2: "Elementin görünməz olub-olmadığını təyin etmək.",
    Distractor3: "Elementin ölçülərini dəyişdirmək.",
    Explanation: "z-index xassəsi elementlərin üst-üstə düşən zaman hansı elementin öndə görünəcəyini təyin edir.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/CSS/z-index"
  },
  {
    Question: "CSS-də bir elementi mərkəzləşdirmək üçün hansı xüsusiyyətlər kombinasiyası istifadə olunur?",
    Answer: "display: flex; justify-content: center; align-items: center;",
    Distractor1: "margin: auto; text-align: center;",
    Distractor2: "position: fixed; left: 50%;",
    Distractor3: "float: center;",
    Explanation: "Flexbox ilə mərkəzləşdirmək üçün justify-content və align-items xassələrindən istifadə olunur.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox"
  },
  {
    Question: "CSS-də animasiya yaratmaq üçün hansı qayda istifadə olunur?",
    Answer: "@keyframes",
    Distractor1: "@animate",
    Distractor2: "@motion",
    Distractor3: "@frame",
    Explanation: "@keyframes qaydası CSS animasiyaları üçün istifadə olunur və animasiya mərhələlərini təyin edir.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes"
  },
  {
    Question: "CSS-də hansı xassə font ölçüsünü təyin edir?",
    Answer: "font-size",
    Distractor1: "text-size",
    Distractor2: "font-weight",
    Distractor3: "font-family",
    Explanation: "font-size xassəsi mətnin ölçüsünü təyin etmək üçün istifadə olunur.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/CSS/font-size"
  },
  {
    Question: "CSS-də elementin şəffaflığını tənzimləmək üçün hansı xassədən istifadə olunur?",
    Answer: "opacity",
    Distractor1: "visibility",
    Distractor2: "filter",
    Distractor3: "display",
    Explanation: "opacity xassəsi elementin şəffaflıq səviyyəsini tənzimləyir.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/CSS/opacity"
  },
  // Continue adding 20 more CSS questions in this format...
];

export default cssQuiz;
