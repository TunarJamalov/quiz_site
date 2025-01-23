const pythonQuiz = [
  {
    Question: "Python-da hansı açar söz list, tuple, set və dictionary kimi kolleksiya tipləri yaratmağa imkan verir?",
    Answer: "[]",
    Distractor1: "()",
    Distractor2: "{}",
    Distractor3: "<>",
    Explanation: "[] (square brackets) siyahı (list) yaratmaq üçün istifadə olunur",
    Link: "https://docs.python.org/3/tutorial/introduction.html#lists"
  },
  {
    Question: "Python-da hansı metod siyahıdan son elementi silməyə imkan verir?",
    Answer: "pop()",
    Distractor1: "remove()",
    Distractor2: "delete()",
    Distractor3: "erase()",
    Explanation: "pop() metodu siyahıdan son elementi silir və həmin elementi qaytarır",
    Link: "https://docs.python.org/3/tutorial/datastructures.html"
  },
  {
    Question: "Python-da dəyişənin tipini öyrənmək üçün hansı funksiyadan istifadə olunur?",
    Answer: "type()",
    Distractor1: "isinstance()",
    Distractor2: "typecheck()",
    Distractor3: "gettype()",
    Explanation: "type() funksiyası dəyişənin tipini qaytarır",
    Link: "https://docs.python.org/3/library/functions.html#type"
  },
  {
    Question: "Python-da siniflər hansı açar söz ilə təyin edilir?",
    Answer: "class",
    Distractor1: "object",
    Distractor2: "def",
    Distractor3: "new",
    Explanation: "class açar sözü ilə yeni sinif yaradılır",
    Link: "https://docs.python.org/3/tutorial/classes.html"
  },
  {
    Question: "Python-da hansı operator iki dəyərin bərabər olub-olmamasını yoxlayır?",
    Answer: "==",
    Distractor1: "=",
    Distractor2: "===",
    Distractor3: "eq",
    Explanation: "== operatoru iki dəyərin bərabər olub-olmamasını yoxlayır",
    Link: "https://docs.python.org/3/library/stdtypes.html#comparisons"
  },
  {
    Question: "Python-da rekursiv funksiyalar üçün maksimum çağırış dərinliyini təyin edən parametr hansıdır?",
    Answer: "sys.setrecursionlimit()",
    Distractor1: "max.recursion()",
    Distractor2: "set.depth()",
    Distractor3: "recursion.max()",
    Explanation: "sys.setrecursionlimit() rekursiv funksiyalar üçün maksimum çağırış dərinliyini təyin edir",
    Link: "https://docs.python.org/3/library/sys.html#sys.setrecursionlimit"
  },
  {
    Question: "Python-da hansı açar söz əlavə şərtləri yoxlamaq üçün istifadə olunur?",
    Answer: "elif",
    Distractor1: "else if",
    Distractor2: "switch",
    Distractor3: "case",
    Explanation: "elif əlavə şərtləri yoxlamaq üçün istifadə olunur",
    Link: "https://docs.python.org/3/tutorial/controlflow.html#if-statements"
  },
  {
    Question: "Python-da hansı funksiya stringin başlanğıcını və sonunu təmizləyir?",
    Answer: "strip()",
    Distractor1: "clean()",
    Distractor2: "trim()",
    Distractor3: "remove()",
    Explanation: "strip() metodu stringin əvvəlindəki və sonundakı boşluqları silir",
    Link: "https://docs.python.org/3/library/stdtypes.html#str.strip"
  },
  {
    Question: "Python-da hansı modul təsadüfi ədədlər generasiya etməyə imkan verir?",
    Answer: "random",
    Distractor1: "math",
    Distractor2: "numpy",
    Distractor3: "generator",
    Explanation: "random modulu təsadüfi ədədlər generasiya etmək üçün istifadə olunur",
    Link: "https://docs.python.org/3/library/random.html"
  },
  {
    Question: "Python-da hansı açar söz istisna tutmaq üçün istifadə olunur?",
    Answer: "except",
    Distractor1: "catch",
    Distractor2: "error",
    Distractor3: "throw",
    Explanation: "except açar sözü istisnaları tutmaq üçün istifadə olunur",
    Link: "https://docs.python.org/3/tutorial/errors.html"
  },
  {
    Question: "Python-da hansı metod sözləri baş hərflərlə yazmağa imkan verir?",
    Answer: "title()",
    Distractor1: "uppercase()",
    Distractor2: "capitalize()",
    Distractor3: "first_upper()",
    Explanation: "title() metodu hər sözün birinci hərfini böyük yazır",
    Link: "https://docs.python.org/3/library/stdtypes.html#string-methods"
  },
  {
    Question: "Python-da generator funksiyaları hansı açar söz ilə təyin edilir?",
    Answer: "yield",
    Distractor1: "return",
    Distractor2: "generate",
    Distractor3: "iterator",
    Explanation: "yield açar sözü generator funksiyaları üçün istifadə olunur",
    Link: "https://docs.python.org/3/tutorial/classes.html#generators"
  },
  {
    Question: "Python-da hansı funksiya bir iterasiyanın elementlərinin sayını qaytarır?",
    Answer: "len()",
    Distractor1: "count()",
    Distractor2: "size()",
    Distractor3: "length()",
    Explanation: "len() funksiyası iterasiyanın (siyahı, tuple, string və s.) elementlərinin sayını qaytarır",
    Link: "https://docs.python.org/3/library/functions.html#len"
  }
];

export default pythonQuiz;