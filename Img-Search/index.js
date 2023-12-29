
const searchValue = document.getElementById("inputValue");
const btn = document.getElementById("btn");
const more_btn = document.getElementById("more-btn");
const results_img = document.getElementById("result");

let keyword ="";
let page = 1;

const getImg =async ()=>{
    keyword = searchValue.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=lrsQCQ6rPXwyv23mUDpW9QOyaOjqLD1b5bb_Qtt3jQE&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();
/*     console.log(data.results.urls.small);
 */
    const result = data.results;

    if(page===1){
        results_img.innerHTML="";
    }

    result.map((value)=>{
        const img = document.createElement("img");
        img.src =value.urls.small;
        const img_Link = document.createElement("a");
        img_Link.href=value.links.html;
        img_Link.target ="_blank";

        img_Link.appendChild(img);

        results_img.appendChild(img_Link);

    });

    more_btn.style.display="flex";
    
};

btn.addEventListener("click", ()=>{
    page =1;
    getImg()
   
});

more_btn.addEventListener("click",()=>{
    page +=1;
    getImg();
});