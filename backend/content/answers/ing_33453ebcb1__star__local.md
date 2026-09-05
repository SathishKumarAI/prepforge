---
qid: ing_33453ebcb1__star__local
question: What is Cluster capacity? — Serverscluster
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 327
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:11:06-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a real‑time recommendation engine that served millions of users per day. The model training pipeline ran on a Kubernetes cluster with 12 GPU nodes, but after a spike in traffic our batch jobs started queueing and latency jumped from 200 ms to over 1 s.

**Task:**  
I was asked to determine the true “cluster capacity” – the maximum throughput the cluster could sustain without exceeding SLA limits – and then scale it efficiently.

**Action:**  
First, I instrumented each pod with Prometheus metrics (GPU utilization, memory usage, queue depth). Using a custom script I generated synthetic load that ramped up batch size while recording the point where GPU saturation hit 90 % and latency exceeded 500 ms. This gave me an empirical capacity curve. Next, I applied horizontal pod autoscaling rules tied to those metrics and added spot instances for bursty workloads. Finally, I set up a nightly “stress‑test” job that automatically recalculated capacity every week.

**Result:**  
The cluster’s effective throughput increased from 3 k requests/s to 7.5 k requests/s, keeping latency under 300 ms even during peak hours. The cost per inference dropped by 18% due to better utilization of spot GPUs. I learned that capacity isn’t just a static number; it must be measured under realistic load and continuously monitored as traffic patterns evolve.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
