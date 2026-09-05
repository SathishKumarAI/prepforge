---
qid: ing_fabe2f3186__star__local
question: How do Rotated Log Files Look? — What Is Log Rotation and How Does It Work?
  | Mezmo
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 381
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:50:14-05:00'
sources: []
---

**Situation** – In my last role I managed the inference microservice for a real‑time recommendation engine that processed over 50 M requests per day. The service logged request latency, error rates, and GPU utilization to a local file on each node. After a month of steady traffic the log files grew to ~4 GB each, causing disk contention and slowing down our nightly backup job.

**Task** – I needed to set up automated log rotation so that logs stayed under 1 GB, retained seven days of history, and didn’t interfere with production traffic or backups. The solution had to be lightweight (no extra daemon) and work across all Docker containers in the cluster.

**Action** – I wrote a small Python wrapper around the standard `logging` library that used `TimedRotatingFileHandler`. Every 12 hours it rotated the file, renamed it with a timestamp (`app‑20240601T1200.log.gz`), and compressed the old file using gzip. To avoid lock contention, I set `delay=True` so the handler opened the new file only when needed. I also added an `os.chown` call to preserve read permissions for the backup script. Finally, I updated our Kubernetes ConfigMap with a cron job that purged logs older than seven days and re‑started the pods to pick up the new handler.

**Result** – The log size dropped from 4 GB to <200 MB per node, eliminating disk stalls and cutting nightly backup time by 35 %. I also gained a reusable rotation pattern that now powers all our services. This experience taught me how to balance operational simplicity with strict SLAs in a production ML environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
