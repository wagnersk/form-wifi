import "./styles.css";

export function HeroSection() {
    return (
        <div className="hero-container">
            <span className="hero-subtitle">Tecnologia & Dados</span>

            <h1 className="hero-title">
                Usamos tecnologia para{" "}
                <span className="highlight">transformar dados em valor</span> e crescimento para o seu negócio.
            </h1>

            <p className="hero-text">
                Oferecemos soluções inteligentes que conectam dados à tomada de decisão
                estratégica. Unimos tecnologia, IA e monitoramento contínuo para gerar
                resultados reais e sustentáveis. Atendemos retalho, saúde e hospitalidade.
            </p>
        </div>
    );
}