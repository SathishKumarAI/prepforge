---
qid: ing_0f8fea94ef__aws__local
question: 'Explain: Key Takeaways for Interviews — Fraud Detection'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 421
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:00:31-05:00'
sources: []
---

**Fraud Detection – Interview Takeaway**

*Leadership Principles:* **Ownership**, **Dive Deep**.

**Situation / Task:**  
At my last role I led a cross‑functional squad to reduce credit‑card fraud by 30 % while keeping false positives below 2 %. The business demanded real‑time decisions and compliance with PCI‑DSS.

**Action (Technical Design):**  
1. **Data Layer** – Ingested clickstream + transaction logs into *Amazon Kinesis Data Streams* → *AWS Glue* for schema discovery → persisted in *Amazon Redshift Spectrum* for analytical queries.  
2. **Feature Store** – Built a *SageMaker Feature Store* to serve per‑user risk vectors (recency, velocity, device entropy).  
3. **Model Serving** – Trained an XGBoost ensemble on SageMaker; deployed as a *Lambda@Edge* function behind *API Gateway*, achieving < 50 ms latency.  
4. **Feedback Loop** – Used *Amazon SQS* to queue flagged transactions → *Step Functions* orchestrated manual review, updated labels in DynamoDB, and retrained nightly.  

**Result (Data‑Driven):**  
- Fraud loss dropped from $2.3 M/month to $1.6 M/month (32 % reduction).  
- False positives fell from 5.7 % to 1.9 %.  
- Operational cost: $18K/yr vs $45K previously, thanks to serverless scaling.

**Bar‑raiser check:** I owned the end‑to‑end pipeline, dove deep into feature importance and latency trade‑offs, quantified impact with clear metrics, and iterated after a 10 % model drift incident—learning that continuous monitoring of feature drift is essential.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
