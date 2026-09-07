---
qid: ing_9578a18878__aws__local
question: 'Explain: Hard Throttling — Ratelimiting'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 560
total_tokens: 791
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:03:51-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a migration of our public ML‑model inference API from an on‑prem server farm to **AWS Lambda + API Gateway**. The new service had to support 10 k requests/sec while preventing abuse and protecting the underlying GPU workers.

**Action – Technical Design**  
1. **Hard throttling via API Gateway** – set a *global* rate limit of 12 k req/s with burst allowance of 2 k, ensuring the Lambda pool never receives more than ~10 k concurrent invocations.  
2. **Per‑client bucket–bucket algorithm** – store a per‑API‑key counter in **DynamoDB** (partition key = client id). A Lambda authorizer reads the current count atomically (`UpdateItem` with `ADD`) and rejects any request that exceeds the 100 req/min quota, returning HTTP 429.  
3. **Cache the counter in ElastiCache Redis** for sub‑second reads; on cache miss fall back to DynamoDB. This keeps latency <50 ms even under burst traffic.  
4. **CloudFront + WAF** – block IP ranges that hit >5 k req/s, protecting downstream resources from DDoS spikes.

**Result**  
- Reduced average GPU queue wait time from 1.2 s to 0.08 s (×15).  
- Maintained 99.95% availability during a 30‑day load test that simulated 50 k concurrent users, with no service interruptions.  
- Cut operational cost by 27% by eliminating over‑provisioned compute and using on‑demand Lambda.

**Reflection – Leadership Principles**  
*Ownership & Dive Deep*: I took end‑to‑end responsibility for latency, scalability, and cost; I profiled every layer to uncover the throttling bottleneck.  
*Bias for Action*: Implemented a live throttle without waiting for formal approval—validated by A/B testing.  
*Learn from Failure*: After an early spike caused Lambda timeouts, I added exponential back‑off in the client SDK and adjusted the burst allowance, turning a potential outage into a learning loop.

**Bar‑raiser takeaways** – Deep understanding of AWS rate‑limiting primitives, quantified impact on latency/cost, ownership of end‑to‑end performance, and iterative improvement after failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
