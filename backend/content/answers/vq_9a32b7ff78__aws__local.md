---
qid: vq_9a32b7ff78__aws__local
question: Can one print to the screen from PL/SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 385
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:05:10-05:00'
sources: []
---

**Answer (Amazon style)**  

**Situation / Task** – While refactoring an on‑prem Oracle 12c data‑warehouse that feeds our marketing analytics dashboards, I was asked to add a “debug dump” feature so analysts could view intermediate query results directly in the console rather than exporting CSVs.  
**Action** – Oracle PL/SQL can output text via `DBMS_OUTPUT.PUT_LINE`, but it requires enabling server‑output (`SET SERVEROUTPUT ON`) and has a 32 KB buffer limit. To overcome this for large dumps, I wrapped the logic in an anonymous block that streams rows to an S3 bucket using **AWS Lambda** (Python) triggered by `ORACLE`’s **External Table** interface. The PL/SQL procedure writes each row to a temporary table; the Lambda function reads from it via **AWS Glue** crawler, serializes to JSON, and uploads to S3.  
- **Services used:** Lambda, S3, Glue, IAM for fine‑grained access.  
- **Scalability & cost:** The Lambda concurrency scales automatically; each 10 MB payload costs <$0.0004, far cheaper than a persistent screen session for terabyte datasets.  
**Result** – Analysts now retrieve debug data in <2 s with no manual export, reducing support tickets by 35 % and cutting storage costs by 20 %.  

*Leadership principles highlighted:* **Customer Obsession** (fast, reliable debugging) & **Ownership** (designing end‑to‑end solution).  
Bar‑raiser focus: clear ownership of the end‑to‑end workflow, deep dive into PL/SQL limitations, quantified impact on user productivity and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
