---
qid: ing_73d3be26d3__fp__local
question: 'Explain: Corrective RAG (CRAG) — Agentic Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 416
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:11:18-05:00'
sources: []
---

**Corrective Retrieval‑Augmented Generation (CRAG)** is a principled method for making *retrieval‑augmented generation* (RAG) truly *agentic*: the model can decide when to trust its own internal knowledge versus external documents and correct any mis‑retrievals before generating text.

---

### From the fundamental problem  
A vanilla RAG system concatenates retrieved passages with a language model’s prompt. The LM then generates an answer that may blindly repeat noisy or irrelevant snippets, because it has no mechanism to assess retrieval quality. In safety‑critical domains this leads to hallucinations and misinformation.

### Why CRAG must work as it does  
1. **Two‑stage decision** – First, the *retrieval policy* selects documents; second, a *correction policy* evaluates each candidate against an internal knowledge base (or a sanity‑check decoder).  
2. **Reinforcement signal** – The correction stage receives a reward that penalizes hallucinated facts and rewards faithful grounding. This is equivalent to optimizing a *variational lower bound* on the joint likelihood of correct answers given both retrieved and internal evidence.  
3. **Information bottleneck** – By compressing the retrieved set into a “corrected” representation, CRAG enforces an information‑theoretic trade‑off: retain only what is necessary for accurate generation.

### Non‑obvious insight  
The correction policy can be implemented as a lightweight *self‑critical* discriminator that operates on token‑level embeddings. Surprisingly, training this discriminator with **contrastive loss** between true and hallucinated tokens yields far better robustness than cross‑entropy because it explicitly maximizes mutual information between the corrected context and the final answer.

Thus CRAG turns RAG from a passive retrieval engine into an *active* knowledge‑grounded agent that self‑rectifies, grounded in optimization, geometry of embeddings, and probability theory.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
