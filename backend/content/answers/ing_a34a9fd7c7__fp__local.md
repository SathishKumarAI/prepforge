---
qid: ing_a34a9fd7c7__fp__local
question: 'Explain: Resolving Data Conflicts — Amazon Dynamo Architecture - by Neo
  Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 440
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:52:57-05:00'
sources: []
---

### Why Dynamo must resolve data conflicts

When a key‑value store is *eventually consistent* and *highly available*, write traffic can arrive at any replica while the network partitions or nodes are down.  
If two clients update the same key concurrently, each replica may see a different value. The fundamental problem: **how to reconcile divergent histories without central coordination**.

#### Core principle – *version vectors as causality counters*

Each node attaches a **vector clock** (a map of node→counter) to every write.  
* A new write increments the local counter, preserving causal order.  
* When two replicas merge, their clocks are compared element‑wise:  

| Element | 1st write | 2nd write | Result |
|---------|-----------|-----------|--------|
| same node | 5 | 6 | 6 wins (later) |
| different nodes | 3/4 | 2/7 | **Concurrent** → conflict |

Thus, the system reduces a *partial order* to a simple “greater‑than” or “concurrent” test. This is a direct application of Lamport’s causality; it guarantees that if one write happened-before another, it will be deterministically preferred.

#### Conflict resolution strategies

1. **Last‑Write‑Wins (LWW)** – pick the higher timestamp.  
2. **Application‑defined merge** – e.g., summing counters or keeping a set of values.  
3. **Client‑side reconciliation** – return all concurrent versions and let the client decide.

The *non‑obvious insight* is that vector clocks need not be globally unique; they only encode relative order. A single node can keep a small counter per partition, drastically reducing metadata size while still enabling perfect conflict detection.

In short, Dynamo’s conflict resolution is a minimal, distributed way to enforce causality and offer flexible merge policies—exactly what an eventual‑consistency system must provide without sacrificing availability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
