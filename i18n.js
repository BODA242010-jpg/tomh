/* ترجمات الواجهة. لإضافة لغة جديدة: أضف عمودًا لكل سطر هنا (ar|en|fr|لغتك) وسجّلها في LANGS داخل app.js.
   النص العربي هو المفتاح. ما لا يوجد له ترجمة يبقى بالعربية. */
const I18N_RAW=`
رحلتك تبدأ بخطوة|Your journey starts with one step|Ton voyage commence par un pas
كل يوم بتقرب|Every day you get closer|Chaque jour tu te rapproches
من حلمك الكبير.|to your big dream.|de ton grand rêve.
نظّم مذاكرتك، تابع تقدمك، وخلي طموحك دايمًا قدام عينك.|Organize your studying, track your progress, and keep your ambition in front of you.|Organise tes révisions, suis tes progrès et garde ton ambition devant toi.
مؤقت مذاكرة دقيق|Accurate study timer|Minuteur d'étude précis
بنك أخطاء ذكي|Smart mistakes bank|Banque d'erreurs intelligente
اختبارات وتقارير|Exams and reports|Examens et rapports
مساعد ذكي بالذكاء الاصطناعي|AI-powered assistant|Assistant propulsé par l'IA
صاحبة الفكرة|Idea owner|Porteuse de l'idée
مبرمج الموقع|Website developer|Développeur du site
نورهان فتحي|Nourhan Fathy|Nourhan Fathy
عبدالرحمن أبو السعود|Abdelrahman Abo El-Saoud|Abdelrahman Abou El-Saoud
واتساب|WhatsApp|WhatsApp
تواصل مع المبرمج|Contact the developer|Contacter le développeur
الحلم|Dream|Rêve
الملف الدراسي|Study profile|Profil d'étude
إيه حلمك اللي نفسك تحققه؟|What dream do you want to achieve?|Quel rêve veux-tu réaliser ?
كل حلم كبير بيبدأ بخطوة صغيرة، وإحنا هنا علشان نساعدك توصل لحلمك.|Every big dream starts with a small step, and we're here to help you reach yours.|Chaque grand rêve commence par un petit pas, et nous sommes là pour t'aider à l'atteindre.
طبيب|Doctor|Médecin
مهندس|Engineer|Ingénieur
صيدلي|Pharmacist|Pharmacien
مبرمج|Programmer|Programmeur
محاسب|Accountant|Comptable
معلم|Teacher|Enseignant
إعلامي|Media professional|Journaliste
عالم|Scientist|Scientifique
أو اكتب حلمًا آخر|Or type another dream|Ou écris un autre rêve
التالي|Next|Suivant
تخطي السؤال|Skip this question|Passer la question
عندي ملف سابق|I have an existing profile|J'ai déjà un profil
عرض تجريبي للموقع|Demo of the site|Démo du site
جهّز ملفك الدراسي|Set up your study profile|Prépare ton profil d'étude
اسمك أو اسمك المستعار|Your name or nickname|Ton nom ou pseudo
الصف الدراسي|Grade|Niveau
النظام الدراسي|Study system|Système d'étude
المسار / الشعبة|Track / Branch|Filière / Section
الوقت المتاح للمذاكرة يوميًا (دقيقة)|Daily study time available (minutes)|Temps d'étude quotidien (minutes)
موادك (تتعبأ تلقائيًا حسب صفك ويمكنك تعديلها)|Your subjects (auto-filled for your grade, you can edit)|Tes matières (remplies selon ton niveau, modifiables)
افصل بين المواد بفاصلة|Separate subjects with commas|Sépare les matières par des virgules
ابدأ رحلتي|Start my journey|Commencer mon parcours
الصف الأول الثانوي|First Year Secondary|Première année secondaire
الصف الثاني الثانوي|Second Year Secondary|Deuxième année secondaire
الصف الثالث الثانوي|Third Year Secondary|Troisième année secondaire
الثانوية العامة|General Secondary (Thanaweya Amma)|Secondaire général (Thanaweya Amma)
الطب وعلوم الحياة|Medicine and Life Sciences|Médecine et sciences de la vie
الهندسة وعلوم الحاسب|Engineering and Computer Science|Ingénierie et informatique
الأعمال|Business|Commerce
الآداب والفنون|Arts and Humanities|Lettres et arts
علمي|Science|Scientifique
أدبي|Literary|Littéraire
علمي علوم|Science (Biology)|Scientifique (Sciences)
علمي رياضة|Science (Math)|Scientifique (Maths)
أهلًا بعودتك|Welcome back|Bon retour
اختر ملفك|Choose your profile|Choisis ton profil
ملف جديد|New profile|Nouveau profil
ملف عرض تجريبي (بيانات تجريبية)|Demo profile (sample data)|Profil de démonstration (données fictives)
الملفات محفوظة على هذا الجهاز فقط.|Profiles are stored on this device only.|Les profils sont stockés sur cet appareil uniquement.
اللغة العربية|Arabic|Arabe
اللغة الأجنبية الأولى|First foreign language|Première langue étrangère
اللغة الأجنبية الثانية|Second foreign language|Deuxième langue étrangère
اللغة الإنجليزية|English|Anglais
الرياضيات|Mathematics|Mathématiques
الرياضيات العامة|General Mathematics|Mathématiques générales
الفيزياء|Physics|Physique
الكيمياء|Chemistry|Chimie
الأحياء|Biology|Biologie
التاريخ|History|Histoire
التاريخ المصري|Egyptian History|Histoire égyptienne
الجغرافيا|Geography|Géographie
الإحصاء|Statistics|Statistiques
علم النفس|Psychology|Psychologie
العلوم المتكاملة|Integrated Sciences|Sciences intégrées
الفلسفة والمنطق|Philosophy and Logic|Philosophie et logique
المحاسبة|Accounting|Comptabilité
إدارة الأعمال|Business Administration|Gestion d'entreprise
البرمجة والذكاء الاصطناعي|Programming and AI|Programmation et IA
الأساسي|Essentials|Essentiel
الدراسة|Study|Étude
التحليل والمتابعة|Insights|Suivi
الأدوات|Tools|Outils
الرئيسية|Home|Accueil
المناهج الدراسية الحديثة|Modern Curricula|Programmes modernes
البكالوريا المصرية|Egyptian Baccalaureate|Baccalauréat égyptien
مخطط المذاكرة|Study Planner|Planificateur
عداد المذاكرة|Study Timer|Minuteur d'étude
التراكمات|Backlog|Retards
بنك الأخطاء|Mistakes Bank|Banque d'erreurs
الاختبارات|Exams|Examens
كروت المراجعة|Flashcards|Cartes de révision
ملاحظاتي|My Notes|Mes notes
التحليلات|Analytics|Analyses
الإنجازات|Achievements|Réussites
تقرير الأداء|Performance Report|Rapport de performance
المكتبة|Library|Bibliothèque
المساعد الذكي|AI Assistant|Assistant IA
الإعدادات|Settings|Paramètres
تبديل الملف|Switch profile|Changer de profil
ابحث عن قسم...|Search sections...|Rechercher une section...
القائمة|Menu|Menu
تبديل الوضع|Toggle theme|Changer le thème
تعلّم بذكاء، وتقدّم بثبات|Learn smart, progress steadily|Apprends malin, progresse avec constance
ابدأ جلسة مذاكرة|Start a study session|Commencer une session
ملف تجريبي|Demo profile|Profil de démo
ملف تجريبي: كل البيانات وهمية للعرض فقط|Demo profile: all data is fake, for display only|Profil de démo : toutes les données sont fictives
كل خطوة صغيرة بتقربك من هدفك.|Every small step brings you closer to your goal.|Chaque petit pas te rapproche de ton objectif.
ساعات المذاكرة|Study hours|Heures d'étude
إجمالي|Total|Total
إنجاز المنهج|Curriculum progress|Progression du programme
لم يُضف منهج بعد|No curriculum added yet|Aucun programme ajouté
دروس متراكمة|Backlog lessons|Leçons en retard
لم تكتمل|Not completed|Non terminées
أسئلة للمراجعة|Questions to review|Questions à réviser
سلسلة الأيام|Day streak|Série de jours
يوم متتالٍ|days in a row|jours d'affilée
دروس مكتملة|Completed lessons|Leçons terminées
درس|lessons|leçons
مذاكرة اليوم|Today's study|Étude d'aujourd'hui
تعديل الهدف (دقيقة)|Update goal (minutes)|Modifier l'objectif (minutes)
مهام اليوم|Today's tasks|Tâches du jour
جدول الأسبوع (دقائق المذاكرة)|Weekly chart (study minutes)|Semaine (minutes d'étude)
آخر الإنجازات|Latest achievements|Dernières réussites
لا توجد مهام|No tasks|Aucune tâche
أضف أول مهمة من قسم مخطط المذاكرة.|Add your first task from the Study Planner.|Ajoute ta première tâche dans le planificateur.
لا إنجازات بعد|No achievements yet|Aucune réussite pour l'instant
ابدأ جلسة مذاكرة لتفتح أول شارة.|Start a study session to unlock your first badge.|Lance une session pour débloquer ton premier badge.
أول جلسة مذاكرة|First study session|Première session d'étude
3 أيام متتالية|3-day streak|3 jours d'affilée
أول درس مكتمل|First completed lesson|Première leçon terminée
أنجزت درسًا متراكمًا|Cleared a backlog lesson|Leçon en retard terminée
راجعت 5 أخطاء|Reviewed 5 mistakes|5 erreurs révisées
10 ساعات مذاكرة|10 study hours|10 heures d'étude
تم الإنجاز|Done|Terminé
لم يُفتح بعد|Locked|Verrouillé
المناهج الدراسية|Curricula|Programmes
لم تختر مواد بعد|You haven't chosen subjects yet|Tu n'as pas encore choisi de matières
أضف موادك من الإعدادات.|Add your subjects from Settings.|Ajoute tes matières dans les paramètres.
ملفات المادة (PDF)|Subject files (PDF)|Fichiers de la matière (PDF)
لم تضف ملفات بعد.|No files added yet.|Aucun fichier ajouté.
إضافة ملف PDF|Add PDF file|Ajouter un fichier PDF
إضافة وحدة ودروس بنفسي|Add a unit and lessons myself|Ajouter moi-même une unité et des leçons
اسم الوحدة|Unit name|Nom de l'unité
الدروس، كل درس في سطر|Lessons, one per line|Leçons, une par ligne
حفظ|Save|Enregistrer
فتح|Open|Ouvrir
تحميل|Download|Télécharger
حذف|Delete|Supprimer
رجوع|Back|Retour
إرسال|Send|Envoyer
ما تضيفه هنا من إدخالك أنت، وليس منهجًا رسميًا.|What you add here is your own input, not an official curriculum.|Ce que tu ajoutes ici vient de toi, ce n'est pas un programme officiel.
هيكل هذه المادة بانتظار المصدر الرسمي من كتب وزارة التربية والتعليم. لا يتم تعبئته بمحتوى غير موثق.|This subject's structure is awaiting the official source from the Ministry of Education books. It is not filled with unverified content.|La structure de cette matière attend la source officielle des manuels du ministère. Elle n'est pas remplie avec du contenu non vérifié.
الوحدات والدروس الرسمية لا تُضاف إلا من كتب الوزارة. تقدر تضيف ملفات PDF ووحدات ودروس من إدخالك لكل مادة.|Official units and lessons come only from the Ministry books. You can add PDF files and your own units and lessons for each subject.|Les unités et leçons officielles viennent uniquement des manuels du ministère. Tu peux ajouter des PDF et tes propres unités et leçons.
نظّم يومك في مهام واضحة.|Organize your day into clear tasks.|Organise ta journée en tâches claires.
مهامك|Your tasks|Tes tâches
إضافة مهمة|Add a task|Ajouter une tâche
اسم المهمة|Task name|Nom de la tâche
حفظ المهمة|Save task|Enregistrer la tâche
لا توجد مهام|No tasks|Aucune tâche
يحسب وقت المذاكرة الفعلي فقط، ولا يحسب وقت التوقف.|Counts only real study time, not paused time.|Ne compte que le temps d'étude réel, pas les pauses.
جاهزة|Ready|Prêt
تعمل الآن|Running|En cours
متوقفة مؤقتًا|Paused|En pause
اختر المادة|Choose subject|Choisir la matière
الدرس (اختياري)|Lesson (optional)|Leçon (facultatif)
هدف الجلسة|Session goal|Objectif de session
بدون هدف|No goal|Sans objectif
ابدأ|Start|Démarrer
استكمال|Resume|Reprendre
إيقاف مؤقت|Pause|Pause
إنهاء وحفظ الجلسة|End and save session|Terminer et enregistrer
إحصائيات|Statistics|Statistiques
اليوم|Today|Aujourd'hui
آخر 7 أيام|Last 7 days|7 derniers jours
آخر 30 يومًا|Last 30 days|30 derniers jours
الإجمالي|Total|Total
أطول جلسة|Longest session|Plus longue session
الجلسات المكتملة|Completed sessions|Sessions terminées
الجلسات السابقة|Previous sessions|Sessions précédentes
لا جلسات بعد|No sessions yet|Aucune session
ابدأ المؤقت وأنهِ الجلسة لتُحفظ هنا.|Start the timer and end the session to save it here.|Lance le minuteur et termine la session pour l'enregistrer ici.
عام|General|Général
قسّم الدرس المتأخر إلى مهام صغيرة وخلّصه بخطة.|Split a late lesson into small tasks and finish it with a plan.|Divise une leçon en retard en petites tâches et termine-la avec un plan.
الدرس المتراكم|Backlog lesson|Leçon en retard
المهام الصغيرة، كل مهمة في سطر|Small tasks, one per line|Petites tâches, une par ligne
إضافة درس متراكم|Add backlog lesson|Ajouter une leçon en retard
أولوية عالية|High priority|Priorité haute
أولوية متوسطة|Medium priority|Priorité moyenne
أولوية منخفضة|Low priority|Priorité basse
صعوبة سهلة|Easy|Facile
صعوبة متوسطة|Medium|Moyenne
صعوبة عالية|Hard|Difficile
دقائق لكل مهمة|Minutes per task|Minutes par tâche
لا دروس متراكمة|No backlog lessons|Aucune leçon en retard
لو في درس متأخر، أضفه وهنقسّمه لخطوات.|If you have a late lesson, add it and we'll split it into steps.|Si tu as une leçon en retard, ajoute-la et nous la diviserons en étapes.
اجمع أخطاءك وراجعها حتى لا تتكرر.|Collect your mistakes and review them so they don't repeat.|Rassemble tes erreurs et révise-les pour qu'elles ne se répètent pas.
إضافة سؤال|Add a question|Ajouter une question
الدرس|Lesson|Leçon
التصنيف (مثال: مسائل، حفظ)|Category (e.g. problems, memorization)|Catégorie (ex. problèmes, mémorisation)
نص السؤال|Question text|Texte de la question
إجابتي|My answer|Ma réponse
الإجابة الصحيحة|Correct answer|Bonne réponse
حفظ السؤال|Save question|Enregistrer la question
لم أفهم الفكرة|Didn't understand the idea|Je n'ai pas compris l'idée
نسيت القانون أو المعلومة|Forgot the rule or fact|J'ai oublié la règle ou l'information
سهو أو استعجال|Carelessness or rushing|Inattention ou précipitation
ضيق الوقت|Ran out of time|Manque de temps
خطأ في الحساب|Calculation error|Erreur de calcul
دروس تحتاج مراجعة أكثر|Lessons that need more review|Leçons à réviser davantage
إعادة اختبار|Retest|Nouveau test
اختبرني في أسئلتي|Quiz me on my questions|Teste-moi sur mes questions
اعرض الإجابة|Show answer|Afficher la réponse
عرفتها|I knew it|Je savais
لسه محتاج مراجعة|Still need review|À réviser encore
أسئلتي|My questions|Mes questions
تمت مراجعته|Reviewed|Révisée
بنك الأخطاء فارغ|Mistakes bank is empty|La banque d'erreurs est vide
أضف أول سؤال أخطأت فيه.|Add the first question you got wrong.|Ajoute la première question où tu as fait une erreur.
اختبر نفسك من بنك أسئلتك. الأسئلة هنا من إدخالك ولا تُنسب للوزارة.|Test yourself from your question bank. Questions here are your own and not attributed to the Ministry.|Teste-toi avec ta banque de questions. Elles viennent de toi et ne sont pas attribuées au ministère.
لا توجد أسئلة رسمية جاهزة. أضف أسئلتك بنفسك أو استورد ملف JSON، وكل سؤال يحمل مصدره.|No ready-made official questions. Add your own or import a JSON file; each question carries its source.|Pas de questions officielles prêtes. Ajoute les tiennes ou importe un fichier JSON ; chaque question porte sa source.
ابدأ اختبارًا|Start an exam|Commencer un examen
الدرس (اختياري، يطابق اسم الدرس تمامًا)|Lesson (optional, must match the lesson name exactly)|Leçon (facultatif, nom exact)
ابدأ (أسئلة عشوائية)|Start (random questions)|Démarrer (questions aléatoires)
نقاط الضعف|Weak points|Points faibles
آخر المحاولات|Latest attempts|Dernières tentatives
لا بيانات بعد|No data yet|Pas encore de données
حل اختبارًا لتظهر نقاط ضعفك.|Take an exam to see your weak points.|Passe un examen pour voir tes points faibles.
لا محاولات.|No attempts.|Aucune tentative.
اختيار من متعدد|Multiple choice|Choix multiple
صح وخطأ|True / False|Vrai / Faux
نص السؤال|Question text|Texte de la question
الإجابة: رقم الاختيار الصحيح، أو صح / خطأ|Answer: correct choice number, or True / False|Réponse : numéro du bon choix, ou Vrai / Faux
التفسير (اختياري)|Explanation (optional)|Explication (facultatif)
حفظ السؤال|Save question|Enregistrer la question
استيراد أسئلة (JSON)|Import questions (JSON)|Importer des questions (JSON)
بنك الأسئلة|Question bank|Banque de questions
البنك فارغ|The bank is empty|La banque est vide
إنهاء وتصحيح|Finish and grade|Terminer et corriger
اختبار جارٍ|Exam in progress|Examen en cours
نتيجة الاختبار|Exam result|Résultat de l'examen
اقلب الكارت واختبر ذاكرتك.|Flip the card and test your memory.|Retourne la carte et teste ta mémoire.
لا كروت بعد|No cards yet|Aucune carte
أضف كارتك الأول.|Add your first card.|Ajoute ta première carte.
كارت جديد|New card|Nouvelle carte
السؤال|Question|Question
الإجابة|Answer|Réponse
حفظ الكارت|Save card|Enregistrer la carte
السابق|Previous|Précédent
اقلب|Flip|Retourner
دفترك الشخصي للأفكار المهمة.|Your personal notebook for important ideas.|Ton carnet personnel pour les idées importantes.
العنوان|Title|Titre
الملاحظة|Note|Note
حفظ الملاحظة|Save note|Enregistrer la note
لا ملاحظات بعد|No notes yet|Aucune note
ملخص مبني على نشاطك الفعلي فقط.|A summary based only on your real activity.|Un résumé basé uniquement sur ton activité réelle.
وقت المذاكرة لكل مادة|Study time per subject|Temps d'étude par matière
أسباب الأخطاء|Mistake reasons|Causes des erreurs
لا أخطاء مسجلة|No recorded mistakes|Aucune erreur enregistrée
احفظ روابط مصادرك التعليمية.|Save links to your learning resources.|Enregistre les liens de tes ressources.
اسم المورد|Resource name|Nom de la ressource
إضافة|Add|Ajouter
لا موارد بعد|No resources yet|Aucune ressource
غير مفعّل بعد|Not activated yet|Pas encore activé
اسأل عن أي درس وهيشرحلك خطوة بخطوة.|Ask about any lesson and it will explain step by step.|Pose une question sur une leçon, il t'explique pas à pas.
ابدأ بسؤال|Start with a question|Commence par une question
مثال: اشرحلي قانون نيوتن التاني بمثال بسيط|Example: explain Newton's second law with a simple example|Exemple : explique la deuxième loi de Newton avec un exemple simple
اكتب سؤالك...|Type your question...|Écris ta question...
شرح مبسط|Simple explanation|Explication simple
أسئلة تدريبية|Practice questions|Questions d'entraînement
تلخيص|Summary|Résumé
خطة مذاكرة|Study plan|Plan d'étude
اشرح أخطائي|Explain my mistakes|Explique mes erreurs
مسح المحادثة|Clear chat|Effacer la discussion
جاري التفكير…|Thinking…|Réflexion…
الإجابات من ذكاء اصطناعي وقد تخطئ، راجع كتاب الوزارة. لا يُرسل اسمك أو أي بيانات شخصية.|Answers come from AI and may be wrong; check the Ministry book. Your name or personal data is never sent.|Les réponses viennent d'une IA et peuvent être fausses ; vérifie le manuel. Ton nom et tes données personnelles ne sont jamais envoyés.
عدّل ملفك أو بدّل بين الملفات.|Edit your profile or switch between profiles.|Modifie ton profil ou change de profil.
ملفي|My profile|Mon profil
حلمي|My dream|Mon rêve
المسار أو الشعبة|Track or branch|Filière ou section
المواد (افصل بفاصلة)|Subjects (comma separated)|Matières (séparées par des virgules)
حفظ التعديلات|Save changes|Enregistrer les modifications
البيانات|Data|Données
تفعيل إشعارات المهام|Enable task notifications|Activer les notifications de tâches
إضافة مواد صفي تلقائيًا|Auto-add my grade's subjects|Ajouter les matières de mon niveau
تصدير نسخة احتياطية|Export backup|Exporter une sauvegarde
استيراد نسخة|Import backup|Importer une sauvegarde
استيراد منهج رسمي (JSON)|Import official curriculum (JSON)|Importer un programme officiel (JSON)
حذف هذا الملف|Delete this profile|Supprimer ce profil
البيانات على هذا الجهاز فقط. صدّر نسخة احتياطية بانتظام.|Data is stored on this device only. Export a backup regularly.|Les données sont sur cet appareil uniquement. Exporte une sauvegarde régulièrement.
ملفات PDF لا تدخل في النسخة الاحتياطية، احتفظ بأصولها.|PDF files are not included in backups; keep the originals.|Les PDF ne sont pas inclus dans la sauvegarde ; garde les originaux.
اللغة|Language|Langue
طباعة / حفظ PDF|Print / Save as PDF|Imprimer / Enregistrer en PDF
المذاكرة لكل مادة|Study per subject|Étude par matière
إجمالي المذاكرة|Total study|Étude totale
الجلسات|Sessions|Sessions
دروس مكتملة|Completed lessons|Leçons terminées
تراكمات مفتوحة|Open backlog items|Retards ouverts
أخطاء غير مراجعة|Unreviewed mistakes|Erreurs non révisées
اختبارات|Exams|Examens
الصفحة غير موجودة|Page not found|Page introuvable
الرجوع للرئيسية|Back to home|Retour à l'accueil
الرابط اللي فتحته مش موجود.|The link you opened doesn't exist.|Le lien que tu as ouvert n'existe pas.
نتائج البحث|Search results|Résultats de recherche
لا نتائج|No results|Aucun résultat
جرّب كلمة أخرى.|Try another word.|Essaie un autre mot.
قسم|Section|Section
خطأ|Mistake|Erreur
ملاحظة|Note|Note
كارت|Card|Carte
تراكم|Backlog|Retard
مواد الصف الثاني منقولة من إعلان الوزارة كما نشرته الصحف (الوطن). لم أضف نسب نجاح أو شروط قبول الجامعات أو مواد الصف الثالث لأنها لم تتأكد من مصدر رسمي.|Second-year subjects are taken from the Ministry announcement as reported by the press. Pass rates, university admission rules and third-year subjects are not included because they were not confirmed by an official source.|Les matières de 2e année viennent de l'annonce du ministère rapportée par la presse. Taux de réussite, conditions d'admission et matières de 3e année non inclus faute de source officielle.
تم حفظ الملف|File saved|Fichier enregistré
تمت إضافة الملف|File added|Fichier ajouté
تمت الإضافة|Added|Ajouté
تمت إضافة المهمة|Task added|Tâche ajoutée
تم حفظ السؤال|Question saved|Question enregistrée
تمت إضافة السؤال|Question added|Question ajoutée
تم التصحيح|Graded|Corrigé
انتهى الوقت وتم التصحيح|Time is up and the exam was graded|Temps écoulé, examen corrigé
تم حفظ التعديلات|Changes saved|Modifications enregistrées
الملف ليس PDF صالحًا|This is not a valid PDF file|Ce n'est pas un PDF valide
الملف أكبر من 25 ميجابايت|File is larger than 25 MB|Le fichier dépasse 25 Mo
الملف غير متوفر على هذا الجهاز|File is not available on this device|Fichier indisponible sur cet appareil
تعذر حفظ الملف (التخزين ممتلئ أو غير متاح)|Could not save the file (storage full or unavailable)|Impossible d'enregistrer le fichier (stockage plein ou indisponible)
اكتب اسم الوحدة ودرسًا واحدًا على الأقل|Enter a unit name and at least one lesson|Saisis un nom d'unité et au moins une leçon
متأكد من الحذف؟ لا يمكن التراجع.|Are you sure you want to delete? This cannot be undone.|Confirmer la suppression ? Action irréversible.
هذا ملف تجريبي ببيانات وهمية. احذفه من الإعدادات.|This is a demo profile with fake data. Delete it from Settings.|Profil de démonstration avec données fictives. Supprime-le dans les paramètres.
`;
const I18N_RULES=[
[/^(\d+) دقيقة$/,"$1 min","$1 min"],[/^([\d.]+) ساعة$/,"$1 h","$1 h"],[/^(\d+) د$/,"$1 min","$1 min"],
[/^مرحبًا (.+?)( 👋)?$/,"Welcome $1$2","Bienvenue $1$2"],[/^أهلًا بيك يا (.+)$/,"Welcome, $1","Bienvenue, $1"],
[/^حلمي: (.+)$/,"My dream: $1","Mon rêve : $1"],[/^المستوى (\d+)$/,"Level $1","Niveau $1"],[/^من (\d+)$/,"of $1","sur $1"],
[/^(\d+) من (\d+) درس$/,"$1 of $2 lessons","$1 sur $2 leçons"],[/^(\d+) من (\d+) درس مكتمل$/,"$1 of $2 lessons completed","$1 sur $2 leçons terminées"],
[/^هدفي الأسبوعي: (.+) من (.+)$/,"Weekly goal: $1 of $2","Objectif hebdo : $1 sur $2"],
[/^كل دقيقة النهاردة بتقربك من حلمك: (.+)\.$/,"Every minute today brings you closer to your dream: $1.","Chaque minute aujourd'hui te rapproche de ton rêve : $1."],
[/^(\d+) أخطاء$/,"$1 mistakes","$1 erreurs"],[/^(\d+) خطأ من (\d+)$/,"$1 wrong of $2","$1 fausses sur $2"],
[/^بنك الأسئلة: (\d+) سؤال$/,"Question bank: $1 questions","Banque : $1 questions"],[/^(\d+) سؤال$/,"$1 questions","$1 questions"],
[/^(\d+) من (\d+)$/,"$1 of $2","$1 sur $2"],[/^متبقي (\d+) من (\d+)$/,"$1 of $2 remaining","$1 sur $2 restantes"],
[/^الوقت (.+)$/,"Time $1","Temps $1"],[/^تم حفظ (\d+) دقيقة$/,"Saved $1 minutes","$1 minutes enregistrées"],
[/^أضيف (.+) • الموعد (.+)$/,"Added $1 • Due $2","Ajouté $1 • Échéance $2"],[/^المصدر: (.+)$/,"Source: $1","Source : $1"],
[/^إجابتك: (.+)$/,"Your answer: $1","Ta réponse : $1"],[/^الصحيحة: (.+)$/,"Correct: $1","Bonne : $1"],[/^التفسير: (.+)$/,"Explanation: $1","Explication : $1"],
[/^تذكير: (.+) بعد (\d+) دقيقة$/,"Reminder: $1 in $2 minutes","Rappel : $1 dans $2 minutes"],[/^تذكير: (.+) الآن$/,"Reminder: $1 now","Rappel : $1 maintenant"],
[/^الخطة: (\d+) دقيقة يوميًا \((\d+) مهمة\) خلال (\d+) يوم\.$/,"Plan: $1 min/day ($2 tasks) over $3 days.","Plan : $1 min/jour ($2 tâches) sur $3 jours."]
];
