---
qid: ing_f6d107ad3b__aws__local
question: 'Explain: Pros — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 426
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:34:42-05:00'
sources: []
---

**Situation & Task**  
I led the migration of our recommendation engine from a single‑node TensorFlow cluster to a fully managed, event‑driven pipeline on AWS. The goal was to support 5 × more traffic while keeping latency under 100 ms and reducing ops overhead.

**Action – Design Choices**  
- **Model Serving:** Deployed SageMaker Endpoint with autoscaling (min 1–max 10 pods) behind an Application Load Balancer, ensuring 99.9 % availability.  
- **Data Ingestion:** Used Kinesis Data Streams to stream user actions; Lambda functions transform records and push them to S3 for training data.  
- **Training & Hyper‑parameter Tuning:** SageMaker Training jobs run on Spot Instances (up to 70 % cost savings). The hyper‑parameter tuner automatically explores the search space, cutting model iteration time from 8 h to 2 h.  
- **Feature Store:** DynamoDB serves low‑latency feature lookups; TTL and global tables keep data fresh across regions.  

**Result**  
Traffic grew 5×, latency stayed <90 ms, and cost dropped 35 % year‑over‑year. Model accuracy (AUC) improved from .72 to .81 thanks to the richer training set.

**Leadership Principles Anchored**  
- **Customer Obsession:** Delivered a faster, more reliable recommendation experience for millions of users.  
- **Ownership & Dive Deep:** Took end‑to‑end ownership of the pipeline and iterated on each component until performance goals were met.  

**Bar‑raiser takeaways** – I showed deep technical knowledge (AWS services, autoscaling logic), quantified impact (metrics above), and learned from early failures by adding a failover path to Lambda when Kinesis throttles, which prevented downtime during peak loads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
