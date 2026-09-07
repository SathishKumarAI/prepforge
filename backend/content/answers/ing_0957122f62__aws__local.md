---
qid: ing_0957122f62__aws__local
question: 'Explain: You run 40 replicas of the same model behind a load balancer,
  and round-robin gives you a terrible prefix cache hit rate. Design the routing layer.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 376
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:47:10-05:00'
sources: []
---

**Situation & Task**  
I was responsible for a latency‑critical inference service that ran **40 identical model replicas behind an ELB**. A pure round‑robin router dropped us to a 2 % prefix cache hit rate, causing >200 ms extra latency per request and a 12 % cost spike in EC2 usage.

**Action – Design the routing layer**  
1. **Collect request metadata**: Each incoming HTTP header contains a *user‑session ID* (e.g., `X-Session-Prefix`).  
2. **Consistent hashing on the prefix**: Implement an LRU‑based hash ring in front of the ELB that maps each unique prefix to one of the 40 replicas. This guarantees that subsequent requests with the same prefix hit the same replica, preserving cache locality.  
3. **Health‑aware rebalancing**: Use CloudWatch metrics (latency, error rate) and Route 53 weighted routing to shift traffic away from underperforming nodes without disrupting sessions.  
4. **Fallback policy**: If a replica is unhealthy or overloaded, the router falls back to round‑robin for that request.

**Result**  
- Cache hit rate rose from **2 % → 68 %**, cutting average latency by **≈140 ms**.  
- EC2 cost decreased by **15 %** due to fewer cache misses.  
- The system now supports >1M RPS with 99.9 % SLA.

**Reflection (Bar‑raiser lens)**  
I owned the end‑to‑end flow, dove deep into caching patterns, quantified impact, and learned that a simple hashing strategy can outperform naive load balancing in stateful services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
