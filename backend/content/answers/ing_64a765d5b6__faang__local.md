---
qid: ing_64a765d5b6__faang__local
question: 'Q: How do you handle "Memory Fatigue" where an agent brings up too many
  irrelevant past details?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 397
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:38:15-05:00'
sources: []
---

**Clarify**  
You’re asking how to mitigate *memory fatigue*—when a conversational AI keeps surfacing stale or unrelated historical facts that clutter the dialogue.  
Assumptions:  
1. The agent stores a finite history (e.g., last N turns).  
2. “Irrelevant” is defined by the user’s current intent or a relevance model.  

**Approach**  
1. *Relevance scoring* for each memory slot.  
2. *Selective forgetting*—drop low‑score items.  
3. *Contextual gating*—only expose high‑confidence memories during generation.  

**Depth**  
- **Score each memory** with a lightweight neural relevance model (e.g., bi‑directional encoder comparing memory to current query).  
- Maintain a priority queue of top‑k memories; if the queue exceeds capacity, evict the lowest‑scored ones (FIFO among equals).  
- During decoding, mask out tokens that originate from evicted memories, ensuring they don’t bias logits.  
Complexity: O(N) scoring per turn, but can be batched or cached to stay < 10 ms on modern GPUs.  

**Edge Cases**  
- *Topic drift*: a user may later bring up a previously irrelevant fact; the model should re‑ingest it if relevance spikes.  
- *Ambiguous queries*: rely on fallback heuristics (e.g., ask clarifying question).  
- *Cold start*: seed with default context to avoid empty memory.  

**Optimize & Communicate**  
Explain that this strategy balances recency, relevance, and computational budget—key for production‑grade agents. Highlight that the forgetting policy can be tuned per domain (e.g., medical vs. casual chat) and that monitoring recall/precision on held‑out dialogs guides fine‑tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
