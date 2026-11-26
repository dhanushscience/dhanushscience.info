# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Primary: investors and potential collaborators (co-founders, engineers, labs) deciding whether Dhanush S. ("Dhanush Science") is a founder/engineer worth backing or building with. Secondary: students, friends and the curious, served by the audience-tailored conversation starters.

## Product Purpose
A personal home base that lets a visitor explore who Dhanush is and what he has built, then start a conversation. Success = the visitor explores the work and the person, and sends a message (conversation starter or contact).

## Positioning
An engineer-entrepreneur who takes ideas from first principles to working hardware and software across medical devices, embedded systems and voice AI. Signature work: Project OASIS, a three-button pad plus free Windows app for voice-first computing.

## Capabilities and Constraints
- Static site: Astro project, but the homepage is hand-written `public/index.html` with shared `public/site.css` and `public/site.js`; blog pages use `src/layouts/Base.astro` and share site.css (nav rail markup + theme toggle must keep working there).
- Light/dark theme toggle persisted in localStorage.
- Sections: introduction, who, projects, interests, ask me + contact, blog link.
- Conversation starters open prefilled mailto links; "Save contact" downloads a vCard; OASIS demo is a click-to-load YouTube embed.

## Evidence on Hand
- Project OASIS: three-button pad (ESP32-C3, BLE, Embedded C) + free Windows app (Rust), public beta for Windows 10/11. Demo video YouTube INGq1PckhZ8. Site: dhanushscience.github.io/PROJECT-OASIS. Image: public/OASIS.png.
- Percept: non-invasive glaucoma IOP monitor (thermal imaging + math modelling); patent published Oct 2025.
- Jiva: battery-free CPR assist, proof of concept validated.
- MotorDriver (Arduino library, GitHub), VTU-AIDS (AI internship diary system, live + open source), PassVault, Smart-Home Node (ESP32/MQTT), Model Rocket — the last three have no public write-up yet.
- Portrait: public/DHANUSH.png (pencil sketch). Resume PDF in public/.
- Interests: Shaw "unreasonable man" quote; ideas (challenge the possible, first principles, delusional confidence, systems thinking); people admired (Tesla, Jobs, Tony Stark, Harvey Specter, Patrick Jane); films/series (Jobs, Interstellar, 3 Idiots, Super Pumped, 3 Body Problem); follows space, emerging tech, robotics.
- Absent, must not fabricate: user counts, revenue, funding, awards, press, testimonials, patent number, education, location.

## Brand Commitments
- Name "Dhanush Science"; roles "Entrepreneur · Engineer · Innovator"; line "Building the future of human-computer interaction."
- Desired feeling (user brief): innovative, out of the box, creative, inspirational, and completely engineering. Inspiration reference: recent.design.

## Product Principles
1. Show the work, not adjectives: real builds, real specs, real status.
2. Every claim is true and current; unfinished work is labelled honestly.
3. Make starting a conversation effortless for every kind of visitor.
4. Engineering rigor is the personality; creativity is how it is presented.
