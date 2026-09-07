---
qid: ing_de779a296a__aws__local
question: 'Explain: Rate limit by IP — Ratelimiterapi'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 489
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:42:39-05:00'
sources: []
---

**Situation (S)**  
While revamping the public‑API gateway for our recommendation engine, we observed a surge in abusive traffic from a handful of malicious IPs that caused latency spikes and throttled legitimate users.

**Task (T)**  
Design an IP‑based rate limiter that protects downstream services while keeping cost and latency low—aligning with *Customer Obsession* (protect user experience) and *Ownership* (own the API layer).

**Action (A)**  

| Step | AWS Service | Reason |
|------|-------------|--------|
| 1 | **API Gateway** + **Lambda@Edge** | Edge‑level check, zero‑latency per request. |
| 2 | **DynamoDB Global Secondary Index (GSI)** on `clientIP` with a *TTL* column. | Fast read/write of hit counts; TTL auto‑clears counters every hour. |
| 3 | **AWS WAF** rate‑based rule (threshold: 5 k req/min) | Hardware‑accelerated filtering before Lambda, reducing compute load. |
| 4 | **CloudWatch Alarms + SNS** | Detect anomalous spikes and trigger auto‑scale for the Lambda function. |

The Lambda increments a counter atomically (`UpdateItem` with `ADD`). If the count exceeds the threshold, it returns HTTP 429; otherwise passes through to downstream services.

**Result (R)**  
Implemented in 3 days, we reduced API latency by **32 %** during peak periods and cut malicious traffic by **87 %**. Monthly cost impact was <$200 because DynamoDB throttling and WAF are pay‑as‑you‑go and the Lambda runs only for rate‑limited requests.

**Learnings**  
- *Dive Deep*: We discovered that a naïve in‑memory counter failed under scale; moving to DynamoDB with TTL solved consistency issues.  
- *Bar‑raiser focus*: Showed ownership (end‑to‑end solution), quantified impact, and iterative learning from a false‑positive spike that led us to tune the WAF rule.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
