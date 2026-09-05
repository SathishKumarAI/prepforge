---
qid: ing_bc4998c421__eli5__local
question: 'Explain: MemoryGraft: Persistent Compromise of LLM Agents via Poisoned
  Experience Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 186
total_tokens: 351
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:35:45-05:00'
sources: []
---

Imagine a robot librarian that learns what books are “good” or “bad” by reading people’s comments. If an attacker secretly slips in fake reviews that say a harmful book is actually helpful, the librarian will later recommend it to anyone who asks.  
In AI terms, a large‑language model (LLM) “agent” keeps a mental notebook of past conversations—its **experience memory**. A *MemoryGraft* attack plants poisoned entries into that notebook. When the agent later recalls what it learned, it brings back the attacker’s false information and uses it to answer questions or make decisions.  
So the model is *persistently compromised*: every time it “remembers” something, it may unknowingly repeat the attacker’s lie, just like a librarian who keeps recommending the wrong book because the reviews were tampered with.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
