"use client";

import { useState } from "react";
import { Bell, Lock, Globe, Zap, Eye, Volume2 } from "lucide-react";

interface Setting {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const settings: Setting[] = [
  {
    icon: <Bell size={20} />,
    title: "Notifications",
    description: "Manage email and push notifications",
  },
  {
    icon: <Lock size={20} />,
    title: "Security",
    description: "Update password and security settings",
  },
  {
    icon: <Globe size={20} />,
    title: "Language & Region",
    description: "Set your preferred language and timezone",
  },
  {
    icon: <Eye size={20} />,
    title: "Privacy",
    description: "Control your privacy settings",
  },
  {
    icon: <Volume2 size={20} />,
    title: "Sound",
    description: "Manage audio and notification sounds",
  },
  {
    icon: <Zap size={20} />,
    title: "Performance",
    description: "Optimize application performance",
  },
];

export default function Settings() {
  const [toggleStates, setToggleStates] = useState({
    notifications: true,
    darkMode: false,
    autoSave: true,
    emailUpdates: false,
  });

  const handleToggle = (key: keyof typeof toggleStates) => {
    setToggleStates((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="p-8 md:p-12 max-w-4xl">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Settings
          </h1>
          <p className="text-lg text-gray-600">
            Customize your experience and preferences.
          </p>
        </div>

        {/* Preferences */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Preferences
          </h2>
          <div className="space-y-4">
            {[
              {
                label: "Enable Notifications",
                key: "notifications" as const,
              },
              {
                label: "Auto-save Changes",
                key: "autoSave" as const,
              },
              {
                label: "Email Updates",
                key: "emailUpdates" as const,
              },
            ].map((pref) => (
              <div
                key={pref.label}
                className="flex items-center justify-between bg-gray-50 border border-gray-300 rounded-lg p-4"
              >
                <span className="font-medium text-gray-900">{pref.label}</span>
                <button
                  onClick={() => handleToggle(pref.key)}
                  className={`relative w-12 h-6 rounded-full transition ${toggleStates[pref.key]
                      ? "bg-gray-700"
                      : "bg-gray-300"
                    }`}
                >
                  <div
                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${toggleStates[pref.key] ? "translate-x-6" : "translate-x-0"
                      }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Settings Categories */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Settings Categories
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {settings.map((setting, index) => (
              <button
                key={index}
                className="flex items-start gap-4 bg-gray-50 border border-gray-300 rounded-lg p-4 hover:border-gray-400 transition text-left"
              >
                <div className="text-gray-700 flex-shrink-0">{setting.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-900">{setting.title}</h3>
                  <p className="text-gray-600 text-sm">{setting.description}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Danger Zone */}
        <section className="border-t border-gray-300 pt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Danger Zone
          </h2>
          <div className="bg-gray-50 border border-gray-400 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Delete Account</h3>
            <p className="text-gray-600 text-sm mb-4">
              Once you delete your account, there is no going back. Please be certain.
            </p>
            <button className="px-4 py-2 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition">
              Delete Account
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}