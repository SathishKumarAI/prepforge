---
qid: ing_cf327c04d9__star__local
question: 'Explain: Dimension 1: Context Relevance — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 391
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:23:38-05:00'
sources: []
---

**Situation** – In my last role as a data scientist for a fintech startup, we were building an AI‑powered chat assistant to help traders interpret market reports in real time. The product team wanted the bot to surface only the most contextually relevant insights from a 10 GB knowledge base of historical analyses and regulatory filings.

**Task** – I had to design a Retrieval Augmented Generation (RAG) pipeline that could rank candidate passages by *context relevance* before passing them to the language model, ensuring answers stayed grounded in the latest market data without pulling stale or unrelated content.

**Action** – I started by indexing the corpus with FAISS using sentence‑embedding vectors from Sentence‑Transformers. To capture context relevance, I engineered a two‑stage scoring system: (1) a BM25 keyword match against the user query and current market ticker; (2) a fine‑tuned BERT classifier that scored passage–query pairs on topical alignment and recency. I then integrated these scores into a weighted retrieval function fed to GPT‑4, adding a *relevance penalty* for passages falling below a threshold. Finally, I built an A/B test harness in Flask to monitor answer quality metrics.

**Result** – The new RAG system reduced irrelevant answer incidents by 68 % (from 12/100 to 4/100 queries) and improved user satisfaction scores from 3.8 to 4.6 out of 5. I learned that combining traditional IR with supervised relevance modeling can dramatically tighten the context window, a trick I now apply whenever scaling generative agents over large corpora.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
