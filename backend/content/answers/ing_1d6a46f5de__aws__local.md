---
qid: ing_1d6a46f5de__aws__local
question: 'Explain: Example code — Pattern: Saga'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 427
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:33:02-05:00'
sources: []
---

**Situation / Task**  
At a prior startup I led the migration of our model‑training pipeline from on‑prem to an event‑driven architecture on AWS. The goal was to reduce manual rollbacks and ensure atomicity across data ingestion, feature extraction, training, and deployment.  

**Action**  
I designed a **Saga‑style orchestration** using Amazon EventBridge (for durable events) + Step Functions (state machine). Each step publishes an event; compensating actions are defined for failure scenarios. For example:  
1. **IngestData** → publish `DataReady`; if fails, trigger `DeleteStaleBuckets`.  
2. **ExtractFeatures** → publish `FeatureSetCreated`; on failure, run `RevertFeatureExtraction`.  
3. **TrainModel** → publish `TrainingComplete`; rollback to previous model on error.  

Step Functions’ *Catch* and *Retry* blocks implement the Saga’s compensating logic. I used **SQS** for buffering high‑volume ingestion events and **DynamoDB** for idempotent state tracking, ensuring exactly‑once semantics.  

**Result**  
Post‑migration, deployment latency dropped from 45 min to <10 min (80% reduction). Failure rates fell by 92%, and we saved ~$30k/month in manual intervention costs.  

**Leadership Principles Highlighted**  
- **Customer Obsession:** Delivered a more reliable model lifecycle for our data science customers.  
- **Ownership & Dive Deep:** Took full responsibility for the end‑to‑end flow, dissecting failure modes to build compensations.

**Bar‑raiser Takeaway**  
A strong answer shows ownership, depth of design (AWS services chosen, trade‑offs), measurable impact, and a reflection on what was learned when a compensating step failed during early tests.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
