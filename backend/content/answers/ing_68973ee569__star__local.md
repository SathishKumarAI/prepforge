---
qid: ing_68973ee569__star__local
question: 'Explain: which this should be reserved as well — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 301
total_tokens: 545
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:56:27-05:00'
sources: []
---

**Situation:**  
During my senior year, a local startup asked me to prototype a smart parking solution for their new downtown complex. The existing manual kiosk had a 35 % error rate in spot allocation and drivers were losing an average of 4 minutes per search.

**Task:**  
I needed to design a scalable system that could assign spots in real time, handle peak traffic (≈200 cars/min), and provide mobile notifications, all while keeping latency under 200 ms.

**Action:**  
I architected a microservice stack on AWS: an API Gateway front‑end, Lambda functions for spot assignment logic, DynamoDB for state persistence, and SQS to buffer incoming scan events. For routing, I implemented a weighted round‑robin algorithm that prioritized nearest free spots, backed by Redis caching for hot data. The mobile app used WebSocket pushes from API Gateway to deliver instant updates. I also added an anomaly detector with Amazon SageMaker to flag suspicious occupancy patterns and trigger alerts.

**Result:**  
After deployment, spot allocation accuracy rose to 99 %, search time dropped to 1.2 s on average, and the startup reported a 28 % increase in revenue from reduced parking dwell time. I learned how to balance latency, consistency, and cost while leveraging managed services for rapid delivery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
