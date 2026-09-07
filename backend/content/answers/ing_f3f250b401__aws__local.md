---
qid: ing_f3f250b401__aws__local
question: 'Explain: lead to bigger ETS say for example — UBER System design | OLA
  system design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 442
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:27:47-05:00'
sources: []
---

**Situation & Task**  
I was tasked to redesign Uber’s “Estimated Time of Service” (ETS) so that the median delay dropped from **12 min** to under **5 min** during peak hours, while keeping compute costs <30 % of the legacy monolith.

**Action**  
1. **Ownership & Bias for Action** – I scoped a micro‑service “Dynamic ETS Engine” using AWS Lambda + Step Functions, replacing the single JVM service.  
2. **Dive Deep** – Collected 4M trip logs, built a feature set (traffic, weather, driver density), and trained an XGBoost model in SageMaker.  
3. **Invent & Simplify** – Deployed the model as a **SageMaker Endpoint** behind API Gateway; Lambda invokes it on each ride request.  
4. **Scalability/Availability** – Leveraged **Auto Scaling Groups** for Lambda concurrency, and **DynamoDB Global Tables** for driver‑location cache (latency < 10 ms).  
5. **Cost & Trade‑offs** – Replaced 8 CPU legacy nodes with on‑demand Lambdas, cutting infra spend from $1.2M/month to $0.6M/month (+50 % savings).

**Result**  
- Median ETS accuracy improved from 84 % to **92 %**.  
- Peak‑hour delay fell from **12 min → 4.8 min** (Δ −7.2 min, 60 % reduction).  
- Service cost reduced by **$600K/month**, freeing budget for new features.

**Learning**  
I documented the failure modes of the monolith (single point of failure, hard‑coded thresholds) and built a real‑time monitoring dashboard in CloudWatch, enabling proactive rollbacks. This experience reinforced my ownership mindset and taught me that iterative, data‑driven micro‑service refactors can deliver both performance and cost efficiency at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
