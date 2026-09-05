---
qid: ing_93cd948877__star__local
question: 'Explain: Scale Estimation — Design Notification Service | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 417
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:28:28-05:00'
sources: []
---

**Situation:**  
At my previous startup we launched a real‑time notification platform that pushed alerts to millions of users across iOS, Android and web. Within three months the user base exploded from 300k to 2M active accounts, and our daily push volume surged to 15 million messages, causing latency spikes and occasional message loss.

**Task:**  
I was tasked with estimating how many servers, queues and databases would be needed to keep <200 ms end‑to‑end latency while handling peak traffic, all within a $2 M budget for the next fiscal year.

**Action:**  
First I profiled our current pipeline: a single Kafka cluster (broker = 4 GB RAM) feeding 12 consumer groups. Using a queuing model (M/M/1), I calculated that at 15 million messages/day the arrival rate λ≈174 msg/s. To keep average queue time below 50 ms, I solved for service rate μ using Erlang‑C, arriving at μ≈200 msg/s per consumer. Thus each consumer group needed ~2.5 workers; rounding up gave 3 workers per group. I then added a secondary Redis cache to pre‑fetch user tokens and used a CDN edge worker to offload the heavy HTML rendering. Finally, I proposed auto‑scaling rules: scale out one broker per +1 % traffic spike beyond baseline, with spot instances for non‑critical queues.

**Result:**  
After deploying the new architecture, we handled 20 million messages/day with average latency 120 ms and zero message loss during a 4× traffic surge. Cost savings of ~35 % were realized by leveraging spot instances and horizontal scaling. I learned that rigorous queuing theory combined with real‑time monitoring is essential for cost‑effective scale estimation in notification services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
