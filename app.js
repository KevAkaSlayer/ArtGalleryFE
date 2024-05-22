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



//   const loadArtists = (search) => {
//     document.getElementById("artists").innerHTML = "";
//     fetch(
//       `https://wellness-oasis-clinic-api.onrender.com/doctors/list/?search=${search ? search : ""
//       }`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         displayDoctors(data);
//       });
//   };
//   const displayDoctors = (doctors) => {
//     doctors?.forEach((doctor) => {
//       const parent = document.getElementById("doctors");
//       const div = document.createElement("div");
//       div.classList.add("doc-card");
//       div.classList = "border rounded-md";
//       div.innerHTML = `
//           <img class="doc-img rounded-t-md" src=${doctor.image} alt="" />
//               <div class="px-2 py-1 flex flex-col items-start justify-start space-y-2">
//               <h4 class="font-semibold text-lg mt-4">${doctor?.user}</h4>
//               <div class="flex flex-row items-start justify-start gap-1">
//               <p class="bg-gray-300 px-[3px] py-[2px] text-xs w-fit rounded">
//               ${doctor?.designation[0]}
//               </p>
//               <p class="bg-gray-300 px-[3px] py-[2px] text-xs w-fit rounded">
              
//               ${doctor?.specialization?.map((item) => {
//         return `<button>${item}</button>`;
//       })}
//               </p>
//               </div>
//               <p class="text-xs pb-5">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
//                 numquam!
//               </p>
             
              
  
//               <button class="bg-[#42A9D0] px-[5px] py-[3px] text-white rounded-md"> <a target="_blank" href="docdetails.html?doctorId=${doctor.id
//         }">Details</a> </button>
//               </div>
//           `;
  
//       parent.appendChild(div);
//     });
//   };













  loadArtwork();