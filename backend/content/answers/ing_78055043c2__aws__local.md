---
qid: ing_78055043c2__aws__local
question: 'Explain: Build a rate limiter for an API gateway: per-key token bucket
  first, then extend it to multiple gateway instances.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 516
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:56:47-05:00'
sources: []
---

**Situation / Task**  
While leading a server‑less microservice for a fintech app, we hit throttling limits on our public API. I was tasked to design a per‑client key rate limiter that could scale across multiple API Gateway instances without compromising latency.

**Action**  
1. **Per‑key bucket** – Implemented a token‑bucket algorithm in an *AWS Lambda@Edge* layer. Each request fetched the client’s bucket state from **Amazon DynamoDB** (partition key = client_id). The Lambda atomically updates the counter with `UpdateItem` using a conditional expression, ensuring no race conditions.  
2. **Multi‑instance scaling** – Switched to an *ElasticCache for Redis* cluster in a single AZ to serve as a fast, shared store. Clients’ buckets are cached locally (TTL = 1 s) and refreshed via `GET`/`SET`. The Redis cluster’s high‑availability mode guarantees 99.99% uptime while keeping per‑request latency < 5 ms.  
3. **Observability** – Sent bucket metrics to CloudWatch; set alarms for bursty traffic (> 10× target).  

**Result**  
Reduced average API error rate from 12% to < 0.1% under peak load, cutting support tickets by 85%. The cost of Redis was $0.05 per GB‑hour, a 30% savings over DynamoDB read/write capacity.

---

### Leadership Principles

- **Ownership** – Took end‑to‑end responsibility for latency, reliability, and cost.  
- **Dive Deep** – Profiled Lambda cold starts, Redis replication lag, and DynamoDB write amplification to fine‑tune TTLs.  

### Bar‑raiser cues

- **Quantified impact**: 0.1% error → $200k annual savings.  
- **Depth**: Demonstrated trade‑offs between DynamoDB consistency vs. Redis latency.  
- **Learning from failure**: Initial design hit a “hot key” bottleneck; pivoted to sharded Redis slots after profiling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
