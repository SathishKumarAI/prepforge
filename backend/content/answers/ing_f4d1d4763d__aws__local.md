---
qid: ing_f4d1d4763d__aws__local
question: 'Explain: But normally you would also want to — Database Design Tips | Choosing
  the Best Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 351
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:30:39-05:00'
sources: []
---

**Situation & Task**  
During a system‑design interview for an AI platform that serves millions of inference requests per day, the interviewer asked how I’d choose a database and design its schema while keeping latency <10 ms.

**Action (Design)**  
I scoped the requirements: *write‑heavy model metadata + read‑light feature vectors.*  
* **Ownership & Bias for Action** – I proposed using Amazon DynamoDB for metadata (high write throughput, auto‑scaling) and Amazon ElastiCache‑Redis for caching frequently accessed embeddings.  
* **Dive Deep** – I modeled the key as `model_id#timestamp` to support time‑series queries, used a global secondary index on `status`, and set provisioned capacity with 20 % headroom.  
* **AWS Services & Trade‑offs** – DynamoDB gives single‑digit millisecond latency at $0.25/GB/month; Redis reduces read cost by 70 % and removes network hops. I added a Lambda layer to auto‑archive old embeddings to S3, keeping the database lean.

**Result**  
The prototype handled 2 M requests/sec with <8 ms avg latency, a 35 % reduction in egress costs versus a monolithic RDS solution, and 99.999 % uptime during load tests.  

**Learning** – I discovered that choosing a *polyglot* storage layer (DynamoDB + Redis) can deliver both scalability and cost efficiency when the data access patterns are clearly separated.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
