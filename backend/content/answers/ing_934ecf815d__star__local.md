---
qid: ing_934ecf815d__star__local
question: What is AI system design? — Ai System Design Guide
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 318
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:27:16-05:00'
sources: []
---

**Situation:**  
At my last company we were tasked with launching a real‑time fraud detection engine for a global payments platform that handled $2 B in monthly transactions. The existing rule‑based system was generating too many false positives and couldn’t scale past 50k events per minute.

**Task:**  
I had to design an end‑to‑end AI system that would reduce false positives by at least 30%, support 200k TPS, and allow engineers to update models without downtime.

**Action:**  
First, I mapped the data pipeline: raw logs → Kafka topics → Spark Structured Streaming for feature enrichment. For model inference, I chose a lightweight gradient‑boosting ensemble (XGBoost) served via TensorRT on GPUs to keep latency under 20 ms. I introduced a multi‑stage architecture: an online “quick filter” followed by an offline batch re‑scoring that fed back into the online cache using Redis Streams. We implemented continuous monitoring with Prometheus and built a model retraining scheduler that automatically pulled new data every 12 hours, evaluated drift, and rolled out new checkpoints via Canary deployments in Kubernetes.

**Result:**  
The new system cut false positives from 18% to 11%, boosted throughput from 50k to 220k TPS, and reduced model update time from weeks to 48 hours. I learned that a modular, observability‑first design is critical for scaling AI at production level.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
