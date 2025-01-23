const sqlQuiz = [
  {
    Question: "Aşağıdakılardan hansı SQL inyeksiya hücumlarından qorunmaq üçün ən təsirli üsuldur?", 
    Answer: "SQL girişlərini təmizləyən müasir SQL kitabxanasından istifadə",
    Distractor1: "Verilənlər bazasına daxil olmaq üçün güclü parollardan istifadə",
    Distractor2: "Müəyyən verilənlər bazası icazələrinin deaktiv edilməsi",
    Distractor3: "Verilənlər bazası cədvəllərinin şifrələnməsi",
    Explanation: 
      "Girişləri dezinfeksiya edən müasir SQL kitabxanasından istifadə istifadəçi daxiletməsinin icra edilə bilən kod deyil, verilənlər kimi qəbul edilməsini təmin etməklə SQL inyeksiyasının qarşısını alır.",
    Link: "https://www.freecodecamp.org/news/a-beginners-guide-to-sql/#heading-chapter-11-database-performance"
  },
  {
    Question: "SQL-də hansı əmr verilənləri seçmək üçün istifadə olunur?",
    Answer: "SELECT",
    Distractor1: "INSERT",
    Distractor2: "UPDATE",
    Distractor3: "DELETE",
    Explanation: "SQL-də 'SELECT' əmri verilənləri seçmək və ya əldə etmək üçün istifadə olunur.",
    Link: "https://www.w3schools.com/sql/sql_select.asp"
  },
  {
    Question: "Verilənlər bazasında təkrarlanan verilənlərin qarşısını almaq üçün hansı SQL açar sözündən istifadə olunur?",
    Answer: "DISTINCT",
    Distractor1: "GROUP",
    Distractor2: "ORDER",
    Distractor3: "LIMIT",
    Explanation: "DISTINCT açar sözü təkrarlanan verilənlərin qarşısını almaq üçün istifadə olunur.",
    Link: "https://www.w3schools.com/sql/sql_distinct.asp"
  },
  {
    Question: "SQL-də hansı operator iki verilən şərtin hər ikisi doğru olduqda doğru nəticə qaytarır?",
    Answer: "AND",
    Distractor1: "OR",
    Distractor2: "NOT",
    Distractor3: "LIKE",
    Explanation: "AND operatoru yalnız hər iki şərt doğru olduqda doğru nəticə qaytarır.",
    Link: "https://www.w3schools.com/sql/sql_and_or.asp"
  },
  {
    Question: "SQL-də verilənləri artan sırada sıralamaq üçün hansı açar söz istifadə olunur?",
    Answer: "ASC",
    Distractor1: "DESC",
    Distractor2: "ORDER",
    Distractor3: "BY",
    Explanation: "ASC açar sözü verilənləri artan sırada sıralamaq üçün istifadə olunur.",
    Link: "https://www.w3schools.com/sql/sql_orderby.asp"
  },
  {
    Question: "SQL-də bir cədvələ yeni verilən əlavə etmək üçün hansı əmr istifadə olunur?",
    Answer: "INSERT INTO",
    Distractor1: "ADD",
    Distractor2: "UPDATE",
    Distractor3: "SELECT",
    Explanation: "INSERT INTO əmri yeni verilənləri bir cədvələ əlavə etmək üçün istifadə olunur.",
    Link: "https://www.w3schools.com/sql/sql_insert.asp"
  },
  {
    Question: "SQL-də verilənləri yeniləmək üçün hansı əmr istifadə olunur?",
    Answer: "UPDATE",
    Distractor1: "MODIFY",
    Distractor2: "INSERT",
    Distractor3: "ALTER",
    Explanation: "UPDATE əmri verilənləri yeniləmək üçün istifadə olunur.",
    Link: "https://www.w3schools.com/sql/sql_update.asp"
  },
  {
    Question: "SQL-də bir cədvəli silmək üçün hansı əmr istifadə olunur?",
    Answer: "DROP TABLE",
    Distractor1: "DELETE TABLE",
    Distractor2: "REMOVE TABLE",
    Distractor3: "CLEAR TABLE",
    Explanation: "DROP TABLE əmri bir cədvəli tamamilə silmək üçün istifadə olunur.",
    Link: "https://www.w3schools.com/sql/sql_drop.asp"
  },
  {
    Question: "SQL-də verilənlərin boş yerlər daxil olmaqla uyğun gəlməsini yoxlamaq üçün hansı operator istifadə olunur?",
    Answer: "LIKE",
    Distractor1: "IN",
    Distractor2: "MATCH",
    Distractor3: "COMPARE",
    Explanation: "LIKE operatoru verilənlərin müəyyən nümunəyə uyğun olub-olmadığını yoxlamaq üçün istifadə olunur.",
    Link: "https://www.w3schools.com/sql/sql_like.asp"
  },
  {
    Question: "SQL-də hansı açar sözü sütunların adlarını dəyişdirmək üçün istifadə olunur?",
    Answer: "AS",
    Distractor1: "RENAME",
    Distractor2: "CHANGE",
    Distractor3: "ALTER",
    Explanation: "AS açar sözü sütunların adlarını müvəqqəti dəyişdirmək üçün istifadə olunur.",
    Link: "https://www.w3schools.com/sql/sql_alias.asp"
  },
  {
    Question: "SQL-də verilənlərin hansı operator ilə müəyyən bir intervala uyğun olub-olmadığını yoxlamaq olar?",
    Answer: "BETWEEN",
    Distractor1: "IN",
    Distractor2: "LIKE",
    Distractor3: "WITHIN",
    Explanation: "BETWEEN operatoru verilənlərin müəyyən bir intervalda olub-olmadığını yoxlamaq üçün istifadə olunur.",
    Link: "https://www.w3schools.com/sql/sql_between.asp"
  },
  {
    Question: "SQL-də birləşdirmə əməliyyatını hansı əmr yerinə yetirir?",
    Answer: "JOIN",
    Distractor1: "MERGE",
    Distractor2: "UNION",
    Distractor3: "LINK",
    Explanation: "JOIN əmri müxtəlif cədvəlləri birləşdirmək üçün istifadə olunur.",
    Link: "https://www.w3schools.com/sql/sql_join.asp"
  },
  {
    Question: "SQL-də cədvəlin quruluşunu dəyişdirmək üçün hansı əmr istifadə olunur?",
    Answer: "ALTER TABLE",
    Distractor1: "MODIFY TABLE",
    Distractor2: "UPDATE TABLE",
    Distractor3: "CHANGE TABLE",
    Explanation: "ALTER TABLE əmri cədvəlin quruluşunu dəyişdirmək üçün istifadə olunur.",
    Link: "https://www.w3schools.com/sql/sql_alter.asp"
  },
  {
    Question: "SQL-də verilənləri qruplaşdırmaq üçün hansı açar sözdən istifadə olunur?",
    Answer: "GROUP BY",
    Distractor1: "ORDER BY",
    Distractor2: "GROUP",
    Distractor3: "BY",
    Explanation: "GROUP BY açar sözü verilənləri qruplaşdırmaq üçün istifadə olunur.",
    Link: "https://www.w3schools.com/sql/sql_groupby.asp"
  },
  {
    Question: "SQL-də yalnız fərqli verilənləri göstərmək üçün hansı operator istifadə olunur?",
    Answer: "DISTINCT",
    Distractor1: "UNIQUE",
    Distractor2: "FILTER",
    Distractor3: "SELECT",
    Explanation: "DISTINCT operatoru yalnız fərqli verilənləri seçmək üçün istifadə olunur.",
    Link: "https://www.w3schools.com/sql/sql_distinct.asp"
  },
  {
    Question: "Bir SQL sorğusunda nəticələrin sayını məhdudlaşdırmaq üçün hansı açar sözdən istifadə olunur?",
    Answer: "LIMIT",
    Distractor1: "MAX",
    Distractor2: "COUNT",
    Distractor3: "RESTRICT",
    Explanation: "LIMIT açar sözü nəticələrin sayını məhdudlaşdırmaq üçün istifadə olunur.",
    Link: "https://www.w3schools.com/sql/sql_top.asp"
  },
  {
    Question: "SQL-də bir verilənlər bazasının tam ehtiyat nüsxəsini çıxarmaq üçün hansı əmrdən istifadə olunur?",
    Answer: "BACKUP DATABASE",
    Distractor1: "SAVE DATABASE",
    Distractor2: "COPY DATABASE",
    Distractor3: "EXPORT DATABASE",
    Explanation: "BACKUP DATABASE əmri verilənlər bazasının tam ehtiyat nüsxəsini çıxarmaq üçün istifadə olunur.",
    Link: "https://www.sqlservertutorial.net/sql-server-backup-database/"
  },
  {
    Question: "Bir cədvəlin müəyyən sütunlarına indeks əlavə etmək üçün hansı əmr istifadə olunur?",
    Answer: "CREATE INDEX",
    Distractor1: "ADD INDEX",
    Distractor2: "NEW INDEX",
    Distractor3: "INDEX TABLE",
    Explanation: "CREATE INDEX əmri cədvəl sütunlarına indeks əlavə etmək üçün istifadə olunur.",
    Link: "https://www.w3schools.com/sql/sql_create_index.asp"
  },
  {
    Question: "SQL-də 'NULL' dəyərləri yoxlamaq üçün hansı açar sözdən istifadə olunur?",
    Answer: "IS NULL",
    Distractor1: "CHECK NULL",
    Distractor2: "EQUAL NULL",
    Distractor3: "NOT NULL",
    Explanation: "IS NULL açar sözü bir sütunda NULL dəyərləri yoxlamaq üçün istifadə olunur.",
    Link: "https://www.w3schools.com/sql/sql_null_values.asp"
  },
  {
    Question: "SQL-də bir sütunun dəyərini artırmaq üçün hansı riyazi operator istifadə olunur?",
    Answer: "+=",
    Distractor1: "-=",
    Distractor2: "*=",
    Distractor3: "/=",
    Explanation: "+= operatoru sütunun mövcud dəyərini artırmaq üçün istifadə olunur.",
    Link: "https://www.w3schools.com/sql/sql_functions_math.asp"
  }
];

export default sqlQuiz;
