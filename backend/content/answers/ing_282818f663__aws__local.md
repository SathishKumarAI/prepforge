---
qid: ing_282818f663__aws__local
question: 'Explain: Why we still keep contractors on payroll'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 395
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:56:24-05:00'
sources: []
---

**Situation & Task**  
While revamping our vendor‑payroll pipeline, I discovered that **20 % of contractors were still on the payroll system** even after their contracts had expired. This caused a $120k/month cost overrun and risked compliance violations.

**Action (Dive Deep + Ownership)**  
I pulled the data from our HRIS, mapped contract end dates to payroll entries, and built an automated Lambda pipeline that cross‑checks contract status against the S3‑backed “Contract Expiry” table. The process triggers a DynamoDB flag and sends a Slack alert to Finance every 12 hrs. I also introduced a **weekly audit script** (Python/Glue) that flags anomalies for manual review.

- **AWS Services:** Lambda, DynamoDB, S3, Glue, SNS/SQS  
- **Scalability:** The stateless Lambda scales to 1,000 concurrent checks per minute; the data lake handles >10 M contract records.  
- **Availability:** Built with Multi‑AZ deployment and CloudWatch alarms for cold starts.  
- **Cost:** <$50/month vs $120k/year savings.

**Result (Deliver Results)**  
Within two weeks of deployment, contractor payroll errors dropped from 20 % to <1 %, cutting the monthly overrun to zero and freeing $1.44M annually. The audit script now logs 3,200 anomalies per quarter with a 95 % precision rate.

**Reflection (Bar‑raiser check)**  
I owned the problem end‑to‑end, dug into data to uncover root causes, quantified the financial impact, and iterated quickly—meeting Amazon’s bar of **Customer Obsession** for Finance and **Bias for Action**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
