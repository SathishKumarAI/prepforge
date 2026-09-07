---
qid: ing_281dc84bad__aws__local
question: 'Explain: Script — Mock Interview Kit'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 379
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:56:14-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* My startup built a “Script‑Mock Interview Kit” to help candidates practice AI interviews. Early adopters complained the feedback was generic and slow.

*Task:* I owned the end‑to‑end pipeline: ingest user scripts, run real‑time NLP scoring, return actionable suggestions—all within 3 seconds for 99.9% of users.

*Action:*  
1. **Data‑driven design** – collected 12k interview transcripts; trained a BERT model on intent & sentiment.  
2. **AWS stack** – Lambda + Step Functions orchestrated the workflow, SageMaker hosted the model, DynamoDB stored user sessions, and CloudWatch monitored latency.  
3. **Scalability** – enabled Lambda provisioned concurrency (500) to keep cold‑start <50 ms; used SQS for burst traffic.  
4. **Cost control** – switched from on‑demand to spot instances for SageMaker training; set DynamoDB auto‑scaling based on 95th percentile traffic.

*Result:* Latency dropped from 12 s to 2.8 s (92% reduction), user satisfaction rose from 72 % to 94%, and monthly spend fell 35 %.  

**Bar‑raiser takeaways:**  
- Demonstrated *ownership* by driving the full stack change.  
- Showed *dive deep* through concrete metrics (latency, cost).  
- Quantified impact with real numbers.  
- Learned from failure: initial monolithic design caused bottlenecks; refactored to micro‑services and serverless for elasticity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
