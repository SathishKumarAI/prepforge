---
qid: ing_92e8c0f069__faang__local
question: 'Q: Why is Context Caching better than RAG for a 50k token document?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 482
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:26:07-05:00'
sources: []
---

**Clarify**  
We’re comparing two retrieval‑augmented strategies for a single 50 k‑token source: (1) *Context Caching*—embedding the whole document once, storing that vector, and reusing it per query; (2) *RAG*—on each user prompt we retrieve the top‑k passages from the document.  
Assumptions:  
- The model can handle a few hundred tokens of context at a time.  
- Retrieval latency is non‑negligible.  
- The 50 k doc is static or changes infrequently.

**Approach**  
1. Embed the entire document into one vector (or a small set for hierarchical retrieval).  
2. Cache that vector and serve it to every query, avoiding per‑query passage lookups.  
3. Use the cached context as the prompt for the language model.

**Depth**  
- *Latency*: Context caching eliminates O(k·log N) lookup time; each query is just a vector similarity dot product + single pass through the LLM.  
- *Cost*: One embedding computation vs. many per‑query embeddings.  
- *Memory*: Store one dense vector (~2 kB for 768‑dim) instead of thousands of passage vectors.  
- *Accuracy*: Since the cache contains the entire document, we avoid retrieval errors (missing relevant passages). The trade‑off is that the LLM must compress the whole context into its internal state—possible if the prompt is ≤ 4 k tokens.

**Edge Cases**  
- If the doc changes frequently, cache invalidation becomes costly.  
- Extremely long or noisy documents may overwhelm the model’s context window, hurting coherence.  
- Retrieval‑based RAG can be tuned (e.g., dynamic k) to mitigate missing relevant snippets.

**Optimize & Communicate**  
To further improve:  
- Use hierarchical embeddings (section + full doc) so we only pull in the most relevant chunk when needed.  
- Cache per user session to capture personalization while still reusing the global context.  
Explain that for a 50 k token static document, Context Caching offers lower latency and simpler deployment, making it preferable over RAG’s repeated retrieval overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
