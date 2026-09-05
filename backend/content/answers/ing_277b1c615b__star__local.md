---
qid: ing_277b1c615b__star__local
question: 'How Is It Used? — Event-Driven Architecture (EDA): A Complete Introduction'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 294
total_tokens: 536
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:47:32-05:00'
sources: []
---

**Situation:**  
At a fintech startup, our real‑time fraud detection system was lagging—about 25% of suspicious transactions slipped through because the rule engine couldn’t keep up with the volume spike during holiday shopping.

**Task:**  
I needed to build an event‑driven pipeline that could ingest every transaction in milliseconds, apply a predictive model, and trigger alerts or auto‑block actions without human intervention.

**Action:**  
I chose Apache Kafka for the message bus, publishing each transaction as a JSON event. Using KSQL we filtered high‑risk streams and fed them into an online inference service built with TensorFlow Serving behind gRPC. The model was a lightweight gradient‑boosted tree trained on labeled fraud data; it output a risk score that the downstream microservice used to decide whether to hold or approve the payment. I implemented back‑pressure handling by scaling Kafka consumers horizontally and added Prometheus alerts for latency thresholds.

**Result:**  
The system processed 10,000+ events per second with an average inference latency of 12 ms, cutting fraud loss by 40% in the first quarter. I learned how to balance model complexity against real‑time constraints and that a well‑structured event flow can turn ML into a live decision engine rather than a batch tool.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
