const baseUrl = 'https://rickandmortyapi.com/api/';
const characterList = document.getElementById('characters-list');

const GetCharacterList = async url =>{
    // fetch(`${baseUrl}${url}`).then(res => console.log(res.json()));

    //Puede ser de las dos formas, ya sea con fetch o con async

    const response = await fetch(`${baseUrl}${url}`);
    const data = await response.json();
    const {results} = data;
    //console.log(await data.results);
    const infoArray = results.map(element =>{ //map devuelve arreglos
        //console.log(element);
        const{image, url}= element;
        return {characterImg: image, characterUrl: url};
        //console.log(image);
    });

    await infoArray.forEach(element => { //forEach recorre arreglos
        const imgElement = document.createElement('img');
        imgElement.src = element.characterImg;
        imgElement.onclick = ()=> {
            localStorage.setItem('characterUrl', element.characterUrl);
            window.location.href='file:///D:/Documentos/programacion-hipermedia/app03/character.htm';
        };
        characterList.appendChild(imgElement);
    });


    //console.log(await imgArray);
}

GetCharacterList('character');