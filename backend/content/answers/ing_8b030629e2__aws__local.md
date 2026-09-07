---
qid: ing_8b030629e2__aws__local
question: 'Explain: Using different kinds of rate limiters in concert'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 426
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:40:02-05:00'
sources: []
---

**Situation & Task**  
In my last role I built a real‑time recommendation engine that served 3 M users per day. The API was hit by bursts of up to 10 k requests/sec during product launches, causing downstream batch jobs to choke and SLA violations (99.5 % availability). My goal: keep the system healthy while delivering low latency to end users.

**Action**  
I layered *token‑bucket* rate limiting at the API gateway for overall throughput control and added *leaky‑bucket* per‑user limits in Lambda to prevent abusive clients.  
- **AWS services:** Amazon API Gateway (global throttling), AWS WAF Rate Based Rules, Lambda with DynamoDB TTL for per‑user counters, CloudWatch Alarms.  
- **Design choices:**  
  - Token bucket at edge: 5 k req/s burst, 2 k req/s steady → protects downstream queues.  
  - Leaky bucket inside Lambda: max 200 req/min per user with 30 s back‑off → throttles rogue clients without impacting others.  
- **Scalability & Cost:** Both mechanisms use stateless counters; DynamoDB read/write cost <$0.10/day for 3 M users, API Gateway throttling is free at the chosen limits.

**Result**  
After deployment, burst incidents dropped from 12 per week to <1, and latency stayed under 120 ms for 99.9 % of requests. Availability improved to 99.97 %. I documented the pattern in a best‑practice guide used across the org, which reduced engineering effort by ~30 h/month.

**Learning & Ownership**  
I iterated on the bucket sizes after monitoring real traffic, showing *Dive Deep* and *Ownership*. The bar‑raiser would note my quantitative impact, systematic trade‑offs, and post‑mortem analysis of early failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
