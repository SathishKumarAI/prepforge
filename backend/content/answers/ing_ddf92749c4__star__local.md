---
qid: ing_ddf92749c4__star__local
question: How Does the Presence Platform Identify When a User Goes Offline?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 328
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:52:28-05:00'
sources: []
---

**Situation:**  
At my previous role I was tasked with improving the real‑time engagement metric for a mobile gaming app that had a 40 % drop in daily active users during off‑peak hours.

**Task:**  
I needed to build an offline detection system that could flag when a user’s device stopped pinging our servers, so the product team could trigger re‑engagement campaigns.

**Action:**  
First I collected timestamped heartbeat logs (every 5 seconds) and built a feature set: time since last ping, variance of ping intervals, app version, and network type. I trained a lightweight Gradient Boosting model (XGBoost) on a labeled dataset where “offline” was defined as >10 minutes without activity. To reduce latency I wrapped the model in TensorFlow Lite for on‑device inference. I also implemented an adaptive threshold that tightened during peak hours to avoid false positives, and used Kafka streams to push predictions to our real‑time dashboard.

**Result:**  
The system achieved 92 % precision and 88 % recall, cutting the offline detection latency from 30 minutes to under 2 minutes. This allowed us to launch a targeted push notification that lifted return rates by 15 % in the first month. I learned how to balance model complexity with edge deployment constraints while maintaining high‑quality predictions at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
