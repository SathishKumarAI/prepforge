---
qid: ing_8c3a2cce92__fp__local
question: 'Q: When would you use a Disk-based index (like DiskANN) over a RAM-based
  index (HNSW)?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 462
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:03:13-05:00'
sources: []
---

**Why the choice matters**

When we search for nearest neighbors in high‑dimensional space, every query point must be compared against a *graph* of candidate vectors.  
The graph’s size is bounded by memory: each node stores a list of its k‑nearest neighbors (links).  
If the full dataset cannot fit into RAM, the graph itself must reside on disk; otherwise we would have to load it in its entirety for every query.

**Fundamental trade‑off**

1. **Latency vs. Capacity** – A RAM‑based HNSW offers sub‑millisecond queries because all links are instantly accessible.  
   DiskANN sacrifices a factor of ~10–30× latency, but scales to terabytes because the link table is streamed in blocks.

2. **Compression vs. Precision** – DiskANN builds an *approximate* graph on disk that can be compressed (e.g., by quantizing coordinates or using succinct neighbor lists).  
   This reduces I/O bandwidth at the cost of a tiny increase in recall, which is acceptable when the dataset size dominates latency constraints.

3. **Optimization principle** – The search problem is an *online optimization* over a discrete graph.  
   When memory is limited, we must optimize for *I/O‑efficiency*: the graph structure should minimize disk seeks while still preserving high‑quality neighbor links. DiskANN achieves this by precomputing *multi‑level* indexes and using locality‑preserving hash tables.

**Non‑obvious insight**

The key advantage of a disk index is not merely “more space”, but that it turns the **search problem into an offline‑preprocessing problem**: you can afford to spend hours building a highly compressed, multi‑resolution graph because queries will later read only the few blocks needed for their local region. In contrast, RAM indexes must be *incrementally* updated on the fly, limiting how aggressively they can compress or refine.

In short: use DiskANN when your dataset exceeds available RAM and you can tolerate higher latency; use HNSW when you need ultra‑fast queries and have enough memory to hold the full graph.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
