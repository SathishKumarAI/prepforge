---
qid: ing_550e8d99f6__aws__local
question: 'Explain: Running a serving image — TensorFlow Serving with Docker \u00a0|\u00a0
  TFX'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 538
total_tokens: 782
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:38:33-05:00'
sources: []
---

**Situation (S)**  
At my last role I was tasked with deploying a production‑grade inference pipeline for a recommendation engine that served ~4 M requests/day. The team had built the model in TensorFlow and packaged it as a Docker image, but we lacked a scalable, fault‑tolerant serving layer.

**Task (T)**  
I needed to spin up TensorFlow Serving inside Docker on AWS, integrate with TFX for continuous delivery, and guarantee 99.9 % latency SLA while keeping costs < $3k/month.

**Action (A)**  

| Step | Design & Services |
|------|-------------------|
| **Container registry** | Push image to **Amazon ECR**; use IAM roles for secure pull. |
| **Orchestration** | Deploy on **ECS Fargate** (managed, no EC2). Use **Service Auto Scaling** with CloudWatch metrics (`CPUUtilization`, `RequestCount`). |
| **Model storage** | Keep model artifacts in **S3**; TFX’s `ModelResolver` pulls latest checkpoint at deployment. |
| **Observability** | Stream logs to **CloudWatch Logs**, metrics to **CloudWatch Metrics**; set up alarms for latency > 200 ms. |
| **Security & cost** | Use **Fargate Spot** for 30 % of traffic, reserved capacity for peak hours; total spend $2.7k/month. |
| **CI/CD** | GitHub Actions → build Docker → push to ECR → ECS deployment via Terraform; rollback on health‑check failure. |

**Result (R)**  
- Latency dropped from 350 ms to 120 ms (≈ 65 % improvement).  
- Uptime hit 99.97 %.  
- Cost reduced by 15 % versus the previous EC2‑based deployment.  

---

### Leadership Principles Highlighted
* **Ownership** – I drove end‑to‑end delivery, from container build to monitoring.  
* **Dive Deep & Bias for Action** – I dissected every metric and iterated quickly on scaling rules.

### Bar‑raiser Takeaway
*Clear ownership, deep technical detail (service choices, cost reasoning), quantifiable impact, and a learning loop (CI/CD rollback) are what separates an interview answer from a passable one.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
