import React, { useEffect, useState } from "react";
import {
  User,
  Settings,
  Moon,
  Bell,
  MessageCircle,
  Info,
  LogOut,
} from "lucide-react";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

//   useEffect(() => {
//     if (window.Telegram?.WebApp) {
//       const tg = window.Telegram.WebApp;
//       tg.ready();

//       const tgUser = tg.initDataUnsafe.user;
//       setUser(tgUser);
//     }
//       }, []);
    

useEffect(() => {
  const tg = window.Telegram?.WebApp;
  if (!tg) return;

  tg.ready();

  const user = tg.initDataUnsafe?.user;
  console.log("TG USER:", user);

  if (user) {
    setUser(user);
  }
}, []);



  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white pb-24">
      {/* HEADER */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-b-3xl p-6 relative">
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full border-4 border-white flex items-center justify-center text-4xl font-bold">
            {user.first_name?.charAt(0)}
          </div>
        </div>

        <h1 className="text-center text-xl font-semibold mt-3">
          {user.first_name} {user.last_name}
        </h1>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-3 mt-4 text-center">
          {[
            { label: "Games Played", value: 0 },
            { label: "Won", value: 0 },
            { label: "Lost", value: 0 },
          ].map((item, i) => (
            <div key={i} className="bg-orange-400/30 rounded-xl py-2 text-sm">
              <div className="font-bold text-lg">{item.value}</div>
              {item.label}
            </div>
          ))}
        </div>
      </div>

      {/* ACCOUNT */}
      <Section title="Account">
        <Item icon={<User />} text="Profile Info" />
      </Section>

      {/* PREFERENCES */}
      <Section title="Preferences">
        <Item
          icon={<Moon />}
          text="Dark Mode"
          right={
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="accent-orange-500"
            />
          }
        />
        <Item
          icon={<Bell />}
          text="Notifications"
          right={<input type="checkbox" className="accent-orange-500" />}
        />
      </Section>

      {/* MORE */}
      <Section title="More">
        <Item icon={<MessageCircle />} text="Live Support" />
        <Item icon={<Info />} text="About" />
        <Item
          icon={<LogOut />}
          text="Log Out"
          danger
          onClick={() => window.Telegram.WebApp.close()}
        />
      </Section>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="px-4 mt-6">
    <h2 className="text-gray-400 mb-2">{title}</h2>
    <div className="space-y-3">{children}</div>
  </div>
);

const Item = ({ icon, text, right, danger, onClick }) => (
  <div
    onClick={onClick}
    className={`flex items-center justify-between px-4 py-3 rounded-xl border border-orange-500/40 ${
      danger ? "text-red-500" : ""
    }`}
  >
    <div className="flex items-center gap-3">
      {icon}
      <span>{text}</span>
    </div>
    {right}
  </div>
);

export default Profile;
