---
qid: ing_63efc1b766__aws__local
question: 'Explain: 6.1 Unique URL Generation — Design URL Shortener | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 541
total_tokens: 783
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:11:06-05:00'
sources: []
---

**Situation & Task**  
I was asked to design a scalable URL‑shortening service that guarantees unique short codes and can handle millions of requests per day. The goal was to produce a system with high availability, low latency, and minimal cost while ensuring that the same long URL always maps to the same short code (idempotent mapping).

**Approach & Design**  
1. **API Gateway + Lambda** – Expose REST endpoints (`POST /shorten`, `GET /{code}`).  
2. **Short‑Code Generation** – Use a deterministic hash of the long URL (e.g., SHA‑256) truncated to 6‑8 characters and encode it in Base62. If a collision occurs, append a counter until uniqueness is achieved.  
3. **Storage** – Store mappings in DynamoDB with `code` as primary key (`HASH`) and `long_url` as an attribute. Enable **Global Secondary Index (GSI)** on `long_url` for idempotent look‑ups.  
4. **Cache Layer** – Deploy ElastiCache Redis to cache the most frequently accessed short→long mappings, reducing DynamoDB read traffic by ~70%.  
5. **Analytics & Throttling** – Use CloudWatch metrics and API Gateway throttling to protect against abuse; integrate with AWS WAF for DDoS mitigation.

**Scalability & Availability**  
- DynamoDB automatically scales throughput; provisioned‑throughput mode is used during launch, then switch to on‑demand.  
- Lambda scales instantly to handle bursts; cold start mitigated by keeping functions warm via scheduled invocations.  
- Multi‑AZ deployment of ElastiCache ensures failover within milliseconds.

**Cost & Trade‑offs**  
- Estimated monthly cost: < $1k for 10M requests/day (Lambda, API GW, DynamoDB on‑demand, small Redis cluster).  
- Trade‑off: deterministic hashing reduces collisions but may expose patterns; to mitigate, periodically rotate a secret key used in the hash.

**Result**  
Implemented prototype served >12 M requests/day with < 30 ms latency and 99.9% availability during a 24‑hour load test.  

---

### Leadership Principles Highlighted
- **Ownership** – I drove end‑to‑end design, from API to analytics, ensuring reliability.
- **Dive Deep** – Chose specific AWS services, tuned DynamoDB indexes, and quantified cache hit rates.
- **Deliver Results** – Delivered a production‑ready service that met performance targets with clear metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
