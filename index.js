class search {
    constructor(submitID) {
        document.getElementById(submitID).addEventListener("click", this.getUserAsync)


    }
      
    async  getUserAsync() {
        let name = document.querySelector("#name").value
        let response = await fetch(`https://api.github.com/users/${name}/repos`);
        let data = await response.json()
        var ul = document.querySelector(".ul")
        console.log(data)
        for (var x of data){
            var list = `
            <li>
                ${x.name}
                ${x.description}
                ${x.created_at}
            </li>`
            ul.insertAdjacentHTML('Afterend',list)
        }
        return data;
    }



}

new search("button")

/**
 * - nun noch beschreibung und zeit hinzufügen. 
 * 
 *
 *
 */