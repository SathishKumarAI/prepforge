---
qid: ing_2c51b0cf1c__think__local
question: 'Explain: P - Prioritize Requirements — Answer Frameworks'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 554
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:35:39-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
- *Goal*: Show how “P – Prioritize Requirements” fits into a structured answer‑building framework for AI questions.  
- *Assumptions*: The reader knows basic AI concepts (ML models, data pipelines) but is new to systematic problem‑solving.  

**2️⃣ Adopt the “PRAISE” mental model**  
| Step | What it means | Why it matters |
|------|---------------|----------------|
| **P – Prioritize** | Rank requirements by impact & feasibility. | Prevents scope creep and focuses effort on high‑value features. |
| **R – Requirements** | List functional/non‑functional needs. | Provides a shared vocabulary for stakeholders. |
| **A – Architecture** | Outline system layers (data, model, infra). | Guides design decisions early. |
| **I – Implementation** | Detail tasks, timelines, resources. | Turns abstract plans into actionable steps. |
| **S – Security & Ethics** | Identify bias, privacy, compliance. | Ensures responsible AI deployment. |
| **E – Evaluation** | Define success metrics and monitoring. | Enables continuous improvement. |

**3️⃣ Step‑by‑step reasoning**  
1. *Gather all requirements* from stakeholders (user stories, regulatory constraints).  
2. *Score each requirement* on criteria: business value, technical risk, effort, time to market.  
3. *Rank them*, grouping into “Must‑have”, “Nice‑to‑have”, and “Optional”.  
4. *Feed the top tier* into the Architecture step; design data pipelines, model selection, and deployment stack accordingly.  

**4️⃣ Avoid common traps**  
- **Over‑prioritizing novelty**: high‑tech features can distract from core user needs.  
- **Ignoring feasibility early**: a “must‑have” that’s technically impossible delays the whole project.  
- **Skipping ethics/security**: AI projects often face compliance or bias issues later if not considered upfront.  

**5️⃣ Sanity‑check & communicate**  
- *Re‑examine scores*: Are any low‑value items still high priority?  
- *Show the hierarchy*: A simple table or roadmap visual helps stakeholders see why a feature is “Must‑have”.  
- *Explain trade‑offs*: If a top requirement must be deferred, justify with impact analysis.  

By following this **PRAISE** framework—especially the **Prioritize** step—you can structure AI answers that are clear, actionable, and aligned with business goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
