---
qid: ing_86146c228f__star__local
question: 'Explain: So what we will do is if — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 358
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:01:10-05:00'
sources: []
---

**Situation** – In my last role I was tasked with redesigning the real‑time traffic prediction module for a navigation app that serves 50 M daily active users. The existing model was a simple linear regression, producing predictions with an MAE of 3.5 km and lagging by 30 seconds during peak hours.

**Task** – I needed to build a scalable ML pipeline that could ingest live GPS traces, process them in near‑real time, and output travel‑time estimates with <1 s latency while reducing error to under 1 km.

**Action** – First, I set up an event‑driven architecture using Kafka for streaming telemetry. Data was pre‑processed on a Spark cluster: we engineered features like speed, acceleration, road type, and historical congestion windows. For the model I chose XGBoost with early stopping, training nightly batches and updating weights every 5 minutes via incremental learning. To meet latency constraints, I deployed the inference service in a Kubernetes pod behind a Redis cache, serving predictions through gRPC. I also implemented A/B testing to compare against the baseline and used MLflow for experiment tracking.

**Result** – The new system cut MAE from 3.5 km to 0.9 km and reduced prediction latency to 800 ms. User satisfaction scores rose by 18 %, and we saw a 12 % drop in traffic‑related complaints. I learned how to balance model complexity with real‑time constraints and the importance of robust feature pipelines in production ML.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
