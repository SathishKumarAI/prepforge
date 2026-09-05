---
qid: ing_67fc083057__eli5__local
question: 'Explain: 5.4 Monitoring and Logging — Design Notification Service | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 278
total_tokens: 447
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:20:46-05:00'
sources: []
---

Imagine your machine‑learning model is a busy factory that keeps producing goods (predictions).  
**Monitoring** is like the factory’s safety sensors: they watch temperature, vibration, and output quality to catch problems early. **Logging** is the production record book where every shift’s data—who worked, what was produced, any hiccups—is written down for later review.

A **notification service** is the alarm system that reads those sensors and logs and tells you (or your team) when something needs attention: “Model accuracy dropped 3 % in the last hour” or “GPU usage hit 90 %.”  
It listens to a stream of alerts, filters out the noise, and sends clear messages—via email, SMS, or chat—to the right people at the right time.

In design terms:
- **Data sources**: sensor metrics (CPU, memory), log files, model performance stats.  
- **Collector**: gathers this data continuously.  
- **Processor**: applies rules or thresholds to detect anomalies.  
- **Notifier**: pushes alerts through chosen channels.  

By treating monitoring as safety sensors, logging as a record book, and notification as an alarm system, you keep the ML “factory” running smoothly without getting lost in technical jargon.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
