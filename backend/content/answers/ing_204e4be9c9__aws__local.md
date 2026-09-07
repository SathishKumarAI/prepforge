---
qid: ing_204e4be9c9__aws__local
question: 'Explain: Run judgy correction — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 407
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:40:08-05:00'
sources: []
---

**Situation & Task (Customer Obsession, Ownership)**  
At a fast‑growth fintech, we launched an AI‑driven sentiment engine to flag “judgy” language in customer support transcripts. The goal was to surface bias before it reached customers and reduce brand‑damage incidents by 30 %.  

**Action (Dive Deep, Bias for Action)**  
1. **Data Pipeline** – Ingested ~5 M chat logs per day into **Amazon Kinesis Data Streams**, persisted in **S3** with lifecycle policies to keep raw data for 90 days.  
2. **Model Serving** – Deployed a fine‑tuned BERT model on **Amazon SageMaker Endpoint** (multi‑AZ, auto‑scaling) to score each sentence for “judgy” probability.  
3. **Evaluation & Feedback Loop** – Integrated **Langwatch** and **Langfuse** APIs: Langwatch provided rule‑based context checks; Langfuse captured inference latency and drift metrics.  
4. **Alerting & Action** – Sent scores > 0.85 to a **Step Functions** workflow that auto‑created Zendesk tickets for human review, with SLA 2 h.  

**Result (Deliver Results)**  
- Reduced bias‑related complaints by **32 %** in the first quarter.  
- Cut manual review effort from 15 hrs/day to 4 hrs/day, saving $18K/month.  
- Achieved < 200 ms latency per inference with cost <$0.05/1k requests.

**Bar‑raiser Takeaway**  
Showed ownership by owning the end‑to‑end pipeline, deep dive into drift monitoring, quantified impact on brand health, and iterated after a false‑positive spike—realigned thresholds and retrained the model within 48 h.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
