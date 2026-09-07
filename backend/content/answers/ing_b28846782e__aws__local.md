---
qid: ing_b28846782e__aws__local
question: 'Explain: F4: Bad training data poisons the adapter'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 391
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:08:24-05:00'
sources: []
---

**Answer (Amazon style)**  

*Situation:* While building a recommendation engine for a global e‑commerce platform, we noticed that the model’s precision dropped from **92 % to 75 %** after an update.  
*Task:* Investigate the cause and design a robust training pipeline that protects the adapter layer from poisoned data.  
*Action:*  

1. **Dive Deep into Data Quality** – I added a *data‑validation microservice* (AWS Lambda + Step Functions) to run schema checks, outlier detection, and label consistency tests on every incoming batch.  
2. **Implement Poison‑Shielding** – Using AWS SageMaker Ground Truth, we introduced *human‑in‑the‑loop* labeling for 10 % of each batch; the rest was automatically filtered by a Bayesian anomaly detector (Amazon Kinesis Data Analytics).  
3. **Versioned Adapter Storage** – The adapter weights were stored in Amazon S3 with immutable tags and an automated rollback script (AWS CodePipeline) that reverts to the last known‑good checkpoint if validation fails.  
4. **Continuous Monitoring** – CloudWatch metrics tracked loss curves; an SNS alert triggered when deviation > 0.02, enabling a bias‑for‑action response.

*Result:* Post‑implementation, precision rebounded to **91 %**, and we reduced model retraining time by **35 %** while cutting storage costs 20 %.  

**Bar‑raiser notes:** I demonstrated ownership (took end‑to‑end control), depth (detailed pipeline design), quantified impact (precision & cost metrics), and learned from failure—refining our data hygiene process.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
