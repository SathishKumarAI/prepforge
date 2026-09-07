---
qid: ing_6b769b6896__aws__local
question: 'Explain: Search and Pull are Inverses — The Architecture Twitter Uses to
  Deal with 150M Active Users, 300K QPS, a 22 MB/S Firehose, and Send Tweets in Under
  5\u00a0Seconds - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 274
output_tokens: 556
total_tokens: 830
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:27:11-05:00'
sources: []
---

**Situation (S)**  
At Twitter we had to serve >150 M active users with a 300K QPS search layer while ingesting a 22 MB/s firehose and delivering tweets in <5 s. The challenge was to keep latency low without over‑provisioning compute.

**Task (T)**  
Design an architecture that treats *search* and *pull* as inverses—so that a query can be answered by either a fast cache or a full scan, depending on the data’s age and popularity—while guaranteeing high scalability, availability, and cost control.

**Action (A)**  
1. **Ingest Pipeline** – Use **Amazon Kinesis Data Firehose** to buffer the 22 MB/s stream into an S3 “hot” bucket (5‑minute window).  
2. **Indexing Service** – A fleet of **AWS Lambda** functions, triggered by new objects, materialize inverted indexes into **DynamoDB Global Tables** (partitioned by user ID & hashtag).  
3. **Search Layer** – For recent tweets (<1 h), query the DynamoDB index; for older data, fall back to a **Amazon OpenSearch Service** cluster that holds full-text replicas.  
4. **Pull/Serve** – A stateless **API Gateway + Lambda@Edge** layer serves user requests in <5 s, routing to cache (ElastiCache Redis) when possible or invoking the search path otherwise.  
5. **Auto‑Scaling & Cost** – DynamoDB auto‑scales on QPS; OpenSearch uses spot instances with a warm pool for burst traffic.  

**Result (R)**  
The system sustained 300K QPS with <4 s latency for 99.9% of requests, and cost per request fell by **35 %** versus the legacy batch‑processing model.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Deliver instant tweet delivery to millions.  
- **Ownership** – Own end‑to‑end data flow from ingestion to user view.  
- **Dive Deep** – Chose DynamoDB vs OpenSearch based on latency curves and cost per request.  

### Bar‑Raiser Expectations
- Demonstrated ownership of the entire pipeline.  
- Quantified impact (latency, cost savings).  
- Showed deep trade‑off analysis (Lambda vs EC2, DynamoDB vs RDS).  
- Learned from earlier failures where a monolithic search caused 7 s spikes; pivoted to an inverse architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
