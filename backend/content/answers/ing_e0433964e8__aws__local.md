---
qid: ing_e0433964e8__aws__local
question: 'Q62: Your search results are relevant but the LLM ignores them and answers
  from its training data. How do you fix this?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 419
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:46:44-05:00'
sources: []
---

**Situation** – In a production LLM‑powered search service I observed that the model often answered user queries without incorporating the top ranked documents from our knowledge base, leading to a *relevance drop of 32 %* in A/B tests.

**Task** – Restore “search + answer” synergy so every response reflects the retrieved context while keeping latency < 200 ms and cost < $0.0005 per request.

**Action**  
1. **Architected an “LLM‑Augmented Retrieval Pipeline”** using:
   * **Amazon Kendra** (or OpenSearch) for real‑time document retrieval.
   * **AWS Lambda + Amazon SageMaker endpoint** to inject the top 3 snippets into a prompt template (`<DOC> … <DOC>`).
   * A lightweight **retrieval‑augmented generation (RAG)** wrapper that enforces token limits and scores candidate answers with a cosine similarity module in **Amazon Bedrock**.
2. Added a **post‑generation filter**: if the answer’s similarity to the retrieved text falls below 0.65, we fallback to the raw search result—ensuring at least one relevant snippet is always returned.
3. Deployed **Canary releases** with CloudWatch metrics; achieved *relevance ↑ 27 %* and latency ↓ 15 ms in production.

**Result** – Customer satisfaction (CSAT) rose from 78 % to 92 %, and we cut API costs by 18 %.  
**Learning** – Early prototyping should include end‑to‑end relevance metrics; continuous monitoring is key to preventing drift.  

> *Leadership Principles:* **Customer Obsession** (maximizing relevance), **Dive Deep** (analyzing prompt failures), **Ownership** (owning the full pipeline).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
