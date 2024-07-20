import { useState } from "react";
import ButtonComponent from "./components/ButtonComponent";
import { evaluate } from "mathjs";

function App() {
  const [value, setValue] = useState("");

  const calculateValue = (value) => {
    console.log(eval(value));
    return eval(value);
  };

  const numClick = (e) => {
    setValue(value + e.target.value);
  };

  const operatorClick = (e) => {
    const operator = e.target.value;
    if (operator === "=") {
      if (isNaN(parseInt(value))) {
        setValue("");
        alert("Please enter valid number");
      } else {
        const ans = evaluate(value);
        setValue(String(ans));
      }
    } else {
      setValue((prev) => prev + operator);
    }
  };

  const acClick = () => {
    setValue("");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-300">
      <div className="flex-row">
        <div className="flex">
          <input
            type="text"
            className="h-20 w-60 text-3xl font-semibold pl-2"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <ButtonComponent value="AC" color="blue-700" handleClick={acClick} />
        </div>
        <div className="border border-white">
          <div>
            <ButtonComponent value="9" color="black" handleClick={numClick} />
            <ButtonComponent value="8" color="black" handleClick={numClick} />
            <ButtonComponent value="7" color="black" handleClick={numClick} />
            <ButtonComponent
              value="+"
              color="black"
              handleClick={operatorClick}
            />
          </div>
          <div>
            <ButtonComponent value="4" color="black" handleClick={numClick} />
            <ButtonComponent value="5" color="black" handleClick={numClick} />
            <ButtonComponent value="6" color="black" handleClick={numClick} />
            <ButtonComponent
              value="-"
              color="black"
              handleClick={operatorClick}
            />
          </div>
          <div>
            <ButtonComponent value="1" color="black" handleClick={numClick} />
            <ButtonComponent value="2" color="black" handleClick={numClick} />
            <ButtonComponent value="3" color="black" handleClick={numClick} />
            <ButtonComponent
              value="/"
              color="black"
              handleClick={operatorClick}
            />
          </div>
          <div>
            <ButtonComponent value="." color="black" handleClick={numClick} />
            <ButtonComponent value="0" color="black" handleClick={numClick} />
            <ButtonComponent
              value="="
              color="black"
              handleClick={operatorClick}
            />
            <ButtonComponent
              value="*"
              color="black"
              handleClick={operatorClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
