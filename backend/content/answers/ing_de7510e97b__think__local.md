---
qid: ing_de7510e97b__think__local
question: 'Explain: Master-slave and master-master — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 527
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:39:45-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**  
- Identify that “master‑slave” vs “master‑master” refers to data replication topologies in distributed systems (often used with databases, caches, or Git).  
- Assume the reader knows basic concepts of replication, consistency, and fault tolerance.  
- Decide whether to focus on database replication or Git branching; here we’ll treat it as a general replication pattern.

**2️⃣ Adopt a mental model / framework**  
Use the classic *replication* triad: **Primary (master)** → *Secondary nodes*.  
- *Master‑slave*: single primary, multiple read replicas.  
- *Master‑master*: multiple primaries that can all accept writes and synchronize with each other.

Create a diagram in mind: one node labeled “Primary” pointing to many “Replica” nodes; for master‑master, two (or more) primaries pointing at each other or sharing a cluster view.

**3️⃣ Step‑by‑step reasoning toward the answer**  
a. Define what a *master* does (writes, coordinates).  
b. Explain *slave/replica*: reads only, receives updates via asynchronous replication, used for load‑balancing and failover.  
c. Contrast with *master‑master*: all nodes can write; conflict resolution strategies (vector clocks, last‑writer‑wins, application logic).  
d. Discuss trade‑offs: consistency vs availability, latency, complexity of conflict handling.  
e. Provide concrete use cases: read‑heavy workloads → master‑slave; geo‑distributed writes or high availability → master‑master.

**4️⃣ Common traps to avoid**  
- Mixing “master” with Git terminology (branching) can confuse readers; keep the focus on replication topologies.  
- Over‑simplifying conflict resolution; note that real systems use sophisticated protocols (e.g., Raft, Paxos).  
- Forgetting to mention failure scenarios: a slave can become master if primary fails.

**5️⃣ Sanity‑check & communicate**  
- Re‑explain in one sentence: “Master‑slave has one writer and many readers; master‑master lets every node write, trading consistency for availability.”  
- Ask the audience: “What happens to data consistency when a slave goes offline?” If they answer correctly, you’ve conveyed the core idea.  

By following these steps, you can systematically explain the difference between master‑slave and master‑master replication patterns in any distributed system context.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
