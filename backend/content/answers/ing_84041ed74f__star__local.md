---
qid: ing_84041ed74f__star__local
question: 'Explain: Evaluation & debugging — Rag And Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 390
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:57:18-05:00'
sources: []
---

**Situation:**  
During a product launch for our AI‑powered customer support chatbot, the team noticed that users were repeatedly receiving irrelevant answers to complex queries, especially when the knowledge base contained duplicate or outdated documents.

**Task:**  
I had to design an evaluation framework and debug the retrieval component so that the RAG model consistently fetched the most accurate, up‑to‑date passages, improving answer relevance and reducing user frustration.

**Action:**  
1. Built a test harness using pytest that ran 2,000 real support tickets through the pipeline, capturing retrieved doc IDs, scores, and final answers.  
2. Added metrics—precision@k, recall@k, and a custom “recency‑score” based on document timestamps—to quantify retrieval quality.  
3. Instrumented the retriever with OpenTelemetry to log query embeddings, index shards hit, and latency per request.  
4. Identified duplicate passage clusters via cosine similarity >0.95; re‑indexed those clusters with a fine‑tuned BM25 scoring that penalized older docs.  
5. Implemented an automated alerting rule in Grafana: if precision@3 fell below 0.75 for two consecutive hours, a Slack notification was sent.

**Result:**  
After the changes, precision@3 jumped from 0.62 to 0.88 and latency dropped by 15 %. User satisfaction scores increased by 18 % over the next month, and we reduced support ticket volume by 12 % thanks to more accurate self‑service answers. I learned that systematic logging combined with domain‑specific metrics is essential for diagnosing and tuning RAG systems in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
