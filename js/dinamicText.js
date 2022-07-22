
let nameBook = ""; //* имя для книги
let nameBookArr = []; //
const sum = 1000; //* сумма покупки 1 книги

const butt = '';"<div class='book_use'><a id='book_use__btn' href='../html/reading_mode.html'>Читать</a> <a id='book_use__btn' onclick='pay()'>Купить</a> <a href='#sub' class='popup-link' id='book_use__btn'>Подписаться</a></div>";


//*Используем для получения книг для разделов и подразделов по названию раздела 
function bookType(type) {
    switch (type) {
        case "Принцесса Атнасари":
            book = "<h1 class='name'>Принцесса Атнасари</h1><div class='txt-conntent'><p>Принцесса Атнасари всегда, сколько помнила себя, любила кошек и котов больших и " +
                "маленьких, любых мастей. Зная это: -«Вся в мать, кошатница…», отец Король издал " +
                "указ: - «везде где гуляет принцесса, расставить изображения и скульптуры кошек», так " +
                "как живых он, их не любил.</p> " +
                "<p>Король, охотник и «собачник» страстный был и круглосуточное тявканье, и гавканье " +
                "всегда стояло гвалтом внутри замка. Так было до тех пор, пока не появился у " +
                "принцессы чёрной масти кот, как оказалось далее - баюн. И без каких-либо усилий со " +
                "стороны дворян и дворовых людей, - и гавканье, и тявканье недалеко от замка, лишь " +
                "на псарне слышно стало, Всё это очень возмущало и удивляло Короля. </p>" +
                "<p>С того момента больше ни каким, ни чьим приказом, невозможно стало, - заставить " +
                "или вкусным угощеньем собачек в замок заманить. Король предполагал, нет, точно " +
                "знал, что поведение собак такое, впрямую связано с котом принцессы. Он ясно знал, " +
                "что этот чёрный кот, всю власть над псами и дочери любовь себе забрал. И потому, его " +
                "он ненавидел, - ну всеми фибрами своей души. И тыщи раз пытался он освободиться, " +
                "от ненавистного ему кота. Но тут увы, и потому по-тихому всегда он пакостил ему. </p>" +
                "<p>Вот как-то раз Король, призвав к себе все королевского стилиста - модника, " +
                "брадобрея –искусника, шепнул ему: - «Ты братец ведь всегда на пике моды?», «О, да» " +
                "- в ответ. «Так вот, слыхал я, - что принцесса дочь моя, играя со своим котом, желала " +
                "видеть его в светлом перманенте. Ты потихоньку от неё завей его и обесцветь, подарок " +
                "сделай её, ты от себя.» «Мой сир, я повинуюсь Вам». И улучив момент он «красоту» " +
                "навёл на шкуре баюна. Остались тёмными лицо, усы и нос, и неподвластный ему хвост " +
                "и уши. И преподнёс стилист «красивого и модного» кота принцессе.</p> " +
                "<p>Увидев модный причесон и цвет её любимого в оригинале чёрного кота, удар чуть не " +
                "хватил принцессу. Ну несусветный разразился в замке том скандал. Стилист в бега. А " +
                "перепуганный отец, - Король, не ожидавший столь негативно однозначно яростной " +
                "реакции дитя, боясь, что выдаст его брадобрей под пыткой. «Взбешённый» как бы " +
                "самоволием стилиста, Король издал указ; -«Стилиста изловить, и в тот же миг отсечь " +
                "башку ему, без пыток». Узнав решение отца, в слезах принцесса умаляла сохранить " +
                "стилисту жизнь: - «Отец Король, ведь он из лучших побуждений…» Довольный " +
                "поворотом дел, где может он легко продемонстрировать себе и чаду своему, - как " +
                "дорога она ему. Сменив свой «гнев» на милость. Кару изменив. Издал Король указ: - " +
                "«…Поймать его. И донести ему, что он прощён. Главу не отсекать. А просто, - всыпать " +
                "палок, вернуть ко мне, в дворец, к служенью своему». </p>" +
                "<p>Довольная собой и милосердием своим и Короля, принцесса Атнасари, взяв в руки " +
                "чашу лёгкого игристого вина и сладкий виноград, отправилась мурлыкая себе под нос, " +
                "в свою опочивальню. Придя к себе в опочивальню, и скинув верхний свой, - всех " +
                "ослепляющий наряд. И телу дав дышать, одним движением плеча легко сняла с себя, - " +
                "камизу, из дорогих шелков. Пред зеркалом она: - одна, обнажена, почти что четверть " +
                "часа, плавно танцевала, любуюсь отражением своим. - «О Боги! Как прекрасная – Я! " +
                "Я благодарна Вам! </p>" +
                "<p>Устав и захмелев от веселящего игристого вина, прохладу ночи шелковисто - " +
                "гладкой кожей ощутив, и в тот же миг, стянув на пол, тяжёлый полог из парчи, со " +
                "своего ночного расписного ложа, расписанного тончайшей инкрустацией из " +
                "драгоценнейших каменьев, злата и резьбы, искусной, - деревянной. Без промедленья " +
                "забралась, откинув одеяла в парче край, скользнула быстрой золотистой змейкой, по " +
                "тонким шелкам простыни, под одеяло. Где каждый вечер ждал её любимый, верный ей " +
                "- баюн. </p>" +
                "<p>Устроившись удобно, среди, - подушек, думок, одеял пуховых, упакованных в шелка. " +
                "И руки протянув обняв, прижав к себе, поцеловав и приласкавши баюна. Она, под " +
                "мерное урчание, целебных звуков сказок баюна. Оставив всю дневную явь и тело, " +
                "пошла гулять с Морфеем, в волшебный мир его отца. " +
                "Закрутка сюжета. </p>" +
                "<p>Отец Король души не чаял в своём единственном, любимом чаде, - принцессе " +
                "Атнасари. Уж много лет подряд она была его единственной отрадой. С тех пор когда " +
                "поехав на крестины, к своей сестре, пропала без вести его любимая жена, мать " +
                "Атнасари, что на картине ниже. </p>" +
                "<p>Событие сие, перевернув весь новостной портал в ближайших королевствах и стало " +
                "первым в череде пропаж людей, которые держали путь, через дремучий чёрный лес, " +
                "стоящий на пути к её сестре, что правила в соседнем королевстве. Он не единожды " +
                "перевернул весь этот лес, весь этот свет прошёл насквозь, ища её. Увы. Ни сыщики, ни " +
                "колдуны и ни огромная награда не помогли её найти. </p>" +
                "<p>Он миллионы раз искал ответ, на свой вопрос: - «Как может без следа пропасть: - " +
                "охрана, кони, слуги, сама карета, подарки на повозках, пироги, торты и пиво, брага и " +
                "коньяк, вся многочисленная рать и свита королевы?» Лишь старый мудрый знахарь, " +
                "лекарь и аптекарь, и он же звездочёт сказал ему: - «Что это всё, не просто так, а дело " +
                "тёмных сил завистников, его счастливой жизни». – «Ну как же так?» - спросил король. " +
                "Неужто люди так черны, что, позавидовав простому счастью любящих сердец, они " +
                "сведи её в могилу» - «О нет!» -сказал мудрец. - «Не в людях дело, такова их суть, не " +
                "став счастливыми, - они завидуют, злословят, костерят, ну всех подряд. Тебя, как " +
                "короля, твои законы, твою власть, соседа, мать, жену, отца, своих детей и даже Бога. " +
                "Но эта грязь ложится лишь на них, гнетёт и разрушает только их, неблагодарных. " +
                "Неблагодарностью, злословием своим они перекрывают себе сами, - к счастью путь. А " +
                "тут же вот, совсем, другой урок, тебе король. Здесь тёмных сил призвав на помощь, " +
                "кто-то очень сильный, ну очень-очень долго силы тьмы на помощь призывал в " +
                "отместку королеве и тебе, ты вспоминай». Король уж сколько лет, перепросматривая " +
                "жизнь свою, он вспомнил всех, кого обидел вольно или невольно он. Прося у Господа " +
                "помиловать его, - вернуть его любовь. Так годы шли, без измененья, а дочь его " +
                "принцесса Атнасари тем временем взрослела, и превратившись в улучшенную копию " +
                "его красавицы жены и матери своей, что на картине ниже. </p>" +
                "<p>Картина выше, - юная принцесса. Картина не полна. В оригинале, была изображена " +
                "стоящая принцесса в полный рост. На бёдрах лёгкая, короткая и стильная чалма" +
                "накидка - юбка в стиле наряда, прикрывающего её прекрасную девичью грудь." +
                "Впервые увидев картину, Король отец, стоял долго перед ней, смотрел на неё с " +
                "восхищением и тоской, боясь пошевелиться, ведь дикая тоска стальной своей и " +
                "ледяной рукой сжимала его сердце: - &quot;О Боже, как она похожа, на мать свою &quot;. И долго " +
                "он стоял, смотрел, а слёзы всё лились ручьём из его глаз, не мог остановить их, - он, да " +
                "и не хотел. Потом пришёл в себя и произнёс: -&quot;рано ей ещё разжигать вожделение, " +
                "пусть пока ослепляет своей юной красотой всех вокруг &quot;. И приказал отрезать от " +
                "холста, изображение от талии и ниже. И картина осталась жить в таком виде как " +
                "приведено выше. А ниже на картине принцесса с уже немного повзрослевшим, " +
                "отъевшемся, лоснившимся котом, что найден был на рынке городском, худым, " +
                "облезлым, умирающим в канаве. </p>" +
                "<p>Отец любил её, она была дороже всех ему на этом свете. Переживая и боясь за жизнь " +
                "её, он с малых лет её приставил к ней охрану: - солдатов, фрейлин и пажей, шпионов. " +
                "И дал он всем указ, и в том числе служанке, что нянькай с малых лет с ней " +
                "неразлучною была. «Чтоб каждое её движение, слово, намеренье-мысль он знал всех " +
                "наперёд.» И потому её, пред зеркалом вечерний «танец – ритуал», перед сном в " +
                "отсутствии на ней камизы, он знал. Переживал он, размышляя про себя: - «Вот " +
                "выросла она и жаждет взрослых отношений и любви, и может неразумной своей " +
                "страстью, влюбившись в недостойного её простолюдина, по недомыслию войдёт с ним " +
                "в связь, тем самым принесёт ему беду». Пока он был спокоен, - знал, что всю свою " +
                "энергию, мысли все, и пылкую девичью любовь она пока дарует лишь любимому коту. " +
                "И потому он, ненавидя баюна, его терпел. </p>" +
                "<p>Довольная собой и милосердием своим, по праздникам принцесса Атнасари, взяв в " +
                "руки чашу лёгкого игристого вина и сладкий виноград шла лёгким быстрым шагом, в " +
                "свою опочивальню. Где с нетерпеньем, каждый миг, её баюн, - ждал. И на картине " +
                "ниже, уж взрослый кот – баюн и принцесса Атнасари вечером после праздника. </p>" +
                "<p>Король отец был мудр, порой он размышлял: - «Откуда к нам пришла после пропажи " +
                "королевы, эта свирепая, магическая тварь, живущая в лесных чащобах на погибель " +
                "человека? И почему не разглядел никто, и даже он Король, весь будущий, магический " +
                "потенциал, - котёнка? И почему баюн влюблёнными глазами смотрит на принцессу " +
                "Атнасари? И тем же самым взглядом смотрит дочь его, в глаза его». Не раз крутив в " +
                "себе, чуть выше приведённые вопросы, сегодня же, он, решил, что надо выдать дочку " +
                "замуж, по «любви», за человека, - равного по статусу ему. Тем более что королей и " +
                "принцев женихов, не счесть. Но как-то надо баюна отправить восвояси с глаз её " +
                "долой, чтоб не мешал ему, чтоб он пропал, - на веки, на всегда. И тут же улыбнувшись " +
                "«светлой» мысли, что принесла ему сей хитрый план: - «Отправить баюна на поиски" +
                "пропавшей королевы в чащу леса. Там сгинет он, а коль вернётся он один назад. Тогда " +
                "уж точно не сносить ему главы. А уж вернётся с королевой, тут уж вдвоём они на пару " +
                "с Королевой мгновенно в голову принцессе нужную ему любовь вобьют…». Доволен " +
                "он собой, решением своим, и не смотря на слёзы дочери своей, под благовидным " +
                "намереньем: -«Что только он, и только он способен Королеву отыскать…». Король " +
                "отправил баюна из замка в тёмный, чёрный лес на поиск Королевы. И в тот же миг – " +
                "собачье тявканье по замку эхом разнеслось, улыбку умиленья вызвал этот звук на лике " +
                "Короля. </p>" +
                "<p>Уж много лет, принцесса ждёт вестей от баюна, или о нём. Как в воду канул он, всё в " +
                "том же заколдованном лесу, куда отправили его на поиск Королевы. И с грустью " +
                "смотрит она вдаль, не радует её подарок, - Короля отца, - огромный белый тигр. – «Он " +
                "просто добрый, верный зверь, а не любимый мой баюн, с тоской всё думала она». </p>" +
                "<p>Истосковавшись донельзя, и с каждым днём всё больше навлекая на себя весь гнев " +
                "отца, отказывая день за днём всем женихам отца. А грусть тоска по баюну, всё больше " +
                "– больше, с каждым днём, точила её девичье, раненое сердце. Воспоминания усиливал " +
                "подаренный отцом ей кот, один в один как младой в перманенте баюн – кот. </p>" +
                "<p>И не смотря, на все шпионские доносы, никто не знал, а лишь она одна, владела " +
                "тайной, что кот-баюн умеет говорить и вовсе не зверюга: - А юный воин принц, по " +
                "воле злого рока превращённый в баюна. И уж отчаявшись увидеть баюна, она отваги " +
                "набралась, и в полночь, в полную луну краюху хлеба взяв, из замка в тёмный лес " +
                "пошла, на поиск баюна. </p>" +
                "<p>Своей любовью как проводником, найдя любимого кота, и заклинанием, - что дал ей " +
                "старый мудрый знахарь, лекарь и аптекарь, и он же звездочёт, - сняла с него и с леса " +
                "чары злого рока. И в тот же миг отбросив шкуру зверя, предней предстал, прекрасный " +
                "обнажённый юный воин принц. Их взгляды встретились, в объятия друг другу " +
                "кинулись они, что на картине ниже." +
                "и первый в жизни их, кружащий голову, хоть и немного страстный, но всё же " +
                "осторожный, и неумелый поцелуй. Впервые в жизни поцелуй с противоположным " +
                "полом, как для неё и для него, что на картине ниже. И вот она и он обнажены, они " +
                "одни, она в объятиях его… </p>" +
                "<p>Пока принцесса с принцем целовались, миловались… В это же самое время стали " +
                "выходить целёхонькими и нетронутыми временем из леса все, кто в нём когда-либо " +
                "исчез. И возвратилась во дворец и всё так же молодая Королева мать и вся её свита. " +
                "Отец Король и Королева мать крепко обнялись и слились в прекрасном, долгом, " +
                "страстном поцелуе, что на картине ниже. </p>" +
                "<p>Все, те кто вышел жив здоров из леса, всё в том же возрасте что и тогда, - когда " +
                "пропали, были. Ни капли, не утратив молодость свою. Праздничные напитки, пироги, " +
                "торты и угощения что они везли на свадьбу не прокисли, ни капельки не испортились, " +
                "всё так же были свежи, ароматны и на вкус приятны. Чему очень все удивлялись и " +
                "просили растолковать это странное явление старого мудрого, знахаря, лекаря и " +
                "аптекаря, и звездочёта по совместительству. –«Исчезали люди в безвременье» - был " +
                "ответ, ещё больше внёсший сумятицу в головах у людей. Ведь пропавшим людям " +
                "казалось, что они как шли, так и шли, прошло всего несколько секунд и никто никуда " +
                "не пропадал. А то что прошло много лет, у них в голову вовсе не укладывалось, как " +
                "могла сохраниться молодость за столь долгий период времени? и лишь смотря на " +
                "постаревшие лица своих ровесников, родственников, жён и мужей они осознавали, - " +
                "прошло очень много времени. </p>" +
                "<p>Вся пропавшая челядь, а также все те, кто попал в безвременье в этом лесу, и вышел " +
                "из него безмерно радовались возвращению своему и своей молодости. Лишь Короля и " +
                "Королеву грусть и радость охватывала попеременно, всё больше грусть. Их радость " +
                "омрачала исчезнувшая принцесса, их единственный ребёнок. </p>" +
                "<p>И когда стражник по обязанности вдаль смотрящий с башни замка за теми, кто " +
                "приближается к замку, не враг ли приближается? Стал бить в набат и кричать что " +
                "видит принцессу Атнасари с молодым прекрасным спутником. Король и Королева, вся " +
                "челядь бросились из замка им на встречу со всех ног… </p>" +
                "<p>Сыграв пышную свадьбу Король отец до конца своей длинной счастливой жизни " +
                "искренне и горячо благодарил высшие силы и своих небесных покровителей - " +
                "хранителей, которые превратили его коварный, -«светлый» план, в счастье для всех. " +
                "Родив, взрастив с любимым баюном давно уж ставшим мудрым Королём – отцом, - " +
                "двух сыновей и дочку, её теперь все звали – Королева Атнасари, что на картинах ниже. </p>" +
                "<p>Уже боле двух тысяч лет, она всем телом и душой была всё также юной, молодой, " +
                "прекрасной. Она любила, лёжа после трапезы в саду, когда младые котики и кошечки " +
                "водившееся в их огромном замке, своими лапками играя между собой толклись на ней. " +
                "Что и запечатлел придворный художник летописец на картине ниже </p>" +
                "<p>Ниже изображение фрески – витража, размером 5на6 метров, хранящаяся вот уже " +
                "более 10 тысяч лет в родовом замке, изображающая её любимого кота – баюна, " +
                "инкрустированная золотом и драгоценными каменьями, сделанная собственноручно " +
                "Королевой Атнасари, в память о своей сбывшейся счастливой вечной любви. </p>" +
                "<br/>" +
                "Конец. </div>";
            break;
        case "Практика":
            book = "<h1 class='name'>КАЙВАЛЬЯ</h1><div class='txt-conn'><p>В беспокойной до краёв Вселенной, полный до краёв Покой.</p> " +
                "<p>В измененьях – неизменный.</p><p> В очевидном, – сокровенно существующий Покой.</p> " +
                "<p>За слоистой пеленой непрерывных превращений плотных тел в пустые тени, -</p><p>неподверженный Покой.</p> " +
                "<p>Звук, звенящий тишиной</p> <p>Свет, что явлен чернотой</p> <p>Сила - не в каком-то теле</p> " +
                "<p> Мысль - без образа, без цели</p> <p>Все творит, все так же целый, словно бы пустой Покой.</p> " +
                "<p>Бездна знания</p> <p>Без названья и без дна</p> <p>Бездна так ясна, что не видна глубина.</p> " +
                "<p>И не этот, не иной, - мир без счастья, без печали, бесконечный, безначальный, что </p> " +
                "<p>нарочно, что случайно - все прощающий Покой. </p> <p>В тот Покой с любой, войди виной.</p> " +
                "<p>И покой, не шелохнётся, - ни каким-либо желаньем, ни твоим воспоминаньем.</p> " +
                "<p>Когда выйдешь из него ты в этот мир, то уже Святым, - самим собой. </p> " +
                "<p>И увидишь в переливах изменений этот мир, что ты любишь-ненавидишь,- миражом.</p> " +
                "<p>ОМ! Покой! Покой! Покой! Шанти! Шанти! Шанти! ОМ!</p></div>";
            //"<div class='btn-get'><a href='#'>Сказка</a></div> <button class='btn__pay' onclick='pay()'>Купить</button> <button class='btn__sub'>Подписаться</button>";
            break;
        case "Энциклопедия":
            book = "</br></br></br><div class='information-empty'>На данный момент раздел в процессе разработке</div>";
            break;
        case "Любовь - петля Кармы":
            book = "<h1 class='name'>Любовь - петля Кармы</h1><div class='txt-conntent'><p>Да, к своим небольшим, прожитым в этой жизни тринадцати годам, он конечно " +
                "слышал и прочитывал, да и не раз прочитывал и не раз слышал слово – Любовь, что " +
                "она как-то приходит и почему-то куда - то уходит. Но ни слово, ни то что скрывается " +
                "за ним до сих пор никак не волновало его, для него в тот момент это было просто " +
                "слово, набор звуков и букв, и не более. Оно не несло ему ни чего: - ни чувств, ни " +
                "ожиданий, ни переживаний. Девчонки конечно красивые есть, и они меня конечно " +
                "влекут, но сними, - я, не дружу, я ведь не какой-то там «дружбан», я настоящий " +
                "истинный пацан, думал он, убеждая себя всякий раз, когда они приглашали его " +
                "погулять. Так вели себя и думали все его одногодки пацаны. Но в тот момент так " +
                "думать срок прошёл. </p>" +
                "<p>Она пришла. Как-то летом, стоя с родителями в накопителе аэропорта родного " +
                "города Алма - Ата, он с увлечением заворожённо смотрел как взлетают и производят " +
                "посадку его любимые серебристые драконы, - выпущенные в полёт советским " +
                "авиапромам. Он с благоговением смотрел на них, предвкушая предстоящий полёт, " +
                "ведь на одном из них, он прям сейчас со всей семьёй отправится в полёт в Тамгу, на " +
                "встречу с Иссык – Кулем. Ах, как было бы здорово, чтоб это был реактивный дракон " +
                "(Як-42) а не жужукалка аннушка (Ан-24), так размышлял он и страстно этого желал, " +
                "не отрывая восхищённого взгляда от стоящего прям перед ним, самого красивого " +
                "дракона советского авиапрома - сто пятьдесят четвёртого Ту (Ту – 154б).</p> " +
                "<p>Слегка взяв его за плечо, старшая сестра привлекла к себе его внимание, и далее на " +
                "ухо, почти шёпотом стала говорить. Что – что, переспросил её он. – «Смотри какая " +
                "девочка красивая в розовом коротеньком платьице с цветами, прям перед накопителем " +
                "с родителями стоит», при это глазами указав ему направление взгляда. Повернув " +
                "голову и направив взгляд в указанное сестрой направление. Мгновенно замер он, в тот " +
                "же миг, как только увидал её: - с яркостью вспышек тысячи молний он был ослеплён, " +
                "заворожён и обездвижен какой-то силой. Она была очевидно погодка ему и стояла в " +
                "окружении трёх женщин, мужчины и дорожных сумок. Напавший на него столбняк и " +
                "глупый, изумлённый вид не мог не рассмешить сестру, отца и маму. Он слышал их " +
                "негромкий смех, и не предполагал, что причина смеха это он, а если быть точнее – " +
                "выражение его лица. Хотя в тот момент не только этот смех не волновал его, весь " +
                "внешний мир в один миг перестал для него существовать. Только она, и только в ней " +
                "сосредоточен весь этот мир. Она завладела им, а может и всегда владела, уже " +
                "постарше став, задавал он себе сотни раз, этот не имеющий логического ответа в " +
                "разрезе текущей жизни вопрос. Если б он тогда знал, или мог предположить, или кто- " +
                "то мог ему разложить: - что эта встреча принесёт ему, чем она обусловлена, кем " +
                "назначена, зачем предназначена?</p> " +
                "<p>- «Ты что влюбился?», - уже дважды повторила свой вопрос в шутливой форме " +
                "старшая сестра, прежде чем он с того же вопроса заданного в третий раз, вышел из " +
                "своего столбняка и перевёл свой взгляд на сестру, и далее обвёл им всю свою широко " +
                "улыбающуюся, любимую семью. Кровь мгновенно прилила к его лицу, и он " +
                "почувствовал, что лицо его горит, как горит весенний, пышущий алым цветом " +

                "майский мак. Оно не просто горит, оно с каждым мгновением всё ярче, всё ярче " +
                "пылает. И вот взбешённый, пунцовый, из мультфильма сеньор помидор, от " +
                "«праведного» гнева и стыда: - «что за дурацкий вопрос, да как ты могла…», " +
                "возмущённо шипел он как перепуганный, пойманный на воровстве и загнанный в " +
                "угол, с хозяйской сосиской кот. Он возмущённо шипел, пытаясь восстановить, свой, " +
                "теперь уже никогда не восстановимый в этой жизни мальчишеский - статус кво, код. " +
                "Хотя выйти из этого ступора он сам бы тогда не смог, да и до сих пор, пожалуй, не смог. </p></div>";
            break;
        default: return 0;
    }
    return book;
}

//* Используем для переключения и отображения разделов
const nameElement = document.querySelectorAll('.section');
const textContent = document.querySelector('.vertical_inner');
const buttons = document.querySelector('.book_use');

if (nameElement.length > 0) {
    nameBook = [];
    for (let i = 0; i < nameElement.length; i++) {
        const element = nameElement[i];
        element.addEventListener('click', function (e) {
            switch (element.textContent) {
                case "Разное":
                    document.querySelector('.story').style.display = 'block';
                    document.querySelector('.live').style.display = 'none';
                    //var numberList = sessionStorage.setItem("num", bookType(element.textContent).match(/<div/g).length);
                    buttons.style.display = 'none';
                    break;
                case "Практика": textContent.innerHTML = bookType(element.textContent);
                    sessionStorage.setItem('bookRead', bookType(element.textContent));
                    document.querySelector('.story').style.display = 'none';
                    document.querySelector('.live').style.display = 'none';
                    document.querySelector('.princess_atnasari').style.display = 'none';
                    buttons.style.display = 'none';
                    break;
                case "Энциклопедия": textContent.innerHTML = bookType(element.textContent);
                    document.querySelector('.story').style.display = 'none';
                    document.querySelector('.live').style.display = 'none';
                    document.querySelector('.princess_atnasari').style.display = 'none';
                    buttons.style.display = 'none';
                    break;
                case "Автобиография":
                    document.querySelector('.live').style.display = 'block';
                    document.querySelector('.story').style.display = 'none';
                    document.querySelector('.princess_atnasari').style.display = 'none';
                    buttons.style.display = 'none';
                    break;
                case "Сказки":
                    document.querySelector('.live').style.display = 'none';
                    document.querySelector('.princess_atnasari').style.display = 'block';
                    buttons.style.display = 'none';
                    break;
                case "Принцесса Атнасари":
                    textContent.innerHTML = bookType(element.textContent)
                    document.querySelector('.live').style.display = 'none';
                    nameBook = element.textContent;
                    buttons.style.display = 'flex';
                    sessionStorage.setItem("bookType", bookType(element.textContent));
                    sessionStorage.setItem("bookRead", bookType(element.textContent));
                    break;
                case "Любовь - петля Кармы":
                    nameBook = element.textContent;
                    textContent.innerHTML = bookType(element.textContent);
                    document.querySelector('.story').style.display = 'none';
                    document.querySelector('.princess_atnasari').style.display = 'none';
                    buttons.style.display = 'flex';
                    sessionStorage.setItem("bookType", bookType(element.textContent));
                    sessionStorage.setItem("bookRead", bookType(element.textContent));
                    break;
                default: return 0;
            }
        });
    }
}

//* Метод для отображения книги в корзине после нажатия кнопки покупки   
function pay() {
    localStorage.setItem("shit", 365);
    let numArr = [];
    let num = sessionStorage.getItem('num');
    num = Number(num) + 1;
    for (let i = 0; i < num; i++) {
        numArr.push(i);
        sessionStorage.setItem('numArr', numArr);
    }
    nameBookArr.push(nameBook);
    for (let i = 0; i < nameBookArr.length; i++) {
        sessionStorage.setItem('nameBookArr' + i.toString(), nameBookArr[i]);
    }
    //alert(num)
    let book = "";
    if (confirm('Уверены в выборе и покупке?')) {
        let payBook = 0;
        sessionStorage.setItem('num', num);
        for (let i = 0; i < numArr.length; i++) {
            book += ("<div class='bookPayBlock'><img src='../src/books/green.svg' alt='book'></img><p>" + sessionStorage.getItem('nameBookArr' + i.toString()) +
                "</p><button class='clear' value='" + i + "' onclick='clearBox()'></button></div>");
            payBook += sum;
            sessionStorage.setItem('payBook', payBook)
            sessionStorage.setItem('book' + i.toString(), book);
            sessionStorage.setItem('pay', "<h1>Итого: </h1>" + payBook + "<h1> руб</h1>");
            //clickBtn.disabled = false;
        }
        alert('Ваш товар в корзине');
    }
    else { return 0; }
}


//* Отчистка корзины после покупки или же после нажатия удаления
function clearBox() {
    let num = sessionStorage.getItem('num');
    // const btnClear = document.getElementsByClassName('.clear');
    num = Number(num) - 1;
    let sumBook = sessionStorage.getItem('payBook');
    sumBook = Number(sumBook) - sum;
    sessionStorage.removeItem('nameBookArr');
    const BooksInBuy = document.querySelectorAll(".bookPayBlock");
    const crossesBtn = document.querySelectorAll(".clear");
    /* for (let i = 0; i < crossesBtn.length; i++) {
         crossesBtn[i].addEventListener('click', function (e) {
             BooksInBuy[i].style.display = "none";
             e.preventDefault();
         });
     }*/
    // for (let i = 0; i < num; i++) {
    //     btnClear.onclick = function () {
    //         let j = this.value;
    //     }
    // }
    // sessionStorage.setItem('book' + 3, "");

    sessionStorage.setItem('num', num);
    sessionStorage.setItem('payBook', sumBook);
    sessionStorage.setItem('pay', "<h1>Итого: </h1>" + sumBook + "<h1> руб</h1>");
    document.location.href = '../html/buy.html';
}

//* Полное удаление книг из корзины
function delBox() {
    sessionStorage.removeItem('book');
    sessionStorage.removeItem('payBook');
    sessionStorage.removeItem('nameBookArr');
    sessionStorage.setItem('pay', "<h1>Итого: </h1>" + 0 + "<h1> руб</h1>");
    sessionStorage.removeItem('num');
    document.location.href = '../html/buy.html';
}

function buyBook() {
    var buyBook =
        '<div class="my_book_left_side">' +
        '<div class="my_book_left_side__inner">' +
        '        <div class="book_img">' +
        '            <img src="../src/books/green.svg">' +
        '        </div>' +
        '        <div class="read_btn"><a id="read_btn" href="#">Читать</a></div>' +
        '    </div>' +
        '</div>' +
        '<div class="my_book_right_side">' +
        '    <div class="book_name">' +
        '        <p id="default">Название книги:<span id="book_name">' + sessionStorage.getItem('nameBookArr') +
        '                </span></p>' +
        '    </div>' +
        '    <div class="my_book_description">' +
        '        <p id="default">Описание:</p>' +
        '        <p id="description">Автобиографический роман с иллюстрациями, сделанными' +
        '            собственноручно. От возникновения Духа моего и до сегодняшнего дня без перерыва в' +
        '            том числе и в промежуточном состоянии бардо.' +
        '            В романе будет раскрыта истинную цель жизни Духа в человеческой форме существования,' +
        '            и необходимый для достижения цели опыт. </p>' +
        '    </div>' +
        '    <div class="author">' +
        '        <p id="author">Автор: Аркадий Орлов</p>' +
        '    </div>' +
        '</div>' +
        '<hr noshade id="line">';

    sessionStorage.setItem('buyBook', buyBook);
    document.location.href = '../html/profile.html';
}

//TODO доработать попап для нормалной работы, пока оставить так для тестов
function openForm() {
    document.querySelector('.form-pay__window').style.display = 'block';
}
function closeForm() { document.querySelector('.form-pay__window').style.display = 'none'; }
/*function openSectionsHandler(type){
    switch(type){
        case 'Разное': type.style.display = 'block';
            break;
        case 'Автобиография':
            break;
    }
}*/
//TODO Доработать удаление с любой позиции

// document.addEventListener("DOMContentLoaded", () => {
//     alert("DOM готов!");
// });

// function readTextFile(file){
//     fetch(file)
//    .then(response => response.json())
//    .then(json => {
//         return(json);
//    })
// }

var DATA;

function getFile(fileName) {

    var request = new XMLHttpRequest();

    request.open('GET', fileName);

    request.onloadend = function () {

        parse(request.responseText);
    }

    request.send();
}


function parse(obj) {

    DATA = JSON.parse(obj);

    sessionStorage.setItem('DATA', DATA.book);
}

function PasteText() {
    parenBody.style.padding = "20px";
    const txtBlock = document.querySelector(".text");
    const text = sessionStorage.getItem("bookType").replace(butt, '');
    txtBlock.innerHTML = text;
    // console.log(text);

    const BookName = txtBlock.querySelector(".name").textContent;

    txtBlock.innerHTML = "";

    getFile('../html/texts/' + BookName + '.json');


    var allText = sessionStorage.getItem('DATA');
    var numberOfLetters = 0;

    for (var i = 0; i < allText.length / 1341; i++) {
        var div = document.createElement('div');
        div.className = 'txt_item';
        div.setAttribute('id', 'item' + i);
        for (j = numberOfLetters; j < numberOfLetters + 1341; j++) {
            div.innerHTML += allText[j];
        }
        txtBlock.append(div);
        numberOfLetters = numberOfLetters + 1341;
    }







    var blockHeight = document.documentElement.clientHeight * 0.9;
    var blockWidth = document.documentElement.scrollWidth - ((window.getComputedStyle(parenBody, null).paddingLeft || this.currentStyle.paddingLeft).replace('px', '') * 2);
    console.log("h:" + blockHeight + " w:" + blockWidth);
}

//* Методы для скролла