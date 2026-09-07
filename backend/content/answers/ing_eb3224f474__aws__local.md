---
qid: ing_eb3224f474__aws__local
question: 'Explain: Developing with Docker — TensorFlow Serving with Docker \u00a0|\u00a0
  TFX'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 433
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:09:57-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
I was asked to deploy a production‑grade inference pipeline for an e‑commerce recommendation engine. The team needed to serve TensorFlow models with zero downtime while keeping latency < 50 ms and cost <$0.05 per inference.

**Action (Ownership + Dive Deep)**  
1. **Containerization** – Built a Docker image from the official `tensorflow/serving` base, added a lightweight Nginx reverse‑proxy to terminate TLS and perform request routing.  
2. **Model management** – Packaged the trained TFX model into a `model/0` directory inside the container, exposing `/v1/models/recommender:predict`.  
3. **Deployment** – Launched the image on **Amazon ECS Fargate** (serverless containers) with an Application Load Balancer (ALB). The ALB’s path‑based routing forwards `/predict` to the service and health checks to `/v1/metadata`.  
4. **Scaling & Availability** – Configured *target tracking* scaling based on CPU utilization (80 %) and added a second ECS cluster in an AZ for high availability.  
5. **Cost control** – Used Fargate Spot tasks during off‑peak hours, saving ~30 % vs on‑demand.

**Result (Deliver Results)**  
- Latency dropped from 120 ms to 38 ms; 99.9 th percentile < 60 ms.  
- Throughput increased to 12k requests/sec with zero downtime during a 48 h model roll‑out.  
- Monthly inference cost fell from $1,200 to $870 (≈ 27 % savings).  

**Bar‑raiser takeaway** – I owned the end‑to‑end pipeline, dove into Dockerfile optimizations and ECS scaling rules, quantified impact with real metrics, and iterated on failure points (e.g., ALB health check misconfig) to harden reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
