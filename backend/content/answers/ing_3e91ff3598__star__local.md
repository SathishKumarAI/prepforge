---
qid: ing_3e91ff3598__star__local
question: Build RAG over a customer's documents where access control is row- and document-level.
  How do you guarantee a user never sees restricted content in an answer?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 401
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:33:35-05:00'
sources: []
---

**Situation** – At my last job I was tasked with building a Retrieval-Augmented Generation system for a financial client that had thousands of compliance reports and internal memos. Each document had fine-grained row‑level access controls: some rows were marked “confidential”, others “public”. The legal team required zero chance of leaking restricted data in any generated answer.

**Task** – I needed to design the RAG pipeline so that every query processed by the LLM would return only content the user was authorized to see, without compromising latency or model accuracy.

**Action** – First, I split each document into 512‑token chunks and stored them in a vector index (Pinecone) with an additional metadata field: `access_level`. When a user issued a query, I queried the index for the top‑k vectors *and* passed the user’s ACL set to Pinecone’s filtering API. This returned only embeddings whose `access_level` matched or was lower than the user’s clearance. I then sent those filtered chunks as context to GPT‑4 via OpenAI’s API. To guard against accidental leakage, I wrapped the prompt with a “do not reveal any confidential information” instruction and ran a post‑generation scan using an NLP rule engine that flagged any token sequence matching known sensitive patterns; if detected, the answer was redacted before delivery.

**Result** – The system processed 200+ queries per second with <300 ms latency. After a month of production use, we logged zero incidents of restricted content leakage and received a compliance audit score of 100/100. I learned that combining vector‑store filtering with post‑generation checks is the most robust way to enforce row‑level access in RAG.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
