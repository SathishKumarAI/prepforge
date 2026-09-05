---
qid: vq_e619a73a75__star__local
question: How can you mask sensitive data in the Azure SQL Database?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 340
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:24:49-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup, we had an Azure SQL Managed Instance hosting user profiles for over 80,000 customers. The compliance audit flagged that our raw PII—credit card numbers and SSNs—was being exposed in query logs and during data exports to the BI layer.

**Task**  
I was tasked with implementing a solution that would automatically mask those fields whenever they were accessed by non‑admin roles, without impacting application performance or breaking existing reporting jobs.

**Action**  
I enabled Dynamic Data Masking (DDM) on the `Payments` table. First, I added masking policies: `MASKED WITH FUNCTION = 'default()'` for SSNs and a custom function that revealed only the last four digits of credit card numbers. Then I reviewed role‑based permissions, creating a new `report_user` role with SELECT rights but no ability to alter masks. To preserve legacy reports, I wrote a small view that applied the same mask logic in SQL so downstream Power BI dashboards continued to work. Finally, I tested the setup by running queries from both admin and non‑admin contexts, confirming masked output and logging.

**Result**  
The audit passed with zero findings on PII exposure. Query performance remained under 5 ms, and our BI team saw no disruption—report generation times stayed within the 2‑minute SLA. I learned that DDM is a quick win for compliance but must be paired with careful role management to avoid accidental privilege escalation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
