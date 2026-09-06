---
qid: ing_85c79301e2__think__local
question: 'Explain: Merge replication — Data replication explained: types, examples
  & use cases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 465
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:53:45-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   * Assume the reader knows basic SQL Server terminology but not the specifics of merge replication.  
   * Focus on explaining what “merge” means, how it differs from snapshot/transactional replication, and when you’d choose it.  

**2. Adopt a mental model: “Replication as a data‑flow graph.”**  
   * Treat each server as a node; edges represent the replication flow.  
   * Identify three key dimensions: **directionality**, **conflict handling**, and **refresh frequency**.  

**3. Step‑by‑step reasoning**  
   1. Define merge replication in one sentence (bi‑directional, conflict‑resolving).  
   2. List the two main types of data flow: *upstream* (publisher → subscriber) and *downstream* (subscriber → publisher).  
   3. Explain how changes are tracked with system tables/row‑versioning.  
   4. Show examples:  
      * Multi‑branch retail POS systems where each store edits inventory locally.  
      * Offline mobile apps that sync when a connection is available.  
   5. Map use cases to the three dimensions:  
      * **High latency, intermittent connectivity** → merge.  
      * **Large, append‑only logs** → transactional.  
      * **Single‑source read‑heavy** → snapshot.  

**4. Common traps to avoid**  
   * Confusing “merge” with “merge sort.”  
   * Assuming conflict resolution is automatic; emphasize that you must define rules or use custom handlers.  
   * Overlooking the overhead of maintaining merge agents and conflict logs.  

**5. Sanity‑check & verbalize**  
   * Ask: Does my explanation distinguish merge from other types?  
   * Summarize in a short sentence: “Merge replication lets multiple nodes independently change data and later reconcile those changes, making it ideal for distributed or offline scenarios.”  
   * If the answer feels too technical, add an analogy (e.g., each node writes to its own notebook; at the end they exchange notebooks and merge pages).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
