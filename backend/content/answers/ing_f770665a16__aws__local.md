---
qid: ing_f770665a16__aws__local
question: 'Explain: Model registry, pinning, and safe rollout'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 468
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:38:12-05:00'
sources: []
---

**Situation / Task**  
I was leading the MLOps team for a recommendation engine that shipped a new neural‑search model every sprint. The risk of “model drift” and sudden latency spikes required a robust **Model Registry**, version pinning, and a *safe rollout* strategy.

**Action**  
1. **Model Registry (SageMaker Model Registry)** – I defined a schema with `model_version`, `metrics` (precision@10, latency), and `tags`. Every training job pushed its artifact to the registry; automated pipelines validated performance against an A/B test threshold before promotion.  
2. **Pinning** – Production services reference a *canonical* model ARN stored in Parameter Store. When a new version is approved, we update only that single parameter, guaranteeing all downstream consumers use the exact same weights.  
3. **Safe Rollout (Canary + Blue/Green)** – Using **AppConfig** and **Lambda@Edge**, I implemented a 5 % canary traffic split to the new model, monitored CloudWatch metrics in real time, and automatically rolled back if latency >10 ms or AUC <0.02.  
4. **Observability & Cost Control** – All deployments log to CloudTrail; SageMaker endpoints are autoscaled with a target CPU of 60 %. I reduced per‑request cost by 18 % while keeping SLA ≥99.9 %.

**Result**  
Within three months, we cut model‑related incidents from 4/month to 0/month, increased recommendation revenue by **12 %**, and saved $35k in compute spend.

> *Leadership Principles*: **Ownership** – I owned the end‑to‑end pipeline; **Dive Deep** – built granular metrics and automated rollback logic.  
> *Bar‑raiser notes*: Clear ownership narrative, data‑driven impact, deep technical detail, and learning from a prior failure where uncontrolled rollouts caused latency spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
