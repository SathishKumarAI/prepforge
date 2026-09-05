---
qid: ing_6dd85c59d9__star__local
question: 'Explain: Query understanding — Rag And Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 323
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:06:50-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, our chatbot was handling 15k customer inquiries per month but only got the right answer 48 % of the time. Users complained that it repeated generic FAQs instead of fetching up‑to‑date policy documents.

**Task** – I had to redesign the query understanding pipeline so the system could interpret user intent accurately and retrieve the most relevant documents from our knowledge base, boosting precision to at least 80 %.

**Action** – First, I implemented a lightweight BERT‑based intent classifier that parsed the question into semantic slots (e.g., “refund policy”, “account closure”). Next, I built a vector index of all policy PDFs using Sentence‑Transformers and FAISS for sub‑millisecond similarity search. For each incoming query, the intent model selected a subset of relevant vectors, and a reranker (RoBERTa fine‑tuned on our FAQ pairs) scored candidate passages. Finally, I added an adaptive confidence threshold that switched to fallback FAQ answers only when the top score fell below 0.65.

**Result** – After deployment, correct answer rates rose from 48 % to 82 %, and average user satisfaction scores increased by 1.4 points on a 5‑point scale. I learned how balancing lightweight intent models with dense retrieval can dramatically improve real‑world chatbot performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
