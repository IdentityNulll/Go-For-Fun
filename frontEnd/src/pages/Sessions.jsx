import React, { useState, useEffect } from "react";
import {
  MapPin,
  Clock,
  Users,
  Filter,
  Calendar,
  TrendingUp,
  Home,
  User,
} from "lucide-react";

// Mock API data for Sessions
const mockLiveEvents = [];

const mockFutureEvents = [
  {
    id: 1,
    title: "7v7v7 LJ Original",
    location: "Park Šiška",
    date: "09 Dec 2025",
    time: "23:00 - 00:30",
    attending: 21,
    gameType: "7v7v7",
    status: "Not Attending",
    countdown: "0d 7h 32m",
  },
  {
    id: 2,
    title: "7v7v7 LJ Original",
    location: "Park Šiška",
    date: "10 Dec 2025",
    time: "22:30 - 00:00",
    attending: 20,
    gameType: "7v7v7",
    status: "Not Attending",
    countdown: "1d 7h 2m",
  },
  {
    id: 3,
    title: "5v5 Evening Match",
    location: "City Arena",
    date: "11 Dec 2025",
    time: "20:00 - 21:30",
    attending: 10,
    gameType: "5v5",
    status: "Not Attending",
    countdown: "2d 5h 32m",
  },
  {
    id: 4,
    title: "8v8 Weekend Special",
    location: "Sport Center",
    date: "12 Dec 2025",
    time: "19:00 - 20:30",
    attending: 16,
    gameType: "8v8",
    status: "Not Attending",
    countdown: "3d 4h 32m",
  },
];

const mockPastEvents = Array.from({ length: 94 }, (_, i) => ({
  id: i + 1,
  title: "7v7v7 LJ Original",
  location: "Park Šiška",
  date: `0${7 - (i % 7)} Dec 2025`,
  time: `${18 + (i % 3)}:${i % 2 === 0 ? "00" : "30"} - ${20 + (i % 3)}:${
    i % 2 === 0 ? "30" : "00"
  }`,
  attending: 21,
  gameType: "7v7v7",
  status: i % 3 === 0 ? "Completed" : "Did Not Attend",
}));

const App = () => {
  const [activeTab, setActiveTab] = useState("sessions");
  const [sessionTab, setSessionTab] = useState("future");
  const [liveEvents, setLiveEvents] = useState([]);
  const [futureEvents, setFutureEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call - Replace with real backend
    // fetch('YOUR_BACKEND_URL/events/live').then(res => res.json()).then(data => setLiveEvents(data))
    // fetch('YOUR_BACKEND_URL/events/future').then(res => res.json()).then(data => setFutureEvents(data))
    // fetch('YOUR_BACKEND_URL/events/past').then(res => res.json()).then(data => setPastEvents(data))

    setTimeout(() => {
      setLiveEvents(mockLiveEvents);
      setFutureEvents(mockFutureEvents);
      setPastEvents(mockPastEvents);
      setLoading(false);
    }, 800);
  }, []);

  const EventCard = ({ event, isPast = false }) => {
    return (
      <div
        className={`rounded-2xl p-4 mb-3 border-2 ${
          isPast
            ? "bg-zinc-900/50 border-orange-500"
            : "bg-zinc-900/50 border-blue-500"
        }`}
      >
        <h3 className="text-white font-bold text-lg mb-3">{event.title}</h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-zinc-400" />
            <span className="text-zinc-300 text-sm">{event.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-zinc-400" />
            <span className="text-zinc-300 text-sm">
              {event.date} • {event.time}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4 text-orange-500" />
              <span className="text-white text-sm font-semibold">
                {event.attending} attending
              </span>
            </div>
            <div className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-xs font-semibold">
              {event.gameType}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <button
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              isPast ? "bg-zinc-700 text-zinc-300" : "bg-zinc-500 text-zinc-300"
            }`}
          >
            {event.status}
          </button>
          {!isPast && event.countdown && (
            <span className="text-orange-500 text-sm font-semibold">
              {event.countdown}
            </span>
          )}
          {isPast && event.status === "Completed" && (
            <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
              <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
                ✓
              </div>
              Completed
            </div>
          )}
        </div>
      </div>
    );
  };

  const SessionsContent = () => {
    return (
      <div className="px-4 pb-4">
        {/* Tab Buttons */}
        <div className="flex gap-2 mb-6 bg-zinc-900/50 p-1 rounded-2xl">
          <button
            onClick={() => setSessionTab("live")}
            className={`flex-1 py-3 rounded-xl font-semibold text-sm transition-all ${
              sessionTab === "live"
                ? "bg-orange-500 text-white"
                : "text-zinc-400"
            }`}
          >
            Live
          </button>
          <button
            onClick={() => setSessionTab("future")}
            className={`flex-1 py-3 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
              sessionTab === "future"
                ? "bg-orange-500 text-white"
                : "text-zinc-400"
            }`}
          >
            Future
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${
                sessionTab === "future"
                  ? "bg-white/20 text-white"
                  : "bg-orange-500 text-white"
              }`}
            >
              {futureEvents.length}
            </span>
          </button>
          <button
            onClick={() => setSessionTab("past")}
            className={`flex-1 py-3 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
              sessionTab === "past"
                ? "bg-orange-500 text-white"
                : "text-zinc-400"
            }`}
          >
            Past
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${
                sessionTab === "past"
                  ? "bg-white/20 text-white"
                  : "bg-orange-500 text-white"
              }`}
            >
              {pastEvents.length}
            </span>
          </button>
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div>
            {/* Live Events */}
            {sessionTab === "live" && (
              <div>
                <h2 className="text-white font-bold text-xl mb-4">
                  Live Events ({liveEvents.length})
                </h2>
                {liveEvents.length === 0 ? (
                  <div className="bg-zinc-900/50 rounded-3xl p-12 text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-zinc-800 rounded-full flex items-center justify-center">
                      <Users className="w-10 h-10 text-zinc-600" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">
                      No Live Events
                    </h3>
                    <p className="text-zinc-400 text-sm">
                      No events are currently live or starting soon.
                    </p>
                  </div>
                ) : (
                  liveEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))
                )}
              </div>
            )}

            {/* Future Events */}
            {sessionTab === "future" && (
              <div>
                <h2 className="text-white font-bold text-xl mb-4">
                  Future Events ({futureEvents.length})
                </h2>
                {futureEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            )}

            {/* Past Events */}
            {sessionTab === "past" && (
              <div>
                <h2 className="text-white font-bold text-xl mb-4">
                  Past Events ({pastEvents.length})
                </h2>
                {pastEvents.slice(0, 10).map((event) => (
                  <EventCard key={event.id} event={event} isPast={true} />
                ))}
                {pastEvents.length > 10 && (
                  <button className="w-full bg-zinc-800 text-white py-3 rounded-2xl font-semibold mt-2 hover:bg-zinc-700 transition-colors">
                    Load More ({pastEvents.length - 10} more)
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-zinc-950 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 px-4 py-6 sticky top-0 z-50 border-b border-zinc-800">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Sessions</h1>
          {sessionTab === "past" && (
            <Filter className="w-6 h-6 text-white cursor-pointer" />
          )}
        </div>
      </div>

      {/* Content */}
      {activeTab === "sessions" && <SessionsContent />}

      {/* Bottom Navigation */}
      {/* <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-950 via-zinc-950 to-transparent">
        <div className="bg-zinc-900/95 backdrop-blur-xl border-t-2 border-orange-500 px-6 py-3 rounded-t-3xl">
          <div className="flex justify-around items-center">
            <button
              onClick={() => setActiveTab("home")}
              className={`flex flex-col items-center gap-1 transition-colors ${
                activeTab === "home" ? "text-orange-500" : "text-zinc-500"
              }`}
            >
              <Home className="w-6 h-6" />
              <span className="text-xs font-semibold">Home</span>
            </button>

            <button
              onClick={() => setActiveTab("games")}
              className={`flex flex-col items-center gap-1 transition-colors ${
                activeTab === "games" ? "text-orange-500" : "text-zinc-500"
              }`}
            >
              <Users className="w-6 h-6" />
              <span className="text-xs font-semibold">Games</span>
            </button>

            <button
              onClick={() => setActiveTab("sessions")}
              className={`flex flex-col items-center gap-1 transition-colors ${
                activeTab === "sessions" ? "text-orange-500" : "text-zinc-500"
              }`}
            >
              <Calendar
                className={`w-6 h-6 ${
                  activeTab === "sessions" ? "fill-orange-500" : ""
                }`}
              />
              <span className="text-xs font-semibold">Sessions</span>
            </button>

            <button
              onClick={() => setActiveTab("stats")}
              className={`flex flex-col items-center gap-1 transition-colors ${
                activeTab === "stats" ? "text-orange-500" : "text-zinc-500"
              }`}
            >
              <TrendingUp className="w-6 h-6" />
              <span className="text-xs font-semibold">Stats</span>
            </button>

            <button
              onClick={() => setActiveTab("profile")}
              className={`flex flex-col items-center gap-1 transition-colors ${
                activeTab === "profile" ? "text-orange-500" : "text-zinc-500"
              }`}
            >
              <User className="w-6 h-6" />
              <span className="text-xs font-semibold">Profile</span>
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default App;
 