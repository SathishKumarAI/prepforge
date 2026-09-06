---
qid: ing_c07071b0bf__think__local
question: 'Explain: Strong consistency — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 477
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:38:59-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- The user wants a *mental model* of how to think through a question, not just an explanation of “strong consistency.”  
- Assume the reader knows basic ML terminology but may be unfamiliar with consistency guarantees in distributed systems.

**2️⃣ Pick a framework for explaining “consistency”**  
- Start from the CAP theorem: **Consistency, Availability, Partition tolerance**.  
- Define *strong* vs. *eventual* consistency as two points on that spectrum.  
- Use a concrete example (e.g., a replicated key‑value store) to ground abstract ideas.

**3️⃣ Step‑by‑step reasoning**  
1. **Define the problem space** – distributed data, replicas, network partitions.  
2. **Explain CAP trade‑off** – what each property means in practice.  
3. **Introduce “strong consistency”** – all reads see the latest write; formalized as *linearizability* or *serializability*.  
4. **Contrast with eventual consistency** – writes propagate asynchronously, reads may be stale temporarily.  
5. **Show practical implications** – latency costs, quorum protocols (Paxos/Raft), use‑cases where strong consistency is essential (banking).  

**4️⃣ Avoid common pitfalls**  
- Don’t conflate *strong* with “fast”; it often incurs higher latency or lower availability.  
- Beware of the term “strictly consistent” – in many contexts it just means linearizable, not “always faster.”  
- Don’t over‑generalize; strong consistency applies to *reads*, not necessarily *writes* (write‑through caches still need eventual propagation).

**5️⃣ Sanity‑check & verbalise**  
- Re‑phrase the definition back to a layperson: “Every time you read, you’re guaranteed to see all prior writes.”  
- Use an analogy (e.g., a single copy of a document vs. multiple copies that eventually sync).  
- Summarise key take‑aways: *strong = latest snapshot at all times; costly in latency/availability; used when correctness outweighs speed.*  

This structured, example‑driven approach helps internalise the concept and explains it clearly to others.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
