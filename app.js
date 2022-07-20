console.log("Let's get this party started!");

// Allow the user to search for a GIF and when the form is submitted, make an AJAX request to the Giphy API and return a single GIF
// Once the Giphy API has responded with data, append the GIF to the page
// Allow the user to search for as many GIFs as they would like and keep appending them to the page
// Allow the user to remove all of the GIFs by clicking a button

// data.bitly_gif_url

// API Key// 1dPiG58K2PcUMJDxOSdVtquEGRwRLDrI

const searchBtn = document.querySelector('#searchBtn');
const input = document.querySelector('#searchTerm');
const imageArea = document.querySelector('#gif');
const removeBtn = document.querySelector('#remove');

searchBtn.addEventListener('click', function(e){
    e.preventDefault();
    getGif(input.value);
    input.value ='';
    // console.log(input.value)
    
})

async function getGif(searchTerm){
    const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=1dPiG58K2PcUMJDxOSdVtquEGRwRLDrI&q=${searchTerm}&limit=30&offset=0&rating=g&lang=en`);
    console.log("res",res);
    const randomNum = Math.floor(Math.random()*30)
    console.log("randomNum", randomNum);
    const newImg = document.createElement('img');
    newImg.src = res.data.data[randomNum].images.original.webp;
    imageArea.append(newImg);
    // console.log(res.data.data[0].url)
}

removeBtn.addEventListener('click', function(e){
    e.preventDefault();
    const allImgs = document.querySelectorAll('img');
    for(let img of allImgs){
        img.remove();
    }
})






