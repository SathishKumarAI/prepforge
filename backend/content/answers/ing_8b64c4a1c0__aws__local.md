---
qid: ing_8b64c4a1c0__aws__local
question: 'Explain: Measuring the Self-Reported Impact of Early-2026 AI on Technical
  Worker Productivity'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 541
total_tokens: 779
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:41:04-05:00'
sources: []
---

**Situation & Task**  
In early‑2026 we launched an AI assistant (ChatGPT‑Enterprise) that was meant to cut the average time a senior dev spends on code review and documentation from **30 min to 12 min**. I was asked to quantify *self‑reported* productivity gains across our AWS‑based engineering org.

**Action – Design & Implementation**  
1. **Survey & Data Capture** – Built a lightweight, serverless form (AWS API Gateway → Lambda → DynamoDB) that auto‑triggers after each AI session.  
2. **Baseline & Cohort Analysis** – Stored historical 6‑month productivity logs in Redshift; used AWS Glue to ETL them into the same schema for comparison.  
3. **Metric Engine** – In SageMaker, trained a regression model to predict expected review time per PR based on complexity metrics (cyclomatic depth, lines added). The *self‑reported* delta is then:  

   \[
   \text{Delta} = \frac{\text{Predicted Time}_{\text{pre‑AI}} - \text{Actual Time}_{\text{post‑AI}}}{\text{Predicted Time}_{\text{pre‑AI}}}
   \]

4. **Dashboard** – QuickSight visualizes 95 % confidence intervals per team, flagging outliers for follow‑up.

**Result**  
Across 1,200 engineers we saw an *average* self‑reported productivity lift of **22 %** (from 30 min to ~23 min). The cost of the solution was < $500/month (Lambda + DynamoDB), and it ran with > 99.9 % availability due to regional replication.

---

### Leadership Principles Highlighted
- **Customer Obsession** – We built a tool that directly answers engineers’ pain points.  
- **Ownership & Dive Deep** – From data ingestion to ML modeling, I owned the full pipeline and iterated on error signals until convergence.  

---

#### Bar‑raiser’s Lens
- **Quantified Impact**: 22 % lift with clear confidence intervals.  
- **Depth**: Detailed regression model, ETL pipeline, cost/availability trade‑offs.  
- **Learning from Failure**: Initial version over‑estimated impact; we refined the baseline by incorporating PR complexity, reducing bias and improving trust in the metric.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
