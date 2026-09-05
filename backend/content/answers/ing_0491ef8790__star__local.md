---
qid: ing_0491ef8790__star__local
question: 'Explain: Amazon System Design Interview: Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 354
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:37:59-05:00'
sources: []
---

**Situation** – In my last role I was asked to lead the redesign of a city‑wide smart parking solution that had been struggling with overbooking and driver frustration. The existing system only used static maps and manual sensor counts, leading to a 15 % average wait time for drivers.

**Task** – My goal was to build an end‑to‑end architecture that could predict real‑time occupancy, route drivers efficiently, and scale to 10 k parking spots across multiple cities while keeping latency under 200 ms.

**Action** – I started by deploying edge IoT sensors (LiDAR + camera) that streamed telemetry to a Kafka cluster. A Spark streaming job aggregated counts per zone and fed them into an online Gradient‑Boosted Trees model hosted on SageMaker, trained nightly on historical usage patterns plus weather & event data. The model output probability of vacancy for each spot, which was cached in Redis and served by a gRPC microservice to the mobile app. I also implemented a reinforcement‑learning scheduler that adjusted dynamic pricing based on predicted demand.

**Result** – After launch we cut average driver wait time from 12 min to 3 min (an 80 % reduction), increased revenue by 18 %, and achieved a 99.5 % uptime across all zones. I learned how to blend streaming analytics, ML inference, and low‑latency services into a cohesive parking platform.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
