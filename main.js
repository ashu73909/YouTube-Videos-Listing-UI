const btnref=document.getElementById('btn');
const videoCard=document.getElementById('vid-cont');

btnref.addEventListener('click',async ()=>{
    const response=await fetch('https://api.freeapi.app/api/v1/public/youtube/videos',{
        method:'GET'
    });
    const recvData=await response.json();
    const dlist=recvData.data.data;
    videoCard.innerHTML='';//for deleting duplicate data, duplicate handling
    dlist.forEach((element) => {
        //videoCard.innerHTML =``; replaces the whole vid-cont with current innerHTML data , => videoCard.innerHTML+=``; adds multiple inner html one by one 
        videoCard.innerHTML+=`
        <div class="video-card">
            <div class="img-cont">
                <img src="${element.items.snippet.thumbnails.medium.url}" alt="">
            </div>
            <div class="item-list">
                <h3><strong>${element.items.snippet.title}</strong></h3>
                <h4 style="opacity:0.9;">${element.items.snippet.channelTitle}</h4>
                <p style="opacity:0.4;">${element.items.snippet.description}</p>
            </div>
            <div class="tags">
                ## ${element.items.snippet.tags}
            </div>
        </div>
        `;
    });
});