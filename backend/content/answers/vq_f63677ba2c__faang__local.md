---
qid: vq_f63677ba2c__faang__local
question: which will help Rdds to achieve resiliency?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 478
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:42:39-05:00'
sources: []
---

**1️⃣ Clarify**  
*Question*: “Which feature helps Spark RDDs achieve resiliency?”  
Assumptions: *Resiliency* refers to fault‑tolerance—automatic recovery from node failures while preserving data integrity.

---

**2️⃣ Approach**  
Identify the core Spark mechanism that guarantees recomputation of lost partitions.  
Explain how lineage and DAG enable this, then highlight the key feature that empowers it.

---

**3️⃣ Depth**  

Spark RDDs are **immutable**, *lazy* collections built on a **lineage graph (DAG)**.  
When a partition is lost (e.g., executor crash), Spark does **not** read from disk; instead it **re‑computes** that partition by replaying the minimal subset of transformations that produced it.  
The enabling feature is:

> **Lineage metadata** – every RDD stores the sequence of parent RDDs and the transformation applied to produce each partition.

Because lineage is kept in memory, Spark can rebuild any lost data without external checkpoints, achieving fault‑tolerance with low overhead.  

*Complexity*: Re‑computation cost equals the cost of the original transformations; no extra I/O unless checkpointing is used.  
*Trade‑off*: Large lineage chains may increase recomputation time; checkpoints trade memory for faster recovery.

---

**4️⃣ Edge Cases**  

- **Non‑deterministic transforms (e.g., `random()` or external state)** break recomputation guarantees—Spark warns that RDDs are not fault‑tolerant.  
- **Extremely long lineage** can cause stack overflows; checkpointing mitigates this.  
- **External data sources**: if an RDD reads from a non‑reliable source, recovery relies on re‑reading the source.

---

**5️⃣ Optimize & Communicate**  

In practice, we combine lineage with *checkpointing* for long pipelines and use *persist/Cache* to materialize frequently used partitions.  
When explaining this to interviewers, emphasize that **lineage metadata** is the cornerstone of RDD resiliency: it allows Spark to “heal” itself by recomputing lost data on demand, thus delivering fault‑tolerance without external storage overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
