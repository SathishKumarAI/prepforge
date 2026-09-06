---
qid: ing_de7510e97b__fp__local
question: 'Explain: Master-slave and master-master — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 210
output_tokens: 444
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:52:48-05:00'
sources: []
---

**Why do we need two “masters”?**  
In a replicated data store the fundamental problem is *consistency* versus *availability*.  
If only one node (the **master**) accepts writes, any failure of that node forces
a temporary loss of write service—violating availability.  
Letting every replica accept writes (**master‑master**) restores availability but
introduces *conflict*: two replicas may concurrently modify the same key,
creating divergent histories.

**Derivation from first principles**

1. **Consistency model**: We want *serializability* (operations appear in some order).  
2. **Availability**: The system should continue to serve requests even if a subset of nodes fails.  
3. **Partition tolerance** (CAP): In a network partition we must choose between 1 and 2.

A master‑slave layout satisfies consistency but sacrifices availability during
partitions. A master‑master layout keeps the system alive but must resolve conflicts,
which is essentially an *optimization* problem: find a deterministic rule that
chooses one of multiple concurrent updates with minimal loss (e.g., last-writer-wins,
vector clocks + application merge).

**Non‑obvious insight**  
The choice of conflict resolution strategy is not just a “policy” but a
probabilistic inference problem.  
If writes are sparse and network latency low, the *expected* number of conflicts is
negligible; thus we can adopt a cheap “last-writer-wins”.  
When write traffic is dense or latencies high, conflicts become frequent,
and the system must invest in richer metadata (vector clocks) to reduce *entropy*
in the final state—an application of information theory: fewer bits of
uncertainty mean less work during reconciliation.

In short, master‑slave guarantees deterministic consistency at the cost of
availability; master‑master restores availability by turning the conflict
resolution into an optimization over probabilistic histories.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
