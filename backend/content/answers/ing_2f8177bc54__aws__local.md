---
qid: ing_2f8177bc54__aws__local
question: 'Explain: Distributed Computing — Must Know System Design Building Blocks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 429
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:12:55-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
When my team built a recommendation engine for a global e‑commerce platform, the latency hit 250 ms on peak traffic, causing a 3 % drop in conversion rates. I owned the problem and scoped a distributed solution that would keep response <100 ms even under 1M concurrent users.

**Action (Dive Deep & Ownership)**  
I re‑architected the inference pipeline using **Amazon SageMaker Endpoint + Auto Scaling**, sharded the model across multiple EC2 G4 instances, and introduced **AWS Step Functions** for orchestration. To reduce data movement, I pre‑computed embeddings in a **Kinesis Data Firehose → S3** lake and served them via **DynamoDB Global Tables** with low‑latency reads.  
For fault tolerance, each inference worker ran behind an **Elastic Load Balancer (ALB)** with health checks; if a node failed, traffic automatically shifted to healthy replicas. I also added **CloudWatch Alarms** for CPU/Memory and a Lambda cleanup job that removed stale embeddings, keeping storage costs <15 % of the baseline.

**Result (Deliver Results)**  
Latency dropped from 250 ms to **78 ms** (≈69 % improvement). Conversion rates rebounded by **3.2 %**, translating to an additional $1.8M annual revenue. Operational cost decreased by **12 %** due to auto‑scaling and spot instance usage.

**Bar‑raiser takeaways**  
- Demonstrated end‑to‑end ownership from problem definition to deployment.  
- Dived deep into trade‑offs: choosing G4 over P3 for GPU/price, using DynamoDB for sub‑10 ms reads vs. RDS.  
- Quantified impact with clear metrics and showed continuous learning by iterating on the architecture after real‑world feedback.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
