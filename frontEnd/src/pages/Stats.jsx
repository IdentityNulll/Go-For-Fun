// import React, { useState, useEffect } from "react";
// import { Trophy, Users, Target, Award, TrendingUp, Medal } from "lucide-react";

// const StatisticsApp = () => {
//   const [activeTab, setActiveTab] = useState("topScorers");
//   const [statsData, setStatsData] = useState({
//     topScorers: [],
//     topAssists: [],
//     wins: [],
//     potm: [],
//     myStats: null,
//   });
//   const [loading, setLoading] = useState(true);

//   // Backend API ni chaqirish funksiyasi
//   const fetchStatistics = async () => {
//     setLoading(true);
//     try {
//       // Backend URL - bu yerda o'z backend URLingizni kiriting
//       const API_BASE_URL = "https://your-backend-api.com/api";

//       // Parallel ravishda barcha statistikalarni olish
//       const [scorers, assists, wins, potm, myStats] = await Promise.all([
//         fetch(`${API_BASE_URL}/statistics/top-scorers`).then((res) =>
//           res.json()
//         ),
//         fetch(`${API_BASE_URL}/statistics/top-assists`).then((res) =>
//           res.json()
//         ),
//         fetch(`${API_BASE_URL}/statistics/wins`).then((res) => res.json()),
//         fetch(`${API_BASE_URL}/statistics/potm`).then((res) => res.json()),
//         fetch(`${API_BASE_URL}/statistics/my-stats`).then((res) => res.json()),
//       ]);

//       setStatsData({
//         topScorers: scorers,
//         topAssists: assists,
//         wins: wins,
//         potm: potm,
//         myStats: myStats,
//       });
//     } catch (error) {
//       console.error("API xatosi:", error);
//       // Xatolik bo'lsa, mock data ishlatish
//       loadMockData();
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Mock data (backend ishlamasa yoki test uchun)
//   const loadMockData = () => {
//     setStatsData({
//       topScorers: [
//         {
//           rank: 1,
//           name: "Zan S.",
//           avatar: "👤",
//           goals: 59,
//           played: 128,
//           perGame: 0.46,
//         },
//         {
//           rank: 2,
//           name: "Saso M.",
//           avatar: "👤",
//           goals: 44,
//           played: 100,
//           perGame: 0.44,
//         },
//         {
//           rank: 3,
//           name: "Gökhan",
//           avatar: "🌍",
//           goals: 44,
//           played: 104,
//           perGame: 0.42,
//         },
//         {
//           rank: 4,
//           name: "Rok I.",
//           avatar: "👤",
//           goals: 43,
//           played: 85,
//           perGame: 0.51,
//         },
//         {
//           rank: 5,
//           name: "Jan M.",
//           avatar: "👤",
//           goals: 42,
//           played: 86,
//           perGame: 0.49,
//         },
//         {
//           rank: 6,
//           name: "Maj P.",
//           avatar: "👤",
//           goals: 42,
//           played: 92,
//           perGame: 0.46,
//         },
//         {
//           rank: 7,
//           name: "Ricardo",
//           avatar: "👤",
//           goals: 41,
//           played: 100,
//           perGame: 0.41,
//         },
//         {
//           rank: 8,
//           name: "Luka Š.",
//           avatar: "👤",
//           goals: 39,
//           played: 86,
//           perGame: 0.45,
//         },
//         {
//           rank: 9,
//           name: "Andraž",
//           avatar: "👤",
//           goals: 36,
//           played: 72,
//           perGame: 0.5,
//         },
//       ],
//       topAssists: [
//         {
//           rank: 1,
//           name: "Luka Š.",
//           avatar: "👤",
//           assists: 64,
//           played: 86,
//           perGame: 0.74,
//         },
//         {
//           rank: 2,
//           name: "Gökhan",
//           avatar: "🌍",
//           assists: 36,
//           played: 104,
//           perGame: 0.35,
//         },
//         {
//           rank: 3,
//           name: "Zan S.",
//           avatar: "👤",
//           assists: 34,
//           played: 128,
//           perGame: 0.27,
//         },
//         {
//           rank: 4,
//           name: "mathis I.",
//           avatar: "👤",
//           assists: 23,
//           played: 56,
//           perGame: 0.41,
//         },
//         {
//           rank: 5,
//           name: "David V.",
//           avatar: "👤",
//           assists: 23,
//           played: 84,
//           perGame: 0.27,
//         },
//         {
//           rank: 6,
//           name: "Jan M.",
//           avatar: "👤",
//           assists: 23,
//           played: 86,
//           perGame: 0.27,
//         },
//         {
//           rank: 7,
//           name: "Maj P.",
//           avatar: "👤",
//           assists: 23,
//           played: 92,
//           perGame: 0.25,
//         },
//         {
//           rank: 8,
//           name: "Boris M.",
//           avatar: "👤",
//           assists: 19,
//           played: 44,
//           perGame: 0.43,
//         },
//       ],
//       wins: [
//         {
//           rank: 1,
//           name: "Zan S.",
//           avatar: "👤",
//           wins: 59,
//           played: 128,
//           winPercent: 46.1,
//         },
//         {
//           rank: 2,
//           name: "Saso M.",
//           avatar: "👤",
//           wins: 44,
//           played: 100,
//           winPercent: 44.0,
//         },
//         {
//           rank: 3,
//           name: "Gökhan",
//           avatar: "🌍",
//           wins: 44,
//           played: 104,
//           winPercent: 42.3,
//         },
//         {
//           rank: 4,
//           name: "Rok I.",
//           avatar: "👤",
//           wins: 43,
//           played: 85,
//           winPercent: 50.6,
//         },
//         {
//           rank: 5,
//           name: "Jan M.",
//           avatar: "👤",
//           wins: 42,
//           played: 86,
//           winPercent: 48.8,
//         },
//         {
//           rank: 6,
//           name: "Maj P.",
//           avatar: "👤",
//           wins: 42,
//           played: 92,
//           winPercent: 45.7,
//         },
//         {
//           rank: 7,
//           name: "Ricardo",
//           avatar: "👤",
//           wins: 41,
//           played: 100,
//           winPercent: 41.0,
//         },
//         {
//           rank: 8,
//           name: "Luka Š.",
//           avatar: "👤",
//           wins: 39,
//           played: 86,
//           winPercent: 45.3,
//         },
//         {
//           rank: 9,
//           name: "Andraž",
//           avatar: "👤",
//           wins: 36,
//           played: 72,
//           winPercent: 50.0,
//         },
//       ],
//       potm: [
//         {
//           rank: 1,
//           name: "Boris M.",
//           avatar: "👤",
//           potm: 6,
//           sessions: 11,
//           winPercent: 54.5,
//         },
//         {
//           rank: 2,
//           name: "Jonny",
//           avatar: "🌍",
//           potm: 4,
//           sessions: 12,
//           winPercent: 33.3,
//         },
//         {
//           rank: 3,
//           name: "Tomas",
//           avatar: "🌍",
//           potm: 3,
//           sessions: 15,
//           winPercent: 20.0,
//         },
//         {
//           rank: 4,
//           name: "Andraž",
//           avatar: "👤",
//           potm: 3,
//           sessions: 18,
//           winPercent: 16.7,
//         },
//         {
//           rank: 5,
//           name: "Antoni",
//           avatar: "🔴",
//           potm: 2,
//           sessions: 5,
//           winPercent: 40.0,
//         },
//         {
//           rank: 6,
//           name: "Tommy",
//           avatar: "🟠",
//           potm: 2,
//           sessions: 8,
//           winPercent: 25.0,
//         },
//         {
//           rank: 7,
//           name: "mathis I.",
//           avatar: "👤",
//           potm: 2,
//           sessions: 14,
//           winPercent: 14.3,
//         },
//         {
//           rank: 8,
//           name: "Tim B.",
//           avatar: "👤",
//           potm: 2,
//           sessions: 14,
//           winPercent: 14.3,
//         },
//         {
//           rank: 9,
//           name: "Jan M.",
//           avatar: "👤",
//           potm: 2,
//           sessions: 22,
//           winPercent: 9.1,
//         },
//       ],
//       myStats: {
//         totalGoals: 0,
//         totalAssists: 0,
//         potmAwards: 0,
//         gamesPlayed: 0,
//         avgGoals: 0.0,
//         avgAssists: 0.0,
//         topScorer: 0,
//         topAssists: 0,
//         aceAwards: 0,
//         totalSessions: 0,
//       },
//     });
//     setLoading(false);
//   };

//   useEffect(() => {
//     // Component yuklanganda statistikalarni olish
//     fetchStatistics();
//   }, []);

//   // Tab o'zgarganda statistikalarni qayta yuklash
//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   const renderTableContent = () => {
//     if (loading) {
//       return (
//         <div className="flex items-center justify-center py-20">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
//         </div>
//       );
//     }

//     switch (activeTab) {
//       case "topScorers":
//         return (
//           <div className="space-y-2">
//             <div className="grid grid-cols-5 gap-4 px-4 py-3 text-sm text-gray-400 font-medium">
//               <div>Rank</div>
//               <div>Name</div>
//               <div className="text-right">Goals</div>
//               <div className="text-right">Played</div>
//               <div className="text-right">Per Game</div>
//             </div>
//             {statsData.topScorers.map((player) => (
//               <div
//                 key={player.rank}
//                 className="grid grid-cols-5 gap-4 px-4 py-3 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors"
//               >
//                 <div className="flex items-center">
//                   <span
//                     className={`font-bold ${
//                       player.rank <= 3 ? "text-orange-500" : "text-white"
//                     }`}
//                   >
//                     {player.rank}
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-sm">
//                     {player.avatar}
//                   </div>
//                   <span className="text-white font-medium">{player.name}</span>
//                 </div>
//                 <div className="text-right text-white font-bold">
//                   {player.goals}
//                 </div>
//                 <div className="text-right text-gray-400">{player.played}</div>
//                 <div className="text-right text-gray-400">
//                   {player.perGame.toFixed(2)}
//                 </div>
//               </div>
//             ))}
//           </div>
//         );

//       case "topAssists":
//         return (
//           <div className="space-y-2">
//             <div className="grid grid-cols-5 gap-4 px-4 py-3 text-sm text-gray-400 font-medium">
//               <div>Rank</div>
//               <div>Name</div>
//               <div className="text-right">Assists</div>
//               <div className="text-right">Played</div>
//               <div className="text-right">Per Game</div>
//             </div>
//             {statsData.topAssists.map((player) => (
//               <div
//                 key={player.rank}
//                 className="grid grid-cols-5 gap-4 px-4 py-3 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors"
//               >
//                 <div className="flex items-center">
//                   <span
//                     className={`font-bold ${
//                       player.rank <= 3 ? "text-orange-500" : "text-white"
//                     }`}
//                   >
//                     {player.rank}
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-sm">
//                     {player.avatar}
//                   </div>
//                   <span className="text-white font-medium">{player.name}</span>
//                 </div>
//                 <div className="text-right text-white font-bold">
//                   {player.assists}
//                 </div>
//                 <div className="text-right text-gray-400">{player.played}</div>
//                 <div className="text-right text-gray-400">
//                   {player.perGame.toFixed(2)}
//                 </div>
//               </div>
//             ))}
//           </div>
//         );

//       case "wins":
//         return (
//           <div className="space-y-2">
//             <div className="grid grid-cols-5 gap-4 px-4 py-3 text-sm text-gray-400 font-medium">
//               <div>Rank</div>
//               <div>Name</div>
//               <div className="text-right">Wins</div>
//               <div className="text-right">Played</div>
//               <div className="text-right">Win %</div>
//             </div>
//             {statsData.wins.map((player) => (
//               <div
//                 key={player.rank}
//                 className="grid grid-cols-5 gap-4 px-4 py-3 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors"
//               >
//                 <div className="flex items-center">
//                   <span
//                     className={`font-bold ${
//                       player.rank <= 3 ? "text-orange-500" : "text-white"
//                     }`}
//                   >
//                     {player.rank}
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-sm">
//                     {player.avatar}
//                   </div>
//                   <span className="text-white font-medium">{player.name}</span>
//                 </div>
//                 <div className="text-right text-white font-bold">
//                   {player.wins}
//                 </div>
//                 <div className="text-right text-gray-400">{player.played}</div>
//                 <div className="text-right text-orange-500 font-bold">
//                   {player.winPercent.toFixed(1)}%
//                 </div>
//               </div>
//             ))}
//           </div>
//         );

//       case "potm":
//         return (
//           <div className="space-y-2">
//             <div className="grid grid-cols-5 gap-4 px-4 py-3 text-sm text-gray-400 font-medium">
//               <div>Rank</div>
//               <div>Name</div>
//               <div className="text-right">POTM</div>
//               <div className="text-right">Sessions</div>
//               <div className="text-right">% Won</div>
//             </div>
//             {statsData.potm.map((player) => (
//               <div
//                 key={player.rank}
//                 className="grid grid-cols-5 gap-4 px-4 py-3 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors"
//               >
//                 <div className="flex items-center">
//                   <span
//                     className={`font-bold ${
//                       player.rank <= 3 ? "text-orange-500" : "text-white"
//                     }`}
//                   >
//                     {player.rank}
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-sm">
//                     {player.avatar}
//                   </div>
//                   <span className="text-white font-medium">{player.name}</span>
//                 </div>
//                 <div className="text-right text-white font-bold">
//                   {player.potm}
//                 </div>
//                 <div className="text-right text-gray-400">
//                   {player.sessions}
//                 </div>
//                 <div className="text-right text-orange-500 font-bold">
//                   {player.winPercent.toFixed(1)}%
//                 </div>
//               </div>
//             ))}
//           </div>
//         );

//       case "myStats":
//         return (
//           <div className="space-y-6 py-8">
//             {/* Career Stats Summary */}
//             <div className="text-center space-y-4">
//               <h2 className="text-2xl font-bold text-white">My Career Stats</h2>
//               <div className="flex justify-center gap-8">
//                 <div>
//                   <div className="text-4xl font-bold text-orange-500">
//                     {statsData.myStats.totalGoals}
//                   </div>
//                   <div className="text-sm text-gray-400">Total Goals</div>
//                 </div>
//                 <div>
//                   <div className="text-4xl font-bold text-orange-500">
//                     {statsData.myStats.totalAssists}
//                   </div>
//                   <div className="text-sm text-gray-400">Total Assists</div>
//                 </div>
//                 <div>
//                   <div className="text-4xl font-bold text-orange-500">
//                     {statsData.myStats.potmAwards}
//                   </div>
//                   <div className="text-sm text-gray-400">POTM Awards</div>
//                 </div>
//                 <div>
//                   <div className="text-4xl font-bold text-orange-500">
//                     {statsData.myStats.gamesPlayed}
//                   </div>
//                   <div className="text-sm text-gray-400">Games Played</div>
//                 </div>
//               </div>
//             </div>

//             {/* Per Game Averages */}
//             <div className="bg-gray-800 rounded-lg p-6">
//               <h3 className="text-lg font-bold text-white mb-4">
//                 Per Game Averages
//               </h3>
//               <div className="grid grid-cols-2 gap-6">
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-white">
//                     {statsData.myStats.avgGoals.toFixed(2)}
//                   </div>
//                   <div className="text-sm text-gray-400">Goals</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-white">
//                     {statsData.myStats.avgAssists.toFixed(2)}
//                   </div>
//                   <div className="text-sm text-gray-400">Assists</div>
//                 </div>
//               </div>
//             </div>

//             {/* Career Badge Achievements */}
//             <div className="bg-gray-800 rounded-lg p-6">
//               <h3 className="text-lg font-bold text-white mb-6">
//                 Career Badge Achievements
//               </h3>
//               <div className="flex justify-around">
//                 <div className="text-center">
//                   <div className="w-16 h-16 rounded-full bg-red-900 flex items-center justify-center mx-auto mb-2">
//                     <Trophy className="w-8 h-8 text-red-500" />
//                   </div>
//                   <div className="text-2xl font-bold text-white">
//                     {statsData.myStats.topScorer}
//                   </div>
//                   <div className="text-sm text-gray-400">Top Scorer</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="w-16 h-16 rounded-full bg-blue-900 flex items-center justify-center mx-auto mb-2">
//                     <Users className="w-8 h-8 text-blue-500" />
//                   </div>
//                   <div className="text-2xl font-bold text-white">
//                     {statsData.myStats.topAssists}
//                   </div>
//                   <div className="text-sm text-gray-400">Top Assists</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="w-16 h-16 rounded-full bg-purple-900 flex items-center justify-center mx-auto mb-2">
//                     <Award className="w-8 h-8 text-purple-500" />
//                   </div>
//                   <div className="text-2xl font-bold text-white">
//                     {statsData.myStats.aceAwards}
//                   </div>
//                   <div className="text-sm text-gray-400">Ace</div>
//                 </div>
//               </div>
//             </div>

//             {/* Event History */}
//             <div className="bg-gray-800 rounded-lg p-6">
//               <div className="flex justify-between items-center">
//                 <h3 className="text-lg font-bold text-white">Event History</h3>
//                 <div className="text-gray-400">
//                   Total Sessions: {statsData.myStats.totalSessions}
//                 </div>
//               </div>
//             </div>

//             {/* Detailed Button */}
//             <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 mb-10">
//               <TrendingUp className="w-5 h-5" />
//               View Detailed Statistics
//             </button>
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white">
//       {/* Header */}
//       <div className="bg-gray-800 border-b border-gray-700">
//         <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
//           <h1 className="text-2xl font-bold">Statistics</h1>
//           <button className="text-orange-500 hover:text-orange-400">
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="bg-gray-800 border-b border-gray-700">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex gap-2 overflow-x-auto">
//             <button
//               onClick={() => handleTabChange("topScorers")}
//               className={`px-6 py-3 font-medium whitespace-nowrap transition-colors ${
//                 activeTab === "topScorers"
//                   ? "bg-orange-500 text-white rounded-t-lg"
//                   : "text-gray-400 hover:text-white"
//               }`}
//             >
//               <div className="flex items-center gap-2">
//                 <Target className="w-4 h-4" />
//                 Top Scorers
//               </div>
//             </button>
//             <button
//               onClick={() => handleTabChange("topAssists")}
//               className={`px-6 py-3 font-medium whitespace-nowrap transition-colors ${
//                 activeTab === "topAssists"
//                   ? "bg-orange-500 text-white rounded-t-lg"
//                   : "text-gray-400 hover:text-white"
//               }`}
//             >
//               <div className="flex items-center gap-2">
//                 <Users className="w-4 h-4" />
//                 Top Assists
//               </div>
//             </button>
//             <button
//               onClick={() => handleTabChange("wins")}
//               className={`px-6 py-3 font-medium whitespace-nowrap transition-colors ${
//                 activeTab === "wins"
//                   ? "bg-orange-500 text-white rounded-t-lg"
//                   : "text-gray-400 hover:text-white"
//               }`}
//             >
//               <div className="flex items-center gap-2">
//                 <Trophy className="w-4 h-4" />
//                 Wins
//               </div>
//             </button>
//             <button
//               onClick={() => handleTabChange("potm")}
//               className={`px-6 py-3 font-medium whitespace-nowrap transition-colors ${
//                 activeTab === "potm"
//                   ? "bg-orange-500 text-white rounded-t-lg"
//                   : "text-gray-400 hover:text-white"
//               }`}
//             >
//               <div className="flex items-center gap-2">
//                 <Medal className="w-4 h-4" />
//                 POTM
//               </div>
//             </button>
//             <button
//               onClick={() => handleTabChange("myStats")}
//               className={`px-6 py-3 font-medium whitespace-nowrap transition-colors ${
//                 activeTab === "myStats"
//                   ? "bg-orange-500 text-white rounded-t-lg"
//                   : "text-gray-400 hover:text-white"
//               }`}
//             >
//               <div className="flex items-center gap-2">
//                 <Award className="w-4 h-4" />
//                 My Stats
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="max-w-7xl mx-auto px-4 py-6">{renderTableContent()}</div>

//       {/* Refresh Button */}
//       <div className="fixed bottom-6 right-6">
//         <button
//           onClick={fetchStatistics}
//           disabled={loading}
//           className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-600 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110 disabled:scale-100"
//         >
//           {loading ? (
//             <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
//           ) : (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
//               />
//             </svg>
//           )}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default StatisticsApp;















































import React, { useState, useEffect } from "react";
import { FaTrophy, FaMedal, FaFilter } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { MdSportsSoccer, MdGroups } from "react-icons/md";
import { GiSoccerBall } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { RiCalendarLine } from "react-icons/ri";

const StatisticsApp = () => {
  const [activeTab, setActiveTab] = useState("topScorers");
  const [statsData, setStatsData] = useState({
    topScorers: [],
    topAssists: [],
    wins: [],
    potm: [],
    myStats: null,
  });
  const [loading, setLoading] = useState(true);

  const fetchStatistics = async () => {
    setLoading(true);
    try {
      const API_BASE_URL = "https://your-backend-api.com/api";

      const [scorers, assists, wins, potm, myStats] = await Promise.all([
        fetch(`${API_BASE_URL}/statistics/top-scorers`).then((res) =>
          res.json()
        ),
        fetch(`${API_BASE_URL}/statistics/top-assists`).then((res) =>
          res.json()
        ),
        fetch(`${API_BASE_URL}/statistics/wins`).then((res) => res.json()),
        fetch(`${API_BASE_URL}/statistics/potm`).then((res) => res.json()),
        fetch(`${API_BASE_URL}/statistics/my-stats`).then((res) => res.json()),
      ]);

      setStatsData({
        topScorers: scorers,
        topAssists: assists,
        wins: wins,
        potm: potm,
        myStats: myStats,
      });
    } catch (error) {
      console.error("API xatosi:", error);
      loadMockData();
    } finally {
      setLoading(false);
    }
  };

  const loadMockData = () => {
    setStatsData({
      topScorers: [
        { rank: 1, name: "Maj P.", goals: 57, played: 92, perGame: 0.62 },
        { rank: 2, name: "David V.", goals: 50, played: 84, perGame: 0.6 },
        { rank: 3, name: "Jonny", goals: 46, played: 48, perGame: 0.96 },
        { rank: 4, name: "Gökha...", goals: 38, played: 104, perGame: 0.37 },
        { rank: 5, name: "Tomas...", goals: 37, played: 60, perGame: 0.62 },
        { rank: 6, name: "Jan M.", goals: 36, played: 86, perGame: 0.42 },
        { rank: 7, name: "Lagash...", goals: 32, played: 53, perGame: 0.6 },
        { rank: 8, name: "mathis I.", goals: 32, played: 56, perGame: 0.57 },
        { rank: 9, name: "Andraž", goals: 32, played: 72, perGame: 0.44 },
      ],
      topAssists: [
        { rank: 1, name: "Luka Š.", assists: 64, played: 86, perGame: 0.74 },
        { rank: 2, name: "Gökha...", assists: 36, played: 104, perGame: 0.35 },
        { rank: 3, name: "Zan S.", assists: 34, played: 128, perGame: 0.27 },
        { rank: 4, name: "mathis I.", assists: 23, played: 56, perGame: 0.41 },
        { rank: 5, name: "David V.", assists: 23, played: 84, perGame: 0.27 },
        { rank: 6, name: "Jan M.", assists: 23, played: 86, perGame: 0.27 },
        { rank: 7, name: "Maj P.", assists: 23, played: 92, perGame: 0.25 },
        { rank: 8, name: "Boris M.", assists: 19, played: 44, perGame: 0.43 },
      ],
      wins: [
        { rank: 1, name: "Zan S.", wins: 59, played: 128, winPercent: 46.1 },
        { rank: 2, name: "Saso M.", wins: 44, played: 100, winPercent: 44.0 },
        { rank: 3, name: "Gökha...", wins: 44, played: 104, winPercent: 42.3 },
        { rank: 4, name: "Rok I.", wins: 43, played: 85, winPercent: 50.6 },
        { rank: 5, name: "Jan M.", wins: 42, played: 86, winPercent: 48.8 },
        { rank: 6, name: "Maj P.", wins: 42, played: 92, winPercent: 45.7 },
        { rank: 7, name: "Ricard...", wins: 41, played: 100, winPercent: 41.0 },
        { rank: 8, name: "Luka Š.", wins: 39, played: 86, winPercent: 45.3 },
        { rank: 9, name: "Andraž", wins: 36, played: 72, winPercent: 50.0 },
      ],
      potm: [
        { rank: 1, name: "Boris M.", potm: 6, sessions: 11, winPercent: 54.5 },
        { rank: 2, name: "Jonny", potm: 4, sessions: 12, winPercent: 33.3 },
        { rank: 3, name: "Tomas...", potm: 3, sessions: 15, winPercent: 20.0 },
        { rank: 4, name: "Andraž", potm: 3, sessions: 18, winPercent: 16.7 },
        { rank: 5, name: "Antoni...", potm: 2, sessions: 5, winPercent: 40.0 },
        { rank: 6, name: "Tommy...", potm: 2, sessions: 8, winPercent: 25.0 },
        { rank: 7, name: "mathis I.", potm: 2, sessions: 14, winPercent: 14.3 },
        { rank: 8, name: "Tim B.", potm: 2, sessions: 14, winPercent: 14.3 },
        { rank: 9, name: "Jan M.", potm: 2, sessions: 22, winPercent: 9.1 },
      ],
      myStats: {
        totalGoals: 0,
        totalAssists: 0,
        potmAwards: 0,
        gamesPlayed: 0,
        avgGoals: 0.0,
        avgAssists: 0.0,
        topScorer: 0,
        topAssists: 0,
        aceAwards: 0,
        totalSessions: 0,
      },
    });
    setLoading(false);
  };

  useEffect(() => {
    fetchStatistics();
  }, []);

  const renderTableContent = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
        </div>
      );
    }

    switch (activeTab) {
      case "topScorers":
        return (
          <div className="space-y-1">
            <div className="grid grid-cols-12 gap-2 px-4 py-2 text-xs text-gray-400 font-semibold">
              <div className="col-span-1">Rank</div>
              <div className="col-span-4">Name</div>
              <div className="col-span-2 text-center">Goals</div>
              <div className="col-span-2 text-center">Played</div>
              <div className="col-span-3 text-center">Per Game</div>
            </div>
            {statsData.topScorers.map((player) => (
              <div
                key={player.rank}
                className="grid grid-cols-12 gap-2 px-4 py-3 bg-zinc-800/50 hover:bg-zinc-700/50 transition-colors items-center"
              >
                <div className="col-span-1">
                  <span
                    className={`text-lg font-bold ${
                      player.rank <= 3 ? "text-orange-500" : "text-white"
                    }`}
                  >
                    {player.rank}
                  </span>
                </div>
                <div className="col-span-4 flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                    {player.name.charAt(0)}
                  </div>
                  <span className="text-white font-medium text-sm">
                    {player.name}
                  </span>
                </div>
                <div className="col-span-2 text-center text-white font-bold text-lg">
                  {player.goals}
                </div>
                <div className="col-span-2 text-center text-gray-400 text-sm">
                  {player.played}
                </div>
                <div className="col-span-3 text-center text-gray-400 text-sm">
                  {player.perGame.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        );

      case "topAssists":
        return (
          <div className="space-y-1">
            <div className="grid grid-cols-12 gap-2 px-4 py-2 text-xs text-gray-400 font-semibold">
              <div className="col-span-1">Rank</div>
              <div className="col-span-4">Name</div>
              <div className="col-span-2 text-center">Assists</div>
              <div className="col-span-2 text-center">Played</div>
              <div className="col-span-3 text-center">Per Game</div>
            </div>
            {statsData.topAssists.map((player) => (
              <div
                key={player.rank}
                className="grid grid-cols-12 gap-2 px-4 py-3 bg-zinc-800/50 hover:bg-zinc-700/50 transition-colors items-center"
              >
                <div className="col-span-1">
                  <span
                    className={`text-lg font-bold ${
                      player.rank <= 3 ? "text-orange-500" : "text-white"
                    }`}
                  >
                    {player.rank}
                  </span>
                </div>
                <div className="col-span-4 flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center text-white text-xs font-bold">
                    {player.name.charAt(0)}
                  </div>
                  <span className="text-white font-medium text-sm">
                    {player.name}
                  </span>
                </div>
                <div className="col-span-2 text-center text-white font-bold text-lg">
                  {player.assists}
                </div>
                <div className="col-span-2 text-center text-gray-400 text-sm">
                  {player.played}
                </div>
                <div className="col-span-3 text-center text-gray-400 text-sm">
                  {player.perGame.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        );

      case "wins":
        return (
          <div className="space-y-1">
            <div className="grid grid-cols-12 gap-2 px-4 py-2 text-xs text-gray-400 font-semibold">
              <div className="col-span-1">Rank</div>
              <div className="col-span-4">Name</div>
              <div className="col-span-2 text-center">Wins</div>
              <div className="col-span-2 text-center">Played</div>
              <div className="col-span-3 text-center">Win %</div>
            </div>
            {statsData.wins.map((player) => (
              <div
                key={player.rank}
                className="grid grid-cols-12 gap-2 px-4 py-3 bg-zinc-800/50 hover:bg-zinc-700/50 transition-colors items-center"
              >
                <div className="col-span-1">
                  <span
                    className={`text-lg font-bold ${
                      player.rank <= 3 ? "text-orange-500" : "text-white"
                    }`}
                  >
                    {player.rank}
                  </span>
                </div>
                <div className="col-span-4 flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center text-white text-xs font-bold">
                    {player.name.charAt(0)}
                  </div>
                  <span className="text-white font-medium text-sm">
                    {player.name}
                  </span>
                </div>
                <div className="col-span-2 text-center text-white font-bold text-lg">
                  {player.wins}
                </div>
                <div className="col-span-2 text-center text-gray-400 text-sm">
                  {player.played}
                </div>
                <div className="col-span-3 text-center text-orange-500 font-bold text-sm">
                  {player.winPercent.toFixed(1)}%
                </div>
              </div>
            ))}
          </div>
        );

      case "potm":
        return (
          <div className="space-y-1">
            <div className="grid grid-cols-12 gap-2 px-4 py-2 text-xs text-gray-400 font-semibold">
              <div className="col-span-1">Rank</div>
              <div className="col-span-4">Name</div>
              <div className="col-span-2 text-center">POTM</div>
              <div className="col-span-2 text-center">Sessions</div>
              <div className="col-span-3 text-center">% Won</div>
            </div>
            {statsData.potm.map((player) => (
              <div
                key={player.rank}
                className="grid grid-cols-12 gap-2 px-4 py-3 bg-zinc-800/50 hover:bg-zinc-700/50 transition-colors items-center"
              >
                <div className="col-span-1">
                  <span
                    className={`text-lg font-bold ${
                      player.rank <= 3 ? "text-orange-500" : "text-white"
                    }`}
                  >
                    {player.rank}
                  </span>
                </div>
                <div className="col-span-4 flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white text-xs font-bold">
                    {player.name.charAt(0)}
                  </div>
                  <span className="text-white font-medium text-sm">
                    {player.name}
                  </span>
                </div>
                <div className="col-span-2 text-center text-white font-bold text-lg">
                  {player.potm}
                </div>
                <div className="col-span-2 text-center text-gray-400 text-sm">
                  {player.sessions}
                </div>
                <div className="col-span-3 text-center text-orange-500 font-bold text-sm">
                  {player.winPercent.toFixed(1)}%
                </div>
              </div>
            ))}
          </div>
        );

      case "myStats":
        return (
          <div className="space-y-6 pb-24">
            <div className="text-center py-6">
              <h2 className="text-xl font-bold text-white mb-6">
                My Career Stats
              </h2>
              <div className="flex justify-center gap-4 mb-8">
                <div className="bg-zinc-800/50 px-6 py-4 rounded-lg">
                  <div className="text-4xl font-bold text-orange-500">
                    {statsData.myStats.totalGoals}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Total Goals</div>
                </div>
                <div className="bg-zinc-800/50 px-6 py-4 rounded-lg">
                  <div className="text-4xl font-bold text-orange-500">
                    {statsData.myStats.totalAssists}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    Total Assists
                  </div>
                </div>
                <div className="bg-zinc-800/50 px-6 py-4 rounded-lg">
                  <div className="text-4xl font-bold text-orange-500">
                    {statsData.myStats.potmAwards}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">POTM Awards</div>
                </div>
                <div className="bg-zinc-800/50 px-6 py-4 rounded-lg">
                  <div className="text-4xl font-bold text-orange-500">
                    {statsData.myStats.gamesPlayed}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Games Played</div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800/50 rounded-2xl p-6 mx-4">
              <h3 className="text-base font-bold text-white mb-4">
                Per Game Averages
              </h3>
              <div className="flex gap-8 justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">
                    {statsData.myStats.avgGoals.toFixed(2)}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Goals</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">
                    {statsData.myStats.avgAssists.toFixed(2)}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Assists</div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800/50 rounded-2xl p-6 mx-4">
              <h3 className="text-base font-bold text-white mb-6">
                Career Badge Achievements
              </h3>
              <div className="flex justify-around">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-red-900/50 flex items-center justify-center mx-auto mb-2">
                    <FaTrophy className="w-8 h-8 text-red-500" />
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {statsData.myStats.topScorer}
                  </div>
                  <div className="text-xs text-gray-400">Top Scorer</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-900/50 flex items-center justify-center mx-auto mb-2">
                    <MdGroups className="w-8 h-8 text-blue-500" />
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {statsData.myStats.topAssists}
                  </div>
                  <div className="text-xs text-gray-400">Top Assists</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-900/50 flex items-center justify-center mx-auto mb-2">
                    <AiFillStar className="w-8 h-8 text-purple-500" />
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {statsData.myStats.aceAwards}
                  </div>
                  <div className="text-xs text-gray-400">Ace</div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800/50 rounded-2xl p-6 mx-4">
              <div className="flex justify-between items-center">
                <h3 className="text-base font-bold text-white">
                  Event History
                </h3>
                <div className="text-sm text-gray-400">
                  Total Sessions:{" "}
                  <span className="text-white font-bold">
                    {statsData.myStats.totalSessions}
                  </span>
                </div>
              </div>
            </div>

            <button className="mx-4 w-[calc(100%-2rem)] bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2">
              <IoStatsChart className="w-5 h-5" />
              Detailed
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white pb-20">
      {/* Status Bar */}
      {/* <div className="bg-black px-4 py-2 flex items-center justify-between text-xs">
        <div className="flex items-center gap-1">
          <span className="font-semibold">17:54</span>
        </div>
        <div className="flex items-center gap-2">
          <span>LTE</span>
          <div className="flex gap-0.5">
            <div className="w-1 h-3 bg-white rounded-sm"></div>
            <div className="w-1 h-3 bg-white rounded-sm"></div>
            <div className="w-1 h-3 bg-white rounded-sm"></div>
            <div className="w-1 h-3 bg-white/50 rounded-sm"></div>
          </div>
        </div>
      </div> */}

      {/* Header */}
      <div className="bg-zinc-900 px-4 py-4 flex items-center justify-between border-b border-zinc-800">
        <h1 className="text-xl font-bold">Statistics</h1>
        <button className="text-orange-500 p-2">
          <FaFilter className="w-5 h-5" />
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-zinc-900 px-2 border-b border-zinc-800">
        <div className="flex gap-1 overflow-x-auto pb-2 pt-2">
          <button
            onClick={() => setActiveTab("topScorers")}
            className={`px-4 py-2 text-xs font-semibold whitespace-nowrap rounded-lg transition-all ${
              activeTab === "topScorers"
                ? "bg-orange-500 text-white"
                : "bg-zinc-800/50 text-gray-400"
            }`}
          >
            Top Scorers
          </button>
          <button
            onClick={() => setActiveTab("topAssists")}
            className={`px-4 py-2 text-xs font-semibold whitespace-nowrap rounded-lg transition-all ${
              activeTab === "topAssists"
                ? "bg-orange-500 text-white"
                : "bg-zinc-800/50 text-gray-400"
            }`}
          >
            Top Assists
          </button>
          <button
            onClick={() => setActiveTab("wins")}
            className={`px-4 py-2 text-xs font-semibold whitespace-nowrap rounded-lg transition-all ${
              activeTab === "wins"
                ? "bg-orange-500 text-white"
                : "bg-zinc-800/50 text-gray-400"
            }`}
          >
            Wins
          </button>
          <button
            onClick={() => setActiveTab("potm")}
            className={`px-4 py-2 text-xs font-semibold whitespace-nowrap rounded-lg transition-all ${
              activeTab === "potm"
                ? "bg-orange-500 text-white"
                : "bg-zinc-800/50 text-gray-400"
            }`}
          >
            POTM
          </button>
          <button
            onClick={() => setActiveTab("myStats")}
            className={`px-4 py-2 text-xs font-semibold whitespace-nowrap rounded-lg transition-all ${
              activeTab === "myStats"
                ? "bg-orange-500 text-white"
                : "bg-zinc-800/50 text-gray-400"
            }`}
          >
            My Stats
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-2 py-3">{renderTableContent()}</div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800 px-6 py-3">
        <div className="flex justify-around items-center">
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <BiHomeAlt className="w-6 h-6" />
            <span className="text-[10px]">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <GiSoccerBall className="w-6 h-6" />
            <span className="text-[10px]">Games</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <RiCalendarLine className="w-6 h-6" />
            <span className="text-[10px]">Sessions</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-orange-500">
            <IoStatsChart className="w-6 h-6" />
            <span className="text-[10px]">Stats</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <MdSportsSoccer className="w-6 h-6" />
            <span className="text-[10px]">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatisticsApp;