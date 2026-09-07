---
qid: ing_bcf0889908__aws__local
question: 'Explain: Company context — Amazon'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 453
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:30:46-05:00'
sources: []
---

**Situation & Task (Amazon)**  
At a mid‑stage e‑commerce subsidiary, customer reviews were siloed in unstructured text, limiting our ability to surface product insights and personalize recommendations. I was tasked with building an AI pipeline that could ingest millions of reviews nightly, extract sentiment and feature tags, and feed the recommendation engine—while keeping costs below **$1M/yr**.

**Action (Design & Execution)**  
- **Data Ingestion:** Used **Amazon Kinesis Data Firehose** to stream review JSON into S3 (partitioned by date).  
- **Processing:** Deployed an AWS Glue ETL job that invoked **Amazon Comprehend Custom Classification** for sentiment and **Comprehend Entity Recognition** for product features. The job ran on a *spot* EMR cluster, auto‑scaling to 10 m2 of CPU when new batches arrived.  
- **Serving Layer:** Results were stored in a read‑optimized **Amazon DynamoDB** table (partition key: `product_id`). A Lambda function triggered by S3 uploads refreshed the cache; this kept latency < 200 ms for recommendation lookups.  
- **Cost & Reliability:** Spot pricing saved ~30 % vs on‑demand, while DynamoDB’s global tables ensured 99.99 % availability across regions.

**Result (Impact)**  
- Sentiment accuracy improved from 68 % to **92 %**, validated by A/B testing against manual labels.  
- Personalized recommendations saw a **15 % lift in conversion rate** for the top 20 % of products, translating to ~$3M incremental revenue per quarter.  

**Leadership Principles Highlighted**  
- *Customer Obsession* – delivering deeper product insights directly improved buyer experience.  
- *Ownership & Dive Deep* – I owned the entire pipeline, tuned every component, and iterated based on real metrics.  
- *Deliver Results* – Quantified lift in conversion and cost savings demonstrate measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
