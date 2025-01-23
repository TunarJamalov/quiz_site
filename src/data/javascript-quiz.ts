const javascriptQuiz = [
  {
    Question: "JavaScript-də dəyişəni necə elan edirsiniz?",
    Answer: "var, let və ya const istifadə edərək.",
    Distractor1: "int, string və ya float istifadə edərək.",
    Distractor2: "declare, define və ya const istifadə edərək.",
    Distractor3: "new, create və ya set istifadə edərək.",
    Explanation: "JavaScript-də dəyişənlər var, let və ya const ilə elan edilir. const sabit dəyişənlər üçün, let isə blok səviyyəli dəyişənlər üçün istifadə olunur.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types"
  },
  {
    Question: "JavaScript-də funksiyanı necə elan etmək olar?",
    Answer: "function açar sözü ilə.",
    Distractor1: "def açar sözü ilə.",
    Distractor2: "fun açar sözü ilə.",
    Distractor3: "lambda açar sözü ilə.",
    Explanation: "JavaScript-də funksiyalar function açar sözü ilə elan olunur və ya arrow function sintaksisindən istifadə edilə bilər.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions"
  },
  {
    Question: "JavaScript-də massiv yaratmaq üçün hansı metoddan istifadə edilir?",
    Answer: "[] istifadə edərək.",
    Distractor1: "{} istifadə edərək.",
    Distractor2: "<> istifadə edərək.",
    Distractor3: "() istifadə edərək.",
    Explanation: "JavaScript-də massiv yaratmaq üçün [] istifadə olunur. Məsələn, const myArray = [1, 2, 3];",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
  },
  {
    Question: "JavaScript-də obyektə yeni xassə necə əlavə olunur?",
    Answer: "Obyekt.adi = dəyər;",
    Distractor1: "Obyekt<adi> = dəyər;",
    Distractor2: "Obyekt[adi] = dəyər;",
    Distractor3: "Obyekt(adi) = dəyər;",
    Explanation: "JavaScript-də obyektlərə yeni xassə əlavə etmək üçün nöqtə və ya kvadrat mötərizə sintaksisi istifadə olunur.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects"
  },
  {
    Question: "JavaScript-də tək bir if-else şərtini necə yazmaq olar?",
    Answer: "Ternary operator (condition ? expr1 : expr2) istifadə edərək.",
    Distractor1: "switch-case istifadə edərək.",
    Distractor2: "if expr1 else expr2 istifadə edərək.",
    Distractor3: "condition {expr1} else {expr2} istifadə edərək.",
    Explanation: "Ternary operator JavaScript-də qısa if-else ifadələri üçün istifadə olunur. Məsələn, const result = age > 18 ? 'Adult' : 'Minor';",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator"
  },
  {
    Question: "JavaScript-də undefined və null arasındakı fərq nədir?",
    Answer: "undefined dəyişən elan edilib, amma dəyər təyin edilməyib; null isə qəsdən boş dəyəri göstərir.",
    Distractor1: "undefined dəyişən mövcud deyil; null isə təyin edilmiş dəyərdir.",
    Distractor2: "undefined və null eynidir.",
    Distractor3: "undefined sistem səhvidir; null isə dəyəri yoxdur.",
    Explanation: "undefined dəyişənə dəyər təyin edilmədikdə alınır, null isə proqramçı tərəfindən qəsdən boş dəyəri göstərmək üçün istifadə olunur.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined"
  },
  {
    Question: "JavaScript-də async/await nə üçün istifadə olunur?",
    Answer: "Asinxron əməliyyatları idarə etmək üçün.",
    Distractor1: "Massivləri sıralamaq üçün.",
    Distractor2: "CSS üslublarını dəyişdirmək üçün.",
    Distractor3: "DOM elementlərini yaratmaq üçün.",
    Explanation: "async/await asinxron kodu sinxron kimi oxumağa imkan verir, Promise-ləri idarə etmək üçün istifadə olunur.",
    Link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises"
  },
  {
    Question: "JavaScript-də NaN nə deməkdir?",
    Answer: "Not-a-Number",
    Distractor1: "No-any-Name",
    Distractor2: "Null-and-Null",
    Distractor3: "Node-and-Network",
    Explanation: "NaN JavaScript-də rəqəm olmayan bir ifadəni göstərir, məsələn, 'abc' / 2 nəticəsində alınır.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN"
  },
  {
    Question: "JavaScript-də hansı metod DOM elementini tapmaq üçün istifadə olunur?",
    Answer: "document.querySelector",
    Distractor1: "document.find",
    Distractor2: "document.get",
    Distractor3: "document.element",
    Explanation: "document.querySelector seçilmiş CSS seçicisi ilə uyğun gələn ilk DOM elementini tapır.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector"
  },
  {
    Question: "JavaScript-də interval təyin etmək üçün hansı metod istifadə olunur?",
    Answer: "setInterval",
    Distractor1: "setTimeout",
    Distractor2: "clearInterval",
    Distractor3: "setTimer",
    Explanation: "setInterval müəyyən edilmiş intervalla bir funksiyanı davamlı olaraq icra edir.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval"
  },
  {
    Question: "JavaScript-də switch ifadəsinin məqsədi nədir?",
    Answer: "Müxtəlif mümkün dəyərlərə əsasən fərqli kod bloklarını icra etmək.",
    Distractor1: "Kodun birdəfəlik işləməsini təmin etmək.",
    Distractor2: "DOM elementlərini dəyişdirmək üçün.",
    Distractor3: "Dəyişənləri elan etmək üçün.",
    Explanation: "switch ifadəsi müəyyən bir dəyərə əsaslanaraq fərqli kod bloklarını icra etmək üçün istifadə olunur.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch"
  },
  {
    Question: "JavaScript-də for-of dövrü nə üçün istifadə olunur?",
    Answer: "Massivlərdə və iterasiya olunan obyektlərdə elementləri dövr etmək üçün.",
    Distractor1: "Massivin indekslərini dövr etmək üçün.",
    Distractor2: "Obyektin xassələrini dövr etmək üçün.",
    Distractor3: "DOM elementlərini dəyişdirmək üçün.",
    Explanation: "for-of dövrü iterasiya olunan obyektlərdə elementləri asanlıqla dövr etməyə imkan verir.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of"
  },
  {
    Question: "JavaScript-də DOM nə deməkdir?",
    Answer: "Document Object Model",
    Distractor1: "Data Object Management",
    Distractor2: "Dynamic Object Model",
    Distractor3: "Document Object Mapping",
    Explanation: "DOM veb səhifələrin strukturunu göstərən proqramlaşdırma interfeysidir.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model"
  },
  {
    Question: "JavaScript-də Promise hansı məqsədlə istifadə olunur?",
    Answer: "Asinxron əməliyyatları idarə etmək üçün.",
    Distractor1: "DOM elementlərini yaratmaq üçün.",
    Distractor2: "Massivləri sıralamaq üçün.",
    Distractor3: "CSS üslublarını dəyişdirmək üçün.",
    Explanation: "Promise asinxron əməliyyatların nəticəsini idarə etməyə imkan verir.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"
  },
  {
    Question: "JavaScript-də try-catch blokları nə üçün istifadə olunur?",
    Answer: "Kodda baş verən səhvləri idarə etmək üçün.",
    Distractor1: "DOM elementlərini dəyişdirmək üçün.",
    Distractor2: "Kodun performansını artırmaq üçün.",
    Distractor3: "Obyektlər yaratmaq üçün.",
    Explanation: "try-catch blokları səhvləri idarə etməyə və onların icranı dayandırmamasını təmin etməyə imkan verir.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch"
  },
  {
    Question: "JavaScript-də hansı metod DOM elementini yaratmaq üçün istifadə edilir?",
    Answer: "document.createElement",
    Distractor1: "document.createNode",
    Distractor2: "document.newElement",
    Distractor3: "document.buildElement",
    Explanation: "document.createElement DOM ağacına yeni elementlər əlavə etmək üçün istifadə edilir.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement"
  }
  // Continue adding 10 more JavaScript questions in this format...
];

export default javascriptQuiz;
