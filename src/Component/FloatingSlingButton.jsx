
import React from "react";
import SlingButton from "@/components/SlingButton";

const FloatingSlingButton = () => {
  const handleSend = () => {
    document.getElementById("home")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-[9999]">
      <SlingButton
        onSend={handleSend}
        size={64}
        axis="any"
        tapSends={true}
        armAt={35}
        maxPull={140}
        padColor="#E3332B"
        iconColor="#FFFFFF"
        accentColor="#E3332B"
        wellColor="#171717"
        bandColor="#171717"
        ariaLabel="Let's talk"
      >
        ↗
      </SlingButton>
    </div>
  );
};

export default FloatingSlingButton;
