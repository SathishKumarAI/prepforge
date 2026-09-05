---
qid: ing_0fd00d3651__fp__local
question: 'Explain: Only 2 (of 3 CAP properties) possible at the same time'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 439
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:39:09-05:00'
sources: []
---

### CAP from first principles

In a distributed database each node must **store** data, **answer** queries, and **replicate** updates to other nodes.  
When the network behaves *normally* (no delays), any protocol can trivially satisfy all three goals: every write is immediately seen by all readers (**Consistency**), every read returns a value without waiting for others (**Availability**), and the system keeps working while nodes talk to each other (**Partition‑tolerance**).

A **partition** occurs when communication between two groups of nodes is lost.  
At that instant, a node in group A cannot know whether a write happened in group B.  
To preserve **Consistency**, it must refuse all reads/writes until the partition heals (thus sacrificing **Availability**).  
Conversely, to keep **Availability** it must serve requests locally and risk diverging states—breaking **Consistency**.

Formally, this impossibility is a corollary of the FLP result: in an asynchronous system with even one faulty process, no deterministic algorithm can guarantee both safety (consistency) and liveness (availability).  
Hence only two CAP properties can coexist; the third must be relaxed or sacrificed.

#### Non‑obvious insight
**Partition tolerance is not a feature you enable—it’s a requirement of any real‑world system.**  
Therefore the theorem really states: *Given an unavoidable partition, you must choose between consistency and availability.*  This clarifies why “CAP” is often misinterpreted as a tuning knob; it is actually a constraint imposed by the fundamental limits of distributed computation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
