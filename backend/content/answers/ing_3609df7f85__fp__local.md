---
qid: ing_3609df7f85__fp__local
question: 'Explain: Walk me through an LLM feature you shipped end to end.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 452
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:59:20-05:00'
sources: []
---

**Feature:** *Context‑aware prompt completion for legal drafting*  
*(shipped in the Q2 2024 release of our LLM platform)*  

---

### The problem we solve  
Legal teams spend hours rewriting boilerplate clauses while ensuring compliance with jurisdiction‑specific statutes. A naïve language model can generate generic text, but it often omits critical regulatory constraints or misplaces jurisdictional qualifiers. We needed a system that *automatically* inserts the correct legal framing based on minimal user input.

### Why the architecture must be this way  

1. **Multi‑task conditioning** – The model is trained to accept two inputs:  
   - a short *prompt* (“non‑disclosure clause for California”)  
   - a *knowledge base vector* encoding jurisdictional statutes.  
   This follows the principle of *conditional probability*: \(P(\text{output}|\text{prompt},\text{context})\). By conditioning on both, we reduce entropy in the output distribution and enforce compliance constraints.

2. **Sparse retrieval‑augmented generation (RAG)** – We index statute passages with BM25, then retrieve the top‑k vectors. Sparse weights keep inference cheap while still grounding the text in real statutes.  
   This mirrors *information‑theoretic* compression: we only bring in the bits that reduce uncertainty about the legal domain.

3. **Fine‑tuned policy layer** – A lightweight classifier flags clauses that violate a hard rule (e.g., “no indemnity for intellectual property”). This is a *hard constraint* layer, ensuring zero‑probability paths are cut off—essential for legal risk mitigation.

### Non‑obvious insight  
The key innovation was **jointly learning the embedding space** for both prompts and statutes. Rather than treating them as separate modalities, we optimized a shared encoder so that the cosine similarity between prompt and statute embeddings directly correlates with *legal relevance*. This eliminates the need for heuristic rule lists and lets the model discover subtle jurisdictional nuances—an insight that most end‑to‑end LLM deployments overlook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
