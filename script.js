console.log("This is a cv screener project");
// data array object which contains condidate information
const data = [
    {
        name: 'shashikant yadav',
        age: 21,
        city: 'Hyderabad',
        language: 'English , hindi',
        skill: 'Html, javascipt, css, node js',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },



    {
        name: 'umakant yadav',
        age: 25,
        city: 'Hyderabad',
        language  : 'English , hindi',
        skill: 'Html, javascipt',
        image: 'https://randomuser.me/api/portraits/men/76.jpg'
    },


    {
        name: 'satish yadav',
        age: 18,
        city: 'Hyderabad',
        language: 'English , hindi',
        skill: 'Naughty',
        image: 'https://randomuser.me/api/portraits/men/77.jpg'
    },
]


//cvIterator
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    }

}
// Button listerner event add on the next button
next = document.getElementById('next');
next, addEventListener('click', nextCv);
const candidates = cvIterator(data);
function nextCv() {
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined) {
    image.innerHTML = `<img src = '$ {currentCandidate.image}' >`
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">name: ${currentCandidate.name}</li>
    <li class="list-group-item"> ${currentCandidate.age} year old</li>
    <li class="list-group-item"> Lives on ${currentCandidate.city}</li>
    <li class="list-group-item">Proficieny in ${currentCandidate.language} </li>
    <li class="list-group-item">Expert in ${currentCandidate.skill}</li>
  </ul>`;
    }
    else{
        alert('end of the applications');
        window.location.reload();
    }
}