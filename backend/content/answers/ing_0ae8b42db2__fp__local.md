---
qid: ing_0ae8b42db2__fp__local
question: 'Explain: Hardware — A Cheatsheet on Database Performance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 395
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:28:40-05:00'
sources: []
---

**Hardware – a cheat‑sheet for database performance**

A database’s speed is ultimately limited by the *rate at which data can be read and written*—the same bottleneck that governs any I/O‑bound system.  
At the hardware level this rate is dictated by three intertwined factors:

| Layer | What it controls | Why it matters |
|-------|------------------|----------------|
| **CPU** | Number of cores, clock speed, cache size | Parallel query execution and in‑memory transformations; larger L1/L2 caches reduce memory stalls. |
| **Memory** | DDR bandwidth, latency, capacity | Keeps working sets resident; a 10 % reduction in DRAM latency can yield >20 % faster OLTP throughput. |
| **Storage** | Interface (SATA/PCIe/NVMe), device type (HDD vs SSD) | Determines raw I/O throughput and latency; NVMe’s queue depth ≈ 64× SATA’s, giving a 10‑fold headroom for random reads. |

The *deep principle* is that **throughput = bandwidth × efficiency**.  
A CPU may be powerful, but if the storage subsystem can’t deliver data fast enough, the CPU idles—a classic “memory wall.” Similarly, even with lightning‑fast SSDs, a memory bottleneck will throttle OLTP workloads.

### One non‑obvious insight
Modern SSDs expose *read/write amplification* curves. A database that issues many small random writes (e.g., a key–value store) can see 3× more wear and lower throughput than an equivalent sequential workload, even on the same device. Thus, *workload shape matters as much as raw spec numbers*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
