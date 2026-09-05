---
qid: ing_1a3b20bb49__fp__local
question: A user loads a 2 TB dataset with `datasets` on a 64 GB RAM machine and it
  works. How? And when does it stop working?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 469
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:02:06-05:00'
sources: []
---

### Why a 2 TB `datasets` load succeeds on a 64 GB RAM box

The fundamental problem is *how to expose an arbitrarily large data source as a Python sequence without exhausting host memory*.  
`datasets` solves this by **lazy, memory‑mapped access**:

1. **On‑demand decoding** – The loader reads only the metadata (file offsets, token counts) during initialization. No raw examples are materialised.
2. **Memory‑mapping (`mmap`)** – Each file is mapped into the process’s address space. The OS pages in 4 KiB chunks as they’re accessed, so at any instant only the hot part of the data occupies RAM.
3. **Chunked sharding** – For very large files the loader splits them into logical shards (e.g., 1 GB each). A worker processes one shard at a time, freeing it before moving to the next.

Because these steps keep the in‑memory footprint bounded by the *current batch size* plus metadata, a 2 TB corpus fits comfortably on a machine with only 64 GB of RAM.

### When it breaks

- **Virtual address exhaustion**: On 32‑bit processes or systems with limited virtual memory (e.g., Windows’ ~8 GB per process), mapping > RAM*virtual‑space fails.
- **Multiple simultaneous workers**: If several workers each map the entire file, the aggregate resident set can exceed RAM and trigger thrashing.
- **Disk I/O bottleneck**: Even though RAM isn’t a problem, sustained throughput may become the limiting factor if the storage subsystem cannot keep up with random access patterns.

---

> **Non‑obvious insight:**  
> The real power lies in *OS paging*, not Python’s memory manager. By letting the kernel decide which 4 KiB pages to load, `datasets` achieves near‑zero overhead even for terabyte datasets; the only hard limit is the virtual address space, not the physical RAM.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
