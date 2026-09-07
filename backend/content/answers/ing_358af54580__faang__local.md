---
qid: ing_358af54580__faang__local
question: 'Explain: Context Window Management for Long-Running Agents: Strategies
  and Tradeoffs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 404
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:48:34-05:00'
sources: []
---

**Clarify**  
We’re asked how a long‑running autonomous agent (e.g., a chatbot or RL policy) can keep track of *context* when its internal memory is limited and the dialogue may span thousands of turns. I’ll assume we have a bounded “window” of tokens that can be fed to the model at each step, and we want strategies for selecting what to retain.

**Approach**  
1. **Sliding window** – keep the most recent N tokens.  
2. **Hierarchical summarization** – compress older turns into summaries that fit in the window.  
3. **Chunked retrieval** – store raw history in a database and fetch relevant chunks on demand via semantic search.  
4. **Hybrid cache** – combine 1–3, using importance scores to decide what to keep.

**Depth**  
- *Sliding*: O(1) update; loses long‑term dependencies.  
- *Summarization*: uses an encoder‑decoder (or prompt‑based) model; risk of losing nuance but preserves key facts.  
- *Retrieval*: latency depends on index speed; can use vector DBs (FAISS, Pinecone).  
- *Hybrid*: maintain a small “core” buffer plus episodic summaries; trade‑off between freshness and recall.

**Edge Cases**  
- Rapidly changing topics → sliding window may discard useful context.  
- Summaries can hallucinate or omit rare entities → test with factual QA.  
- Retrieval latency spikes during peak load → add caching layers.

**Optimize & Communicate**  
Start simple (sliding), profile perplexity and user satisfaction, then layer summarization for long‑term trends, and finally enable retrieval only when the model predicts low confidence. Explain each step to interviewers as a progressive refinement that balances *recall*, *latency*, and *model capacity*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
