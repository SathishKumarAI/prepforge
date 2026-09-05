---
qid: ing_ee0b6bab1f__star__local
question: 'Explain: Decision Framework: Engine per Workload — Serving Infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 352
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:24:44-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a new recommendation service that needed to handle both real‑time user requests and batch personalization jobs. The existing monolithic inference engine was fine for the low‑latency serving tier but struggled with the compute‑heavy batch pipelines, causing SLA breaches during peak hours.

**Task:**  
I had to design an infrastructure strategy that separated workloads by their performance profiles while keeping operational complexity manageable.

**Action:**  
I introduced a “decision framework: Engine per Workload” by first profiling each workload’s latency, throughput, and resource usage. For the low‑latency service I deployed a lightweight TorchServe cluster on GPU‑optimized nodes with a custom caching layer (Redis) to reduce cold starts. For batch jobs I set up an Apache Spark cluster that leveraged CPU‑intensive inference using ONNX Runtime, scaling out horizontally during nightly windows. I built a shared model registry in S3 and automated CI/CD pipelines to push new weights to both engines via Lambda triggers. Monitoring was unified through Prometheus dashboards, with alerts for cross‑engine SLA drift.

**Result:**  
Latency for real‑time requests dropped from 350 ms to under 80 ms (95th percentile), while batch throughput increased by 4×, reducing nightly processing time from 12 hrs to 3 hrs. Overall cost savings of ~25% were achieved due to better resource matching. I learned that aligning engine choice with workload characteristics can dramatically improve performance and scalability without over‑engineering a single solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
