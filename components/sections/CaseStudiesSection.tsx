// components/sections/CaseStudiesSection.tsx
"use client";

import { CaseStudyModal } from "@/components/case-study/CaseStudyModal";
import { caseStudiesData, CaseStudy } from "@/config/case-studies-data";
import { Button } from "@heroui/button";
import { useState } from "react";

type Category = "AI" | "Data" | "Design";

interface ModalData {
    category: Category;
    studies: CaseStudy[];
}

export function CaseStudiesSection() {
    const [modalData, setModalData] = useState<ModalData | null>(null);

    const openModal = (category: Category) => {
        setModalData({
            category,
            studies: caseStudiesData[category],
        });
    };

    const closeModal = () => {
        setModalData(null);
    };

    return (
        <>
            <section id="case-studies" className="w-full max-w-5xl py-20 px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Track Record of Success</h2>
                    <p className="mt-4 text-lg text-default-600">Explore our case studies in AI, Data, and Design.</p>
                </div>

                <div className="flex justify-center gap-4">
                    {(Object.keys(caseStudiesData) as Category[]).map((category) => (
                        <Button
                            key={category}
                            variant="solid"
                            color="primary"
                            size="lg"
                            onPress={() => openModal(category)}
                        >
                            View {category} Case Studies
                        </Button>
                    ))}
                </div>
            </section>

            <CaseStudyModal
                isOpen={!!modalData}
                onClose={closeModal}
                category={modalData?.category || ""}
                studies={modalData?.studies || []}
            />
        </>
    );
}