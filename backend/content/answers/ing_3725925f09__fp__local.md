---
qid: ing_3725925f09__fp__local
question: 'Explain: 1 Introduction — MemoryGraft: Persistent Compromise of LLM Agents
  via Poisoned Experience Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 376
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:01:41-05:00'
sources: []
---

### 1 Introduction – *MemoryGraft*: persistent compromise of LLM agents through poisoned experience retrieval

Language‑model (LLM) agents learn by **retrieving** past interactions from a stored experience buffer and conditioning their next action on that history.  
The fundamental problem is: *how can an adversary inject a subtle, long‑term bias into this retrieval loop without altering the model’s weights?*  

1. **Why persistence matters** – Once a policy has been trained on poisoned experiences, its future decisions will repeatedly consult those same memories, amplifying the attacker’s influence across generations of agents.  
2. **Why retrieval is vulnerable** – Retrieval is an *attention‑based*, data‑centric operation; it depends only on the key–value pairs stored in memory, not on the model parameters themselves. Thus, poisoning can be effected by inserting a single malicious experience that satisfies the retrieval condition for many queries.  
3. **Why a geometric attack works** – By crafting an experience whose embedding lies on the *decision boundary* of the retrieval mechanism (e.g., nearest‑neighbor or dot‑product), we force the model to retrieve it whenever the context is semantically similar, regardless of its true relevance. This exploits the underlying geometry of high‑dimensional embeddings: a tiny perturbation can shift the nearest neighbor from benign to malicious with negligible cost.  

**Non‑obvious insight:** The attack’s potency grows *sublinearly* with memory size because the poisoned entry becomes a *hub* in the embedding space; its influence is amplified by the attention distribution, making large memories more, not less, vulnerable. This reveals that scaling LLM agents without robust retrieval safeguards inherently increases their attack surface.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
