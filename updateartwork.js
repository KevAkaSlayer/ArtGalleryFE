const  handleUpdate = (event) => {
    event.preventDefault();
    const id = new URLSearchParams(window.location.search).get("id");
    const access = localStorage.getItem("access");
    
    const formData = new FormData();
    formData.append('title', document.getElementById('title').value);
    formData.append('description', document.getElementById('description').value);

    fetch(`https://local-artwork-showcase-api.onrender.com/api/update-artwork/?id=${id}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${access}`,
        },
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 1) {

            console.log(data);
            alert('Artwork Updated Successfully!');
            window.location.href = './index.html';
        } else {
            console.log(data);
            alert('Failed to Update artwork');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred, please try again later.');
    });
}


