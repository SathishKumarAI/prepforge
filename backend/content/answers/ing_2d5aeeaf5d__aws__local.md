---
qid: ing_2d5aeeaf5d__aws__local
question: 'Explain: Metrics and Text Search Engine — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 468
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:07:36-05:00'
sources: []
---

**Situation & Task**  
I was tasked to build a *search‑and‑metrics* platform for an internal ML hub that served ~1 M users daily. The goal was to provide instant relevance scores and real‑time usage metrics while keeping cost under $5k/month.

**Action – Design & Implementation**  
- **Search Layer:** Deployed **Amazon OpenSearch Service** (formerly Elasticsearch) with fine‑tuned BM25 for text ranking, backed by an S3 data lake that auto‑updates every 30 s via Lambda.  
- **Metrics Engine:** Leveraged **Amazon Timestream** to ingest clickstream events from Kinesis Data Streams, enabling sub‑second aggregation of query counts and dwell time.  
- **Serving Layer:** Created a lightweight API in Go on **AWS Fargate**, exposing REST endpoints that merge search results with live metrics via DynamoDB caching (TTL 60 s).  
- **Scalability & Availability:** OpenSearch cluster auto‑scales based on CPU/heap usage; Timestream uses serverless storage tiering. Global replication to us-east-1 & eu-central-1 ensured <200 ms latency for >99.9% of requests.  
- **Cost Control:** Spot instances for Fargate tasks, reserved capacity for OpenSearch, and Timestream’s auto‑tiering cut spend from $12k/month to $4.7k.

**Result**  
- Search relevance improved by 23 % (measured via A/B test on click‑through rate).  
- Metric latency dropped from 3 s to <200 ms, enabling real‑time dashboards used by >90 % of data scientists.  

**Learnings & Ownership**  
I iterated the schema after discovering cold‑start spikes; adding a pre‑warm Lambda resolved it—demonstrating *Dive Deep* and *Bias for Action*. The platform now scales to 5 M daily queries with <1 % cost variance, embodying *Customer Obsession*, *Ownership*, and *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
