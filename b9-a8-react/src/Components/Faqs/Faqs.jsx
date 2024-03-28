/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

export default function DefaultAccordion() {
    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <Accordion open={open === 1} className="mt-12">
                <AccordionHeader onClick={() => handleOpen(1)}>How much should I read each day?</AccordionHeader>
                <AccordionBody>
                    There's no one-size-fits-all answer! Aim for a consistent amount that fits your schedule and attention span. Even 20-30 minutes a day can significantly improve your reading comprehension and vocabulary.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                    I struggle to focus while reading. What can I help?
                </AccordionHeader>
                <AccordionBody>
                    <ul>
                        <li>Find a quiet, distraction-free environment.</li>
                        <li>Put your phone away and silence notifications.</li>
                        <li>Try audiobooks if visual reading is challenging.</li>
                        <li>Take breaks to avoid mental fatigue.</li>
                    </ul> 
                 
                    
                    
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                    How can I remember what I read?
                </AccordionHeader>
                <AccordionBody>
                    Take notes while reading, jotting down key points or quotes.
                    Discuss the book with a friend or join a book club.
                    Summarize the main ideas in your own words after finishing a chapter.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 4}>
                <AccordionHeader onClick={() => handleOpen(4)}>
                    I want to read more, but I never have time. How can I fit it in?
                </AccordionHeader>
                <AccordionBody>
                    Read during your commute or while waiting for appointments.
                    Listen to audiobooks while doing chores or exercising.
                    Set aside a specific time each day, even if it's just 15 minutes.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 5}>
                <AccordionHeader onClick={() => handleOpen(5)}>
                    I'm not sure what genre I like. How can I find books I'll enjoy?
                </AccordionHeader>
                <AccordionBody>
                    Explore online quizzes that recommend books based on your interests.
                    Read book reviews or browse curated collections on websites like Book Haven.
                    Ask friends or librarians for recommendations.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 6}>
                <AccordionHeader onClick={() => handleOpen(6)}>
                    I'm intimidated by classics. Are they worth reading?
                </AccordionHeader>
                <AccordionBody>
                    Classics offer timeless insights into human nature and writing styles. Start with shorter classics or with adaptations like movies or graphic novels.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 7}>
                <AccordionHeader onClick={() => handleOpen(7)}>
                    Is reading ebooks as beneficial as reading physical books?
                </AccordionHeader>
                <AccordionBody>
                    Both formats have their advantages. Ebooks offer portability and convenience, while physical books provide a tactile experience and can be easier on the eyes. Choose the format that best suits your preferences.
                </AccordionBody>
            </Accordion>
        </>
    );
}