const  handleUpdateProfile = (event) => {
    event.preventDefault();
    const access = localStorage.getItem("access");
    
    const formData = new FormData();
    formData.append('username', document.getElementById('username').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('bio', document.getElementById('bio').value);

    fetch('https://local-artwork-showcase-api.onrender.com/api/update-profile/', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${access}`,
        },
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.status === 1) {
            console.log(data);
            alert('Profile Updated Successfully!');
            window.location.href = './profile.html';
        } else {
            console.log(data);
            alert('Failed to update profile. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred, please try again later.');
    });
}


