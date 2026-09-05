---
qid: ing_04c2c62379__star__local
question: 'Explain: Q: Design a RAG system for a financial research platform that
  needs to answer questions about earnings reports containing text, tables, and charts.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 532
total_tokens: 787
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:38:29-05:00'
sources: []
---

**Situation**  
In my last role at FinSight Analytics we launched a quarterly research portal for institutional investors. The product had to answer ad‑hoc queries about earnings reports—PDFs that mixed narrative text, tabular data and embedded charts. Our existing search engine only indexed plain text, so users were getting incomplete answers or had to sift through the whole document.

**Task**  
I was asked to design a Retrieval‑Augmented Generation (RAG) system that could pull relevant snippets from all three modalities, synthesize them into coherent responses, and do it in under 3 seconds per query while keeping latency low for our high‑traffic dashboard.

**Action**  
1. **Document ingestion pipeline** – I built an Apache Spark job to parse PDFs with PDFMiner, extract tables via camelot, and rasterize charts into PNGs. Each component was vectorized: BERT embeddings for text, TabNet embeddings for tables, and a pre‑trained CLIP model for chart images.  
2. **Indexing** – All embeddings were stored in an ElasticSearch index with separate shards per modality, using cosine similarity as the score function. I added a metadata field to link snippets back to their source report ID and page number.  
3. **Retriever** – For each user query, we ran a lightweight DistilBERT encoder to get a query vector, fetched top‑k from each shard (k=10), merged results by weighted relevance (text 0.5, table 0.3, chart 0.2).  
4. **Generator** – The retrieved snippets were concatenated and fed into an OpenAI GPT‑4 Turbo prompt that explicitly asked the model to “summarize earnings highlights and explain key trends.” I added a post‑processing layer to replace generic placeholders with actual table columns or chart captions using regex mapping.  
5. **Optimization** – Caching popular queries in Redis reduced retrieval time from 1.8 s to 0.9 s, and we used GPU inference for the generator to keep overall latency below 3 seconds.

**Result**  
After deployment, user satisfaction scores on earnings‑related searches rose from 68% to 92%. Average query response time dropped by 47%, and the system handled a peak of 1,200 concurrent users with no outages. I learned that balancing modality weights in retrieval and integrating domain‑specific prompt engineering are key to turning raw multimodal data into actionable insights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
