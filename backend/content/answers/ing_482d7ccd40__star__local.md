---
qid: ing_482d7ccd40__star__local
question: 'Explain: Request Volume — Design Load Balancer | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 370
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:52:51-05:00'
sources: []
---

**Situation**  
At my previous startup we launched a new recommendation API that started receiving 120 k requests per minute within the first week of release. The service was built on Node.js with an in‑memory cache, but once traffic hit 10 k req/min our latency jumped from 30 ms to 350 ms and error rates spiked.

**Task**  
I had to design a load‑balancing layer that could handle the bursty request volume, keep response times under 100 ms, and provide graceful degradation when any single instance failed.

**Action**  
First I introduced an NGINX reverse proxy with a round‑robin algorithm and health checks on each backend. To mitigate sudden spikes I added an HTTP/2 connection pool per worker, reducing TCP handshakes by ~40%. Next, I implemented sticky sessions using the client’s IP hash to keep cache hits local. For autoscaling I wired CloudWatch metrics (CPU > 70 % or latency > 120 ms) to a Lambda that spun up new Docker containers in ECS, capped at 10 instances. Finally, I set up rate‑limiting per user with Redis to cap abusive traffic.

**Result**  
After deployment we saw average latency drop from 350 ms to 75 ms under peak load, and the error rate fell below 0.1 %. The autoscaler kept us within a $200/month budget by scaling only when needed. I learned that combining stateless proxies with smart session handling and real‑time metrics can tame even sudden traffic surges.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
