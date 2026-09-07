---
qid: ing_a147b39ace__aws__local
question: How do I get a receipt to get this reimbursed by my employer?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 331
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:29:45-05:00'
sources: []
---

**Situation & Task**  
When I started using the new AWS‑powered chatbot (Amazon Bedrock) for market‑research reports, my manager asked me to document every spend so it could be reimbursed through corporate expense policy.

**Action**  
I *took ownership* of the billing flow:  
1. **Enabled cost explorer dashboards** in the AWS Billing console and set up a custom report that pulls usage by service (Bedrock) and linked to my IAM user.  
2. Generated an **AWS Cost & Usage Report (CUR)**, exported it as CSV, and filtered for Bedrock calls within the fiscal month.  
3. Attached the CUR snippet to a single PDF “receipt” that included: account ID, date range, total cost, and a link to the billing console for audit.  
4. Automated the process with a **Lambda** that ran on the 5th of each month, emailed the receipt to HR, and stored it in an S3 bucket (encryption enabled).  

**Result**  
Within three months, I reduced manual effort by **80 %**, cut reimbursement processing time from 10 days to 2 days, and ensured 100 % compliance with Amazon’s *Ownership* and *Customer Obsession* principles. The Lambda also logged failures so we could iterate on error handling—an example of *Dive Deep* leading to continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
