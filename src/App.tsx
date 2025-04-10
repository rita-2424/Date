import { useState, useEffect, useRef } from "react";
import "./App.css";

const phrases = [
  "No ",
  "pleaseee",
  "please just think about it",
  "Don't do this to me",
  "I'm gonna cry...",
  "You're breaking my heart :(",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [noPressed, setNoPressed] = useState(false);
  const [yesPressed, setYesPressed] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });
  const [showMealSelection, setShowMealSelection] = useState(false);
  const [mealSelected, setMealSelected] = useState<
    null | "option1" | "option2" | "option3" | "option4"
  >(null);
  const [showThankYou, setShowThankYou] = useState(false);
  const [activeMealIndex, setActiveMealIndex] = useState(0);
  const [showNavigationButtons, setShowNavigationButtons] = useState(false);

  const mealOptionsRef = useRef<HTMLDivElement | null>(null);

  const meals = [
    {
      id: "option1",
      title: "Sweet treat date🍰",
      message: "Yeiyy! you my dear have great taste🤭",
      image:
        "https://images.pexels.com/photos/3592423/pexels-photo-3592423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "option2",
      title: "Pizza🍕 + Movie date",
      message: "Yeiyyyy! wewe sasa ndo unajua😼🤌",
      image:
        "https://images.pexels.com/photos/2295285/pexels-photo-2295285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "option3",
      title: "Romantic dinner🍷",
      message: "Classy choice! Can't wait to wine and dine you😘",
      image:
        "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "option4",
      title: "Picnic in the park🌳",
      message: "Nature and you? Perfect combination!🌞",
      image:
        "https://images.pexels.com/photos/3321791/pexels-photo-3321791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  const yesButtonSize = 16 + noCount * 4;
  const noButtonSize = 16 - noCount * 4;
  const noButtonPadding = 8 - noCount * 0.5;

  useEffect(() => {
    const yesButton = document.querySelector(".yesButton");
    const buttonContainer = document.querySelector(".button-container");

    if (yesButton && buttonContainer) {
      const yesButtonRect = yesButton.getBoundingClientRect();
      const containerRect = buttonContainer.getBoundingClientRect();

      const initialLeft =
        yesButtonRect.left - containerRect.left + yesButtonRect.width + 10;
      const initialTop = yesButtonRect.top - containerRect.top;

      setButtonPosition({ top: initialTop, left: initialLeft });
    }
  }, []);

  useEffect(() => {
    if (yesPressed) {
      setShowNavigationButtons(true);
      const timer = setTimeout(() => {
        setShowMealSelection(true);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [yesPressed]);

  useEffect(() => {
    if (mealSelected) {
      const timer = setTimeout(() => {
        setShowThankYou(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [mealSelected]);

  const scrollLeft = () => {
    setActiveMealIndex((prev) => (prev === 0 ? meals.length - 1 : prev - 1));
  };

  const scrollRight = () => {
    setActiveMealIndex((prev) => (prev === meals.length - 1 ? 0 : prev + 1));
  };

  function handleNoClick() {
    setNoCount(noCount + 1);
    setNoPressed(true);

    const buttonContainer = document.querySelector(".button-container");

    if (buttonContainer) {
      const containerRect = buttonContainer.getBoundingClientRect();
      const maxTop = containerRect.height - 50;
      const maxLeft = containerRect.width - 100;

      const newTop = Math.random() * maxTop;
      const newLeft = Math.random() * maxLeft;

      setButtonPosition({ top: newTop, left: newLeft });
    }
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  const image = noPressed
    ? "https://media.tenor.com/0nb_g8Y5NzQAAAAi/milk-and-mocha-cute.gif"
    : "https://media.tenor.com/dvd-P282whYAAAAi/milk-and-mocha-cute.gif";

  const renderNavigationButtons = () => {
    if (!showNavigationButtons) return null;

    return (
      <div className="nav-buttons">
        <button
          className="back-button"
          onClick={() => {
            if (showThankYou) {
              setShowThankYou(false);
              setMealSelected(null);
            } else if (mealSelected) {
              setMealSelected(null);
            } else if (showMealSelection) {
              setShowMealSelection(false);
              setYesPressed(false);
            } else {
              setYesPressed(false);
            }
          }}
        >
          Back
        </button>
        <button
          className="exit-button"
          onClick={() => {
            setNoCount(0);
            setNoPressed(false);
            setYesPressed(false);
            setShowMealSelection(false);
            setMealSelected(null);
            setShowThankYou(false);
            setShowNavigationButtons(false);
          }}
        >
          Exit
        </button>
      </div>
    );
  };

  if (yesPressed) {
    if (showMealSelection) {
      if (showThankYou) {
        return (
          <div className="valentine-container">
            <div className="thank-you-text">
              <p className="marquee-text star-text sub-text">
                Picking you up at 12:00 P.M! Bring that pretty smile💐
              </p>
            </div>
            <img
              src="https://media.tenor.com/d2nnuVMvPbcAAAAi/milk-and-mocha-milk-and-mocha-bear.gif"
              alt="Thank You"
              width="300px"
              height="300px"
            />
            {renderNavigationButtons()}
          </div>
        );
      } else if (mealSelected) {
        const selectedMeal = meals.find((meal) => meal.id === mealSelected);
        return (
          <div className="valentine-container">
            <div className="selected-meal">
              <h1 className="soft-glow-text">{selectedMeal?.title}</h1>
              <p>{selectedMeal?.message}</p>
              <div className="image-container">
                <img
                  src={selectedMeal?.image}
                  alt={selectedMeal?.title}
                  className="meal-image"
                />
              </div>
            </div>
            {renderNavigationButtons()}
          </div>
        );
      } else {
        return (
          <div className="valentine-container">
            <h1 className="glow">What would you wanna eat for our date?</h1>
            <div className="carousel-container">
              <button className="scroll-button left" onClick={scrollLeft}>
                ‹
              </button>
              <div className="meal-options" ref={mealOptionsRef}>
                {meals.map((meal, index) => (
                  <div
                    key={meal.id}
                    className={`meal-option ${
                      index === activeMealIndex
                        ? "active"
                        : index ===
                          (activeMealIndex - 1 + meals.length) % meals.length
                        ? "left"
                        : index === (activeMealIndex + 1) % meals.length
                        ? "right"
                        : "hidden"
                    }`}
                    onClick={() =>
                      index === activeMealIndex &&
                      setMealSelected(
                        meal.id as "option1" | "option2" | "option3" | "option4"
                      )
                    }
                  >
                    <div className="image-container">
                      <img
                        src={meal.image}
                        alt={meal.title}
                        className="meal-image"
                      />
                      {index === activeMealIndex && (
                        <button className="mealButton">{meal.title}</button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <button className="scroll-button right" onClick={scrollRight}>
                ›
              </button>
            </div>
            {renderNavigationButtons()}
          </div>
        );
      }
    } else {
      return (
        <div className="valentine-container">
          <img
            alt="bears kissing"
            src="https://media.tenor.com/sQCzvx3U2J8AAAAi/milk-and-mocha.gif"
            width="300px"
            height="300px"
          />
          <div className="soft-glow-text">Yeiiyyy!!!😫 Thank you !!🥹</div>
          {renderNavigationButtons()}
        </div>
      );
    }
  } else {
    return (
      <div className="valentine-container">
        <p>
          <div className="image-container-small">
            <img
              alt="bears with hearts"
              src={image}
              width="300px"
              height="300px"
            />
          </div>
        </p>
        <div className="text">
          Heyyy, will you be my date on the 20th of February💐💞?
        </div>
        <div className="button-container">
          <button
            className="yesButton"
            style={{ fontSize: `${yesButtonSize}px` }}
            onClick={() => setYesPressed(true)}
          >
            Yes
          </button>
          <button
            onClick={handleNoClick}
            className="noButton"
            style={{
              fontSize: `${noButtonSize}px`,
              padding: `${noButtonPadding}px 16px`,
              position: "absolute",
              top: `${buttonPosition.top}px`,
              left: `${buttonPosition.left}px`,
              backgroundColor: "#ff4d4d",
              color: "white",
            }}
          >
            {getNoButtonText()}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
