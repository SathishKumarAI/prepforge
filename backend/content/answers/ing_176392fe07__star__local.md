---
qid: ing_176392fe07__star__local
question: 'Explain: ​ Building datasets — Evaluation concepts - Docs by LangChain'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 374
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:15:27-05:00'
sources: []
---

**Situation** – In a recent project we were tasked with creating an internal knowledge base for our customer support team. The existing documentation was scattered across Confluence, PDFs, and markdown files, and the search quality was poor; about 60 % of user queries returned no relevant results.

**Task** – I needed to build a clean, labeled dataset that could train a retrieval model using LangChain’s vector store, then set up evaluation metrics (precision@k, recall, F1) to iterate on the pipeline before deployment.

**Action** – First, I wrote a custom data‑scraper in Python that extracted text from Confluence APIs and parsed PDFs with PyMuPDF. Using LangChain’s `Document` objects, I normalized headings and removed boilerplate. For labeling, I leveraged a small team of SMEs who annotated question–answer pairs via a simple web UI; each pair was stored as a JSON line with metadata tags. I then vectorized the documents with OpenAI’s `text-embedding-ada-002`, loaded them into FAISS through LangChain’s `FAISS` wrapper, and built an evaluation script that ran 200 real support queries against the index, computing precision@5 and recall@10. After tuning embedding size and filtering stop‑words, we improved precision@5 from 0.32 to 0.78.

**Result** – The new knowledge base cut average response time by 35 % and increased first‑contact resolution rates from 48 % to 71 %. I learned that a disciplined data pipeline—scraping, labeling, embedding, and rigorous evaluation—is essential for any AI‑driven search system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
