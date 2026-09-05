---
qid: ing_4ca5315d38__star__local
question: 'Explain: Add More Application Servers — Client-Server Architecture | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 324
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:01:28-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with scaling a real‑time analytics dashboard that served thousands of corporate users. The existing single Node.js app server was hitting a CPU saturation at 85 % during peak hours, causing latency to jump from 120 ms to over 1 s.

**Task**  
I had to redesign the architecture so we could handle a 3× increase in concurrent sessions while keeping response times under 200 ms and preserving data consistency across users.

**Action**  
First, I introduced a stateless application layer by decoupling business logic from the database. I spun up two new Express servers behind an Nginx load balancer using round‑robin with health checks. To keep session state, I migrated user sessions to Redis, enabling sticky‑session routing. I also added a queue (RabbitMQ) for heavy ETL jobs so that the app servers weren’t blocked by background processing. Finally, I implemented horizontal autoscaling on Kubernetes, setting CPU thresholds at 70 % to trigger pod replicas.

**Result**  
The new setup reduced average latency to 140 ms and handled 5,000 concurrent users with a 99.9 % uptime. Traffic spikes were absorbed without manual intervention, and we cut infrastructure costs by 15 % through efficient autoscaling. I learned the importance of statelessness for horizontal scaling and how caching/queueing can isolate performance bottlenecks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
