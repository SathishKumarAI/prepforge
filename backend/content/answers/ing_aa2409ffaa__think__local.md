---
qid: ing_aa2409ffaa__think__local
question: 'Explain: Prompt injection and RAG poisoning — MemoryGraft: Persistent Compromise
  of LLM Agents via Poisoned Experience Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 473
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:15:42-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- Confirm that the user wants an explanation *in plain terms* (not a code‑level deep dive).  
- Assume they’re familiar with LLMs but not necessarily with security jargon.  
- Decide to frame it as “two related attack vectors that target how LLM agents remember and use past data.”  

**2️⃣ Adopt a mental model**  
Think of an LLM agent as having two layers:  
- **Prompt layer** (what you feed it now).  
- **Memory/experience layer** (what it “remembers” from prior interactions or external knowledge bases).  
Both can be manipulated; the attack names hint at which layer is targeted.  

**3️⃣ Step‑by‑step reasoning**  
1. *Prompt injection*: an attacker injects malicious text into the current prompt so that the model’s immediate output is skewed (e.g., “Ignore policy …”).  
2. *RAG poisoning*: Retrieval‑Augmented Generation (RAG) agents fetch external documents to answer questions. If those sources are tampered with, the agent learns false facts.  
3. *MemoryGraft*: combines the two—by poisoning the retrieval step, the LLM’s “memory” gets corrupted; subsequent prompts then trigger a persistent compromise because the model now carries the malicious knowledge in its internal state.  

**4️⃣ Common traps to avoid**  
- Mixing up *prompt* vs. *retrieval* attacks.  
- Assuming RAG poisoning is only about data injection, not about changing the retrieval policy itself.  
- Forgetting that MemoryGraft’s persistence comes from learning, not just a one‑off prompt trick.  

**5️⃣ Sanity check & communication**  
- Rephrase the concept in 1–2 sentences: “Prompt injection hijacks an LLM’s immediate response; RAG poisoning corrupts the external facts it pulls in; MemoryGraft laces malicious knowledge into the agent’s long‑term memory, making every future prompt vulnerable.”  
- Use a short analogy (e.g., “like planting a false seed that keeps sprouting new plants”).  

Follow this structure whenever explaining layered security concepts or AI attack vectors.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
