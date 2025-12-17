import React, { useState, useEffect } from "react";
import {
  MapPin,
  Clock,
  Users,
  Filter,
  MessageCircle,
  Calendar,
} from "lucide-react";

// Mock API data
const mockGames = [
  {
    id: 1,
    day: "TUE",
    date: "09",
    month: "Dec",
    image:
      "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=800&q=80",
    title: "7v7v7 LJ",
    subtitle: "Original",
    location: "Park Šiška",
    time: "23:00 - 00:30",
    price: 5,
    playersLeft: 0,
    totalPlayers: 21,
    isOutdoor: true,
    hasLockers: true,
    hasShowers: true,
    type: "7v7v7",
    advance: 4,
  },
  {
    id: 2,
    day: "WED",
    date: "10",
    month: "Dec",
    image:
      "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=800&q=80",
    title: "7v7v7 LJ",
    subtitle: "Original",
    location: "Park Šiška",
    time: "23:00 - 00:30",
    price: 5,
    playersLeft: 3,
    totalPlayers: 21,
    isOutdoor: true,
    hasLockers: true,
    hasShowers: true,
    type: "7v7v7",
    advance: 4,
  },
  {
    id: 3,
    day: "THU",
    date: "11",
    month: "Dec",
    image:
      "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=800&q=80",
    title: "5v5 LJ",
    subtitle: "Evening Match",
    location: "City Arena",
    time: "20:00 - 21:30",
    price: 7,
    playersLeft: 5,
    totalPlayers: 10,
    isOutdoor: false,
    hasLockers: true,
    hasShowers: true,
    type: "5v5",
    advance: 3,
  },
  {
    id: 4,
    day: "FRI",
    date: "12",
    month: "Dec",
    image:
      "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=800&q=80",
    title: "8v8 LJ",
    subtitle: "Weekend Special",
    location: "Sport Center",
    time: "19:00 - 20:30",
    price: 6,
    playersLeft: 2,
    totalPlayers: 16,
    isOutdoor: true,
    hasLockers: false,
    hasShowers: true,
    type: "8v8",
    advance: 5,
  },
];

const App = () => {
  const [games, setGames] = useState([]);
  const [activeTab, setActiveTab] = useState("games");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setGames(mockGames);
      setLoading(false);
    }, 800);
  }, []);

  const GameCard = ({ game }) => {
    const [players, setPlayers] = useState(game.totalPlayers);

    const handleJoinReserve = () => {
      if (game.playersLeft > 0) {
        alert(`Joining ${game.title}! Reserve confirmed.`);
      }
    };

    return (
      <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-3xl overflow-hidden shadow-2xl mb-4 border border-zinc-700">
        {/* Image with Date Badge */}
        <div className="relative">
          <img
            src={game.image}
            alt={game.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-3 left-3 bg-black/25 rounded-2xl px-3 py-2 text-center min-w-[60px] backdrop-blur-sm">
            <div className=" text-orange-500 font-bold text-sm uppercase">
              {game.day}
            </div>
          </div>
          <div className="absolute top-3 right-3 rounded-2xl px-3 py-2 text-center min-w-[60px] bg-gray backdrop-blur-sm">
            <div className="text-white font-bold text-2xl">{game.date}</div>
            <div className="text-white text-xs">{game.month}</div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Title */}
          <div className="mb-3">
            <h3 className="text-white font-bold text-xl">{game.title}</h3>
            <p className="text-orange-400 text-sm">{game.subtitle}</p>
          </div>

          {/* Location & Time */}
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-4 h-4 text-zinc-400" />
            <span className="text-zinc-300 text-sm">{game.location}</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-4 h-4 text-orange-500" />
            <span className="text-orange-400 text-sm font-semibold">
              {game.time}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
              <Users className="w-3 h-3" />
              {game.playersLeft} left
            </span>
            {game.isOutdoor && (
              <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-semibold">
                🌳 Outdoor
              </span>
            )}
            {game.hasLockers && (
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold">
                🔐 Lockers
              </span>
            )}
            {game.hasShowers && (
              <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs font-semibold">
                🚿 Showers
              </span>
            )}
            <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-xs font-semibold">
              {game.type}
            </span>
            <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs font-semibold">
              Advance {game.advance}
            </span>
          </div>

          {/* Bottom Action Bar */}
          <div className="flex items-center justify-between">
            <div className="bg-orange-500 rounded-full px-4 py-2">
              <span className="text-white font-bold text-lg">
                €{game.price}
              </span>
            </div>

            <button
              onClick={handleJoinReserve}
              className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-1.5 rounded-full font-semibold flex items-center gap-2 transition-all text-[14px]"
            >
              <Clock className="w-4 h-4" />
              Join as Reserve
            </button>

            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 border-2 border-zinc-800" />
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 border-2 border-zinc-800" />
              </div>
              <span className="text-white text-sm font-semibold">
                {players} Going
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-zinc-950 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 px-4 py-4 sticky top-0 z-50 border-b border-zinc-800">
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-full border-2 border-orange-500 flex items-center justify-center">
            <div className="w-3  h-3 rounded-full bg-orange-500" />
          </div>
          <h1 className="text-2xl font-bold text-orange-500">GoForFun</h1>
          <div className="flex gap-3">
            <Filter className="w-6 h-6 text-white cursor-pointer" />
            <MessageCircle className="w-6 h-6 text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-4">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div>
            {games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        )}
      </div>

      {/* Bottom Navigation
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-950 via-zinc-950 to-transparent">
        <div className="bg-zinc-900/95 backdrop-blur-xl border-t border-zinc-800 px-6 py-3">
          <div className="flex justify-around items-center">
            <button
              onClick={() => setActiveTab("home")}
              className={`flex flex-col items-center gap-1 transition-colors ${
                activeTab === "home" ? "text-orange-500" : "text-zinc-500"
              }`}
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <div
                  className={`w-6 h-6 rounded-lg ${
                    activeTab === "home" ? "bg-orange-500" : "bg-zinc-700"
                  }`}
                />
              </div>
              <span className="text-xs font-semibold">Home</span>
            </button>

            <button
              onClick={() => setActiveTab("games")}
              className={`flex flex-col items-center gap-1 transition-colors ${
                activeTab === "games" ? "text-orange-500" : "text-zinc-500"
              }`}
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold">Games</span>
            </button>

            <button
              onClick={() => setActiveTab("sessions")}
              className={`flex flex-col items-center gap-1 transition-colors ${
                activeTab === "sessions" ? "text-orange-500" : "text-zinc-500"
              }`}
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <Calendar className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold">Sessions</span>
            </button>

            <button
              onClick={() => setActiveTab("stats")}
              className={`flex flex-col items-center gap-1 transition-colors ${
                activeTab === "stats" ? "text-orange-500" : "text-zinc-500"
              }`}
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <div className="flex flex-col gap-0.5">
                  <div
                    className={`w-1 h-3 rounded-full ${
                      activeTab === "stats" ? "bg-orange-500" : "bg-zinc-700"
                    }`}
                  />
                  <div
                    className={`w-1 h-4 rounded-full ${
                      activeTab === "stats" ? "bg-orange-500" : "bg-zinc-700"
                    }`}
                  />
                  <div
                    className={`w-1 h-2 rounded-full ${
                      activeTab === "stats" ? "bg-orange-500" : "bg-zinc-700"
                    }`}
                  />
                </div>
              </div>
              <span className="text-xs font-semibold">Stats</span>
            </button>

            <button
              onClick={() => setActiveTab("profile")}
              className={`flex flex-col items-center gap-1 transition-colors ${
                activeTab === "profile" ? "text-orange-500" : "text-zinc-500"
              }`}
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <div
                  className={`w-6 h-6 rounded-full ${
                    activeTab === "profile" ? "bg-orange-500" : "bg-zinc-700"
                  }`}
                />
              </div>
              <span className="text-xs font-semibold">Profile</span>
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default App;
