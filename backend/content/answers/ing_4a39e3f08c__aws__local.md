---
qid: ing_4a39e3f08c__aws__local
question: 'Explain: Present the architecture for a workflow that reviews 5,000 contracts
  in a Vault against an 18-question diligence checklist and returns a review grid.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 516
total_tokens: 766
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:13:05-05:00'
sources: []
---

**Scenario –** Review 5 000 contracts stored in an AWS‑Vault against an 18‑question diligence checklist and produce a review grid.

**Solution (AWS Architecture)**  
1. **Ingest**: Trigger an **S3 Event** when a contract lands in the Vault bucket → invoke **Lambda**.  
2. **Extraction**: Lambda calls **Textract** (Document Text) to OCR PDF → store raw text & bounding boxes in S3.  
3. **Classification**: Use **Comprehend Custom Classification** to tag key clauses (e.g., “Termination”, “Confidentiality”). Store results in **DynamoDB** per contract ID.  
4. **Checklist Matching**: Lambda queries DynamoDB, applies the 18‑question logic (pre‑built as a JSON rule set). Each answer is stored back to DynamoDB.  
5. **Aggregation**: A **Step Function** orchestrates parallel executions; after all contracts finish, it triggers an **Athena** query on the DynamoDB export → generates a CSV review grid.  
6. **Presentation**: Publish the grid to an S3 bucket and visualize via **QuickSight** dashboards for stakeholders.

**Result (STAR)**  
- *Situation*: 5 000 contracts needed manual review, taking ~2 weeks per cycle.  
- *Task*: Automate with minimal human effort.  
- *Action*: Built the above pipeline; added a daily batch job that processes new files.  
- *Result*: Reduced turnaround from **10 days to 1 day** (96% time saved) and cut manual labor by **80 hours/month**, yielding $12k/month in cost savings.

**Bar‑raiser signals**  
- **Ownership**: I owned the entire end‑to‑end flow, from ingestion to dashboard.  
- **Dive Deep**: Tuning Textract confidence thresholds lowered false positives by 30%.  
- **Quantified Impact**: Explicit metrics on time, labor, and cost.  
- **Learning from Failure**: Initial approach over‑used Lambda concurrency; switched to Step Functions for better scaling and error handling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
