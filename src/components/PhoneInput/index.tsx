import React, { useState, type ReactNode } from "react";
import { countries, type Country } from "../../utils/contries";

interface PhoneInputProps {
    label: string;
    required?: boolean;
    error?: string;
    children: ReactNode;
    selectedCountry: Country;
    handleSelectCountry: (country: Country) => void;
}

export default function PhoneInput({ handleSelectCountry, selectedCountry, children, label }: PhoneInputProps) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [filteredCountries, setFilteredCountries] = useState<Country[]>(countries);

    function handleClickCountry(country: Country) {
        handleSelectCountry(country);
        setDropdownOpen(false);
    }

    function handleSearchChange(value: string) {
        const search = value.toLowerCase();
        setFilteredCountries(
            countries.filter(
                function (c) {
                    return c.name.toLowerCase().includes(search) || c.code.includes(search);
                }
            )
        );
    }

    function handleMouseOver(e: React.MouseEvent<HTMLButtonElement>) {
        e.currentTarget.style.backgroundColor = "#e5e7eb";
    }

    function handleMouseOut(e: React.MouseEvent<HTMLButtonElement>, country: Country) {
        e.currentTarget.style.backgroundColor =
            country.code === selectedCountry.code ? "#f3f4f6" : "#fff";
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: ".5rem",
                position: "relative",
            }}
        >
            <label
                style={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                    color: "#33075F",
                }}
            >
                {label}
            </label>

            <div style={{ display: "flex", gap: "0.5rem", }}>
                <button
                    type="button"
                    onClick={() => setDropdownOpen(prev => !prev)}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "0.5rem",
                        border: "1px solid #d1d5db",
                        borderRadius: "0.5rem",
                        backgroundColor: "white",
                        cursor: "pointer",

                    }}
                >
                    <span style={{ marginRight: 4, flexWrap: "nowrap", }}>{selectedCountry.flag}</span>
                    {selectedCountry.code} ▼
                </button>

                {children}
            </div>

            {dropdownOpen && (
                <div
                    style={{
                        position: "absolute",
                        top: "6rem",
                        border: "1px solid #d1d5db",
                        borderRadius: "0.5rem",
                        backgroundColor: "white",
                        zIndex: 2,
                    }}
                >
                    <input
                        type="text"
                        placeholder="Pesquisar"
                        style={{
                            padding: "0.5rem",
                            outline: "none",
                            border: 0,
                            borderRadius: "0.5rem",
                            width: "100%",

                        }}
                        onChange={(e) => handleSearchChange(e.target.value)}
                    />

                    <div style={{ maxHeight: "200px", overflowY: "auto" }}>
                        {filteredCountries.map((country) => (
                            <button
                                key={country.id}
                                onClick={() => handleClickCountry(country)}
                                onMouseOver={handleMouseOver}
                                onMouseOut={(e) => handleMouseOut(e, country)}
                                style={{
                                    width: "100%",
                                    textAlign: "left",
                                    padding: "0.5rem 1rem",
                                    cursor: "pointer",
                                    display: "flex",
                                    gap: "0.5rem",
                                    alignItems: "center",
                                    border: "none",
                                    backgroundColor:
                                        country.code === selectedCountry.code ? "#f3f4f6" : "white",
                                }}
                            >
                                <span>{country.flag}</span>
                                {country.name} {country.code}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}