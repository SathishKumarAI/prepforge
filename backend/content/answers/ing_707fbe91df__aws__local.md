---
qid: ing_707fbe91df__aws__local
question: 'Explain: Address Organizational Adoption Blockers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 351
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:39:46-05:00'
sources: []
---

**Situation & Task**  
At my previous firm I led a cross‑functional team to roll out an internal generative‑AI platform that would power customer support and product docs. Adoption stalled because stakeholders feared data privacy, cost overruns, and lack of clear ROI.

**Action**  
1. **Customer Obsession + Ownership** – I mapped each blocker to user pain points, then built a lightweight “Adoption Scorecard” (KPIs: % of teams using AI, mean time to first model deployment, cost per inference).  
2. **Dive Deep & Bias for Action** – Conducted a threat‑model workshop with security, finance, and product groups; identified 12 risk mitigations (encryption at rest, fine‑grained IAM, spot‑instance burst).  
3. **Invent & Simplify** – Designed a serverless architecture on AWS: Lambda + SageMaker Pipelines + Athena for cost monitoring, all orchestrated via Step Functions. This cut baseline infra from $120k/month to <$15k and reduced latency by 35%.  
4. **Deliver Results** – Rolled out a pilot in two product lines; adoption rose from 0% to 68% within three months, and the platform saved $250k annually on manual support tickets.

**Result**  
The initiative achieved a 150 % increase in AI usage across departments while keeping costs under budget. Post‑mortem analysis highlighted that early stakeholder engagement and a data‑driven adoption metric were key learnings—an insight I now share with every new product launch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
