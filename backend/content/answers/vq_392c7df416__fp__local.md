---
qid: vq_392c7df416__fp__local
question: what is difference between DAG & Lineage?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 387
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:31:17-05:00'
sources: []
---

**From first principles**

A *Directed Acyclic Graph* (DAG) is a **model of computation**: nodes are atomic transformations, edges encode the flow of data and the order in which those transformations must occur. Its acyclicity guarantees that every task can be scheduled without circular dependencies—essential for deterministic execution.

*Lineage*, on the other hand, is an *audit trail* about how a particular datum arrived at its current state. It records, for each record or batch, the exact sequence of operations (nodes) and their parameters that produced it. Lineage answers “who changed this data?” rather than “what must be run?”

**Why they differ**

- **Purpose**: DAG = *planning*; lineage = *tracking*.  
- **Granularity**: DAGs are coarse‑grained schedules, while lineage can be record‑level (even field‑level).  
- **State**: A DAG exists before execution; lineage is generated during or after execution.

**Deeper principle**

Both stem from the same graph theory but serve distinct optimization layers. The DAG provides *structural* constraints for parallelism and fault tolerance, while lineage supplies *information‑theoretic* provenance needed for reproducibility, debugging, and regulatory compliance.

**Non‑obvious insight**

A single execution engine can maintain a *dynamic* lineage that is itself a DAG: each new record traverses a sub‑DAG of the master DAG. Thus, lineage can be exploited to accelerate re‑execution—by pruning the master DAG to only those nodes touched by affected records—turning provenance into an optimization tool rather than just documentation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
