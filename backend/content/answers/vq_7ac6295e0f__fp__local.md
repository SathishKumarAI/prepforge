---
qid: vq_7ac6295e0f__fp__local
question: How many blocks forms extents, extent form segments?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 514
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:42:30-05:00'
sources: []
---

In a database the *basic unit of allocation* is the **block** – the smallest chunk that can be read or written atomically.  
A **segment** (table, index, partition) is a logical collection of blocks that must be contiguous to guarantee fast I/O and predictable space usage.  
Because allocating millions of single blocks would waste metadata and cause fragmentation, Oracle groups consecutive blocks into an **extent**: the smallest allocation unit for a segment.  

Why this grouping?  
1. **Optimization (amortized cost)** – The overhead of tracking a block (allocation bitmap, extent list) is paid once per extent, not per block.  
2. **Geometry (contiguity)** – Extents are contiguous so that the buffer cache can prefetch pages in large strides, reducing seek time on spinning disks or memory bandwidth on SSDs.  
3. **Probability (fragmentation risk)** – If each block were allocated independently, the probability of finding a long free run decreases exponentially with the number of blocks needed. By allocating extents, we guarantee a run of at least *n* blocks in one go.

**How many blocks form an extent?**  
It depends on the **block size** (commonly 8 KB) and the **extent size** chosen by the DBA or defaults:  
- *Small tablespaces*: 64‑128 blocks per extent.  
- *Large tablespaces*: 256–512 blocks per extent.

The database records the extent’s starting block, length in blocks, and segment id in the data dictionary; this allows a segment to be described as a sequence of extents.

**How many extents form a segment?**  
A segment can contain any number of extents, from one (for tiny objects) up to thousands for large tables. The database grows the segment by adding extents as needed, guided by *extent allocation policy* (fixed, auto‑extend).  

**Non‑obvious insight:**  
Because each extent’s size is fixed within a segment, the *effective density* of usable space can be higher than 100 %: Oracle keeps an “overhead” block in every extent that stores metadata. Thus, a segment may actually use more blocks than its logical row count would suggest—an effect invisible to users but critical for storage planning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
