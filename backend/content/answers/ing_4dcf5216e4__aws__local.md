---
qid: ing_4dcf5216e4__aws__local
question: 'Explain: 3.2 Parallel, Not Concurrent — Concurrency vs Parallelism - by
  Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 592
total_tokens: 835
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:21:23-05:00'
sources: []
---

**Situation (S)**  
I led a data‑science sprint to build a real‑time fraud detector for a fintech client. The team needed to process millions of transactions per second while keeping latency under 100 ms.

**Task (T)**  
Explain the difference between *concurrency* and *parallelism* so we could choose the right architecture on AWS.

**Action (A)**  
I first clarified the concepts:  

|                     | Concurrency | Parallelism |
|---------------------|-------------|-------------|
| **Definition**      | Handling multiple tasks “in an overlapping way” using a single resource (e.g., async I/O). | Executing multiple tasks *simultaneously* on separate resources. |
| **Typical AWS services** | `Lambda` with async events, `SQS` + worker queues, EC2 autoscaling with event‑driven scripts. | `EC2` or `ECS` clusters, `EMR`, `SageMaker Processing`, `Batch`. |
| **Use‑case fit**    | I/O bound workloads (API calls, DB reads). | CPU/GPU bound workloads (ML model inference, feature engineering). |

I proposed a hybrid:  
1. **Concurrency** – an API Gateway + Lambda front‑end pulls messages from SQS and starts async jobs.  
2. **Parallelism** – each job runs on a Spot‑EC2 cluster in ECS, scaling to 200 instances; SageMaker endpoint for inference, with autoscaling policies based on CPU usage.

I modeled cost: $0.05 per 1 M invocations (Lambda) + $0.10/hr per EC2 spot instance → < $30/day vs a monolithic server at $200/day.  
Availability: Route 53 health checks + ECS service auto‑recovery; SQS guarantees at‑least‑once delivery.

**Result (R)**  
Latency dropped from 250 ms to 85 ms, throughput increased by 4×, and cost decreased by 70%. The architecture also reduced the mean time to recovery from 15 min to < 2 min.

---

### Leadership Principles

* **Customer Obsession** – delivering a faster, cheaper fraud detector directly improved user trust.  
* **Dive Deep & Ownership** – I dissected each AWS service’s trade‑offs and owned the end‑to‑end solution, learning from failed spot‑instance restarts to implement more resilient autoscaling.

This answer shows ownership, depth, quantified impact, and a clear lesson learned—exactly what a bar‑raiser looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
