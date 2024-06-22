import React from 'react'
import "./footer.css"
const Footer = () => {
    const movies = [
        // ! INTERSTELLAR
        {
          img: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
          name: "Interstellar",
          description:
            "Earth's future has been riddled by disasters, famines, and droughts. There is only one way to ensure mankind's survival: Interstellar travel. A newly discovered wormhole in the far reaches of our solar system allows a team of astronauts to go where no man has gone before, a planet that may have the right environment to sustain human life.",
          year: "2014",
          released: "2014",
          imdb: 8.7,
          genre: "#adventure, #drama, #sci-fi",
          duration: 169,
          country: "United Kingdom, United States of America",
          status: "",
          embed: "zSWdZVtXT7E?si=HCpp8oQjn4VM0ya0",
          watch: "10",
          kp: 8.6,
          age: 18,
          type: "movie",
        },
      
        // ! WHITE HOUSE DOWN
        {
          img: "https://m.media-amazon.com/images/M/MV5BYmI5ZGIxOGMtMjcwMS00Yzk3LWE0YWUtMzc5YTFhNGQ4OWZmXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_QL75_UX380_CR0,0,380,562_.jpg ",
          name: "White House Down",
          description:
            "Capitol Policeman John Cale has just been denied his dream job with the Secret Service of protecting President James Sawyer. Not wanting to let down his little girl with the news, he takes her on a tour of the White House, when the complex is overtaken by a heavily armed paramilitary group. Now, with the nation's government falling into chaos and time running out, it's up to Cale to save the president, his daughter, and the country.",
          year: "2013",
          released: "2013",
          imdb: 6.3,
          genre: "#action, #drama, #thriller",
          duration: 131,
          country: "United States of America",
          status: "",
          embed: "WfaTlmYvTA8?si=-PEP8QDR2cYyRoYr",
          watch: "13",
          kp: 6.6,
          age: 12,
          type: "movie",
        },
      
        // ! MILLER'S GIRL
        {
          img: "https://m.media-amazon.com/images/M/MV5BM2JiYTQzM2MtOWU4NS00MGMwLTg2NTYtMTNhMzk5Y2JlY2Q4XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_QL75_UX380_CR0,4,380,562_.jpg",
          name: "Miller's Girl",
          description:
            "A creative writing assignment yields complex results between a teacher and his talented student.",
          year: "2024",
          released: "2024",
          imdb: 5.2,
          genre: "#comedy, #drama",
          duration: 93,
          country: "United States of America",
          status: "",
          embed: "vk2OJZHutBM?si=ZD3aYKkpyRjQoIAJ",
          watch: "19",
          kp: 5.4,
          age: 18,
          type: "movie",
        },
      
        // ! THE GODFATHER
        {
          img: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR8,0,380,562_.jpg",
          name: "The Godfather",
          description:
            "The Godfather \"Don\" Vito Corleone is the head of the Corleone mafia family in New York. He is at the event of his daughter's wedding. Michael, Vito's youngest son and a decorated WW II Marine is also present at the wedding. Michael seems to be uninterested in being a part of the family business. Vito is a powerful man, and is kind to all those who give him respect but is ruthless against those who do not. But when a powerful and treacherous rival wants to sell drugs and needs the Don's influence for the same, Vito refuses to do it. What follows is a clash between Vito's fading old values and the new ways which may cause Michael to do the thing he was most reluctant in doing and wage a mob war against all the other mafia families which could tear the Corleone family apart.",
          year: "1972",
          released: "1972",
          imdb: 9.2,
          genre: "#crime, #drama",
          duration: 175,
          country: "United States of America",
          status: "",
          embed: "UaVTIH8mujA?si=7p6gyTpYwdNHp-9R",
          watch: "24",
          kp: 8.7,
          age: 18,
          type: "movie",
        },
      
        // ! INCEPTION
        {
          img: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
          name: "Inception",
          description:
            "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible, inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea, but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming.",
          year: "2010",
          released: "2010",
          imdb: 8.8,
          genre: "#action, #adventure, #sci-fi",
          duration: 148,
          country: "United Kingdom, United States of America",
          status: "",
          embed: "YoHD9XEInc0?si=3BX410AMwSRlnOvS",
          watch: "29",
          kp: 8.7,
          age: 12,
          type: "movie",
        },
      
        // ! LIFT
        {
          img: "https://m.media-amazon.com/images/M/MV5BNTBlNmEwNzQtZTc5MC00YmVjLTk5NjgtMmM0NDFmZjJkZjYzXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_QL75_UY562_CR0,0,380,562_.jpg",
          name: "Lift",
          description:
            "Follows a master thief and his Interpol Agent ex-girlfriend who team up to steal $500 million in gold bullion being transported on an A380 passenger flight.",
          year: "2024",
          released: "2024",
          imdb: 5.5,
          genre: "#action, #comedy, #crime",
          duration: 106,
          country: "United States of America",
          status: "",
          embed: "m2L-Sa_6MU0?si=ZsVmWGWyGSv2Pk3n",
          watch: "34",
          kp: 5.9,
          age: 12,
          type: "movie",
        },
      
        // ! TAXI DRIVER
        {
          img: "https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,7,380,562_.jpg",
          name: "Taxi Driver",
          description:
            "Travis Bickle is an ex-Marine and Vietnam War veteran living in New York City. As he suffers from insomnia, he spends his time working as a taxi driver at night, watching porn movies at seedy cinemas during the day, or thinking about how the world, New York in particular, has deteriorated into a cesspool. He's a loner who has strong opinions about what is right and wrong with mankind. For him, the one bright spot in humanity is Betsy, a worker on the presidential nomination campaign of Senator Charles Palantine. After an incident, he believes he has to do whatever he needs to make the world a better place.",
          year: "1976",
          released: "1976",
          imdb: 8.2,
          genre: "#crime, #drama",
          duration: 114,
          country: "United States of America",
          status: "",
          embed: "T5IligQP7Fo?si=DXIdmY-jtsr4D0b4",
          watch: "38",
          kp: 7.8,
          age: 18,
          type: "movie",
        },
      
        // ! THE SHAWSHANK REDEMTION
        {
          img: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_QL75_UX380_CR0,4,380,562_.jpg",
          name: "The Shawshank Redemption",
          description:
            "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.",
          year: "1994",
          released: "1994",
          imdb: 9.3,
          genre: "#drama, #crime",
          duration: 151,
          country: "United States of America",
          status: "",
          embed: "PLl99DlL6b4?si=GIxcRNPGgZS353P_",
          watch: "46",
          kp: 9.1,
          age: 18,
          type: "movie",
        },
      
        // ! LEAVE THE WORLD BEHIND
        {
          img: "https://m.media-amazon.com/images/M/MV5BMTUzM2I3NDEtMjNhYi00NTQ0LThmZDItZTMyMzM2MjJmZGRjXkEyXkFqcGdeQXVyMTU3NDU4MDg2._V1_QL75_UX380_CR0,4,380,562_.jpg",
          name: "Leave The World Behind",
          description:
            "Bearing grim news of an unknown enemy and the shocking certainty that the city succumbs to chaos, a sharp-dressed stranger and his young companion disrupt Amanda and Clay's much-needed family vacation. But the information the unwanted couple brings is inconceivable. Now, a complex, multilevel mystery unfolds before everyone's eyes, whether they like it or not. After all, the unsuspecting tourists have already encountered a series of mysterious, logic-defying incidents during their brief stay. As a result, vague disbelief and a palpable sense of threat ratchet up the tension, rendering modern technology unreliable. And the question remains. In a rapidly disintegrating world where nothing makes sense, what can you do to protect your own and what used to be your cherished ordinary life?",
          year: "2023",
          released: "2023",
          imdb: 6.5,
          genre: "#drama, #mystery, #thriller",
          duration: 140,
          country: "United States of America",
          status: "",
          embed: "cMVBi_e8o-Y?si=rZrXhFwg7edHuG2b",
          watch: "43",
          kp: 6.6,
          age: 12,
          type: "movie",
        },
      
        // ! CREED III
        {
          img: "https://m.media-amazon.com/images/M/MV5BYzIxOTk1NDQtMzJlOC00ODZlLWE1YTAtNTA5ODZlZmZmMDBhXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
          name: "Creed III",
          description:
            "After dominating the boxing world, Adonis Creed (Michael B. Jordan) has been thriving in both his career and family life. When childhood friend and former boxing prodigy Damian (Jonathan Majors) resurfaces after serving a long sentence in prison, he is eager to prove that he deserves his shot in the ring. The face off between former friends is more than just a fight. To settle the score, Adonis must put his future on the line to battle Damian--a fighter who has nothing to lose.",
          year: "2023",
          released: "2023",
          imdb: 6.7,
          genre: "#drama, #action, #sport",
          duration: 116,
          country: "United States of America",
          status: "",
          embed: "AHmCH7iB_IM?si=0Zr9YBkra3kKKBfj",
          watch: "50",
          kp: 6.3,
          age: 12,
          type: "movie",
        },
      
        // ! THE BEEKEPER
        {
          img: "https://m.media-amazon.com/images/M/MV5BZjQwYjU3OTYtMWVhMi00N2Y2LWEzMDgtMzViN2U4NWI1NmI3XkEyXkFqcGdeQXVyODk2NDQ3MTA@._V1_QL75_UX380_CR0,0,380,562_.jpg",
          name: "The Beekeper",
          description:
            "Adam Clay is a beekeeper, but someone very important to him is scammed and driven to harm. However, what these power and money hungry scammers don't know, is that Clay is an agent in a classified program called Beekeepers, and they underestimate how much of a threat he is. Adam sets out on a quest of vengeance, where he hunts and kills those responsible for the incident.",
          year: "2024",
          released: "2024",
          imdb: 6.4,
          genre: "#action, #thriller",
          duration: 105,
          country: "United States of America",
          status: "",
          embed: "dE0KFHYiQ4s?si=FL6Rq4JDFfLje0Ky",
          watch: "56",
          kp: 6.1,
          age: 12,
          type: "movie",
        },
      
        // ! ORION AND THE DARK
        {
          img: "https://m.media-amazon.com/images/M/MV5BZTkyODExOTctY2E3My00M2U5LWI2OGItNzRlZDk1OWJmOWQ3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg ",
          name: "Orion and the Dark",
          description:
            "Orion seems a lot like your average elementary school kid shy, unassuming, harboring a secret crush. But underneath his seemingly normal exterior, Orion is a ball of adolescent anxiety, completely consumed by irrational fears of bees, dogs, the ocean, cell phone waves, murderous gutter clowns, and even falling off of a cliff. But of all his fears, the thing he's the most afraid of is what he confronts on a nightly basis: the dark. So when the literal embodiment of his worst fear pays a visit, Dark whisks Orion away on a roller coaster ride around the world to prove there is nothing to be afraid of in the night. As the unlikely pair grows closer, Orion must decide if he can learn to accept the unknown to stop letting fear control his life and finally embrace the joy of living.",
          year: "2024",
          released: "2024",
          imdb: 6.4,
          genre: "#animation, #comedy, #adventure",
          duration: 93,
          country: "United States of America",
          status: "",
          embed: "cScAQ2O26Y4?si=RUNBtmEv9TqV8Gra",
          watch: "54",
          kp: 6.5,
          age: 0,
          type: "movie",
        },
      
        // ! MEMENTO
        {
          img: "https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR2,0,380,562_.jpg",
          name: "Memento",
          description:
            "Memento chronicles two separate stories of Leonard, an ex-insurance investigator who can no longer build new memories, as he attempts to find the murderer of his wife, which is the last thing he remembers. One story line moves forward in time while the other tells the story backwards revealing more each time.",
          year: "2000",
          released: "2000",
          imdb: 8.4,
          genre: "#mystery, #thriller",
          duration: 113,
          country: "United States of America",
          status: "",
          embed: "4CV41hoyS8A?si=ttOZrLbkFw3_XMy3",
          watch: "63",
          kp: 7.9,
          age: 18,
          type: "movie",
        },
      
        // ! THE DEPARTED
        {
          img: "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_QL75_UY562_CR0,0,380,562_.jpg",
          name: "The Departed",
          description:
            "In this crime-action tour de force, the South Boston state police force is waging war on Irish-American organized crime. Young undercover cop Billy Costigan is assigned to infiltrate the mob syndicate run by gangland chief Frank Costello. While Billy quickly gains Costello's confidence, Colin Sullivan, a hardened young criminal who has infiltrated the state police as an informer for the syndicate, is rising to a position of power in the Special Investigation Unit. Each man becomes deeply consumed by their double lives, gathering information about the plans and counter-plans of the operations they have penetrated. But when it becomes clear to both the mob and the police that there is a mole in their midst, Billy and Colin are suddenly in danger of being caught and exposed to the enemy - and each must race to uncover the identity of the other man in time to save themselves. But is either willing to turn on their friends and comrades they've made during their long stints undercover?",
          year: "2006",
          released: "2006",
          imdb: 8.5,
          genre: "#crime, #drama, #thriller",
          duration: 151,
          country: "United States of America",
          status: "",
          embed: "iQpb1LoeVUc?si=SYO6ffMvs5BichXn",
          watch: "59",
          kp: 8.5,
          age: 18,
          type: "movie",
        },
      
        // ! SAW-X
        {
          img: "https://m.media-amazon.com/images/M/MV5BMmJhYjBkMzgtZGIwMC00YTAzLWE4NTQtYzVkNDVmYjIzODI0XkEyXkFqcGdeQXVyODQxMTI4MjM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
          name: "Saw X",
          description:
            "John Kramer (Tobin Bell) is back. The most chilling installment of the SAW franchise yet explores the untold chapter of Jigsaw's most personal game. Set between the events of SAW I and II, a sick and desperate John travels to Mexico for a risky and experimental medical procedure in hopes of a miracle cure for his cancer - only to discover the entire operation is a scam to defraud the most vulnerable. Armed with a newfound purpose, John returns to his work, turning the tables on the con artists in his signature visceral way through a series of ingenious and terrifying traps.",
          year: "2023",
          released: "2023",
          imdb: 6.6,
          genre: "#horror, #mystery, #thriller",
          duration: 118,
          country: "United States of America",
          status: "",
          embed: "t3PzUo4P21c?si=Lb5pA-CqIEpRzi3B",
          watch: "69",
          kp: 6.6,
          age: 18,
          type: "movie",
        },
      
        // ! OPPENHEIMER
        {
          img: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
          name: "Oppenheimer",
          description:
            "A dramatization of the life story of J. Robert Oppenheimer, the physicist who had a large hand in the development of the atomic bomb, thus helping end World War 2. We see his life from university days all the way to post-WW2, where his fame saw him embroiled in political machinations.",
          year: "2023",
          released: "2023",
          imdb: 8.4,
          genre: "#biography, #drama, #history",
          duration: 181,
          country: "United States of America",
          status: "",
          embed: "bK6ldnjE3Y0?si=3AtU6MPuGF-TP-Gj",
          watch: "66",
          kp: 8.2,
          age: 12,
          type: "movie",
        },
      
        // ! THE MARVELS
        {
          img: "https://m.media-amazon.com/images/M/MV5BM2U2YWU5NWMtOGI2Ni00MGMwLWFkNjItMjgyZWMxNjllNTMzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
          name: "The Marvels",
          description:
            "Carol Danvers AKA Captain Marvel has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan Kamala Khan, aka Ms. Marvel, and Carol's estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau.",
          year: "2023",
          released: "2023",
          imdb: 5.6,
          genre: "#action, #adventure, #fantasy",
          duration: 105,
          country: "United States of America",
          status: "",
          embed: "wS_qbDztgVY?si=uH9JB6PBU3VyqYuk",
          watch: "79",
          kp: 5.2,
          age: 12,
          type: "movie",
        },
      
        // ! THE GANGS OF NEW YORK
        {
          img: "https://m.media-amazon.com/images/M/MV5BNDg3MmI1ZDYtMDZjYi00ZWRlLTk4NzEtZjY4Y2U0NjE5YmRiXkEyXkFqcGdeQXVyNzAxMjE1NDg@._V1_QL75_UY562_CR1,0,380,562_.jpg",
          name: "Gangs of New York",
          description:
            'In the god-forsaken district of early-1860s Lower Manhattan known as the Five Points, the vicious Nativist, Bill "The Butcher" Cutting, is the supreme overlord of an area riddled with crime, prostitution, theft and murder, as the American Civil War still rages on. Sixteen whole years after the brutal murder of his father from Bill\'s blood-stained hands, an orphaned Irish-American, Amsterdam Vallon, returns to this melting pot of corruption to avenge his untimely death; however, a lot has changed since then. Who can remember the once-innocent boy and now a young man bent on revenge, who works his way up to the hierarchy of Five Points? Will Amsterdam ever taste the dangerous but sweet fruit of retribution?',
          year: "2002",
          released: "2002",
          imdb: 7.5,
          genre: "#crime, #drama",
          duration: 167,
          country: "United States of America",
          status: "",
          embed: "qHVUPri5tjA?si=TE8coZCrlaWIp0TN",
          watch: "75",
          kp: 7.7,
          age: 18,
          type: "movie",
        },
      
        // ! CASABLANCA
        {
          img: "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_QL75_UX380_CR0,5,380,562_.jpg",
          name: "Casablanca",
          description:
            "The story of Rick Blaine, a cynical world-weary ex-patriate who runs a nightclub in Casablanca, Morocco during the early stages of WWII. Despite the pressure he constantly receives from the local authorities, Rick's cafe has become a kind of haven for refugees seeking to obtain illicit letters that will help them escape to America. But when Ilsa, a former lover of Rick's, and her husband, show up to his cafe one day, Rick faces a tough challenge which will bring up unforeseen complications, heartbreak and ultimately an excruciating decision to make.",
          year: "1942",
          released: "1942",
          imdb: 8.5,
          genre: "#drama, #romance, #war",
          duration: 92,
          country: "United States of America",
          status: "",
          embed: "MF7JH_54d8c?si=5f7cSXZ8vj6VbAKL",
          watch: "97",
          kp: 8.0,
          age: 12,
          type: "movie",
        },
      
        // ! HOSTILES
        {
          img: "https://m.media-amazon.com/images/M/MV5BNjFhZjM4ZDYtMGRjYi00Yzc2LWExYmEtMDQ3NzA4ODU4YTljXkEyXkFqcGdeQXVyNjkwMzU3NDI@._V1_QL75_UX380_CR0,0,380,562_.jpg",
          name: "Hostiles",
          description:
            "In 1892 after nearly two decades of fighting the Cheyenne, the Apache, and the Comanche natives, the United States Cavalry Captain and war hero Joseph Blocker is ordered to escort the ailing Cheyenne chief, Yellow Hawk--his most despised enemy--to his ancestral home in Montana's Valley of the Bears. Nauseated with a baleful anger, Joseph's unwelcome final assignment is further complicated when widowed settler Rosalie Quaid is taken in by his band of soldiers. Aggressive packs of marauding Comanches are still on the warpath and thirsty for blood, so can the seasoned Captain do his duty one last time?",
          year: "2017",
          released: "2017",
          imdb: 7.2,
          genre: "#drama, #western",
          duration: 134,
          country: "United States of America",
          status: "",
          embed: "1M5cj4UmscE?si=4Ep5s2wgm8DOQVDF",
          watch: "99",
          kp: 7.4,
          age: 18,
          type: "movie",
        },
      
        // ! VENOM 2
        {
          img: "https://m.media-amazon.com/images/M/MV5BNDEwNDE5ZDUtMjQ0ZC00OTA0LTkyOTQtZGE0OTU4Njc0MjM5XkEyXkFqcGdeQXVyMzEyMDQzNzY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
          name: "Venom: Let There Be Carnage",
          description:
            "Eddie Brock struggles to adjust to his new life as the host of the alien symbiote Venom, which grants him super-human abilities in order to be a lethal vigilante. Brock attempts to reignite his career by interviewing serial killer Cletus Kasady, who becomes the host of the symbiote Carnage and escapes prison after a failed execution.",
          year: "2021",
          released: "2021",
          imdb: 5.9,
          genre: "#action, #sci-fi, #thriller",
          duration: 97,
          country: "United States of America",
          status: "",
          embed: "-ezfi6FQ8Ds?si=g5Ecs3qyhpuqUIxF",
          watch: "101",
          kp: 6.2,
          age: 18,
          type: "movie",
        },
      
        // ! DUNE
        {
          img: "https://m.media-amazon.com/images/M/MV5BMDQ0NjgyN2YtNWViNS00YjA3LTkxNDktYzFkZTExZGMxZDkxXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_QL75_UY562_CR1,0,380,562_.jpg",
          name: "Dune: Part One",
          description:
            "A mythic and emotionally charged hero's journey, \"Dune\" tells the story of Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, who must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
          year: "2021",
          released: "2021",
          imdb: 8.0,
          genre: "#action, #adventure, #drama",
          duration: 155,
          country: "United States of America",
          status: "",
          embed: "n9xhJrPXop4?si=LthusuF91hJCRHIf",
          watch: "127",
          kp: 7.7,
          age: 12,
          type: "movie",
        },
      
        // ! THE MATRIX
        {
          img: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
          name: "The Matrix",
          description:
            "Thomas A. Anderson is a man living two lives. By day he is an average computer programmer and by night a hacker known as Neo. Neo has always questioned his reality, but the truth is far beyond his imagination. Neo finds himself targeted by the police when he is contacted by Morpheus, a legendary computer hacker branded a terrorist by the government. As a rebel against the machines, Neo must confront the agents: super-powerful computer programs devoted to stopping Neo and the entire human rebellion.",
          year: "1999",
          released: "1999",
          imdb: 8.7,
          genre: "#action, #sci-fi",
          duration: 136,
          country: "United States of America",
          status: "",
          embed: "9ix7TUGVYIo?si=QqngZc_6BQZiZUd_",
          watch: "104",
          kp: 8.5,
          age: 18,
          type: "movie",
        },
      
        // ! GHOST BUSTERS: AFTERLIFE
        {
          img: "https://m.media-amazon.com/images/M/MV5BNDRhNmUwMDktZGZjZS00NWY4LWIyNWItYmZmNWJiMDBiNDQzXkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_QL75_UX380_CR0,1,380,562_.jpg",
          name: "Ghostbusters: Afterlife",
          description:
            "Running out of options and money, single mum Callie sets foot in the small town of Summerville, Oklahoma, with her two teenage children, Phoebe and Trevor. And now, there is no turning back. As the family attempts to settle in the dilapidated house of Callie's eccentric late father, unexpected secrets hidden in plain sight, mysterious equipment, and a strange vehicle rotting in the barn seem to relate to the area's puzzling seismic activity, and something even more shocking: the long-forgotten Stay-Puft Marshmallow Man Incident in 1980s New York City. But there hasn't been a single ghost sighting since the bizarre events of Ghostbusters II (1989). Is history repeating itself? Will Phoebe connect the dots, give her grandfather a voice, and discover the family's connection to the original Ghostbusters (1984)",
          year: "2021",
          released: "2021",
          imdb: 7.1,
          genre: "#adventure, #comedy, #fantasy",
          duration: 124,
          country: "United States of America",
          status: "",
          embed: "ahZFCF--uRY?si=bQNimSqAJrZctawB",
          watch: "107",
          kp: 7.0,
          age: 12,
          type: "movie",
        },
      
        // ! MONEY HEIST
        {
          img: "https://m.media-amazon.com/images/M/MV5BODI0ZTljYTMtODQ1NC00NmI0LTk1YWUtN2FlNDM1MDExMDlhXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_QL75_UX380_CR0,5,380,562_.jpg",
          name: "Money Heist",
          description:
            "To carry out the biggest heist in history, a mysterious man called The Professor recruits a band of eight robbers who have a single characteristic: none of them has anything to lose. Five months of seclusion memorizing every step, every detail, every probability culminate in eleven days locked up in the National Coinage and Stamp Factory of Spain, surrounded by police forces and with dozens of hostages in their power, to find out whether their suicide wager will lead to everything or nothing.",
          year: "2017",
          released: "2017-2021",
          imdb: 8.2,
          genre: "#action, #crime, #drama",
          duration: 70,
          country: "Spain",
          status: "Season 1",
          embed: "_InqQJRqGW4?si=Gem4fC6Lm3_n9iS6",
          watch: "82",
          kp: 8.2,
          age: 18,
          type: "show",
        },
      
        // ! THE SUICIDE SQUAD
        {
          img: "https://m.media-amazon.com/images/M/MV5BNzUzMjkxMzItMTc0MS00MjAxLWFiZGMtY2YwOGM2Yjk1ZjBmXkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
          name: "The Suicide Squad",
          description:
            "In exchange for lighter sentences, just like the anti-hero team in Suicide Squad (2016), a new batch of Belle Reve's meta-humans strike a deal with the cold head of Task Force X, Amanda Waller. This time, her ragtag band of super-powered convicts--Harley Quinn, Bloodsport, Peacemaker, King Shark, Polka-Dot Man, and Ratcatcher 2--venture into the peril-laden South American island nation of Corto Maltese to find the Thinker: the evil scientist in charge of the mysterious Project Starfish. But, as the band joins forces with an old leader of the notorious team, humankind is on the verge of extinction. Can the expendable Suicide Squad stop the new menace that could mean the end of the world as we know it?",
          year: "2021",
          released: "2021",
          imdb: 7.2,
          genre: "#action, #adventure, #comedy",
          duration: 132,
          country: "United States of America",
          status: "",
          embed: "eg5ciqQzmK0?si=wUY_WjkVz5pzG8Pa",
          watch: "132",
          kp: 6.7,
          age: 18,
          type: "movie",
        },
      
        // ! Hotel Transylvania 4: Transformania
        {
          img: "https://m.media-amazon.com/images/M/MV5BYWJmNzRiMWEtNzk3Ni00OGU5LThlMDctYmJhMTA1YzEzNjY4XkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_QL75_UX380_CR0,1,380,562_.jpg",
          name: "Hotel Transylvania 4: Transformania",
          description:
            "When Van Helsing's mysterious invention, the \"Monsterfication Ray\", goes haywire, Drac and his monster pals are all transformed into humans, and Johnny becomes a monster. In their new mismatched bodies, Drac, stripped of his powers, and an exuberant Johnny, loving life as a monster, must team up and race across the globe to find a cure before it's too late, and before they drive each other crazy. With help from Mavis and the hilariously human Drac Pack, the heat is on to find a way to switch themselves back before their transformations become permanent.",
          year: "2022",
          released: "2022",
          imdb: 6.0,
          genre: "#animation, #adventure, #comedy",
          duration: 87,
          country: "United States of America",
          status: "",
          embed: "7AP86CYeR30?si=q2pvxmd0XVfr2naU",
          watch: "139",
          kp: 6.4,
          age: 6,
          type: "movie",
        },
      
        // ! Guardians of the Galaxy Vol. 3
        {
          img: "https://m.media-amazon.com/images/M/MV5BMDgxOTdjMzYtZGQxMS00ZTAzLWI4Y2UtMTQzN2VlYjYyZWRiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
          name: "Guardians of the Galaxy Vol. 3",
          description:
            'In Marvel Studios "Guardians of the Galaxy Vol. 3" our beloved band of misfits are looking a bit different these days. Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.',
          year: "2023",
          released: "2023",
          imdb: 7.9,
          genre: "#action, #adventure, #comedy",
          duration: 150,
          country: "United States of America",
          status: "",
          embed: "u3V5KDHRQvk?si=niN2dZ8gFDVNgvdU",
          watch: "129",
          kp: 8.1,
          age: 12,
          type: "movie",
        },
      
        // ! ALADDIN
        {
          img: "https://m.media-amazon.com/images/M/MV5BMjQ2ODIyMjY4MF5BMl5BanBnXkFtZTgwNzY4ODI2NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
          name: "Aladdin",
          description:
            "Kind-hearted street urchin Aladdin vies for the love of beautiful Princess Jasmine of Agrabah. When he finds a magic lamp, he uses the genie's magic power to make himself a prince in order to marry her. He's also on a mission to stop the powerful Jafar, who plots to steal the magic lamp that could make his deepest wishes come true.",
          year: "2019",
          released: "2019",
          imdb: 6.9,
          genre: "#adventure, #comedy, #romance",
          duration: 128,
          country: "United States of America",
          status: "",
          embed: "VcBllhVj1eA?si=ST0cydwiZ-2G8Pkz",
          watch: "135",
          kp: 7.3,
          age: 6,
          type: "movie",
        },
      
        // ! Stranger Things
        {
          img: "https://m.media-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_FMjpg_UY755_.jpg",
          name: "Stranger Things",
          description:
            "In a small town where everyone knows everyone, a peculiar incident starts a chain of events that leads to a child's disappearance, which begins to tear at the fabric of an otherwise-peaceful community. Dark government agencies and seemingly malevolent supernatural forces converge on the town, while a few of the locals begin to understand that more is going on than meets the eye.",
          year: "2016",
          released: "2016-2025",
          imdb: 8.7,
          genre: "#drama, #fantasy, #horror",
          duration: 51,
          country: "United States of America",
          status: "Season 1",
          embed: "b9EkMc79ZSU?si=IpSJLrNxfCn2vp3X",
          watch: "108",
          kp: 8.4,
          age: 16,
          type: "show",
        },
      
        // ! THE DARK KNIGHT
        {
          img: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
          name: "The Dark Knight",
          description:
            'Set within a year after the events of Batman Begins (2005), Batman, Lieutenant James Gordon, and new District Attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City, until a mysterious and sadistic criminal mastermind known only as "The Joker" appears in Gotham, creating a new wave of chaos. Batman\'s struggle against The Joker becomes deeply personal, forcing him to "confront everything he believes" and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent, and Rachel Dawes.',
          year: "2008",
          released: "2008",
          imdb: 9.0,
          genre: "#action, #crime, #drama",
          duration: 152,
          country: "United States of America",
          status: "",
          embed: "TQfATDZY5Y4?si=N4NGjHlKMr1vmKKX",
          watch: "145",
          kp: 8.5,
          age: 18,
          type: "movie",
        },
      
        // ! PRISON BREAK
        {
          img: "https://m.media-amazon.com/images/M/MV5BMTg3NTkwNzAxOF5BMl5BanBnXkFtZTcwMjM1NjI5MQ@@._V1_QL75_UY562_CR1,0,380,562_.jpg",
          name: "Prison Break",
          description:
            "An innocent man is framed for the homicide of the Vice President's brother and scheduled to be executed at a super-max penitentiary, thus it's up to his younger brother to save him with his genius scheme: install himself in the same prison by holding up a bank and, as the final month ticks away, launch the escape plan step-by-step to break the both of them out, with his full-body tattoo acting as his guide; a tattoo which hides the layout of the prison facility and necessary clues vital to the escape.",
          year: "2005",
          released: "2005-2017",
          imdb: 8.3,
          genre: "#action, #crime, #drama",
          duration: 44,
          country: "United States of America",
          status: "Season 1",
          embed: "AL9zLctDJaU?si=PyXvRwAC4wjzeOi1",
          watch: "146",
          kp: 8.4,
          age: 12,
          type: "show",
        },
      
        // ! 12 Angry Men
        {
          img: "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_QL75_UX380_CR0,11,380,562_.jpg",
          name: "12 Angry Men",
          description:
            "The defense and the prosecution have rested, and the jury is filing into the jury room to decide if a young man is guilty or innocent of murdering his father. What begins as an open-and-shut case of murder soon becomes a detective story that presents a succession of clues creating doubt, and a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, AND each other. Based on the play, all of the action takes place on the stage of the jury room.",
          year: "1957",
          released: "1957",
          imdb: 9.0,
          genre: "#crime, #drama",
          duration: 96,
          country: "United States of America",
          status: "",
          embed: "_13J_9B5jEk?si=7JtgxcVzgov01lfw",
          watch: "192",
          kp: 8.5,
          age: 16,
          type: "movie",
        },
      
        // ! 47 Ronin
        {
          img: "https://m.media-amazon.com/images/M/MV5BMTc0MjE2NzE0OV5BMl5BanBnXkFtZTgwNTU5MjE1MDE@._V1_QL75_UX380_CR0,20,380,562_.jpg",
          name: "47 Ronin",
          description:
            "While hunting in the forest, Lord Asano of Ako and his samurai find a young half-breed and take him with them to live in the castle. Several years later, Lord Asano holds a tournament to welcome the Shogun to Ako. The night after the tournament, Lord Asano is bewitched into hurting Lord Kira of Nagato, and is punished into committing seppuku by the Shogun. Realizing that it was a Lord Kira's evil plot, the samurais and the half-breed sets out for revenge against the Shogun's order.",
          year: "2013",
          released: "2013",
          imdb: 6.2,
          genre: "#action, #drama, #fantasy",
          duration: 128,
          country: "United States of America",
          status: "",
          embed: "j8cKdDkkIYY?si=UmQIdJCbNGUCytgv",
          watch: "198",
          kp: 6.8,
          age: 12,
          type: "movie",
        },
      
        // ! WISH
        {
          img: "https://m.media-amazon.com/images/M/MV5BYWQ4M2ZmODItNzZhYi00MzY1LTk2ZmItYTUwODI2NzJmN2JiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
          name: "Wish",
          description:
            "A young girl named Asha wishes on a star and gets a more direct answer than she bargained for when a trouble-making star comes down from the sky to join her.",
          year: "2023",
          released: "2023",
          imdb: 5.7,
          genre: "#animation, #adventure, #comedy",
          duration: 114,
          country: "United States of America",
          status: "",
          embed: "oyRxxpD3yNw?si=r52g-xMO5V2uDWcV",
          watch: "224",
          kp: 5.9,
          age: 0,
          type: "movie",
        },
      
        // ! AQUAMAN AND THE LOST KINGDOM
        {
          img: "https://m.media-amazon.com/images/M/MV5BMzZlZDQ5NWItY2RjMC00NjRiLTlmZTgtZGE2ODEyMjVlOTJhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
          name: "Aquaman and the Lost Kingdom",
          description:
            "Having failed to defeat Aquaman the first time, Black Manta, still driven by the need to avenge his father's death, will stop at nothing to take Aquaman down once and for all. This time Black Manta is more formidable than ever before, wielding the power of the mythic Black Trident, which unleashes an ancient and malevolent force. To defeat him, Aquaman will turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance. Together, they must set aside their differences in order to protect their kingdom and save Aquaman's family, and the world, from irreversible destruction.",
          year: "2023",
          released: "2023",
          imdb: 5.7,
          genre: "#action, #adventure, #fantasy",
          duration: 124,
          country: "United States of America",
          status: "",
          embed: "FV3bqvOHRQo?si=qpVhVJ3zFiDlN1LJ",
          watch: "195",
          kp: 6.1,
          age: 12,
          type: "movie",
        },
      
        // ! SHERLOCK
        {
          img: "https://m.media-amazon.com/images/M/MV5BMWEzNTFlMTQtMzhjOS00MzQ1LWJjNjgtY2RhMjFhYjQwYjIzXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
          name: "Sherlock",
          description:
            "In this modernized version of the Conan Doyle characters, using his detective plots, Sherlock Holmes lives in early-21st-century London and acts more cocky towards Scotland Yard's detective inspector Lestrade because he's actually less confident. Doctor Watson is now a fairly young veteran of the Afghan war, less adoring and more active.",
          year: "2010",
          released: "2010-2017",
          imdb: 9.1,
          genre: "#crime, #drama, #mystery",
          duration: 88,
          country: "United States of America",
          status: "Season 1",
          embed: "9UcR9iKArd0?si=X_KrMtGR3LjqDc86",
          watch: "205",
          kp: 8.9,
          age: 12,
          type: "show",
        },
      
        // ! GLADIATOR
        {
          img: "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
          name: "Gladiator",
          description:
            "Maximus is a powerful Roman general, loved by the people and the aging Emperor, Marcus Aurelius. Before his death, the Emperor chooses Maximus to be his heir over his own son, Commodus, and a power struggle leaves Maximus and his family condemned to death. The powerful general is unable to save his family, and his loss of will allows him to get captured and put into the Gladiator games until he dies. The only desire that fuels him now is the chance to rise to the top so that he will be able to look into the eyes of the man who will feel his revenge.",
          year: "2000",
          released: "2000",
          imdb: 8.5,
          genre: "#action, #adventure, #drama",
          duration: 155,
          country: "United States of America, United Kingdom",
          status: "",
          embed: "P5ieIbInFpg?si=PenkpOGeoPaAFC8S",
          watch: "226",
          kp: 8.6,
          age: 18,
          type: "movie",
        },
      
        // ! THE REVENANT
        {
          img: "https://m.media-amazon.com/images/M/MV5BMDE5OWMzM2QtOTU2ZS00NzAyLWI2MDEtOTRlYjIxZGM0OWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_QL75_UX380_CR0,1,380,562_.jpg",
          name: "The Revenant",
          description:
            "While exploring uncharted wilderness in 1823, legendary frontiersman Hugh Glass sustains injuries from a brutal bear attack. When his hunting team leaves him for dead, Glass must utilize his survival skills to find a way back home while avoiding natives on their own hunt. Grief-stricken and fueled by vengeance, Glass treks through the wintry terrain to track down John Fitzgerald, the former confidant who betrayed and abandoned him.",
          year: "2015",
          released: "2015",
          imdb: 8.0,
          genre: "#action, #adventure, #drama",
          duration: 156,
          country: "United States of America",
          status: "",
          embed: "LoebZZ8K5N0?si=oalhcOCaFZSZ5rTG",
          watch: "228",
          kp: 7.8,
          age: 18,
          type: "movie",
        },
      
        // ! HACKSAW RIDGE
        {
          img: "https://m.media-amazon.com/images/M/MV5BMjQ1NjM3MTUxNV5BMl5BanBnXkFtZTgwMDc5MTY5OTE@._V1_QL75_UX380_CR0,12,380,562_.jpg",
          name: "Hacksaw Ridge",
          description:
            "While exploring uncharted wilderness in 1823, legendary frontiersman Hugh Glass sustains injuries from a brutal bear attack. When his hunting team leaves him for dead, Glass must utilize his survival skills to find a way back home while avoiding natives on their own hunt. Grief-stricken and fueled by vengeance, Glass treks through the wintry terrain to track down John Fitzgerald, the former confidant who betrayed and abandoned him.",
          year: "2016",
          released: "2016",
          imdb: 8.1,
          genre: "#biography, #drama, #history",
          duration: 139,
          country: "United States of America",
          status: "",
          embed: "s2-1hz1juBI?si=jBOgufHUnLDCDs37",
          watch: "230",
          kp: 8.2,
          age: 18,
          type: "movie",
        },
      
        // ! THE POWER OF THE DOG
        {
          img: "https://m.media-amazon.com/images/M/MV5BZGRhYjE2NWUtN2FkNy00NGI3LTkxYWMtMDk4Yjg5ZjI3MWI2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_QL75_UX380_CR0,0,380,562_.jpg",
          name: "The Power of the Dog",
          description:
            "Severe, pale-eyed, handsome, Phil Burbank is brutally beguiling. All of Phil's romance, power and fragility is trapped in the past and in the land: He can castrate a bull calf with two swift slashes of his knife; he swims naked in the river, smearing his body with mud. He is a cowboy as raw as his hides. The year is 1925. The Burbank brothers are wealthy ranchers in Montana. At the Red Mill restaurant on their way to market, the brothers meet Rose, the widowed proprietress, and her impressionable son Peter. Phil behaves so cruelly he drives them both to tears, revelling in their hurt and rousing his fellow cowhands to laughter - all except his brother George, who comforts Rose then returns to marry her...",
          year: "2021",
          released: "2021",
          imdb: 6.8,
          genre: "#drama, #western",
          duration: 126,
          country: "United Kingdom, New Zealand",
          status: "",
          embed: "LRDPo0CHrko?si=mZZJQu-y838icQVe",
          watch: "232",
          kp: 6.6,
          age: 16,
          type: "movie",
        },
      
        // ! GAME OF THRONES
        {
          img: "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_QL75_UX380_CR0,4,380,562_.jpg",
          name: "Game of Thrones",
          description:
            "In the mythical continent of Westeros, several powerful families fight for control of the Seven Kingdoms. As conflict erupts in the kingdoms of men, an ancient enemy rises once again to threaten them all. Meanwhile, the last heirs of a recently usurped dynasty plot to take back their homeland from across the Narrow Sea.",
          year: "2011",
          released: "2011-2019",
          imdb: 9.2,
          genre: "#action, #adventure, #drama",
          duration: 55,
          country: "United States of America, United Kingdom",
          status: "Season 1",
          embed: "KPLWWIOCOOQ?si=DunX-_vHz2FayKFP",
          watch: "233",
          kp: 9.0,
          age: 18,
          type: "show",
        },
      
        // !   The Lord of the Rings: The Rings of Power
        {
          img: "https://m.media-amazon.com/images/M/MV5BMGFlMzI0YmEtZDEzNy00NWY1LTgzNDEtMTg2MzQ4OWFlNmNjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
          name: "The Lord of the Rings: The Rings of Power",
          description:
            "This epic drama is set thousands of years before the events of J.R.R. TolkienвЂ™s The Hobbit and The Lord of the Rings, and will take viewers back to an era in which great powers were forged, kingdoms rose to glory and fell to ruin, unlikely heroes were tested, hope hung by the finest of threads, and the greatest villain that ever flowed from TolkienвЂ™s pen threatened to cover all the world in darkness. Beginning in a time of relative peace, the series follows an ensemble cast of characters, both familiar and new, as they confront the long-feared re-emergence of evil to Middle-earth. From the darkest depths of the Misty Mountains, to the majestic forests of the elf-capital of Lindon, to the breathtaking island kingdom of NГєmenor, to the furthest reaches of the map, these kingdoms and characters will carve out legacies that live on long after they are gone.",
          year: "2022",
          released: "2022",
          imdb: 7.0,
          genre: "#action, #adventure, #drama",
          duration: 61,
          country: "United States of America, New Zealand",
          status: "",
          embed: "x8UAUAuKNcU?si=q3dpVhXcT11R7pwk",
          watch: "246",
          kp: 6.2,
          age: 14,
          type: "movie",
        },
      
        // ! SPIDERMAN ACROSS THE SPIDERVERSE
        {
          img: "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_QL75_UX380_CR0,1,380,562_.jpg",
          name: "Spider-Man: Across the Spider-Verse",
          description:
            "Miles Morales returns for the next chapter of the OscarВ®-winning Spider-Verse saga, an epic adventure that will transport Brooklyn's full-time, friendly neighborhood Spider-Man across the Multiverse to join forces with Gwen Stacy and a new team of Spider-People to face off with a villain more powerful than anything they have ever encountered.",
          year: "2023",
          released: "2023",
          imdb: 8.6,
          genre: "#animation, #action, #adventure",
          duration: 140,
          country: "United States of America",
          status: "",
          embed: "cqGjhVJWtEg?si=oQkf5zVuVqTlIE6Q",
          watch: "248",
          kp: 8.4,
          age: 12,
          type: "movie",
        },
      
        // ! PULP FICTION
        {
          img: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR3,0,380,562_.jpg",
          name: "Pulp Fiction",
          description:
            "Severe, pale-eyed, handsome, Phil Burbank is brutally beguiling. All of Phil's romance, power and fragility is trapped in the past and in the land: He can castrate a bull calf with two swift slashes of his knife; he swims naked in the river, smearing his body with mud. He is a cowboy as raw as his hides. The year is 1925. The Burbank brothers are wealthy ranchers in Montana. At the Red Mill restaurant on their way to market, the brothers meet Rose, the widowed proprietress, and her impressionable son Peter. Phil behaves so cruelly he drives them both to tears, revelling in their hurt and rousing his fellow cowhands to laughter - all except his brother George, who comforts Rose then returns to marry her...",
          year: "1994",
          released: "1994",
          imdb: 8.9,
          genre: "#crime, #drama",
          duration: 156,
          country: "United States of America",
          status: "",
          embed: "s7EdQ4FqbhY?si=hjqY3AD8SnaOUtnz",
          watch: "250",
          kp: 8.7,
          age: 18,
          type: "movie",
        },
      
        // ! Fury
        {
          img: "https://m.media-amazon.com/images/M/MV5BMjA4MDU0NTUyN15BMl5BanBnXkFtZTgwMzQxMzY4MjE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
          name: "Fury",
          description:
            "Severe, pale-eyed, handsome, Phil Burbank is brutally beguiling. All of Phil's romance, power and fragility is trapped in the past and in the land: He can castrate a bull calf with two swift slashes of his knife; he swims naked in the river, smearing his body with mud. He is a cowboy as raw as his hides. The year is 1925. The Burbank brothers are wealthy ranchers in Montana. At the Red Mill restaurant on their way to market, the brothers meet Rose, the widowed proprietress, and her impressionable son Peter. Phil behaves so cruelly he drives them both to tears, revelling in their hurt and rousing his fellow cowhands to laughter - all except his brother George, who comforts Rose then returns to marry her...",
          year: "2014",
          released: "2014",
          imdb: 7.6,
          genre: "#action, #drama, #war",
          duration: 134,
          country: "United States of America",
          status: "",
          embed: "q94n3eWOWXM?si=6DTAn08xHXxQI_4t",
          watch: "252",
          kp: 7.4,
          age: 18,
          type: "movie",
        },
      
        // ! MR BEAN
        {
          img: "https://m.media-amazon.com/images/M/MV5BMGNhODY0ZjktYjY2ZS00MGNkLTg2ZTUtMGEwNGRlMmY3ZjQ4XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_QL75_UX380_CR0,4,380,562_.jpg",
          name: "Mr. Bean",
          description:
            "Mr Bean (portrayed by Sir Rowan Sebastian Atkinson) is a lazy, crazy, clumsy, mischievous and destructive lunatic alien man from outer space who has fallen to earth out of his UFO. join him on his adventures of solving problems and creating worse disasters in this hilarious slapstick science fiction comedy Television sitcom series for the entire family.",
          year: "1990",
          released: "1990-1995",
          imdb: 8.6,
          genre: "#comedy, #family",
          duration: 25,
          country: "United Kingdom",
          status: "All Episodes",
          embed: "WmtIrkR6O7I?si=E1bkGbS2rMDO0Bhn",
          watch: "254",
          kp: 7.9,
          age: 6,
          type: "show",
        },
      
        // ! Code 8
        {
          img: "https://m.media-amazon.com/images/M/MV5BNmQ2NWMyZDgtNWQ5My00ZmQwLWE0MTQtN2ZiNjY2ODc0Y2YxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX380_CR0,1,380,562_.jpg",
          name: "Code 8",
          description:
            "In a world where people with 'special' abilities are living in poverty, Conner Reed (Robbie Amell) is a powerful young man who is struggling to pay for his ailing mother's medical treatment. To earn money, he joins a lucrative criminal world led by Garrett (Stephen Amell), who works for a drug lord (Greg Bryk).",
          year: "2019",
          released: "2019",
          imdb: 6.1,
          genre: "#action, #crime, #drama",
          duration: 98,
          country: "United States of America",
          status: "",
          embed: "PrX1JJ5dduA?si=mEvbKM960P8KJx0a",
          watch: "272",
          kp: 6.3,
          age: 18,
          type: "movie",
        },
      
        // ! Code 8 2
        {
          img: "https://m.media-amazon.com/images/M/MV5BNmEyNzNlZjgtNzg1Zi00MTZjLWE5NGQtNDljNzUzYTJiODliXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_QL75_UX380_CR0,0,380,562_.jpg",
          name: "Code 8 Part 2",
          description:
            "In a world where people with 'special' abilities are living in poverty, Conner Reed (Robbie Amell) is a powerful young man who is struggling to pay for his ailing mother's medical treatment. To earn money, he joins a lucrative criminal world led by Garrett (Stephen Amell), who works for a drug lord (Greg Bryk).",
          year: "2024",
          released: "2024",
          imdb: 5.7,
          genre: "#action, #crime, #drama",
          duration: 100,
          country: "United States of America",
          status: "",
          embed: "omBi2KxEcRk?si=zaAesjhrQOidxcbF",
          watch: "276",
          kp: 5.7,
          age: 18,
          type: "movie",
        },
      
        // ! ONE DAY
        {
          img: "https://m.media-amazon.com/images/M/MV5BMTQ3NTg2MDI3NF5BMl5BanBnXkFtZTcwMjc5MTA1NA@@._V1_QL75_UY562_CR0,0,380,562_.jpg",
          name: "One Day",
          description:
            "Emma and Dexter meet on the night of their university graduation. We see them every year on the anniversary of that date - July 15th. Emma is smart but success doesn't come quickly for her, whereas for Dexter, success and women come very easily. Through the years they grow apart as their lives take different directions and they meet other people. But as they grow apart from those other people and their lives start taking opposite directions again, Emma and Dexter find that they belong with each other.",
          year: "2011",
          released: "2011",
          imdb: 7.0,
          genre: "#drama, #romance",
          duration: 97,
          country: "United States of America",
          status: "",
          embed: "zVuuooZqVaU?si=DxGp8r76U1OPVdTf",
          watch: "274",
          kp: 7.8,
          age: 18,
          type: "movie",
        },
        // ! The Gentlemen
        {
          img: "https://m.media-amazon.com/images/M/MV5BMTlkMmVmYjktYTc2NC00ZGZjLWEyOWUtMjc2MDMwMjQwOTA5XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
          name: "The Gentlemen",
          description:
            "A talented American graduate of Oxford, using his unique skills, and audacity, creates a marijuana empire using the estates of impoverished British aristocrats. However, when he tries to sell his empire to a fellow American billionaire, a chain of events unfolds, involving blackmail, deception, mayhem and murder between street thugs, Russian oligarchs, Triad gangsters and gutter journalists.",
          year: "2019",
          released: "2019",
          imdb: 7.8,
          genre: "#action, #crime",
          duration: 113,
          country: "United States of America",
          status: "",
          embed: "2B0RpUGss2c?si=FCMdQYzd14y9QUUu",
          watch: "279",
          kp: 8.6,
          age: 18,
          type: "movie",
        },
      
        // ! Peaky Blinders
        {
          img: "https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_QL75_UY562_CR35,0,380,562_.jpg",
          name: "Peaky Blinders",
          description:
            "Thomas Shelby and his brothers return to Birmingham after serving in the British Army during WWI. Shelby and his gang, the Peaky Blinders, control the city of Birmingham. However, Shelby's ambitions extend beyond Birmingham, as he plans to build on the business empire he's created, and dispatch anyone who gets in his way.",
          year: "2013",
          released: "2013-2022",
          imdb: 8.8,
          genre: "#crime, #drama",
          duration: 36,
          country: "United Kingdom",
          status: "Season 1",
          embed: "oVzVdvGIC7U?si=nCPvSecY6UGydjt0",
          watch: "280",
          kp: 8.4,
          age: 18,
          type: "show",
        },
      
        // ! Vampire Diaries
        {
          img: "https://m.media-amazon.com/images/M/MV5BMDk3YzgxNDQtNTEzOS00NDMyLWFlYmYtYTZlMDk1NDkxNmMyXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_QL75_UY562_CR1,0,380,562_.jpg",
          name: "The Vampire Diaries",
          description:
            "After centuries of quarreling, Stefan and Damon Salvatore return to their original town of Mystic Falls, Virginia. Stefan, the selfless, brave, guilt-ridden brother, meets a high school girl named Elena Gilbert whom he instantly falls in love with ;while Damon, the gorgeous, dangerous and selfish vampire, is after his brother's girl to pay him back for making him turn into a vampire in 1864.",
          year: "2009",
          released: "2009-2017",
          imdb: 7.7,
          genre: "#drama, #fantasy, #horror",
          duration: 43,
          country: "United States of America",
          status: "Season 1-2",
          embed: "BmVmhjjkN4E?si=ObnUlwpAm-8QJ8mw",
          watch: "288",
          kp: 8.0,
          age: 18,
          type: "show",
        },
      
        // ! Damsel
        {
          img: "https://m.media-amazon.com/images/M/MV5BODRiMTA4NGMtOTQzZC00OWFjLWFmODctMjY2ZTcwYjI5NDMyXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_QL75_UY562_CR35,0,380,562_.jpg",
          name: "Damsel",
          description:
            "A dutiful damsel agrees to marry a handsome prince, only to find the royal family has recruited her as a sacrifice to repay an ancient debt.",
          year: "2024",
          released: "2024",
          imdb: 6.1,
          genre: "#action, #adventure, #fantasy",
          duration: 110,
          country: "United States of America",
          status: "",
          embed: "iM150ZWovZM?si=yWAhoIG977g0c8FI",
          watch: "343",
          kp: 6.3,
          age: 12,
          type: "movie",
        },
      
        // ! Road House
        {
          img: "https://m.media-amazon.com/images/M/MV5BN2E3M2VmNWItZWZmMy00MDc0LWFjOGQtODEzNGM1NTZhZjgxXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UY755_.jpg",
          name: "Road House",
          description:
            "Ex-UFC fighter Dalton takes a job as a bouncer at a Florida Keys roadhouse, only to discover that this paradise is not all it seems. ",
          year: "2024",
          released: "2024",
          imdb: 6.3,
          genre: "#action, #thriller",
          duration: 121,
          country: "United States of America",
          status: "",
          embed: "Y0ZsLudtfjI?si=3_WSZvwQ-FdKJhVn",
          watch: "346",
          kp: 6.5,
          age: 16,
          type: "movie",
        },
      
        // ! Terminator 2: Judgment Day
        {
          img: "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,1,380,562_.jpg",
          name: "Terminator 2: Judgment Day",
          description:
            "Over ten years have passed since the first machine called The Terminator tried to kill Sarah Connor and her unborn son, John. The man who will become the future leader of the human resistance against the Machines is now a healthy young boy. However, another Terminator, called the T-1000, is sent back through time by the supercomputer Skynet. This new Terminator is more advanced and more powerful than its predecessor and its mission is to kill John Connor when he's still a child. However, Sarah and John do not have to face the threat of the T-1000 alone. Another Terminator (identical to the same model that tried and failed to kill Sarah Connor in 1984) is also sent back through time to protect them. Now, the battle for tomorrow has begun. ",
          year: "1991",
          released: "1991",
          imdb: 8.6,
          genre: "#action, #adventure, #sci-fi",
          duration: 137,
          country: "United States of America",
          status: "",
          embed: "CRRlbK5w8AE?si=GvhFfgrGeOMEVMlq",
          watch: "334",
          kp: 8.4,
          age: 16,
          type: "movie",
        },
      
        // ! Mission: Impossible - Fallout
        {
          img: "https://m.media-amazon.com/images/M/MV5BNjRlZmM0ODktY2RjNS00ZDdjLWJhZGYtNDljNWZkMGM5MTg0XkEyXkFqcGdeQXVyNjAwMjI5MDk@._V1_QL75_UX380_CR0,16,380,562_.jpg ",
          name: "Mission: Impossible - Fallout",
          description:
            "Two years after Ethan Hunt had successfully captured Solomon Lane, the remnants of the Syndicate have reformed into another organization called the Apostles. Under the leadership of a mysterious fundamentalist known only as John Lark, the organization is planning on acquiring three plutonium cores. Ethan and his team are sent to Berlin to intercept them, but the mission fails when Ethan saves Luther and the Apostles escape with the plutonium. With CIA agent August Walker joining the team, Ethan and his allies must now find the plutonium cores before it's too late. ",
          year: "2018",
          released: "2018",
          imdb: 7.7,
          genre: "#action, #adventure, #thriller",
          duration: 147,
          country: "United States of America",
          status: "",
          embed: "wb49-oV0F78?si=myIk3t63dDe2hORe",
          watch: "341",
          kp: 7.3,
          age: 18,
          type: "movie",
        },
      
        // ! Man vs. Bee
        {
          img: "https://m.media-amazon.com/images/M/MV5BMGExOWU4YmItMjkxOC00NjdjLTk2ZWEtZGViMGM1ZGFhZmQxXkEyXkFqcGdeQXVyODQyOTY2OTA@._V1_QL75_UX380_CR0,0,380,562_.jpg",
          name: "Man vs. Bee",
          description:
            "A man finds himself at war with a bee while housesitting a luxurious mansion. Who will win, and what irreparable damage will be done in the process?",
          year: "2022",
          released: "2022",
          imdb: 6.7,
          genre: "#comedy, #family",
          duration: 10,
          country: "United States of America",
          status: "Season 1",
          embed: "YQ1vN_91KO0?si=TN7mryxo8PclIN14",
          watch: "347",
          kp: 6.5,
          age: 6,
          type: "show",
        },
      
        // ! PIANIST
        {
          img: "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR14,0,380,562_.jpg ",
          name: "The Pianist",
          description:
            "During WWII, acclaimed Polish musician Wladyslaw faces various struggles as he loses contact with his family. As the situation worsens, he hides in the ruins of Warsaw in order to survive.",
          year: "2002",
          released: "2002",
          imdb: 8.5,
          genre: "#biography, #drama, #music",
          duration: 150,
          country: "United States of America",
          status: "",
          embed: "BFwGqLa_oAo?si=LuhiNLSe6nGQdOp8",
          watch: "360",
          kp: 8.5,
          age: 18,
          type: "movie",
        },
      
        // ! the wolf of wall street
        {
          img: "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
          name: "The Wolf of Wall Street",
          description:
            "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
          year: "2013",
          released: "2013",
          imdb: 8.2,
          genre: "#biography, #comedy, #drama",
          duration: 181,
          country: "United States of America",
          status: "",
          embed: "iszwuX1AK6A?si=8aRwdofRoWO0RrGG",
          watch: "362",
          kp: 8.0,
          age: 18,
          type: "movie",
        },
      
        // ! Poor Things
        {
          img: "https://m.media-amazon.com/images/M/MV5BNGIyYWMzNjktNDE3MC00YWQyLWEyMmEtN2ZmNzZhZDk3NGJlXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_QL75_UX380_CR0,0,380,562_.jpg",
          name: "Poor Things",
          description:
            "An account of the fantastical evolution of Bella Baxter, a young woman brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter.",
          year: "2023",
          released: "2023",
          imdb: 8.0,
          genre: "#comedy, #drama, #romance",
          duration: 141,
          country: "United States of America",
          status: "",
          embed: "RlbR5N6veqw?si=EOcOrfHqt1DoL2ux",
          watch: "366",
          kp: 7.8,
          age: 18,
          type: "movie",
        },
      
        // ! Spaceman
        {
          img: "https://m.media-amazon.com/images/M/MV5BMGMyNDg2ZjItMzk5MC00NzJmLTlmMDgtMmFjNjFmODg5ZTY5XkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_QL75_UX380_CR0,4,380,562_.jpg",
          name: "Spaceman",
          description:
            "Half a year into his solo mission on the edge of the solar system, an astronaut concerned with the state of his life back on Earth is helped by an ancient creature he discovers in the bowels of his ship.",
          year: "2024",
          released: "2024",
          imdb: 5.7,
          genre: "#adventure, #drama, #sci-fi",
          duration: 107,
          country: "United States of America",
          status: "",
          embed: "rNZ0xKaCdus?si=79_nXTiBAaNNPge0",
          watch: "364",
          kp: 6.1,
          age: 16,
          type: "movie",
        },
      
        // ! House
        {
          img: "https://m.media-amazon.com/images/M/MV5BMDA4NjQzN2ItZDhhNC00ZjVlLWFjNTgtMTEyNDQyOGNjMDE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_QL75_UY562_CR1,0,380,562_.jpg",
          name: "House",
          description:
            "Using a crack team of doctors and his wits, an antisocial maverick doctor specializing in diagnostic medicine does whatever it takes to solve puzzling cases that come his way.",
          year: "2004",
          released: "2004-2012",
          imdb: 8.7,
          genre: "#drama, #mystery",
          duration: 45,
          country: "United States of America",
          status: "Season 1",
          embed: "GSgua-jsn-Q?si=LNOTprtGlHRAAP9G ",
          watch: "368",
          kp: 8.8,
          age: 18,
          type: "show",
        },
      
        // ! The Casagrandes Movie
        {
          img: "https://m.media-amazon.com/images/M/MV5BYTc1ODg0YjgtMzNiMi00MGFmLWE0NzEtOTIwOTc4NWJmNDllXkEyXkFqcGdeQXVyMTE2NDA4MDMy._V1_QL75_UY562_CR35,0,380,562_.jpg",
          name: "The Casagrandes Movie",
          description:
            "After a surprise family trip to Mexico derails Ronnie Anne's birthday plans, she is determined to prove she's old enough to do her own thing - even if it means confronting an ancient preteen demigod whose angst has apocalyptic potential.",
          year: "2024",
          released: "2024",
          imdb: 5.8,
          genre: "#animation, #adventure, #comedy",
          duration: 89,
          country: "United States of America",
          status: "",
          embed: "jOCIRd7kQZ8?si=qsxdg7JIPrfagtYS",
          watch: "397",
          kp: 5.9,
          age: 6,
          type: "movie",
        },
      
        // ! The Creator
        {
          img: "https://m.media-amazon.com/images/M/MV5BNDUyNTIzNDQtYTZmMi00M2FlLTgyZjUtYWViZWNhMDYzMjE4XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_QL75_UX380_CR0,0,380,562_.jpg",
          name: "The Creator",
          description:
            "Against the backdrop of a war between humans and robots with artificial intelligence, a former soldier finds the secret weapon, a robot in the form of a young child.",
          year: "2023",
          released: "2023",
          imdb: 6.8,
          genre: "#action, #adventure, #drama",
          duration: 133,
          country: "United States of America",
          status: "",
          embed: "ex3C1-5Dhb8?si=qeQg53aLSsN6c_m4",
          watch: "395",
          kp: 6.5,
          age: 12,
          type: "movie",
        },
      
        // ! Imaginary
        {
          img: "https://m.media-amazon.com/images/M/MV5BODIzOTJiODUtNzM2MC00YjdjLTg5YTktZWZhNjY1N2I5NWRjXkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_QL75_UX380_CR0,10,380,562_.jpg",
          name: "Imaginary",
          description:
            "A woman returns to her childhood home to discover that the imaginary friend she left behind is very real and unhappy that she abandoned him.",
          year: "2024",
          released: "2024",
          imdb: 4.7,
          genre: "#horror, #mystery, #thriller",
          duration: 104,
          country: "United States of America",
          status: "",
          embed: "8XoNfrgrAGM?si=yrGVNRqc0y_TKCX_",
          watch: "400",
          kp: 5.3,
          age: 18,
          type: "movie",
        },
      
        // ! Killers of the Flower Moon
        {
          img: "https://m.media-amazon.com/images/M/MV5BMTdiOTg2YmQtZTdjNi00NGJjLWI2ZTQtYWNkNDUwMDEzOTQxXkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_QL75_UX380_CR0,4,380,562_.jpg",
          name: "Killers of the Flower Moon",
          description:
            "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one - until the FBI steps in to unravel the mystery.",
          year: "2023",
          released: "2023",
          imdb: 7.6,
          genre: "#crime, #drama, #history",
          duration: 206,
          country: "United States of America",
          status: "",
          embed: "ex3C1-5Dhb8?si=qeQg53aLSsN6c_m4",
          watch: "412",
          kp: 7.2,
          age: 18,
          type: "movie",
        },
      
        // ! KUNG FU PANDA 4
        {
          img: "https://m.media-amazon.com/images/M/MV5BZDY0YzI0OTctYjVhYy00MTVhLWE0NTgtYTRmYTBmOTE3YTViXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_QL75_UX380_CR0,20,380,562_.jpg",
          name: "Kung Fu Panda 4 (HD)",
          description:
            "Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will train a new kung fu practitioner for the spot and will encounter a villain called the Chameleon who conjures villains from the past.",
          year: "2024",
          released: "2024",
          imdb: 6.7,
          genre: "#animation, #action, #adventure",
          duration: 94,
          country: "United States of America",
          status: "",
          embed: "_inKs4eeHiI?si=W9dB8d_bCtuVeQRN",
          watch: "408",
          kp: 6.7,
          age: 0,
          type: "movie",
        },
      
        // ! Dune Part Two
        {
          img: "https://m.media-amazon.com/images/M/MV5BN2QyZGU4ZDctOWMzMy00NTc5LThlOGQtODhmNDI1NmY5YzAwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
          name: "Dune: Part Two (HD)",
          description:
            "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
          year: "2024",
          released: "2024",
          imdb: 8.6,
          genre: "#action, #adventure, #drama",
          duration: 166,
          country: "United States of America",
          status: "",
          embed: "Way9Dexny3w?si=WxaCaHPnWFJlgWfQ  ",
          watch: "402",
          kp: 8.3,
          age: 12,
          type: "movie",
        },
      
        // ! Let it shine
        {
          img: "https://m.media-amazon.com/images/M/MV5BMTU3Mjg2NDA1Ml5BMl5BanBnXkFtZTgwMDk4NjAxMzE@._V1_QL75_UY562_CR21,0,380,562_.jpg",
          name: "Let It Shine",
          description:
            "A teenage rapper must use his musical talent to battle his nemesis and win the girl of his dreams.",
          year: "2012",
          released: "2012",
          imdb: 6.4,
          genre: "#drama, #family, #music",
          duration: 104,
          country: "United States of America",
          status: "",
          embed: "hm0uQPCliQw?si=cNUH9BeYuMwsj1l6  ",
          watch: "404",
          kp: 5.0,
          age: 12,
          type: "movie",
        },
      
        // ! Wonka
        {
          img: "https://m.media-amazon.com/images/M/MV5BNDM4NTk0NjktZDJhMi00MmFmLTliMzEtN2RkZDY2OTNiMDgzXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_QL75_UY562_CR35,0,380,562_.jpg",
          name: "Wonka",
          description:
            "With dreams of opening a shop in a city renowned for its chocolate, a young and poor Willy Wonka discovers that the industry is run by a cartel of greedy chocolatiers.",
          year: "2023",
          released: "2023",
          imdb: 7.0,
          genre: "#adventure, #comedy, #family",
          duration: 116,
          country: "United States of America",
          status: "",
          embed: "otNh9bTjXWg?si=8HysFjvLpjTsK-Or  ",
          watch: "406",
          kp: 7.2,
          age: 12,
          type: "movie",
        },
      
        // ! Charlie and the Chocolate Factory
        {
          img: "https://m.media-amazon.com/images/M/MV5BNjcxMjg1Njg2NF5BMl5BanBnXkFtZTcwMjQ4NzMzMw@@._V1_QL75_UY562_CR1,0,380,562_.jpg",
          name: "Charlie and the Chocolate Factory",
          description:
            "Charlie, a young boy from an impoverished family, and four other kids win a tour of an amazing chocolate factory run by an imaginative chocolatier, Willy Wonka, and his staff of Oompa-Loompas.",
          year: "2005",
          released: "2005",
          imdb: 6.7,
          genre: "#adventure, #comedy, #family",
          duration: 115,
          country: "United States of America",
          status: "",
          embed: "OFVGCUIXJls?si=xZwvQ3ab0hre338A",
          watch: "410",
          kp: 7.6,
          age: 6,
          type: "movie",
        },
      
        // ! Family Guy
        {
          img: "https://m.media-amazon.com/images/M/MV5BODEwZjEzMjAtNjQxMy00Yjc4LWFlMDAtYjhjZTAxNDU3OTg3XkEyXkFqcGdeQXVyOTM2NTM4MjA@._V1_QL75_UY562_CR21,0,380,562_.jpg",
          name: "Family Guy",
          description:
            "In a wacky Rhode Island town, a dysfunctional family strives to cope with everyday life as they are thrown from one crazy scenario to another.",
          year: "1999",
          released: "1999-2024",
          imdb: 8.1,
          genre: "#animation, #comedy",
          duration: 22,
          country: "United States of America",
          status: "Season 1",
          embed: "Le1x2To-e6g?si=YMrjYbvEVLM0GH1D ",
          watch: "413",
          kp: 7.7,
          age: 18,
          type: "show",
        },
      
        // ! The Beautiful Game
        {
          img: "https://m.media-amazon.com/images/M/MV5BMzI4ZDQyZWItZGUwOC00M2FmLWEyYWItNDhjNGYwMWNjOTQzXkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_QL75_UX380_CR0,4,380,562_.jpg",
          name: "The Beautiful Game",
          description:
            "Advocates to end homelessness, organize an annual tournament for Homeless men to compete in a series of football matches known as The Homeless World Cup.",
          year: "2024",
          released: "2024",
          imdb: 6.3,
          genre: "#drama, #sport",
          duration: 125,
          country: "United States of America",
          status: "",
          embed: "pXWgl7pOpMM?si=F8MExlJPfDejLowY",
          watch: "425",
          kp: 5.0,
          age: 12,
          type: "movie",
        },
      
        // ! Blade Runner 2049
        {
          img: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_QL75_UX380_CR0,0,380,562_.jpg",
          name: "Blade Runner 2049",
          description:
            "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, w ho's been missing for thirty years.",
          year: "2017",
          released: "2017",
          imdb: 8.0,
          genre: "#action, #drama, #mystery",
          duration: 164,
          country: "United States of America",
          status: "",
          embed: "gCcx85zbxz4?si=VnVJFEGhtMMQOQw2",
          watch: "428",
          kp: 7.8,
          age: 18,
          type: "movie",
        },
      
        // ! Lousy Carter
        {
          img: "https://m.media-amazon.com/images/M/MV5BNTA4ZDZhM2EtNzdjNi00YjRkLThlNjEtZWE2YzEzMDVmYjY4XkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_QL75_UX380_CR0,0,380,562_.jpg",
          name: "Lousy Carter",
          description:
            "Man-baby Lousy Carter struggles to complete his animated Nabokov adaptation, teaches a graduate seminar on The Great Gatsby, and sleeps with his best friend's wife. He has six months to live.",
          year: "2023",
          released: "2023",
          imdb: 5.7,
          genre: "#comedy",
          duration: 80,
          country: "United States of America",
          status: "",
          embed: "1Yz7chWMlKI?si=tq511Db13nmvMkJF",
          watch: "430",
          kp: 5.0,
          age: 12,
          type: "movie",
        },
      
        // ! Rebel Moon - Part Two: The Scargiver
        {
          img: "https://m.media-amazon.com/images/M/MV5BYmQ2ODgyZjMtMmQyMy00ZWRhLTllOGUtZDI3MDkzNjFhZWQ2XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_QL75_UX380_CR0,0,380,562_.jpg",
          name: "Rebel Moon - Part Two: The Scargiver",
          description:
            "Kora and surviving warriors prepare to defend Veldt, their new home, alongside its people against the Realm. The warriors face their pasts, revealing their motivations before the Realm's forces arrive to crush the growing rebellion.",
          year: "2024",
          released: "2024",
          imdb: 5.2,
          genre: "#action, #adventure, #drama",
          duration: 122,
          country: "United States of America",
          status: "",
          embed: "UEJuNHOd8Dw?si=1faGtYpko1oGmEmr",
          watch: "432",
          kp: 5.4,
          age: 12,
          type: "movie",
        },
      
        // ! Pearl Harbor
        {
          img: "https://m.media-amazon.com/images/M/MV5BMTQ3MDc0MDc1NF5BMl5BanBnXkFtZTYwODI1ODY2._V1_QL75_UY562_CR1,0,380,562_.jpg",
          name: "Pearl Harbor",
          description:
            "A tale of war and romance mixed in with history. The story follows two lifelong friends and a beautiful nurse who are caught up in the horror of an infamous Sunday morning in 1941.",
          year: "2001",
          released: "2001",
          imdb: 6.2,
          genre: "#action, #history, #romance",
          duration: 183,
          country: "United States of America",
          status: "",
          embed: "oGYcxjywx0o?si=2qgYNHNv1uZC6WxZ",
          watch: "434",
          kp: 7.9,
          age: 12,
          type: "movie",
        },
      
        // ! Cinderella
        {
          img: "https://m.media-amazon.com/images/M/MV5BMjMxODYyODEzN15BMl5BanBnXkFtZTgwMDk4OTU0MzE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
          name: "Cinderella",
          description:
            "When her father unexpectedly dies, young Ella finds herself at the mercy of her cruel stepmother and her scheming stepsisters. Never one to give up hope, Ella's fortunes begin to change after meeting a dashing stranger.",
          year: "2015",
          released: "2015",
          imdb: 6.9,
          genre: "#adventure, #drama, #family",
          duration: 105,
          country: "United States of America",
          status: "",
          embed: "20DF6U1HcGQ?si=Zr40SQpE7I1wJzw-",
          watch: "436",
          kp: 7.1,
          age: 6,
          type: "movie",
        },
      
        // ! Merlin
        {
          img: "https://m.media-amazon.com/images/M/MV5BZTBjYjM3ZjItZTI1MS00ODZhLWFhZDgtODgxMmMzN2JlOTExXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_QL75_UY562_CR4,0,380,562_.jpg",
          name: "Merlin",
          description:
            "These are the brand new adventures of Merlin, the legendary sorcerer as a young man, when he was just a servant to young Prince Arthur on the royal court of Camelot, who has soon become his best friend, and turned Arthur into a great king and a legend.",
          year: "2008",
          released: "2008-2012",
          imdb: 7.9,
          genre: "#adventure, #drama, #fantasy",
          duration: 45,
          country: "United States of America",
          status: "Season 1",
          embed: "01rxgwVmxx0?si=gTW1_UXTbeSKyFDD ",
          watch: "437",
          kp: 8.1,
          age: 12,
          type: "show",
        },
      
        // ! Loki
        {
          img: "https://m.media-amazon.com/images/M/MV5BNTY1ZDQzNzQtZGM1Yy00YjRhLTliYmMtOGM2OWFlYTRjOTc2XkEyXkFqcGdeQXVyMTY3MDE5MDY1._V1_QL75_UY562_CR35,0,380,562_.jpg",
          name: "Loki",
          description:
            "The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of вЂњAvengers: Endgame.вЂќ",
          year: "2021",
          released: "2021-2023",
          imdb: 8.2,
          genre: "#action, #adventure, #fantasy",
          duration: 50,
          country: "United States of America",
          status: "Season 1-2",
          embed: "dug56u8NN7g?si=g8i-3zW0QO49IBHu ",
          watch: "451",
          kp: 7.7,
          age: 12,
          type: "show",
        },
      
        // ! Abigail
        {
          img: "https://m.media-amazon.com/images/M/MV5BY2JlYjlkNzMtNTU3OS00NDVmLTk4NTYtYTM4ZTEwMGM4NDBiXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_QL75_UX380_CR0,20,380,562_.jpg",
          name: "Abigail",
          description:
            "After a group of criminals kidnap the ballerina daughter of a powerful underworld figure, they retreat to an isolated mansion, unaware that they're locked inside with no normal little girl.",
          year: "2024",
          released: "2024",
          imdb: 7.1,
          genre: "#horror, #thriller",
          duration: 109,
          country: "United States of America",
          status: "",
          embed: "3PsP8MFH8p0?si=g8ghDOy7fxl6hoF9",
          watch: "463",
          kp: 6.5,
          age: 18,
          type: "movie",
        },
      
        // ! Toy Story
        {
          img: "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_QL75_UX380_CR0,2,380,562_.jpg",
          name: "Toy Story",
          description:
            "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy's bedroom.",
          year: "1995",
          released: "1995",
          imdb: 8.3,
          genre: "#action, #adventure, #comedy",
          duration: 81,
          country: "United States of America",
          status: "",
          embed: "v-PjgYDrg70?si=p3s1q3S0Au60eDhq",
          watch: "478",
          kp: 7.9,
          age: 0,
          type: "movie",
        },
      
        // ! Lost in Space
        {
          img: "https://m.media-amazon.com/images/M/MV5BZTY5YjQwYmEtOWJiNy00NDBmLTgxM2YtMmVkMmI0NzE1N2FjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
          name: "Lost in Space",
          description:
            "After crash-landing on an alien planet, the Robinson family fight against all odds to survive and escape, but they're surrounded by hidden dangers.",
          year: "2018",
          released: "2018-2021",
          imdb: 7.3,
          genre: "#adventure, #drama, #family",
          duration: 60,
          country: "United States of America",
          status: "Season 1",
          embed: "fzmM0AB60QQ?si=nS-wuOa9CwzK1HgT",
          watch: "466",
          kp: 6.8,
          age: 16,
          type: "show",
        },
      
        // ! 2012
        {
          img: "https://m.media-amazon.com/images/M/MV5BMTY0MjEyODQzMF5BMl5BanBnXkFtZTcwMTczMjQ4Mg@@._V1_QL75_UX380_CR0,1,380,562_.jpg",
          name: "2012",
          description:
            "A frustrated writer struggles to keep his family alive when a series of global catastrophes threatens to annihilate mankind.",
          year: "2009",
          released: "2009",
          imdb: 5.8,
          genre: "#action, #adventure, #sci-fi",
          duration: 168,
          country: "United States of America",
          status: "",
          embed: "sFXGrTng0gQ?si=9Vtoo-GBLdEKh02J",
          watch: "465",
          kp: 6.9,
          age: 18,
          type: "movie",
        },
      
        // ! Knox Goes Away
        {
          img: "https://m.media-amazon.com/images/M/MV5BN2NjN2E3ZGEtZGNiNy00ZGJhLTg5NzUtMWQzNTc0ZTNlZmUxXkEyXkFqcGdeQXVyMTcxODA1OTU3._V1_QL75_UX380_CR0,8,380,562_.jpg",
          name: "Knox Goes Away",
          description:
            "When a contract killer has a rapidly evolving form of dementia, he is offered an opportunity to redeem himself by saving the life of his estranged adult son.",
          year: "2023",
          released: "2023",
          imdb: 6.9,
          genre: "#action, #crime, #thriller",
          duration: 114,
          country: "United States of America",
          status: "",
          embed: "bZ8SeYVnc9A?si=atDHksDg1GyuZcZT",
          watch: "480",
          kp: 6.9,
          age: 18,
          type: "movie",
        },
      
        // ! Sleeping Dogs
        {
          img: "https://m.media-amazon.com/images/M/MV5BNTg4NTY3ZmMtZGZhMC00NWYxLThjYmEtZGJhYjE1N2Y2YmZkXkEyXkFqcGdeQXVyNjE2MzI5ODM@._V1_QL75_UX380_CR0,2,380,562_.jpg",
          name: "Sleeping Dogs",
          description:
            "An ex-homicide detective with memory loss is forced to solve a brutal murder, only to uncover chilling secrets from his forgotten past.",
          year: "2024",
          released: "2024",
          imdb: 6.0,
          genre: "#crime, #mystery, #thriller",
          duration: 110,
          country: "United States of America",
          status: "",
          embed: "jlm1zyy8whg?si=0KSUFO8GPb-VQEzI",
          watch: "482",
          kp: 6.1,
          age: 18,
          type: "movie",
        },
      
        // ! Wednesday
        {
          img: "https://m.media-amazon.com/images/M/MV5BM2ZmMjEyZmYtOGM4YS00YTNhLWE3ZDMtNzQxM2RhNjBlODIyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_QL75_UX380_CR0,0,380,562_.jpg",
          name: "Wednesday",
          description:
            "Follows Wednesday Addams' years as a student, when she attempts to master her emerging psychic ability, thwart a killing spree, and solve the mystery that embroiled her parents.",
          year: "2022",
          released: "2022-2024",
          imdb: 8.1,
          genre: "#comedy, #crime, #fantasy",
          duration: 45,
          country: "United States of America",
          status: "Season 1",
          embed: "Di310WS8zLk?si=xNpdwPeMudOA-SEL",
          watch: "483",
          kp: 8.0,
          age: 16,
          type: "show",
        },
      
        // ! The Pursuit of Happyness
        {
          img: "https://m.media-amazon.com/images/M/MV5BMTQ5NjQ0NDI3NF5BMl5BanBnXkFtZTcwNDI0MjEzMw@@._V1_QL75_UX380_CR0,1,380,562_.jpg",
          name: "The Pursuit of Happyness",
          description:
            "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career",
          year: "2006",
          released: "2006",
          imdb: 8.0,
          genre: "#biography, #drama",
          duration: 117,
          country: "United States of America",
          status: "",
          embed: "DMOBlEcRuw8?si=bTjSKfW9e_kaxs-s",
          watch: "521",
          kp: 8.3,
          age: 12,
          type: "movie",
        },
      
        // ! Damaged
        {
          img: "https://m.media-amazon.com/images/M/MV5BNThiZjc3YTEtZDQzZC00MzgzLTg5YTUtOThiYmQxNGQ2MTIxXkEyXkFqcGdeQXVyNjE2MzI5ODM@._V1_QL75_UX380_CR0,4,380,562_.jpg",
          name: "Damaged",
          description:
            "Dan Lawson, a Chicago detective, travels to Scotland to link up with Scottish Det. Boyd, following the resurgence of a serial killer who's crimes match an unsolved case that he looked into 5 years previous in Chicago.",
          year: "2024",
          released: "2024",
          imdb: 4.6,
          genre: "#action, #crime, #drama",
          duration: 97,
          country: "United States of America",
          status: "",
          embed: "Sg8NuJL5P_8?si=gLEiXVFJCwpPJyqE",
          watch: "517",
          kp: 5.5,
          age: 18,
          type: "movie",
        },
      
        // ! The Walking Dead
        {
          img: "https://m.media-amazon.com/images/M/MV5BNzI5MjUyYTEtMTljZC00NGI5LWFhNWYtYjY0ZTQ5YmEzMWRjXkEyXkFqcGdeQXVyMTY3MDE5MDY1._V1_QL75_UX380_CR0,4,380,562_.jpg",
          name: "The Walking Dead",
          description:
            "Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins and must lead a group of survivors to stay alive.",
          year: "2010",
          released: "2010-2022",
          imdb: 8.1,
          genre: "#drama, #horror, #thriller",
          duration: 45,
          country: "United States of America",
          status: "Season 1",
          embed: "sfAc2U20uyg?si=nWBI1htDNsazsPk2",
          watch: "496",
          kp: 8.0,
          age: 18,
          type: "show",
        },
      
        // ! The Idea of You
        {
          img: "https://m.media-amazon.com/images/M/MV5BYWRkZjJiODEtM2IwZi00ZjM1LWEyOTUtOThjMDk3YThjZDUzXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_QL75_UX380_CR0,0,380,562_.jpg",
          name: "The Idea of You",
          description:
            "SolГЁne, a 40-year-old single mom, begins an unexpected romance with 24-year-old Hayes Campbell, the lead singer of August Moon, the hottest boy band on the planet.",
          year: "2024",
          released: "2024",
          imdb: 6.4,
          genre: "#comedy, #drama, #romance",
          duration: 115,
          country: "United States of America",
          status: "",
          embed: "V8i6PB0gGOA?si=1Tcu1S6I8aao61Wa",
          watch: "519",
          kp: 6.8,
          age: 18,
          type: "movie",
        },
      
        // ! Anyone But You
        {
          img: "https://m.media-amazon.com/images/M/MV5BOTVhZGU2OWQtNDM1Ni00MzM3LTgzYjgtOTEwYzQzOWZjNTIyXkEyXkFqcGdeQXVyMTcwOTQzOTYy._V1_QL75_UX380_CR0,0,380,562_.jpg",
          name: "Anyone But You",
          description:
            "After an amazing first date, Bea and Ben's fiery attraction turns ice-cold--until they find themselves unexpectedly reunited at a wedding in Australia. So they do what any two mature adults would do: pretend to be a couple.",
          year: "2023",
          released: "2023",
          imdb: 6.1,
          genre: "#comedy, #drama, #romance",
          duration: 103,
          country: "United States of America",
          status: "",
          embed: "UtjH6Sk7Gxs?si=06riUY2JLBokpboc",
          watch: "523",
          kp: 6.1,
          age: 18,
          type: "movie",
        },
      
        // ! Black Adam
        {
          img: "https://m.media-amazon.com/images/M/MV5BYzZkOGUwMzMtMTgyNS00YjFlLTg5NzYtZTE3Y2E5YTA5NWIyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
          name: "Black Adam",
          description:
            "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods--and imprisoned just as quickly--Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
          year: "2022",
          released: "2022",
          imdb: 6.2,
          genre: "#action, #adventure, #fantasy",
          duration: 125,
          country: "United States of America",
          status: "",
          embed: "X0tOpBuYasI?si=3seJEfaVct7aNhzk",
          watch: "527",
          kp: 6.1,
          age: 12,
          type: "movie",
        },
      
        // ! Transformers: Dark of the Moon
        {
          img: "https://m.media-amazon.com/images/M/MV5BMTkwOTY0MTc1NV5BMl5BanBnXkFtZTcwMDQwNjA2NQ@@._V1_QL75_UX380_CR0,3,380,562_.jpg",
          name: "Transformers: Dark of the Moon",
          description:
            "The Autobots learn of a Cybertronian spacecraft hidden on the moon, and race against the Decepticons to reach it and to learn its secrets.",
          year: "2011",
          released: "2011",
          imdb: 6.2,
          genre: "#action, #adventure, #sci-fi",
          duration: 154,
          country: "United States of America",
          status: "",
          embed: "Rf3OcxIFbRE?si=3_xtCZupJdL224G3",
          watch: "529",
          kp: 6.8,
          age: 18,
          type: "movie",
        },
      
        // ! Cruella
        {
          img: "https://m.media-amazon.com/images/M/MV5BOWI5YTUxOWEtZmRiZS00ZmQxLWE2NzctYTRiODA2NzE1ZjczXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
          name: "Cruella",
          description:
            "A live-action prequel feature film following a young Cruella de Vil.",
          year: "2021",
          released: "2021",
          imdb: 7.3,
          genre: "#adventure, #comedy, #crime",
          duration: 134,
          country: "United States of America",
          status: "",
          embed: "gmRKv7n2If8?si=iNrgihnT_vTYsQ97",
          watch: "531",
          kp: 7.6,
          age: 12,
          type: "movie",
        },
      
        // ! The Lord of the Rings: The Two Towers
        {
          img: "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,14,380,562_.jpg",
          name: "The Lord of the Rings: The Two Towers",
          description:
            "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
          year: "2002",
          released: "2002",
          imdb: 8.8,
          genre: "#action, #adventure, #drama",
          duration: 179,
          country: "United States of America",
          status: "",
          embed: "LbfMDwc4azU?si=0RqQvR_N7cg520ey",
          watch: "533",
          kp: 8.6,
          age: 12,
          type: "movie",
        },
      
        // ! The Guest
        {
          img: "https://m.media-amazon.com/images/M/MV5BOTQyODc5MTAwM15BMl5BanBnXkFtZTgwNjMwMjA1MjE@._V1_QL75_UX380_CR0,16,380,562_.jpg",
          name: "The Guest",
          description:
            "A soldier introduces himself to the Peterson family, claiming to be a friend of their son who died in action. After the young man is welcomed into their home, a series of accidental deaths seem to be connected to his presence.",
          year: "2014",
          released: "2014",
          imdb: 6.7,
          genre: "#action, #mystery, #thriller",
          duration: 100,
          country: "United States of America",
          status: "",
          embed: "y0E2Qh6wLS4?si=M6D2MTOaGSNSiZew",
          watch: "535",
          kp: 6.6,
          age: 18,
          type: "movie",
        },
      
        // ! The Lord of the Rings: The Fellowship of the Ring
        {
          img: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_QL75_UX380_CR0,1,380,562_.jpg",
          name: "The Lord of the Rings: The Fellowship of the Ring",
          description:
            "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
          year: "2001",
          released: "2001",
          imdb: 8.9,
          genre: "#action, #adventure, #drama",
          duration: 178,
          country: "United States of America",
          status: "",
          embed: "V75dMMIW2B4?si=W6mtunutaAUZKq1g",
          watch: "537",
          kp: 8.6,
          age: 12,
          type: "movie",
        },
      
        // ! Gifted
        {
          img: "https://m.media-amazon.com/images/M/MV5BMjQ2NDU3NDE0M15BMl5BanBnXkFtZTgwMjA3OTg0MDI@._V1_QL75_UX380_CR0,0,380,562_.jpg",
          name: "Gifted",
          description:
            "Frank, a single man raising his child prodigy niece Mary, is drawn into a custody battle with his mother.",
          year: "2017",
          released: "2017",
          imdb: 7.6,
          genre: "#drama",
          duration: 101,
          country: "United States of America",
          status: "",
          embed: "x7CAjpdRaXU?si=4Gl4UvY2NDfCTiRf",
          watch: "540",
          kp: 8.0,
          age: 12,
          type: "movie",
        },
        // ! Madame Web
        {
          img: "https://m.media-amazon.com/images/M/MV5BYWJkY2Q4NmYtOGRlMi00YTg5LWE2ZmQtY2NkYzk3YTRmNWZlXkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_QL75_UX380_CR0,0,380,562_.jpg",
          name: "Madame Web",
          description:
            "Cassandra Webb is a New York metropolis paramedic who begins to demonstrate signs of clairvoyance. Forced to challenge revelations about her past, she needs to safeguard three young women from a deadly adversary who wants them destroyed.",
          year: "2024",
          released: "2024",
          imdb: 3.8,
          genre: "#action, #adventure, #sci-fi",
          duration: 116,
          country: "United States of America",
          status: "",
          embed: "s_76M4c4LTo?si=NypUf9l-h1QFwehX",
          watch: "https://t.me/english_movies_atom",
          kp: 4.7,
          age: 18,
          type: "movie",
        },
      
        // ! Breathe
        {
          img: "https://m.media-amazon.com/images/M/MV5BZmM4NGMyMjYtNmQwZC00YmU2LWExZDEtOWFhZWNhYjlmNzAxXkEyXkFqcGdeQXVyMzQwMTY2Nzk@._V1_QL75_UX380_CR0,0,380,562_.jpg",
          name: "Breathe",
          description:
            "An East Flatbush mother and daughter, barely surviving in an oxygen-less world, must band together to protect each other when intruders arrive claiming to know their missing father.",
          year: "2024",
          released: "2024",
          imdb: 3.7,
          genre: "#action, #thriller",
          duration: 93,
          country: "United States of America",
          status: "",
          embed: "chaHsowROfQ?si=GMq9qd33np9gFFCZ",
          watch: "https://t.me/english_movies_atom",
          kp: 4.8,
          age: 16,
          type: "movie",
        },
      ];
  return (
    <div className='footerWraper'>
         <div className="container">
            <div className="moviseData">
            {
                       movies.map(data => 
                            <div className="moviesWrapper">
                                   <img src={data.img} alt="Buyerda rasm bor"/>
                                   <h2>{data.name}</h2>
                                   <p>{data.description}</p>
                                   <p>{data.year}</p>
                                   <p>{data.released}</p>
                                   <p>{data.imdb}</p>
                                   <p>{data.genre}</p>
                                   <b>{data.duration}</b>
                                   <p>{data.country}</p>
                                   <p>{data.status}</p>
                                   <p>{data.embed}</p>
                                   <p>{data.watch}</p>
                                   <b>{data.kp}</b>
                                   <b>{data.age}</b>
                                   <p>{data.type}</p>
                            </div>
                       )
                  }
            </div>
               
         </div>
            
    </div>
  )
}

export default Footer
