const apiCats = 'https://api.pexels.com/v1/search?query=cats'
const apiCats2 = 'https://api.pexels.com/v1/search/?page=2&per_page=15&query=cats'
const apiDogs = 'https://api.pexels.com/v1/search?query=dogs'
const apiDogs2 = 'https://api.pexels.com/v1/search/?page=2&per_page=15&query=Dogs'
const btnLoadCats = document.querySelector('.btnCats')
const btnNext = document.querySelector('.btnNextCats')
const btnLoadDogs = document.querySelector('.btnDogs')
const btnNextDog = document.querySelector('.btnNextDogs')
const apiContainer = document.querySelector('.apiCont')

const options = {
    headers:{
        Authorization:'9GMB1Qd7QIADdCmxxFdSh8jPIZGdUpWt0iKU1WWOY5oixWzVYqflnlPA'
    }
};

fetcher(apiCats, options)
fetcher3(apiDogs, options)


async function fetcher(url, option) {
    const response = await fetch(url, option)
    const data = await response.json()
    console.log(data)
    const cats = data.photos
    const catsPage2 = data.next_page
    console.log(cats)
    btnLoadCats.addEventListener('click',() =>{
            let eleApiCont = ''
            cats.forEach(cat => {
                eleApiCont += `
                <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                <img src=${cat.src.original} alt="">
                  <div class="card-body">
                    <h5 class="card-title">${cat.alt}</h5>
                    <p class="card-text">
                        Photographer: ${cat.photographer}
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">
                          View
                        </button>
                        <button type="button" class="btn btn-sm btn-outline-secondary btnHide">
                          HIDE
                        </button>
                      </div>
                      <small class="text-muted">${cat.id}</small>
                    </div>
                  </div>
                </div>
              </div>`
            });
            apiContainer.innerHTML = eleApiCont
            const btnHide = document.querySelectorAll('.btnHide')
            btnHide.forEach(bottone =>{
                bottone.addEventListener('click', function(){
                    this.closest('.col-md-4').remove()
                })
            })
        })
        fetcher2(catsPage2, options)
        async function fetcher2(url, option) {
        const response = await fetch(url, option)
        const data = await response.json()
        const cats2 = data.photos
        console.log(cats2)
        btnNext.addEventListener('click', () => {
            apiContainer.innerHTML= ''
            let eleApiCont = ''
            cats2.forEach(cat => {
                eleApiCont += `
                <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                <img src=${cat.src.original} alt="">
                  <div class="card-body">
                    <h5 class="card-title">${cat.alt}</h5>
                    <p class="card-text">
                        Photographer: ${cat.photographer}
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">
                          View
                        </button>
                        <button type="button" class="btn btn-sm btn-outline-secondary btnHide">
                          HIDE
                        </button>
                      </div>
                      <small class="text-muted">${cat.id}</small>
                    </div>
                  </div>
                </div>
              </div>`
            });
            apiContainer.innerHTML = eleApiCont

            const btnHide = document.querySelectorAll('.btnHide')
            btnHide.forEach((bottone) =>{
                bottone.addEventListener('click', function(){
                    this.closest('.col-md-4').remove()
                })
            })
            })
    }

}
async function fetcher3(url, option) {
    const response = await fetch(url, option)
    const data = await response.json()
    console.log(data)
    const dogs = data.photos
    const dogsPage2 = data.next_page
    console.log(dogs)
    btnLoadDogs.addEventListener('click',() =>{
            let eleApiCont = ''
            dogs.forEach(dog => {
                eleApiCont += `
                <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                <img src=${dog.src.original} alt="">
                  <div class="card-body">
                    <h5 class="card-title">${dog.alt}</h5>
                    <p class="card-text">
                        Photographer: ${dog.photographer}
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">
                          View
                        </button>
                        <button type="button" class="btn btn-sm btn-outline-secondary btnHide">
                          HIDE
                        </button>
                      </div>
                      <small class="text-muted">${dog.id}</small>
                    </div>
                  </div>
                </div>
              </div>`
            });
            apiContainer.innerHTML = eleApiCont
            const btnHide = document.querySelectorAll('.btnHide')
            btnHide.forEach(bottone =>{
                bottone.addEventListener('click', function(){
                    this.closest('.col-md-4').remove()
                })
            })
        })
        fetcher2(dogsPage2, options)
        async function fetcher2(url, option) {
        const response = await fetch(url, option)
        const data = await response.json()
        const dogs2 = data.photos
        console.log(dogs2)
        btnNextDog.addEventListener('click', () => {
            apiContainer.innerHTML= ''
            let eleApiCont = ''
            dogs2.forEach(dog => {
                eleApiCont += `
                <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                <img src=${dog.src.original} alt="">
                  <div class="card-body">
                    <h5 class="card-title">${dog.alt}</h5>
                    <p class="card-text">
                        Photographer: ${dog.photographer}
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">
                          View
                        </button>
                        <button type="button" class="btn btn-sm btn-outline-secondary btnHide">
                          HIDE
                        </button>
                      </div>
                      <small class="text-muted">${dog.id}</small>
                    </div>
                  </div>
                </div>
              </div>`
            });
            apiContainer.innerHTML = eleApiCont

            const btnHide = document.querySelectorAll('.btnHide')
            btnHide.forEach((bottone) =>{
                bottone.addEventListener('click', function(){
                    this.closest('.col-md-4').remove()
                })
            })
            })
    }

}


