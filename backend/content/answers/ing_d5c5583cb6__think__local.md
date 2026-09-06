---
qid: ing_d5c5583cb6__think__local
question: You join as a staff engineer. The team ships prompt changes on vibes, has
  no evals, and as far as they can tell is shipping fine. What do you do in your first
  90 days?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 220
output_tokens: 477
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:02:23-05:00'
sources: []
---

**1️⃣ Clarify the context & set assumptions**  
- Confirm what “vibes” means (e.g., user sentiment, system mood).  
- Understand the current pipeline: data collection → prompt tweak → ship.  
- Assume no formal evaluation metrics exist and that shipping is “fine” only from anecdotal feedback.

**2️⃣ Adopt a structured product‑engineering framework**  
- Use *Goal–Metric–Experiment* (GME) loops: define what success looks like, pick measurable KPIs, run small A/B tests.  
- Apply the *Build‑Measure‑Learn* cycle to iterate on prompts systematically.

**3️⃣ Step‑by‑step plan for 90 days**  
1. **Onboarding & mapping** – interview stakeholders, review docs, map data flow.  
2. **Baseline audit** – collect existing prompt logs, user interactions, and any informal feedback.  
3. **Define success metrics** – e.g., NPS shift, reduction in support tickets, latency.  
4. **Design evaluation experiments** – set up A/B or multivariate tests; automate logging of key events.  
5. **Deploy pilot evals** – run first small‑scale test, analyze results, iterate on prompt.  
6. **Institutionalize continuous monitoring** – build dashboards, alerting, and a feedback loop for future changes.

**4️⃣ Common pitfalls to avoid**  
- Jumping straight into new metrics without stakeholder buy‑in → resistance.  
- Over‑engineering evaluation infrastructure before proving value → wasted effort.  
- Neglecting user privacy or data governance when logging interactions.  
- Treating “fine” as success; ignore hidden churn or long‑tail issues.

**5️⃣ Sanity‑check & communicate**  
- Re‑state the problem in one sentence: *“We ship prompts without evidence they improve user experience.”*  
- Show a simple flow diagram of the proposed GME loop.  
- Summarize expected outcomes (e.g., 5% NPS lift, 10% reduction in support tickets) and timelines.  

By following this structured path, you’ll turn ad‑hoc shipping into data‑driven, measurable improvement while gaining stakeholder trust.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
