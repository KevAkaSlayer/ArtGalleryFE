const loadArtwork = () => {
    fetch("https://local-artwork-showcase-api.onrender.com/api/artwork-list/")
      .then((res) => res.json())
      .then((data) => displayArtwork(data));
  };
  
  const displayArtwork = (artworks) => {
    artworks.forEach((artwork) => {
      const parent = document.getElementById("artwork-container");
      const div = document.createElement("div");
      div.classList.add("artwork-card");
      div.classList = "border rounded-md";
      div.innerHTML = `
         <img src="${artwork.image}" alt="artwork" class="w-full h-40 object-cover rounded-md" />
         <div class="px-2 py-1 flex flex-col items-start justify-start space-y-2">
        <h3 class="text-lg font-semibold">${artwork.title}</h3>
              <p class="text-sm pt-2">
               ${artwork.description.slice(0, 100)}
              </p>
              <button class="bg-[#42A9D0] px-[5px] py-[3px] text-white rounded-md"> <a target="_blank" href="artworkdetails.html">Details</a> </button>
              </div>
          `;
      parent.appendChild(div);
    });
  };



const getId = () => {
  const id = new URLSearchParams(window.location.search).get("id");
  fetch(`https://local-artwork-showcase-api.onrender.com/api/artwork-list/$?id=${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      displayDetails(data);
    });
  };


const displayDetails = (Artwork) => {
    const parent = document.getElementById("artworkdetails-container");
    const div = document.createElement("div");
    div.classList =
      "flex flex-row items-center justify-center gap-10 border w-fit mx-auto rounded-md px-8 py-3";
  
    div.innerHTML = `
      <div>
      <img class="rounded-full w-[210px] h-[210px] border" src=${
        Artwork.image
      } alt="" />
    </div>
    <div class=""> 
      <h1 class="text-2xl font-semibold text-[#42A9D0]">${Artwork.title} </h1>
      <p class="max-w-[350px] text-sm my-2">
      ${Artwork.description.slice(0, 100)}
      </p>
    </div>
      `;
    parent.appendChild(div);
  };












  getId();
  loadArtwork();