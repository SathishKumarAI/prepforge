---
qid: ing_8aedfa3629__aws__local
question: 'Explain: Pseudocode — On-Policy Distillation - Thinking Machines Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 472
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:39:48-05:00'
sources: []
---

**Situation & Task**  
I was tasked to prototype an *On‑Policy Distillation* pipeline for a research lab that wanted to compress a high‑capacity policy network into a lightweight student model while preserving on‑policy performance. The goal was to reduce inference latency by 70 % and memory usage by 60 % without dropping the agent’s success rate below 95 %.

**Action (Technical Design)**  
1. **Collect Rollouts** – Using Amazon SageMaker Pipelines, I built a data‑capture job that runs the teacher policy in an EC2 *g4dn.xlarge* instance and streams state–action pairs to S3 with Kinesis Data Streams for low‑latency ingestion.  
2. **Distillation Loss** – Implemented a custom TensorFlow loss function (KL divergence + entropy regularizer) in a SageMaker training job on a *p3.8xlarge* GPU, leveraging Horovod for distributed training across 4 workers.  
3. **Model Serving** – Deployed the distilled student to Amazon SageMaker Neo for compilation to an edge‑optimized TensorRT runtime, then exposed it via an API Gateway + Lambda endpoint (serverless inference) with autoscaling on CloudWatch metrics.

**Result**  
- Latency dropped from 120 ms → 35 ms (72 % reduction).  
- Memory footprint decreased from 2.4 GB → 0.9 GB (63 %).  
- Policy success rate remained at 97 %.  
The pipeline now runs continuously, auto‑refreshing the student model every 24 h with minimal human intervention.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Delivered a faster, cheaper inference service that directly benefits end users.  
- **Ownership & Dive Deep** – Took full responsibility for the data pipeline, loss design, and deployment, iterating on failures (e.g., initial KL mismatch) to reach production quality.

*Bar‑raiser takeaway:* I demonstrated deep technical ownership, quantified impact, and a learning loop that turned an experimental idea into a repeatable, cost‑effective solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
