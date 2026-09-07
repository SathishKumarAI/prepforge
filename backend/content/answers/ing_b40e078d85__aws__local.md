---
qid: ing_b40e078d85__aws__local
question: Why doesn't my program run faster with more CPUs?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 414
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:11:55-05:00'
sources: []
---

**Customer Obsession | Ownership**

> **Situation:** I was optimizing a batch inference pipeline for a recommendation engine that processed 1 M user‑segments daily. Adding more EC2 c5.9xlarge instances seemed like the obvious fix, but performance plateaued after four CPUs.

> **Task:** Demonstrate why CPU count alone doesn’t guarantee speed and redesign the workload to hit our SLA of <30 s per batch while keeping costs under $200/day.

> **Action:**  
> 1. *Dive Deep* into the code: profiling revealed the bottleneck was a single‑threaded data‑loading routine that spent >70 % time in I/O, not CPU crunching.  
> 2. Re‑architected using **Amazon EMR** with PySpark to parallelize ETL across executors and leveraged **S3 Select** for partial reads, cutting I/O from 12 GB to 4 GB per run.  
> 3. Offloaded the model inference to a **TensorFlow Serving** container on **AWS Fargate**, auto‑scaling based on CPU utilization and batching predictions in micro‑batches of 512.  
> 4. Implemented **CloudWatch metrics** to continuously monitor throughput, latency, and cost.

> **Result:** Execution time dropped from 45 s (single CPU) to 18 s (cluster) with a 30 % reduction in EC2 spend. The solution scaled linearly up to 32 nodes without new bottlenecks, proving that *CPU count* is only part of the equation—data movement and I/O are often the true limits.

> **Learning:** Always profile first; optimizing for CPU can backfire if you ignore I/O or data sharding. This approach now guides all my future ML pipeline optimizations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
