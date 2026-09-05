---
qid: ing_27c2781d50__star__local
question: 'Explain: Storage volume types — Filestorages'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 341
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:47:54-05:00'
sources: []
---

**Situation**  
During a data‑science sprint for an e‑commerce recommendation engine, the team had to ingest terabytes of raw clickstream logs and keep them accessible for both batch training and real‑time inference pipelines running on Kubernetes.

**Task**  
I was tasked with designing a scalable, low‑latency file storage layer that could serve thousands of concurrent jobs while keeping costs under our $15K/month budget.

**Action**  
I evaluated AWS EFS, FSx for Lustre, and S3 with the S3 Select feature. After profiling read/write patterns, I chose Amazon FSx for Lustre because it offered POSIX‑compatible NFS access, sub‑millisecond latency, and native integration with EMR and SageMaker. I attached a 10 TiB Lustre volume to our EKS cluster, set up automatic tiering to S3 for archival, and implemented lifecycle policies that moved inactive files to cheaper S3 Glacier Deep Archive after 90 days. To keep costs in check, I used on‑demand capacity mode with burst credit limits and monitored usage with CloudWatch metrics.

**Result**  
The training jobs completed 30% faster, and inference latency dropped from 120 ms to 45 ms per request. Storage spend stayed within budget, and the data pipeline became fully automated. This experience taught me how to match file‑system characteristics—throughput, POSIX compliance, and cost—to specific ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
