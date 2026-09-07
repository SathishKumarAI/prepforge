---
qid: ing_3957826738__aws__local
question: 'Explain: important in the sense that you could — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 504
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:34:53-05:00'
sources: []
---

**Situation & Task**  
While leading the “On‑Demand Logistics” squad at DoorDash, we had to reduce order‑to‑delivery latency by 30 % for our high‑volume urban corridors. The core challenge was to keep riders and customers in sync with sub‑second updates while keeping costs below $0.02 per delivery.

**Action – Design & Execution**  
1. **Geo‑hashing**: Adopted a 12‑character H3 index (≈ 100 m resolution) as the primary sharding key for rider/location data. Stored each rider’s current hash in an Amazon DynamoDB Global Table replicated across us‑east‑1 and eu‑west‑1, ensuring low‑latency reads for cross‑region dispatching.  
2. **WebSocket streaming**: Deployed a fleet of Amazon API Gateway WebSockets backed by AWS Lambda@Edge to push real‑time rider coordinates to the mobile SDK. The lambda enriched payloads with nearest restaurant H3 buckets via an in‑memory cache, avoiding a round‑trip to DynamoDB.  
3. **Cost & Scale**: Leveraged DynamoDB’s on‑demand capacity; WebSocket connections were throttled to 5 k per region, keeping monthly spend <$10K while handling >200 k concurrent riders during peak hours.

**Result**  
- Delivery latency dropped from 12.4 s to **8.1 s** (−35 %).  
- Rider churn fell by 18 % as drivers reported smoother navigation.  
- Operational cost per delivery decreased by **$0.005** due to efficient caching and reduced API calls.

**Reflection & Learning**  
I owned the rollout, but a mid‑night Lambda cold start caused a 2 s spike for 1.3 k riders. I introduced provisioned concurrency and auto‑scaling rules—learning that “Bias for Action” must be coupled with rigorous monitoring (CloudWatch Alarms) to avoid ripple effects.

**Leadership Principles Highlighted**  
- **Ownership**: Took full responsibility from design through production.  
- **Dive Deep**: Analyzed geo‑hash granularity, latency budgets, and cost curves.  
- **Deliver Results**: Achieved measurable speedup and cost savings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
