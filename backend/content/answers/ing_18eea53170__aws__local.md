---
qid: ing_18eea53170__aws__local
question: 'Explain: How do you evaluate agents? Compare trajectory-based and outcome-based
  approaches.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 422
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:22:23-05:00'
sources: []
---

**Answer (Amazon Way)**  

During my last role as Lead ML Engineer at a cloud‑based SaaS firm, I was tasked to evaluate reinforcement‑learning agents that power our recommendation engine.  
- **Situation:** The product team wanted confidence that new agents would improve user engagement without sacrificing latency.  
- **Task:** Design an evaluation framework that balances *trajectory‑based* (per‑step reward) and *outcome‑based* (final metric) methods while staying cost‑effective on AWS.  

**Action:**  
1. Implemented a **two‑tier pipeline** in SageMaker Pipelines:  
   - **Simulation tier** – uses Amazon Kinesis Data Streams to replay real user sessions; agents’ step‑wise rewards are logged to DynamoDB for fine‑grained analysis (Trajectory‑Based).  
   - **Production tier** – A/B test agents on a 5 % traffic slice, measuring click‑through and revenue lift in CloudWatch metrics (Outcome‑Based).  
2. Added a *Monte‑Carlo roll‑out* module that aggregates trajectory scores into an expected return estimate, then cross‑validates against outcome results.  
3. Trained the pipeline on **Spot Instances** and leveraged **Savings Plans** to cut compute cost by 35 %.  

**Result:** The dual approach uncovered a hidden bias in one agent: while its per‑step reward was high (Trajectory), it caused a 12 % drop in revenue (Outcome). After retraining, we achieved a **+18 % lift in revenue** and maintained <200 ms latency.  

**Leadership Principles:**  
- *Ownership* – I took end‑to‑end responsibility for the evaluation pipeline.  
- *Dive Deep* – By correlating per‑step data with business KPIs, I revealed subtle failure modes that a single metric would miss.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
