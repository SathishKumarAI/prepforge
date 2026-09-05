---
qid: ing_2343b96c0f__star__local
question: 'Explain: 🔎 RAG & Retrieval — Rag And Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 347
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:39:38-05:00'
sources: []
---

**Situation:**  
At my last company we were building a customer support chatbot for an e‑commerce platform that had over 12 k FAQ pages and a constantly updating knowledge base. The existing rule‑based bot could answer only about 45 % of the incoming queries accurately, and our SLA was slipping from 90 % to 70 %.

**Task:**  
I needed to design a system that could retrieve relevant documents in real time and generate precise answers without retraining the core LLM on every policy change.

**Action:**  
I implemented a Retrieval Augmented Generation pipeline using ElasticSearch for vector indexing (using FAISS‑wrapped embeddings from Sentence‑Transformers) and OpenAI’s GPT‑4 as the generative head. For each user query, I first ran it through a lightweight pre‑filter to narrow down the top 20 passages, then passed those along with the original question into GPT‑4 via a prompt template that included “source citations.” I also added a confidence scoring layer: if the model’s answer probability fell below 0.65, we flagged it for human review.

**Result:**  
The new bot answered 78 % of queries correctly on live traffic, a 73 % lift over the baseline. The average response time stayed under 1.2 s, and the engineering team saved roughly 3 person‑months by avoiding full retraining cycles. I learned that combining efficient retrieval with generative reasoning yields scalable, maintainable AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
