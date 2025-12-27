
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
}
]


export default movies

