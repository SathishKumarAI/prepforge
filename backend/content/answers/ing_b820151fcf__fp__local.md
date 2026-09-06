---
qid: ing_b820151fcf__fp__local
question: 'Explain: A customer wants an assistant over their internal knowledge base
  and asks whether to fine-tune. Prompting, RAG, or fine-tuning - walk through the
  decision.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 851
total_tokens: 1046
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:35:44-05:00'
sources: []
---

**Why the choice matters**

A language model (LM) is a *probabilistic compressor* of world knowledge: it learns \(P(\text{output}\mid\text{input})\) from millions of text tokens.  
When you ask an assistant to pull facts from your own documents, you are forcing the LM to “re‑compress” a new corpus that may be small, highly specialized, or frequently changing.

---

### 1. Prompting (Zero/One‑shot)

*Fundamental principle:* rely on the *prior* \(P_{\text{LM}}\) learned during pre‑training.  
- **Pros**: No extra training; instantaneous inference.  
- **Cons**: The LM’s internal distribution may be far from your domain, leading to hallucinations or stale answers.  
- **When**: Quick demos, highly generic queries, or when the knowledge base is trivial.

---

### 2. Retrieval‑Augmented Generation (RAG)

*Fundamental principle:* split the problem into *retrieval* + *generation*.  
- **Retriever** finds the most relevant documents \(d_1,\dots,d_k\) by optimizing a similarity score (often cosine on embeddings).  
- **Generator** conditions on the prompt *and* these retrieved snippets, effectively learning a new conditional distribution \(P_{\text{LM}}(\text{output}\mid \text{prompt}, d_{1:k})\).  

- **Pros**: Keeps the LM unchanged; updates to docs require only re‑indexing.  
- **Cons**: Retrieval latency, potential mismatch between retrieved context and model’s expectations.  
- **When**: Large or frequently updated knowledge bases, need for up‑to‑date answers.

---

### 3. Fine‑tuning

*Fundamental principle:* directly adjust the LM’s weights to minimize a loss over your domain data \(L(\theta)=\mathbb{E}_{(x,y)}[-\log P_{\theta}(y|x)]\).  
- **Pros**: The model internalizes domain language, reducing hallucinations.  
- **Cons**: Requires substantial labeled or synthetic data; risk of *over‑fitting* to a narrow distribution and losing generality (the “catastrophic forgetting” problem).  

- **When**: You have a stable corpus with high‑quality question‑answer pairs, and you can afford the compute.

---

## Decision Flow

| Question | Prompting | RAG | Fine‑tune |
|----------|-----------|-----|-----------|
| Size of KB (tokens) | ✔ Small | ✔ Medium–Large | ✔ Any |
| Update frequency | ❌ (static) | ✔ Fast | ❌ (re‑train) |
| Need for domain fluency | ❌ | ✔ | ✔ |
| Compute budget | Low | Moderate | High |

---

### Non‑obvious insight

Fine‑tuning *does not* magically “add” knowledge; it merely reshapes the LM’s *entropic prior*. If your training data contains biases or rare patterns, the fine‑tuned model will *over‑compress* them, making it more brittle. RAG sidesteps this by keeping the LM’s entropy intact and only conditioning on fresh evidence at inference time—effectively a “soft” fine‑tune that is both data‑efficient and resilient to drift.

---

**Bottom line:**  
- **Prompting**: quick, generic.  
- **RAG**: best for large, dynamic KBs; minimal model changes.  
- **Fine‑tuning**: powerful but costly; use when you have ample domain data and can tolerate retraining overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
