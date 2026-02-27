import { Button } from "./ui/button";
import i18n from "@/i18n";

export default function LanguageToggle() {
  const isPT = i18n.language === "pt";

  const toggleLanguage = () => {
    i18n.changeLanguage(isPT ? "en" : "pt");
  };

  return (
    <Button
      onClick={toggleLanguage}
      className="
        relative w-20 h-10 p-0
        bg-white
        overflow-hidden
        flex items-center
      "
    >
      {/* Slider */}
      <div
        className={`
          absolute top-1 bottom-1 w-1/2 
          bg-black 
          transition-all duration-300
          ${isPT ? "left-1" : "left-8.75"}
        `}
      />

      {/* Labels */}
      <span
        className={`
          w-1/2 text-center text-xs font-bold z-10
          transition-colors duration-300
          ${isPT ? "text-white" : "text-black "}
        `}
      >
        PT
      </span>

      <span
        className={`
          w-1/2 text-center text-xs font-bold z-10
          transition-colors duration-300
          ${!isPT ? "text-white" : "text-black"}
        `}
      >
        EN
      </span>
    </Button>
  );
}
