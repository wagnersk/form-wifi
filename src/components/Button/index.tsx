type ButtonProps = {
    loading?: boolean;
    disabled?: boolean;
};

export default function Button({ loading = false, disabled = false }: ButtonProps) {
    return (
        <button
            type="submit"
            disabled={disabled || loading}
            style={{
                height: "3rem",
                width: "100%",
                borderRadius: "0.5rem",
                backgroundColor: disabled || loading ? "#7c3aed" : "#33075F",
                color: "white",
                fontSize: "1rem",
                cursor: disabled || loading ? "not-allowed" : "pointer",
                border: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
            }}
        >
            {loading ? (
                <span >
                    Carregando
                </span>
            ) : (
                "Conectar ao WiFi"
            )}


        </button>
    );
}