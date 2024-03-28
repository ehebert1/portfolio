const data = {
    "en": {
        "about-me": "About me",
        "about-me-cegep": "CEGEP de l'Outaouais",
        "about-me-cegep-content": "I chose computer science at this CEGEP since I wanted to become a programmer and this program allowed me to learn programming while specializing myself towards website development, which I started learning during my high school studies. At this school, I managed to learn the basics of programming, like object oriented programming, web development with multiple frameworks (ASP.NET MVC, Laravel, etc.), mobile development as well as network programming.",
        "about-me-cegep-information": "College studies diploma in computer science, 2016-2020",
        "about-me-cf-title": "ColdFusion",
        "about-me-cf-content": "Adobe ColdFusion 2018 is a programming and a markup language that I have used during my time at the Government of Canada. This language facilitates the creation of website applications that use databases. This language is easy to learn and allows to create web applications very quickly.",
        "about-me-csharp-title": "C#",
        "about-me-csharp-content": "C# is the first programming language I have learned. Since its structure is simple, it is probably my favourite programming language to use. I have developped multipls console applications, form applications, backend server code for website applications as well as making video games using the Unity game engine.",
        "about-me-cpp-title": "C++",
        "about-me-cpp-content": "C++ is the latest programming language I have learned. I only starting learning it at the begging of my time at this university, but I have had plenty of opportunities to use it since we use Unreal Engine a lot and since the common courses in computer science asks us to use this programming language. I have succeeded in mastering object oriented programming and the use of pointers in this programming language.",
        "about-me-home-content": "Visit my About me page. In this page, you will be able to learn more about myself, my skill as well as my experience.",
        "about-me-introduction": "I am Éric Hébert and I am currently studying video game development at the University of Québec at Chicoutimi. Ever since I was young, I was interested by computers and video games. I remember as a child play on the Nintendo 64 with my brothers or even playing Runescape on our computers. This passion, growing since childhood, brought me to divert from website development and change my path towards video game development.",
        "about-me-java-title": "Java",
        "about-me-java-content": "Java is one of the programming languages I have not used much, but it is similar to C#. I have mostly used it for mobile applications development and for network programming.",
        "about-me-js-title": "JavaScript",
        "about-me-js-content": "JavaScript is a language you need to master in order to do modern website development. I have had the chance to use JavaScript in a variety of different ways and with a lot of different libraries. I have used jQuery, VueJS and I have used the PhaserJS game engine, which allows you to create 2D video games on a webpage. I have also used TypeScript, which is a JavaScript that forces you to use object typing.",
        "about-me-skills": "Skills",
        "about-me-skills-content": "",
        "about-me-sql-title": "SQL",
        "about-me-sql-content": "SQL is a language that is essential in order to manage large quantities of data. The two types of databases I have used are Microsoft SQL Server and MySQL. I have also used SQL with websites, mostly while using ASP.NET MVC with Entity Framework, Laravel with MySQL and Adobe ColdFusion with Microsoft SQL Server.",
        "about-me-studies": "Studies",
        "about-me-university": "Université du Québec à Chicoutimi",
        "about-me-university-content": "I chose video game development at this university since I had already heard about it during my time at CEGEP. Thanks to my studies at this university, I have learned C++, the entire process of video game development, such as conception, communicating with clients, collaborating with artists and making games using multiple game engines, notably Unreal Engine and Unity 3D.",
        "about-me-university-information": "Bachelor's in video game development, 2021-2024",
        "developer": "Éric Hébert",
        "developer-info": "Video Game Developer",
        "developer-info-content": "I am Éric Hébert, a student in video game development at Université du Québec à Chicoutimi. I am capable with multiple game engines, notably Unreal Engine, Unity 3D and PhaserJS. I invite you to browse my site.",
        "empty": "",
        "home": "Home",
        "lang": "FR",
        "projects": "Projects",
        "projects-bambooza-article": "<a href=\"https://ici.radio-canada.ca/nouvelle/2021611/deficit-attention-jeu-interactif\" target=\"_blank\">CBC article of the launch of the <i>Bambooza</i> platform</a>",
        "projects-bambooza-global-class": "",
        "projects-bambooza-global-class-content": "",
        "projects-bambooza-introduction": "<i>Bambooza</i> is an online video game platform in collaboration with <a href=\"https://www.pandaslsj.org/\" target=\"_blank\">Panda Saguenay Lac Saint-Jean</a> and <a href=\"https://www.eckinox.ca/\" target=\"_blank\">Eckinox</a>.",
        "projects-bambooza-cauldron": "",
        "projects-bambooza-cauldron-content": "",
        "projects-bambooza-cauldron-recipes": "",
        "projects-bambooza-cauldron-recipes-content": "",
        "projects-bambooza-labyrinth": "",
        "projects-bambooza-labyrinth-content": "",
        "projects-bambooza-labyrinth-integration": "",
        "projects-bambooza-labyrinth-integration-content": "",
        "projects-bambooza-link": "<a href=\"https://jeux.bambooza.ca\" target=\"_blank\">Link to the platform.</a>",
        "projects-bambooza-labyrinth-progress": "",
        "projects-bambooza-labyrinth-progress-content": "",
        "projects-bambooza-my-role": "",
        "projects-bambooza-my-role-content": "",
        "projects-disclaimer": "Click on the project banner to show the content.",
        "projects-encage-ai": "Artificial Intelligence",
        "projects-encage-ai-introduction": "The biggest challenge of our project was without a doubt the artificial intelligence of the birds. Since the heart of our game stands on capturing and hunting birds for the family company, we had to make sure the bird had the behaviour of a real life bird. This task ended up being more complicated than we first anticipated since we did not have much experience using artificial intelligence with Unreal Engine. I helped my colleagues a lot with different algorithms, such as the destination selection and the movement, but the main aspect I had to work on was the detection of the movement, the decision making of the bird as well as obstacle avoidance.",
        "projects-encage-ai-detection": "Detection",
        "projects-encage-ai-detection-content": "For the detection, we had to change the behaviour of the bird based on the movement of the character. The detection of the bird will use two senses, which are vision and sound. For the sound, the faster the character moves, the more the noise will get detected and the bird will react accordingly. The detection zone for the is the bigger circle shown in the picture on the right. Depending on  the strength of the sound, a proportional part of the circle will be used. This proportion is based on the current speed of the character and the maximum speed of the character. So, if the character runs at 50% of the character's speed, only 50% of the circle will be used to detect the sound.",
        "projects-encage-ai-detection-content-next": "Next is the visual detection of the bird. The detection only occurs when the character is in the 60 degree field of view in front of the bird in the small circle shown in the picture above. The visual sense is more punishing for the player than the sound sense since the bird will feel more at risk since the character is really close to the bird. We also had a bug regarding the detection that would prevent the sound and visual sense to be detected at the same time. I had to dig deeper into the Unreal Engine game engine, but I finally found the variable where all the sense are stored and I can see individually if they are activated. Therefore, everytime the perception is updated, I verify whether or not each sense is activated. Once the detection is done, we have a function that gets triggered every 50 milliseconds that will change the deteection force on the bird and when the bird reaches a specific threshold, it will fly away from the player.",
        "projects-encage-challenges": "Conception challenges",
        "projects-encage-challenges-content": "The biggest hurdle during our concept was without a doubt the creation of the artificial intelligence of our bird. We have dedicated 4 sprints in order to complete it, which is nearly 2 months. Even though we had a lot of experience and skills as developpers, we had little to no experience using artificial intelligence and it is incredibly more difficult to debug artificial intelligence than it is to debug anything we have debugged before, such as JavaScript in website applications, console applications in C++ or C# or even mobile applications in Java. There were a lot of times where we spent multiple hours debugging a behaviour within our artificial intelligence, just for us to change one condition in the decision making for it to work properly. However, this challenge has allowed us to familiarise ourselves with artificial intelligence within Unreal Engine and we are now able to make complex behaviours with this tool.",
        "projects-encage-challenges-content-next": "Another challenge we have faced was to collaborate with artists from the NAD school (School of numerical arts, of animation and of design) for the creation of our game. Even though the experience was amazing and removed a big weight off of our shoulders, it was still something we had to adapt to since it was a new experience to work with artists. There were two major things we had to do when collaborating with them, such as making sure communicate regularly with our game designer in order to make sure we were going in the right direction when developing our artificial intelligence and when we were developing the orders, and making sure we were exposing the right variables in order for the technical artist to link the code to the visual.",
        "projects-encage-introduction": "<i>Héritage</i> is a story game where the main character was raised by a family of bird hunters. She inherits the family store after the death of her father and she needs to capture birds in order to collect feathers in order to fulfill orders made by the store's clients. During her journey, she starts questioning the ethics of her practice.",
        "projects-encage-link": "<a href=\"https://chaos-production.itch.io/heritage\" target=\"_blank\">Try the game here!</a>",
        "projects-encage-members": "Members of the team",
        "projects-encage-my-role": "My role",
        "projects-encage-my-role-content": "On the programming standpoint, there were two main parts to this project, the artificial intelligence as well as the orders that the main character has to complete. Both of theses parts has brought us numerous challenges that we had to overcome in order bring the players to experience the early 20<sup>th</sup> century in Quebec within our gameplay.",
        "projects-encage-oa": "Obstacle avoidance",
        "projects-encage-oa-introduction": "An integral part for the movement of our artificial intelligence was the obstacle avoidance. This brought us a lot of challenges and troubles, since the behaviour that came out of some of our iterations were pretty atrocious. Here are some examples of behaviours that we have seen while testing our obstacle avoidance behaviour:",
        "projects-encage-oa-item1": "The bird would infinite back-and-forths within two directions since our algorithm chose the direection that was closest to the final destination.",
        "projects-encage-oa-item2": "When the bird was too close to the wall, it would try non-stop to fly through that wall.",
        "projects-encage-oa-solutions": "First of all, in order for our algorithm to trigger, we need the raycast that the bird sends out when he moves to hit a solid surface that the bird cannot go through. Once it is confirmed that surface has been hit, we send out another 8 raycasts in the shape of a cone. All of the casts that have not hit a surface will get added to a list of possible directions. If this list is empty after all 8 raycasts, we send out another 4, one to the right of the bird, one to the left, one on top of the bird and the last one under the bird. If they don't hit any surface, they get added to the list of possible directions. Once we have at least one possible direction, we validate all these points and we compare them to select the point that is closest to the final destination. To fix the first behaviour that we have encountered mentioned above, we have changed our point selection algorithm to compare the points and remove the height from the points, that way the back-and-forth stops. Another solution we have implemented to fix this problem is to create a bias within our algorithm, that way it will favour the previously used direction when it goes to avoid an obstacle if it is available. To fix the second problem, we have noticed that the two levels of raycasts managed to fix the bird getting stuck on walls.",
        "projects-encage-orders": "Orders",
        "projects-encage-orders-generation": "Automatic generation of the orders",
        "projects-encage-orders-generation-content": "After we survey every single feather, we have to create the orders so the players can complete them. We have four random values when we generate orders. The first one decides the amount of feathers we need to complete the order, varying between 1 and 3. The second random number is reused multiple times. This value is used to select a feather from the global list of feathers, adds it to the order, and removes it from the global list of feathers. The other two random values are used to choose textures for the user interface to ensure that every order has unique visuals.",
        "projects-encage-orders-introduction": "The second most important part of the game on the programming side is the completion and generation of orders. There were a couple of constraints in the creation of orders that caused us a couple of headaches. For my part, I had to automatically generate the orders and I had to make sure that it was possible to complete all of the orders within one game loop.",
        "projects-encage-orders-validation": "Making sure it is possible to complete every order",
        "projects-encage-orders-validation-content": "When the birds are generated, they are randomly assigned a color. We can then see three colors of birds, blue, red and yellow. Since we don't know the amount of each birds of each colors, we have to grab this information when we create the birds. Every time a bird is added to the game, we add the specific feather to a list of feathers in the game state. Once we have gotten every single feather, we generate the commands based off of this list.",
        "projects-encage-seeds": "New mechanic: Seeds",
        "projects-encage-seeds-content": "For the next part of the game, we wanted to introduce a new mechanic in the game to add a new level of complexity into it. We have decided to add a bait mechanic in forms of seeds with the goal to attract the birds into one area in order to capture them. This also allowed our level designer to place birds in high places and make them inaccessible to the players unless they use our bait mechanic.",
        "projects-encage-seeds-changes": "Required Changes",
        "projects-encage-seeds-changes-content": "To make this mechanic work, we needed to add features to both our player and the birds. First, we needed to add the ability for the player to place the seeds. Next, for the birds, we needed to add a lot more functionalities. First, we need to make sure the birds could detect the seeds. This part was pretty simple since we could use a Environment Query System (EQS) query to find the bait around the bird. Afterwards, after detecting the seeds, the bird needs to go to the seed. This was pretty simple since we already made our custom movement for the bird, so we just need to specify the position to the task and it will fly to that position. For the last part, we needed to change the detection system so the birds would be less reactive to the player when it is eating. We have decided the birds would be 50% less reactive when it is eating.",
        "projects-genetic-warfare-link": "<a href=\"https://davidnina1.itch.io/genetic-warfare\" target=\"_blank\">Try the game here!</a>",
        "projects-home-content": "I invite you to visit my projects page. This page has everything regarding my video game projects."
    },
    "fr": {
        "about-me": "À propos",
        "about-me-cegep": "CÉGEP de l'Outaouais",
        "about-me-cegep-content": "J'ai choisi l'informatique de gestion au Cégep de l'Outaouais puisque je souhaitais devenir programmeur et ce programme me permettais d'apprendre la programmation, tout en se spécialisant vers le développement web que j'ai commencé à apprendre durant mes études au secondaire. À cet établissement, j'ai appris la base de la programmation, notamment la programmation orienté objet, le développement web avec différents framework (ASP.NET MVC, Laravel, etc.), le développement d'applications mobile ainsi que de la programmation réseau.",
        "about-me-cegep-information": "Diplôme d'étude collégiale en informatique de gestion, 2016-2020",
        "about-me-cf-title": "ColdFusion",
        "about-me-cf-content": "<i>Adobe ColdFusion 2018</i> est un langage de programmation et de balisage que j'ai utilisé lors de mon temps au Gouvernement du Canada. C'est un langage qui facilite la création d'application web avec accès à une base de donnée. Ce langage est facile à apprendre et permet de développer des applications web très rapidement.",
        "about-me-csharp-title": "C#",
        "about-me-csharp-content": "Le C# est le tout premier langage de programmation que j'ai appris. Puisque sa structure est simple, c'est probablement mon langage de programmation préféré à utiliser. J'ai fait beaucoup d'applications console, des applictions formulaires, du code serveur pour un site web et des jeux avec le Moteur <i>Unity</i> avec ce langage.",
        "about-me-cpp-title": "C++",
        "about-me-cpp-content": "Le C++ est le langage que j'ai appris le plus récemment. Je n'ai que commencé à l'apprendre au début de l'université, mais j'ai eu beaucoup d'opportunités à l'utiliser puisque nous utilisons beaucoup le moteur de jeux <i>Unreal Engine</i> et que les cours généraux en informatique nous demandent d'utiliser ce langage de programmation. J'ai réussi à maîtriser la programmation orienté objet et les pointeurs dans ce langage de programmation.",
        "about-me-home-content": "Visitez ma page À propos. Dans cette page, vous pourrez en apprendre un peu plus à propos de moi, mes compétences ainsi que mon expérience.",
        "about-me-introduction": "Je suis Éric Hébert, un étudiant en développement de jeux vidéo à l'Université du Québec à Chicoutimi. Depuis que je suis jeune, je suis intéressé par l'informatique et les jeux vidéo. Je me rappelle de jouer à la <i>Nintendo 64</i> avec mes frères ou même à <i>Runescape</i> sur nos ordinateurs. Cette passion, développé depuis ma jeunesse, m'a porté à changer du développement web vers le développement de jeux vidéo.",
        "about-me-java-title": "Java",
        "about-me-java-content": "Le Java est un langage que je n'ai pas beaucoup utilisé, mais qui est similaire au C#. Je l'ai surtout utilisé pour le développement d'applications mobiles et pour la programmation réseau.",
        "about-me-js-title": "JavaScript",
        "about-me-js-content": "Le JavaScript est un langage obligatoire à maîtriser pour la création de site webs modernes. J'ai eu la chance d'utiliser le JavaScript sous différentes formes et avec beaucoup de différentes librairies. J'ai utilisé jQuery et VueJS, et j'ai aussi utilisé le moteur de jeu PhaserJS, qui permet de créer des jeux vidéo 2D sur des pages web. J'ai aussi utilisé TypeScript, qui est un JavaScript qui force l'utilisation de types d'objets.",
        "about-me-skills": "Compétences",
        "about-me-skills-content": "",
        "about-me-sql-title": "SQL",
        "about-me-sql-content": "Le SQL est un langage qui est essentiel pour la gestion d'une grande quantité de données. Les deux types de base de données que j'ai utilisés sont <i>Microsoft SQL Server</i> et <i>MySQL</i>. J'ai aussi utilisé le SQL avec des sites webs, principalement en utilisant <i>ASP.NET MVC</i> avec <i>Entity Framework</i>, Laravel avec <i>MySQL</i> et <i>Adobe Coldfusion</i> et <i>Microsoft SQL Server</i>.",
        "about-me-studies": "Études",
        "about-me-university": "Université du Québec à Chicoutimi",
        "about-me-university-content": "J'ai choisi le développement en jeux vidéo cet université puisque j'avais déjà entendu de cet université lors de mon temps au CÉGEP. Grâce à mon parcours académique à cet université, j'ai appris à programmé en C++, tout le processus de développement de jeux vidéo, notamment la conception, répondre aux besoins d'un client, collaborer avec des artistes, et le développement de jeux avec les moteurs Unreal Engine ainsi que Unity 3D.",
        "about-me-university-information": "Baccalauréat en développement de jeux vidéo, 2021-2024",
        "developer": "Éric Hébert",
        "developer-info": "Développeur de jeux vidéo",
        "developer-info-content": "Je suis Éric Hébert, un étudiant en développement de jeux vidéo à l'Université du Québec à Chicoutimi. Je suis habile avec plusieurs moteur de jeux, notamment Unreal Engine, Unity 3D ainsi que PhaserJS. Je vous invite à naviguer mon site.",
        "empty": "",
        "home": "Accueil",
        "lang": "EN",
        "projects": "Projets",
        "projects-bambooza-article": "<a href=\"https://ici.radio-canada.ca/nouvelle/2021611/deficit-attention-jeu-interactif\" target=\"_blank\" class=\"card\"><div><strong>Article de Radio-Canada du lancement de la plateforme <i>Bambooza</i></strong></div></a>",
        "projects-bambooza-cauldron": "Chaudron",
        "projects-bambooza-cauldron-content": "Le deuxième jeu que j'ai fait est le chaudron. Ce jeu était beaucoup plus difficile que le labyrinthe. Le jeu avait pour but d'améliorer l'organisation du joueur. Ce jeu avait beaucoup de composante, soit les ingrédients, les recettes et les bols. La partie la plus difficile de jeu était les bols. ",
        "projects-bambooza-cauldron-recipes": "Recettes",
        "projects-bambooza-cauldron-recipes-content": "",
        "projects-bambooza-global-class": "Classe globale et versatile",
        "projects-bambooza-global-class-content": "Pour ce projet, nous avons décidé de faire une classe globale qui englobe la classe <i>Sprite</i> de <i>Phaser</i>. La raison que nous avons décidé d'ajouter une classe globale au projet est pour simplifier l'initialisation de nos objets, puisque la création d'objets <i>Phaser</i> peut devenir assez lourd. Cette classe permet l'initialisation des interactions de l'objet, les collisions de l'objet, création de l'image, ajout de text sur l'image et plus encore.",
        "projects-bambooza-introduction": "<i>Bambooza</i> est une plateforme de jeu en ligne en collaboration avec <a href=\"https://www.pandaslsj.org/\" target=\"_blank\">Panda Saguenay Lac Saint-Jean</a>, <a href=\"https://www.eckinox.ca/\" target=\"_blank\">Eckinox</a> et <a href=\"https://totemastudio.com/\" target=\"_blank\">Totema Studio</a>. Cette plateforme est composé de sept jeux différents dans le but d'aider les personnes atteints de TDAH (Trouble du Déficit de l’Attention avec/sans Hyperactivité) dans le milieu professionnel.",
        "projects-bambooza-labyrinth": "Labyrinthe",
        "projects-bambooza-labyrinth-content": "Le premier jeu que j'ai fait est le labyrinthe. Le jeu en tant que tel est assez simple, c'est un jeu où il y a une question avec deux réponses possibles et lorsqu'on répond correctement à la question, on avance dans le labyrinthe. Il y a deux choses qui a pris plus de temps dans ce jeu, soit l'intégration des questions et l'affichage du progrès dans le labyrinthe.",
        "projects-bambooza-labyrinth-integration": "Intégration des questions",
        "projects-bambooza-labyrinth-integration-content": "Pour l'intégration des questions, nous avions pensé initalement faire un fichier JSON qui contient les questions. Les questions seraient composés de quelques attributs, soit le texte de la question, la couleur du texte, ainsi que les réponses possibles. Les réponses auraient aussi quelques informations, notamment le texte ainsi que si c'est la bonne réponse. Ce système fonctionnait bien, mais il ne permettait pas d'ajouter des questions/réponses dynamiquement. Nous avons opter pour changer le système, en gardant les attributs, mais en gardant les questions et réponses dans une base de données que les clients pouvaient accéder pour ajouter/supprimer/modifier des questions à l'aide d'une interface web. Nous devions donc changer l'implémentation pour utiliser l'API développé par <i>Eckinox</i> pour récupérer les questions et réponses.",
        "projects-bambooza-labyrinth-progress": "Progrès dans le labyrinthe",
        "projects-bambooza-labyrinth-progress-content": "Un des aspects visuels qui était important pour le jeu est de voir le progrès du joueur dans le labyrinthe lorsqu'il complète les questions. Pour ce faire, on voulait vraiment que la barre de progrès complète le labyrinthe au lieu que ce soit une barre de progrès normale. Pour ce faire, nous avons établit des points dans le labyrinthe qui permet de situer les intersections du labyrinthe. Ensuite, nous avons créer des objets qui nécessite deux de ces points pour faire une ligne et nous gardons la longueur totale pour la barre. Ensuite, avec le pourcentage de questions répondues, nous remplissons la barre de progrès. Nous avons aussi du adapter le visuel pour les différentes résolutions d'écran.",
        "projects-bambooza-link": "<a href=\"https://jeux.bambooza.ca\" target=\"_blank\" class=\"card\"><div><strong>Lien vers la plateforme</strong></div></a>",
        "projects-bambooza-my-role": "Mon rôle",
        "projects-bambooza-my-role-content": "Pour ce projet, nous avons collaboré avec les équipes d'Eckinox et de Totema Studio. L'équipe de Totema a fait tout le game design et l'équipe d'Eckinox ont fait tous les systèmes web, dont l'API et toute la sauvegarde d'information et de session. Tout ce que je devais faire, avec deux autres collègues étudiants, était de programmer les jeux. Cependant, pour pouvoir interagir avec les systèmes d'Eckinox, nous avons du apprendre de nouvelles technologies pour pouvoir compléter le projet. Ces technolgies sont <i>Node Packet Manager</i>, <i>Typescript</i>, <i>Vue 3.0</i> et <i>Phaser</i>.<br><br>Pour le projet, j'ai fait une classe globale et versatile pour les éléments interactifs des jeux, ainsi que deux jeux, le <i>Labyrinthe</i> et le <i>Chaudron</i>.",
        "projects-disclaimer": "Cliquez sur la bannière du projet pour afficher le contenu.",
        "projects-encage-ai": "Intelligence artificielle",
        "projects-encage-ai-detection": "Détection",
        "projects-encage-ai-detection-content": "Pour la détection, nous devions changer le comportement de l'oiseau dépendamment du mouvement du joueur. L'oiseau va se baser sur deux sens, soit la vision et le son. Au niveau du son, plus que le personnage bouge rapidement, plus que l'oiseau va réagir. La zone de détection du son est le plus gros cercle montrer dans l'image ci-contre. Selon la force du son, une certaine partie proportionnelle à la force du son est utilisée. Cette proportion est basée sur la vitesse courante du joueur sur la vitesse maximale du joueur. Donc, si le joueur court à 50% de la vitesse maximale, la proportion utilisée du cercle sera de 50%.",
        "projects-encage-ai-detection-content-next": "Ensuite, il y a la détection visuelle de l'oiseau. Celui-ci est seulement visible dans une zone correspondant à 60 degrés en avant de l'oiseau dans le petit cercle montré dans l'image ci-haut. Cette section est plus punitive que le son puisque l'oiseau se sent plus en danger lorsque le personnage est aussi proche de lui. Nous avions eu un bogue relié à la détection qui empêchait que le son et la vue d'être détecté en même temps. J'ai du regarder un peu plus profondément dans le moteur d'<i>Unreal Engine</i>, mais j'ai trouvé un endroit où sont stocké les sens et on peut voir s'ils sont activé en même. Donc, à chaque que la perception est mise à jour, je vérifie si les deux sens sont activés en même temps. Une fois que la détection est faite, nous avons une fonction qui s'exécute à chaque 50 millisecondes qui change la force de détection de l'oiseau et lorsque l'oiseau atteint un certain taux, il va s'enfuir loin du personnage.",
        "projects-encage-ai-introduction": "Le plus grand défi de notre projet était sans aucun doute l'intelligence artificielle des oiseaux. Puisque le coeur de notre jeu repose sur la capture d'oiseau pour l'entreprise familiale, nous devions nous assurer que l'oiseau ait le comportement d'un oiseau de la vie de tous les jours. Ceci était plus compliqué que nous le pensions puisque nous n'avions pas beaucoup d'expérience avec l'intelligence artificielle dans <i>Unreal Engine</i>. J'ai beaucoup aidé mes collègue dans l'algorithme sélection de destination et de mouvement, mais ma principale partie dans l'intelligence artificielle de notre oiseau est la détection du mouvement, la prise de décision de l'oiseau ainsi que l'évitement d'obstacles.",
        "projects-encage-challenges": "Défis de conception",
        "projects-encage-challenges-content": "Le plus gros défi de conception que nous avons était sans doute le développement de l'intelligence artificielle de notre oiseau. Nous avons dédié 4 sprints pour le compléter, soit presque deux mois. Bien que nous avions beaucoup d'expérience et de compétences en tant que programmeurs, nous avions peu d'expérience avec l'intelligence artificielle et c'est tellement plus complexe déboguer de l'intelligence artificielle tout ce que nous avions déboguer avant, soit du JavaScript en web ou des applications console en C++ ou C# ou même des applications mobiles en Java. Il y a plusieurs moments où nous avions passé quelques heures à déboguer un comportement de notre intelligence artificielle, juste pour que nous changions une condition dans la prise de décision et que ça fonctionne. Bref, ce défi nous a permis de nous familiariser avec l'intelligence artificielle avec <i>Unreal Engine</i> et nous sommes maintenant capable de faire des comportements complexes avec cet outil.",
        "projects-encage-challenges-content-next": "Un autre défi que nous avons eu était de collaborer avec les artistes du NAD (École des arts numériques, de l'animation et du design) pour la création de notre jeu. Quoi que l'expérience soit fabuleuse et qu'il nous enlève beaucoup de travail côté visuel, c'est quelque chose à laquelle nous avons dû nous habituer puisque c'était une nouvelle expérience. Les deux choses que nous devions faire était de communiquer régulièrement avec notre game designer pour s'assurer que nous allions dans la bonne direction lors du développement de notre intelligence artificielle et lors du développement des commandes, ainsi que d'exposer des variables pour que notre artiste technique puisse lier les données de notre code et le visuel.",
        "projects-encage-introduction": "<i>Héritage</i> est un jeu narratif à la troisième personne où le personnage principal vient d'une famille de chasseur d'oiseaux. Elle hérite du magasin après le décès de son père et elle doit capturer des oiseaux pour obtenir des plumes pour répondre aux commandes de ses clients. Au cours de son travail, elle se questionne sur l'éthique de ses pratiques.",
        "projects-encage-link": "<a href=\"https://chaos-production.itch.io/heritage\" target=\"_blank\" class=\"card\"><div><strong>Essayez le jeu ici!</strong></div></a>",
        "projects-encage-members": "Membres de l'équipe",
        "projects-encage-my-role": "Mon rôle",
        "projects-encage-my-role-content": "Du point de vue de la programmation, nous avions deux grandes parties dans le projet, soit l'intelligence artificielle ainsi que les commandes que notre personnage principal doit compléter. Ces deux parties ont apporté différents défis que nous avons du relevé pour que notre jeu puisse avoir un <i>gameplay</i> qui transporte les joueurs au Québec au début du 20<sup>e</sup> siècle.",
        "projects-encage-oa": "Évitement d'obstacles",
        "projects-encage-oa-introduction": "Une partie intégrale pour le mouvement de notre intelligence artificielle est l'évitement d'osbtacles. Ceci nous a porter beaucoup de troubles, puisque le comportement que nous avions donnait des résultats plutôt grotesque. Voici des exemples de comportement que nous avions tout en testant notre algorithme d'évitement d'obstacle:",
        "projects-encage-oa-item1": "L'oiseau faisait un va-et-vient entre deux directions puisque notre algorithme choisissait la direction le plus proche de la destination.",
        "projects-encage-oa-item2": "Lorsque l'oiseau était trop proche d'un mur, l'oiseau essayait sans cesse de voler à travers le mur.",
        "projects-encage-oa-solutions": "Tout d'abord, pour que notre algorithme se déclenche, il faut que le <i>raycast</i> que l'oiseau lance lorsqu'il bouge entre en contact avec une surface solide que l'oiseau ne peut pas traverser. Lorsqu'il confirme qu'il a touché cette surface, nous lançons 8 autres raycast en forme de cône. Tous ceux qui ne touche rien se font ajouter à une liste de points possibles. Si la liste est vide, nous lançons 4 autres raycast, un à sa droit, un à sa gauche, un au dessus de lui et le dernier sera lancé en dessous de lui. Si ils ne touchent rien, ils se font ajouter à la liste de points possibles. Une fois que nous avons des points possibles, nous vérifions tous les points et on les compare pour ensuite sélectionner le point le plus proche de la destination finale. Pour régler le premier problème mentionné plus haut, nous avons changé notre algorithme de sélection de point pour comparer les points retirant la hauteur des points, comme ça le va-et-vient puisse arrêter. Une autre solution que nous avons implémentés pour régler notre algorithme est de la rendre biaisé, c'est-à-dire que l'algorithme va privilégier utiliser le même côté d'évitement s'il est disponible. Pour régler le deuxième comportement, nous avons remarqué que les deux niveaux de <i>raycasts</i> ont permis de réglé ce problème.",
        "projects-encage-orders": "Commandes",
        "projects-encage-orders-generation": "Génération automatique des commandes",
        "projects-encage-orders-generation-content": "Après avoir sondé toutes les plumes, il faut créer les commandes que le joueur puisse faire. Nous avons 4 valeurs aléatoires dans la génération des commandes. La première est pour décider le nombre de plumes que nous allons avoir dans la commande, variant entre 1 et 3. La deuxième est pour réutilisé plusieurs fois. Cette valeur permet de prendre une plume parmis la liste de plumes, l'ajouter dans la commande et ensuite la retirer de la liste globales de plumes. Les deux autres valeurs aléatoires permettent de choisir des textures pour l'interface utilisateur, de sorte à ce que les commandes ont un visuel différents.",
        "projects-encage-orders-introduction": "La deuxième partie la plus importante du jeux côté programmation est la complétion des commandes. Il y a quelques contraintes dans les commandes qui nous a donné quelques maux de têtes. De ma part, je devais m'occuper de la génération automatique des commandes et de s'assurer que la complétion de l'ensemble des commandes soient possibles.",
        "projects-encage-orders-validation": "Assurer la complétion de l'ensemble des commandes",
        "projects-encage-orders-validation-content": "Lorsque les oiseaux se font générés dans le jeu, ils se font assignés aléatoirement une couleur. On pourra ensuite voir des oiseaux de trois couleurs, bleu, rouge ou jaune. Comme on ne sait pas le nombre de chaque couleur d'oiseau, nous devons obtenir ses informations lors de leur création. À chaque fois qu'un oiseau est ajouté, nous ajoutons cette plume à la liste de plumes dans l'état du jeu. Lorsque nous avons toutes les plumes, nous générons les commandes à partir de cette liste.",
        "projects-encage-seeds": "Nouvelle mécanique: Graines",
        "projects-encage-seeds-content": "Pour la continuation du jeu, nou voulions introduire une nouvelle mécanique dans le jeu pour ajouter un nouveau niveau de complexité dans le jeu. Nous avons décidé d'ajouter une mécanique d'appat sous la forme de graines dans le but d'attirer les oiseaux en un point pour pouvoir ensuite les capturer. Ceci a aussi permis à notre designer de niveaux de placer des oiseaux en hauteur et de les rendre inaccessible aux joueurs à moins d'utiliser notre mécanique d'appats.",
        "projects-encage-seeds-changes": "Changements requis",
        "projects-encage-seeds-changes-content": "Pour le fonctionnement de cette mécanique, nous devions ajouter des fonctionnalités au joueur et aux oiseaux. Premièrement, nous avons ajouter au joueur la fonctionnalité de placer des graines. Ensuite, pour les oiseaux, il a fallu ajouter plus de fonctionnement. Premièrement, il faut que les oiseaux puissent détecter les graines. Cette partie est assez simple puisse que nous pouvons ajouter une requête <i>Environment query system</i> (EQS) pour trouver les appats à l'entour de l'oiseau. Ensuite, après avoir détecté les graines, il faut qu'il se dirige vers sa position. Ceci est aussi assez simple puisque nous avions déjà créé notre mouvement auparavant, donc il fallait seulement préciser une endroit pour qu'il s'y dirige. Pour la dernière partie, nous devions changer la détection pour que les oiseaux soient moins sensibles envers le joueur lorsqu'ils mangent. Nous avons décidé de mettre la détection à 50% lorsqu'ils mangent.",
        "projects-genetic-warfare-link": "<a href=\"https://davidnina1.itch.io/genetic-warfare\" target=\"_blank\" class=\"card\"><div><strong>Essayez le jeu ici!</strong></div></a>",
        "projects-home-content": "Je vous invite à voir ma page projets. Cette page contient tous mes projets reliés au développement de jeux vidéos."
    }
}

let lang = "fr"

window.onload = () => {
    if (CookieManager.getCookie("lang") === undefined) {
        CookieManager.setCookie("lang", "fr")
    }
    lang = CookieManager.getCookie("lang")
    updateStrings()

    document.querySelectorAll("[project-target]").forEach((elm) => {elm.addEventListener("click", showProjectContent)})
}

function updateStrings() {
    document.querySelectorAll("[data-string]")
        .forEach((elm) => {
            elm.innerHTML = data[lang.toLowerCase()][elm.attributes["data-string"].value]
        })
}

function langSwitch() {
    assignLangCookie(data[lang.toLowerCase()]["lang"].toLowerCase())
    updateStrings()
}

function assignLangCookie(language) {
    CookieManager.setCookie("lang", language.toLowerCase())
    lang = CookieManager.getCookie("lang")
}

function updateContent(selector, dataString) {
    document.querySelector(selector).attributes["data-string"].value = dataString
}

function updateSkillContent(dataStringPrefix) {
    updateContent("#skills-header", `about-me-${dataStringPrefix}-title`)
    updateContent("#skills-content", `about-me-${dataStringPrefix}-content`)
    updateStrings()
}

function showProjectContent(evt) {
    let value = document.querySelector(evt.target.attributes["project-target"].value).style.display
    document.querySelector(evt.target.attributes["project-target"].value).style.display = value != "block" ? "block" : "none"
    let body = document.querySelector("body")
    body.style.background = `url('../images/${evt.target.attributes["project-background"].value}')`
    body.style.backgroundRepeat = 'no-repeat'
    body.style.backgroundAttachment = 'fixed'
}