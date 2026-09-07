---
qid: ing_5c83ba3050__faang__local
question: 'Explain: Rapid-fire practice prompts — Ai System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 488
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:18:35-05:00'
sources: []
---

**Rapid‑fire Practice Prompts – AI System Design**

| **Step** | **What to do** |
|----------|----------------|
| **1️⃣ Clarify** | *Restate:* “Design a prompt‑generation engine that can generate diverse, high‑quality prompts for any user intent in seconds.” <br> *Assumptions to confirm:* 1) Input is a short natural‑language query. 2) Output must be ranked by relevance & novelty. 3) System scales to millions of users with sub‑second latency. |
| **2️⃣ Approach** | 1. **Front‑end API** – REST/GraphQL exposing `generatePrompts(query, N)`.<br> 2. **Embedding Service** – encode query and prompt templates into vector space (e.g., Sentence‑BERT).<br> 3. **Candidate Retrieval** – FAISS or ANN index over pre‑built prompt embeddings. <br> 4. **Ranking & Filtering** – neural reranker + novelty filter (cosine distance threshold). <br> 5. **Caching & CDN** – cache top‑k results per query hash. |
| **3️⃣ Depth** | *Retrieval:* Use inverted index + locality‑sensitive hashing for sub‑ms lookups. *Ranking:* Fine‑tune a lightweight transformer on prompt relevance labels; complexity O(N). *Novelty:* Penalize similarity to already returned prompts. *Latency:* 50 ms per request, achieved by async I/O and GPU inference pool. |
| **4️⃣ Edge Cases** | • Empty or ambiguous queries → return generic “starter” prompts.<br>• Extremely rare intents → fallback to zero‑shot generation via a small LLM.<br>• Rate limits & burst traffic → exponential backoff + circuit breaker. |
| **5️⃣ Optimize & Communicate** | *Scalability:* Shard index by language; horizontal scaling of inference nodes. *Observability:* Log latency, cache hit rate, novelty score distribution. *Explain to interviewer:* “We keep the retrieval fast with ANN, then use a tiny model for relevance, and finally filter for diversity—this balances speed, accuracy, and user experience.” |

*Word count: 207*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
