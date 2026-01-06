import WifiIcon from "../../assets/wifi-icon.svg?react";

export default function Header() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <WifiIcon style={{ width: "6rem", height: "6rem" }} />
            <h1
                style={{
                    fontWeight: 600,
                    color: "#33075F",
                    textAlign: "center",
                }}
            >
                WiFi Gratuito
            </h1>
            <span
                style={{
                    color: "#33075F",
                    textAlign: "center",
                }}
            >
                Registe-se para aceder à internet
            </span>
        </div>
    )
}