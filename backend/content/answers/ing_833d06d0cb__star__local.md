---
qid: ing_833d06d0cb__star__local
question: 'Explain: Horizontal Scaling (Scale Out) — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 329
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:55:51-05:00'
sources: []
---

**Situation** – At my last company we built a recommendation engine that served millions of users daily. During the holiday season traffic spiked by 250 % and our single‑node inference cluster started throttling, with latency creeping from 45 ms to over 200 ms.

**Task** – I was tasked with keeping response times under 80 ms while handling the surge without rewriting the model or adding costly hardware. The goal was to design a horizontally scalable system that could elastically add capacity in minutes.

**Action** – I implemented a stateless inference microservice behind a load balancer (NGINX) and containerized it with Docker. Using Kubernetes, I defined an HPA (Horizontal Pod Autoscaler) that watched CPU usage and scaled pods from 2 to 12 within seconds. To reduce inter‑pod communication overhead, I cached model weights in Redis across nodes so each pod loaded the same pre‑trained tensors locally. I also set up Prometheus metrics and Grafana dashboards for real‑time monitoring.

**Result** – During peak traffic we achieved a steady 70 ms latency with zero request drops, even at 400 % load. The system cost only ~15 % more than the original single node, and the autoscaling logic has been reused for other services. I learned that true scalability often comes from stateless design, smart caching, and automated resource management rather than brute‑force hardware upgrades.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
