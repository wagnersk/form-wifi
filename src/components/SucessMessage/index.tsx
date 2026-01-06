
import Sucess from "../../assets/Sucess.svg?react";
import SmallWifiIcon from "../../assets/wifi-icon.svg?react";

export function SuccessWifi() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1.5rem",
                backgroundColor: "white",
                padding: "2rem 1.5rem",
                borderRadius: "1rem",
                width: "90%",
                textAlign: "center",
                color: "#4c1d95",
                margin: "auto",
            }}
        >
            <Sucess width={64} height={64} />

            <h2
                style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    margin: 0,
                }}
            >
                Ligação Estabelecida!
            </h2>

            <p
                style={{
                    fontSize: "0.875rem",
                    fontWeight: 400,
                    opacity: 0.8,
                    margin: 0,
                }}
            >
                Obrigado por se registar.
                <br />
                Já pode navegar na internet.
            </p>

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontWeight: 600,
                    color: "#a78bfa",
                    marginTop: "0.5rem",
                }}
            >
                <SmallWifiIcon width={16} height={16} />
                <span style={{ fontSize: "0.875rem" }}>WiFi Conectado</span>
            </div>
        </div>
    );
}