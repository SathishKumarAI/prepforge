---
qid: ing_49f50f4d5b__aws__local
question: 'Explain: to keep track of the best evaluation — Coding Adventure: Chess'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 426
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:12:31-05:00'
sources: []
---

**Situation / Task**

I was leading a data‑science sprint for an internal “Coding Adventure” chess bot that needed to pick the best evaluation function from dozens of experiments. The goal was to automate selection and deployment while keeping latency under 50 ms per move.

**Action (Design & Execution)**

1. **Data capture** – Every training run logged hyper‑parameters, validation loss, Elo win rate, and resource usage into an Amazon DynamoDB table with a GSI on *Elo*.  
2. **Evaluation pipeline** – A Step Functions state machine triggered by CloudWatch Events ran each model in parallel on SageMaker endpoints (GPU instances). Results were written back to DynamoDB.  
3. **Best‑model selector** – A Lambda function queried the top 5 Elo scores, applied a weighted score (Elo × 0.7 + latency × 0.3), and updated an “active‑model” S3 object.  
4. **Deployment** – The selected model was automatically pushed to an Elastic Beanstalk container that served the chess engine API.

**Result**

- Reduced manual tuning time from 2 weeks to 3 days per cycle (80% faster).  
- Achieved a 12‑point Elo increase over the baseline while keeping inference latency at **42 ms**.  
- Cost dropped by 25 % due to auto‑scaling and spot instances.

---

### Leadership Principles Highlighted
- **Ownership** – Built end‑to‑end pipeline, owning data integrity and deployment.  
- **Dive Deep** – Designed the scoring formula after analyzing latency vs Elo trade‑offs across 30 experiments.  

**Bar‑raiser cues**

- Quantified impact (Elo lift & cost savings).  
- Demonstrated ownership of both data and infra.  
- Showed depth by explaining trade‑offs between GPU type, spot pricing, and latency constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
