const loadArtwork = () => {
    fetch("https://local-artwork-showcase-api.onrender.com/api/artwork-list/",{
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const artworks = data.artworks;
        artworks.forEach((art) => {
          const id = art.id;
          console.log(art.id);
          const parent = document.getElementById("artwork-container");
          const div = document.createElement("div");
          div.classList.add("artwork-card");
          div.classList = "border rounded-md";
          div.innerHTML = `
             <img src="${art.image}" alt="artwork" class="w-full h-40 object-cover rounded-md" />
             <div class="px-2 py-1 flex flex-col items-start justify-start space-y-2">
            <h3 class="text-lg font-semibold">${art.title}</h3>
                  <p class="text-sm pt-2">
                   ${art.description.slice(0, 100)}
                  </p>
                  <button class="bg-[#42A9D0] px-[5px] py-[3px] text-white rounded-md"> <a target="_blank" href="./artworkdetails.html?id=${id}">Details</a> </button> 
                  </div>
              `;
          parent.appendChild(div);

      });
  });
};

  loadArtwork();
  // const displayArtwork = (artwork) => {
    // artwork.forEach((art) => {
    //   const id = artwork.id;
    //   console.log(artwork.id);
    //   const parent = document.getElementById("artwork-container");
    //   const div = document.createElement("div");
    //   div.classList.add("artwork-card");
    //   div.classList = "border rounded-md";
    //   div.innerHTML = `
    //      <img src="${art.image}" alt="artwork" class="w-full h-40 object-cover rounded-md" />
    //      <div class="px-2 py-1 flex flex-col items-start justify-start space-y-2">
    //     <h3 class="text-lg font-semibold">${art.title}</h3>
    //           <p class="text-sm pt-2">
    //            ${art.description.slice(0, 100)}
    //           </p>
    //           <button class="bg-[#42A9D0] px-[5px] py-[3px] text-white rounded-md"> <a target="_blank" href="./artworkdetails.html?id=${id}">Details</a> </button> 
    //           </div>
    //       `;
      // parent.appendChild(div);
  //   });
  // };







  
 
