---
qid: ing_56d6d40faf__star__local
question: What Happens to Old Log Files? — What Is Log Rotation and How Does It Work?
  | Mezmo
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 303
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:21:34-05:00'
sources: []
---

**Situation**  
When I joined the monitoring team at a SaaS company, our nightly batch jobs were generating ~300 GB of logs per day on a single EBS volume. The disk filled up within two weeks, causing job failures and downtime.

**Task**  
I needed to design an automated log‑rotation strategy that preserved critical audit data for 90 days while keeping the volume size under 200 GB and ensuring compliance with our GDPR policy.

**Action**  
I implemented a daily cron job using `logrotate` configured with `daily`, `maxsize=10G`, and `compress`. The script moved logs to an S3 bucket via `aws s3 cp --storage-class INTELLIGENT_TIERING`, applying lifecycle rules that transitioned them to Glacier after 30 days. I added a checksum verification step to detect corruption, and set up CloudWatch alarms on rotation failures. For real‑time ingestion, I updated our ELK stack to read from the S3 archive using Logstash’s `s3` input plugin.

**Result**  
Disk usage dropped to ~120 GB continuously; job success rate improved from 85% to 99.9%. The system now retains logs for 90 days with cost savings of ~30% on storage, and I learned how to balance performance, compliance, and budget in log management.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
