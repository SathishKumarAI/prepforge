---
qid: ing_c44f064d2d__faang__local
question: 'Explain: Portfolio moves — Forward Deployed Engineer'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 436
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:17:17-05:00'
sources: []
---

**Clarify**  
You’re interviewing for a *Forward‑Deployed Engineer (FDE)* in AI: someone who builds production ML pipelines, works with product teams, and often travels to customer sites. I’ll assume you need to showcase how your portfolio demonstrates end‑to‑end model delivery, cross‑functional collaboration, and operational resilience.

**Approach**  
1. Highlight projects that span data ingestion → training → deployment → monitoring.  
2. Emphasize impact metrics (latency, accuracy, cost).  
3. Show evidence of customer interaction or rapid iteration cycles.  

**Depth**  
- **Project A – Real‑time fraud detection**: Built a streaming pipeline in Spark/Kafka, trained an XGBoost model, deployed via TensorFlow Serving on Kubernetes. Reduced false positives by 30 % and cut inference time from 250 ms to 80 ms.  
- **Project B – NLP chatbot for enterprise clients**: Implemented a transformer model fine‑tuned on proprietary data, wrapped in FastAPI, containerized with Docker, deployed on AWS SageMaker. Rolled out A/B tests; user satisfaction rose 15 %.  
- **Operational work**: Set up Prometheus/Grafana dashboards, automated retraining with CI/CD (GitHub Actions → ArgoCD). Managed rollback scripts and chaos‑engineering drills for zero‑downtime releases.

**Edge Cases**  
- Scaling to millions of requests per day.  
- Handling concept drift in production data streams.  
- Ensuring GDPR compliance when shipping models to EU sites.

**Optimize & Communicate**  
Explain trade‑offs: e.g., choosing a lightweight ONNX runtime over TensorFlow for edge devices, or preferring batch inference to reduce GPU cost. Narrate how each portfolio item reflects the core FDE skill set—technical depth, operational excellence, and customer focus—making you ready to hit the ground running on any client deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
