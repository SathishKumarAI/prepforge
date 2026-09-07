---
qid: ing_0227d882a5__faang__local
question: What is RAGAS? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 426
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:49:09-05:00'
sources: []
---

**RAGAS – a quick FAQ for interviewers**

| Section | Key Points |
|---------|------------|
| **Clarify** | *Question:* “What is RAGAS?”  Assume the candidate knows it’s an AI evaluation metric, not a product name. Confirm: *Is this about Retrieval‑Augmented Generation (RAG) or a specific scoring system?* |
| **Approach** | 1. Define the context – evaluation of LLMs that use external knowledge stores.<br>2. Explain RAGAS’s role as a benchmark.<br>3. Outline its components and how they interrelate. |
| **Depth** | - **RAGAS** = *Retrieval‑Augmented Generation Assessment System*. <br>- It measures three axes: <br>  • **Relevance** – how well retrieved snippets support the answer (BLEU, ROUGE).<br>  • **Accuracy** – factual correctness against a gold standard (Exact Match, F1).<br>  • **Coverage** – proportion of user intent captured (Recall‑based). <br>- Scores are combined via a weighted harmonic mean. Complexity: O(N log N) for retrieval + linear inference; overall dominated by the embedding similarity search. |
| **Edge Cases** | - Retrieval failures → low relevance but may still be accurate if model hallucinated.<br> - Ambiguous queries → coverage metric drops; test with multi‑intent prompts.<br> - Domain drift → embeddings mismatch, causing misleading relevance scores. |
| **Optimize & Communicate** | • Cache embeddings for speed.<br> • Use sparse retrieval (FAISS) to reduce latency.<br> • Explain trade‑offs: higher recall ↔ lower precision; adjust weights per application. Conclude by stressing RAGAS’s usefulness in continuous monitoring of production LLMs. |

*Word count:* ~200 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
