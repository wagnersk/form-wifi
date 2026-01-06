import type { ReactNode } from "react";

interface CheckBoxField {
    children: ReactNode;
    error?: string;
}

export function CheckBoxField({ children, error }: CheckBoxField) {
    return (

        <div style={{ display: "flex", alignItems: "center", gap: "1rem", position: "relative", zIndex: 1 }}>
            <div>
                <div style={{ display: "flex", alignItems: "center", flexDirection: "row", gap: "1rem", }}>
                    {children}
                    <a
                        href="https://insightdigital.pt/politica-de-privacidade/"
                        target="_blank"
                        style={{ color: "#33075F", textDecoration: "underline" }}
                    >
                        Aceito os termos e a política de privacidade
                    </a>

                </div>
            </div>
            {error && (
                <span
                    style={{
                        position: "absolute",
                        top: "100%",
                        transform: 'translateX(-50%)',
                        left: "50%",
                        fontSize: "0.75rem",
                        color: "#f87171",
                        marginTop: "0.25rem",
                    }}
                >
                    {error}
                </span>
            )}
        </div>
    );
}