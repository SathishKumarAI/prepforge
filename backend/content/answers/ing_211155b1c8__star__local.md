---
qid: ing_211155b1c8__star__local
question: 'Explain: Redundancy — A Cheat Sheet for Designing Fault-Tolerant Systems'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 341
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:35:46-05:00'
sources: []
---

**Situation:**  
In my last role as a data‑science lead, we were deploying an online recommendation engine for a subscription media platform that handled 12 M requests per day. A single point of failure in the inference microservice caused a 4 % drop in user engagement during peak hours.

**Task:**  
I had to design and implement a fault‑tolerant system that guaranteed 99.9 % uptime while keeping latency under 200 ms, all within our $1M quarterly budget.

**Action:**  
First, I introduced *redundancy* at three layers: (1) **model replicas**—we spun up two identical TensorFlow Serving instances behind a Kubernetes StatefulSet with anti‑affinity rules; (2) **data redundancy**—the training dataset was mirrored on an S3 bucket and a local EFS cache to avoid I/O stalls; (3) **service mesh retries**—using Istio we configured exponential back‑off retries for failed inference calls. We also added a lightweight health‑check endpoint that returned model version and latency stats, feeding into Prometheus alerts.

**Result:**  
After deployment, system uptime rose from 96 % to 99.95 %, latency stayed at ~180 ms, and we saw a 1.8 % lift in daily active users during peak periods. The exercise taught me that redundancy isn’t just about duplication—it’s about thoughtful placement, health monitoring, and graceful degradation under load.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
