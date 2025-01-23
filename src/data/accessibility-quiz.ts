const accessibilityQuiz = [
  {
    Question: "Niyə semantik HTML istifadə əlçatanlıq üçün vacibdir?",
    Answer:
      "O, veb məzmunu üçün məna və struktur təmin edir, ekran oxuyucularına və digər köməkçi texnologiyalara kömək edir.",
    Distractor1: "Veb saytın daha sürətli yüklənməsini təmin edir.",
    Distractor2: "SEO optimallaşdırılmasına kömək edir.",
    Distractor3: "Bu CSS ehtiyacını azaldır.",
    Explanation:
      "Semantik HTML məqsədlərini aydın şəkildə təsvir edən teqlərdən istifadə edir ki, bu da köməkçi texnologiyalardan istifadə edən istifadəçilər üçün veb məzmunun əlçatanlığını yaxşılaşdırır.",
    Link: "https://www.freecodecamp.org/news/semantic-html5-elements/"
  },
  {
    Question: "ARIA (Accessible Rich Internet Applications) atributlarının əsas məqsədi nədir?",
    Answer: "Dinamik veb məzmunun əlçatanlığını yaxşılaşdırmaq",
    Distractor1: "Veb saytın dizaynını yaxşılaşdırmaq",
    Distractor2: "Səhifənin yüklənmə sürətini artırmaq",
    Distractor3: "Məzmunun SEO optimallaşdırılması",
    Explanation: "ARIA atributları köməkçi texnologiyalara dinamik veb elementlərin rolunu, xüsusiyyətlərini və vəziyyətini anlamağa kömək edir.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA"
  },
  {
    Question: "Əlçatanlıq üçün rəng kontrastı nə qədər olmalıdır?",
    Answer: "WCAG 2.1-ə görə, mətn üçün minimum 4.5:1, iri mətn üçün 3:1",
    Distractor1: "2:1 nisbəti kifayətdir",
    Distractor2: "Heç bir kontrast tələbi yoxdur",
    Distractor3: "6:1 nisbəti tələb olunur",
    Explanation: "Yüksək rəng kontrastı görməsi zəif olan istifadəçilərə məzmunu daha asan oxumağa imkan verir.",
    Link: "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
  },
  {
    Question: "Klaviatura ilə naviqasiya nə üçün vacibdir?",
    Answer: "Bütün istifadəçilərə, o cümlədən motor qabiliyyətləri məhdud olanlara səhifədə hərəkət etməyə imkan verir",
    Distractor1: "Səhifənin dizaynını yaxşılaşdırmaq üçün",
    Distractor2: "Səhifənin yüklənmə sürətini artırmaq üçün",
    Distractor3: "Yalnız dizayn məqsədləri üçün",
    Explanation: "Klaviatura ilə naviqasiya, misal üçün, əl hərəkətləri məhdud olan və ya ekran oxuyucuları istifadə edən insanlara veb səhifələrdə sərbəst hərəkət etməyə imkan verir.",
    Link: "https://www.w3.org/WAI/perspectives/keyboard.html"
  },
  {
    Question: "Alt mətn (alternative text) nə üçün istifadə olunur?",
    Answer: "Şəkillərin təsvirini ekran oxuyucuları üçün təmin etmək",
    Distractor1: "Şəkillərin yüklənmə sürətini artırmaq",
    Distractor2: "Şəkillərin ölçüsünü azaltmaq",
    Distractor3: "Şəkillərin keyfiyyətini artırmaq",
    Explanation: "Alt mətn şəkillərin təsvirini təmin edir, bu da görməsi zəif olan istifadəçilərə şəkillərin məzmununu başa düşməyə kömək edir.",
    Link: "https://www.w3.org/WAI/alt/"
  },
  {
    Question: "Əlçatanlıq testləri hansı vasitələrlə aparıla bilər?",
    Answer: "Ekran oxuyucuları, klaviatura testləri, əlçatanlıq yoxlama alətləri",
    Distractor1: "Yalnız manuel testlər",
    Distractor2: "Yalnız avtomatik testlər",
    Distractor3: "Heç bir test tələb olunmur",
    Explanation: "Əlçatanlıq testləri müxtəlif üsullarla aparılır ki, veb səhifənin müxtəlif istifadəçilər üçün əlçatanlığı yoxlanılsın.",
    Link: "https://www.w3.org/WAI/test-evaluate/"
  },
  {
    Question: "Başlıqların (headings) düzgün istifadəsi nə üçün vacibdir?",
    Answer: "Səhifənin strukturunu təşkil etmək və ekran oxuyucularına kömək etmək",
    Distractor1: "Səhifənin dizaynını yaxşılaşdırmaq",
    Distractor2: "Səhifənin yüklənmə sürətini artırmaq",
    Distractor3: "SEO üçün",
    Explanation: "Düzgün başlıqlar (h1-h6) səhifənin məzmununu strukturlaşdırır və ekran oxuyucularına səhifədə naviqasiya etməyə kömək edir.",
    Link: "https://www.w3.org/WAI/tutorials/page-structure/headings/"
  },
  {
    Question: "Form elementləri üçün əlçatanlıq təcrübəsinin ən yaxşı praktikası nədir?",
    Answer: "Açıq etiketlər, düzgün ARIA atributları və aydın xəta mesajları",
    Distractor1: "Rəngli form elementləri",
    Distractor2: "Çoxlu animasiyalar",
    Distractor3: "Minimal məlumat sahələri",
    Explanation: "Form elementləri üçün əlçatanlıq, istifadəçilərə formu başa düşməyə və düzgün doldurmağa kömək edir.",
    Link: "https://www.w3.org/WAI/tutorials/forms/"
  },
  {
    Question: "Ekran oxuyucuları üçün interaktiv elementlərin klaviatura ilə aktivləşdirilməsi nə üçün vacibdir?",
    Answer: "Bütün istifadəçilərə səhifə elementləri ilə qarşılıqlı əlaqə imkanı vermək üçün",
    Distractor1: "Səhifənin dizaynını yaxşılaşdırmaq üçün",
    Distractor2: "Səhifənin yüklənmə sürətini artırmaq üçün",
    Distractor3: "Yalnız dizayn məqsədləri üçün",
    Explanation: "Klaviatura aktivləşdirilməsi, motor qabiliyyətləri məhdud olan və ya ekran oxuyucuları istifadə edən istifadəçilərə səhifə elementləri ilə qarşılıqlı əlaqə imkanı verir.",
    Link: "https://www.w3.org/WAI/perspectives/keyboard.html"
  },
  {
    Question: "ARIA-live regionları nə üçün istifadə olunur?",
    Answer: "Dinamik olaraq dəyişən məzmunu ekran oxuyucularına bildirmək üçün",
    Distractor1: "Səhifənin dizaynını yaxşılaşdırmaq üçün",
    Distractor2: "Səhifənin yüklənmə sürətini artırmaq üçün",
    Distractor3: "Yalnız dizayn məqsədləri üçün",
    Explanation: "ARIA-live regionları dinamik olaraq dəyişən məzmunu ekran oxuyucularına bildirməyə imkan verir.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions"
  },
  {
    Question: "Əlçatanlıq üçün video məzmununda hansı xüsusiyyətlər vacibdir?",
    Answer: "Subtitrlərin mövcudluğu, audio təsvir, transkripsiya",
    Distractor1: "Yüksək keyfiyyətli video",
    Distractor2: "Çoxlu effektlər",
    Distractor3: "Uzun video məzmunu",
    Explanation: "Video məzmunun əlçatanlığı, eşitmə və görməsi zəif olan istifadəçilər üçün əlavə məlumat təmin etməyi əhatə edir.",
    Link: "https://www.w3.org/WAI/perspective-videos/captions/"
  },
  {
    Question: "Focus görünərliyi nə üçün vacibdir?",
    Answer: "Klaviatura istifadəçilərinə hansı elementin aktiv olduğunu göstərmək üçün",
    Distractor1: "Səhifənin dizaynını yaxşılaşdırmaq üçün",
    Distractor2: "Səhifənin yüklənmə sürətini artırmaq üçün",
    Distractor3: "Yalnız dizayn məqsədləri üçün",
    Explanation: "Focus görünərliyi klaviatura istifadəçilərinə hansı elementin aktiv olduğunu vizual olaraq göstərir.",
    Link: "https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html"
  },
  {
    Question: "Əlçatanlıq üçün mətn ölçüsü hansı standartlara cavab verməlidir?",
    Answer: "Minimum 16px, lazım olduqda böyüdülə bilən",
    Distractor1: "12px standart ölçü kifayətdir",
    Distractor2: "Heç bir standart yoxdur",
    Distractor3: "Yalnız 20px və böyük ölçülər",
    Explanation: "Uyğun mətn ölçüsü görməsi zəif olan istifadəçilərə məzmunu daha asan oxumağa imkan verir.",
    Link: "https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html"
  },
  {
    Question: "Əlçatanlıq üçün rəng təkcə məlumatı ötürmək üçün istifadə edilməməlidir. Bunun səbəbi nədir?",
    Answer: "Rəngkor istifadəçilər məlumatı başa düşə bilməyə bilər",
    Distractor1: "Rənglər baha başa gəlir",
    Distractor2: "Rənglər səhifənin yüklənmə sürətini azaldır",
    Distractor3: "Rənglər dizaynı pisləşdirir",
    Explanation: "Rəng təkcə məlumat ötürməsi üçün istifadə edildikdə, rəngkor istifadəçilər həmin məlumatı ala bilməyəcəklər.",
    Link: "https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html"
  },
  {
    Question: "Əlçatanlıq üçün form xəta mesajları necə olmalıdır?",
    Answer: "Aydın, spesifik və ekran oxuyucuları üçün əlçatan",
    Distractor1: "Qısa və qeyri-müəyyən",
    Distractor2: "Yalnız rənglə göstərilən",
    Distractor3: "Heç bir xəta mesajı tələb olunmur",
    Explanation: "Əlçatanlıq xəta mesajları istifadəçilərə hansı səhvi etdiklərini aydın şəkildə başa salmağa kömək edir.",
    Link: "https://www.w3.org/WAI/tutorials/forms/notifications/"
  },
  {
    Question: "Əlçatanlıq üçün modal pəncərələr necə dizayn edilməlidir?",
    Answer: "Klaviatura ilə bağlanmalı, fokus tutulmalı və ekran oxuyucuları üçün əlçatan olmalı",
    Distractor1: "Çoxlu animasiyalar ilə",
    Distractor2: "Minimal dizayn",
    Distractor3: "Heç bir xüsusi tələb yoxdur",
    Explanation: "Modal pəncərələr bütün istifadəçilər üçün əlçatan və istifadə oluna bilən olmalıdır.",
    Link: "https://www.w3.org/WAI/tutorials/forms/labels/"
  },
  {
    Question: "Əlçatanlıq üçün linklərin məzmunu necə olmalıdır?",
    Answer: "Aydın, kontekstə uyğun və özü-özlüyündə məna kəsb edən",
    Distractor1: "Qısa və qeyri-müəyyən",
    Distractor2: "Yalnız 'Buraya klik edin' kimi ümumi sözlər",
    Distractor3: "Heç bir xüsusi tələb yoxdur",
    Explanation: "Linkin məzmunu aydın olmalıdır ki, istifadəçilər onun məqsədini başa düşə bilsinlər.",
    Link: "https://www.w3.org/WAI/tips/writing/#link-text"
  },
  {
    Question: "Əlçatanlıq üçün animasiyalar necə idarə edilməlidir?",
    Answer: "Animasiyanı dayandırmaq, duracaq və ya gizlətmək imkanı olmalıdır",
    Distractor1: "Çoxlu animasiyalar",
    Distractor2: "Heç bir animasiya olmamalıdır",
    Distractor3: "Yalnız statik dizayn",
    Explanation: "Animasiyalar bəzi istifadəçilər üçün problemli ola bilər, ona görə də idarə oluna bilən olmalıdır.",
    Link: "https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html"
  },
  {
    Question: "Əlçatanlıq üçün form etiketləri (labels) necə olmalıdır?",
    Answer: "Açıq, aydın və form elementləri ilə əlaqəli",
    Distractor1: "Qısa və qeyri-müəyyən",
    Distractor2: "Yalnız rənglə göstərilən",
    Distractor3: "Heç bir etiket tələb olunmur",
    Explanation: "Form etiketləri istifadəçilərə form sahələrinin məqsədini aydın şəkildə başa salmağa kömək edir.",
    Link: "https://www.w3.org/WAI/tutorials/forms/labels/"
  },
  {
    Question: "Əlçatanlıq üçün səhifənin strukturu necə olmalıdır?",
    Answer: "Semantik HTML, aydın başlıqlar, məntiqi ardıcıllıq",
    Distractor1: "Çoxlu dizayn elementləri",
    Distractor2: "Minimal dizayn",
    Distractor3: "Heç bir xüsusi tələb yoxdur",
    Explanation: "Səhifənin strukturu bütün istifadəçilər üçün məzmunun asan başa düşülməsini təmin etməlidir.",
    Link: "https://www.w3.org/WAI/tutorials/page-structure/"
  }
];

export default accessibilityQuiz;
