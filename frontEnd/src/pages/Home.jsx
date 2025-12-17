// import React from "react";
// import { Home, Gamepad2, Clock, BarChart3, User } from "lucide-react";

// function App() {
//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Header Banner */}
//       <div className="relative h-96 bg-gradient-to-br from-orange-500 to-orange-700 rounded-b-3xl overflow-hidden">
//         <div className="absolute top-10 left-6">
//           <h1 className="text-3xl font-bold">Hi Otajon,</h1>
//           <p className="text-lg mt-2">Ready for some football?</p>
//         </div>

//         {/* Session Recap */}
//         <div className="absolute top-32 left-0 right-0 flex flex-col items-center">
//           <div className="relative w-11/12 max-w-md h-48 rounded-2xl overflow-hidden shadow-2xl">
//             <img
//               src="https://aog-webguy-images.s3-us-west-2.amazonaws.com/20200716-8087.jpg"
//               alt="Football session"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
//               <h2 className="text-3xl font-bold text-white drop-shadow-lg">
//                 SESSION RECAP
//               </h2>
//             </div>
//           </div>
//           <p className="mt-4 text-lg">Top Goals, Assists and POTM</p>

//           {/* Dots Indicator */}
//           <div className="flex mt-4 space-x-2">
//             <div className="w-2 h-2 bg-white rounded-full"></div>
//             <div className="w-2 h-2 bg-white/50 rounded-full"></div>
//             <div className="w-2 h-2 bg-white/50 rounded-full"></div>
//           </div>
//         </div>
//       </div>
//       <div className="px-6 mt-10">
//         {/* Top Games This Week */}
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-2xl font-bold">TOP GAMES THIS WEEK</h2>
//           <button className="text-orange-500 font-medium">View All &gt;</button>
//         </div>

//         {/* Games Cards Horizontal Scroll */}
//         <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
//           <GameCard
//             price="€5"
//             date="09 Dec"
//             time="23:00 - 00:30"
//             spots="0 spots left"
//             spotsColor="text-red-500"
//             image="https://gousfbulls.com/images/2009/7/11/LSTATAIVRJAGNTO.20090711162323.jpg"
//           />
//           <GameCard
//             price="€5"
//             date="10 Dec"
//             time="22:30 - 00:00"
//             spots="1 spots left"
//             spotsColor="text-orange-500"
//             image="https://i.ytimg.com/vi/0DwpCo_l9tw/maxresdefault.jpg"
//           />
//           {/* Qo'shimcha kartalar backenddan kelganda qo'shiladi */}
//         </div>

//         {/* Buttons */}
//         <div className="flex flex-col items-center mt-12 space-y-6">
//           <button className="bg-orange-600 hover:bg-orange-700 px-12 py-4 rounded-full text-xl font-bold transition">
//             LEADERBOARDS
//           </button>

//           <button className="bg-gradient-to-r from-orange-500 to-orange-700 px-12 py-4 rounded-full text-xl font-bold">
//             TOP SCORERS
//           </button>
//         </div>
//       </div>
//       {/* Bottom Navigation Bar */}
//       <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800">
//         {/* <div className="flex justify-around items-center py-3">
//           <NavItem icon={Home} label="Home" active />
//           <NavItem icon={Gamepad2} label="Games" />
//           <NavItem icon={Clock} label="Sessions" />
//           <NavItem icon={BarChart3} label="Stats" />
//           <NavItem icon={User} label="Profile" />
//         </div> */}
//       </div>
//       <div className="h-20"></div> {/* Bottom nav uchun bo'sh joy */}
//     </div>
//   );
// }

// function GameCard({ price, date, time, spots, spotsColor, image }) {
//   return (
//     <div className="relative flex-shrink-0 w-64 h-48 rounded-2xl overflow-hidden shadow-lg">
//       <img src={image} alt="Park" className="w-full h-full object-cover" />

//       {/* Price Badge */}
//       <div className="absolute top-4 left-4 bg-orange-600 px-4 py-2 rounded-lg font-bold">
//         {price}
//       </div>

//       {/* Date Badge */}
//       <div className="absolute top-4 right-4 bg-black/60 px-4 py-2 rounded-lg">
//         {date}
//       </div>

//       {/* Bottom Info */}
//       <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
//         <p className="font-bold">Park Šiška (7v7)</p>
//         <p className="text-sm mt-1">{time}</p>
//         <p className={`font-bold mt-1 ${spotsColor}`}>{spots}</p>
//       </div>
//     </div>
//   );
// }

// function NavItem({ icon: Icon, label, active = false }) {
//   return (
//     <div className="flex flex-col items-center">
//       <Icon size={24} color={active ? "#f97316" : "#9ca3af"} />
//       <span
//         className={`text-xs mt-1 ${
//           active ? "text-orange-500" : "text-gray-400"
//         }`}
//       >
//         {label}
//       </span>
//     </div>
//   );
// }

// export default App;



















// import React, { useEffect, useState } from "react";
// import "./Home.css"; // Custom styles
// import Sidebar from "./Sidebar";

// const HomePage = () => {
//   const [sessionRecap, setSessionRecap] = useState({});
//   const [games, setGames] = useState([]);
//   const [leaderboard, setLeaderboard] = useState([]);

//   // Simulate backend fetch
//   useEffect(() => {
//     // These will be replaced with real API calls later
//     setSessionRecap({
//       title: "SESSION RECAP",
//       subtitle: "Top Goals, Assists and POTM",
//       image: "/images/session-banner.jpg",
//     });

//     setGames([
//       {
//         id: 1,
//         date: "09 Dec",
//         time: "23:00 - 00:30",
//         location: "Park Šiška (7v7v7)",
//         spotsLeft: 0,
//         price: "€5",
//         image: "/images/field1.jpg",
//       },
//       {
//         id: 2,
//         date: "10 Dec",
//         time: "22:30 - 00:00",
//         location: "Park Šiška (7v7v7)",
//         spotsLeft: 1,
//         price: "€5",
//         image: "/images/field2.jpg",
//       },
//     ]);

//     setLeaderboard([
//       { name: "Ali", goals: 12 },
//       { name: "Bek", goals: 9 },
//       { name: "Said", goals: 7 },
//     ]);
//   }, []);

//   return (
//     <div className="home-layout">
//       <Sidebar />
//       <main className="home-content">
//         <header className="greeting">
//           <h2>Hi Otajon</h2>
//           <p>Ready for some football?</p>
//         </header>

//         <section className="session-recap">
//           <h3>{sessionRecap.title}</h3>
//           <p>{sessionRecap.subtitle}</p>
//           <img src={sessionRecap.image} alt="Session Recap" />
//         </section>

//         <section className="top-games">
//           <h3>TOP GAMES THIS WEEK</h3>
//           <div className="games-list">
//             {games.map((game) => (
//               <div key={game.id} className="game-card">
//                 <img src={game.image} alt="Game Field" />
//                 <div className="game-info">
//                   <p>
//                     <strong>{game.date}</strong> — {game.time}
//                   </p>
//                   <p>{game.location}</p>
//                   <p>{game.spotsLeft} spots left</p>
//                   <p className="price">{game.price}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section className="leaderboard">
//           <h3>LEADERBOARDS</h3>
//           <h4>TOP SCORERS</h4>
//           <ul>
//             {leaderboard.map((player, index) => (
//               <li key={index}>
//                 {player.name} — {player.goals} goals
//               </li>
//             ))}
//           </ul>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default HomePage;
















// import React, { useState } from "react";
// import {
//   Home,
//   Gamepad2,
//   Clock,
//   BarChart3,
//   User,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";

// // Session Recap Carousel uchun rasmlar (sizning original screenshotga juda yaqin va chiroyli futbol maydonlari)
// const carouselImages = [
//   "https://thumbs.dreamstime.com/b/soccer-stadium-green-grass-field-bright-floodlight-background-lights-night-football-173905519.jpg", // [image:1] Kechki yoritilgan maydon
//   "https://thumbs.dreamstime.com/b/aerial-view-illuminated-football-stadium-night-smoke-fans-torches-cheering-crowd-vibrant-lights-create-exciting-367412104.jpg", // [image:8] Aerial view
//   "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3779913347736124349", // [image:6] Players celebrating
//   "https://thumbs.dreamstime.com/b/raindrops-glisten-lush-verdant-grass-sports-field-under-dramatic-lighting-floodlights-night-406158420.jpg", // [image:2] Yana bir chiroyli maydon
// ];

// // Games cards uchun rasmlar (aerial va kechki maydonlar)
// const gameImages = [
//   "https://thumbs.dreamstime.com/b/night-football-field-soccer-ball-pitch-under-stadium-lights-image-titled-contains-content-related-to-socc-372970240.jpg", // [image:9]
//   "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=1141272754820285", // [image:10] Orange illuminated
// ];

// function App() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide(
//       (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
//     );
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <div className="min-h-screen bg-black text-white pb-20">
//       {/* Header Banner with Carousel */}
//       <div className="relative h-96 bg-gradient-to-br from-orange-600 to-orange-800 rounded-b-3xl overflow-hidden">
//         {/* Greeting */}
//         <div className="absolute top-12 left-6 z-10">
//           <h1 className="text-3xl font-bold">Hi Otajon,</h1>
//           <p className="text-lg mt-2 opacity-90">Ready for some football?</p>
//         </div>

//         {/* Session Recap Carousel */}
//         <div className="absolute top-32 left-0 right-0 flex flex-col items-center px-6">
//           <div className="relative w-full max-w-md h-52 rounded-3xl overflow-hidden shadow-2xl">
//             {/* Carousel Images */}
//             {carouselImages.map((img, index) => (
//               <img
//                 key={index}
//                 src={img}
//                 alt={`Session Recap ${index + 1}`}
//                 className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
//                   index === currentSlide ? "opacity-100" : "opacity-0"
//                 }`}
//               />
//             ))}

//             {/* Dark Overlay + Text */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-center justify-center">
//               <h2 className="text-4xl font-bold text-white drop-shadow-2xl">
//                 SESSION RECAP
//               </h2>
//             </div>

//             {/* Navigation Arrows */}
//             <button
//               onClick={prevSlide}
//               className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
//             >
//               <ChevronLeft size={28} />
//             </button>
//             <button
//               onClick={nextSlide}
//               className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
//             >
//               <ChevronRight size={28} />
//             </button>
//           </div>

//           <p className="mt-5 text-lg opacity-90">Top Goals, Assists and POTM</p>

//           {/* Dots Indicator */}
//           <div className="flex mt-5 space-x-3">
//             {carouselImages.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToSlide(index)}
//                 className={`w-3 h-3 rounded-full transition ${
//                   index === currentSlide ? "bg-white w-8" : "bg-white/40"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="px-6 mt-12">
//         {/* Top Games This Week */}
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-bold">TOP GAMES THIS WEEK</h2>
//           <button className="text-orange-500 font-semibold text-lg">
//             View All &gt;
//           </button>
//         </div>

//         {/* Horizontal Scroll Games */}
//         <div className="flex space-x-6 overflow-x-auto pb-6 scrollbar-hide">
//           <GameCard
//             price="€5"
//             date="09 Dec"
//             time="23:00 - 00:30"
//             spots="0 spots left"
//             spotsColor="text-red-500"
//             image={gameImages[0]}
//           />
//           <GameCard
//             price="€5"
//             date="10 Dec"
//             time="22:30 - 00:00"
//             spots="1 spots left"
//             spotsColor="text-orange-400"
//             image={gameImages[1]}
//           />
//           {/* Backenddan kelganda map qilib qo'shiladi */}
//         </div>

//         {/* Buttons with better effects */}
//         <div className="flex flex-col items-center mt-16 space-y-6">
//           <button className="bg-orange-600 hover:bg-orange-700 active:scale-95 transition-all px-16 py-5 rounded-full text-2xl font-bold shadow-2xl">
//             LEADERBOARDS
//           </button>

//           <button className="bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 active:scale-95 transition-all px-16 py-5 rounded-full text-2xl font-bold shadow-2xl">
//             TOP SCORERS
//           </button>
//         </div>
//       </div>

//       {/* Fixed Bottom Navigation */}
//       <div className="fixed bottom-0 left-0 right-0 bg-gray-950 border-t border-gray-800">
//         <div className="flex justify-around items-center py-4">
//           <NavItem icon={Home} label="Home" active />
//           <NavItem icon={Gamepad2} label="Games" />
//           <NavItem icon={Clock} label="Sessions" />
//           <NavItem icon={BarChart3} label="Stats" />
//           <NavItem icon={User} label="Profile" />
//         </div>
//       </div>
//     </div>
//   );
// }

// function GameCard({ price, date, time, spots, spotsColor, image }) {
//   return (
//     <div className="relative flex-shrink-0 w-80 h-56 rounded-3xl overflow-hidden shadow-2xl">
//       <img src={image} alt="Game" className="w-full h-full object-cover" />

//       {/* Price Badge */}
//       <div className="absolute top-5 left-5 bg-orange-600 px-5 py-3 rounded-2xl text-xl font-bold shadow-md">
//         {price}
//       </div>

//       {/* Date Badge */}
//       <div className="absolute top-5 right-5 bg-black/70 px-5 py-3 rounded-2xl text-lg">
//         {date}
//       </div>

//       {/* Bottom Gradient Overlay */}
//       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6">
//         <p className="text-xl font-bold">Park Šiška (7v7)</p>
//         <p className="text-lg mt-1 opacity-90">{time}</p>
//         <p className={`text-xl font-bold mt-2 ${spotsColor}`}>{spots}</p>
//       </div>
//     </div>
//   );
// }

// function NavItem({ icon: Icon, label, active = false }) {
//   return (
//     <div className="flex flex-col items-center">
//       <Icon
//         size={28}
//         color={active ? "#fb923c" : "#6b7280"}
//         strokeWidth={active ? 2.5 : 2}
//       />
//       <span
//         className={`text-sm mt-1 ${
//           active ? "text-orange-400 font-semibold" : "text-gray-500"
//         }`}
//       >
//         {label}
//       </span>
//     </div>
//   );
// }

// export default App;






















import React, { useState, useEffect } from "react";
import { Home, Gamepad2, Clock, BarChart3, User, ChevronLeft, ChevronRight } from "lucide-react";

// Carousel rasmlari
const carouselImages = [
  "https://images.unsplash.com/photo-1624880357913-a8539238245b?w=800&q=80",
  "https://avatars.mds.yandex.net/i?id=12c10424c49073a672e1ef0f3639f78e9f8093c2-5390142-images-thumbs&n=13",
  "https://avatars.mds.yandex.net/i?id=e46cd310a41996aab4bee9d18b08de6d0bc9c3f8-5232242-images-thumbs&n=13",
  "https://avatars.mds.yandex.net/i?id=cbaa8f88d850f6fa7843f7155573d4b84d4df8c9-5491388-images-thumbs&n=13",
];

// Games kartalari rasmlari
const gameImages = [
  "https://t4.ftcdn.net/jpg/05/93/94/39/360_F_593943960_rSQUI4XRxdvn57gMPjgkUtV0Je2zTKk6.jpg",
  "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&q=80",
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide: har 5 soniyada
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      {/* Header Banner + Carousel */}
      <div className="relative h-86 bg-gradient-to-br from-orange-400 to-orange-400 mb-55 rounded-b-full">
        <div className="absolute top-12 left-6 z-10">
          <h1 className="text-3xl font-bold">Hi Muhammad Siddiq,</h1>
          <p className="text-lg mt-2 opacity-90">Ready for some football?</p>
        </div>

        <div className="absolute top-32 left-0 right-0 flex flex-col items-center px-6 mt-2">
          <div className="relative w-full max-w-md h-52 rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative w-full h-full">
              {carouselImages.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Slide ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    i === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-center justify-center">
              <h2 className="text-4xl font-bold text-white drop-shadow-2xl">SESSION RECAP</h2>
            </div>

            {/* <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70">
              <ChevronLeft size={28} />
            </button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70">
              <ChevronRight size={28} />
            </button> */}
          </div>

          <p className="mt-5 text-lg opacity-90">Top Goals, Assists and POTM</p>

          <div className="flex mt-5 space-x-3">
            {carouselImages.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`h-3 rounded-full transition-all duration-300 ${i === currentSlide ? "bg-white w-10" : "bg-white/40 w-3"}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 mt-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">TOP GAMES THIS WEEK</h2>
          <button className="text-orange-500 font-semibold text-lg">View All &gt;</button>
        </div>

        <div className="flex space-x-6 overflow-x-auto pb-6 scrollbar-hide">
          {[
            { date: "09 Dec", time: "23:00 - 00:30", spots: "0 spots left", spotsColor: "text-red-500", img: gameImages[0] },
            { date: "10 Dec", time: "22:30 - 00:00", spots: "1 spots left", spotsColor: "text-orange-400", img: gameImages[1] },
          ].map((game, i) => (
            <div key={i} className="relative flex-shrink-0 w-80 h-56 rounded-3xl overflow-hidden shadow-2xl">
              <img src={game.img} alt="Game" className="w-full h-full object-cover" />
              <div className="absolute top-5 left-5 bg-orange-600 px-5 py-3 rounded-2xl text-xl font-bold shadow-md">€5</div>
              <div className="absolute top-5 right-5 bg-black/70 px-5 py-3 rounded-2xl text-lg">{game.date}</div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6">
                <p className="text-xl font-bold">Park Šiška (7v7)</p>
                <p className="text-lg mt-1 opacity-90">{game.time}</p>
                <p className={`text-xl font-bold mt-2 ${game.spotsColor}`}>{game.spots}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center mt-16 space-y-6">
          <button className="bg-orange-600 hover:bg-orange-700 active:scale-95 transition-all px-16 py-5 rounded-full text-2xl font-bold shadow-2xl">
            LEADERBOARDS
          </button>
          <button className="bg-gradient-to-r mb-10 from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 active:scale-95 transition-all px-16 py-5 rounded-full text-2xl font-bold shadow-2xl">
            TOP SCORERS
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-950 border-t border-gray-800">
        {/* <div className="flex justify-around items-center py-4">
          {[
            { Icon: Home, label: "Home", active: true },
            { Icon: Gamepad2, label: "Games" },
            { Icon: Clock, label: "Sessions" },
            { Icon: BarChart3, label: "Stats" },
            { Icon: User, label: "Profile" },
          ].map(({ Icon, label, active = false }) => (
            <div key={label} className="flex flex-col items-center">
              <Icon size={28} color={active ? "#fb923c" : "#6b7280"} strokeWidth={active ? 2.5 : 2} />
              <span className={`text-sm mt-1 ${active ? "text-orange-400 font-semibold" : "text-gray-500"}`}>
                {label}
              </span>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default App;





















// ligh mode and dark mode
// import React, { useState, useEffect } from "react";
// import {
//   Home,
//   Gamepad2,
//   Clock,
//   BarChart3,
//   User,
//   ChevronLeft,
//   ChevronRight,
//   Moon,
//   Sun,
//   Trophy,
// } from "lucide-react";

// // Carousel rasmlari
// const carouselImages = [
//   "https://images.unsplash.com/photo-1624880357913-a8539238245b?w=800&q=80",
//   "https://images.unsplash.com/photo-1518098268026-4e89f1a2ab6a?w=800&q=80",
//   "https://images.unsplash.com/photo-1574629810360-7ef55a0f8047?w=800&q=80",
//   "https://images.unsplash.com/photo-1551958219-acbc9c6e1c1b?w=800&q=80",
// ];

// const gameImages = [
//   "https://images.unsplash.com/photo-1543351611-54c8f57b8d99?w=800&q=80",
//   "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&q=80",
// ];

// // Taxminiy Leaderboard ma'lumotlari
// const leaderboardData = [
//   {
//     rank: 1,
//     name: "Otajon Pro",
//     goals: 28,
//     assists: 15,
//     points: 43,
//     avatar: "👑",
//   },
//   {
//     rank: 2,
//     name: "Ali Killer",
//     goals: 25,
//     assists: 12,
//     points: 37,
//     avatar: "⚡",
//   },
//   {
//     rank: 3,
//     name: "Bekzod Beast",
//     goals: 22,
//     assists: 18,
//     points: 40,
//     avatar: "🦁",
//   },
//   {
//     rank: 4,
//     name: "Jamshid",
//     goals: 19,
//     assists: 10,
//     points: 29,
//     avatar: "🔥",
//   },
//   { rank: 5, name: "Sardor", goals: 17, assists: 14, points: 31, avatar: "🚀" },
// ];

// function App() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [darkMode, setDarkMode] = useState(true);
//   const [showLeaderboard, setShowLeaderboard] = useState(false);

//   // Auto-slide (5 soniya)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const nextSlide = () =>
//     setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
//   const prevSlide = () =>
//     setCurrentSlide(
//       (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
//     );

//   const bgColor = darkMode ? "bg-black" : "bg-gray-100";
//   const textColor = darkMode ? "text-white" : "text-gray-900";
//   const cardBg = darkMode ? "bg-gray-900" : "bg-white";
//   const orangeGradient = darkMode
//     ? "from-orange-600 to-orange-800"
//     : "from-orange-500 to-orange-700";

//   return (
//     <div
//       className={`min-h-screen ${bgColor} ${textColor} transition-colors duration-300 pb-20`}
//     >
//       {/* Dark/Light Mode Toggle */}
//       <button
//         onClick={() => setDarkMode(!darkMode)}
//         className="fixed top-4 right-6 z-50 bg-gray-800 p-3 rounded-full shadow-lg hover:scale-110 transition"
//       >
//         {darkMode ? (
//           <Sun size={24} className="text-yellow-400" />
//         ) : (
//           <Moon size={24} className="text-gray-700" />
//         )}
//       </button>

//       {/* Header + Carousel */}
//       <div
//         className={`relative h-96 bg-gradient-to-br ${orangeGradient} rounded-b-3xl overflow-hidden`}
//       >
//         <div className="absolute top-12 left-6 z-10">
//           <h1 className="text-3xl font-bold">Hi Otajon,</h1>
//           <p className="text-lg mt-2 opacity-90">Ready for some football?</p>
//         </div>

//         <div className="absolute top-32 left-0 right-0 flex flex-col items-center px-6">
//           <div className="relative w-full max-w-md h-52 rounded-3xl overflow-hidden shadow-2xl">
//             {carouselImages.map((src, i) => (
//               <img
//                 key={i}
//                 src={src}
//                 alt={`Slide ${i + 1}`}
//                 className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
//                   i === currentSlide ? "opacity-100" : "opacity-0"
//                 }`}
//               />
//             ))}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-center justify-center">
//               <h2 className="text-4xl font-bold text-white drop-shadow-2xl">
//                 SESSION RECAP
//               </h2>
//             </div>
//             <button
//               onClick={prevSlide}
//               className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70"
//             >
//               <ChevronLeft size={28} />
//             </button>
//             <button
//               onClick={nextSlide}
//               className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70"
//             >
//               <ChevronRight size={28} />
//             </button>
//           </div>

//           <p className="mt-5 text-lg opacity-90">Top Goals, Assists and POTM</p>
//           <div className="flex mt-5 space-x-3">
//             {carouselImages.map((_, i) => (
//               <div
//                 key={i}
//                 className={`h-3 rounded-full transition-all duration-300 ${
//                   i === currentSlide ? "bg-white w-10" : "bg-white/40 w-3"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="px-6 mt-12">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-bold">TOP GAMES THIS WEEK</h2>
//           <button className="text-orange-500 font-semibold text-lg">
//             View All &gt;
//           </button>
//         </div>

//         <div className="flex space-x-6 overflow-x-auto pb-6 scrollbar-hide">
//           {[
//             {
//               date: "09 Dec",
//               time: "23:00 - 00:30",
//               spots: "0 spots left",
//               color: "text-red-500",
//               img: gameImages[0],
//             },
//             {
//               date: "10 Dec",
//               time: "22:30 - 00:00",
//               spots: "1 spots left",
//               color: "text-orange-400",
//               img: gameImages[1],
//             },
//           ].map((g, i) => (
//             <div
//               key={i}
//               className="relative flex-shrink-0 w-80 h-56 rounded-3xl overflow-hidden shadow-2xl"
//             >
//               <img
//                 src={g.img}
//                 alt="Game"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute top-5 left-5 bg-orange-600 px-5 py-3 rounded-2xl text-xl font-bold shadow-md">
//                 €5
//               </div>
//               <div className="absolute top-5 right-5 bg-black/70 px-5 py-3 rounded-2xl text-lg">
//                 {g.date}
//               </div>
//               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6">
//                 <p className="text-xl font-bold">Park Šiška (7v7)</p>
//                 <p className="text-lg mt-1 opacity-90">{g.time}</p>
//                 <p className={`text-xl font-bold mt-2 ${g.color}`}>{g.spots}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Buttons */}
//         <div className="flex flex-col items-center mt-16 space-y-6">
//           <button
//             onClick={() => setShowLeaderboard(true)}
//             className="bg-orange-600 hover:bg-orange-700 active:scale-95 transition-all px-16 py-5 rounded-full text-2xl font-bold shadow-2xl flex items-center gap-3"
//           >
//             <Trophy size={32} />
//             LEADERBOARDS
//           </button>

//           <button className="bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 active:scale-95 transition-all px-16 py-5 rounded-full text-2xl font-bold shadow-2xl">
//             TOP SCORERS
//           </button>
//         </div>
//       </div>

//       {/* Leaderboard Modal */}
//       {showLeaderboard && (
//         <div
//           className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
//           onClick={() => setShowLeaderboard(false)}
//         >
//           <div
//             className={`w-full max-w-md ${cardBg} rounded-3xl shadow-2xl p-6`}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-3xl font-bold flex items-center gap-3">
//                 <Trophy className="text-yellow-500" size={36} />
//                 Leaderboard
//               </h2>
//               <button
//                 onClick={() => setShowLeaderboard(false)}
//                 className="text-3xl"
//               >
//                 ×
//               </button>
//             </div>

//             <div className="space-y-4">
//               {leaderboardData.map((player) => (
//                 <div
//                   key={player.rank}
//                   className={`flex items-center justify-between p-4 rounded-2xl ${
//                     player.rank === 1
//                       ? "bg-gradient-to-r from-yellow-600 to-orange-600"
//                       : player.rank === 2
//                       ? "bg-gradient-to-r from-gray-500 to-gray-600"
//                       : player.rank === 3
//                       ? "bg-gradient-to-r from-orange-700 to-red-700"
//                       : "bg-gray-800"
//                   }`}
//                 >
//                   <div className="flex items-center gap-4">
//                     <span className="text-4xl">{player.avatar}</span>
//                     <div>
//                       <p className="text-xl font-bold">
//                         #{player.rank} {player.name}
//                       </p>
//                       <p className="text-sm opacity-80">
//                         {player.goals} gol • {player.assists} assist
//                       </p>
//                     </div>
//                   </div>
//                   <p className="text-2xl font-bold">{player.points} pts</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Bottom Navigation */}
//       <div
//         className={`fixed bottom-0 left-0 right-0 ${
//           darkMode ? "bg-gray-950" : "bg-white"
//         } border-t ${darkMode ? "border-gray-800" : "border-gray-300"}`}
//       >
//         <div className="flex justify-around items-center py-4">
//           {[
//             { Icon: Home, label: "Home", active: true },
//             { Icon: Gamepad2, label: "Games" },
//             { Icon: Clock, label: "Sessions" },
//             { Icon: BarChart3, label: "Stats" },
//             { Icon: User, label: "Profile" },
//           ].map(({ Icon, label, active = false }) => (
//             <div key={label} className="flex flex-col items-center">
//               <Icon
//                 size={28}
//                 color={active ? "#fb923c" : darkMode ? "#6b7280" : "#9ca3af"}
//                 strokeWidth={active ? 2.5 : 2}
//               />
//               <span
//                 className={`text-sm mt-1 ${
//                   active
//                     ? "text-orange-400 font-semibold"
//                     : darkMode
//                     ? "text-gray-500"
//                     : "text-gray-600"
//                 }`}
//               >
//                 {label}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;