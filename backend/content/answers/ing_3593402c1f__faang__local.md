---
qid: ing_3593402c1f__faang__local
question: Long context windows keep getting cheaper. Why not drop retrieval and stuff
  the whole repo into context for every request?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 421
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:48:41-05:00'
sources: []
---

**Clarify**  
The question asks whether we can simply embed an entire knowledge base (repo) into the prompt for every LLM call now that long‑context models are cheaper.  
*Assumptions to confirm:*  
- The repo size is static or changes infrequently.  
- We have a single model instance that can handle the increased token budget.  
- Latency and cost per request are the primary constraints.

**Approach**  
1. Estimate current context limits (e.g., 32k tokens).  
2. Size‑profile the repo: total tokens, average query length.  
3. Evaluate whether a single prompt can hold the repo + user query without exceeding the limit.  
4. If not, fall back to retrieval‑augmented generation.

**Depth**  
- *Token budget*: A 1 M‑token repo would require ~30 k context for the model’s prompt—impractical even with cheap GPUs.  
- *Memory & throughput*: Storing the whole repo in RAM for every request leads to O(N) memory per call, hurting scalability.  
- *Inference speed*: Tokenizing a huge prompt each time adds linear overhead; latency spikes.  
- *Model performance*: Over‑loading context can dilute attention on relevant parts, reducing accuracy.

**Edge Cases**  
- Rapid repo updates → stale context.  
- Extremely long queries that push the limit.  
- Multi‑turn dialogues where cumulative context grows beyond capacity.

**Optimize & Communicate**  
Use a lightweight retrieval layer (e.g., vector store) to fetch top‑k relevant snippets, then concatenate them with the query—keeping prompt size well below limits while preserving accuracy and latency. Explain that this balances cost, performance, and maintainability, which is why FAANG teams favor retrieval‑augmented generation over monolithic context injection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
