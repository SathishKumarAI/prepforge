---
qid: ing_bb3f0e7fa9__aws__local
question: 'Explain: Why we do not use a single composite quality score'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 415
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:27:05-05:00'
sources: []
---

**Why we avoid a single composite quality score**

**Situation:**  
When launching the new recommendation engine for our Prime Video catalog, my team was asked to deliver “a single quality metric” that could be used across all content types (movies, series, documentaries).  

**Task:**  
I had to design an evaluation framework that respected each genre’s unique user intent while still enabling quick A/B tests at scale.  

**Action:**  
1. **Ownership & Dive Deep** – I mapped out the key business drivers for every content bucket: watch‑through time, completion rate, and user satisfaction surveys.  
2. **Bias for Action** – Built a lightweight scoring engine in SageMaker that normalizes each metric to a 0–100 range, then aggregates them with weights derived from historical click‑through data (e.g., 40% watch‑through, 30% completion, 30% survey).  
3. **AWS services:** Lambda for real‑time aggregation, DynamoDB for weight configuration, SageMaker Pipelines for model retraining, and CloudWatch dashboards for observability.  
4. **Scalability & Cost** – The Lambda functions run in parallel per shard of Kinesis events; cost stays under $2k/month versus a monolithic Java service that would have required 8 vCPUs.  

**Result:**  
In the first two weeks, we detected a 12% uplift in user engagement for new releases and reduced the time to iterate on weighting by 70%. The modular approach also allowed us to drop “composite” scoring entirely when a new content category (e.g., live sports) required a different set of metrics.  

**Takeaway:**  
A single composite score hides important nuances; a weighted, service‑oriented design gives the data team ownership, clarity, and measurable impact while staying cost‑effective at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
