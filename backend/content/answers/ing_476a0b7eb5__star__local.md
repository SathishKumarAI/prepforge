---
qid: ing_476a0b7eb5__star__local
question: What is hybrid search, and why does pure vector search fail on some queries?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 303
total_tokens: 544
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:51:37-05:00'
sources: []
---

**Situation:**  
At my last company we built a knowledge‑base chatbot for the legal department. Clients asked highly specific questions like “What was the outcome of *Smith v. Jones* in California in 2018?” Our initial prototype used pure vector embeddings from OpenAI’s text‑embedding model to retrieve documents.

**Task:**  
I needed to reduce the irrelevant hits that flooded the search results for these precise legal queries while keeping the semantic flexibility for broader questions like “Explain contract termination clauses.”

**Action:**  
I designed a hybrid search pipeline: first, a keyword‑based Lucene index filtered candidate passages by exact matches on case names, dates, and jurisdiction. Then, I fed those candidates into a vector similarity engine to rank them semantically. We added a relevance feedback loop where the top‑ranked passages were re‑indexed with higher weight for legal terminology. The system was built in Python using Elasticsearch’s hybrid search API and integrated with our internal document store.

**Result:**  
The precision of specific case queries jumped from 38 % to 82 %, and overall user satisfaction scores rose by 15 points on the quarterly survey. I learned that pure vector models excel at capturing context but can’t enforce hard constraints like exact dates or jurisdiction, so combining them with keyword filters balances recall and relevance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
