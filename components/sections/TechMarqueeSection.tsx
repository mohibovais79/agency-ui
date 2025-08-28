// components/sections/TechMarqueeSection.tsx
"use client";

import {
    AdobeIcon,
    AWSIcon, AzureIcon,
    DockerIcon,
    ElasticSearch,
    FigmaIcon,
    GeminiIcon,
    LangchainIcon,
    NextJSIcon,
    OpenAIIcon,
    PerplexityIcon,
    PowerBIIcon,
    PythonIcon,
    PyTorchIcon,
    ReactIcon,
    TypeScriptIcon
} from "@/components/icons/tech-stack";

const techStack = [
    { name: "", Icon: PythonIcon },
    { name: "", Icon: ReactIcon },
    { name: "", Icon: NextJSIcon },
    { name: "", Icon: AWSIcon },
    { name: "", Icon: AzureIcon },
    { name: "Power BI", Icon: PowerBIIcon },
    { name: "", Icon: AdobeIcon },
    { name: "", Icon: OpenAIIcon },
    { name: "Figma", Icon: FigmaIcon },
    { name: "", Icon: TypeScriptIcon },
    { name: "", Icon: DockerIcon },
    { name: "", Icon: PyTorchIcon },
    { name: "", Icon: LangchainIcon },
    { name: "", Icon: GeminiIcon },
    { name: "", Icon: PerplexityIcon },
    { name: "", Icon: ElasticSearch },
];

// We duplicate the array to create the seamless scroll effect
const duplicatedTechStack = [...techStack, ...techStack];

export function TechMarqueeSection() {
    return (
        <section className="w-full py-12 bg-default-100/50">
            <div className="text-center mb-8">
                <h3 className="text-lg font-semibold text-default-500 uppercase tracking-wider">
                    Technologies We Master
                </h3>
            </div>
            <div className="marquee-container">
                <div className="marquee-track">
                    {duplicatedTechStack.map(({ name, Icon }, index) => (
                        <div key={`${name}-${index}`} className="marquee-item" title={name}>
                            <Icon />
                            <span className="marquee-item-name">{name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}