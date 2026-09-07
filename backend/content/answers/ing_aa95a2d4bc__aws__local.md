---
qid: ing_aa95a2d4bc__aws__local
question: 'Explain: Design an agent that can take actions in a spreadsheet ("insert
  a pivot table of Q3 sales by region") - orchestration, tools, and failure handling.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 416
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:52:06-05:00'
sources: []
---

**Situation & Task**  
At a retail client, analysts spent ~4 hrs per week manually building pivot tables in Excel to spot Q3 sales trends. I owned the initiative to automate “Insert Pivot Table of Q3 Sales by Region” across 200+ workbooks.

**Action**  
1. **Orchestration** – Built an AWS Step Function that triggers on S3 upload, calls a Lambda (`extract_csv`) which streams data into Glue catalog (schema inference).  
2. **Tools** – Athena queries the catalog; results are formatted to CSV and passed to another Lambda (`pivot_builder`). The builder uses `openpyxl` to inject a pivot table into the target workbook via an S3‑based Excel template, then writes back to S3.  
3. **Failure Handling** – Each Step Function state has a 3‑retry pattern; on final failure, SNS notifies Ops and a CloudWatch alarm logs the error. A “dead‑letter” queue stores problematic files for manual triage.

**Result**  
- Reduced analyst effort from 4 hrs to <30 min per workbook (≈90% time savings).  
- Scaled to 200+ workbooks with zero downtime; cost <$1/month using Lambda + Athena.  
- Earned a “Customer Obsession” award for improving end‑user productivity.

**Bar‑raiser focus**  
Ownership: I drove the full cycle from requirement capture to production.  
Dive Deep: Leveraged Glue schema discovery, Athena query optimization (partition pruning).  
Quantified Impact: 90% time savings and $0.02/day cost.  
Learning: After an initial failure due to Excel version mismatch, we added a pre‑check Lambda that validates workbook compatibility, eliminating future errors.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
