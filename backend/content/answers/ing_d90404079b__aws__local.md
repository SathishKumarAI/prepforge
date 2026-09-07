---
qid: ing_d90404079b__aws__local
question: 'Explain: Versioning — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 432
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:29:44-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the redesign of a ML‑model delivery platform that served 3 M daily API calls for downstream analytics apps. The legacy monolith stored all model artifacts in a single S3 bucket and shipped them to every client, which caused stale deployments and version drift.

**Action**  
I introduced a **client‑server architecture** with *model registry* (AWS SageMaker Model Registry) and *artifact store* (S3 + Glacier). Each model version was signed with an immutable hash; clients request the latest stable tag via API Gateway + Lambda, which retrieves the corresponding S3 object. I added a lightweight edge cache on CloudFront to reduce latency for repeat requests.

- **Ownership**: Built end‑to‑end CI/CD pipelines (CodePipeline) that auto‑tag and publish new versions.
- **Dive Deep**: Instrumented metrics in CloudWatch; tracked 95 % hit rate at <30 ms latency.
- **Bias for Action**: Deployed the new flow to a blue/green environment within 2 weeks, no downtime.

**Result**  
Post‑migration we reduced model download times by 60 %, cut storage costs from $12k/month to $4.5k/month, and eliminated version conflicts—downtime dropped from 3 h/month to <10 min over a year. The platform now scales elastically; CloudFront handles 80 % of traffic, keeping request cost <$0.00002 per call.

**Bar‑raiser cues I hit**  
- **Quantified impact**: clear before/after metrics.  
- **Ownership & depth**: end‑to‑end design and troubleshooting.  
- **Learning from failure**: early pilot exposed cache staleness; we added version validation headers to fix it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
