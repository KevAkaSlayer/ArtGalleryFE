
const handleProfile = () => {
    const access = localStorage.getItem("access");
    fetch('https://local-artwork-showcase-api.onrender.com/api/profile/', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${access}`,
        },
    })
        .then((res) => res.json())
        .then((data) => {
            console.log('inside data');
            console.log(data);
            if(data.status === 1){
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
                        <div>
                        <button type="submit" class="bg-[#42A9D0] w-30 mx-auto rounded text-white px-[4px] py-[2px] mt-6 hover:cursor-pointer hover:opacity-90"> <a href="./createartwork.html">CreateNew</a></button>
                        <button type="submit" class="bg-[#42A9D0] w-40 mx-auto rounded text-white px-[6px] py-[2px] mt-6 hover:cursor-pointer hover:opacity-90"> <a href="./updateprofile.html">ProfileUpdate</a></button>
                    </div>
                       
                        </div>
                    `;
                parent.appendChild(div);
                
            }
            else {
                console.log('error');
                alert('Please login to view profile');
                window.location.href = `./login.html`;

            }
        })


};

handleProfile();

