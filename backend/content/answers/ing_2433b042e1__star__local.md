---
qid: ing_2433b042e1__star__local
question: As a Deployed Engineer, you are rolling Devin into a 2,000-engineer organisation.
  What do the first ninety days look like?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 363
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:41:50-05:00'
sources: []
---

**Situation** – I joined a 2,000‑engineer fintech firm as their new Deployed AI Engineer. The company had just finished a prototype of an automated fraud‑detection model that was running in a sandbox, but nobody had a clear deployment pipeline or monitoring strategy.

**Task** – Within the first ninety days my goal was to turn that prototype into a production‑ready system: secure, observable, and fully integrated with their data lake, while aligning stakeholders across engineering, product, and compliance teams.

**Action** – I started by mapping out the existing CI/CD flow in GitLab and identified gaps in artifact versioning and rollback capabilities. I introduced Terraform to codify infrastructure on AWS (ECS + SageMaker endpoints) and set up a blue‑green deployment strategy with CloudWatch metrics for latency, precision@k, and false‑positive rate. To satisfy compliance, I worked with the legal team to embed data‑masking in the ETL pipeline and drafted an audit trail schema stored in DynamoDB. I also organized a weekly “AI Ops” stand‑up where we reviewed model drift scores from Evidently AI and iterated on feature pipelines.

**Result** – By day 90, the fraud model was live with a 95 % deployment success rate, latency under 200 ms, and a false‑positive reduction of 18 %. The observability stack cut incident response time by 40 %, and we received an internal “Best Deployment Practice” award. I learned that blending robust DevOps tooling with continuous compliance checks is the key to scaling AI responsibly in a large organization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
