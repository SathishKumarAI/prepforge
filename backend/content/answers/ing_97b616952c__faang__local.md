---
qid: ing_97b616952c__faang__local
question: 'Explain: Data replication explained: Types, examples & use cases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 617
total_tokens: 851
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:37:39-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise yet complete description of *data replication* in distributed systems: what it is, the main types (synchronous vs asynchronous, master‑slave, multi‑master), concrete examples (e.g., PostgreSQL streaming, MongoDB replica sets), and typical use cases (high availability, disaster recovery, read scaling). I’ll confirm that they’re looking for both technical depth and real‑world context.

**Approach**  
1. Define replication.  
2. List the core types with their trade‑offs.  
3. Give a quick example of each type.  
4. Map use cases to the appropriate type, noting latency, consistency, and cost considerations.

**Depth**  

| Type | Mechanism | Consistency | Latency | Example | Typical Use Case |
|------|-----------|-------------|---------|---------|------------------|
| **Synchronous master‑slave** | Write propagates to all replicas before acking client. | Strong (linearizable). | High (depends on farthest replica). | PostgreSQL streaming replication with `synchronous_commit`. | Mission‑critical OLTP where data loss is unacceptable (e.g., banking). |
| **Asynchronous master‑slave** | Master writes locally, replicates in background. | Eventual; possible lag. | Low. | MySQL GTID replication. | High‑throughput workloads that can tolerate brief inconsistencies (e-commerce catalog updates). |
| **Multi‑master (bi‑directional)** | Any node accepts writes; conflicts resolved via vector clocks or last‑write‑wins. | Depends on conflict resolution strategy; often eventual. | Moderate. | CouchDB replication, Cassandra hinted handoff. | Geo‑distributed apps needing low latency writes everywhere (global chat). |
| **Quorum‑based** | A write must reach a majority of nodes before commit. | Configurable (strong if quorum ≥ majority). | Variable. | Apache ZooKeeper, DynamoDB with conditional writes. | Services requiring high availability with tunable consistency (key‑value stores). |

**Edge cases**  
- *Network partitions*: synchronous replication fails; asynchronous may continue locally, risking split‑brain.  
- *Clock skew*: multi‑master conflict resolution can misorder events if clocks drift.  
- *Write amplification*: replicating every write to many nodes burdens I/O and storage.

**Optimize & Communicate**  
To improve the answer, I’d mention *replication lag monitoring* (e.g., `pg_stat_replication`), *read‑only replicas* for scaling reads, and *automatic failover* in replica sets. In an interview, I would narrate: “Start with a definition, then systematically compare types on key axes, illustrate each with an industry example, and finally tie them to concrete business problems.” This showcases structured thinking, clear communication, and depth—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
