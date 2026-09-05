---
qid: ing_30ce34c8a6__star__local
question: 'Explain: example there is a big campus in — UBER System design | OLA system
  design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 350
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:06:10-05:00'
sources: []
---

**Situation**  
When I joined the campus safety team at a university with 25,000 students, the security office was overwhelmed by manual incident reports and delayed responses. The campus had over 1,500 CCTV cameras and 300 IoT sensors generating ~2 GB of video per day.

**Task**  
I needed to build an automated threat‑detection system that could flag suspicious behavior in real time, reduce false alarms by 30%, and provide actionable alerts within 10 seconds of event capture.

**Action**  
I architected a streaming pipeline using Kafka for ingestion, Spark Structured Streaming for preprocessing, and TensorFlow Serving for inference. The model was a YOLOv5 variant fine‑tuned on campus‑specific imagery (over 50k labeled frames). To handle latency, I deployed the model on GPU instances behind an NVIDIA Triton Inference Server, scaling horizontally with Kubernetes autoscaling. For false‑positive mitigation, I added a rule‑based post‑processor that cross‑checked sensor metadata and historical patterns. We logged every inference to a BigQuery table for audit and continuous retraining.

**Result**  
The system cut incident response time from 4 minutes to under 12 seconds on average, reduced false alarms by 35%, and increased detection accuracy to 92% F1‑score. I learned the importance of balancing model complexity with real‑time constraints and the value of end‑to‑end observability in ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
