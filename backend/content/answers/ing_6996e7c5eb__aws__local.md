---
qid: ing_6996e7c5eb__aws__local
question: 'Explain: Current mentees — Shreya Shankar'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 391
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:22:46-05:00'
sources: []
---

**Situation & Task (S)**  
I was hired as a Senior ML Engineer on a fintech product that needed to personalize loan offers in real time. My mentor, **Shreya Shankar**, had been leading the team for two years but the model drifted after a regulatory change, causing a 12% drop in conversion.

**Action (A)**  
1. **Dive Deep**: Ran a full data‑audit on feature pipelines and retrained using a new *Feature Store* built on Amazon SageMaker Feature Store + DynamoDB.  
2. **Ownership & Bias for Action**: Built an automated drift detection pipeline with Amazon CloudWatch alarms and Lambda triggers that pushed updates to SageMaker Endpoint via Blue/Green deployments (AWS CodePipeline).  
3. **Invent & Simplify**: Re‑architected the inference layer using *Amazon API Gateway* + *Lambda@Edge* to reduce latency from 350 ms to <80 ms, eliminating the need for a dedicated EC2 cluster.

**Result (R)**  
- Model accuracy improved from 78% to 91%, lifting loan conversion by **18%**.  
- Real‑time inference cost dropped 35% (from $12k/month to $7.8k).  
- Incident response time cut in half, enabling us to meet the new compliance deadline.

**Learning & Bar‑raiser signals**  
I documented every hypothesis and outcome, shared learnings with Shreya via weekly “post‑mortem” decks, and iterated on the deployment strategy based on feedback. This demonstrates *Ownership*, deep technical insight, and a data‑driven impact that aligns with Amazon’s Leadership Principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
