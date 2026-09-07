---
qid: ing_04acf9cf01__faang__local
question: 'Explain: Wrapping Up — Context Window Management for Long-Running Agents:
  Strategies and Tradeoffs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 495
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:55:31-05:00'
sources: []
---

**Clarify**  
We’re building an autonomous agent that runs for hours/days, generating a stream of prompts/answers. The model has a fixed‑size token context window (≈ 8k–32k tokens). I’ll confirm: *What is the maximum window size?* *Do we need to preserve all history or just actionable parts?* *Is the agent allowed to offload past data to external memory?*

**Approach**  
1. **Sliding Window + Summarization** – keep the most recent N tokens; periodically summarize older content into a concise “state” vector.  
2. **Hierarchical Memory** – store chunks in an LRU cache keyed by relevance; retrieve relevant snippets when needed.  
3. **External Knowledge Store** – push outdated logs to a database and fetch on demand via embeddings.  
4. **Chunked Prompting** – break the prompt into smaller, self‑contained segments that can be processed sequentially.

**Depth**  
- *Sliding Window*: O(1) memory update; risk of losing context for long‑term dependencies.  
- *Summarization*: Use a lightweight model (e.g., distilBERT) to compress 10k tokens → 200 tokens, retaining semantic gist (≈ 95% accuracy).  
- *Hierarchical Memory*: Retrieval cost ≈ O(log M); M = number of chunks.  
- *External Store*: Latency added but scales linearly with data size; trade‑off between real‑time performance and completeness.

**Edge Cases**  
- Sudden context shift (e.g., new task) may require flushing the window.  
- Summaries can miss rare facts → need a fallback “look‑back” query.  
- Memory cache thrashing if relevance metric is poor.

**Optimize & Communicate**  
Start with a sliding window + periodic summarization; monitor perplexity spikes to trigger deeper look‑backs. If latency grows, offload older chunks to an embedding‑based vector store and only bring back the top‑k relevant snippets. Explain that this balances *speed* (O(1) updates), *memory footprint*, and *semantic fidelity*. Highlight that we’ll iterate on relevance scoring and summarization quality based on real agent logs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
