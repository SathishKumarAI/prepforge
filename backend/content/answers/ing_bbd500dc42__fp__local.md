---
qid: ing_bbd500dc42__fp__local
question: 'Explain: And so discs are not the most — Building Software Systems At Google
  and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 423
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:43:24-05:00'
sources: []
---

**Why “disks are not the most important thing” matters for building large‑scale ML systems**

At the core of every production ML pipeline is *data*. The fundamental problem is to move that data through a sequence of transformations—cleaning, feature extraction, model inference, and feedback loops—in as little time as possible while keeping the system robust. In this setting, the *speed* at which we can read or write data becomes a bottleneck only if it prevents us from making progress on the actual modeling task.

Google’s experience shows that disks (whether SSDs or HDDs) are *not* the limiting factor for most ML workloads. Instead:

1. **Compute and network bandwidth** dominate when models involve millions of parameters or when inference must be served to thousands of requests per second.
2. **Concurrency control**—how many workers can access a dataset simultaneously—is more critical than raw disk throughput, because contention turns a fast disk into a serial bottleneck.
3. **Consistency guarantees** (e.g., eventual vs. strict) matter more for training data pipelines than for storage hardware.

This observation stems from the *law of diminishing returns*: once disk I/O is already faster than the compute step, investing in even faster storage yields negligible gains. The deeper principle here is that a system’s performance is governed by its *weakest link*, which is rarely the storage medium in modern data centers.

**Non‑obvious insight:**  
Many practitioners assume that upgrading to NVMe or a higher‑bandwidth file system will accelerate training pipelines. In reality, the real gains come from *reducing contention*—by sharding data across more nodes or by redesigning the ingestion pipeline to be lock‑free—because these changes break the implicit serialization that turns fast disks into a bottleneck.

In short, Google’s lesson is: focus on parallelism and efficient data partitioning; disks will automatically keep up.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
