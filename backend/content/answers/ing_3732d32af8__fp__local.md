---
qid: ing_3732d32af8__fp__local
question: 'Explain: Step 4: Scale the design — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 211
output_tokens: 427
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:01:50-05:00'
sources: []
---

**Why “Scale the Design” is a separate, indispensable step**

When you first sketch a system (Step 1) you’re solving an *optimization* problem: “Minimize cost while satisfying functional requirements.” That yields a *conceptual architecture*.  
But real‑world traffic is not static; it grows multiplicatively. If you keep the same constraints and let load double, your objective changes from “cost” to “throughput + latency”. The design must now satisfy **capacity** (how many requests per second can be handled) and **resilience** (failures should be isolated).  

Mathematically, scaling is a *constraint‑relaxation* of the original optimization: you add new variables—horizontal replicas, sharding keys, caching layers—and new constraints—network bandwidth limits, eventual consistency windows. The solution space expands dramatically; naïve replication can introduce **stale data** (a violation of *causality*) or **partitioning bias** (skewed key distributions).  

The deeper principle is *information theory*: a system’s throughput is bounded by the Shannon capacity of its communication channels. If you want to double the user base, you must either increase channel bandwidth (e.g., load balancers) or compress information (caching, compression), each with trade‑offs in latency and consistency.  

**Non‑obvious insight:**  
People often think scaling is just “add more servers.” In practice, *the key to scalable design is the **distribution of state***. A monolithic service that holds all user sessions on one node will fail under any load spike; a distributed session store with consistent hashing and sticky routing can keep per‑node memory bounded while still offering near‑instantaneous reads. The choice between *sharding* vs *replication* is not arbitrary—it hinges on whether your workload is write‑heavy (favor sharding) or read‑heavy (favor replication). Recognizing this early lets you avoid costly redesigns later.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
