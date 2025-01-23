const linuxQuiz = [
  {
    Question: "Hansı Linux aləti CPU performansını təhlil etmək və bottleneck-ləri müəyyənləşdirmək üçün geniş istifadə olunur?",
    Answer: "Perf",
    Distractor1: "top",
    Distractor2: "htop",
    Distractor3: "ps",
    Explanation: "Perf, CPU performansını təhlil etmək, sistem hadisələrini izləmək və bottleneck-ləri müəyyənləşdirmək üçün güclü bir Linux alətidir",
    Link: "https://www.freecodecamp.org/news/helpful-linux-commands-you-should-know"
  },
  {
    Question: "Linux-da hansı əmr sistemdə işləyən proseslərin siyahısını göstərməyə imkan verir?",
    Answer: "ps",
    Distractor1: "top",
    Distractor2: "kill",
    Distractor3: "ls",
    Explanation: "ps əmri sistemdə mövcud olan proseslərin detallı siyahısını təqdim edir",
    Link: "https://www.linuxcommand.org/lc3_man_pages/ps1.html"
  },
  {
    Question: "Hansı Linux əmri fayl sisteminin boş yerini yoxlamağa imkan verir?",
    Answer: "df",
    Distractor1: "du",
    Distractor2: "free",
    Distractor3: "mount",
    Explanation: "df (disk free) əmri diskdəki boş yeri və istifadə olunan sahəni göstərir",
    Link: "https://www.geeksforgeeks.org/df-command-in-linux-with-examples/"
  },
  {
    Question: "Linux-da hansı əmr sistemin yaddaş istifadəsini göstərən başlıca alətdir?",
    Answer: "free",
    Distractor1: "top",
    Distractor2: "ps",
    Distractor3: "vmstat",
    Explanation: "free əmri sistemin RAM yaddaşının istifadəsi haqqında ətraflı məlumat verir",
    Link: "https://www.tecmint.com/check-linux-memory-usage/"
  },
  {
    Question: "Linux-da hansı əmr faylların və qovluqların icazələrini dəyişməyə imkan verir?",
    Answer: "chmod",
    Distractor1: "chown",
    Distractor2: "chgrp",
    Distractor3: "setfacl",
    Explanation: "chmod əmri fayl və qovluqların oxuma, yazma və icra etmə icazələrini dəyişir",
    Link: "https://www.linuxtoday.com/developer/understanding-linux-file-permissions/"
  },
  {
    Question: "Hansı Linux əmri sistemdə hal-hazırda işləyən proseslərin real vaxt məlumatlarını göstərir?",
    Answer: "top",
    Distractor1: "ps",
    Distractor2: "htop",
    Distractor3: "kill",
    Explanation: "top əmri sistemdə CPU və yaddaş istifadəsini real vaxt rejimində izləməyə imkan verir",
    Link: "https://www.tecmint.com/12-top-command-examples-in-linux/"
  },
  {
    Question: "Linux-da hansı əmr sistemə qoşulmuş faylların siyahısını göstərir?",
    Answer: "mount",
    Distractor1: "df",
    Distractor2: "du",
    Distractor3: "fdisk",
    Explanation: "mount əmri sistemə qoşulmuş bütün faylların və qurğuların siyahısını təqdim edir",
    Link: "https://www.linux.com/training-tutorials/understanding-linux-mount-command/"
  },
  {
    Question: "Hansı Linux əmri faylların və qovluqların sahibini dəyişməyə imkan verir?",
    Answer: "chown",
    Distractor1: "chmod",
    Distractor2: "chgrp",
    Distractor3: "chmod +x",
    Explanation: "chown əmri faylların və qovluqların sahibini dəyişməyə xidmət edir",
    Link: "https://www.linuxtechi.com/chown-command-examples-in-linux/"
  },
  {
    Question: "Linux-da hansı əmr sistemdə işləyən prosesin işini dayandırmağa imkan verir?",
    Answer: "kill",
    Distractor1: "stop",
    Distractor2: "pause",
    Distractor3: "shutdown",
    Explanation: "kill əmri sistemdə müəyyən prosesi dayandırmaq üçün istifadə olunur",
    Link: "https://www.tecmint.com/kill-process-in-linux/"
  },
  {
    Question: "Hansı Linux əmri faylların və qovluqların ölçüsünü göstərməyə imkan verir?",
    Answer: "du",
    Distractor1: "df",
    Distractor2: "ls",
    Distractor3: "size",
    Explanation: "du (disk usage) əmri faylların və qovluqların disk istifadəsini göstərir",
    Link: "https://www.geeksforgeeks.org/du-command-linux/"
  },
  {
    Question: "Linux-da hansı əmr sistemdə olan bütün istifadəçilərin siyahısını göstərir?",
    Answer: "cat /etc/passwd",
    Distractor1: "users",
    Distractor2: "who",
    Distractor3: "w",
    Explanation: "/etc/passwd faylı sistemdəki bütün istifadəçilərin məlumatlarını saxlayır",
    Link: "https://www.linuxjournal.com/content/understanding-etcpasswd-file"
  },
  {
    Question: "Hansı Linux əmri sistemdə hal-hazırda aktiv olan istifadəçiləri göstərir?",
    Answer: "who",
    Distractor1: "users",
    Distractor2: "w",
    Distractor3: "whoami",
    Explanation: "who əmri sistemə daxil olmuş istifadəçilərin siyahısını təqdim edir",
    Link: "https://www.tecmint.com/who-command-in-linux/"
  }
];

export default linuxQuiz;