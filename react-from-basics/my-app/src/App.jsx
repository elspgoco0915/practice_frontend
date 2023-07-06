import { useEffect, useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

// コンポーネントファイルは.jsxにして区別
export const App = () => {
    console.log('rendering!');

    // stateの定義
    const [num, setNum] = useState(0);
    const onClickButton = () => {
        setNum(num + 1);
    };

    // useEffect
    useEffect(() => {
        alert(num)
    }, [num]);


    // css in js
    const contentPinkStyle = {
        color: "pink",
        fontSize: "20px",
    };

    return (
        <>
            {console.log('test.')}
            <h1 style={contentPinkStyle}>こんにちは</h1>
            <ColoredMessage color="purple">メッセージ</ColoredMessage>
            <p>{num}</p>
            <button onClick={onClickButton}>ボタン</button>
        </>
    )
}