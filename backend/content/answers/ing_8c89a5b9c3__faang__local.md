---
qid: ing_8c89a5b9c3__faang__local
question: 'Explain: Load Balancer Redundancy — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 494
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:11:03-05:00'
sources: []
---

**Clarify**  
The interviewer wants a design that keeps an HTTP load balancer highly available so traffic never drops when the LB itself fails. We assume: *public‑facing clients → LB → application tier;* multiple geographically close LBs can be used; we need to preserve session affinity and minimal latency.

**Approach**  
1. Deploy two or more LBs in active‑active mode behind a DNS record with health checks (e.g., Route 53, CloudFront).  
2. Use a global load balancer (GSLB) that routes clients to the nearest healthy LB.  
3. For stateful sessions, enable sticky sessions via secure cookies or use an external session store (Redis, DynamoDB).  

**Depth**  
- **Health checks**: Each LB pings `/health` on its own and on peers; if a check fails for > N s, the GSLB marks it unhealthy.  
- **Failover latency**: DNS TTL low (~5‑30 s) plus client reconnection gives < 1 s downtime.  
- **Consistency**: Session data in a shared store ensures no loss when traffic shifts.  
- **Scalability**: Adding more LBs simply involves updating the GSLB config; each LB auto‑scales via target groups.

Complexity: O(1) per request, O(n) for health‑check polling where *n* = number of LBs. Trade‑off is slightly higher DNS overhead vs. single‑point failure risk.

**Edge Cases**  
- *Network partition*: If a client’s region loses connectivity to all LBs, fallback to a secondary region LB.  
- *Stale session cookies*: Mitigate by rotating cookie keys or using token‑based sessions.  
- *DNS caching*: Ensure TTLs are short enough for rapid failover but not so low as to cause churn.

**Optimize & Communicate**  
I’d start with two LBs, measure failover latency, then add a third for redundancy. I’d explain that the GSLB abstracts LB failures from clients, and that session persistence is handled externally to avoid state loss. This shows clear problem framing, a scalable solution, complexity awareness, and readiness to handle edge cases—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
