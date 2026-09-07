---
qid: ing_fb282bd39a__faang__local
question: 'Explain: Traffic Spike Absorption — Content Delivery Network (CDN) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 521
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:24:06-05:00'
sources: []
---

**Clarify**

> *What is the problem?*  
We need a CDN that can absorb sudden traffic spikes (e.g., viral content, DDoS‑like bursts) while keeping latency low and cost reasonable.  
> *Assumptions to confirm:*  
1. Spikes are unpredictable but last minutes–hours.  
2. We have existing edge caches but may run out of capacity or bandwidth.  
3. SLA: < 200 ms for 95 % requests, no more than 5 % cache miss.

**Approach**

1. **Dynamic resource scaling** – add temporary edge nodes or burst into cloud VMs.  
2. **Traffic steering** – use a global load balancer with health checks and real‑time metrics.  
3. **Cache pre‑warming & replication** – duplicate hot objects to multiple edges ahead of time.  
4. **Rate limiting & throttling** – protect origin servers while giving priority to cached content.  
5. **Monitoring & auto‑recovery** – alert on cache hit ratios, latency, and bandwidth.

**Depth**

*Scaling*: Spin up spot instances or use serverless functions (e.g., Cloudflare Workers) that spin in < 1 s.  
*Steering*: Geo‑DNS + Anycast routes to nearest healthy edge; fallback to “fallback” nodes if capacity exceeded.  
*Pre‑warming*: Use a predictive model (time‑series, LSTM) on request logs to flag items likely to spike and replicate them to the nearest 10 edges.  
*Rate limiting*: Token bucket per IP + priority queue for authenticated users.  
Complexity: O(1) lookup in edge cache; scaling decisions are O(log n) over node pool.

**Edge Cases**

- *Zero cache hit*: fallback to origin – may exceed latency SLA.  
- *Over‑provisioning*: cost spikes if prediction wrong.  
- *Burst overlapping with DDoS*: rate limiter might block legitimate traffic.

**Optimize & Communicate**

Explain trade‑offs: aggressive pre‑warming reduces miss but increases storage cost; aggressive scaling improves SLA but raises ops complexity. Use dashboards (Grafana) to show real‑time hit ratios and auto‑scale triggers, and propose A/B tests on predictive thresholds before full rollout. This narrative shows structured thinking, technical depth, and clear communication—key FAANG signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
