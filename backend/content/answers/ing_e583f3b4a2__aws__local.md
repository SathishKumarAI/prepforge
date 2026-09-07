---
qid: ing_e583f3b4a2__aws__local
question: What is over-refusal, and how do you manage the helpfulness-vs-safety tension?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 479
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:57:02-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Question:** What is over‑refusal, and how do you manage the helpfulness‑vs‑safety tension?  

**Situation / Task** – While launching a conversational AI for a public‑facing customer service bot, we observed *over‑refusal*: the model denied 23 % of user requests that were actually safe but flagged as risky by our safety policy. This hurt NPS (down 4 points) and increased support tickets.

**Action** –  
1. **Ownership + Dive Deep:** Built a telemetry pipeline in **Amazon CloudWatch** + **S3** to capture refusal logs, request context, and user sentiment.  
2. Fine‑tuned the safety classifier using **SageMaker Ground Truth** with human‑in‑the‑loop reviews; added a *confidence threshold* tuned via A/B testing (AWS Lambda orchestrates experiments).  
3. Implemented a *two‑stage response*: first a lightweight rule‑based filter (**Amazon API Gateway + DynamoDB**) to catch obvious violations, then the model for nuanced cases, allowing rollback if confidence < 0.7.  
4. Introduced **Reinforcement Learning from Human Feedback (RLHF)** on top of the base policy, rewarding helpful safe responses and penalizing false positives.

**Result** – Over‑refusal dropped to 8 % while maintaining a safety hit‑rate > 99.5 %. NPS rose by 6 points, and support tickets fell 30 %. Costs increased by only 12 % due to the lightweight rule layer.  

**Bar‑raiser takeaways:**  
- **Ownership:** Took end‑to‑end responsibility for metrics & remediation.  
- **Dive Deep:** Leveraged detailed telemetry to uncover root cause.  
- **Quantified Impact:** Delivered clear KPI improvements.  
- **Learning from Failure:** Used RLHF to turn over‑refusal into a learning signal, not just a rule fix.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
