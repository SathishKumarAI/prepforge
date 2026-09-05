---
qid: ing_34e408d54a__star__local
question: 'Explain: fx — Uber Engineering \u2014 Where the Digital World Meets the
  Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 360
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:14:05-05:00'
sources: []
---

**Situation:**  
During my second year at Uber, I joined the Mobility Services team to tackle a surge in real‑time ETA predictions for rides across three major cities. The existing model lagged behind the dynamic traffic patterns, causing an average of 12 % more “dead drops” where drivers arrived after passengers had already left.

**Task:**  
I was tasked with designing a system that could ingest live sensor data—GPS traces, traffic feeds, and weather APIs—and deliver ETA estimates within 200 ms while keeping the model size under 500 MB to fit on edge devices in our driver app.

**Action:**  
First, I built an online feature store using Apache Kafka and Redis Streams to stream raw telemetry into a real‑time feature pipeline. I then trained a gradient‑boosted decision tree ensemble (XGBoost) with CatBoost’s categorical handling, but pruned it via SHAP value analysis to reduce complexity. To meet latency constraints, I distilled the model into a lightweight neural net and deployed it on the driver’s phone using TensorFlow Lite, adding a fallback server call only when confidence dropped below 0.85. Continuous A/B testing fed back into an automated retraining loop every 12 hours.

**Result:**  
ETA accuracy improved from 78 % to 93 %, cutting dead‑drop incidents by 18 %. Driver satisfaction scores rose by 4 points on the NPS scale, and we saved $2M annually in operational costs. I learned that marrying robust feature engineering with model distillation is key when bridging digital predictions to physical actions in a real‑world fleet.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
