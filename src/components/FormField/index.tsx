import type { ReactNode } from "react";

interface FormFieldProps {
    label: string;
    required?: boolean;
    error?: string;
    children: ReactNode;
}

export function FormField({ label, required = false, error, children }: FormFieldProps) {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", position: "relative" }}>
            <label style={{ fontWeight: 'bold', fontSize: "1rem", color: "#33075F" }}>
                {label} {required && <span style={{ color: 'red' }}>*</span>}
            </label>

            {children}

            {error && (
                <span
                    style={{
                        position: "absolute",
                        bottom: "-1.25rem",
                        transform: 'translateX(-50%)',
                        left: "50%",
                        fontSize: "0.75rem",
                        color: "#f87171",
                    }}
                >
                    {error}
                </span>
            )}
        </div>
    );
}