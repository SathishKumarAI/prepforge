---
qid: ing_ea0b5791f3__star__local
question: 'Explain: S3 CLI — AWS-Services/6_FileStorages/3_S3ObjectStorage/Readme.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 272
output_tokens: 333
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:16:27-05:00'
sources: []
---

**Situation** – In my last role I was tasked with migrating our on‑prem backup system to AWS. The legacy setup stored terabytes of log files in a local NAS, and we needed an automated way to pull those into S3 for cost‑effective long‑term storage while keeping audit trails.

**Task** – My goal was to build a robust, repeatable pipeline that could fetch any file from the NAS, upload it to the right bucket with proper metadata, and verify integrity, all without manual intervention. I also had to ensure we stayed within our budget by using S3’s lifecycle policies.

**Action** – I scripted the process in Bash, leveraging the AWS CLI. First, I used `aws s3api list-objects-v2` to discover new files, then `aws s3 cp --recursive --storage-class STANDARD_IA` to upload them while tagging each object with a retention policy via `aws s3api put-object-tagging`. For checksum validation I compared the local SHA‑256 hash with the S3 object's ETag using `aws s3api head-object`. Finally, I scheduled the script on cron and added CloudWatch metrics for transfer speed.

**Result** – The migration completed 30% faster than our original plan, saving $1.2k/month in storage costs by correctly applying IA tiering. I learned how to combine AWS CLI commands with metadata tagging to enforce compliance and built a repeatable pattern now used across all data‑ingestion projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
