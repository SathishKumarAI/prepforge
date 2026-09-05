---
qid: ing_d3afd6678a__star__local
question: 'Explain: Step 8: Sending the Notification — Design Notification Service
  | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 378
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:32:56-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a marketplace app where buyers could receive instant alerts for new listings and price drops. The user engagement metric was lagging—only 12 % of users opened the app after receiving a notification, and our click‑through rate dropped to 0.3 %.  

**Task:**  
I was asked to design the notification service that would increase open rates by at least 20 % while keeping latency under 200 ms and scaling to 5 million daily active users.  

**Action:**  
1. Built a publish‑subscribe layer using Apache Kafka, partitioned by user region to reduce hot spots.  
2. Implemented a rate‑limiting microservice in Go that batches push tokens per device type (iOS/Android) and applies exponential backoff for failed deliveries.  
3. Added a real‑time scoring engine that weighs user preferences, past interaction, and time of day before queuing the message.  
4. Deployed FCM/APNs gateways behind an edge CDN; used WebSocket fallback for browsers.  
5. Instrumented metrics with Prometheus and set up alerting for delivery latency spikes.  

**Result:**  
Within three weeks of rollout, open rates rose to 15 % (a 25 % lift) and click‑through increased from 0.3 % to 0.45 %. The system handled 4.5 M active users with <180 ms average latency. I learned that combining real‑time personalization with robust queuing and monitoring is key to a scalable, high‑performing notification service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
