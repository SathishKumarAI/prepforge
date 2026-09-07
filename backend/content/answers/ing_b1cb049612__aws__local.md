---
qid: ing_b1cb049612__aws__local
question: 'Explain: You''re running an A/B test on a new model. Walk me through designing
  it, and tell me what you''d refuse to do once it''s live.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 407
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:06:59-05:00'
sources: []
---

**Situation & Task**  
I was tasked to validate a new recommendation engine against the current baseline (Model A) for our e‑commerce platform. The goal: improve click‑through rate (CTR) by ≥5% while keeping latency ≤150 ms.

**Action – Design**  
1. **Feature flag + traffic routing** – Use *AWS AppConfig* to split 10 % of users to Model B, the rest stay on Model A.  
2. **Data collection** – Stream user interactions via *Amazon Kinesis Data Streams* into *Glue* jobs that aggregate CTR per cohort every hour.  
3. **Statistical testing** – Run a Bayesian A/B test in *AWS SageMaker* with a pre‑set 95% confidence threshold.  
4. **Automated rollback** – If Model B falls below the baseline by >2%, an SNS alert triggers Lambda to flip the flag back.

**Result**  
After two weeks, Model B achieved a 7.3% CTR lift and maintained latency at 120 ms. Cost increased by only 4 % due to efficient use of *EC2 Spot* instances for inference.

**What I’d refuse once live**  
- **Blindly exposing all traffic**: Scaling up before statistical confidence is achieved risks revenue loss.  
- **Ignoring drift monitoring**: Without continuous evaluation (CloudWatch metrics + SageMaker Model Monitor), the model could degrade unnoticed.  

**Bar‑raiser cues** – Ownership of end‑to‑end pipeline, deep dive into latency trade‑offs, quantified ROI, and learning loop from post‑mortem if failure occurs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
