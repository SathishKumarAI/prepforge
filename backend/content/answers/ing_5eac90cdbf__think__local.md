---
qid: ing_5eac90cdbf__think__local
question: 'Explain: Consistency — Cloud Spanner Database - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 383
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:15:27-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   * The user wants a *conceptual* explanation—no code needed.  
   * Assume they know basic distributed DB concepts but may be new to Spanner’s consistency model.

**2️⃣ Pick a mental framework**  
   * Treat “consistency” as a spectrum: **Strong → Eventual**.  
   * Map Spanner’s design choices (TrueTime, Paxos) onto that spectrum.  
   * Think of it in terms of *read/write isolation* and *latency guarantees*.

**3️⃣ Step‑by‑step reasoning**  
   1. Define what consistency means in distributed systems.  
   2. Explain Spanner’s global clock (TrueTime) and how it bounds uncertainty.  
   3. Show how that allows Spanner to expose a *serializable* isolation level with very low read latency.  
   4. Contrast this with other DBs that only offer eventual consistency or weaker serializability.  

**4️⃣ Avoid common pitfalls**  
   * Don’t conflate “strong consistency” with “instantaneous response”; emphasize the trade‑off with latency.  
   * Be careful not to oversimplify TrueTime as a magic wand—clarify its probabilistic guarantees.

**5️⃣ Sanity‑check & communicate**  
   * Re‑read your explanation to ensure each step flows logically.  
   * Use analogies (e.g., “TrueTime is like a world‑wide synchronized stopwatch”) to make abstract ideas concrete.  
   * End with a quick recap: Spanner achieves serializable consistency by bounding time uncertainty, enabling globally consistent reads at low latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
