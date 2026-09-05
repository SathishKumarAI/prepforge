---
qid: ing_bb0b7b6ae3__star__local
question: 'Explain: Load Balancing with DNS — How DNS Actually Works - by Ashish Pratap
  Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 326
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:45:03-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were launching a new fraud‑detection microservice that had to serve over 10 million requests per day. Our existing single‑instance architecture was hitting CPU limits and the SLA dropped from 99.9% to 98%.

**Task** – I needed to scale out the service without rewriting client code or adding a full load balancer, because we were on a tight budget and had to keep latency under 15 ms.

**Action** – I implemented DNS‑based round‑robin load balancing. Using Route 53’s weighted records, I created three identical EC2 instances behind an Elastic IP each, and set the weight to 33% for each. To handle failover, I added health checks that automatically removed unhealthy instances from rotation. On the client side, I updated the SDK to refresh DNS entries every 5 minutes (caching TTL of 300 s) so traffic would shift smoothly if an instance failed. I also introduced a sticky‑session mechanism via a small cookie when users were routed to a specific instance for stateful sessions.

**Result** – Traffic was evenly distributed, CPU usage dropped from 90% to 45%, and the service uptime rose to 99.95%. The project taught me that DNS load balancing is simple yet powerful, but requires careful TTL management and health‑check integration to avoid sudden traffic spikes or stale routing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
