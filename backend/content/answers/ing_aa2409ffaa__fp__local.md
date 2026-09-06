---
qid: ing_aa2409ffaa__fp__local
question: 'Explain: Prompt injection and RAG poisoning — MemoryGraft: Persistent Compromise
  of LLM Agents via Poisoned Experience Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 406
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:06:51-05:00'
sources: []
---

**Prompt injection** is a *control‑theory* problem for language models: the user supplies an input that nudges the LLM’s policy network toward an undesired state, analogous to injecting a disturbance into a closed‑loop system. Because the model learns from every token it sees, a malicious prompt can become part of its “experience base,” biasing future generations.

**RAG poisoning (Retrieval‑Augmented Generation)** turns this into a *memory‑tampering* attack. In RAG pipelines, an LLM queries a document store to retrieve evidence before generating text. If an attacker injects poisoned documents that are repeatedly retrieved, the model’s “contextual memory” becomes corrupted. The agent then behaves consistently according to the poison because the retrieval mechanism acts as a recurrent state‑update: every generation re‑inserts the same biased facts.

**MemoryGraft** formalises this persistent compromise. Think of the LLM as a stochastic dynamical system with an internal hidden state \(h_t\). Retrieval injects external observations \(r_t\) that influence \(h_{t+1}\). By planting a *fixed point* in the retrieval space (poisoned documents), the attacker forces \(h_t \to h^\*\) regardless of the user prompt. This is analogous to an attractor basin in dynamical systems: once entered, the system stays there.

**Non‑obvious insight:** The attack’s success hinges on *retrieval frequency*, not just document quality. Even weakly poisoned text can dominate if it appears often enough because retrieval algorithms prioritize relevance scores; a single high‑scoring poison can eclipse legitimate evidence. Thus, defending RAG systems requires monitoring *query distribution* and ensuring that the retrieval graph does not contain recurrent loops pointing to malicious nodes—an approach more robust than filtering content alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
