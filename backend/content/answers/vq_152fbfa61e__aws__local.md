---
qid: vq_152fbfa61e__aws__local
question: Q16- How is a decision tree pruned?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 451
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:40:11-05:00'
sources: []
---

**Answer (Amazon‑style)**  

**Situation & Task**  
At my previous role I was tasked to deploy an on‑prem customer churn model that kept growing in depth and overfitting our 1 M record training set. The model’s inference latency hit 200 ms per request, exceeding the SLA of 50 ms. I owned the solution and had to prune the tree while keeping accuracy.

**Action (Dive Deep + Bias for Action)**  
1. **Quantify impact:** I ran a *cost‑benefit* analysis: each leaf node added ~10 µs latency; pruning 90 nodes cut latency by 0.9 ms per inference but risked a 1–2 % drop in F1.  
2. **Pruning strategy:** I implemented *post‑pruning (cost‑complexity)*, calculating the *α* parameter that balances tree complexity against misclassification cost.  
3. **AWS tooling:**  
   - **Amazon SageMaker** for training and evaluation.  
   - **SageMaker Feature Store** to cache leaf statistics.  
   - **AWS Lambda** to trigger a nightly pruning job using the *scikit‑learn* `CostComplexityPruningPath`.  
4. **Automation & monitoring:** I added CloudWatch metrics (latency, F1) and set an alarm if accuracy dropped >0.5 %. The Lambda function automatically rolled back to the previous tree snapshot stored in S3.

**Result (Deliver Results)**  
After pruning 85% of nodes:  
- Latency fell from **200 ms → 55 ms** (≈70 % improvement).  
- Accuracy loss was only **0.4 %** in F1, within SLA tolerance.  
- Cost savings: reduced EC2 inference usage by ~30 %, cutting monthly spend to $3K.

**Bar‑raiser notes** – I demonstrated full ownership, deep technical dive into pruning theory, quantified performance gains, and built a resilient rollback path for learning from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
