---
qid: ing_9e7e169ca9__star__local
question: 'Explain: Staff ML Engineer – Applied AI — Uber Engineering \u2014 Where
  the Digital World Meets the Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 309
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:49:00-05:00'
sources: []
---

**Situation:**  
When I joined Uber’s Mobility team, we were launching a new dynamic routing feature for autonomous ride‑hailing in San Francisco. The algorithm had to predict traffic patterns up to an hour ahead while respecting real‑time constraints of the on‑board computer.

**Task:**  
I was tasked with designing and deploying a scalable ML pipeline that could ingest live sensor data, train models at scale, and push updates to edge devices without exceeding 200 ms latency.

**Action:**  
I architected a hybrid system using Apache Kafka for streaming telemetry, TensorFlow Serving on Kubernetes for inference, and ONNX conversion for model compression. I implemented an online learning loop that retrained the traffic prediction model every six hours with new data, leveraging GPU‑accelerated training in a Spot‑Instance cluster to cut costs by 35 %. For edge deployment, I distilled the model into a lightweight version using knowledge distillation, reducing its footprint from 250 MB to 45 MB while keeping accuracy within 1.2 % of the full model.

**Result:**  
The new routing system reduced average passenger wait times by 18 % and increased surge pricing efficiency by 12 %. I learned that balancing latency, model size, and retraining frequency is critical when bridging digital predictions with physical vehicle control—an insight that guided our subsequent AI‑driven safety features.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
