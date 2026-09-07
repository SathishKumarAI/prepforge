---
qid: ing_fa8e20285e__aws__local
question: How often do you perform security audits and vulnerability assessments?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 315
total_tokens: 545
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:44:58-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was the owner of a customer‑facing AI inference platform that handled 1 M requests/day. Security had to be baked in without hurting latency or cost.

**Action (Design)**  
I built an automated audit pipeline using **AWS CodePipeline**, **Amazon Inspector**, and **AWS Config Rules** to run every *night*. Each pipeline triggers a full vulnerability scan of the Lambda functions, ECS containers, and the underlying ECR images. Results are pushed to a **CloudWatch Dashboard** with a custom metric “Critical Vulnerabilities Detected.” I also added a *policy‑as‑code* check (OPA) that blocks deployments if new CVEs exceed 0.

**Result (Data)**  
After implementation:
- **Zero critical vulnerabilities** in production over 12 months.  
- Mean time to remediate dropped from 48 hrs to < 2 hrs.  
- Cost impact was only $200/month vs. the previous $1,500/month manual audit effort.

**Reflection (Bar‑raiser)**  
I own the end‑to‑end flow, dive deep into each service’s security posture, and quantify impact with real metrics. When a false positive slipped through, I updated the rule set and documented the learning—showing continuous improvement. This aligns with **Ownership** and **Dive Deep** while delivering measurable results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
