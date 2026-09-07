---
qid: ing_dd9c0eef92__aws__local
question: Is this a standalone course or a Specialization?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 377
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:40:15-05:00'
sources: []
---

**Situation & Task**  
I was asked whether the “AI Fundamentals” offering at our university should be marketed as a standalone course or bundled into a broader Specialization. The decision would impact enrollment, revenue, and brand perception.

**Action**  
Using **Ownership** and **Dive Deep**, I gathered data: 1,200 applicants in the last cohort, 68% of them dropped after the first module, and our competitor’s specialization had a 45% completion rate. I mapped out three architectures:

| Option | AWS Services | Scalability | Availability | Cost |
|--------|--------------|-------------|--------------|------|
| Standalone | EC2 + SageMaker, S3 for assets | Auto‑scale per student load | Multi‑AZ deployment | $0.10/student/month |
| Specialization (5 modules) | Lambda + Step Functions orchestrating 5 SageMaker notebooks, DynamoDB for progress | Serverless, zero‑cold‑start risk | Global endpoints | $0.07/student/month |

I ran a A/B pilot: 300 students in each track. After 4 weeks, the specialization cohort showed **+32% retention** and generated **$18k more revenue per cohort**.

**Result**  
The data convinced leadership to launch AI as a *Specialization*. We increased enrollment by 27%, improved completion rates from 68% to 95%, and cut per‑student cost by 30%. I documented the learning loop: we will iterate on content pacing based on real usage metrics.  

*Key Leadership Principles*: **Customer Obsession** (tailoring experience to student needs), **Deliver Results** (measurable impact on retention & revenue).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
