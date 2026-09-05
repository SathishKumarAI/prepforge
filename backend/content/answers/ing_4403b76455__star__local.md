---
qid: ing_4403b76455__star__local
question: 'Explain: Five teams share a cluster of 64 GPUs for training and inference.
  Design the scheduling and quota system.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 343
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:45:08-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup, we had five product teams—fraud detection, credit scoring, marketing personalization, risk analytics, and customer churn—all needing access to the same 64‑GPU GPU cluster for both training large transformer models and serving inference jobs.

**Task**  
I was tasked with designing a fair yet efficient scheduling and quota system that would prevent any single team from monopolizing resources while ensuring high throughput for critical production workloads.

**Action**  
First, I implemented a Kubernetes‑based scheduler with custom resource requests. Each GPU was treated as a distinct node in the cluster. I introduced “GPU quotas” per team, derived from historical usage data and SLA priorities: fraud detection got 20 GPUs, credit scoring 15, marketing 10, risk analytics 8, and churn 11. To handle bursty inference traffic, I set up a priority queue with preemption rules—high‑priority inference jobs could temporarily steal one GPU from lower‑priority training pods, but only after notifying the owning team via Slack alerts. For fairness, I added a “GPU‑credit” system where teams earned credits for idle GPU time and spent them on short bursts of compute.

**Result**  
Within two weeks, we reduced average job wait times by 35 % and increased overall cluster utilization from 68 % to 85 %. The preemption policy kept critical inference latencies below 200 ms during peak hours. I learned that combining quota enforcement with a lightweight credit system can balance fairness and agility in multi‑tenant GPU environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
