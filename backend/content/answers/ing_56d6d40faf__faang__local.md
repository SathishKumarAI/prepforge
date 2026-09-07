---
qid: ing_56d6d40faf__faang__local
question: What Happens to Old Log Files? — What Is Log Rotation and How Does It Work?
  | Mezmo
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 503
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:05:56-05:00'
sources: []
---

**Clarify**  
We’re asked how a system handles “old log files” – specifically what *log rotation* is and the mechanics behind it. I’ll assume: we’re dealing with application or OS logs that grow unbounded, need to be archived for compliance, and are managed by a daemon like `logrotate` on Linux.

**Approach**  
1. Define log rotation.  
2. Explain typical triggers (size, time).  
3. Walk through the rotation cycle: rename, compress, archive, create new file.  
4. Mention cleanup policies.  

**Depth**  
Log rotation is a background process that limits disk usage and preserves historical data. It watches target files for a *trigger*—either a size threshold (e.g., 100 MB) or a time boundary (daily/weekly). When triggered, the daemon:

1. **Closes** the current file descriptor so no more writes occur.  
2. **Renames** the file to include a suffix (`app.log.1`, `app.log-2024-09-06`).  
3. **Compresses** the renamed file (gzip, bzip2) if configured, reducing space.  
4. **Creates** a brand‑new empty log file with the original name and reopens it for the application.  

Retention is handled by an *expire* rule: after N rotated copies or days, old archives are deleted or moved to cold storage (S3, tape). The daemon can also run custom scripts (`postrotate`, `prerotate`) to signal services to reopen logs.

**Edge Cases**  
- **File locks**: ensure the app can reopen the file; otherwise use `copytruncate`.  
- **Concurrent writes** during rotation may lose entries.  
- **High‑frequency logs** could trigger rotations too often, causing overhead.  
- **Disk failures** during compression need rollback logic.

**Optimize & Communicate**  
We can tune thresholds to balance disk usage vs. I/O cost, use `copytruncate` for non‑reopenable apps, and leverage cloud lifecycle policies for archival. In an interview, I’d highlight how this pattern scales: each service writes locally, rotations keep footprint bounded, and archival meets compliance without manual intervention. This demonstrates both system reliability and operational efficiency—key FAANG concerns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
