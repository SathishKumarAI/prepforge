---
qid: ing_56770cd936__aws__local
question: 'Explain: Building rate limiters in practice — Scaling your API with rate
  limiters'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 535
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:41:46-05:00'
sources: []
---

**Situation (S)** – In my last role I led a team that exposed a public ML‑prediction API used by 120k daily customers. The API hit a 60 % spike during a product launch, causing latency to balloon from <100 ms to >1 s and leading to SLA violations.

**Task (T)** – My goal was to design a **scalable rate limiter** that protected downstream inference workers while keeping the customer experience smooth.

**Action (A)** –  
1. Deployed **Amazon API Gateway** with an **AWS WAF custom rule** for per‑IP throttling (5 req/s) and a global burst limit (200 req/min).  
2. Added a **Lambda@Edge** function that consulted a *sharded* Redis cache in ElastiCache to enforce user‑level limits (10 req/min), persisting counts in DynamoDB for auditability.  
3. Implemented a fallback circuit‑breaker: if the limiter rejected >1% of requests, a FIFO SQS queue buffered them and re‑queued after a 30‑second back‑off.  
4. Monitored with CloudWatch Alarms; automated scaling of API Gateway stages triggered by CPU/latency metrics.

**Result (R)** – After launch:  
- **99.8 %** of requests served within SLA, down from 78 %.  
- Latency dropped to <120 ms for the majority of traffic.  
- Cost increased by only **$1.2k/month** (~5 %) versus a naive scaling approach that would have cost >$20k.

---

### Leadership Principles

* **Customer Obsession** – protected users from service degradation.  
* **Ownership / Dive Deep** – architected end‑to‑end solution, tuned cache sharding, and analyzed failure modes (e.g., burst traffic spikes).

### Bar‑raiser Focus

* Clear ownership of the end‑to‑end flow.  
* Depth: justification for each AWS component, trade‑offs between Redis latency vs DynamoDB durability.  
* Quantified impact: precise SLA improvement metrics.  
* Learning from early failures (cache miss bursts) that informed the circuit‑breaker design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
