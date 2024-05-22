
const handleProfile = (Artist) => {
    const access = localStorage.getItem("access");
    fetch('http://127.0.0.1:8000/api/profile/', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${access}`,
        },
    })
        .then((res) => res.json())
        .then((data) => {
            console.log('inside data');
            console.log(data);
            {
                const parent = document.getElementById("profile-container");
                const div = document.createElement("div");
                div.classList.add("profile-card");
                div.classList = "border rounded-md";
                div.innerHTML = `
                   <img src="data.profile_pic" alt="artwork" class="w-full h-40 object-cover rounded-md" />
                   <div class="px-2 py-1 flex flex-col items-start justify-start space-y-2">
                  <h3 class="text-lg font-semibold">${data.username}</h3>
                        <p class="text-sm pt-2">
                         ${data.bio}
                        </p>
                       
                        </div>
                    `;
                parent.appendChild(div);
                
            }
        })


};

handleProfile();

