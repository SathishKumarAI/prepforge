---
qid: ing_b840dc723a__think__local
question: 'Explain: Clarifying questions & assumptions — Meeting Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 426
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:06:29-05:00'
sources: []
---

**1️⃣ Clarify the Context and Scope**  
   - *What is the primary purpose of the meeting?* (e.g., decision‑making, status update, brainstorming)  
   - *Who are the participants and what roles do they play?*  
   - *Are there any time constraints or deadlines that influence agenda design?*  
   State assumptions: the assistant has access to calendar invites, participant lists, and basic meeting metadata.

**2️⃣ Adopt a “Meeting‑Lifecycle” Framework**  
   1. **Preparation** – gathering agenda items, documents, pre‑reads.  
   2. **Facilitation** – keeping time, ensuring participation, capturing decisions.  
   3. **Post‑meeting** – distributing minutes, action items, follow‑ups.

This structure guides the AI’s feature set and decision points.

**3️⃣ Step‑by‑Step Reasoning**  
   - *Input:* Calendar invite + optional agenda template.  
   - *Process:* Identify missing agenda slots → prompt user for input; detect participant expertise → suggest discussion priorities.  
   - *Output:* Draft agenda, reminders, and a “decision log” template.

Iterate: validate each step against the meeting lifecycle to avoid gaps (e.g., forgetting action‑item capture).

**4️⃣ Common Traps to Avoid**  
   - Assuming all participants have equal availability or interest.  
   - Overloading the agenda with too many items; risk of “meeting fatigue.”  
   - Neglecting cultural norms (e.g., indirect vs. direct decision style).  

**5️⃣ Sanity‑Check & Communicate**  
   - Run a quick mental test: “If I were the meeting host, would this assistant surface all critical prep and follow‑up needs?”  
   - Present findings to stakeholders in plain language, highlighting how each assumption feeds into the AI’s design choices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
