---
qid: ing_452605f02f__faang__local
question: 'Explain: Your agent needs to remember things across sessions. Would you
  use a vector store or rolling summarisation? Defend the choice.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 494
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:25:01-05:00'
sources: []
---

**Clarify**

We’re building an AI assistant that must retain user context between discrete chat sessions (e.g., day‑to‑day).  
Assumptions to confirm:  

1. The volume of stored facts is modest (hundreds of KBs).  
2. Queries will be *retrieval‑oriented*—the agent needs to pull exact statements or answer follow‑ups, not just generate generic summaries.  
3. Latency budget per turn is <200 ms.

**Approach**

Compare two persistence strategies:  

| Strategy | Strengths | Weaknesses |
|----------|-----------|------------|
| **Vector store (embeddings + ANN)** | Exact retrieval of relevant snippets; easy to add new facts; supports fuzzy matching. | Requires embedding infrastructure, higher memory overhead, risk of semantic drift if embeddings change. |
| **Rolling summarisation** | Compact storage; no embedding engine; quick lookup by keyword search in a single string. | Loses fine‑grained detail; hard to retrieve specific sentences; summariser quality may degrade over time. |

**Depth**

Given the constraints, a *vector store* is preferable. Store each user statement as a document with its embeddings (e.g., OpenAI’s `text-embedding-ada-002`). Use an ANN index (FAISS/HNSW) for sub‑ms nearest‑neighbour search. When a new session starts, load the top‑k relevant vectors and feed them back into the prompt as context. Complexity: O(log N) per retrieval; memory ≈ (embedding_dim * #docs). The summariser could be used only to prune rarely accessed docs.

**Edge Cases**

- **Drift in embeddings**: Re‑embed stale documents periodically or use versioned embeddings.  
- **Sparse data**: If user inputs are minimal, fallback to keyword indexing.  
- **Privacy**: Ensure encryption at rest for the vector store.

**Optimize & Communicate**

Future improvements: hybrid retrieval (vector + keyword), incremental fine‑tuning of embeddings, caching top‑k results per session. I’d explain that a vector store balances fidelity and scalability, while summarisation sacrifices granularity—critical when precise recall matters. This choice aligns with FAANG’s emphasis on robust, low‑latency data pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
