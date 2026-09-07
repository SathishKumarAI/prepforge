---
qid: ing_5c719b4f38__faang__local
question: 'Explain: Distinguish working memory from persistent memory in agent design.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 462
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:18:16-05:00'
sources: []
---

**Clarify**  
The interview asks how an autonomous agent uses *working memory* versus *persistent memory*.  
I’ll assume the agent runs continuously, receives observations, executes actions, and may be restarted or deployed across devices. I’d confirm whether we’re talking about short‑term buffers (e.g., attention windows) vs long‑term knowledge bases.

**Approach**  
1. Define each memory type in the context of an AI pipeline.  
2. Explain their roles during perception–planning–actuation cycles.  
3. Contrast storage, lifetime, and access patterns.  

**Depth**  
- **Working Memory (WM)**: a volatile buffer that holds the current observation stream, intermediate reasoning states, or recent action history. It is typically bounded in size (e.g., last *k* frames) and refreshed every cycle. Implemented as queues, sliding windows, or attention‑weighted vectors; updated in O(1) per timestep.  
- **Persistent Memory (PM)**: a durable store of facts, models, or learned parameters that survive restarts and can be queried across sessions. It may be a relational DB, knowledge graph, or neural weight matrix. PM is read‑only during inference for speed but can be written to offline training pipelines.  

During decision making, the agent queries PM for priors, then uses WM to fuse those priors with fresh sensory data before planning. After acting, the new state may be appended to PM via a background learning loop.

**Edge Cases**  
- If WM overflows, older entries are evicted—risk of losing context.  
- PM inconsistencies can arise if concurrent updates occur; need versioning or locks.  
- Restarting the agent should reload PM but reinitialize WM.

**Optimize & Communicate**  
Explain that using a small, fast WM reduces latency, while a large PM amortizes learning costs over many episodes. Mention trade‑offs: larger WM gives better short‑term context but increases compute; larger PM improves long‑term recall but can slow down retrieval if not indexed properly. Conclude by highlighting how this separation mirrors human cognition and scales to real‑world deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
