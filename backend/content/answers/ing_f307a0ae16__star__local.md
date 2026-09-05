---
qid: ing_f307a0ae16__star__local
question: 'Explain: Build an Extractive QA Pipeline — Tutorials | Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 437
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:34:01-05:00'
sources: []
---

**Situation:**  
At my last company we had a growing internal knowledge base of over 120 k PDF and HTML documents that our support team was scraping manually to answer customer queries. The response time averaged 12 minutes per request, which caused SLA breaches.

**Task:**  
I was tasked with automating the extraction process: build an end‑to‑end extractive QA pipeline that could ingest any document type, index it in under 2 hours, and return answers within 3 seconds for a typical user question, all while keeping CPU usage below 30 % on our existing servers.

**Action:**  
I chose Haystack because of its modularity. First, I set up the **DocumentStore** using Elasticsearch for full‑text search. Then I implemented a **PreProcessor** pipeline to split PDFs into chunks (max 500 words) and remove boilerplate headers/footers. For embeddings I used the pre‑trained `sentence-transformers/all-MiniLM-L6-v2` model, fine‑tuned on a small set of internal Q&A pairs.  
Next, I configured the **Retriever** as a dense passage retriever (DPR) to fetch top‑5 passages per query. For the **Reader**, I deployed DistilBERT fine‑tuned on SQuAD 2.0, wrapped in Haystack’s `TransformersReader`. Finally, I wrote a lightweight Flask API that accepted a user query, ran it through the pipeline, and returned the answer with source metadata.

**Result:**  
The pipeline processed 120 k documents in 1 hour and handled 300 concurrent queries per minute. Average latency dropped from 12 min to 2.3 s, improving SLA compliance by 97%. I also learned that balancing retrieval depth (top‑5) with reader confidence scores dramatically reduced hallucinated answers, a trade‑off that was key for production stability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
