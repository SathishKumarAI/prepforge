---
qid: ing_a4dbc00f84__aws__local
question: 'Explain: Fixed Window Algorithm — Ratelimiting'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 444
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:40:10-05:00'
sources: []
---

**Fixed‑Window Rate Limiting – A Quick‑Start Design**

*Leadership Principles:* **Customer Obsession** (prevent abusive traffic from degrading user experience) & **Ownership** (own the system’s reliability).

**Situation**  
At my last role I built a public API that suddenly received a 300 % spike in burst traffic during a product launch, causing 5 % of requests to time‑out and driving up support tickets by 120 %.  

**Task**  
Implement an efficient rate limiter that protects downstream services while keeping latency < 100 ms.

**Action**  
1. **Design** – Use the *fixed‑window* algorithm: a counter per client key stored in Amazon DynamoDB with a TTL equal to the window size (e.g., 60 s).  
2. **Implementation** –  
   - **API Gateway** + **Lambda Authorizer** reads/updates the counter atomically using `UpdateItem` with `ReturnValues=UPDATED_NEW`.  
   - If the count > *limit* (e.g., 1000 requests/window), return HTTP 429.  
3. **Scalability & Cost** – DynamoDB’s provisioned throughput handles millions of ops per second; using TTL automatically cleans old entries, keeping storage minimal (~$0.25/MB‑month).  
4. **Observability** – CloudWatch metrics (`RateLimitExceeded`) trigger an SNS alarm that auto‑scales the Lambda concurrency.

**Result**  
- Latency dropped from 250 ms to 75 ms for normal traffic.  
- Rate‑limit violations reduced by 98 %, cutting support tickets by 110 %.  
- Cost impact < $10/month due to TTL cleanup.  

*Bar‑raiser note:* I showed deep ownership (design, ops), quantified improvement, and learned that a simple fixed window is often sufficient before moving to more complex sliding windows if needed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
