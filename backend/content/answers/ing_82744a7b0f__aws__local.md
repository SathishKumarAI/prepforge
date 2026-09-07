---
qid: ing_82744a7b0f__aws__local
question: 'Explain: Before the Interview — Common Pitfalls'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 347
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:20:01-05:00'
sources: []
---

**Before the Interview – Common Pitfalls in AI Projects**

*Leadership Principles:* **Ownership**, **Dive Deep**  
*Scenario (S)*: I was leading a fraud‑detection model at a fintech startup that integrated AWS SageMaker and DynamoDB.  
*Task (T)*: Deploy the model into production while ensuring GDPR compliance and 99.9 % uptime.  
*Action (A)*:  
1. **Audit data lineage** – used Glue to catalog raw logs, then added KMS‑encrypted column‑level tags for privacy.  
2. **Model drift monitoring** – set up CloudWatch metrics on prediction confidence; triggered Lambda to retrain every 48 h using SageMaker Pipelines.  
3. **Canary releases** – leveraged CodeDeploy with a weighted traffic shift (5% → 25%) and automated rollback if latency > 200 ms.  
4. **Cost guardrails** – applied Savings Plans for SageMaker training, reserved RDS instances for inference caching, and used Spot Instances for batch scoring.

*Result (R)*: Reduced false‑positive fraud alerts by **32 %**, cut monthly inference costs from $12K to $7.5K, and achieved 99.95 % service availability during the first three months.  
**Bar‑raiser focus:** Did I own every step? Did I dive deep into data privacy and cost? Was impact quantified? And did I learn that early canary testing saves both money and trust?

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
