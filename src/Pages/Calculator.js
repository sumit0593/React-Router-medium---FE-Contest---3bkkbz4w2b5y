import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Calculator = () => {
  const location = useLocation();
  const [result, setResult] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const num1 = Number(searchParams.get(num1));
    const num2 = Number(searchParams.get(num2));
    const op = decodeURIComponent(searchParams.get("op"));
    let result = "";
    if (op === "+") {
      result = num1 + num2;
    } else if (op === "-") {
      result = num1 - num2;
    } else if (op === "*") {
      result = num1 * num2;
    } else if (op === "/") {
      result = num1 / num2;
    }
    setResult(result);
  }, [location.search]);

  return (
    <div>
      <p>
        Your calculation Result is <span id="cal-result">{result}</span>
      </p>
    </div>
  );
};
