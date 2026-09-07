---
qid: ing_e7127b17e2__aws__local
question: 'Explain: 🔥 1-week cram (interview on the calendar)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 429
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:00:50-05:00'
sources: []
---

**Situation** – I was invited to an AI‑focused interview a week before my start date at AWS. The panel wanted to gauge how quickly I could prototype a scalable recommendation engine for the new “AWS Marketplace AI” product.

**Task** – Deliver a working demo that ingests user logs, trains a lightweight model, and exposes predictions via a REST API, all within 7 days.

**Action** –  
1. **Customer Obsession & Ownership**: I mapped the customer journey—data ingestion → model training → inference—and identified latency as the top pain point for sellers.  
2. **Dive Deep**: Chose SageMaker Pipelines + Amazon Kinesis Data Firehose for real‑time data capture, and a LightGBM model on SageMaker Training to keep costs low (≈$0.15 / hour).  
3. **Bias for Action & Invent & Simplify**: Skipped a full‑blown MLOps stack; instead used S3 for versioned datasets, Lambda for lightweight preprocessing, and API Gateway + ECS Fargate for inference—zero server maintenance.  
4. **Deliver Results**: Trained the model in 2 hrs, achieved 78 % precision@10 on a hold‑out set (up from 65 % baseline), and reduced end‑to‑end latency to 120 ms (vs. 480 ms).  

**Result** – The panel approved the architecture; I was offered the role on day 1. Post‑deployment, the engine served ~10k requests/day with <$200/month spend.  
*Bar‑raiser focus*: ownership of the end‑to‑end flow, deep technical decisions (model choice, AWS services), quantifiable impact (precision lift & cost savings), and reflection: “If I had more time, I’d add a model monitoring layer to catch drift.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
