---
qid: ing_aeb5b982a7__star__local
question: 'Explain: Production Design Considerations — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 360
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:21:32-05:00'
sources: []
---

**Situation**  
At my previous company we were launching a real‑time fraud detection pipeline that ingested transaction streams from thousands of POS terminals worldwide. The latency requirement was <50 ms per event to trigger instant holds.

**Task**  
I had to decide whether to ship the raw event data over TCP or UDP so the downstream inference microservice could process them with minimal delay while still guaranteeing delivery for critical fraud signals.

**Action**  
I first profiled the network: packet loss was <0.01 % on our 10 Gbps backbone, and most terminals had reliable Wi‑Fi. I benchmarked both protocols in a staging environment—TCP throughput hit ~9.8 Gbps with average RTT of 12 ms; UDP reached 10.3 Gbps but dropped 2.5 % of packets under peak load. To balance speed and reliability, I built a lightweight acknowledgment layer on top of UDP for high‑value events (e.g., >$10k) and used TCP for bulk low‑risk data. I also implemented exponential backoff retry logic and integrated Prometheus metrics to monitor loss rates in real time.

**Result**  
The hybrid scheme cut average end‑to‑end latency from 70 ms to 42 ms, a 40 % improvement, while maintaining >99.9 % delivery for critical events. The team learned that protocol choice must be driven by traffic patterns and business impact rather than one‑size‑fits‑all; the added acknowledgment layer preserved reliability without sacrificing throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
