---
qid: ing_26920d549c__star__local
question: 'Explain: AI-native and infrastructure — Company Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 327
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:45:50-05:00'
sources: []
---

**Situation:**  
At my last startup we were building a real‑time recommendation engine for a streaming service. Our traffic spiked during live events, so the existing on‑premise GPU cluster started throttling latency from 120 ms to over 500 ms, pushing churn up by 3%.

**Task:**  
I had to redesign our AI pipeline so it could scale elastically while keeping inference cost below $0.02 per request and latency under 200 ms during peak traffic.

**Action:**  
First I migrated the model training from local Jupyter notebooks to a managed MLflow registry on AWS SageMaker, enabling versioning and reproducibility. For inference, I containerized the TorchScript model with Docker and deployed it on Kubernetes using NVIDIA GPU nodes, but added an autoscaling layer that spun up additional pods when CPU usage exceeded 70 %. To reduce cold‑start time, I pre‑warm a “warm pool” of containers during low‑traffic windows. Finally, I set up Prometheus + Grafana dashboards to monitor latency and cost per inference in real time.

**Result:**  
After the rollout, peak latency dropped to 140 ms and the cost per request fell from $0.05 to $0.018. User engagement during live events increased by 12%, and we eliminated churn spikes entirely. I learned that treating AI as a first‑class infrastructure component—managed training, containerized deployment, autoscaling, and observability—is key to scaling responsibly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
