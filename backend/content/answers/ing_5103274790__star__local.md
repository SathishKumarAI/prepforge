---
qid: ing_5103274790__star__local
question: 'Explain: Architecture — System Design Interview Cheat Sheet - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 334
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:10:10-05:00'
sources: []
---

**Situation:**  
When I was interviewing for a senior ML engineer role at a fintech startup, the hiring team asked me to outline an end‑to‑end architecture for real‑time fraud detection on streaming transaction data.

**Task:**  
I needed to design a low‑latency pipeline that ingested millions of events per day, performed feature extraction, scored them with a gradient‑boosted model, and routed alerts to the compliance team—all within 200 ms.

**Action:**  
I started by sketching a Kafka topic for raw transactions and used ksqlDB to compute rolling aggregates (10‑second windows) as feature tables. For model inference I deployed an ONNX Runtime cluster behind a gRPC load balancer, scaling horizontally with Kubernetes autoscaling based on CPU usage. To keep the system fault‑tolerant, I added a dead‑letter queue for failed predictions and set up Prometheus alerts on inference latency spikes. Finally, I integrated a Lambda function that pushed high‑risk scores to an SNS topic, triggering a human review workflow.

**Result:**  
The prototype processed 2 M events per day with an average end‑to‑end latency of 150 ms, reducing false positives by 18% compared to the legacy rule‑based system. I learned how to balance real‑time constraints with operational resilience and how to articulate trade‑offs—throughput vs. accuracy—in a concise architecture diagram.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
