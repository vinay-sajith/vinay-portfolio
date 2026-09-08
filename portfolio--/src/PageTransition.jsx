import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function PageTransition({ children }) {
  const location = useLocation();

  const [active, setActive] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);

  const [origin, setOrigin] = useState({
    x: "50%",
    y: "50%",
  });

  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false);
      return;
    }

    const flame = document.querySelector(".flame-icon");

    if (flame) {
      const rect = flame.getBoundingClientRect();

      setOrigin({
        x: `${rect.left + rect.width / 2}px`,
        y: `${rect.top + rect.height / 2}px`,
      });
    }

    setActive(true);

    const timer = setTimeout(() => {
      setActive(false);
    }, 900);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <div className={`page-content ${active ? "page-exit" : ""}`}>
        {children}
      </div>

      {/* Expanding yellow circle */}
      <div
        className={`transition-circle ${
          active ? "circle-expand" : ""
        }`}
        style={{
          left: origin.x,
          top: origin.y,
        }}
      />

      {/* Fire stays small */}
      <div
        className={`transition-flame ${
          active ? "flame-transition" : ""
        }`}
        style={{
          left: origin.x,
          top: origin.y,
        }}
      >
        🔥
      </div>
    </>
  );
}

export default PageTransition;