---
qid: ing_43f7642a0b__star__local
question: 'Explain: Step 4: Scheduling (If Required) — Design Notification Service
  | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 323
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:45:02-05:00'
sources: []
---

**Situation**  
At my previous role I was tasked with building a push‑notification system for a mobile app that had over 3 M daily active users. The existing cron‑based approach was failing to meet the SLA of 95% delivery within 5 minutes, and we were hitting rate limits on our provider.

**Task**  
I needed to design a scalable scheduling layer that could queue millions of notifications, honor user time zones and preferences, and guarantee delivery windows while staying cost‑efficient.

**Action**  
I chose a hybrid architecture: Kafka for ingesting events, a Redis‑backed priority queue for per‑user buckets, and an AWS Step Functions workflow to orchestrate retries. I introduced a “time‑bucket” shard strategy (15 min windows) to batch sends, reducing API calls by 70%. To handle user preferences, I added a feature flag service that tags messages with a “deliver_at” timestamp computed from the user’s local time and opt‑in settings. Finally, I implemented exponential backoff retries and dead‑letter queues for persistent failures.

**Result**  
The new system delivered 98% of notifications within the target window, cut API costs by 45%, and reduced mean latency from 12 s to 3 s. The exercise taught me how to blend event streaming with stateful queuing to meet strict SLAs at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
