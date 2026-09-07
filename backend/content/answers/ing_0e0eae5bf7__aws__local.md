---
qid: ing_0e0eae5bf7__aws__local
question: 'Explain: Non-functional requirements: — Ratelimiterapi'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 468
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:57:26-05:00'
sources: []
---

**Situation & Task**  
At my last role I was asked to add a **rate‑limit** layer to our public ML inference API that served 120 k requests/day. The goal: protect downstream GPU workers from burst traffic while keeping latency < 50 ms.

**Action (Design)**  
1. **API Gateway + Lambda Authorizer** – first gate, cheap and scales automatically.  
2. **DynamoDB “token bucket” table** – one item per API key, attributes `bucket`, `last_refill_ts`.  
3. **AWS Kinesis Data Streams** – streams raw request logs for audit and dynamic adjustment of limits.  
4. **Cost‑control** – the Lambda authorizer reads/writes to DynamoDB in a single transaction; 1 ms latency, < $0.00004 per call.

I implemented a *token bucket* algorithm with a refill rate derived from historic traffic (mean+2σ). The Lambda checks the token count atomically and rejects (`429`) if empty, otherwise decrements and passes the request to the inference service.  

**Result**  
- **Availability:** 99.98 % SLA maintained; no GPU over‑utilization incidents after deployment.  
- **Cost:** $0.12/month for Lambda + DynamoDB vs. $3.50/month previously spent on a custom rate‑limiter VM.  
- **Performance:** Avg latency increased by only 2 ms (1.6 %).  

**Reflection & Learning**  
Ownership: I drove the solution end‑to‑end, from requirement clarification to post‑mortem analysis of a spike that initially caused 30 % throttling. Dive Deep: I profiled DynamoDB throughput and identified a hot key pattern; solved it by sharding the bucket ID. Bias for Action: I deployed a canary in one region before rolling out globally.  

**Leadership Principles Highlighted**  
- **Customer Obsession:** Ensured users never saw performance degradation while protecting backend resources.  
- **Ownership & Dive Deep:** Took full responsibility, iterated on design based on real traffic data, and documented trade‑offs for future teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
