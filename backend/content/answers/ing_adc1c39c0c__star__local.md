---
qid: ing_adc1c39c0c__star__local
question: 'Explain: schema side of things how we''re going — Amazon System Design
  Interview: Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 413
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:19:35-05:00'
sources: []
---

**Situation** – At my last role I was tasked with building a real‑time occupancy prediction system for a large multi‑story parking garage in downtown. The existing database schema was flat: a single table storing vehicle timestamps and spot IDs, which made it impossible to run complex ML models without massive ETL.

**Task** – Redesign the data model so that we could ingest sensor streams (RFID tags, camera detections) at 10 ms resolution, store them efficiently, and expose features for an online gradient‑boosting model that predicts future occupancy per level within a 5‑minute horizon.

**Action** – I introduced a star schema: a central **ParkingEvent** fact table linked to dimension tables (**Spot**, **VehicleType**, **TimeWindow**, **Level**). Each event stored `spot_id`, `event_type` (entry/exit), `timestamp`, and a pre‑computed 1‑minute occupancy count. The **TimeWindow** dimension used a time‑bucket approach, enabling fast windowed aggregations with PostgreSQL’s materialized views. I added a Kafka topic to stream events into the fact table in near real‑time, using Debezium for change data capture. For feature engineering, I created rolling window aggregates (e.g., moving average occupancy per level) stored as separate columns, so the ML model only needed a join and no heavy computation.

**Result** – The new schema cut query latency from 12 s to <300 ms for real‑time predictions, allowing our dashboard to display live occupancy heatmaps. The ML model achieved 87 % accuracy in predicting level fill rates 5 minutes ahead, improving parking guidance efficiency by 18 %. I learned that a well‑designed dimensional schema can bridge raw sensor data and production‑grade ML pipelines without costly ETL layers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
