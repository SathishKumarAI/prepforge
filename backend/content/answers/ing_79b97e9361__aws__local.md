---
qid: ing_79b97e9361__aws__local
question: 'Explain: EU AI Act Implications for Agentic Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 464
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:00:06-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
When we launched our conversational agent in the EU, regulators introduced the AI Act. The law classifies “agentic systems” that make autonomous decisions as high‑risk, requiring compliance audits and transparency logs. Our goal was to meet those requirements **without sacrificing latency or cost**.

**Action (Dive Deep & Ownership)**  
I led a cross‑functional squad to redesign the agent’s decision pipeline:

| Component | AWS Service | Why |
|-----------|-------------|-----|
| Decision engine | Amazon SageMaker Pipelines + Lambda | Enables model versioning, automated retraining, and fine‑grained control over inference logic. |
| Transparency logs | Amazon S3 + Athena + CloudTrail | Immutable storage of every decision, searchable via Athena for audit queries. |
| Risk scoring | DynamoDB with TTL + Step Functions | Computes per‑request risk score; low‑risk paths bypass heavy logging to save cost. |

We implemented a **policy engine** that tags each output with a confidence vector and a “human‑review flag” when the risk score exceeds 0.8. The system automatically routes flagged interactions to an Ops queue, ensuring compliance while keeping average inference latency under **120 ms**.

**Result (Deliver Results)**  
- Compliance audit passed within **3 weeks**, two days ahead of the EU deadline.  
- Log storage cost reduced by **35%** through selective logging.  
- Customer satisfaction scores for the EU region rose from 4.2 to **4.6/5** due to faster, compliant responses.

**Reflection (Bar‑Raiser Lens)**  
I took full ownership of the redesign, iterated on design based on real audit feedback, and quantified impact with latency and cost metrics. The biggest failure was an initial mis‑calculation of risk thresholds that caused false positives; we learned to iterate quickly by integrating real‑time monitoring dashboards. This experience reinforced my belief in **Customer Obsession**—meeting regulatory needs while keeping the user experience smooth—and **Dive Deep**, ensuring every service choice is data‑driven and auditable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
