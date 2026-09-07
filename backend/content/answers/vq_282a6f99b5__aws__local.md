---
qid: vq_282a6f99b5__aws__local
question: What’s the weather like today?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 421
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:44:03-05:00'
sources: []
---

**Customer Obsession & Ownership**

> **Situation:** A client asked, “What’s the weather like today?” and needed a reliable, real‑time answer for their mobile app.  
> **Task:** Deliver an end‑to‑end service that pulls live data, caches it, and serves 10 k+ requests per second with <200 ms latency.  
> **Action:** I built a serverless pipeline:  
> * **API Gateway + Lambda** – receives the request, validates API keys.  
> * **S3 + CloudFront** – stores a daily snapshot of NOAA data; edge caching reduces round‑trips.  
> * **DynamoDB Streams + Kinesis Data Firehose** – ingests streaming weather feeds, updates DynamoDB in real time.  
> * **Amazon QuickSight** – visualizes usage for ops.  
> I added health checks and auto‑scaling policies; the system cost $0.02 per 1 k requests and achieved 99.99% uptime over six months.  
> **Result:** The client’s app saw a 35 % lift in daily active users, and support tickets dropped by 40 %.  

**Bar‑raiser signals I hit:** I owned the solution from requirement to deployment (Ownership), dug into latency bottlenecks and AWS best practices (Dive Deep), quantified traffic & cost savings (Results), and iterated after a brief outage caused by a stale cache policy—learning that automated cache invalidation is non‑negotiable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
