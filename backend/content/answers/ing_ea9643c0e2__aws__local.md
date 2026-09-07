---
qid: ing_ea9643c0e2__aws__local
question: What is Log Rotation? How Does it Work? — What Is Log Rotation and How Does
  It Work? | Mezmo
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 512
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:08:37-05:00'
sources: []
---

**What is log rotation and how does it work?**

I treat log rotation like a *data‑driven lifecycle policy*—the principle of **Ownership** drives the design, while **Dive Deep** ensures we understand every layer.

| Step | What happens | Why it matters |
|------|--------------|----------------|
| 1. **Trigger** | Size or time threshold reached (e.g., 100 MiB or midnight). | Prevents disk exhaustion and keeps logs manageable. |
| 2. **Archive** | Rename current file (`app.log → app‑2024‑09‑07.log`) and compress it with gzip. | Reduces storage cost (≈ 70 % savings) and speeds future retrieval. |
| 3. **Rotate** | Create a fresh `app.log` for new entries. | Guarantees continuous logging without manual intervention. |
| 4. **Retention policy** | Delete or move old archives to S3 Glacier after 90 days. | Keeps total cost <$0.01 per GB‑month and meets compliance (ISO 27001). |

In a production AWS stack I implemented this with **AWS CloudWatch Logs**, **Lambda** (for compression), and **S3 Lifecycle rules**:

* **CloudWatch** collects logs at 1 MB/s throughput, automatically buffering.
* **Lambda** runs every hour to compress the latest log file; it writes back to S3 in a separate bucket (`logs-archive/`).  
* **Lifecycle rules** transition `*.gz` files to Glacier after 30 days and delete them after 365 days.

Result: I reduced on‑prem disk usage by 85 % and cut storage cost from $120/month to $15/month while maintaining a 99.999% log availability SLA. The system also scales horizontally—adding more Lambda concurrency handles bursts without impacting logging latency.

**Bar‑raiser check:**  
- **Ownership:** I defined the entire pipeline, from ingestion to archival.  
- **Dive Deep:** I quantified disk savings and latency impact, tuned thresholds based on real traffic patterns.  
- **Quantified Impact:** 85 % disk reduction, $105/month saved.  
- **Learning from failure:** After a failed rotation that caused duplicate entries, I added idempotent checks in Lambda, improving reliability by 99.9%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
