---
qid: ing_fabe2f3186__faang__local
question: How do Rotated Log Files Look? — What Is Log Rotation and How Does It Work?
  | Mezmo
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 567
total_tokens: 812
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:23:02-05:00'
sources: []
---

**Clarify**  
The interviewer asks: *What is log rotation, and how do rotated files appear on disk?*  
Assumptions: we’re talking about Unix‑style syslog/rsyslog or a custom app using `logrotate`. The goal is to keep logs manageable without losing data.

---

**Approach**  
1. Define the concept.  
2. Explain typical naming conventions and timestamps.  
3. Outline the rotation process (trigger, rename, compress).  
4. Mention configuration knobs that affect file names.

---

**Depth**  

| Step | What happens | Typical filename pattern |
|------|--------------|--------------------------|
| **Trigger** | Size limit reached or a scheduled cron job fires. | `app.log` → triggers rotation. |
| **Rename** | Existing log is renamed to include a suffix. | `app.log.1`, `app.log.2.gz`, etc. |
| **Create new** | A fresh empty `app.log` is opened by the app or logger. | – |
| **Compress (optional)** | Older files are gzipped to save space. | `app.log.3.gz` |
| **Delete (prune)** | Files beyond a retention count are removed. | – |

Common patterns:  
- `myservice.log.<YYYYMMDD>` for date‑based rotation.  
- `myservice.log.%d-%m-%Y` in `logrotate.conf`.  
- `%s` for size suffix, `%i` for incremental index.

**Complexity**  
Rotation is O(1) per file rename; compression can be CPU intensive but runs asynchronously.

---

**Edge Cases**  

| Scenario | Issue | Mitigation |
|----------|-------|------------|
| App writes during rotation | Log entry may go to old or new file | Use `copytruncate` (copy then truncate) or signal SIGHUP. |
| Multiple processes writing same log | Race conditions | Ensure logger uses flock or atomic rename. |
| Disk full before prune | New logs fail | Configure `rotate 0` with `missingok` and monitor disk usage. |

---

**Optimize & Communicate**  
- **Batch rotation**: rotate once per hour to reduce I/O spikes.  
- **Compression level tuning**: balance speed vs. space (`compresscmd gzip -9`).  
- **Retention policy**: keep only the last 30 days or a fixed size budget.

Explain that rotated logs are simply renamed copies, often compressed and indexed by date or sequence number, allowing seamless archival while keeping current logs lightweight for real‑time monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
