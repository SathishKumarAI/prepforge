---
qid: ing_fb312f6b07__think__local
question: 'Explain: Don’t Bother About Requirements — Design System Newsletter - by
  Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 513
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:34:49-05:00'
sources: []
---

**1️⃣ Clarify the ask & assumptions**

- *What is “Don’t Bother About Requirements”?*  
  Understand that it’s a design‑systems principle coined by Neo Kim, not a generic ML concept.  
- *Audience:* Designers or product managers who work with machine‑learning–driven products.  
- *Goal of the explanation:* Show how this mindset keeps system‑wide consistency while letting data‑driven experiments flourish.

**2️⃣ Mental model / framework**

Use **Design System vs. Product Feature** as a dual lens:  
- Design systems set shared visual & interaction contracts.  
- Machine‑learning features evolve rapidly; their “requirements” (labels, metrics) are fluid.  

Map Neo Kim’s principle onto the tension between *stability* and *adaptability*.  

**3️⃣ Step‑by‑step reasoning**

1. **Identify core contracts** – colors, typography, component APIs.  
2. **Isolate ML‑specific concerns** – data pipelines, training schedules, model inference hooks.  
3. **Separate “requirements” from “contracts.”**  
   - Requirements: dataset size, accuracy targets, latency thresholds (all change).  
   - Contracts: how a button looks when a prediction is loading, how a card displays confidence.  
4. **Decouple the two layers** – keep design system agnostic to ML metrics; let the ML team iterate on requirements without touching UI contracts.  
5. **Document the boundary** – in the newsletter, illustrate with diagrams and code snippets.

**4️⃣ Common traps**

- *Assuming “requirements” are static:* Remember they evolve nightly.  
- *Over‑designing for every possible ML outcome:* Keep the system lean; add hooks only when needed.  
- *Mixing data science jargon into UI specs:* Use plain language or separate sections.

**5️⃣ Sanity‑check & communication**

- Run through a quick example: “We’re adding a confidence bar.” Does it require new design tokens? No – just an extra component that plugs into the existing card contract.  
- Ask a peer to explain the principle in one sentence; if they say, “Keep UI stable, let ML change,” you’ve nailed it.  

Wrap up by noting that this newsletter not only clarifies Neo Kim’s idea but also provides a reusable pattern for teams juggling rapid ML experimentation with long‑term design consistency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
