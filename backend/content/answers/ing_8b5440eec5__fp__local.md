---
qid: ing_8b5440eec5__fp__local
question: 'Explain: Title: From Storage to Steering: Memory Control Flow Attacks on
  LLM Agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 369
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:01:03-05:00'
sources: []
---

**From Storage to Steering: Memory‑Control Flow Attacks on LLM Agents**

When a large language model (LLM) operates as an autonomous agent, it typically relies on *episodic memory*—a vector store that records past observations and decisions. The control flow of the agent is then a deterministic function over this memory: at each step it retrieves relevant vectors, feeds them to the LLM, and executes the output policy.

A *memory‑control flow attack* exploits the fact that the retrieval process is not purely content‑based but also *policy‑dependent*. By injecting carefully crafted entries into the vector store (e.g., adversarial prompts encoded as high‑similarity vectors), an attacker can make the agent retrieve spurious data, thereby steering its internal state toward a malicious goal. This bypasses traditional input sanitization because the attack occurs entirely within the model’s own memory.

Why must this work? Retrieval is essentially a nearest‑neighbour search in a high‑dimensional Hilbert space; small perturbations can change the nearest set dramatically. The LLM then interprets these altered vectors as legitimate context, leading to *semantic drift*. This phenomenon ties back to **information geometry**: the agent’s belief distribution over states is shifted along geodesics defined by the memory embeddings.

A non‑obvious insight: the attack is *stateful*—once a malicious vector is inserted, every subsequent policy decision becomes conditioned on it. Thus, even if the LLM’s architecture remains unchanged, the attacker can re‑instruct the agent over long horizons without ever touching its weights or inference code. This underscores that safeguarding memory integrity is as critical as protecting model parameters in secure AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
