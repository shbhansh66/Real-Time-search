

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
  { name: "Salman Khan", role: "Software Engineer", img: "./image/salman.png", about: "Enjoys problem-solving & coding." },
  { name: "Shah Rukh Khan", role: "Frontend Developer", img: "./image/shah_rukh.png", about: "Passionate about building modern web apps." },
  { name: "Virat Kohli", role: "Full Stack Developer", img: "./image/virat.png", about: "Loves working with Node.js and databases." },
  { name: "Priyanka Chopra", role: "UI/UX Designer", img: "./image/priyanka.png", about: "Designs clean and user-friendly interfaces." },
  { name: "Ranbir Kapoor", role: "Backend Developer", img: "./image/ranbir.png", about: "Expert in APIs and databases." },
  { name: "Deepika Padukone", role: "Data Scientist", img: "./image/deepika.png", about: "Loves data analysis and ML models." },
  { name: "Akshay Kumar", role: "Mobile Developer", img: "./image/akshay.png", about: "Creates Android & iOS apps." },
  { name: "Alia Bhatt", role: "DevOps Engineer", img: "./image/alia.png", about: "Works on CI/CD and cloud infra." },
  { name: "Amitabh Bachchan", role: "Cybersecurity Expert", img: "./image/amitabh.png", about: "Focuses on security and networks." },
  { name: "Katrina Kaif", role: "AI Engineer", img: "./image/katrina.png", about: "Interested in deep learning projects." },
  { name: "Salman Khan", role: "Software Engineer", img: "./image/salman.png", about: "Enjoys problem-solving & coding." },
    { name: "Quantum Computing", role: "Tech", img: "⚛️" },
      { name: "Cybersecurity", role: "Security", img: "🛡️" },
      { name: "Neural Networks", role: "AI", img: "🧠" },
      { name: "Digital Marketing", role: "Business", img: "📈" },
      { name: "Cloud Storage", role: "Server", img: "☁️" },
      { name: "UI/UX Design", role: "Creative", img: "🎨" }
];



const container = document.getElementById("container");
const inp = document.querySelector("#searchInput");

function showusers(arr) {
  container.innerHTML = "";
  
  arr.forEach((user) => {
    const card = document.createElement("div");
    // Glassmorphism effect classes
    card.className = "group bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm hover:bg-white/10 hover:scale-105 transition-all duration-300 shadow-xl cursor-pointer relative overflow-hidden";

    // Agar image URL hai toh <img> dikhao, agar emoji hai toh text
    const isEmoji = !user.img.includes('.'); 
    
    card.innerHTML = `
      <div class="relative z-10">
        <div class="w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-3xl shadow-lg group-hover:rotate-6 transition-transform">
           ${isEmoji ? user.img : `<img src="${user.img}" class="w-full h-full object-cover">`}
        </div>
        <h2 class="text-xl font-bold text-white text-center">${user.name}</h2>
        <p class="text-blue-400 text-sm font-semibold text-center mb-3 uppercase tracking-wider">${user.role}</p>
        <p class="text-gray-400 text-sm text-center line-clamp-2">${user.about || 'Team Member'}</p>
      </div>
      <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/10 blur-3xl group-hover:bg-blue-500/30 transition-all"></div>
    `;

    container.appendChild(card);
  });
}

// Initial Show
showusers(users);

// Filter Logic
inp.addEventListener("input", function() {
  let query = inp.value.toLowerCase();
  let filtered = users.filter((user) => user.name.toLowerCase().includes(query));

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-20">
        <h2 class="text-4xl mb-4">😔</h2>
        <p class="text-gray-400 text-xl">No team member found matching "${inp.value}"</p>
      </div>
    `;
    return;
  }
  showusers(filtered);
});