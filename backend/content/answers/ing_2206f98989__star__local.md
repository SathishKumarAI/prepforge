---
qid: ing_2206f98989__star__local
question: 'Explain: Scaling & ops — Text To Sql Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 400
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:37:29-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we had built a prototype that converted natural‑language queries into SQL for our data lake. The beta test group hit 1,200 concurrent users during a quarterly report period, and the single‑instance model was timing out on complex joins, dropping latency from ~300 ms to >5 s.

**Task** – I needed to scale the Text‑to‑SQL agent so it could handle peak loads while keeping cost per query under $0.02 and maintaining 99.9% uptime.

**Action** – First, I refactored the inference pipeline into a microservice architecture using Docker containers orchestrated by Kubernetes with horizontal pod autoscaling based on CPU and request queue length. I added a lightweight caching layer (Redis) keyed on parsed query intent to avoid re‑parsing identical requests. For ops, I instrumented Prometheus metrics (latency, error rate, GPU usage) and set up Grafana alerts that triggered auto‑scale events. To reduce model size, I distilled the original 12B transformer into a 3B version with knowledge distillation, cutting inference time by 40% without significant accuracy loss. Finally, I implemented CI/CD pipelines (GitHub Actions → Helm charts) to roll out zero‑downtime updates.

**Result** – After deployment, peak latency dropped from >5 s to <350 ms, and the system sustained 3,500 concurrent users with a 0.12% error rate. Cost per query fell to $0.015, and we avoided any downtime during the reporting period. I learned that combining model optimization, container orchestration, and real‑time observability is key for scaling AI services in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
