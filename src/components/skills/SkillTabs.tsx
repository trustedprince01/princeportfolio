
import React from "react";

type SkillTabsProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const SkillTabs = ({ activeTab, setActiveTab }: SkillTabsProps) => {
  return (
    <div className="flex mb-6 border-b border-white/10">
      <button
        onClick={() => setActiveTab("frontend")}
        className={`flex-1 pb-3 text-center transition-colors text-sm sm:text-base ${
          activeTab === "frontend" ? "text-white border-b-2 border-white" : "text-gray-400 hover:text-gray-300"
        }`}
      >
        Frontend
      </button>
      <button
        onClick={() => setActiveTab("backend")}
        className={`flex-1 pb-3 text-center transition-colors text-sm sm:text-base ${
          activeTab === "backend" ? "text-white border-b-2 border-white" : "text-gray-400 hover:text-gray-300"
        }`}
      >
        Backend
      </button>
      <button
        onClick={() => setActiveTab("other")}
        className={`flex-1 pb-3 text-center transition-colors text-sm sm:text-base ${
          activeTab === "other" ? "text-white border-b-2 border-white" : "text-gray-400 hover:text-gray-300"
        }`}
      >
        Tools & Others
      </button>
    </div>
  );
};
