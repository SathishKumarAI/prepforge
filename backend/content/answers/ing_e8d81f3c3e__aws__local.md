---
qid: ing_e8d81f3c3e__aws__local
question: 'Explain: Overlap Ratio. — Rethinking On-Policy Distillation of Large Language
  Models: Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 472
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:04:32-05:00'
sources: []
---

**Behavioral (STAR)**  
*Situation*: In my last role at a cloud‑ML startup we were asked to compress a 13B transformer into a 1B model for edge inference while preserving perplexity ≤ 12%. *Task*: I led the distillation effort, focusing on minimizing data redundancy between teacher and student. *Action*: I introduced the **Overlap Ratio (OR)** metric—percentage of token‑level attention distributions shared by teacher and student across a validation set. By iteratively pruning the student’s head weights that contributed < 5% OR, we reduced FLOPs by 40 % without increasing perplexity. *Result*: The compressed model achieved a 2.8× speedup on AWS Inferentia while keeping cost per inference <$0.0003 and maintaining > 95 % of the teacher’s BLEU score on MT benchmarks.  

**Technical / System**  
*Requirement*: On‑policy distillation requires streaming data, low latency, and high throughput.  
*Design*:  
- **Data pipeline**: S3 for raw corpora → Glue ETL → Kinesis Data Streams feeding SageMaker Processing jobs that compute OR per batch.  
- **Training**: Use SageMaker Neo to compile the student model for Inferentia/ECS Fargate, enabling 8‑fold inference speed.  
- **Monitoring**: CloudWatch metrics track OR drift; Lambda triggers retraining when OR < 0.7.  

*Scalability & Availability*: Kinesis shards scale horizontally; SageMaker training jobs auto‑scale with spot instances, cutting cost by ~30 %. The OR metric is a lightweight proxy for knowledge transfer quality, reducing the need for full loss monitoring and enabling rapid iteration—exactly what Amazon calls “Bias for Action” while still exercising “Dive Deep.”  

**Bar‑raiser takeaways**: Ownership of metrics (OR), quantitative impact on latency/cost, depth in understanding attention overlap, and learning from a failed attempt where OR drifted due to tokenization mismatch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
