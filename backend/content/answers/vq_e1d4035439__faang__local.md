---
qid: vq_e1d4035439__faang__local
question: What is the architecture in terms of a hard disk, extents and pages?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 475
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:39:36-05:00'
sources: []
---

**Clarify**

You’re asking how a storage engine maps a physical hard‑disk into logical units—extents and pages—so we can reason about allocation, fragmentation, and I/O efficiency.  
Assumptions to confirm:  
* Disk is block‑oriented (e.g., 512 B or 4 KB sectors).  
* Engine uses fixed‑size pages (common in OLTP/OLAP systems).  
* Extents are contiguous page groups allocated together.

**Approach**

1. Define *page*: smallest unit read/written to disk.  
2. Define *extent*: a cluster of consecutive pages reserved for a table or index, reducing fragmentation and improving seek times.  
3. Map extent → physical sectors via the file system/RAID layer.  

**Depth**

- **Page size** (e.g., 4 KB) is chosen to align with disk sector multiples, minimizing partial‑sector writes.  
- **Extent size** often 64–256 pages; larger extents lower metadata overhead but can worsen fragmentation if data grows unevenly.  
- Allocation: a page‑allocation bitmap or free‑list tracks used/free pages within an extent.  
- I/O: bulk reads/writes of whole extents reduce seek latency and allow prefetching.  
- Metadata: each table has an *extent descriptor* recording start LBA, length, and usage flags.

**Edge Cases**

- Fragmentation when extents are freed but not reused → triggers defragmentation or VACUUM.  
- Page corruption: requires checksums per page; recovery may involve rolling back to previous extent snapshot.  
- Huge objects exceeding single‑extent size → spill to overflow pages or external storage.

**Optimize & Communicate**

- Use *extent pooling* (pre‑allocate large blocks) for write‑heavy workloads.  
- Compress extents on disk if read‑only or infrequently updated.  
- Explain trade‑offs: larger extents = fewer I/O ops but higher waste; smaller extents = more metadata but better space utilization.  

This architecture balances performance, reliability, and storage efficiency—key considerations in a FAANG data‑engineering stack.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
