---
qid: ing_bdf4470016__star__local
question: 'Explain: Self-Hosting with Kubernetes & Helm (for Scalable Deployments)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 344
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:50:46-05:00'
sources: []
---

**Situation:**  
At my previous company we had a recommendation engine that was hosted on a single cloud VM. By the end of Q2, traffic surged 4× during holiday sales, causing latency to climb from 120 ms to over 600 ms and increasing error rates by 15%.

**Task:**  
I needed to move the model to a self‑hosted, horizontally scalable environment so we could auto‑scale with demand while keeping cost under $5k/month.

**Action:**  
I built a Docker image of the inference service (Python/Flask + ONNX runtime), then defined a Helm chart with a Deployment (replicas: 3, autoscaler min=2 max=10, HPA based on CPU >70%) and Service exposing port 5000. I used Kubernetes Ingress‑NGINX for TLS termination and rate limiting. To keep storage local yet durable, I attached an EBS volume via PersistentVolumeClaim and mounted it to the pod. I scripted Helm releases with `helm upgrade --install` in CI/CD, added liveness/readiness probes, and set up Prometheus alerts on request latency.

**Result:**  
After rollout, average latency dropped to 90 ms, error rates fell below 0.5%, and we handled a 10× traffic spike during the next sale without outages. Costs stayed under budget because autoscaling kept idle replicas minimal. I learned how Helm simplifies repeatable deployments and that careful probe configuration is critical for robust AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
