

 const users = [
  { name: "Shah Rukh Khan", role: "Frontend Developer", img: "./image/shah_rukh.png", about: "Passionate about building modern web apps." },
  { name: "Virat Kohli", role: "Full Stack Developer", img: "./image/virat.png", about: "Loves working with Node.js and databases." },
  { name: "Priyanka Chopra", role: "UI/UX Designer", img: "./image/priyanka.png", about: "Designs clean and user-friendly interfaces." },
  { name: "Ranbir Kapoor", role: "Backend Developer", img: "./image/ranbir.png", about: "Expert in APIs and databases." },
  { name: "Deepika Padukone", role: "Data Scientist", img: "./image/deepika.png", about: "Loves data analysis and ML models." },
  { name: "Akshay Kumar", role: "Mobile Developer", img: "./image/akshay.png", about: "Creates Android & iOS apps." },
  { name: "Alia Bhatt", role: "DevOps Engineer", img: "./image/alia.png", about: "Works on CI/CD and cloud infra." },
  { name: "Amitabh Bachchan", role: "Cybersecurity Expert", img: "./image/amitabh.png", about: "Focuses on security and networks." },
  { name: "Katrina Kaif", role: "AI Engineer", img: "./image/katrina.png", about: "Interested in deep learning projects." },
  { name: "Salman Khan", role: "Software Engineer", img: "./image/salman.png", about: "Enjoys problem-solving & coding." }
];


     const container = document.getElementById("container");

    function showusers(arr){
        container.innerHTML = "";

       
        arr.forEach(function(user){

            const card = document.createElement("div");
        card.classList.add("bg-white","rounded-xl","shadow-md","p-6","text-center","hover:shadow-xl","transition");

        const img = document.createElement("img");
        img.src = user.img;
        img.classList.add("w-24","h-24","rounded-full","mx-auto","mb-4");

      


        const h2 = document.createElement("h2");
        h2.textContent = user.name;
        h2.classList.add("text-lg","font-bold","text-gray-800");

        const p = document.createElement("p");
        p.textContent = user.role;
        p.classList.add("text-blue-600","font-medium","mb-2");

        const p1 = document.createElement("p");
        p1.textContent = user.about;
        p1.classList.add("text-gray-600","text-sm");

        card.appendChild(img);
       
        card.appendChild(h2);
        card.appendChild(p);
        card.appendChild(p1);
      container.appendChild(card)
        });
    }

    showusers(users);

    let inp=document.querySelector("#searchInput");

    inp.addEventListener("input",function(){
         let query = inp.value.toLowerCase();
       let newuser=users.filter((user)=>{
             return user.name.toLowerCase().startsWith(query);
       })

         if (newuser.length === 0) {
    container.textContent = "No User Found 😔";
    container.classList.add("text-center", "text-red-500", "font-semibold", "mt-6","absolute","left-1/2");
    return;
  }
       showusers(newuser);
    })


    // saare ke saare user show krna 
    //filtre krna hr bar input krne pr
    //show krna filtre user

