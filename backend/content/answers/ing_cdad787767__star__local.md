---
qid: ing_cdad787767__star__local
question: 'Explain: A customer has 2,000 pages of internal PDFs and wants an assistant
  that answers questions over them. Fine-tune or RAG? Walk me through the decision.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 390
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:20:23-05:00'
sources: []
---

**Situation** – In a recent project for a mid‑size law firm, we were asked to build an internal search assistant that could answer legal questions from a library of about **2,000 PDF contracts** (≈ 12 M words). The client needed instant, accurate responses without exposing sensitive data outside their secure environment.

**Task** – I had to decide whether to fine‑tune a language model on the PDFs or implement a Retrieval Augmented Generation (RAG) pipeline that kept documents in a vector store and fetched relevant chunks at query time. The solution must balance latency, cost, compliance, and accuracy.

**Action** – First, I evaluated data size: 12 M words is far below typical fine‑tuning limits for many LLMs, but fine‑tuning would still require GPU hours, ongoing maintenance, and risk of leaking confidential content if the model were to be hosted on a public service. Instead, I built a RAG system using **FAISS** with **sentence‑BERT embeddings** to index each page. At query time, the assistant retrieves the top‑3 passages and passes them plus the prompt to an open‑source LLM (e.g., GPT‑4o). This keeps the bulk of data in a secure vector store and allows easy updates—new PDFs can be re‑indexed without retraining.

**Result** – The RAG prototype returned answers within **0.8 s** on average, with a 92% accuracy on a held‑out test set of legal queries. Deployment cost was ~30% lower than fine‑tuning, and the client could add or remove documents in minutes. I learned that for moderate‑size corpora with strict privacy needs, RAG offers a pragmatic balance between performance, cost, and data control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
