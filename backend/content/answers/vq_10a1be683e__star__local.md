---
qid: vq_10a1be683e__star__local
question: How to count the lines in a file by using linux command?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 362
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:48:24-05:00'
sources: []
---

**Situation** – While migrating our customer‑support logs from on‑prem servers to an S3 data lake, I had to audit the daily log dump size before ingesting it into Spark. The raw text files were huge (up to 5 GB) and a quick line count was needed to verify that no records were truncated during the transfer.

**Task** – Determine the exact number of lines in each log file on the fly, without loading the whole file into memory or writing a custom script, so I could compare it against our expected daily record count (≈ 12 million) and trigger alerts if the counts diverged.

**Action** – I used `wc -l` piped through `xargs` for batch processing:  
```bash
find /mnt/logs/2024-08-* -type f -name '*.log' | xargs -I{} sh -c 'echo {} $(wc -l < {})'
```
This command lists every file with its line count, leveraging the OS’s efficient block‑reading. I then parsed the output into a small Bash loop that summed totals and compared them against the target threshold, sending an email if the difference exceeded 1 %.

**Result** – The script processed 120 log files in under 30 seconds on our EC2 instance, accurately reporting 12,004,732 lines versus the expected 12,000,000. No records were lost, and the automated alert prevented a downstream Spark job from running on incomplete data. I learned to trust lightweight Unix utilities for quick sanity checks and to integrate them into CI/CD pipelines for real‑time monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
