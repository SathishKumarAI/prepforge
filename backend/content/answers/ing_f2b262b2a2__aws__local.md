---
qid: ing_f2b262b2a2__aws__local
question: 'Explain: Cardinality'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 224
output_tokens: 376
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:25:17-05:00'
sources: []
---

**Cardinality in Machine Learning**  
*Leadership Principles:* **Customer Obsession** & **Dive Deep**

**Situation:** While building a recommendation engine for an e‑commerce platform, our team noticed that feature *“brand”* had a very high cardinality (≈ 50k distinct values). This caused sparse embeddings and degraded model accuracy.

**Task:** Reduce dimensionality without hurting user experience or latency.

**Action:**  
1. **Data Dive** – profiled brand usage; 90 % of traffic came from the top 200 brands, the rest were one‑off.  
2. **Feature Engineering** – mapped low‑frequency brands to a “Other” bucket and used *hashed* embeddings for the remaining 200 (size = 256).  
3. **AWS Services** – stored brand stats in **DynamoDB**; served embeddings via **Amazon SageMaker Endpoint** with a **Lambda** wrapper that performs lookup & hashing on‑the‑fly.  
4. **Scalability/Cost** – Lambda’s 128 MB memory and 500 ms timeout kept per‑request cost <$0.000001, while DynamoDB read capacity of 2 RCU handled peak traffic.  

**Result:** Accuracy (MAP@10) improved from **0.42 to 0.49** (≈ 17 % lift), latency dropped from 120 ms to 75 ms, and monthly spend on embeddings fell by **$3k**.  
*Learning:* High cardinality can be mitigated with targeted bucketing; always profile data before engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
