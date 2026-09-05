---
qid: ing_ed4a66f0a8__star__local
question: 'Explain: Filtering Documents with Metadata — Tutorials | Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 337
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:23:23-05:00'
sources: []
---

**Situation:**  
At a fintech startup, we had to build an internal knowledge base for compliance queries. The document repository contained over 40,000 PDFs and Word files, each tagged with metadata like `document_type`, `jurisdiction`, and `confidentiality_level`. Our search engine was returning irrelevant results because the same keyword appeared across many documents.

**Task:**  
I needed to implement a filtering mechanism that would let users narrow down searches by metadata while still leveraging Haystack’s semantic ranking, reducing noise and improving precision to below 10 % false positives within two weeks.

**Action:**  
1. I extended the document loader to parse and store metadata in ElasticSearch as separate fields.  
2. In the query pipeline, I added a `MetadataFilter` component that intercepted user queries, extracted filter clauses (e.g., `jurisdiction:US AND confidentiality_level:public`), and translated them into Elasticsearch bool‑queries.  
3. I wrapped this with Haystack’s `PreProcessor` to strip stopwords and applied BM25 scoring only on the filtered set.  
4. Finally, I wrote unit tests using pytest to validate that the filter returned correct subsets and benchmarked response times.

**Result:**  
The filtering reduced irrelevant hits by 68 %, bringing precision from 32 % to 80 %. Average query latency stayed under 120 ms. I learned how metadata can be leveraged as an early pruning step, dramatically improving user experience without sacrificing ranking quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
