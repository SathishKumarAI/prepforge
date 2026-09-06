---
qid: vq_2ab5909e7c__faang__local
question: What are the two types of fragmentation?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 478
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:03:39-05:00'
sources: []
---

**Clarify**

> *What is “fragmentation” in a database or file‑system context, and why does it matter?*  
> I’ll assume the question refers to **storage fragmentation** that degrades read/write performance and storage efficiency.

**Approach**

1. Identify the two common fragmentations: *internal* vs *external*.  
2. Explain each with an example.  
3. Mention impact on I/O, space, and maintenance overhead.  
4. Touch on mitigation strategies (defragmentation, compaction).

**Depth**

| Type | Definition | Example | Impact |
|------|------------|---------|--------|
| **Internal fragmentation** | Unused space inside allocated units (pages, blocks). Occurs when data objects are smaller than the allocation granularity. | A 4 KB page holds a 1 KB record → ~3 KB wasted. | Reduces effective capacity; increases I/O due to more pages per object. |
| **External fragmentation** | Gaps between allocated units caused by variable‑size allocations/deletions. | After deleting a large file, free space is split into many small holes that can’t satisfy new large writes. | Decreases throughput, forces costly compaction or reallocation; may lead to disk full despite apparent free space. |

*Mitigation*: Use larger page sizes for internal fragmentation, and run periodic defragmentation/compaction for external fragmentation.

**Edge Cases**

- *Tiny objects in a B‑tree leaf node*: can cause high internal fragmentation if the node is fixed size.  
- *Highly fragmented SSDs*: wear‑leveling may mask fragmentation but still hurts performance.  
- *Database engines with variable‑length pages* (e.g., PostgreSQL’s TOAST) reduce internal fragmentation.

**Optimize & Communicate**

I’d emphasize that while internal fragmentation is largely a design choice (page size, record packing), external fragmentation requires ongoing maintenance. In practice, modern systems use techniques like **log‑structured merge trees** or **append‑only logs** to sidestep external fragmentation entirely. I would finish by noting how understanding these two types guides storage‑layer tuning and informs decisions on backup/restore strategies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
