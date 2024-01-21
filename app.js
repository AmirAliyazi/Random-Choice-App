

const textarea = document.querySelector("#textarea");
const tagChoices = document.querySelector("#tags");



textarea.addEventListener("keyup" , (e) => {
    createTags(e.target.value)

    if (e.key === 'Enter'){
        setTimeout(() => {
            e.target.value = ""
        },10)
        randomSelect()
    }
})


function createTags(input){
    const tags = input.split(",").filter(tag => tag.trim() !== "")
        .map(tag => tag.trim());

    tagChoices.innerHTML = ""

    tags.forEach(tag => {
        const t = document.createElement("span");
        t.classList.add("tag");
        t.innerText = tag;
        tagChoices.append(t);
    })
}

function randomSelect(){
    const times = 30;
    const int = 100

    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        highLightTag(randomTag);

        setTimeout(() => {
            unHighLightTag(randomTag)
        },int);
    },int);

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();

            highLightTag(randomTag);
        },int)
    },int * times)
}

function pickRandomTag(){
    const tags = document.querySelectorAll(".tag");
    return tags[Math.floor(Math.random() * tags.length)]
}

function highLightTag(tagRa){
    tagRa.classList.add('highlight')
}

function unHighLightTag(tagRa){
    tagRa.classList.remove('highlight')
}
