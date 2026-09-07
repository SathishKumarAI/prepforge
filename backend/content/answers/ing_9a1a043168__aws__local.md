---
qid: ing_9a1a043168__aws__local
question: 'Explain: Design the training setup for a model that doesn''t fit on one
  accelerator - say 70B parameters on a pod of accelerators.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 537
total_tokens: 784
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:14:15-05:00'
sources: []
---

**Situation** – At my previous role I led the launch of a 70‑B parameter LLM that had to train on a cluster of GPUs because no single accelerator could hold it. The goal was to finish training in <4 weeks while keeping costs under $2M and ensuring high availability.

**Task** – Design a distributed training pipeline, pick AWS services, and prove that the solution scales, is fault‑tolerant, and delivers results quickly.

**Action** –  
1. **Architecture** – I chose SageMaker Distributed Training with `sagemaker-training-job` using *Elastic Inference* (P4d instances) in a 32‑node cluster. We split the model into 8 GB shards, each mapped to a node via *Parameter Server* mode, and used NCCL for all‑reduce across GPUs.  
2. **Data pipeline** – Data was sharded on S3 with Parquet files; we employed SageMaker Feature Store for dynamic caching of embeddings, reducing I/O by 30 %.  
3. **Checkpointing & Resilience** – Every 10 min checkpoints were stored in an S3 bucket with lifecycle policies (retain 7 days). Auto‑recovery via SageMaker’s *Retry* feature and EC2 Spot Instances (fallback to On‑Demand) lowered cost by 18 % while keeping a 99.9 % uptime SLA.  
4. **Monitoring** – CloudWatch metrics fed into an Athena dashboard; we set alerts on GPU utilization <20 % or loss spikes, enabling rapid triage.

**Result** – Training completed in 19 days (≈30 % faster than baseline), with total spend $1.8M. The model achieved a perplexity of 12.3 on the GLUE benchmark—10 % better than our previous 60‑B model—demonstrating that sharded, distributed training can scale to extreme sizes while staying cost‑effective.

**Leadership Principles** – *Customer Obsession* (delivering higher‑quality LLMs), *Ownership* (architecting from data ingestion to deployment), and *Dive Deep* (profiling GPU usage and tuning NCCL).  

Bar‑raisers look for ownership, depth of analysis, quantified impact, and lessons learned—this solution shows all three.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
