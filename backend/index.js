const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());

app.use("/images", express.static("images"));

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

const library = [
  {
    id: 1,
    books: [
      {
        id: 10,
        name: "The Fall of the Roman Empire",
        author: "Edward Hawkins",
        date: 2022,
        shortDescription: `A historian reviews the causes of the Roman Empire's collapse in its final days.`,
        longDescription: `One of the greatest empires in history, Rome, falls slowly and almost unnoticed due to a combination of political, economic, and military issues that lead to its inevitable downfall.`,
        price: 20.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book1.png",
        category: "history",
      },
      {
        id: 11,
        name: "Secrets of the Middle Ages",
        author: "Isabella Greene",
        date: 2021,
        shortDescription:
          "Hidden secrets and stories of the medieval period come to light.",
        longDescription:
          "The Middle Ages was a time of myths, legends, and dark history. This book uncovers lesser-known facts about the period, revealing the complexity of this era and how it shaped the modern world.",
        price: 16.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book2.png",
        category: "history",
      },
      {
        id: 12,
        name: "The French Revolution",
        author: "Julian Wright",
        date: 2020,
        shortDescription:
          "The events of the French Revolution and their impact on France and Europe.",
        longDescription:
          "The French Revolution brought about radical change in French society and had far-reaching consequences across Europe, reshaping the political and social landscape.",
        price: 17.49,
        image: "https://bookstore-7x9q.onrender.com/images/Book3.png",
        category: "history",
      },
      {
        id: 13,
        name: "The History of Famous Battles",
        author: "Peter Thomas",
        date: 2019,
        shortDescription:
          "An exploration of the world's greatest battles, their strategies, and outcomes.",
        longDescription:
          "This book delves into the tactics, outcomes, and significance of history's most famous battles, providing insights into how they altered the course of history.",
        price: 18.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book4.png",
        category: "history",
      },
      {
        id: 14,
        name: "The Rise and Fall of the Aztecs",
        author: "Olivia Brooks",
        date: 2023,
        shortDescription:
          "The story of the Aztec empire, its glory, and its ultimate downfall.",
        longDescription:
          "The Aztecs were one of the most powerful civilizations in pre-Columbian America. This book explores their rise to power and the factors that led to their dramatic fall.",
        price: 20.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book5.png",
        category: "history",
      },
      {
        id: 15,
        name: "The Vikings: Raiders and Traders",
        author: "Alexander Steele",
        date: 2021,
        shortDescription:
          "A look into the Viking culture, their conquests, and their role as traders.",
        longDescription:
          "The Vikings are often remembered for their raids, but they were also skilled traders and explorers. This book examines the dual nature of their legacy.",
        price: 15.49,
        image: "https://bookstore-7x9q.onrender.com/images/Book6.png",
        category: "history",
      },
      {
        id: 16,
        name: "The Medieval Kings of Europe",
        author: "Henry Clark",
        date: 2020,
        shortDescription:
          "An in-depth look at the rulers of medieval Europe and their dynasties.",
        longDescription:
          "The medieval kings of Europe were not only political figures but also cultural symbols whose reigns defined the course of European history. This book explores their achievements, challenges, and legacies.",
        price: 13.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book7.png",
        category: "history",
      },
      {
        id: 17,
        name: "The Secrets of Ancient Egypt",
        author: "Victoria Walker",
        date: 2022,
        shortDescription:
          "Exploring the mysteries and wonders of Ancient Egypt.",
        longDescription:
          "Ancient Egypt remains one of the most enigmatic civilizations in history. This book uncovers the secrets behind its architecture, religion, and the culture that built the pyramids.",
        price: 19.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book8.png",
        category: "history",
      },
      {
        id: 18,
        name: "The American Revolution",
        author: "Thomas Reynolds",
        date: 2021,
        shortDescription:
          "A deep dive into the causes and effects of the American Revolution.",
        longDescription:
          "The American Revolution was a pivotal moment in history that set the stage for the founding of the United States. This book examines the causes, key events, and global repercussions of the revolution.",
        price: 14.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book9.png",
        category: "history",
      },
      {
        id: 19,
        name: "The History of the World Wars",
        author: "Samuel West",
        date: 2019,
        shortDescription:
          "A detailed account of the two World Wars and their lasting effects.",
        longDescription:
          "The World Wars shaped the 20th century in profound ways. This book provides a comprehensive overview of both World War I and World War II, focusing on key battles, political changes, and the long-term impact on global affairs.",
        price: 18.49,
        image: "https://bookstore-7x9q.onrender.com/images/Book10.png",
        category: "history",
      },
    ],
  },
  {
    id: 2,
    books: [
      {
        id: 20,
        name: "The Emerald Sword",
        author: "Eleanor Grey",
        date: 2022,
        shortDescription:
          "A young sorcerer embarks on a quest to retrieve a magical artifact that can save her kingdom.",
        longDescription:
          "Set in a world where magic is fading, a sorceress is tasked with finding the mythical Emerald Sword to restore balance and defeat a rising evil force.",
        price: 19.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book11.png",
        category: "fantasy",
      },
      {
        id: 21,
        name: "The Dragon's Roar",
        author: "Michael Bennett",
        date: 2021,
        shortDescription:
          "A dragon-rider must prevent an ancient prophecy from coming true.",
        longDescription:
          "A fierce dragon-rider must navigate political intrigue and magical threats while unraveling the truth behind an ancient prophecy that foretells the end of their world.",
        price: 17.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book12.png",
        category: "fantasy",
      },
      {
        id: 22,
        name: "The Kingdom of Shadows",
        author: "Isabella Swan",
        date: 2023,
        shortDescription:
          "A princess discovers a hidden realm of shadows and must protect it from those who wish to control it.",
        longDescription:
          "As dark forces encroach upon the kingdom, a young princess learns of a realm hidden within the shadows, with its own ancient powers. She must protect it at all costs.",
        price: 21.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book13.png",
        category: "fantasy",
      },
      {
        id: 23,
        name: "The Last Enchanter",
        author: "Oliver Grant",
        date: 2020,
        shortDescription:
          "In a world where magic is outlawed, one enchanter fights to bring magic back.",
        longDescription:
          "Magic has been banned for centuries, but when a young enchanter discovers his powers, he becomes the last hope to restore magic to the world.",
        price: 15.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book14.png",
        category: "fantasy",
      },
      {
        id: 24,
        name: "The Fire of Nara",
        author: "Sophia Ross",
        date: 2019,
        shortDescription:
          "A young girl learns she has the ability to control fire, and must use her powers to save her city.",
        longDescription:
          "In a land plagued by firestorms, a girl discovers she can control flames. As war looms, she must master her powers to prevent the city from falling into ruin.",
        price: 18.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book15.png",
        category: "fantasy",
      },
      {
        id: 25,
        name: "The Sorcerer's Curse",
        author: "James Powell",
        date: 2022,
        shortDescription:
          "A cursed sorcerer seeks redemption through a dangerous journey.",
        longDescription:
          "Cursed by an ancient spell, a sorcerer must embark on a perilous journey to break the curse and restore his honor, while battling the dark forces pursuing him.",
        price: 22.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book16.png",
        category: "fantasy",
      },
      {
        id: 26,
        name: "The Moonlit Isles",
        author: "Lily Hawthorne",
        date: 2020,
        shortDescription:
          "A group of adventurers sets out to find a mythical island that holds the key to eternal life.",
        longDescription:
          "On a journey across treacherous seas, a diverse group of adventurers searches for the Moonlit Isles, said to hold a secret that can grant immortality.",
        price: 20.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book17.png",
        category: "fantasy",
      },
      {
        id: 27,
        name: "The Faerie Queen's Promise",
        author: "Daniel Harper",
        date: 2021,
        shortDescription:
          "A young girl is drawn into the faerie realm, where she must fulfill an ancient promise.",
        longDescription:
          "After accidentally crossing into the faerie realm, a girl discovers she is the heir to a forgotten promise made to the Faerie Queen. To save her world, she must honor the oath.",
        price: 16.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book18.png",
        category: "fantasy",
      },
      {
        id: 28,
        name: "The Crystal Kingdom",
        author: "Jessica Matthews",
        date: 2022,
        shortDescription:
          "A prince and his unlikely allies must reclaim a stolen crystal that holds the fate of the world.",
        longDescription:
          "When an ancient crystal is stolen, a prince and his ragtag group of companions must embark on a dangerous quest to retrieve it and restore balance to their fractured world.",
        price: 19.49,
        image: "https://bookstore-7x9q.onrender.com/images/Book19.png",
        category: "fantasy",
      },
      {
        id: 29,
        name: "The Wild Hunt",
        author: "Alexander Reed",
        date: 2023,
        shortDescription:
          "A young hunter becomes the leader of the Wild Hunt, a legendary group tasked with hunting down mythical beasts.",
        longDescription:
          "A boy from a small village unexpectedly becomes the leader of the Wild Hunt, a group known for their ability to track and defeat mythical creatures that threaten the land.",
        price: 18.49,
        image: "https://bookstore-7x9q.onrender.com/images/Book20.png",
        category: "fantasy",
      },
    ],
  },
  {
    id: 3,
    books: [
      {
        id: 30,
        name: "The Vanishing Point",
        author: "Claire Morgan",
        date: 2021,
        shortDescription:
          "A detective investigates the mysterious disappearance of a famous artist.",
        longDescription:
          "When a renowned artist vanishes without a trace, a seasoned detective delves into the case, uncovering a web of secrets that leads to a shocking conclusion.",
        price: 22.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book21.png",
        category: "thriller",
      },
      {
        id: 31,
        name: "Echoes of the Past",
        author: "Richard Blake",
        date: 2022,
        shortDescription:
          "A woman investigates her family's dark history and uncovers disturbing truths.",
        longDescription:
          "While researching her genealogy, a woman discovers a hidden history of crime and betrayal within her family, leading her to confront the past and its lingering effects.",
        price: 19.49,
        image: "https://bookstore-7x9q.onrender.com/images/Book22.png",
        category: "thriller",
      },
      {
        id: 32,
        name: "The Silent Witness",
        author: "Diana Cole",
        date: 2020,
        shortDescription:
          "A mute woman becomes the key witness to a murder, but no one believes her.",
        longDescription:
          "After witnessing a murder, a mute woman becomes the prime witness in a case no one believes. She must use her wit and courage to expose the truth.",
        price: 18.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book23.png",
        category: "thriller",
      },
      {
        id: 33,
        name: "The Whispering Gallery",
        author: "Benjamin Scott",
        date: 2023,
        shortDescription:
          "An art gallery harbors a deadly secret, and a detective must solve the case before time runs out.",
        longDescription:
          "A renowned art gallery houses more than just priceless paintings—it also hides a chilling secret. A detective must piece together clues from the past to stop a deadly conspiracy.",
        price: 20.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book24.png",
        category: "thriller",
      },
      {
        id: 34,
        name: "The Darkened Room",
        author: "Rachel Adams",
        date: 2019,
        shortDescription:
          "A woman is trapped in a locked room with a murderer and must use her skills to survive.",
        longDescription:
          "After being locked in a room with a killer, a woman must use her wits and observation skills to escape and uncover the killer's true identity.",
        price: 17.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book25.png",
        category: "thriller",
      },
      {
        id: 35,
        name: "The Blackened Mirror",
        author: "Thomas Hill",
        date: 2022,
        shortDescription:
          "A series of deaths are linked to an ancient mirror, and a detective must uncover the truth.",
        longDescription:
          "A string of unexplained deaths occurs around a cursed mirror. A detective investigates the supernatural connection, uncovering more than he bargained for.",
        price: 21.49,
        image: "https://bookstore-7x9q.onrender.com/images/Book26.png",
        category: "thriller",
      },
      {
        id: 36,
        name: "The Last Confession",
        author: "Amanda Foster",
        date: 2021,
        shortDescription:
          "A priest must unravel a confession that holds the key to a murder investigation.",
        longDescription:
          "When a priest hears a confession that might hold the answer to an unsolved murder, he finds himself caught in a moral dilemma that could alter the course of the investigation.",
        price: 19.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book27.png",
        category: "thriller",
      },
      {
        id: 37,
        name: "Behind Closed Doors",
        author: "Gregory Lee",
        date: 2020,
        shortDescription:
          "A woman investigates the mysterious death of her husband, only to uncover a dark secret.",
        longDescription:
          "After her husband's sudden death, a woman delves into his past, uncovering shocking truths that lead her to a dangerous conclusion.",
        price: 18.49,
        image: "https://bookstore-7x9q.onrender.com/images/Book28.png",
        category: "thriller",
      },
      {
        id: 38,
        name: "The Forgotten Heir",
        author: "Julia Stevens",
        date: 2023,
        shortDescription:
          "A missing heir resurfaces after many years, and a detective must solve the mystery behind his disappearance.",
        longDescription:
          "A man who disappeared years ago returns, but his identity and past remain a mystery. A detective uncovers secrets that lead to a far-reaching conspiracy.",
        price: 22.49,
        image: "https://bookstore-7x9q.onrender.com/images/Book29.png",
        category: "thriller",
      },
      {
        id: 39,
        name: "The Alibi",
        author: "Mark Davidson",
        date: 2021,
        shortDescription:
          "A lawyer uncovers the truth behind a seemingly perfect alibi in a murder case.",
        longDescription:
          "A defense attorney discovers that his client's alibi might be fabricated, leading him to dig deeper into the case and confront dangerous enemies.",
        price: 23.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book30.png",
        category: "thriller",
      },
    ],
  },
  {
    id: 4,
    books: [
      {
        id: 40,
        name: "A Love Rekindled",
        author: "Sophie Edwards",
        date: 2023,
        shortDescription:
          "Two former lovers meet again after years apart, rekindling their passion.",
        longDescription:
          "When two lovers who once separated by fate meet again, their feelings for each other ignite once more. However, both must confront their pasts before they can build a future.",
        price: 24.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book31.png",
        category: "romance",
      },
      {
        id: 41,
        name: "The Heart's Journey",
        author: "Lily Matthews",
        date: 2022,
        shortDescription:
          "A young woman embarks on a journey of self-discovery and love after a personal loss.",
        longDescription:
          "After losing someone close to her, a woman travels to find herself, along the way discovering a love she never thought possible.",
        price: 21.49,
        image: "https://bookstore-7x9q.onrender.com/images/Book32.png",
        category: "romance",
      },
      {
        id: 42,
        name: "Falling For You",
        author: "Grace Williams",
        date: 2021,
        shortDescription:
          "An unexpected encounter between two strangers leads to a deep connection.",
        longDescription:
          "What begins as an unexpected encounter in a café turns into a whirlwind romance. Both must confront their fears and insecurities to be together.",
        price: 18.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book33.png",
        category: "romance",
      },
      {
        id: 43,
        name: "Whispers of the Heart",
        author: "Emily Parker",
        date: 2020,
        shortDescription:
          "A woman struggles to move on from her past while discovering new love.",
        longDescription:
          "A woman haunted by the past finds solace in the arms of a stranger, but her inability to let go of her memories threatens their relationship.",
        price: 17.49,
        image: "https://bookstore-7x9q.onrender.com/images/Book34.png",
        category: "romance",
      },
      {
        id: 44,
        name: "The Sun and the Moon",
        author: "Ava Collins",
        date: 2023,
        shortDescription:
          "A couple from different worlds fall in love, but their differences may tear them apart.",
        longDescription:
          "A romance between two people from contrasting social worlds blooms, but their love faces resistance from both their families and society.",
        price: 23.49,
        image: "https://bookstore-7x9q.onrender.com/images/Book35.png",
        category: "romance",
      },
      {
        id: 45,
        name: "Love’s Triumph",
        author: "Julia Thomas",
        date: 2021,
        shortDescription:
          "Two lovers struggle to stay together despite life's obstacles.",
        longDescription:
          "In a world full of challenges, two souls fight for love against the pressures of life, family, and their own insecurities.",
        price: 19.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book36.png",
        category: "romance",
      },
      {
        id: 46,
        name: "A Second Chance",
        author: "Natalie Bell",
        date: 2022,
        shortDescription:
          "After years apart, two ex-lovers are given a second chance at love.",
        longDescription:
          "When two people separated by circumstance are reunited after many years, they must overcome their past hurts to find happiness once again.",
        price: 22.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book37.png",
        category: "romance",
      },
      {
        id: 47,
        name: "The Promise of Forever",
        author: "Isabella Davis",
        date: 2020,
        shortDescription:
          "A couple's love is tested by time and life's difficulties.",
        longDescription:
          "As the years pass, a couple's relationship faces many challenges. Will their love survive the tests of time, or will they be pulled apart by life's demands?",
        price: 20.49,
        image: "https://bookstore-7x9q.onrender.com/images/Book38.png",
        category: "romance",
      },
      {
        id: 48,
        name: "Dancing With Love",
        author: "Sarah Jones",
        date: 2023,
        shortDescription:
          "A dancer and a musician find their hearts intertwined through the art of performance.",
        longDescription:
          "A passionate dancer and a talented musician fall in love through their shared love of performance, but they must overcome their own fears to truly connect.",
        price: 25.49,
        image: "https://bookstore-7x9q.onrender.com/images/Book39.png",
        category: "romance",
      },
      {
        id: 49,
        name: "An Unexpected Affair",
        author: "Caroline Roberts",
        date: 2022,
        shortDescription:
          "A love affair between two unlikely people turns into something deeper than either of them imagined.",
        longDescription:
          "What begins as an unexpected fling between two strangers soon turns into a deep and passionate love affair neither of them anticipated.",
        price: 21.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book40.png",
        category: "romance",
      },
    ],
  },
  {
    id: 5,
    books: [
      {
        id: 50,
        name: "The Quantum Paradox",
        author: "Nathaniel Carter",
        date: 2023,
        shortDescription:
          "A scientist discovers a way to travel between alternate realities, but it comes with dangerous consequences.",
        longDescription:
          "Dr. Emma Vance invents a machine that allows her to travel between parallel universes, but every journey risks altering her own reality beyond repair.",
        price: 27.49,
        image: "https://bookstore-7x9q.onrender.com/images/Book41.png",
        category: "science fiction",
      },
      {
        id: 51,
        name: "Neon Dreams",
        author: "Fiona Black",
        date: 2022,
        shortDescription:
          "In a dystopian future, a hacker fights against a corporate empire that controls society's thoughts.",
        longDescription:
          "Set in a world where technology can manipulate people's memories, a group of hackers rises up to take down the corporation that controls their minds.",
        price: 22.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book42.png",
        category: "science fiction",
      },
      {
        id: 52,
        name: "Artificial Hearts",
        author: "Samuel King",
        date: 2021,
        shortDescription:
          "In a society where people are augmented with artificial hearts, a rogue scientist must uncover the dark truth behind the implants.",
        longDescription:
          "As the population becomes more dependent on artificial hearts, a scientist discovers that the devices have a hidden purpose, and she must stop a catastrophic event.",
        price: 25.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book43.png",
        category: "science fiction",
      },
      {
        id: 53,
        name: "Chrono Drift",
        author: "Olivia Stone",
        date: 2020,
        shortDescription:
          "A time traveler from the future struggles to fix historical events without disrupting the timeline.",
        longDescription:
          "When a time traveler is sent back to the 21st century to prevent a catastrophe, he finds himself caught in a web of temporal consequences that could alter history forever.",
        price: 21.49,
        image: "https://bookstore-7x9q.onrender.com/images/Book44.png",
        category: "science fiction",
      },
      {
        id: 54,
        name: "The Red Planet",
        author: "Daniel Greene",
        date: 2023,
        shortDescription:
          "A team of explorers on Mars uncovers an ancient alien civilization with dark secrets.",
        longDescription:
          "On Mars, a group of astronauts discovers the remnants of an ancient alien race and must uncover the secrets of their demise while dealing with their own survival.",
        price: 29.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book45.png",
        category: "science fiction",
      },
      {
        id: 55,
        name: "Galactic War",
        author: "George Harris",
        date: 2021,
        shortDescription:
          "The fate of the galaxy rests on the shoulders of a reluctant general who must unite warring factions.",
        longDescription:
          "As an intergalactic war threatens to engulf the galaxy, a former military commander must lead a ragtag fleet of rebels to face a superior, unstoppable force.",
        price: 26.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book46.png",
        category: "science fiction",
      },
      {
        id: 56,
        name: "The Bioengineers",
        author: "Lila Turner",
        date: 2020,
        shortDescription:
          "A team of scientists genetically engineers the perfect human being, but one of them becomes an unintended weapon.",
        longDescription:
          "In a futuristic world, a group of bioengineers creates a genetically enhanced human, but their creation becomes a dangerous force, threatening their own survival.",
        price: 23.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book47.png",
        category: "science fiction",
      },
      {
        id: 57,
        name: "Machine Minds",
        author: "Mark Davis",
        date: 2022,
        shortDescription:
          "In a future where artificial intelligence has surpassed human intelligence, a group of rebels fights to retain their humanity.",
        longDescription:
          "As AI begins to take control of every aspect of society, a small band of rebels struggles to prevent machines from completely overtaking the world.",
        price: 24.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book48.png",
        category: "science fiction",
      },
      {
        id: 58,
        name: "The Infinite Loop",
        author: "Emma Walker",
        date: 2021,
        shortDescription:
          "A software engineer discovers that the world they live in is a simulation, and they must find a way to escape before the simulation collapses.",
        longDescription:
          "When a young engineer discovers the truth about the reality they inhabit, they must navigate a complex, ever-shifting world while trying to escape before time runs out.",
        price: 22.49,
        image: "https://bookstore-7x9q.onrender.com/images/Book49.png",
        category: "science fiction",
      },
      {
        id: 59,
        name: "The Singularity Wars",
        author: "Joshua Lee",
        date: 2023,
        shortDescription:
          "As humans merge with machines, the world becomes divided, and a war for the future of humanity begins.",
        longDescription:
          "The emergence of transhumanism creates a division between humanity and those who have fully merged with machines. As tensions rise, a war breaks out to determine the future of both factions.",
        price: 28.49,
        image: "https://bookstore-7x9q.onrender.com/images/Book50.png",
        category: "science fiction",
      },
    ],
  },
  {
    id: 6,
    books: [
      {
        id: 60,
        name: "The Last Duchess",
        author: "Sarah Kent",
        date: 2022,
        shortDescription:
          "A historical novel about the turbulent life of an Italian noblewoman during the Renaissance.",
        longDescription:
          "Set during the Italian Renaissance, this novel follows the life of a noblewoman caught in a world of political intrigue, betrayal, and a fight for power.",
        price: 23.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book51.png",
        category: "historical fiction",
      },
      {
        id: 61,
        name: "Beneath the Scarlet Sky",
        author: "Mark Sullivan",
        date: 2021,
        shortDescription:
          "Set during World War II, a young man becomes an unlikely spy for the Allies, navigating danger and deception.",
        longDescription:
          "Based on true events, this gripping historical thriller tells the story of an Italian teenager who becomes a spy during World War II, risking everything to fight the Axis powers.",
        price: 24.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book52.png",
        category: "historical fiction",
      },
      {
        id: 62,
        name: "The Crown of Fire",
        author: "Victoria Richards",
        date: 2020,
        shortDescription:
          "A young queen must navigate the challenges of ruling a kingdom while dealing with court intrigue and an impending war.",
        longDescription:
          "In the midst of war and political turmoil, a young queen struggles to keep her kingdom intact, contending with betrayals, power struggles, and the weight of her crown.",
        price: 26.49,
        image: "https://bookstore-7x9q.onrender.com/images/Book53.png",
        category: "historical fiction",
      },
      {
        id: 63,
        name: "The Winter Soldier",
        author: "Michael Ford",
        date: 2023,
        shortDescription:
          "A soldier returns home from World War I and must adjust to life in a society that no longer understands him.",
        longDescription:
          "After fighting in the trenches of World War I, a soldier returns home, only to find that his country and his family have changed in ways he never imagined.",
        price: 28.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book54.png",
        category: "historical fiction",
      },
      {
        id: 64,
        name: "The Painted Veil",
        author: "W. Somerset Maugham",
        date: 1925,
        shortDescription:
          "A woman finds herself in a loveless marriage in early 20th century China, leading to self-discovery.",
        longDescription:
          "Set in 1920s China, this novel tells the story of a woman trapped in a loveless marriage who embarks on a journey of personal discovery while facing the horrors of a cholera epidemic.",
        price: 20.49,
        image: "https://bookstore-7x9q.onrender.com/images/Book55.png",
        category: "historical fiction",
      },
      {
        id: 65,
        name: "The Rebel Queen",
        author: "Eva St. Claire",
        date: 2021,
        shortDescription:
          "A fictionalized account of a queen who led a rebellion against British rule in India.",
        longDescription:
          "This gripping historical novel follows the rise of Rani Laxmibai, a fearless queen who fought to protect her kingdom and her people from British colonization.",
        price: 27.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book56.png",
        category: "historical fiction",
      },
      {
        id: 66,
        name: "The Book Thief",
        author: "Markus Zusak",
        date: 2005,
        shortDescription:
          "A young girl steals books to cope with the trauma of Nazi Germany during World War II.",
        longDescription:
          "Set in Nazi Germany, this poignant story follows a young girl who steals books to escape the horrors of war, while witnessing the strength of the human spirit.",
        price: 19.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book57.png",
        category: "historical fiction",
      },
      {
        id: 67,
        name: "The Wind That Shakes the Barley",
        author: "Thomas Kenneally",
        date: 2023,
        shortDescription:
          "Set during the Irish War of Independence, two brothers find themselves on opposite sides of the conflict.",
        longDescription:
          "Amid the chaos of the Irish War of Independence, two brothers must choose whether to fight for the British or their homeland, with devastating consequences.",
        price: 25.49,
        image: "https://bookstore-7x9q.onrender.com/images/Book58.png",
        category: "historical fiction",
      },
      {
        id: 68,
        name: "The Nightingale",
        author: "Kristin Hannah",
        date: 2015,
        shortDescription:
          "Two sisters fight for survival in Nazi-occupied France during World War II.",
        longDescription:
          "The story of two sisters in Nazi-occupied France, one who joins the resistance and the other who survives the war in silence, both facing unimaginable hardships.",
        price: 29.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book59.png",
        category: "historical fiction",
      },
      {
        id: 69,
        name: "Atonement",
        author: "Ian McEwan",
        date: 2001,
        shortDescription:
          "A young girl's lie changes the course of three lives during World War II.",
        longDescription:
          "A young girl's mistake during World War II leads to a lie that tears apart the lives of her sister and the man she loves, leading to decades of regret and atonement.",
        price: 22.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book60.png",
        category: "historical fiction",
      },
    ],
  },
  {
    id: 7,
    books: [
      {
        id: 70,
        name: "The Haunting of Hill House",
        author: "Shirley Jackson",
        date: 1959,
        shortDescription:
          "A group of people investigates the mysterious happenings in an old mansion.",
        longDescription:
          "A group of individuals is invited to stay in a haunted mansion, where they must confront their deepest fears as they uncover the terrifying secrets of Hill House.",
        price: 18.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book61.png",
        category: "horror",
      },
      {
        id: 71,
        name: "The Exorcist",
        author: "William Peter Blatty",
        date: 1971,
        shortDescription:
          "A young girl is possessed by an evil force, and a priest must save her from its grasp.",
        longDescription:
          "A terrifying tale of possession and exorcism, where a priest must battle an evil force to save a young girl from the supernatural entity that controls her.",
        price: 22.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book62.png",
        category: "horror",
      },
      {
        id: 72,
        name: "The Shining",
        author: "Stephen King",
        date: 1977,
        shortDescription:
          "A family moves to an isolated hotel for the winter, where dark forces begin to unravel their sanity.",
        longDescription:
          "Trapped in an isolated hotel with a malevolent spirit, a man's descent into madness threatens to destroy his family as supernatural forces awaken.",
        price: 24.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book63.png",
        category: "horror",
      },
      {
        id: 73,
        name: "The Silent Corner",
        author: "Dean Koontz",
        date: 2017,
        shortDescription:
          "A former FBI agent investigates a series of mysterious deaths linked to a mind-control experiment.",
        longDescription:
          "When a wave of suicides sweeps the country, a former FBI agent uncovers a government conspiracy that uses mind control to manipulate people into taking their own lives.",
        price: 21.49,
        image: "https://bookstore-7x9q.onrender.com/images/Book64.png",
        category: "horror",
      },
      {
        id: 74,
        name: "Bird Box",
        author: "Josh Malerman",
        date: 2014,
        shortDescription:
          "After mysterious creatures drive most of humanity to madness, a woman must navigate a dangerous world blindfolded to survive.",
        longDescription:
          "A post-apocalyptic world where strange creatures cause anyone who sees them to go insane, a mother must protect her children by navigating the treacherous world blindfolded.",
        price: 19.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book65.png",
        category: "horror",
      },
      {
        id: 75,
        name: "Dracula",
        author: "Bram Stoker",
        date: 1897,
        shortDescription:
          "A vampire from Transylvania arrives in England to spread terror and bloodshed.",
        longDescription:
          "The classic tale of Count Dracula, a vampire from Transylvania who seeks to spread his curse to England, where a group of heroes must stop his reign of terror.",
        price: 15.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book66.png",
        category: "horror",
      },
      {
        id: 76,
        name: "Frankenstein",
        author: "Mary Shelley",
        date: 1818,
        shortDescription:
          "A scientist creates a living being from body parts, but the creature turns into a horrific monster.",
        longDescription:
          "In this gothic novel, Victor Frankenstein creates a monster from body parts, only for his creation to become vengeful and destructive.",
        price: 14.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book67.png",
        category: "horror",
      },
      {
        id: 77,
        name: "The Girl Next Door",
        author: "Jack Ketchum",
        date: 1989,
        shortDescription:
          "A young girl is subjected to unspeakable horrors when she is sent to live with her aunt and uncle.",
        longDescription:
          "Based on true events, this chilling novel tells the story of a young girl subjected to unimaginable abuse, both physical and psychological, by those who should have cared for her.",
        price: 19.49,
        image: "https://bookstore-7x9q.onrender.com/images/Book68.png",
        category: "horror",
      },
      {
        id: 78,
        name: "The Cabin at the End of the World",
        author: "Paul Tremblay",
        date: 2018,
        shortDescription:
          "A vacation cabin turns into a nightmare when a family is held hostage by strangers.",
        longDescription:
          "A family’s peaceful vacation turns into a terror-filled nightmare when a group of strangers takes them hostage, forcing them to make an impossible decision.",
        price: 22.49,
        image: "https://bookstore-7x9q.onrender.com/images/Book69.png",
        category: "horror",
      },
      {
        id: 79,
        name: "House of Leaves",
        author: "Mark Z. Danielewski",
        date: 2000,
        shortDescription:
          "A family moves into a house with strange dimensions, and its history begins to unravel in unsettling ways.",
        longDescription:
          "A dark and experimental horror novel where a house with ever-changing dimensions leads to a terrifying investigation that challenges the boundaries of reality.",
        price: 26.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book70.png",
        category: "horror",
      },
    ],
  },
  {
    id: 8,
    books: [
      {
        id: 80,
        name: "The Art of Travel",
        author: "Alain de Botton",
        date: 2002,
        shortDescription:
          "A philosophical exploration of travel, blending reflections with stories from famous travelers.",
        longDescription:
          "In this thoughtful and reflective book, Alain de Botton explores the deeper meaning behind travel and its impact on the human experience, using a mix of personal reflections and historical insights.",
        price: 21.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book71.png",
        category: "travel",
      },
      {
        id: 81,
        name: "Vagabonding: An Uncommon Guide to the Art of Long-Term World Travel",
        author: "Rolf Potts",
        date: 2003,
        shortDescription:
          "A guide to the art of long-term travel, providing practical advice for those wishing to embrace a nomadic lifestyle.",
        longDescription:
          "With his distinctive voice, Rolf Potts explains how to travel for extended periods without breaking the bank, offering tips on everything from budget travel to cultural immersion.",
        price: 18.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book72.png",
        category: "travel",
      },
      {
        id: 82,
        name: "Into the Wild",
        author: "Jon Krakauer",
        date: 1996,
        shortDescription:
          "The true story of Christopher McCandless, a young man who ventured into the Alaskan wilderness in search of meaning.",
        longDescription:
          "This captivating account tells the story of Christopher McCandless, who abandoned his conventional life to travel across the U.S. before heading into the wilds of Alaska, where his journey ended tragically.",
        price: 16.49,
        image: "https://bookstore-7x9q.onrender.com/images/Book73.png",
        category: "travel",
      },
      {
        id: 83,
        name: "The Geography of Bliss: One Grump's Search for the Happiest Places in the World",
        author: "Eric Weiner",
        date: 2008,
        shortDescription:
          "A humorous and insightful journey to some of the happiest places on Earth to understand what makes people happy.",
        longDescription:
          "Eric Weiner combines humor and introspection as he travels to countries known for their happiness, exploring cultural influences and personal insights into the pursuit of happiness.",
        price: 20.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book74.png",
        category: "travel",
      },
      {
        id: 84,
        name: "A Walk in the Woods: Rediscovering America on the Appalachian Trail",
        author: "Bill Bryson",
        date: 1998,
        shortDescription:
          "Bill Bryson's humorous and reflective account of his attempt to hike the Appalachian Trail.",
        longDescription:
          "With his signature wit and observational humor, Bryson recounts his journey on the Appalachian Trail, offering reflections on nature, human endurance, and the beauty of the American landscape.",
        price: 17.49,
        image: "https://bookstore-7x9q.onrender.com/images/Book75.png",
        category: "travel",
      },
      {
        id: 85,
        name: "The Beach",
        author: "Alex Garland",
        date: 1996,
        shortDescription:
          "A backpacker searches for a mythical paradise in Thailand, only to discover the dark side of his dream destination.",
        longDescription:
          "This gripping tale follows a young traveler who stumbles upon a hidden beach in Thailand, where a secluded utopia awaits—until the cracks in paradise begin to show.",
        price: 19.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book76.png",
        category: "travel",
      },
      {
        id: 86,
        name: "The Alchemist",
        author: "Paulo Coelho",
        date: 1988,
        shortDescription:
          "A young shepherd's journey in search of his personal legend and the treasures that await him.",
        longDescription:
          "In this allegorical novel, Santiago, a shepherd, embarks on a journey from Spain to Egypt, seeking a treasure that will change his life forever, encountering spiritual and physical challenges along the way.",
        price: 14.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book77.png",
        category: "travel",
      },
      {
        id: 87,
        name: "Wild: From Lost to Found on the Pacific Crest Trail",
        author: "Cheryl Strayed",
        date: 2012,
        shortDescription:
          "A memoir of one woman's solo hike on the Pacific Crest Trail, filled with emotional and physical challenges.",
        longDescription:
          "Cheryl Strayed's memoir chronicles her journey along the Pacific Crest Trail, where she sought healing after personal tragedy. Her account is raw, honest, and inspiring, touching on themes of resilience, loss, and self-discovery.",
        price: 18.49,
        image: "https://bookstore-7x9q.onrender.com/images/Book78.png",
        category: "travel",
      },
      {
        id: 88,
        name: "In Patagonia",
        author: "Bruce Chatwin",
        date: 1977,
        shortDescription:
          "A travel narrative that takes readers on a journey through the remote and rugged landscape of Patagonia.",
        longDescription:
          "Bruce Chatwin's classic travelogue takes readers to the far reaches of Patagonia, a region in South America known for its wild, untamed beauty, as he delves into its history, culture, and fascinating characters.",
        price: 22.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book79.png",
        category: "travel",
      },
      {
        id: 89,
        name: "On the Road",
        author: "Jack Kerouac",
        date: 1957,
        shortDescription:
          "A semi-autobiographical account of Kerouac's travels across America, capturing the free-spirited essence of the Beat Generation.",
        longDescription:
          "Jack Kerouac’s seminal work explores the quest for freedom and self-discovery through a series of road trips across America. The novel captures the restlessness and idealism of the 1950s counterculture, offering a raw and evocative portrait of life on the road.",
        price: 16.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book80.png",
        category: "travel",
      },
    ],
  },
  {
    id: 9,
    books: [
      {
        id: 90,
        name: "Salt: A World History",
        author: "Mark Kurlansky",
        date: 2002,
        shortDescription:
          "A historical exploration of the role of salt in shaping human civilization.",
        longDescription:
          "Mark Kurlansky traces the history of salt from ancient times to the present, revealing how this simple substance has influenced economics, politics, and culture across the world.",
        price: 18.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book81.png",
        category: "food and drink",
      },
      {
        id: 91,
        name: "The Omnivore's Dilemma: A Natural History of Four Meals",
        author: "Michael Pollan",
        date: 2006,
        shortDescription:
          "An exploration of the food choices available to modern consumers and the impact they have on health and the environment.",
        longDescription:
          "Michael Pollan examines the journey of four meals, delving into the sourcing and production of food, the ethics of eating, and the environmental costs of modern food systems.",
        price: 22.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book82.png",
        category: "food and drink",
      },
      {
        id: 92,
        name: "Kitchen Confidential: Adventures in the Culinary Underbelly",
        author: "Anthony Bourdain",
        date: 2000,
        shortDescription:
          "A behind-the-scenes look at the world of professional kitchens, from a former chef's perspective.",
        longDescription:
          "In this candid memoir, Anthony Bourdain reveals the grit and grind of the culinary world, offering a raw and unfiltered account of life in professional kitchens.",
        price: 16.49,
        image: "https://bookstore-7x9q.onrender.com/images/Book83.png",
        category: "food and drink",
      },
      {
        id: 93,
        name: "The Food Lab: Better Home Cooking Through Science",
        author: "J. Kenji López-Alt",
        date: 2015,
        shortDescription:
          "A comprehensive guide to cooking with a scientific approach to perfecting everyday dishes.",
        longDescription:
          "J. Kenji López-Alt breaks down the science behind cooking, explaining techniques and tips for achieving the best results with everyday ingredients and kitchen tools.",
        price: 29.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book84.png",
        category: "food and drink",
      },
      {
        id: 94,
        name: "The Joy of Cooking",
        author: "Irma S. Rombauer",
        date: 1931,
        shortDescription:
          "A beloved cookbook filled with timeless recipes and culinary techniques.",
        longDescription:
          "First published in 1931, this classic cookbook has been a staple in American kitchens for generations, offering a wide array of recipes and practical cooking advice for home cooks of all skill levels.",
        price: 24.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book85.png",
        category: "food and drink",
      },
      {
        id: 95,
        name: "Eat, Pray, Love",
        author: "Elizabeth Gilbert",
        date: 2006,
        shortDescription:
          "A memoir of self-discovery and food exploration during a year-long journey across Italy, India, and Indonesia.",
        longDescription:
          "Elizabeth Gilbert chronicles her year-long journey to find herself, with a particular focus on her experiences in Italy, where she discovers the joy of food and its role in personal growth and healing.",
        price: 18.49,
        image: "https://bookstore-7x9q.onrender.com/images/Book86.png",
        category: "food and drink",
      },
      {
        id: 96,
        name: "The Spice Hunter: A Journey to the World's Most Flavorful Places",
        author: "Lior Lev Sercarz",
        date: 2017,
        shortDescription:
          "A culinary adventure that explores the global world of spices and their rich history.",
        longDescription:
          "Chef Lior Lev Sercarz takes readers on a flavorful journey across the world, sharing the stories of spices, from their origins to their uses in cuisine, and the impact they have had on cultures worldwide.",
        price: 26.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book87.png",
        category: "food and drink",
      },
      {
        id: 97,
        name: "Cooked: A Natural History of Transformation",
        author: "Naikg Kames",
        date: 2013,
        shortDescription:
          "A reflection on the process of cooking and its connection to culture, health, and humanity.",
        longDescription:
          "In this thought-provoking book, Michael Pollan explores the art of cooking through the four classical elements—fire, water, air, and earth—delving into their transformative effects on food and human culture.",
        price: 21.49,
        image: "https://bookstore-7x9q.onrender.com/images/Book88.png",
        category: "food and drink",
      },
      {
        id: 98,
        name: "Food Rules: An Eater's Manual",
        author: "Michael Pollan",
        date: 2009,
        shortDescription:
          "A simple guide to eating well, based on a series of practical rules for healthy living.",
        longDescription:
          "Michael Pollan distills his advice on healthy eating into 64 straightforward rules, encouraging readers to avoid processed foods, embrace traditional diets, and be mindful of their food choices.",
        price: 12.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book89.png",
        category: "food and drink",
      },
      {
        id: 99,
        name: "Like Water for Chocolate",
        author: "Laura Esquivel",
        date: 1989,
        shortDescription:
          "A magical realist tale in which food plays a central role in expressing emotions and connecting generations.",
        longDescription:
          "In this enchanting novel, food becomes a powerful means of communication, with the protagonist's cooking reflecting her emotions and desires, while the novel weaves themes of love, tradition, and family.",
        price: 15.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book90.png",
        category: "food and drink",
      },
    ],
  },
  {
    id: 10,
    books: [
      {
        id: 100,
        name: "The Sports Gene: Inside the Science of Extraordinary Athletic Performance",
        author: "David Epstein",
        date: 2013,
        shortDescription:
          "An exploration of the science behind exceptional athletic performance.",
        longDescription:
          "David Epstein delves into the genetics, psychology, and environment behind the making of elite athletes, exploring the nature vs. nurture debate and what truly contributes to extraordinary athletic performance.",
        price: 18.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book91.png",
        category: "sport",
      },
      {
        id: 101,
        name: "Open: An Autobiography",
        author: "Andre Agassi",
        date: 2009,
        shortDescription: "The autobiography of tennis legend Andre Agassi.",
        longDescription:
          "In this candid memoir, Andre Agassi opens up about his struggles, triumphs, and the mental and physical challenges of being one of the greatest tennis players in history.",
        price: 22.49,
        image: "https://bookstore-7x9q.onrender.com/images/Book92.png",
        category: "sport",
      },
      {
        id: 102,
        name: "The Mamba Mentality: How I Play",
        author: "Kobe Bryant",
        date: 2018,
        shortDescription:
          "Kobe Bryant's reflections on his career and the mindset that drove him to greatness.",
        longDescription:
          "In this intimate book, Kobe Bryant shares the mindset and philosophy that propelled him to five NBA championships, providing insights into his approach to training, competition, and life both on and off the court.",
        price: 24.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book93.png",
        category: "sport",
      },
      {
        id: 103,
        name: "Rafa: My Story",
        author: "Rafael Nadal",
        date: 2011,
        shortDescription: "The memoir of tennis champion Rafael Nadal.",
        longDescription:
          "Rafael Nadal shares his personal story, offering a behind-the-scenes look at his tennis career, his family, and the challenges he has faced on his journey to becoming one of the greatest tennis players of all time.",
        price: 19.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book94.png",
        category: "sport",
      },
      {
        id: 104,
        name: "Moneyball: The Art of Winning an Unfair Game",
        author: "Michael Lewis",
        date: 2003,
        shortDescription:
          "A story of how data analytics transformed the game of baseball.",
        longDescription:
          "Michael Lewis tells the story of the Oakland Athletics' use of data analytics to build a competitive baseball team on a limited budget, revolutionizing the way the sport is played and understood.",
        price: 15.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book95.png",
        category: "sport",
      },
      {
        id: 105,
        name: "The Cuckoo's Calling",
        author: "Robert Galbraith",
        date: 2013,
        shortDescription:
          "A crime novel set in the world of professional sports.",
        longDescription:
          "In this thrilling novel, a private investigator uncovers a web of deceit and scandal surrounding a famous sports figure's mysterious death, blending the world of sports with mystery and suspense.",
        price: 14.49,
        image: "https://bookstore-7x9q.onrender.com/images/Book96.png",
        category: "sport",
      },
      {
        id: 106,
        name: "The Blind Side: Evolution of a Game",
        author: "Michael Lewis",
        date: 2006,
        shortDescription:
          "The inspiring story of NFL player Michael Oher and the evolution of football's most important position.",
        longDescription:
          "Michael Lewis explores the story of Michael Oher, a homeless teenager who was adopted by a wealthy family and went on to play in the NFL, while also analyzing the evolution of the left tackle position in football.",
        price: 17.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book97.png",
        category: "sport",
      },
      {
        id: 107,
        name: "Playing for Keeps: Michael Jordan and the World He Made",
        author: "David Halberstam",
        date: 1999,
        shortDescription:
          "A comprehensive biography of basketball legend Michael Jordan.",
        longDescription:
          "David Halberstam offers an in-depth look at Michael Jordan's career, from his rise to stardom to his influence on the global popularity of basketball, examining his legacy and the impact he had on the world of sports.",
        price: 23.49,
        image: "https://bookstore-7x9q.onrender.com/images/Book98.png",
        category: "sport",
      },
      {
        id: 108,
        name: "Fearless: The Undaunted Courage and Ultimate Sacrifice of Navy Seal Team Six Operator Adam Brown",
        author: "Eric Blehm",
        date: 2012,
        shortDescription:
          "The inspiring true story of Navy SEAL Adam Brown's courage and dedication.",
        longDescription:
          "In this powerful biography, Eric Blehm tells the story of Adam Brown, a Navy SEAL who overcame immense personal challenges and made the ultimate sacrifice for his country, highlighting his bravery and determination.",
        price: 19.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book99.png",
        category: "sport",
      },
      {
        id: 109,
        name: "The Inner Game of Tennis: The Classic Guide to the Mental Side of Peak Performance",
        author: "W. Timothy Gallwey",
        date: 1974,
        shortDescription:
          "A guide to mastering the mental game of tennis and sports in general.",
        longDescription: `W. Timothy Gallwey's groundbreaking book teaches athletes how to focus their minds, manage stress, and unlock their full potential in tennis and any sport, using psychological principles to improve performance.`,
        price: 14.99,
        image: "https://bookstore-7x9q.onrender.com/images/Book100.png",
        category: "sport",
      },
    ],
  },
];

// Get all books
app.get("/library", (req, res) => {
  res.send(library);
});