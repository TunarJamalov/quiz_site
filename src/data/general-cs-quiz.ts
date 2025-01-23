const generalCSQuiz = [
  {
    Question: "Big-O mürəkkəbliyi baxımından, ikili ağac indeksində axtarışın vaxt mürəkkəbliyi nədir?",
    Answer: "O(log n)",
    Distractor1: "O(n)",
    Distractor2: "O(n log n)",
    Distractor3: "O(1)",
    Explanation: 
      "Bu, ikili ağac indeksinin hər addımda axtarış sahəsini yarıya endirərək effektiv axtarış təmin etməsi səbəbindəndir.",
    Link: "https://www.freecodecamp.org/news/a-beginners-guide-to-sql/#heading-chapter-11-database-performance"
  },
  {
    Question: "Hash cədvəlinin kompüter elmlərində əsas məqsədi nədir?",
    Answer: "Açar-dəyər cütlüklərindən istifadə edərək sürətli məlumat əldə etmək",
    Distractor1: "Məlumatları ardıcıl qaydada saxlamaq",
    Distractor2: "Əlaqəli məlumatları effektiv idarə etmək",
    Distractor3: "Əməliyyat sistemlərində yaddaş idarəsini təmin etmək",
    Explanation: 
      "Hash cədvəlləri orta hesabla sabit vaxt mürəkkəbliyinə malikdir və açar-dəyər saxlama və əldə etmək üçün çox effektivdir.",
    Link: "https://en.wikipedia.org/wiki/Hash_table"
  },
  {
    Question: "Hansı verilənlər strukturu Son Gələn İlk Çıxar (LIFO) prinsipindən istifadə edir?",
    Answer: "Yığın (Stack)",
    Distractor1: "Növbə (Queue)",
    Distractor2: "Bağlı siyahı (Linked List)",
    Distractor3: "İkili ağac (Binary Tree)",
    Explanation: 
      "Yığın LIFO prinsipini izləyir, yəni yığına son qoyulan element ilk olaraq çıxarılır.",
    Link: "https://en.wikipedia.org/wiki/Stack_(abstract_data_type)"
  },
  {
    Question: "Əlaqəli verilənlər bazasında birincil açar nədir?",
    Answer: "Cədvəldəki hər bir qeydi unikal şəkildə müəyyən edən açar",
    Distractor1: "Cədvəl əlaqələri üçün istifadə edilən xarici açar",
    Distractor2: "Təkrarlanan dəyərləri ehtiva edən sütun",
    Distractor3: "İndeks yaratmaq üçün istifadə edilən açar",
    Explanation: 
      "Birincil açar hər bir qeydin unikal olduğunu təmin edir və heç bir iki sətir eyni birincil açara malik deyil.",
    Link: "https://www.w3schools.com/sql/sql_primarykey.asp"
  },
  {
    Question: "Qrafda ən qısa yolu tapmaq üçün hansı alqoritm istifadə olunur?",
    Answer: "Dijkstra alqoritmi",
    Distractor1: "Bubble Sort",
    Distractor2: "Merge Sort",
    Distractor3: "Prim alqoritmi",
    Explanation: 
      "Dijkstra alqoritmi çəkili qrafda tək mənbədən bütün digər düyünlərə ən qısa yolu tapmaq üçün nəzərdə tutulmuşdur.",
    Link: "https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm"
  },
  {
    Question: "Massiv ilə bağlı siyahının əsas fərqi nədir?",
    Answer: "Massivlərin ölçüsü sabitdir; bağlı siyahıların ölçüsü dinamikdir",
    Distractor1: "Massivlər orta hissədə daha sürətli əlavə etməyə imkan verir",
    Distractor2: "Bağlı siyahılar ardıcıl yaddaşdan istifadə edir",
    Distractor3: "Massivlər ibtidai növləri saxlaya bilmir",
    Explanation: 
      "Massivlər sabit ölçü ilə ayrılır, halbuki bağlı siyahılar elementlər əlavə edildikcə və ya silindikcə dinamik olaraq yaddaş ayırır.",
    Link: "https://www.geeksforgeeks.org/difference-between-array-and-linked-list/"
  },
  {
    Question: "Kompüter şəbəkələrində OSI modelinin məqsədi nədir?",
    Answer: "Telekommunikasiya və ya hesablama sisteminin funksiyalarını standartlaşdırmaq",
    Distractor1: "Avadanlıq spesifikasiyalarını müəyyən etmək",
    Distractor2: "Tək qatlı bir kommunikasiya sistemi yaratmaq",
    Distractor3: "Şifrləmə alqoritmlərini təmin etmək",
    Explanation: 
      "OSI modeli şəbəkədə rabitə prosesini yeddi qata bölərək standartlaşdırır, hər qat spesifik vəzifələrdən məsuldur.",
    Link: "https://en.wikipedia.org/wiki/OSI_model"
  },
  {
    Question: "Binary search alqoritminin xüsusiyyəti hansıdır?",
    Answer: "Massivin çeşidlənmiş olmasını tələb edir",
    Distractor1: "Çeşidlənməmiş məlumatlarla işləyir",
    Distractor2: "O(n^2) mürəkkəbliyinə malikdir",
    Distractor3: "Genişlik üzrə keçid (breadth-first traversal) istifadə edir",
    Explanation: 
      "Binary search, axtarış intervalını yarıya bölərək işləyir və giriş massivinin əvvəlcədən çeşidlənmiş olmasını tələb edir.",
    Link: "https://en.wikipedia.org/wiki/Binary_search_algorithm"
  },
  {
    Question: "Kompilyatorun əsas rolu nədir?",
    Answer: "Yüksək səviyyəli kodu maşın koduna çevirmək",
    Distractor1: "Maşın səviyyəli təlimatları icra etmək",
    Distractor2: "Mənbə kodu ayıklamaq",
    Distractor3: "Kodu icra vaxtında interpretasiya etmək",
    Explanation: 
      "Kompilyator yüksək səviyyəli proqramlaşdırma kodunu maşın səviyyəli koda çevirir ki, kompüter onu icra edə bilsin.",
    Link: "https://en.wikipedia.org/wiki/Compiler"
  },
  {
    Question: "Proqramlaşdırmada zibillərin toplanmasının məqsədi nədir?",
    Answer: "İstifadə olunmayan yaddaşı avtomatik olaraq geri qaytarmaq",
    Distractor1: "CPU saat tezliyini artırmaq",
    Distractor2: "Sintaksis səhvlərini aradan qaldırmaq",
    Distractor3: "Verilənlər strukturlarını təşkil etmək",
    Explanation: 
      "Zibillərin toplanması artıq istifadə olunmayan yaddaşı avtomatik olaraq müəyyən edir və onu geri qaytarır, yaddaş sızmalarının qarşısını alır.",
    Link: "https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)"
  }
];

export default generalCSQuiz;
