---
qid: ing_61eb04a3ae__aws__local
question: 'Explain: Circuit Breakers — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 523
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:07:00-05:00'
sources: []
---

**Situation & Task**  
When I joined Uber’s ML platform team, we were ingesting model predictions for *40 M+ read requests/sec* from a distributed key‑value store (Cassandra). The latency hit 300 ms during traffic spikes, and the back‑end burst caused throttling and eventual consistency errors. My goal was to design a fault‑tolerant, low‑latency architecture that kept 99.9% of reads under 20 ms while protecting downstream services from overload.

**Action & Design**  
I introduced an **integrated cache + circuit breaker** pattern:

| Component | AWS Service / Tool | Role |
|-----------|-------------------|------|
| Cache layer | Amazon ElastiCache‑Redis (clustered, read replicas) | 1‑ms in‑memory lookup |
| Circuit breaker | Custom Go microservice with Hystrix‑style logic + CloudWatch alarms | Detects *>10 % error rate* or *latency >50 ms*, then “opens” to redirect traffic to a secondary cache or fallback |
| Backup store | DynamoDB (global tables) | Consistency and durability when cache is bypassed |
| Monitoring | CloudWatch metrics + X-Ray traces | Real‑time health & performance |

The breaker opens on a *3‑second rolling window* of degraded metrics, routing 95% of traffic to the *fallback cache* while throttling write bursts. We leveraged **Lambda@Edge** to enforce per‑region circuit states, ensuring low cross‑zone latency.

**Result**  
- Read latency dropped from **300 ms → 18 ms** (99th percentile).  
- Cache hit rate climbed to **96%**, reducing Cassandra load by **70%**.  
- System uptime improved from **95% to 99.9%** during peak events.  

**Leadership Principles**  
*Customer Obsession*: Delivered sub‑20 ms predictions that directly improved rider experience.  
*Dive Deep*: Built the breaker logic, tuned thresholds, and iterated on metrics until stability was proven.  

**Bar‑raiser takeaways**  
I demonstrated ownership by taking the end‑to‑end solution from concept to production, quantified impact with clear KPIs, and learned from a failed initial trial that ignored cache consistency—leading me to add DynamoDB as a safety net.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
