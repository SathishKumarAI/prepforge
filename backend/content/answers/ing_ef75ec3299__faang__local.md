---
qid: ing_ef75ec3299__faang__local
question: 'Explain: Using LLMs as Rerankers — Reranking Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 433
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:56:10-05:00'
sources: []
---

**Clarify**  
We’re asked how large language models (LLMs) can be used to rerank the output of a retrieval system.  
Key assumptions:  
* The initial ranker returns a set *S* of candidate documents/answers (e.g., BM25).  
* We have an LLM that can score relevance given a query and a document.  
* Latency is a concern; we may need to limit the number of reranked items.

**Approach**  
1. **Feature extraction** – feed query + doc text into the LLM, obtain logits or embeddings.  
2. **Scoring function** – compute a relevance score (e.g., log‑probability of “relevant” token).  
3. **Recombination** – combine with original ranker scores via linear interpolation or learned weighting.  
4. **Top‑k filtering** – rerank only the top *K* candidates to keep latency low.

**Depth**  
- Use a prompt like: “Given the query, is this document relevant? Answer ‘Yes’ or ‘No’.”  
- The LLM’s logit for “Yes” → relevance score.  
- Complexity: O(|S|·L) where *L* is token length; mitigated by batching.  
- Trade‑offs: higher accuracy vs. inference cost; can fine‑tune a lightweight head instead of full model.

**Edge Cases**  
- Very short or noisy docs → the LLM may default to “No”. Test with synthetic noise.  
- Long documents exceeding token limits → truncate or use hierarchical encoding.  
- Cold‑start queries where original ranker fails → rely more on LLM prior.

**Optimize & Communicate**  
- Cache embeddings for frequent queries.  
- Use beam search only for top‑K candidates.  
- Explain to interviewers that this strategy balances retrieval speed with the contextual understanding of LLMs, yielding higher precision while keeping latency acceptable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
