---
qid: ing_a4edfed032__aws__local
question: 'Explain: When to Use Human Evaluation — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 363
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:40:10-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation:** While launching a new chatbot for our e‑commerce portal, we noticed that automated perplexity scores were low, yet user satisfaction surveys dipped after the first release.  
> 
> **Task:** Determine when to rely on human evaluation versus purely statistical LLM metrics and redesign the feedback loop accordingly.  
> 
> **Action:** I led a cross‑functional squad (NLP, QA, Ops) and applied *Dive Deep* by first correlating automated scores with real‑world click‑through rates: a 0.3 % perplexity drop only matched a 1.2 % churn increase.  
> - Built an **Amazon SageMaker Ground Truth** pipeline to label 5k conversation snippets, tagging intent accuracy and sentiment drift.  
> - Introduced a **Lambda + DynamoDB** scheduler that triggers human review when the model’s confidence falls below 0.7 or when user sentiment drops >2 % week‑over‑week.  
> - Implemented an *Amazon Personalize* feedback loop feeding corrected labels back into fine‑tuning, reducing churn by **18 %** in two months.  
> 
> **Result:** The hybrid approach cut manual review hours from 200 to 45 per sprint while improving NPS from 78 to 85 (Δ 7 points). It also lowered infrastructure spend by 12 % by avoiding unnecessary inference on low‑confidence requests.  

*Key Leadership Principles:* **Customer Obsession** – we tuned the model based on actual user pain points; **Ownership** – I owned the entire evaluation pipeline and drove measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
