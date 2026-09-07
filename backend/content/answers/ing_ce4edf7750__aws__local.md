---
qid: ing_ce4edf7750__aws__local
question: 'Explain: Collision Risks — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 665
total_tokens: 902
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:07:34-05:00'
sources: []
---

**Scenario (S)**  
I was tasked to redesign a URL‑shortening service that had 2 M requests/day and was experiencing “collision” errors when two users submitted the same long URL simultaneously.

**Task (T)**  
Eliminate collisions, guarantee at most one short URL per original link, keep latency < 50 ms, and scale to 10× traffic without breaking the SLA.

**Action (A)**  

| Step | Technical decision | AWS services | Reasoning |
|------|--------------------|--------------|-----------|
| **Hash‑based key** | Use SHA‑256 of the long URL → deterministic short code. | – | Guarantees same input → same output, eliminating user‑initiated collisions. |
| **Collision handling** | On collision (rare), append a 6‑char random suffix and retry; keep a Bloom filter in Redis to detect duplicates quickly. | Amazon ElastiCache Redis | Fast membership test (≤1 µs) and low cost. |
| **Write path** | `PutItem` with `ConditionExpression` on the short code key in DynamoDB. If condition fails, generate new code. | Amazon DynamoDB | ACID guarantees per item; automatic scaling. |
| **Read path** | Simple `GetItem`; if not found, redirect to 404. | DynamoDB + CloudFront cache | Cache hot URLs at edge for <5 ms latency. |
| **Monitoring & Auto‑Scaling** | CloudWatch metrics (collision rate, latency) trigger Lambda auto‑scaling of Redis and DynamoDB read capacity. | AWS Lambda, CloudWatch | Keeps cost proportional to traffic. |

**Result (R)**  
- Collision rate dropped from 0.02 % to < 0.0001 %.  
- Average response time: 32 ms (≤ 50 ms SLA).  
- Cost per 10 M requests fell by 18 % after moving to on‑demand DynamoDB and using CloudFront.

---

### Leadership Principles

| Principle | How I demonstrated it |
|-----------|-----------------------|
| **Ownership** | Took full responsibility for the service’s reliability, from design through monitoring. |
| **Dive Deep** | Analyzed collision logs, quantified impact (≈ 3.6 k failed redirects/day), and engineered a deterministic hash + Bloom filter solution. |

---

### What a Bar‑raiser Looks For

- **Ownership:** I led the end‑to‑end redesign and set up automated monitoring.  
- **Dive Deep:** I quantified collision rates, tested edge cases, and chose a Bloom filter after profiling its false positive rate.  
- **Quantified Impact:** 0.02 % → < 0.0001 % collisions; latency improvement of ~30 %.  
- **Learning from Failure:** Initial naive counter‑based IDs caused collisions under high concurrency; pivoting to deterministic hashing solved the root cause.

*This answer blends a data‑driven STAR narrative with concrete AWS design choices, showcasing depth and impact in line with Amazon’s bar‑raising standards.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
