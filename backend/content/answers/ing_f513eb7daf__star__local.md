---
qid: ing_f513eb7daf__star__local
question: 'Explain: Stage 4: Case Study Presentation (48-hour take-home, 120 min panel)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 411
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:38:36-05:00'
sources: []
---

**Situation** – At my previous company we were launching a new AI‑driven recommendation engine. The product manager asked us to produce a 48‑hour take‑home case study that would be presented in a 120‑minute panel interview. We had to demonstrate how we’d handle data ingestion, model training, and real‑time inference while keeping latency under 200 ms.

**Task** – My goal was to build a reproducible pipeline from raw click logs to a deployed TensorFlow Lite model, then craft a concise slide deck that explained the architecture, trade‑offs, and performance metrics. I had to show clear evidence of scaling, error handling, and A/B testing plans within the tight deadline.

**Action** – I first wrote a PySpark script to clean and feature‑engineer the logs into a Parquet dataset on S3. Using Ray we distributed the training of an XGBoost model across 8 GPU nodes, achieving 0.82 AUC in under two hours. For inference I converted the model to TensorFlow Lite, wrapped it with FastAPI, and containerized it for deployment on AWS Lambda. I added a Prometheus exporter to track latency and error rates, and built an automated A/B test harness that logged results back into DynamoDB. The slide deck highlighted key bottlenecks, chosen trade‑offs (e.g., 32‑bit quantization vs accuracy), and a roadmap for production rollout.

**Result** – In the panel I demonstrated the live demo with < 180 ms latency and an AUC improvement of 5 % over the legacy system. The panel awarded me a “Fastest Completion” badge, and the project was green‑lit for pilot deployment within two weeks. I learned how to balance speed, accuracy, and operational simplicity under pressure—skills that translate directly into any AI product launch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
