---
qid: vq_e1d4035439__fp__local
question: What is the architecture in terms of a hard disk, extents and pages?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 420
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:00:59-05:00'
sources: []
---

**Why we use *pages* and *extents* on a hard disk**

A hard‑disk presents an array of **sectors** (typically 512 B or 4 KiB).  
A database cannot manage individual sectors efficiently; each I/O would be
expensive, and the OS’s file‑system overhead would dominate.  
Hence we group contiguous sectors into a *page*—the smallest unit of logical
read/write that the DB engine can request.  
Pages are the granularity at which indexes, tables, and logs are stored,
allowing *seek‑less* reads: once a page is cached in RAM, subsequent accesses
are O(1).

But allocating pages one by one would fragment disk space and inflate
metadata.  The solution is an **extent**—a contiguous block of many pages
(e.g., 32 pages).  
Extents are the unit of allocation at the file‑system level; they amortize
the cost of creating/deleting files, reduce fragmentation, and enable bulk
I/O (sequential reads/writes) that hard‑drives handle best.

**Deeper principle:**  
This is a classic *space–time trade‑off* from information theory: we sacrifice
some storage overhead (extra pages at the ends of extents) to gain predictable,
minimal I/O latency.  The extent size is chosen so that its entropy (randomness
in allocation patterns) stays low, making caching and prefetching highly
effective.

**Non‑obvious insight:**  
Because extents are contiguous, a single *extent map* can be kept in memory
and updated atomically via log‑based recovery.  This means the DB can recover
from crashes without scanning the entire file—extents give us both I/O and
recovery efficiency with one data structure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
