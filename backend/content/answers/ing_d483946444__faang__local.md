---
qid: ing_d483946444__faang__local
question: What is the difference between short-term and long-term memory in agents?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 531
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:54:06-05:00'
sources: []
---

**Clarify**  
We’re asked how an intelligent agent’s *short‑term* versus *long‑term* memory differ.  
Assumptions: the agent is a software system (e.g., RL or planning), not biological; “memory” refers to data structures that store observations and knowledge over time.

**Approach**  
1. Define each memory type in terms of purpose, persistence, capacity, and retrieval mechanism.  
2. Explain how they interact during perception–action cycles.  
3. Mention typical implementations (buffers, replay buffers, knowledge graphs).  

**Depth**  
| Short‑Term Memory | Long‑Term Memory |
|-------------------|------------------|
| **Scope** – Holds recent observations or state slices needed for immediate decision making. | **Scope** – Stores generalized facts, models, and past episodes for future inference. |
| **Lifetime** – Seconds to minutes; discarded after use or overwritten (e.g., a sliding window). | **Lifetime** – Persistent across sessions; updated incrementally but rarely purged. |
| **Capacity** – Small, often bounded by a queue or ring buffer. | **Capacity** – Large; may be indexed via hashing or database storage. |
| **Retrieval** – Online, low‑latency lookups (e.g., stack of last N actions). | **Retrieval** – May involve search, inference, or neural retrieval mechanisms; higher latency acceptable. |
| **Use case** – Planning in a local horizon, sensor fusion, short‑term planning. | **Use case** – Learning policies, knowledge base updates, transfer learning across tasks. |

In practice, an agent feeds its short‑term buffer into the policy network, while the long‑term memory is queried to shape priors or reward shaping.  

**Edge Cases**  
*High‑noise streams* can corrupt short‑term buffers; we’d need filtering or redundancy.  
*Memory bloat* in long‑term storage may require pruning or summarization (e.g., experience replay sampling).  

**Optimize & Communicate**  
To improve efficiency, implement *experience replay* that samples from long‑term memory to train the policy while keeping short‑term memory lightweight. Communicate this trade‑off clearly: “We keep a 1 k‑item FIFO for real‑time decisions and a disk‑backed graph for lifelong learning.” This demonstrates structured reasoning, clear communication, and depth—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
