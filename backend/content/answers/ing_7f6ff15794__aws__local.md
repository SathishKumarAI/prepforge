---
qid: ing_7f6ff15794__aws__local
question: 'Explain: Reference Work Credits — Ai Evals Comprehensive Study Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 548
total_tokens: 779
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:13:17-05:00'
sources: []
---

**Context – Situation**  
At my previous role I led a cross‑functional squad that built an internal **AI Evaluation Toolkit** for our ML platform. The business needed a single source of truth to audit model performance and track “reference work credits” (the effort spent on data labeling, preprocessing, and experimentation).  

**Task**  
Design a scalable, cost‑effective system to capture, store, and report these credits while enabling auditors to query historical usage in real time. The solution had to meet strict SLAs (< 5 s latency for dashboards) and stay under $10K/month.

**Action**  
1. **Data ingestion** – Employed **Amazon Kinesis Data Streams** (shards = 2) to stream event payloads from our label‑ing tools.  
2. **Processing & enrichment** – Lambda functions parsed events, calculated per‑job credits (label time × cost rate), and wrote results to **DynamoDB** with a composite key (`projectId#timestamp`).  
3. **Analytics layer** – Used **Amazon Athena** on an S3 lake for ad‑hoc queries; scheduled **Glue crawlers** nightly to refresh the catalog.  
4. **Visualization** – Power‑BI (or QuickSight) dashboards pulled from Athena, giving instant drill‑downs.  
5. **Cost control** – Enabled DynamoDB auto‑scaling and reserved capacity; Kinesis was provisioned at 1 MB/s, well below peak traffic (~0.3 MB/s).  

**Result**  
- Reduced audit turnaround time from **48 hrs to 15 min** (97% faster).  
- Cut monthly ops spend by **$2.7K** through auto‑scaling and reserved capacity.  
- Achieved 99.99% availability during peak training cycles.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivered instant visibility for auditors, directly improving compliance confidence.  
- **Ownership** – Took full ownership of the end‑to‑end pipeline, from ingestion to visualization.  
- **Dive Deep** – Tuned Kinesis shard count and DynamoDB provisioned capacity based on real traffic patterns.  

### Bar‑raiser takeaways
- Demonstrated *quantified impact* (time & cost savings).  
- Showed *depth* in AWS service selection and trade‑offs.  
- Learned from early trial failures by switching from SQS to Kinesis after profiling event bursts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
