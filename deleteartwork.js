const handleDeletion = (id) => {
    const access = localStorage.getItem("access");
    fetch(`https://local-artwork-showcase-api.onrender.com/api/delete-artwork/?id=${id}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${access}`,
        },
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert('Artwork Deleted Successfully!');
        window.location.href = './index.html';
      })
      .catch(error => {
        alert('An error occurred, please try again later.');
        window.location.href = './artworkdetails.html';
        console.error('Error fetching data:', error);
      });
  }