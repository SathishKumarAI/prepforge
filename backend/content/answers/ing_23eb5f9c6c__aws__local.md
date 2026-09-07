---
qid: ing_23eb5f9c6c__aws__local
question: 'Explain: F7: Judge model deprecation — Eval Gated Cicd'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 520
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:47:56-05:00'
sources: []
---

**Situation & Task**  
At a fintech startup I was responsible for the production‑grade lifecycle of our credit‑risk ML models. When a new model version underperformed in A/B tests, we needed a *model deprecation* workflow that would automatically flag and roll back the older model without manual intervention—an “Eval‑Gated CI/CD” pipeline.

**Action (Design)**  
1. **Model Registry + Versioning** – Store every model artifact in S3 with a tag (`prod`, `staging`).  
2. **Automated Evaluation** – A SageMaker Processing job pulls the candidate model, runs it on a held‑out test set, and writes performance metrics to DynamoDB.  
3. **Gate Logic** – An AWS Step Functions state machine queries DynamoDB; if key metrics (AUC, F1) fall below a threshold, the gate fails.  
4. **CI/CD Integration** – CodePipeline triggers on new model commits, invokes the Step Function, and only upon success deploys to SageMaker Endpoint via CloudWatch alarms that monitor latency/throughput.  
5. **Rollback & Alerting** – On failure, Lambda restores the previous endpoint version and sends a Slack/SNS alert.

**Result**  
- Deployed 12 model updates in 3 months with zero production outages.  
- Reduced manual rollback time from ~2 hrs to <10 min (70% faster).  
- Cut infra cost by 15% by eliminating idle staging endpoints.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Ensured every deployment met strict performance thresholds, protecting end‑user risk scores.  
- **Ownership & Dive Deep** – Designed a self‑healing pipeline that required no manual gatekeeping; continuously monitored and tuned metrics.

**Bar‑raiser cues**  
- Ownership: Owned the full lifecycle from training to rollback.  
- Dive deep: Leveraged SageMaker Processing + DynamoDB for precise metric capture.  
- Quantified impact: 70% faster rollback, 15% cost savings.  
- Learning from failure: After an initial false‑positive gate, we refined the evaluation dataset, reducing noise by 25%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
