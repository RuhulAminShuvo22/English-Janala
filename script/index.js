const loadLessons =() => {
    fetch("https://openapi.programming-hero.com/api/levels/all") // promise of response
    .then((res) => res.json()) // promise of json data
    .then((json) => displayLesson(json.data))
};

const loadLevelWord = (id)=>{
   // console.log(id);
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    //console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displayLevelWord(data.data))
};

const displayLevelWord =(words)=>{
    //console.log(words);
    const wordContainer= document.getElementById('word-container');
    //wordContainer.innerHTML = "";

    words.forEach(word =>{
        console.log(word);
        const card= document.createElement('div');
        card.innerHTML = `
        <p>cat</p>
        
        `;
        wordContainer.append(card)
    })

}

const displayLesson = (lessons) =>{
    //console.log(lessons);
    //1. get the container & empty
    const levelContsiner = document.getElementById('level-contsiner')
    levelContsiner.innerHTML = "";

    //2. get into every lessons
    for( let lesson of lessons){
        //3. create element

        console.log(lesson)
        const btnDiv = document.createElement('div')
        btnDiv.innerHTML = `
            <button onclick="loadLevelWord(${lesson.level_no})"  class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i> Lesson -${lesson.level_no} </button>
        
        `;
        // 4. append into container
        levelContsiner.append(btnDiv)            

    };
        
        

}
loadLessons();