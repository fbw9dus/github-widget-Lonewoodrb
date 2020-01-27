class search {
    constructor(submitID) {
        document.getElementById(submitID).addEventListener("click", this.getUserAsync)


    }
      
    async  getUserAsync() {
        let name = document.querySelector("#name").value
        let response = await fetch(`https://api.github.com/users/${name}/repos`);
        let data = await response.json()
        var ul = document.querySelector(".ul")
        ul.innerHTML=""
        console.log(data)
        for (var x of data){
            let date = new Date(x.created_at)
            var list = `
            <li>
                ${x.name}
                ${x.description}
                ${date.getDay()}
                ${date.getMonth()}
                ${date.getFullYear()}

            </li>`
            ul.insertAdjacentHTML('BeforeEnd',list)
        }
        return data;
    }



}

new search("button")

/**
 * - Zeitumschreibung
 * 
 *
 *
 */