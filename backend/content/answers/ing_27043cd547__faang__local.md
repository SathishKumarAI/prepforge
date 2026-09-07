---
qid: ing_27043cd547__faang__local
question: 'Explain: AOF (Append-Only File) — How Does Redis Persist Data?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 457
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:14:14-05:00'
sources: []
---

**Clarify**  
The interviewer asks how Redis’s Append‑Only File (AOF) mechanism works for persistence.  
Assumptions: we’re focusing on AOF only (not RDB), and the audience knows Redis basics.

**Approach**  
1. Explain what an AOF is.  
2. Describe how commands are logged.  
3. Cover rewrites (fsync strategies).  
4. Mention recovery steps and trade‑offs.

**Depth**  

| Step | What happens |
|------|--------------|
| **Logging** | Every write command (`SET`, `LPUSH`, etc.) is appended to the AOF as a Redis protocol line. The file grows monotonically; no truncation during writes. |
| **fsync policy** | Three policies: `always` (sync after every write – safe, slow), `everysec` (default – sync once per second – good balance), `no` (no explicit sync – rely on OS). |
| **Background rewrite** | When the AOF grows beyond a threshold or at startup, Redis forks. The child rewrites the file to its minimal representation (essential commands only) while the parent continues serving requests. After success, the child atomically renames its file over the old one. |
| **Recovery** | On restart, Redis reads the AOF sequentially and replays each command to rebuild state. If corruption occurs, it truncates at the last valid command. |

**Edge Cases**  
- *Disk full*: write errors are logged; client gets an error.  
- *Power loss during rewrite*: atomic rename protects against partial writes.  
- *High‑write workloads with `always` policy*: performance degrades.

**Optimize & Communicate**  
Highlight that `everysec` gives durability equivalent to RDB while keeping latency low. Mention that tuning the rewrite frequency or enabling `no` can improve throughput for write‑heavy use cases, but at the cost of data loss risk. Conclude by stressing that AOF offers a trade‑off between durability and performance, with clear knobs to adjust per workload.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
