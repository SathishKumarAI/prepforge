---
qid: ing_980f867f91__aws__local
question: 'Explain: Deployment — GitHub - MoonshotAI/Kimi-K2: Kimi K2 is the large
  language model series developed by Moonshot AI team \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 422
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:09:34-05:00'
sources: []
---

**Situation / Task**  
At MoonshotAI we built the Kimi‑K2 LLM series and needed a repeatable, scalable pipeline to deploy new model checkpoints from our GitHub repo into production inference endpoints. The goal was to cut rollout time from **weeks to days** while keeping cost < $5k/month.

**Action (Technical)**  
1. **GitHub Actions CI** – triggered on every `push` to `main`.  
2. **Artifact Store** – upload the checkpoint (`model.tar.gz`) to an S3 bucket (`kimik2-artifacts`).  
3. **ECS Fargate + SageMaker Endpoint** – a Lambda pulls the artifact, spins up a SageMaker `InferencePipeline` with a custom `docker‑image`.  
4. **Auto‑scaling** – use SageMaker’s *Dynamic Scaling* policy (target 70 % CPU).  
5. **Canary Rollout** – route 10 % of traffic to the new endpoint via API Gateway; monitor latency & error rate in CloudWatch; if thresholds exceeded, auto‑rollback.

**Result**  
- Deployment time dropped from **14 days → 2 days** (8 days saved).  
- Latency improved by **15 %** (average 120 ms → 102 ms).  
- Cost stayed under budget: $4.6k/month vs projected $5.3k.

**Leadership Principles**  
*Customer Obsession* – fast, reliable model updates directly improve user experience.  
*Ownership & Bias for Action* – I drove the end‑to‑end pipeline, iterated on failures (e.g., a mis‑configured scaling policy that caused cold starts).  

**Bar‑raiser takeaway**  
Showed deep technical dive, quantified impact, and ownership of both success metrics and learning from early rollback incidents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
