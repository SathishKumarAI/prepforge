---
qid: ing_cdad787767__think__local
question: 'Explain: A customer has 2,000 pages of internal PDFs and wants an assistant
  that answers questions over them. Fine-tune or RAG? Walk me through the decision.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 214
output_tokens: 600
total_tokens: 814
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:32:17-05:00'
sources: []
---

**1️⃣ Clarify scope & constraints**  
- What *kind* of questions will be asked (fact‑based, interpretive)?  
- How fast must answers surface?  
- Is the data static or frequently updated?  
- Budget for compute and storage.  
Assume: fact‑driven queries on largely static PDFs, moderate latency tolerance, limited budget.

**2️⃣ Mental model: “Fine‑tune vs Retrieval‑Augmented Generation (RAG)”**  
- **Fine‑tuning** rewrites the LLM’s weights to encode all knowledge.  
- **RAG** keeps a large language model untouched and feeds it retrieved snippets at inference time.

**3️⃣ Step‑by‑step reasoning**

| Factor | Fine‑tune | RAG |
|--------|-----------|-----|
| **Data volume (2000 pages)** | 2000 pages ≈ 6–8 M tokens – large but manageable for a few‑epoch fine‑tune on GPU; still expensive. | Indexing is linear in token count, cheap to rebuild if PDFs change. |
| **Update frequency** | Re‑fine‑tune every time new docs arrive → high cost & downtime. | Update index incrementally; no model retraining needed. |
| **Answer fidelity** | Model learns patterns from all docs → good for consistency but may hallucinate if data is noisy. | Retrieval ensures only relevant passages are used, reducing hallucination risk. |
| **Latency** | Single forward pass – low latency after load. | Two‑step: retrieve + generation; slightly higher latency but acceptable in many use‑cases. |
| **Compute cost** | Heavy upfront GPU training; inference on CPU/cheap GPU is cheap. | Continuous indexing and vector store query costs; inference remains cheap. |
| **Explainability** | Hard to trace why model gave an answer. | Can surface retrieved passages, improving transparency. |

**4️⃣ Common traps**

- Assuming “fine‑tune = always better”; ignores maintenance overhead.  
- Overlooking the need for tokenization/embedding quality in RAG.  
- Neglecting that fine‑tuned models can still hallucinate on unseen contexts.

**5️⃣ Decision & communication**

Given static PDFs, moderate update frequency, and a desire to keep the model agnostic of domain specifics, **RAG is the safer, more maintainable choice**. Explain: “We’ll vector‑index the PDFs (≈8 M tokens), use embeddings from an LLM, then at query time retrieve top‑k passages and feed them into a lightweight generative head. This gives you quick, explainable answers without retraining when new documents arrive.” If later requirements shift to highly personalized or complex reasoning that demands deeper model understanding, we can revisit fine‑tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
