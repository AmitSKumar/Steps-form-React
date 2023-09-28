import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Step />
      <StepMessage step={1}>
        <p>Learn how</p>
      </StepMessage>
    </div>
  );
}
function Step() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handlePrevious() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }
  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <StepMessage step={step}>
            {messages[step - 1]}
            <Button bgColor="#fff">Learn How</Button>
          </StepMessage>
          {/* <p className="message">
            Step {step}:{messages[step - 1]}
          </p> */}
          <div className="buttons">
            {/* when  we are using closing tags for eleement then 
            we are receiveing content between tags as chidren props */}
            <Button bgColor="#7950f2" texcolor="#fff" onclick={handlePrevious}>
              <span>👈</span>
              Previous{" "}
            </Button>
            <Button bgColor="#7950f2" texcolor="#fff" onclick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

//creating reusable button instead of repeating above
// and getting children from parent
function Button({ texcolor, bgColor, onclick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: texcolor }}
      onClick={onclick}
    >
      {children}
    </button>
  );
}
function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}
