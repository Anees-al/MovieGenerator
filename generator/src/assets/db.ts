
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
}

]


export default movies

