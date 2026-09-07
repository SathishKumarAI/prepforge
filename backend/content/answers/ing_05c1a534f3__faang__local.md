---
qid: ing_05c1a534f3__faang__local
question: 'Explain: Design an answer engine: a user types a question and gets a cited,
  streamed answer. Your end-to-end budget is 3 seconds to a complete short answer.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 508
total_tokens: 765
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:57:34-05:00'
sources: []
---

**Clarify**

> *Problem:* Build a single‑pass “answer engine” that accepts a user query, retrieves relevant facts, streams a concise answer with citations, and returns the first sentence within **3 s**.  
> *Assumptions to confirm:* 1) Query size (≤256 chars); 2) Response length (<200 words); 3) Source set (public web + internal docs); 4) Streaming API support; 5) Latency budget split among lookup, ranking, generation, streaming.

**Approach**

1. **Index & Retrieval** – Pre‑tokenize all sources into a dense vector index (FAISS).  
2. **Fast Candidate Selection** – Query the index with the user prompt → top‑k passages (~10) in <200 ms.  
3. **Prompt Engineering** – Concatenate query + passage snippets + “Cite source” template; send to LLM via streaming endpoint.  
4. **Streaming & Timeout** – Consume first token stream; once the first sentence is complete, abort further tokens if 3‑s limit reached.

**Depth**

*Retrieval:* Use embeddings (e.g., SBERT) → 128‑dim vectors; FAISS index gives <50 ms per query on a single GPU.  
*Ranking:* Cosine similarity + BM25 reweighting → ensures relevance and factual grounding.  
*LLM:* Deploy a lightweight model (e.g., GPT‑3.5‑Turbo) with temperature=0, max_tokens=200; streaming API guarantees latency ~10 ms per token.  
*Citation:* Embed “(Source: X)” inline; the LLM learns to place citations after facts.

**Edge Cases**

- *No relevant passage*: fallback to a generic answer template + “source unavailable”.  
- *Ambiguous query*: prompt includes “If uncertain, ask for clarification.”  
- *Burst traffic*: scale retrieval layer horizontally (sharding index).  
- *Token limit breach*: enforce max_tokens=200; abort if exceeded.

**Optimize & Communicate**

- Cache frequent queries with their top passages.  
- Batch multiple user streams to amortize GPU usage.  
- Log latency per stage to identify bottlenecks.  

Explain this flow succinctly to the interviewer, emphasizing how each component meets the 3‑second budget while guaranteeing cited, trustworthy answers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
