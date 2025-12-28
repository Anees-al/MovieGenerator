
import silence from './silence.jpg'
import revenant from './revenant.jpg'
import prisoners from './prisoners.jpg'
import socialnetwork from './socialnetwork.jpg'
import pulpfiction from './pulpfiction.jpg'
import monty from './monty.jpg'
import birdman from './birdman.jpg'
import inside from './inside.jpg'
import thefall from './thefall.jpg'
import seven from './seven.jpg'
import redemption from './redemotion.jpg'
import godfather from './godfather.jpg'
import darkknight from './darkknight.jpg'
import shhlist from './schlist.jpg'
import angry from './12angry.jpg'
import rings from './rings.jpg'
import inception from './inception.jpg'
import fight from './fightclub.jpg'
import forrest from './forrest.jpg'
import good from './good.jpg'
import matrix from './matrix.jpg'
import sevensamurai from './sevensamurai.jpg'
import goodfelllas from './goodfellas.jpg'
import parasite from './parasite.jpg'
import interstrelalr from './interstrellar.jpg'
import space from './space.jpg'
import lamb from './lambs.jpg'
import whiplash from './whiplash.jpg'
import cityofgod from './cityofgod.jpg'
import trumanshow from './truemanshow.jpg'
import oldboy from './oldboy.jpg'
import bladerunner from './bladerunner.jpg'
import memento from './memato.jpg'
import madmax from './madmax.jpg'
import spirited from './spiritedaway.jpg'
import prestige from './prestige.jpg'
import django from './django.jpg'
import gladiator from './gladiator.jpg'
import departed from './departed.jpg'
type Movie={
    id:number
    title:string
    description:string
    releaseYear:number
    duration:number
    genre:string[]
    language:string
    ratingIMDB:number
    posterURL:string
}



 const movies:Movie[]=[
    {
        id:1,
        title:'Silence',
        description:'In the 17th century, two Portuguese Jesuit priests travel to Japan in an attempt to locate their mentor, who is rumored to have committed apostasy, and to propagate Catholicism.',
        releaseYear:2016,
        genre:['history','drama'],
        duration:161,
        language:'English',
        ratingIMDB:7.2,
        posterURL:silence

    },
    {
        id:2,
        title:'The Revenant',
        description:'A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.',
        releaseYear:2015,
        genre:['survival','adventure'],
        duration:156,
        language:'English',
        ratingIMDB:8.0,
        posterURL:revenant

    },
    {
    id: 3,
    title: 'Prisoners',
    description: 'When Keller Dover\'s daughter and her friend go missing, he takes matters into his own hands as the police pursue multiple leads and the pressure mounts.',
    releaseYear: 2013,
    genre: ['crime', 'drama', 'mystery'],
    duration: 153,
    language: 'English',
    ratingIMDB: 8.2,
    posterURL: prisoners
},
{
    id: 4,
    title: 'The Social Network',
    description: 'As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea, and by the co-founder who was later pushed out of the business.',
    releaseYear: 2010,
    genre: ['biography', 'drama'],
    duration: 120,
    language: 'English',
    ratingIMDB: 7.8,
    posterURL: socialnetwork
},
{
    id: 5,
    title: 'Pulp Fiction',
    description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    releaseYear: 1994,
    genre: ['crime', 'drama'],
    duration: 154,
    language: 'English',
    ratingIMDB: 8.9,
    posterURL: pulpfiction
},
{
    id: 6,
    title: 'Monty Python and the Holy Grail',
    description: 'King Arthur and his Knights of the Round Table embark on a surreal search for the Holy Grail, encountering many very silly obstacles.',
    releaseYear: 1975,
    genre: ['comedy', 'adventure', 'fantasy'],
    duration: 91,
    language: 'English',
    ratingIMDB: 8.2,
    posterURL: monty
},
{
    id: 7,
    title: 'Birdman or (The Unexpected Virtue of Ignorance)',
    description: 'A washed-up superhero actor attempts to revive his fading career by writing, directing, and starring in a Broadway production.',
    releaseYear: 2014,
    genre: ['comedy', 'drama'],
    duration: 119,
    language: 'English',
    ratingIMDB: 7.7,
    posterURL: birdman
},
{
    id: 8,
    title: 'Inside Llewyn Davis',
    description: 'A week in the life of a young folk singer as he navigates the Greenwich Village folk scene of 1961, struggling to achieve musical success while surviving on the couches of acquaintances and friends.',
    releaseYear: 2013,
    genre: ['drama', 'music'],
    duration: 105,
    language: 'English',
    ratingIMDB: 7.4,
    posterURL: inside
},
{
    id: 9,
    title: 'The Fall',
    description: 'In a hospital on the outskirts of 1920s Los Angeles, an injured stuntman begins to tell a captivated young girl a story of five mythical heroes. Thanks to his fractured state of mind and her vivid imagination, the line between fiction and reality blurs.',
    releaseYear: 2006,
    genre: ['adventure', 'drama', 'fantasy'],
    duration: 117,
    language: 'English',
    ratingIMDB: 7.8,
    posterURL: thefall
},
{
    id: 10,
    title: 'Se7en',
    description: 'Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.',
    releaseYear: 1995,
    genre: ['crime', 'drama', 'mystery'],
    duration: 127,
    language: 'English',
    ratingIMDB: 8.6,
    posterURL: seven
},
{
    id: 11,
    title: 'The Shawshank Redemption',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    releaseYear: 1994,
    genre: ['drama', 'crime'],
    duration: 142,
    language: 'English',
    ratingIMDB: 9.3,
    posterURL: redemption
},
{
    id: 12,
    title: 'The Godfather',
    description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    releaseYear: 1972,
    genre: ['crime', 'drama'],
    duration: 175,
    language: 'English',
    ratingIMDB: 9.2,
    posterURL: godfather
},
{
    id: 13,
    title: 'The Dark Knight',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    releaseYear: 2008,
    genre: ['action', 'crime', 'drama'],
    duration: 152,
    language: 'English',
    ratingIMDB: 9.0,
    posterURL: darkknight
},{
    id: 14,
    title: `Schindler 's List`,
    description: 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
    releaseYear: 1993,
    genre: ['biography', 'drama', 'history'],
    duration: 195,
    language: 'English',
    ratingIMDB: 9.0,
    posterURL: shhlist
},
{
    id: 15,
    title: '12 Angry Men',
    description: 'A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence in a murder trial.',
    releaseYear: 1957,
    genre: ['crime', 'drama'],
    duration: 96,
    language: 'English',
    ratingIMDB: 9.0,
    posterURL: angry
},
{
    id: 16,
    title: 'The Lord of the Rings: The Return of the King',
    description: 'Gandalf and Aragorn lead the World of Men against Sauron s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.',
    releaseYear: 2003,
    genre: ['action', 'adventure', 'fantasy'],
    duration: 201,
    language: 'English',
    ratingIMDB: 9.0,
    posterURL:rings
},
{
    id:17,
    title: 'Inception',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    releaseYear: 2010,
    genre: ['action', 'adventure', 'sci-fi'],
    duration: 148,
    language: 'English',
    ratingIMDB: 8.8,
    posterURL: inception
},
{
    id: 18,
    title: 'Fight Club',
    description: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
    releaseYear: 1999,
    genre: ['drama'],
    duration: 139,
    language: 'English',
    ratingIMDB: 8.8,
    posterURL: fight
},
{
    id: 19,
    title: 'Forrest Gump',
    description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.',
    releaseYear: 1994,
    genre: ['drama', 'romance'],
    duration: 142,
    language: 'English',
    ratingIMDB: 8.8,
    posterURL: forrest
},
{
    id: 20,
    title: 'The Good, the Bad and the Ugly',
    description: 'A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.',
    releaseYear: 1966,
    genre: ['western', 'adventure'],
    duration: 177,
    language: 'Italian',
    ratingIMDB: 8.8,
    posterURL: good
},
{
    id: 21,
    title: 'The Matrix',
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    releaseYear: 1999,
    genre: ['action', 'sci-fi'],
    duration: 136,
    language: 'English',
    ratingIMDB: 8.7,
    posterURL: matrix
},
{
    id: 22,
    title: 'Seven Samurai',
    description: 'A village of desperate farmers hire seven ronin to combat bandits who will return after the harvest to steal their crops.',
    releaseYear: 1954,
    genre: ['action', 'drama'],
    duration: 207,
    language: 'Japanese',
    ratingIMDB: 8.6,
    posterURL: sevensamurai
},
{
    id: 23,
    title: 'Goodfellas',
    description: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.',
    releaseYear: 1990,
    genre: ['biography', 'crime', 'drama'],
    duration: 146,
    language: 'English',
    ratingIMDB: 8.7,
    posterURL: goodfelllas
},
{
    id: 24,
    title: 'Parasite',
    description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
    releaseYear: 2019,
    genre: ['drama', 'thriller', 'comedy'],
    duration: 132,
    language: 'Korean',
    ratingIMDB: 8.5,
    posterURL: parasite
},
{
    id: 16,
    title: 'Interstellar',
    description: 'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.',
    releaseYear: 2014,
    genre: ['adventure', 'drama', 'sci-fi'],
    duration: 169,
    language: 'English',
    ratingIMDB: 8.7,
    posterURL: interstrelalr
},
{
    "id": 17,
    "title": "2001: A Space Odyssey",
    "description": "After discovering a mysterious artifact buried beneath the Lunar surface, mankind sets off on a quest to find its origins with the help of intelligent supercomputer H.A.L. 9000.",
    "releaseYear": 1968,
    "genre": ["adventure", "sci-fi"],
    "duration": 149,
    "language": "English",
    "ratingIMDB": 8.3,
    "posterURL": space
},
{
    "id": 18,
    "title": "The Silence of the Lambs",
    "description": "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
    "releaseYear": 1991,
    "genre": ["crime", "drama", "thriller"],
    "duration": 118,
    "language": "English",
    "ratingIMDB": 8.6,
    "posterURL": lamb
},
{
    "id": 19,
    "title": "Whiplash",
    "description": "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
    "releaseYear": 2014,
    "genre": ["drama", "music"],
    "duration": 106,
    "language": "English",
    "ratingIMDB": 8.5,
    "posterURL": whiplash
},
{
    "id": 20,
    "title": "City of God",
    "description": "In the poverty-stricken slums of Rio de Janeiro, two boys' paths diverge: one struggles to become a photographer while the other becomes a powerful and ruthless drug kingpin.",
    "releaseYear": 2002,
    "genre": ["crime", "drama"],
    "duration": 130,
    "language": "Portuguese",
    "ratingIMDB": 8.6,
    "posterURL": cityofgod
},
{
    "id": 21,
    "title": "The Truman Show",
    "description": "An insurance salesman discovers his whole life is actually a reality TV show broadcast to the entire world, where every person he knows is an actor and every moment is scripted.",
    "releaseYear": 1998,
    "genre": ["comedy", "drama", "sci-fi"],
    "duration": 103,
    "language": "English",
    "ratingIMDB": 8.2,
    "posterURL": trumanshow
},
{
    "id": 22,
    "title": "Oldboy",
    "description": "After being kidnapped and imprisoned for fifteen years, a man is released, only to find that he must track down his captor in five days to understand the reason for his suffering.",
    "releaseYear": 2003,
    "genre": ["action", "drama", "mystery"],
    "duration": 120,
    "language": "Korean",
    "ratingIMDB": 8.4,
    "posterURL": oldboy
},
{
    "id": 23,
    "title": "Blade Runner 2049",
    "description": "Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos.",
    "releaseYear": 2017,
    "genre": ["action", "drama", "sci-fi"],
    "duration": 164,
    "language": "English",
    "ratingIMDB": 8.0,
    "posterURL": bladerunner
},
{
    "id": 24,
    "title": "Memento",
    "description": "A man with short-term memory loss attempts to track down his wife's murderer, using a system of Polaroid photographs and tattoos to keep track of information he cannot remember.",
    "releaseYear": 2000,
    "genre": ["mystery", "thriller"],
    "duration": 113,
    "language": "English",
    "ratingIMDB": 8.4,
    "posterURL": memento
},
{
    "id": 25,
    "title": "Mad Max: Fury Road",
    "description": "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the help of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
    "releaseYear": 2015,
    "genre": ["action", "adventure", "sci-fi"],
    "duration": 120,
    "language": "English",
    "ratingIMDB": 8.1,
    "posterURL": madmax
},

  {
    "id": 26,
    "title": "Spirited Away",
    "description": "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits; a world where humans are changed into beasts.",
    "releaseYear": 2001,
    "genre": ["animation", "adventure", "family"],
    "duration": 125,
    "language": "Japanese",
    "ratingIMDB": 8.6,
    "posterURL": spirited
  },
  
 
  {
    "id": 27,
    "title": "The Prestige",
    "description": "After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
    "releaseYear": 2006,
    "genre": ["drama", "mystery", "sci-fi"],
    "duration": 130,
    "language": "English",
    "ratingIMDB": 8.5,
    "posterURL": prestige
  },
  {
    "id": 28,
    "title": "Django Unchained",
    "description": "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation owner in Mississippi.",
    "releaseYear": 2012,
    "genre": ["drama", "western"],
    "duration": 165,
    "language": "English",
    "ratingIMDB": 8.5,
    "posterURL":django
  },
  {
    "id": 29,
    "title": "Gladiator",
    "description": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    "releaseYear": 2000,
    "genre": ["action", "adventure", "drama"],
    "duration": 155,
    "language": "English",
    "ratingIMDB": 8.5,
    "posterURL": gladiator
  },
  {
    "id": 30,
    "title": "The Departed",
    "description": "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    "releaseYear": 2006,
    "genre": ["crime", "drama", "thriller"],
    "duration": 151,
    "language": "English",
    "ratingIMDB": 8.5,
    "posterURL": departed
  }

]


export default movies

