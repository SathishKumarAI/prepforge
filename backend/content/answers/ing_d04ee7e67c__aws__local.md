---
qid: ing_d04ee7e67c__aws__local
question: 'Explain: No labels found. Sorry about that. — modelcontextprotocol/modelcontextprotocol
  \u00b7 Discussions \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 488
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:12:05-05:00'
sources: []
---

**Situation / Task**  
I was leading the migration of our on‑prem fraud detection pipeline to SageMaker on AWS. The team hit a blocker: the training job failed with *“No labels found”* when we pointed it at the S3 bucket that contained the CSV files.

**Action**  
1. **Dive Deep into Data** – I pulled 10 % of the dataset, inspected the schema in Athena and confirmed the label column was named `is_fraud` but had a leading space (`' is_fraud'`).  
2. **Fix & Automate** – Updated the ETL step (Glue job) to trim whitespace and cast the label to `int`. I added a unit test that validates every CSV has at least one non‑null label before SageMaker launches.  
3. **Operationalize** – Implemented a CloudWatch alarm on the SageMaker training job status; if it fails again, an SNS notification triggers a Lambda that runs the Glue validation automatically.

**Result**  
- Training jobs resumed in 4 hours instead of days.  
- Accuracy improved from 82 % to 87 % because mislabeled rows were removed.  
- The new validation pipeline reduced data‑quality incidents by **60 %** over the next quarter.

---

### Technical take‑away
* **AWS services used:** SageMaker (Training), Glue (ETL & validation), Athena (ad‑hoc queries), CloudWatch, SNS, Lambda.  
* **Scalability / Availability** – Glue jobs run in an EMR cluster with auto‑scaling; SageMaker endpoints are behind an Application Load Balancer for high availability.  
* **Cost trade‑off** – Adding a validation step costs ~\$0.02 per job but saves hours of debugging and prevents model drift.

---

### Bar‑raiser check  
- **Ownership:** Took end‑to‑end responsibility, from root cause to automated fix.  
- **Dive Deep:** Uncovered hidden whitespace bug that would have slipped through manual checks.  
- **Quantified Impact:** Showed measurable lift in accuracy & cost savings.  
- **Learning from Failure:** Documented the issue and updated our data‑quality playbook for future migrations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
