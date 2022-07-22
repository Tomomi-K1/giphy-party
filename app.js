console.log("Let's get this party started!");

// Allow the user to search for a GIF and when the form is submitted, make an AJAX request to the Giphy API and return a single GIF
// Once the Giphy API has responded with data, append the GIF to the page
// Allow the user to search for as many GIFs as they would like and keep appending them to the page
// Allow the user to remove all of the GIFs by clicking a button


const searchBtn = document.querySelector('#searchBtn');
const input = document.querySelector('#searchTerm');
const imageArea = document.querySelector('#gif');
const removeBtn = document.querySelector('#remove');
const apiKey = '1dPiG58K2PcUMJDxOSdVtquEGRwRLDrI'; //it's better to save api keys in variable so url in get request is more understandable
let NumOfGifJsonData = 30; // it's better to put random number in variable so that you know what that number does.

async function getGifUrl(searchTerm){
    const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=${NumOfGifJsonData}&offset=0&rating=g&lang=en`);
    console.log("res",res);
    const randomNum = Math.floor(Math.random()*NumOfGifJsonData);
    let gifUrl=res.data.data[randomNum].images.original.webp;
    
    createImgElemAndAppendGifToImageArea(gifUrl);
}

//this function will accept url from getGifUrl function
function createImgElemAndAppendGifToImageArea(gifUrl){
    const newElem = document.createElement('img');
    newElem.src = gifUrl;
    imageArea.append(newElem);
}

//click search button and gif will appear.
searchBtn.addEventListener('click', function(e){
    e.preventDefault();
    getGifUrl(input.value);
    input.value ='';
    // console.log(input.value)
    
})

//add eventlistner to remove all button to clear all images
removeBtn.addEventListener('click', function(e){
    e.preventDefault();
    const allImgs = document.querySelectorAll('img');
    for(let img of allImgs){
        img.remove();
    }
})


