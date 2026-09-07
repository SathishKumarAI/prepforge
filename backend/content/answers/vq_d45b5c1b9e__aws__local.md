---
qid: vq_d45b5c1b9e__aws__local
question: Is it possible to add a parameter while running a saved job?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 543
total_tokens: 776
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:16:17-05:00'
sources: []
---

**Situation / Task**  
I was leading a data‑engineering team that maintained an hourly ETL pipeline in **AWS Glue**. The pipeline ran as a *saved job* (a Glue job definition) triggered by CloudWatch Events. A downstream analytics product required a “season” parameter to filter the data, but the job had no user‑supplied input.

**Action**  
1. **Ownership & Dive Deep** – I first inspected the job’s JSON and realized that Glue jobs support *job arguments* (`--extra-jars`, `--conf`, etc.) but the existing scheduler didn’t pass them.  
2. I introduced a lightweight **EventBridge rule** that, instead of invoking the job directly, launched an **AWS Lambda** function.  
3. The Lambda read the required season value from **AWS Systems Manager Parameter Store**, then called `glue.StartJobRun` with `--arguments={season: "2024-Q1"}`.  
4. To make this reusable, I added a parameter‑template in the job definition (`${season}`) and updated the EMR step script to reference `${args.season}`.  
5. I added CloudWatch metrics to capture job run time and failure rate; after implementation, run times dropped 12 % because the job no longer had to recompute season‑based partitions.

**Result**  
- **Quantified impact:** The pipeline now accepts dynamic parameters without manual code changes, reducing engineering hours from 4 hrs/month to <30 min.  
- **Availability & Cost:** Lambda execution is <10 ms and cost‑free; Parameter Store is fully managed with no extra spend.  
- **Bar‑raiser signals:** I demonstrated ownership (re‑architected the trigger), deep technical understanding (Glue arguments, EventBridge, Lambda), and quantified ROI.

**AWS services used**

| Service | Purpose |
|---------|---------|
| AWS Glue | ETL job definition & execution |
| EventBridge | Triggering Lambda on schedule |
| Lambda | Inject dynamic arguments |
| SSM Parameter Store | Securely store the season value |
| CloudWatch Metrics | Measure performance impact |

**Leadership Principles Highlighted**

- **Ownership** – I took full responsibility for the end‑to‑end solution.  
- **Dive Deep & Deliver Results** – I dissected Glue’s capabilities, designed a scalable pattern, and delivered measurable cost/time savings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
