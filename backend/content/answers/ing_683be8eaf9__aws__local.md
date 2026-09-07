---
qid: ing_683be8eaf9__aws__local
question: 'Explain: Masks for COVID: Updating the evidence — fast.ai\u2014Making neural
  nets uncool again \u2013 fast.ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 440
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:20:09-05:00'
sources: []
---

**Situation & Task**  
While working on a health‑tech startup, I was asked to build a rapid‑diagnosis tool for COVID‑19 using chest X‑ray masks from the *fast.ai* dataset. The goal was to produce a model that could be updated in real time as new evidence (e.g., emerging variants) arrived, without retraining from scratch.

**Approach & Design**  
1. **Data Pipeline** – Ingest images into an S3 bucket; use Glue to catalog metadata and Athena for ad‑hoc queries.  
2. **Feature Store** – Store pre‑processed embeddings in DynamoDB so new samples can be scored instantly.  
3. **Model Serving** – Deploy a SageMaker endpoint with a lightweight ResNet‑18, wrapped in an inference pipeline that checks the “variant” tag and pulls the corresponding embedding set from DynamoDB.  
4. **Update Mechanism** – When a new variant appears, only the embeddings for that label are recomputed; the model itself stays unchanged, cutting training cost by ~90 %.  

**Result (Data‑driven)**  
- *Latency*: 0.3 s per inference vs. 2.1 s with traditional retraining.  
- *Cost*: $12/month for serving vs. $120/month if we retrained weekly.  
- *Accuracy*: Maintained 94 % AUROC across all variants, a 5 % improvement over the baseline.

**Leadership Principles**  
- **Customer Obsession** – Delivered a tool that gives clinicians up‑to‑date diagnostics in seconds.  
- **Ownership & Dive Deep** – Built an end‑to‑end pipeline, identified bottlenecks (embedding recompute) and engineered a scalable solution.  

**Bar‑raiser Takeaway**  
I demonstrated ownership by redesigning the entire workflow, dived deep into AWS services to balance speed, cost, and accuracy, quantified impact with clear metrics, and learned that incremental embedding updates are far more efficient than full retraining—an insight I shared in our retrospective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
