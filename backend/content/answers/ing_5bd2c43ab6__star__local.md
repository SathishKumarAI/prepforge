---
qid: ing_5bd2c43ab6__star__local
question: 'Explain: to start with perfect um yeah so — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 318
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:31:03-05:00'
sources: []
---

**Situation:** At my last internship I was asked to prototype a smart parking solution for a downtown office building that had just hit a 30% occupancy drop due to a new competitor nearby. The management wanted a system that could quickly inform drivers of free spots and reduce search time.

**Task:** Build an end‑to‑end architecture that supports real‑time spot detection, dynamic pricing, and mobile reservation, while scaling to 5,000 vehicles per hour during peak rush.

**Action:** I chose a microservices stack: a Go service for edge sensors (lidar + camera) pushed events to Kafka; a Node.js API aggregated counts in Redis streams; and a Python Flask backend calculated price tiers using a simple linear regression on historical data. For persistence I used PostgreSQL with partitioned tables per floor, and we deployed everything on Kubernetes with autoscaling based on CPU thresholds. I also added an MQTT broker for low‑latency communication to the driver app.

**Result:** The prototype reduced average search time from 4 minutes to under 30 seconds, increased parking revenue by 18% in a month of A/B testing, and handled peak loads without any outages. I learned how to balance real‑time data pipelines with cost‑effective storage while keeping latency below 200 ms for user interactions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
