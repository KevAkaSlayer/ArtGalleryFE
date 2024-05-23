const getValue = (id) => {
    const value = document.getElementById(id).value;
    return value;
  };
const handleRegistration = (event) => {
    event.preventDefault();
    const username = getValue("username");
    const email = getValue("email");
    const password = getValue("password");
    const password2 = getValue("confirm_password");
    const bio = getValue("bio");

    const info = {
      username,
      email,
      password,
      password2,
      bio,
      
    };
    console.log(JSON.stringify(info));

    fetch('https://local-artwork-showcase-api.onrender.com/api/register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(info),
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        if (data.status === 1) {
          alert('Registration successful');
          window.location.href = `./login.html`;
        }
        else{
          alert('Registration failed');
         window.location.href = `./register.html`;
      }
    })
    .catch((err) => {
        console.log('inside err');
        console.log(err);
    });
};

const handleLogin = (event) => {
  event.preventDefault();
  const username = getValue("login-username");
  const password = getValue("login-password");

  const info = {
    username,
    password,
};

  console.log(JSON.stringify(info));

  fetch("https://local-artwork-showcase-api.onrender.com/api/login/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(info),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("inside data");
      console.log(data);
      if (data.status === 1) {
        console.log("Login successful");
        localStorage.setItem("user_id", data.user_id);
        localStorage.setItem("refresh", data.refresh);
        localStorage.setItem("access", data.access);
        localStorage.setItem("username", data.username);
        window.location.href = `./index.html`;
        alert("Login successful");
      } else {
        console.log("Login failed");
        alert("Login failed");
      }
    })
    .catch((err) => {
      console.log("inside err");
      console.log(err);
    });
};




const handleLogout = () => {
  const refresh_token = localStorage.getItem("refresh");
  console.log(refresh_token);
 
 const info = {
     refresh_token
 };

  console.log(JSON.stringify(info));
 fetch('https://local-artwork-showcase-api.onrender.com/api/logout/', {
     method: 'POST',
             headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify(info),  
 })
 .then((res) => res.json())
 .then((data) => {
     console.log(data);
         
     })
         .catch((err) => {  
         });
        localStorage.clear();
        alert('You have been logged out');
        window.location.href=`./login.html`;
        
};

