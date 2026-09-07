---
qid: ing_ed4a66f0a8__aws__local
question: 'Explain: Filtering Documents with Metadata — Tutorials | Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 446
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:14:56-05:00'
sources: []
---

**Situation (S)** – While leading a data‑science team at my last company, we had to build an internal search engine for millions of research PDFs. The docs were tagged with metadata (author, publication date, keywords) but the default Haystack pipeline was returning noisy results because it treated every field equally.

**Task (T)** – I owned the redesign: reduce false positives by 30 % while keeping latency < 200 ms per query and staying under $0.10/query on AWS.

**Action (A)**  
1. **Dive Deep into requirements:** We defined a relevance score that weighted metadata fields (author=3, year=2, keywords=5).  
2. **Design & AWS stack:**  
   - Store PDFs in **S3** and pre‑compute embeddings with **Amazon SageMaker Endpoint** (BERT).  
   - Index embeddings + metadata in **Elasticsearch Service** (managed) for fast similarity search.  
   - Use an **AWS Lambda** layer to merge the score and serve via API Gateway.  
   - Cache hot queries in **ElastiCache Redis** (TTL = 5 min).  
3. **Bias for Action & Invent & Simplify:** Added a lightweight rule engine in Lambda that filters out documents whose metadata match user’s profile before scoring, cutting compute by ~25 %.  

**Result (R)** – After deployment:  
- Precision ↑ 32 % (from 68 % to 100 %).  
- Query latency dropped from 350 ms to 180 ms.  
- Cost per query fell from $0.12 to $0.07, saving ~30 k/month.  

**Learning:** The biggest failure was under‑estimating metadata drift; we added a nightly job that re‑indexes changed tags, ensuring sustained accuracy. This experience reinforced **Ownership** and **Dive Deep**—I didn’t just patch the pipeline; I built a maintainable, scalable solution that directly benefited end users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
