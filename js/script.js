
function likeClick(i) {
    likeIcon[i].classList.add(`like-button--liked`)

    likeButtonLabel[i].classList.add(`like-button--liked`)

    let like = post[i].numberLike + 1

    return like
}



const container = document.getElementById(`container`)

const post = [
    {
        id: 1,
        userName: `Mauro Angelotti`,
        imageProfile: `https://unsplash.it/300/300?image=15`,
        date: `07/06/2022`,
        textPost: `Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint
        voluptate recusandae architecto. Et nihil ullam aut alias.`,
        imagePost: `http://www.isalei.it/mag/wp-content/uploads/2017/02/Monte-Fuji.jpg`,
        numberLike: 99,
    },
    {
        id: 2,
        userName: `Francesco Amadori`,
        imageProfile: `https://unsplash.it/300/300?image=15`,
        date: `07/05/2022`,
        textPost: `Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint
        voluptate recusandae architecto. Et nihil ullam aut alias.`,
        imagePost: `https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/tower-bridge/thames_copyright_visitlondon_antoinebuchet640x360.jpg?mw=640&hash=27AEBE2D1B7279A196CC1B4548638A9679BE107A`,
        numberLike: 107,
    },
    {
        id: 3,
        userName: `Luce Rossi`,
        imageProfile: `https://unsplash.it/300/300?image=15`,
        date: `07/04/2022`,
        textPost: `Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint
        voluptate recusandae architecto. Et nihil ullam aut alias.`,
        imagePost: `https://media.timeout.com/images/105211701/750/422/image.jpg`,
        numberLike: 78,
    },
]

let social = ``

for (let i = 0; i < post.length; i++) {
    social += ` <div class="post">
    <div class="post__header">
    <div class="post-meta">
    <div class="post-meta__icon">
    <img class="profile-pic" src="${post[i].imageProfile}" alt="Phil Mangione" />
    </div>
    <div class="post-meta__data">
    <div class="post-meta__author">${post[i].userName}</div>
    <div class="post-meta__time">${post[i].date}</div>
    </div>
    </div>
    </div>
    <div class="post__text">
    ${post[i].textPost}
    </div>
    <div class="post__image">
    <img src="${post[i].imagePost}" alt="" />
    </div>
    <div class="post__footer">
    <div class="likes js-likes">
    <div class="likes__cta">
    <a class="like-button js-like-button" data-postid="${post[i].id}">
    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
    <span class="like-button__label">Mi Piace</span>
    </a>
    </div>
    <div class="likes__counter">Piace a <b id="like-counter-${post[i].id}" class="js-likes-counter">${post[i].numberLike}</b> persone</div>
    </div>
    </div>
    </div>`

}
container.innerHTML = social


const likeButton = document.querySelectorAll(`.likes__cta`)

console.log(likeButton)

const likeIcon = document.querySelectorAll(`.like-button__icon`)

const likeButtonLabel = document.querySelectorAll(`.like-button__label`)

const numberLike = document.querySelectorAll(`.js-likes-counter`)


for (let i = 0; i < likeButton.length; i++) {
    likeButton[i].addEventListener(`click`, function () {

        const like = likeClick(i)
        numberLike[i].innerHTML = likeClick(i)
    })
}





