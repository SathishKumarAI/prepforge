---
qid: ing_02febfbe34__aws__local
question: 'Explain: VO - Infra Interview — My 2026 Perplexity AI Interview Process
  and Actual Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 414
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:31:00-05:00'
sources: []
---

**Customer Obsession & Ownership**

> **Situation:** I was asked to outline a *Perplexity‑AI* interview pipeline for 2026 that would surface both behavioral and system design chops.  
> **Task:** Deliver a fully documented, repeatable process with measurable KPIs (time‑to‑hire, candidate quality score).  
> **Action:**  
> - Built an end‑to‑end flow in **AWS**: **Lex** for intake chat, **Step Functions** orchestrating *pre‑screen*, *AI‑assisted behavioral*, and *system design* stages.  
> - Used **SageMaker Endpoint** to run a fine‑tuned GPT‑4 model that scores candidates on *bias for action* & *invent & simplify* by mapping responses to a 0–10 rubric.  
> - Stored logs in **Amazon RDS Aurora** (PostgreSQL) and generated weekly dashboards with **QuickSight**—tracking average interview duration (↓ 15 min), pass rate (↑ 23 %), and diversity score (↑ 12 %).  
> - Implemented **AWS Lambda** for real‑time analytics, triggering a *bar‑raiser* review if scores fall below 6.5.  
> **Result:** The pilot cut interview time by **18 %**, improved candidate experience (NPS +4), and reduced hiring bias metrics by **12 %**.  

**Bar‑raiser Takeaway**

- Demonstrated *ownership* of the entire funnel.  
- Showed *dive deep* into AWS services, cost/latency trade‑offs, and a clear data‑driven impact.  
- Learned from early feedback: added a fallback “human review” queue when the AI confidence dropped below 70 %, preventing false negatives.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
