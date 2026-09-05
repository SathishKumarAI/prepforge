---
qid: ing_3eb4b4749f__star__local
question: 'Explain: into this a little later um when — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 313
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:33:48-05:00'
sources: []
---

**Situation** – In my last role I was asked to build an internal prototype for a new smart parking solution that could be rolled out across Amazon’s campus. The existing system had no real-time space visibility, leading to 20% of visitors walking around looking for spots and a 15% overstay penalty rate.

**Task** – I needed to design a scalable architecture that would provide live occupancy data, predict vacancy trends using ML, and integrate with the campus mobile app so drivers could reserve or be routed to open bays in real time.

**Action** – I chose an event‑driven microservice stack: sensors streamed data via MQTT into Kafka; a stream processor (Apache Flink) updated a Redis cache for instant lookup. For prediction I trained a LightGBM model on historical occupancy, weather, and event schedules, deploying it as a REST service behind a Kubernetes cluster with autoscaling. The mobile front‑end used GraphQL to fetch nearest free spots and display heat maps.

**Result** – Pilot deployment reduced visitor search time by 60% (from 4 min to 1.6 min), cut overstay penalties by 70%, and the model achieved an R² of .88 for vacancy forecasts. I learned how to balance real‑time constraints with batch‑trained ML, and that clear SLA definitions are critical when blending sensor data with predictive services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
