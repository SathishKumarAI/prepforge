---
qid: ing_e601aeefeb__star__local
question: 'Explain: And then use that historical data to — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 338
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:07:50-05:00'
sources: []
---

**Situation:**  
While leading the traffic analytics team at a ride‑hailing startup, we noticed that our real‑time ETA predictions were off by an average of 3 minutes during peak hours, hurting user satisfaction and driver efficiency.

**Task:**  
I needed to build a scalable ML pipeline that leveraged historical GPS and congestion data to refine ETA models, integrate the output into our live routing service, and keep latency under 200 ms per request.

**Action:**  
First, I curated a 6‑month dataset of anonymized trip traces, weather logs, and event schedules, then used Apache Kafka for ingestion and Spark Structured Streaming for real‑time feature engineering (e.g., average speed per road segment, time‑of‑day traffic heatmaps). I trained an XGBoost model on these features, tuning hyperparameters with Optuna. For deployment, I containerized the model as a gRPC microservice behind Envoy, using Redis cache to store precomputed route weights. We added A/B testing and continuous monitoring via Grafana dashboards.

**Result:**  
ETA accuracy improved from 3‑minute error down to 0.7 minutes on average during peak periods, boosting rider retention by 12 % and reducing driver idle time by 18 %. I learned how to blend batch historical insights with real‑time inference in a low‑latency system, and the importance of end‑to‑end observability for ML services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
