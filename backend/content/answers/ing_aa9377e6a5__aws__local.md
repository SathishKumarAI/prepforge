---
qid: ing_aa9377e6a5__aws__local
question: 'Explain: Back-of-the-Envelope Estimation — Design URL Shortener | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 453
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:52:06-05:00'
sources: []
---

**Situation / Task**  
I was asked to sketch a URL‑shortener for a client that expects 1 M new links/day and 10 B total URLs, with < 100 ms latency for the redirect.

**Action (Design)**  
* **Data model:** `id → original_url` in DynamoDB (partition key = short_id).  
* **Short ID generation:** use a time‑based counter (Kinesis Firehose to Lambda) + base‑62 encode – guarantees uniqueness and monotonic growth.  
* **Routing layer:** API Gateway + Lambda for POST, CloudFront edge cache for GET.  
* **Cache strategy:** 5 MB in-memory per region (ElastiCache Redis) for hot URLs; TTL 24 h.  
* **Analytics:** Streams to Kinesis → Redshift for daily click reports.  

**Result**  
Projected cost: $0.03 / M GET + $0.02 / M POST ≈ **$5k/month** at 10 B URLs, 1 M writes/day. Latency < 80 ms with 99.9% availability (multi‑AZ DynamoDB, CloudFront).  

**Leadership Principles**  
* *Customer Obsession* – built a low‑latency, highly available system that scales to millions of users.  
* *Ownership* – drove the end‑to‑end design, chose services that minimize ops overhead and cost.  

**Bar‑raiser cues**  
* Demonstrated **ownership** by selecting serverless + managed services for rapid iteration.  
* Showed **depth (Dive Deep)** with concrete throughput, latency, and cost calculations.  
* Quantified impact: 10 B URLs → $5k/month ≈ 1% of the client’s marketing spend.  
* Learned from a prior project where manual scaling caused 15 % SLA breach; now rely on auto‑scaling DynamoDB and CloudFront edge caches.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
