let cl = console.log;


const backDrop = document.getElementById("backDrop");
const myModal = document.getElementById("myModal");
const showModalBtn = document.getElementById("showModal");
const  myClose = [...document.querySelectorAll(".myClose")];
const addMovieBtn = document.getElementById("addMovieBtn");
const title = document.getElementById("title");
const imgUrl = document.getElementById("imgUrl");
const rating = document.getElementById("rating");
const movieContainer = document.getElementById("movieContainer")
const body = document.querySelector("body");

let movieArray = [
    {
        title:"ved",
        imgUrl:`https://external-preview.redd.it/ved-movie-download-filmyzilla-fimywap-in-hindi-480p-720p-v0-5F_RB593U1J8EE04Sa6cqeNUmFBhF1kEAshEOfo2EKo.jpg?auto=webp&s=42b433800605600ec2e8be866a5a56dbbd0d157c`,
        rating: 5
    },
    {
        title:"Avatar",
        imgUrl:`https://tse1.mm.bing.net/th?id=OIP.MrLMlX2ymgp2ZCgqXoDahgHaEo&pid=Api&P=0`,
        rating: 3,
    },
    {
        title:"Bolle",
        imgUrl:`https://i.ytimg.com/vi/Z5os4ErwOo8/maxresdefault.jpg`,
        rating: 4,
    }
];


// const showModalHandler = (e) => {
//     myModal.classList.add('show');
//     backDrop.classList.add('show');
// }

// const hideModalHandler = (e) => {
//     myModal.classList.remove('show');
//     backDrop.classList.remove('show');
// }

// let result ='';
// movieArray.forEach(movie =>{
//     result +=`
//     <div class="col-sm-4">
//     <div class="card mymovie">
//         <div class="card-header text-center"> ${movie.title} </div>
//         <div class="card-body">
//             <figure>
//                 <img class="img" src="${movie.imgUrl}" alt="${movie.title}" title="${movie.title}">
//             </figure>
//         </div>
//         <div class="card-footer text-right"> ${movie.rating}</div>
//     </div>
// </div>
//     `
// })


const templating = (arr) => {
    let result = '';
    arr.forEach(movie =>{
        result +=`
         <div class="col-sm-4">
         <div class="card mymovie mb-4">
                <div class="card-header text-center"> ${movie.title} </div>
                <div class="card-body">
                <figure>
                    <img class="img" src="${movie.imgUrl}" alt="${movie.title}" title="${movie.title}">
                </figure>
                </div>
                <div class="card-footer text-right">
                    <strong>
                         ${movie.rating} / 5
                    </strong>
                </div>
         </div>
         </div>  
        `
    })
    movieContainer.innerHTML = result;

 }

 templating(movieArray);

const toggleModalHandler = (e) => {
    myModal.classList.toggle('show');
    backDrop.classList.toggle('show');
}

const onMovieAddHandler = (e) => {
    // alert("Movie Added")
    let obj = {
        title: title.value,
        imgUrl: imgUrl.value,
        rating: rating.value
    }
    movieArray.unshift(obj);
    title.value = '';
    imgUrl.value = '';
    rating.value = '';
    cl(movieArray);
    toggleModalHandler();
    templating(movieArray);
}

const onMouseMove = (eve) => {
    eve.target.style.backgroundColor = `rgb(255,${eve.offsetX}, ${eve.offsetY})`;
}

showModalBtn.addEventListener("click",toggleModalHandler)
myClose.forEach(ele => ele.addEventListener("click", toggleModalHandler));
backDrop.addEventListener("click", toggleModalHandler)
addMovieBtn.addEventListener("click", onMovieAddHandler)
body.addEventListener("mousemove", onMouseMove)
