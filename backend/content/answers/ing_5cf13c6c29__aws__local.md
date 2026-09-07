---
qid: ing_5cf13c6c29__aws__local
question: 'Explain: Authorization — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 528
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:55:51-05:00'
sources: []
---

**Situation**  
While leading a cross‑functional team at my previous company, we had to expose a new **Authorization API** that would let microservices decide if a user could access protected resources. The goal was to reduce latency to < 10 ms and support 200K RPS while keeping the cost below $0.02 per request.

**Task**  
Design an end‑to‑end, highly available system that can:  
1. Validate JWTs or session tokens.  
2. Query policy rules stored in a central repository.  
3. Return an “allow/deny” decision to callers with minimal overhead.

**Action**  
- **API Gateway + Lambda@Edge** for request routing and token parsing (serverless, pay‑per‑use).  
- Store policies in **DynamoDB Global Tables** (multi‑region replication) for low‑latency reads.  
- Use **AWS AppConfig** to push policy updates without downtime.  
- Cache decisions in **ElastiCache Redis** with TTL of 5 s, reducing DynamoDB traffic by ~85%.  
- Implement a **dedicated Lambda layer** that performs cryptographic validation (RSA‑SHA256) and enforces rate limits via API Gateway’s quota feature.

*Scalability*: Auto‑scales Lambda concurrency; Redis shards handle burst traffic.  
*Availability*: Multi‑AZ deployments, failover to secondary region in 30 s.  
*Cost*: Roughly $0.015 per request—under target—and < $5/month for Redis.

**Result**  
The API achieved **99.999% uptime**, reduced average latency from 45 ms to **8 ms**, and processed 250K RPS during load tests. Customer support tickets fell by 40%, improving overall user satisfaction.

**Learnings & Bar‑raiser cues**  
- Took full ownership of end‑to‑end performance, validating assumptions with real metrics.  
- Dived deep into cryptography and caching trade‑offs to avoid “black‑box” solutions.  
- Quantified impact (latency, cost, ticket reduction) and iterated based on failure points (e.g., cache eviction spikes).  

*Leadership Principles*: **Customer Obsession** (improved user experience), **Ownership** (full responsibility for reliability), **Dive Deep** (technical depth in caching & cryptography).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
