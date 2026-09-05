---
qid: ing_6798fc87aa__star__local
question: 'Explain: Scenario 3: Design a RAG system for enterprise search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 341
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:55:05-05:00'
sources: []
---

**Situation** – At my previous firm we were tasked with revamping the internal knowledge base for a global consultancy that had over 12 million documents spanning PDFs, slides and Jira tickets. The existing search returned irrelevant hits and the client demanded real‑time answers in natural language.

**Task** – Build a Retrieval-Augmented Generation (RAG) system that could ingest new content daily, retrieve the most contextually relevant snippets, and generate concise, accurate responses within 1 second per query.

**Action** – I first constructed an embedding pipeline using Sentence‑Transformers fine‑tuned on domain data; embeddings were stored in Pinecone for low‑latency vector search. For retrieval, I limited results to the top‑10 documents and applied BM25 re‑ranking to surface the most relevant passages. On the generation side, I deployed a distilGPT‑2 model with prompt templates that injected retrieved snippets as context, then post‑processed outputs with a rule‑based sanity checker to flag unsupported claims. Continuous integration ran nightly updates on new documents, and we used Grafana dashboards to monitor latency and answer quality.

**Result** – The RAG system cut average search time from 3 seconds to 0.8 seconds and improved relevance scores (Mean Reciprocal Rank) by 45 %. User satisfaction surveys rose from 68 % to 92 %. I learned that balancing vector retrieval depth with lightweight generation models is key for enterprise‑scale, low‑latency AI search.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
