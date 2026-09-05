---
qid: vq_2ab5909e7c__fp__local
question: What are the two types of fragmentation?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 401
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:28:57-05:00'
sources: []
---

In a storage system the logical unit (a table, file or record set) is mapped onto physical blocks that are laid out on disk.  
The *fragmentation* problem arises when this mapping becomes uneven: some blocks contain many active rows while others hold only obsolete ones.  Two fundamental modes of fragmentation exist:

| Type | What it represents | Why it must occur |
|------|--------------------|-------------------|
| **Internal** | Waste inside a block – the difference between the block’s fixed size and the space actually used by live data. | Blocks are allocated in powers of two (or another fixed granularity) to keep I/O simple; any residual unused bytes are inevitable unless the block size is tuned to the exact row length, which would hurt generality. |
| **External** | Physical dispersion of a logical entity across non‑contiguous blocks. | When updates or deletes free space inside a block, subsequent inserts may be placed elsewhere to avoid overwriting, especially under concurrent workloads where lock granularity limits in‑place growth. |

Both stem from the same optimization principle: *minimise I/O while keeping allocation logic tractable*.  Internal fragmentation is a consequence of fixed‑size allocation; external fragmentation arises from dynamic placement decisions that respect concurrency and locking constraints.

**Non‑obvious insight:**  
A well‑designed database can *convert* external to internal fragmentation by periodically performing **coalescing compaction**.  During this pass, the system moves live rows into a new contiguous region, freeing large unused blocks that were previously scattered as holes.  The cost of this operation is amortised over many transactions; thus, although it seems counter‑intuitive to move data, the overall throughput improves because subsequent reads and writes encounter fewer random seeks and less wasted space.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
