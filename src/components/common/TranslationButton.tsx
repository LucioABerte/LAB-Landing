import { useState } from "react";

const TranslationButton = () => {
    const [toggle, setToggle] = useState(false)


    const changeLanguage = () => {
        setToggle(!toggle)
    }

  return (
    <button onClick={() => changeLanguage()}>
        {toggle ? "ES" : "EN"}
    </button>
  )
}

export default TranslationButton