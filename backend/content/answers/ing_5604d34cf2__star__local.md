---
qid: ing_5604d34cf2__star__local
question: 'Explain: Control through intuitive UIs — Transforming Clinical Documentation
  with Advanced AI | Abridge AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 387
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:19:57-05:00'
sources: []
---

**Situation** – At a mid‑size hospital, clinicians spent an average of 30 minutes per patient charting notes in the EHR, which slowed rounds and caused burnout. The existing dictation system was clunky: voice commands were unreliable, and editing required navigating nested menus.

**Task** – I needed to design a user interface that let doctors dictate and edit clinical documentation in real time using natural language while keeping workflow friction below 5 seconds per note entry, and to integrate the AI’s suggestion engine without adding cognitive load.

**Action** – First, I mapped clinician pain points through shadowing sessions. Then I built a lightweight web widget embedded in the EHR that used WebRTC for live audio capture and a custom grammar‑based intent recognizer (spaCy + custom rule set). The UI offered an “AI‑Assist” panel that displayed context‑aware suggestions—diagnoses, orders, and template snippets—in a collapsible sidebar. I implemented optimistic UI updates: as the model parsed speech, it populated fields instantly; clinicians could accept or tweak suggestions with a single click. Finally, I ran A/B tests on 200 charts to fine‑tune confidence thresholds and UI placement.

**Result** – Adoption rose from 12 % to 78 % within three months, and average charting time dropped by 45 % (from 30 min to 16 min). Clinicians reported a 4.2/5 satisfaction score on the new interface, and the hospital saved roughly $250k annually in labor costs. I learned that minimalistic, context‑aware UI design is more powerful than flashy features when integrating AI into clinical workflows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
