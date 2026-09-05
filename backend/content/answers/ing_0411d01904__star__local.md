---
qid: ing_0411d01904__star__local
question: 'Explain: High Availability — Highavailability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 377
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:36:52-05:00'
sources: []
---

**Situation**  
At my previous company we were launching a real‑time recommendation engine for an e‑commerce platform that had to serve millions of requests per day. A single point of failure would mean downtime during peak shopping hours, costing us revenue and damaging user trust.

**Task**  
I was tasked with designing the system so it could stay online 99.999% of the time (five nines) while handling a sudden spike of 200 k concurrent users during Black Friday sales.

**Action**  
First, I split the model inference service into micro‑containers and deployed them across three availability zones using Kubernetes with an auto‑scaling group that watched CPU/latency thresholds. To guard against node failures, I set up a global load balancer (AWS ALB) that performed health checks every 10 s and automatically routed traffic to healthy pods. For stateful data, I used Amazon DynamoDB’s cross‑region replication with a read replica in each zone so that queries never stalled on a single table copy. Finally, I implemented a circuit breaker pattern in the service layer; if latency exceeded 200 ms for more than 30 s, the breaker opened and traffic was redirected to a fallback “cached recommendation” endpoint.

**Result**  
During the Black Friday test run we saw no downtime; request latency stayed under 150 ms with an average throughput of 250 k requests per second. The system met the five‑nines SLA, and post‑mortem analysis showed that our health checks prevented three potential node failures from affecting users. I learned how orchestrating container placement, load balancing, and graceful degradation together creates robust AI services that survive real‑world traffic surges.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
