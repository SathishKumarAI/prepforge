---
qid: ing_c57adc45e3__fp__local
question: 'Explain: Pattern: Corrective RAG (CRAG) — Design Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 491
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:01:32-05:00'
sources: []
---

**Corrective Retrieval‑Augmented Generation (CRAG)**  
*Why we need it:* A large language model (LLM) is a powerful statistical generator but not a knowledge base. When the prompt contains an error—typo, outdated fact, or ambiguous entity—the LLM will hallucinate rather than “look up” the truth. CRAG treats the LLM as a *decoder* that must be fed correct evidence before it can produce a reliable answer.

**From first principles**

1. **Problem statement** – Given an input \(q\) and a knowledge source \(K\), we want to output \(\hat{y}\) such that  
   \[
   \Pr(\hat{y}=y^\ast | q, K)\approx 1.
   \]
2. **Decomposition** – Split the task into *retrieval* (find relevant snippets in \(K\)) and *generation* (compose answer). Retrieval is a well‑studied retrieval problem; generation is a conditional language modeling problem.
3. **Correction loop** – The “corrective” part means we iteratively refine the retrieved evidence:  
   \[
   R_{t+1}=\text{Retrieval}\bigl(q, K, R_t\bigr),
   \]
   where each step conditions retrieval on the previous evidence and the model’s partial output. This is a greedy approximation to the optimal joint posterior over evidence and answer.

**Deeper principle:**  
CRAG embodies *information bottleneck* – we compress the entire knowledge base into a minimal, task‑specific context that maximizes mutual information with the target answer while discarding irrelevant data. The iterative correction is akin to message passing in probabilistic graphical models: each round passes back “beliefs” about what evidence is missing.

**Non‑obvious insight:**  
The corrective loop can be *pre‑trained* on synthetic noise (e.g., random typos) so that the model learns a *retrieval policy* rather than just a static retrieval function. This policy generalizes to unseen errors, turning CRAG into a robust “self‑correcting” system without hand‑crafted error patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
