---
qid: ing_b8fc155897__aws__local
question: How do Bagging and Boosting get N learners?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 436
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:22:18-05:00'
sources: []
---

**Situation & Task**  
While architecting a recommendation engine for a media streaming platform, the team needed to reduce model variance and bias while staying within our $2 M quarterly ML budget.

**Action – Technical Design**  
*Bagging*: I leveraged **Amazon SageMaker’s built‑in “Training Job” API** with *Distributed Data Parallel* across 10 EC2 p3.8xlarge nodes. Each node trained an identical model on a bootstrap sample (70% of the data) and stored its checkpoint in S3. We then used **SageMaker Endpoint** to aggregate predictions via majority vote, ensuring high availability (multi‑AZ deployment).  
*Boosting*: For bias reduction I implemented **XGBoost on EMR**, launching 5 Spark workers (m5.4xlarge). Each worker trained a weak learner sequentially; the final model was exported to SageMaker for inference. The pipeline stored intermediate models in DynamoDB, enabling rollback if a boost step degraded performance.

**Result**  
- Bagging reduced test‑set variance by **32%**, boosting improved AUC from 0.78 to **0.84** (a 7 pp lift).  
- Total compute cost fell 18% versus a single large model, and inference latency stayed <50 ms per request.  

**Reflection & Learning**  
I owned the end‑to‑end flow, dug into Spark shuffle patterns to eliminate bottlenecks, and iterated on hyperparameters using SageMaker Experiments. The bar‑raiser will note my ownership of cost control, depth in distributed training, quantifiable impact, and lessons learned from a failed first boost attempt (overfitting), which guided the final design.  

> **Leadership Principles**: *Ownership*, *Dive Deep*, *Deliver Results*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
