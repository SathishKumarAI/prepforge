---
qid: ing_8329f34bf0__aws__local
question: 'Explain: Streaming — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 466
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:21:28-05:00'
sources: []
---

**Situation**  
At my last role I was tasked to build a real‑time recommendation engine for a video platform that had to ingest user events (play, pause, search) from millions of devices and serve personalized suggestions with < 200 ms latency.

**Task**  
Design an end‑to‑end streaming pipeline using HTTP/HTTPS as the ingestion channel while keeping cost, availability, and scalability in mind.

**Action**  

| Step | AWS Service | Why |
|------|-------------|-----|
| 1. Ingestion | **Amazon API Gateway + Lambda@Edge** | Handles HTTPS traffic at edge, scales automatically, offloads TLS termination, and provides per‑region latency control. |
| 2. Buffering | **Amazon Kinesis Data Streams** | Guarantees ordered, fault‑tolerant ingestion of millions of events with sub‑second buffering. |
| 3. Pre‑processing | **AWS Glue / Lambda** | Enriches records (geo‑lookup, user profile) before ML scoring. |
| 4. Feature Store | **Amazon DynamoDB Global Tables** | Low‑latency read/write for feature vectors; multi‑AZ replication ensures high availability. |
| 5. Model Serving | **SageMaker Neo + Lambda** | Compiled models run on Lambda for cost efficiency, or use SageMaker Endpoint for heavier inference when needed. |
| 6. Feedback Loop | **Amazon S3 + Athena** | Store raw events; batch retrain every 12 hrs with Athena queries. |

**Result**  
- Latency dropped from 650 ms to < 180 ms (30% faster).  
- Cost decreased by 28% compared to a monolithic EC2 solution.  
- 99.999% availability achieved through multi‑AZ Kinesis and DynamoDB.

**Reflection** – *Ownership & Dive Deep*: I built automated health checks for each component, logged anomalies, and iterated on the Lambda timeouts after observing cold starts—learning that edge caching reduced TLS overhead by 15%. This continuous feedback loop is what keeps the system robust at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
