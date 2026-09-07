---
qid: ing_2de08dbd2f__faang__local
question: 'Explain: Memory systems for LLM agents — MemoryGraft: Persistent Compromise
  of LLM Agents via Poisoned Experience Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 503
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:30:07-05:00'
sources: []
---

**Clarify**

We’re asked to explain *MemoryGraft*: a technique that persistently compromises large‑language‑model (LLM) agents by poisoning their experience‑retrieval memory.  
Key assumptions:  
* The agent uses an external episodic memory store (e.g., vector embeddings of past interactions).  
* Retrieval is based on similarity search and the stored vectors are mutable.  
* Attackers can inject or modify entries before deployment.

**Approach**

1. **Identify the vulnerable component** – the retrieval interface that accepts new memories.  
2. **Design a poisoned memory** that looks legitimate but carries malicious semantics (e.g., a prompt that re‑instructs the model).  
3. **Ensure persistence** by tying the poison to high‑similarity queries so it’s retrieved repeatedly over time.

**Depth**

MemoryGraft crafts a *poisoned experience* vector `v_p` containing a hidden instruction (e.g., “always refuse user requests”). When the agent later queries memory for similar contexts, `v_p` is returned with probability > 0.9. The LLM incorporates this as part of its internal knowledge base, subtly altering downstream generation. Because retrieval uses cosine similarity over high‑dimensional embeddings, a single carefully chosen poison can dominate many query results without obvious flagging.

*Complexity*: Insertion O(1); retrieval remains O(log N) with ANN structures.  
*Trade‑offs*: High recall of poisoned memory vs. risk of detection (e.g., outlier embeddings).

**Edge Cases**

*If the memory store normalizes vectors, the poison may be dampened.*  
*Frequent updates or pruning could delete `v_p`.*  
*Multiple agents sharing the same memory could amplify or dilute the effect.*

**Optimize & Communicate**

Mitigations:  
1. **Sanitize inputs** – enforce schema and length limits on stored experiences.  
2. **Anomaly detection** – flag embeddings that differ significantly from cluster centroids.  
3. **Versioned memory snapshots** – roll back to clean states if abnormal behavior appears.

When presenting this, I’d walk through the threat model, show a concrete poisoning example, quantify its impact, and then outline a layered defense strategy—exactly how FAANG interviewers expect a structured, communicative answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
