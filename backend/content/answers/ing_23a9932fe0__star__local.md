---
qid: ing_23a9932fe0__star__local
question: 'Explain: So this is something if if you — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 314
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:40:13-05:00'
sources: []
---

**Situation**  
During my internship at a rides‑hailing startup, we noticed that our ETA predictions on the app were off by an average of 12 % during peak hours. The traffic model we used was a simple linear regression that didn’t capture real‑time congestion patterns.

**Task**  
I was tasked with redesigning the ETA engine so it could deliver sub‑10 % error, handle millions of concurrent users, and still run within our 50 ms latency budget for the mobile SDK.

**Action**  
First I built a data pipeline in Apache Kafka that streamed GPS traces, traffic sensor feeds, and weather alerts. On top of that I trained an LSTM‑based sequence model in TensorFlow to predict travel times per road segment, feeding it with time‑of‑day, historical congestion, and real‑time speed dropouts. To meet latency constraints I distilled the LSTM into a lightweight XGBoost model deployed on a Kubernetes cluster with autoscaling. The inference service was wrapped in a gRPC endpoint that the mobile app called via a CDN edge cache.

**Result**  
The new system cut ETA error to 7 % during rush hour, boosted user satisfaction scores by 15 %, and reduced server costs by 18 % thanks to efficient scaling. I learned how to balance model accuracy with operational constraints in a production ML pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
