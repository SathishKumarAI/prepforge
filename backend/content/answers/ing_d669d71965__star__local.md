---
qid: ing_d669d71965__star__local
question: 'Explain: Step 3: Fetching User Preferences — Design Notification Service
  | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 319
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:37:29-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a mobile app that sent push notifications for new content. Early analytics showed a 35 % drop in engagement after the first week because users were receiving irrelevant alerts.

**Task:**  
I was tasked with redesigning the notification service so that each user only got alerts aligned with their interests, without adding latency or inflating server costs.

**Action:**  
First I built a lightweight “preference cache” using Redis. User preferences (topics, frequency limits, and opt‑in flags) were stored as a compact bitmap per device ID, refreshed every 24 hours from the user profile microservice via an event‑driven Kafka stream. When a new content item arrived, the notification dispatcher pulled only the relevant bitmaps from cache, performed a bitwise AND to find matching users, and then batched push payloads through Firebase Cloud Messaging. I added a fallback rule: if no preferences were found, default to a “general” topic with a 10 % daily quota.

**Result:**  
After deployment, click‑through rates on notifications jumped from 4.2 % to 9.8 % (a 133 % lift), and overall app retention improved by 12 %. I learned that combining event streams with in‑memory bitmaps can deliver highly personalized messaging at scale while keeping operational complexity low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
