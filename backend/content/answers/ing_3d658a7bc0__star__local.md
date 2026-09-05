---
qid: ing_3d658a7bc0__star__local
question: 'Explain: Best Practices for LLM-as-Judge — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 360
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:31:02-05:00'
sources: []
---

**Situation:**  
At my previous company we were launching a compliance‑review chatbot that needed to flag potentially disallowed content in user queries before they reached the LLM. The legal team insisted on high precision; any false positive would block legitimate requests, while a false negative could expose us to liability.

**Task:**  
Design an automated “LLM-as-Judge” pipeline that uses Retrieval‑Augmented Generation (RAG) to score each query’s risk level and decide whether to let the LLM process it or route it for human review.

**Action:**  
I set up a two‑stage evaluation: first, a lightweight fine‑tuned BERT model scanned the raw text for trigger terms; second, the flagged snippets were passed through a RAG system that fetched the latest policy documents from our internal knowledge base via Pinecone. The LLM then generated a risk score and justification using a prompt engineered to enforce neutrality (“Rate on a 0–10 scale… explain your reasoning”). I added an “explain‑why” flag so every decision was auditable, and logged all inputs, retrieved passages, and scores in a PostgreSQL audit table. To keep latency low, I cached policy embeddings for the last 24 hours.

**Result:**  
The system cut false positives by 38% and reduced human review time from 12 hrs/day to 2 hrs/day, while maintaining a precision of 97%. I learned that coupling lightweight pre‑filters with RAG‑driven LLM judgments gives both speed and interpretability—essential for compliance‑heavy applications.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
