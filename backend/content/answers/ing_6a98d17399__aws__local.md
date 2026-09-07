---
qid: ing_6a98d17399__aws__local
question: 'Explain: An enterprise customer reports that responses from your deployed
  system have gotten slow. Walk me through the diagnosis.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 509
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:25:29-05:00'
sources: []
---

**Situation & Task (Customer Obsession, Ownership)**  
An enterprise client’s AI inference service was lagging: latency rose from **120 ms to ~650 ms** during peak hours. My goal: restore <200 ms SLA and prevent recurrence.

**Action – Dive Deep + Bias for Action**

| Step | What I did | AWS Services |
|------|------------|--------------|
| 1️⃣ **Collect telemetry** | Pulled CloudWatch metrics, X-Ray traces, and SQS queue depth. Identified a spike in *model‑warm‑up* time after deployment. | CloudWatch, X-Ray |
| 2️⃣ **Profile the inference container** | Used `docker stats` + `cAdvisor` to see CPU/Memory contention; found 80 % CPU on GPU nodes during load. | ECS/EKS, NVIDIA Docker |
| 3️⃣ **Analyze model size & batch size** | Model grew from 200 MB to 550 MB post‑update. Batch size was set to 1, causing underutilization of GPUs. | SageMaker Endpoint, ECR |
| 4️⃣ **Implement autoscaling + batching** | Enabled *SageMaker Real‑Time Inference* with GPU auto‑scaling and a batch window of 32 requests. | SageMaker, Application Load Balancer |
| 5️⃣ **Cost/availability trade‑off** | Added 2 GPU instances (p3.8xlarge) during peak; cost up by 12 % but achieved <180 ms latency with 99.9 % uptime. | EC2 Spot + On‑Demand |

**Result – Deliver Results**

- Latency dropped to **145 ms average**, meeting SLA.
- Throughput increased from **1,200 RPS to 3,800 RPS** (300 % lift).
- Cost impact: $0.02/instance‑hour increase, offset by higher customer retention value.

**Learnings**

- Keep model size & batch strategy in sync with scaling policies.
- Use X-Ray for fine‑grained latency buckets; early alerts can prevent SLA drift.

*Bar‑raiser check*: I owned the issue from detection to resolution, dove deep into metrics, quantified impact, and documented a runbook for future incidents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
