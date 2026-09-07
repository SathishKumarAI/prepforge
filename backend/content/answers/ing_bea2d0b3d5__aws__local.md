---
qid: ing_bea2d0b3d5__aws__local
question: 'Forward-deployed scenario: a state agency wants to move a paper-and-call-centre
  welfare-scheme service onto a multilingual assistant, on-prem for data residency.
  How do you scope and ship it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 427
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:34:22-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional squad for a state agency that needed to replace its paper‑based welfare call centre with an on‑prem, multilingual AI assistant while meeting strict data residency and privacy rules.

**Action – Scoping**  
1. **Customer Obsession + Ownership** – I mapped the citizen journey, interviewed 120 callers (English, Hindi, Tamil) and extracted pain points: 35 % of calls were language mismatches, 28 % ended in escalation.  
2. **Dive Deep** – Performed a data‑driven risk analysis: GDPR‑style audit scores of 4/5 for on‑prem, 6 % expected churn if not automated.  
3. **Design & Trade‑offs** – Chose an **on‑prem SageMaker Edge Container** with a custom multilingual transformer (mBERT) fine‑tuned on local welfare datasets. For orchestration used **AWS Outposts + ECS**; for storage **EFS**.  

**Result**  
- Deployed in 6 weeks, 3× faster than the legacy pilot.  
- Call handling time dropped from 8 min to 2.5 min (68 % reduction).  
- First‑time resolution rose from 45 % to 78 %.  
- Cost per interaction fell 42 % vs. a SaaS equivalent.

**Bar‑raiser cues I listened for**  
- *Ownership*: Did the team own data pipelines end‑to‑end?  
- *Dive Deep*: Were error logs linked back to specific language models?  
- *Quantified Impact*: Are KPI changes backed by real numbers?  
- *Learning from Failure*: How did we iterate after the first two production bugs (mis‑identified eligibility)?

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
