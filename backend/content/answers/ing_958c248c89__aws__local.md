---
qid: ing_958c248c89__aws__local
question: 'Explain: Install Docker — TensorFlow Serving with Docker \u00a0|\u00a0
  TFX'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 421
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:03:57-05:00'
sources: []
---

**Situation & Task**  
I led a rapid‑prototype team that had to expose an ML model for real‑time predictions in our e‑commerce recommendation pipeline. The goal was to shift from a monolithic Python service to a containerized inference layer using **TensorFlow Serving** inside Docker, then orchestrate it with **TFX** on AWS.

**Action (Design & Implementation)**  
1. Built a multi‑stage Dockerfile that pulls `tensorflow/serving:latest` and copies the exported SavedModel (`/models/recommendation`).  
2. Exposed port 8500 for gRPC and 8501 for REST, added health‑check entrypoint scripts.  
3. Deployed the container to **Amazon ECS Fargate** with an Application Load Balancer (ALB) targeting a target group that uses path‑based routing (`/v1/recommend`).  
4. Integrated TFX’s `Tuner` and `Trainer` stages into an AWS CodePipeline; the trained model is pushed to S3, then a Lambda function updates the ECS task definition with the new container image tag.  
5. Configured **AWS App Mesh** for observability (metrics via CloudWatch) and automated rollback on failed health checks.

**Result**  
- Latency dropped from 250 ms (Python Flask) to <30 ms (TensorFlow Serving).  
- Throughput increased by 4×, supporting 50k concurrent requests with <1% error rate.  
- Cost per inference fell 35% thanks to Fargate’s pay‑per‑second model.

**Reflection**  
I owned the end‑to‑end pipeline, dug deep into container networking and scaling nuances, and iterated on the health‑check logic after a production spike. This experience sharpened my **Ownership** and **Dive Deep** instincts—key AWS Leadership Principles for ML ops success.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
