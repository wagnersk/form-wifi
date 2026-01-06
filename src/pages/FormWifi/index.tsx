import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FormField } from "../../components/FormField";
import Header from "../../components/Header";
import Button from "../../components/Button";
import PhoneInput from "../../components/PhoneInput";
import { useState } from "react";
import { countries, type Country } from "../../utils/contries";
import { CheckBoxField } from "../../components/CheckBoxField";

import "./styles.css";
import { SuccessWifi } from "../../components/SucessMessage";


// Schema Zod
const formSchema = z.object({
    name: z.string().min(3, "Mínimo de 3 caracteres"),
    email: z.email("Email inválido"),
    phone: z.string().optional(),
    checkbox: z.boolean().refine((v) => v === true, {
        message: "É obrigatório aceitar os termos",
    }),
});

type LeadFormData = z.infer<typeof formSchema>;

export function FormWifi() {
    const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitSuccessful },
    } = useForm<LeadFormData>({
        resolver: zodResolver(formSchema),
    });

    function onSubmit(data: LeadFormData) {
        data.phone = `${selectedCountry.code} ${data.phone}`;
        console.log("Form válido e enviado:", data);

    }

    function handleSelectCountry(country: Country) {
        setSelectedCountry(country);
    }

    return (
        <div className="leads-container">
            {isSubmitSuccessful ? (
                <SuccessWifi />
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="leads-form">
                    <Header />

                    <FormField label="Nome" required error={errors.name?.message}>
                        <input
                            {...register("name")}
                            placeholder="Digite seu nome"
                            className={`leads-input ${errors.name ? "input-error" : ""}`}
                        />
                    </FormField>

                    <FormField label="Email" required error={errors.email?.message}>
                        <input
                            {...register("email")}
                            placeholder="exemplo@email.com"
                            className={`leads-input ${errors.email ? "input-error" : ""}`}
                        />
                    </FormField>

                    <PhoneInput
                        selectedCountry={selectedCountry}
                        handleSelectCountry={handleSelectCountry}
                        label="Telemóvel (opcional)"
                        error={errors.phone?.message}
                    >
                        <input
                            {...register("phone")}
                            type="numeric"
                            placeholder="999 999 999"
                            className="leads-input"

                        />
                    </PhoneInput>

                    <CheckBoxField error={errors.checkbox?.message}>
                        <input
                            type="checkbox"
                            {...register("checkbox")}
                            className="leads-checkbox"
                        />
                    </CheckBoxField>

                    <Button />

                    <footer className="leads-footer">
                        Ao conectar-se, concorda com os nossos termos.
                        <br />
                        Dados protegidos pelo RGPD.
                    </footer>
                </form>
            )}
        </div>
    );
}