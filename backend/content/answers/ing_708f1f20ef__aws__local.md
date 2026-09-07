---
qid: ing_708f1f20ef__aws__local
question: 'Explain: Understanding demand sources of traffic — Viewing the world as
  a computer: Global capacity management'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 408
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:39:55-05:00'
sources: []
---

**Situation & Task**  
At my last role I led an ML‑driven traffic forecasting team for a global CDN. The business needed a unified view of demand sources (search, social, direct) to pre‑scale edge capacity and cut over‑provisioning costs by 20 %.  

**Action – Technical Design**  
1. **Data ingestion**: Streamed clickstream + referral logs into Kinesis Data Streams → Lambda for enrichment → S3 landing zone.  
2. **Feature store**: Persisted per‑domain, per‑source features in DynamoDB (high write throughput) and refreshed nightly via Glue ETL to Redshift for model training.  
3. **Modeling**: Trained a LightGBM ensemble on historic traffic with seasonal & trend components; deployed via SageMaker endpoints behind an Application Load Balancer, auto‑scaling on CloudWatch metrics.  
4. **Serving**: Lambda@Edge cached predictions in CloudFront headers to give edge nodes real‑time capacity hints.  

**Result**  
- Forecast accuracy improved from 35 % MAE to 12 %.  
- Edge over‑provisioning dropped by 18 %, saving ~$1.2M annually.  
- Latency of prediction delivery stayed <5 ms, meeting SLA for all edge regions.  

**Leadership Principles Highlighted**  
*Customer Obsession*: Built a solution that directly reduced latency and cost for millions of end users.  
*Ownership & Dive Deep*: From data ingestion to real‑time inference I owned every layer, continuously profiling, tuning hyperparameters, and iterating on the architecture until we hit SLA targets.  

**Bar‑raiser Takeaway**  
They look for measurable impact, depth in design decisions (service choices, scaling logic), and a clear learning loop from model failures back into feature engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
