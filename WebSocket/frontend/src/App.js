import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import { useEffect } from "react";
function App() {
    useEffect(() => {
        const ws = new WebSocket("ws://localhost:4001");
        // @ts-ignore
        ws.onopen = (ev) => {
            console.log("WebSocket Connection Open");
        };
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx("div", { children: _jsx("input", { type: "text", placeholder: "enter message here", className: "py-3 px-2 border border-gray-600 rounded-lg" }) }), _jsx("div", { className: "card", children: _jsx("button", { onClick: () => console.log("clicked"), children: "send message" }) })] }));
}
export default App;
//# sourceMappingURL=App.js.map