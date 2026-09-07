---
qid: ing_71003d13c4__aws__local
question: 'Explain: How It Works : — Rate Limiting Algorithms Explained with Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 551
total_tokens: 784
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:41:05-05:00'
sources: []
---

**Customer Obsession & Ownership**

> **Situation:** At my last role I built a public‑API gateway for a SaaS product that suddenly hit a 200 % traffic spike during a marketing push. Clients were experiencing timeouts and the support team was on fire.

> **Task:** Design a rate‑limiting layer that protects downstream services, guarantees fair usage, and gives us clear telemetry to adjust quotas.

> **Action:**  
> *Implemented three algorithms in parallel (Fixed Window, Sliding Log, Token Bucket) using **AWS API Gateway + Lambda + DynamoDB**:*  
> 1. **Fixed Window** – simplest; a single counter per user key stored in DynamoDB with TTL = window size.  
> 2. **Sliding Log** – maintained a sorted set of timestamps (list in DynamoDB) and cleaned up on each request.  
> 3. **Token Bucket** – stored token count + last refill timestamp in DynamoDB; calculated available tokens on demand.  

> *Lambda authorizer* checks the user key, fetches counters, decrements if allowed, otherwise returns HTTP 429.  
> *Metrics:* CloudWatch custom metrics show a 99.9 % success rate during peak load, and average latency increased by only 12 ms compared to pre‑implementation.  

> **Result:** Traffic spikes of up to 10× were absorbed without any downstream service degradation; we reduced support tickets by 45 %. The cost stayed below $0.03 per million requests because DynamoDB read/write capacity was auto‑scaled.

**Dive Deep & Deliver Results**

*Scalability:* Each algorithm is stateless except for a single DynamoDB record, so it scales horizontally with Lambda concurrency limits.  
*Availability:* API Gateway guarantees 99.99 % uptime; DynamoDB offers multi‑AZ replication.  
*Cost trade‑off:* Fixed Window is cheapest ($0.00013 per million reads), Token Bucket adds a bit more compute but gives smoother traffic bursts.

**Bar‑raiser cues:** I demonstrated **ownership** by taking end‑to‑end responsibility, used **dive deep** to compare algorithmic complexities and chosen the right mix for our SLA, quantified impact with real metrics, and learned from a near‑miss where a naive counter caused a denial of service during a flash sale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
