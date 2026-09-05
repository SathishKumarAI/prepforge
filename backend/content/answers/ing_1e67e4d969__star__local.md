---
qid: ing_1e67e4d969__star__local
question: 'Explain: IX. Disposability — The 12-Factor App'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 354
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:30:28-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a recommendation engine as a micro‑service on Kubernetes. The model was updated nightly from new training data, but each deployment kept the old container image alive for hours while traffic shifted, causing stale predictions and wasted memory.

**Task:**  
I needed to make the service disposable: spin up a fresh instance with the latest model, route traffic instantly, then clean up the previous instance without affecting user experience or incurring extra cost.

**Action:**  
I refactored the deployment pipeline to follow the 12‑Factor App “disposability” principle. First, I containerized the inference code and stored only environment variables for data paths. In CI/CD, each build pushed a new image tag; Helm released it with a rolling update that terminated old pods immediately after the new pod’s readiness probe passed. I added a sidecar that streamed model weights from S3 on start‑up, so the container didn’t keep large binaries in its layer. Finally, I set `KUBERNETES_PODS_TERMINATION_GRACE_PERIOD_SECONDS` to 0 for instant kill and enabled automatic horizontal pod autoscaling based on CPU.

**Result:**  
Deployments now complete in under two minutes, with zero downtime and a 35 % reduction in memory usage per instance. The service scales cost‑efficiently and I can iterate model updates daily without resource leaks or manual cleanup.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
