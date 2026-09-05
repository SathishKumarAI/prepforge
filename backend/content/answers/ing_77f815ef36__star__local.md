---
qid: ing_77f815ef36__star__local
question: 'Explain: Scale AI System Design — Ai Companies Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 349
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:34:03-05:00'
sources: []
---

**Situation:**  
At my previous role as a senior ML engineer for a fintech startup, our fraud detection model was only processing ~500 transactions per second, but during peak hours we needed to handle up to 10 k TPS to meet regulatory compliance and avoid revenue loss.

**Task:**  
Redesign the AI pipeline so it could scale horizontally while maintaining <2 % false‑positive rate and keeping latency under 200 ms per inference.

**Action:**  
1. Decomposed the monolithic model into micro‑services: feature extraction, feature store, inference, and post‑processing.  
2. Migrated to a Kubernetes cluster with autoscaling based on CPU/Memory and custom metrics (TPS).  
3. Implemented TensorRT + ONNX for GPU inference, reducing per‑inference latency by 4×.  
4. Added a distributed cache (Redis) for hot features to avoid recomputation.  
5. Introduced model versioning with Canary releases and A/B testing to monitor drift.  
6. Set up Prometheus/Grafana dashboards for real‑time health metrics and automated alerts.

**Result:**  
The system now processes 12 k TPS, latency dropped to 140 ms on average, and the false‑positive rate remained at 1.8%. Deployment time for new models went from weeks to a few hours, and we reduced infrastructure costs by 30% through efficient GPU utilization. I learned that modular architecture, observability, and continuous delivery are key to scaling AI reliably.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
