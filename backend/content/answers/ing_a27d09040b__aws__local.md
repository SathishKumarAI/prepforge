---
qid: ing_a27d09040b__aws__local
question: 'Explain: Embeddings and similarity — Ml And Dl Foundations'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 413
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:32:18-05:00'
sources: []
---

**Situation / Task**  
At a fintech startup I led the migration of our fraud‑detection pipeline from rule‑based logic to an embedding‑driven similarity model. The goal was to reduce false positives by 30 % while keeping latency under 200 ms for real‑time scoring.

**Action**  
* **Design** – Trained a SentenceTransformer (BERT‑base) on 2 M labeled transaction pairs, generating 768‑dim embeddings. Stored them in **Amazon DynamoDB** with a GSI on the cosine similarity bucket; queried via **AWS Lambda** that calls an **SageMaker endpoint** for new embeddings.  
* **Scalability & Cost** – The Lambda layer used **EFS** to cache the model, cutting inference time by 40 %. Spot instances in SageMaker reduced training cost from $1,200 to $420/month.  
* **Availability** – Deployed the endpoint in a **Multi‑AZ** SageMaker hosting configuration (99.95 % SLA). Implemented CloudWatch alarms for latency spikes; auto‑scaled Lambda concurrency based on traffic patterns.

**Result**  
Within 90 days, false positives dropped from 12 % to 8 %, a 33 % improvement. Real‑time latency stayed below 180 ms, and operational cost fell by 35 %. The team adopted the embedding approach across two additional services, generating an annual savings of $200k.

**Reflection**  
I owned end‑to‑end delivery, diving deep into model internals to balance accuracy vs. speed. Learned that caching embeddings in EFS dramatically cut inference time—an insight now shared with the broader ML ops group.  

*Leadership Principles:* **Ownership**, **Dive Deep**, **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
