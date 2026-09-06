---
qid: ing_d5a23c465c__fp__local
question: 'Explain: 2013 - Persistence — How Redis Architecture Evolved'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 440
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:34:31-05:00'
sources: []
---

### From “Fast in‑memory” to “Durable yet swift”

The core problem Redis had to solve was **durability without sacrificing latency**.  
Initially it only kept data in RAM, so a crash wiped everything – acceptable for caches but not for databases.  
To add persistence two primitives emerged:

| Year | Mechanism | Why it works |
|------|-----------|--------------|
| 2009 | **RDB snapshots** | A single `BGSAVE` forked the process and flushed memory to disk as a binary dump. The main thread stayed responsive; the child wrote sequentially, keeping I/O linear. |
| 2013 | **AOF (Append‑Only File)** | Every write command was appended to a log. This gave *stronger durability* (every operation survived) but risked huge files and slow recovery. |
| 2013‑14 | **Hybrid** | Redis began offering an *AOF with rewrite* (compact the log in background) and a *configurable RDB+ AOF combo*, letting users pick the trade‑off that matched their latency vs. safety needs. |

#### Deeper principle  
Both schemes are **incremental checkpoints**—they convert a mutable in‑memory structure into an immutable on‑disk representation by *copying only changed parts*. This is the same idea behind copy‑on‑write file systems and version control.

#### Non‑obvious insight  
The AOF rewrite runs *in background* using the same forked‑process trick as RDB, so the main thread never stalls. Thus Redis achieves **zero downtime durability**: a crash may lose at most one second of writes (configurable), but normal operation is unaffected. This subtle use of operating‑system semantics is what allowed Redis to scale from cache to production database without a fundamental redesign.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
