const displayDetails = () => {
    const id = new URLSearchParams(window.location.search).get("id");
    fetch(`https://local-artwork-showcase-api.onrender.com/api/artwork-list/?id=${id}`,{
      method: "GET",
      headers: { "content-type": "application/json" },
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const element=data.artwork[0];
        const title = element.title;
        const description = element.description;
        const img = element.product_picture;
        const id = element.id;
        console.log(id);
        const parent = document.getElementById("artworkdetails-container");
        const div = document.createElement("div");
        div.innerHTML=`
              
        <div class="card">
        <img src="${img}" class="card-img-top" alt="artwork_image"   style="width: 100%; height: 450px;">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${description}</p>
            </div>
            <button type="submit" class="bg-[#42A9D0] w-20 mx-auto rounded text-white px-[4px] py-[2px] mt-6 hover:cursor-pointer hover:opacity-90"> <a href="./updateartwork.html">update</a></button>
            <button type="submit" class="bg-[#e74545] w-20 mx-auto rounded text-white px-[4px] py-[2px] mt-6 hover:cursor-pointer hover:opacity-90"> <a onclick="handleDeletion(id)">delete</a></button>
            
        </div>
        `;
        parent.appendChild(div);
  
      });
    };

    displayDetails();