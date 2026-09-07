---
qid: ing_389080f7cc__aws__local
question: 'Explain: DoorDash Algorithms — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 385
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:32:35-05:00'
sources: []
---

**Answer (Amazon Interview Style)**  

> **Leadership Principles:** *Customer Obsession* & *Dive Deep*  
> **Situation / Task:** At DoorDash I was tasked with improving the “real‑time delivery ETA” model that powers driver‑customer matching. The existing rule‑based system had a 12 % error rate, causing late deliveries and negative reviews.  
> **Action:**  
> 1. **Data audit & feature engineering** – pulled GPS traces, traffic APIs, weather, and historical order data from Redshift; discovered missing “road closure” signals.  
> 2. **Model design** – built a gradient‑boosted tree (XGBoost) trained on nightly batches, then deployed via SageMaker real‑time endpoint with autoscaling.  
> 3. **Infrastructure** – used Amazon EventBridge to trigger daily training jobs; model artifacts stored in S3 and versioned in SageMaker Model Registry.  
> 4. **Rollout strategy** – staged A/B test (10 % traffic) vs legacy rule set, monitoring latency (<50 ms) on CloudWatch dashboards.  
> **Result:** ETA error dropped from 12 % to 4 % (≈ 66 % improvement), increasing on‑time deliveries by 9 % and boosting driver earnings by $0.75 per order on average—equivalent to $1.2M annual lift for the platform.  
> **Bar‑raiser takeaways:** Demonstrated *ownership* of end‑to‑end pipeline, *dive deep* into data quality, quantified impact, and iterated quickly after a failed initial A/B (latency spike), learning to add caching with ElastiCache to keep response times stable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
