---
qid: ing_fa0f153817__aws__local
question: 'Q106: You''re an Engineering Manager standing up the AI eval culture on
  a team. How do you set up evals so they actually drive better decisions, without
  engineers gaming the metrics?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 394
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:43:35-05:00'
sources: []
---

**Situation & Task**  
When I joined the ML ops team, evaluation scores were high but projects stalled because engineers focused on hit‑rate rather than real ROI. My goal was to create an *evaluation framework* that surfaced true business value and discouraged gaming.

**Action**  
1. **Define Impact KPIs** – anchored to *Customer Obsession* and *Deliver Results*: model accuracy, latency, cost per inference, and *business lift* (e.g., conversion uplift).  
2. **Data‑driven Weighting** – built a weighted scorecard in **AWS SageMaker Studio** using **Amazon CloudWatch metrics** and **AWS Cost Explorer** data; weights tuned via A/B testing of pilot projects.  
3. **Immutable Auditing Layer** – stored raw logs in **Amazon S3** (object lock) and used **AWS Athena** to generate audit reports, ensuring any manipulation would surface.  
4. **Continuous Feedback Loop** – integrated **Slack bots** that auto‑post scorecards to the team channel; owners get a *real‑time* view of how changes affect downstream metrics.

**Result**  
Within three sprints, model accuracy improved by 12 %, inference latency dropped 25 %, and cost per inference fell 18 %. The new evals also reduced “gaming” incidents by 90 % (measured through audit logs).  

**Bar‑raiser takeaways**  
* Ownership: I owned the end‑to‑end pipeline.  
* Dive Deep: I queried raw CloudWatch data to surface hidden patterns.  
* Quantified Impact: Clear, measurable business lift drove decisions.  
* Learning from Failure: Early pilot failures informed weight adjustments, showing a growth mindset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
