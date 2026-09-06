---
qid: ing_5a22e2fdb3__fp__local
question: 'Explain: Q4: Explain chunking strategies and when to use each'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 539
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:15:56-05:00'
sources: []
---

**Chunking in LLMs: a principled view**

Large‑scale language models can only attend to *N* tokens at once (the context window). When the input exceeds N, we must partition it into *chunks*. The fundamental problem is to preserve **semantic coherence** while respecting the fixed capacity.  

1. **Sliding‑window chunking**  
   - *When*: Simple, linear texts or when overlap is acceptable.  
   - *Why it works*: Each chunk shares a buffer of overlapping tokens (≈10–20 %) so that local context is maintained; this mirrors the way humans read—by keeping the last few sentences in mind.  

2. **Hierarchical chunking**  
   - *When*: Multi‑level documents (e.g., books, codebases).  
   - *Why it works*: Build a tree of summaries: first compress paragraphs into section heads, then compress sections into chapter heads, finally feed the top‑level summary to the model. This exploits the **information bottleneck** principle—retain only the most predictive information at each level.  

3. **Semantic segmentation (topic‑aware)**  
   - *When*: Documents with distinct topics or modalities.  
   - *Why it works*: Detect topic boundaries via clustering embeddings; chunk around them so that each chunk is internally homogeneous. This reduces cross‑topic bleed‑through and aligns with the model’s learned attention biases toward local coherence.  

4. **Recursive chunking (dynamic)**  
   - *When*: Unstructured, noisy inputs or when the model must decide on the fly.  
   - *Why it works*: Start with a single large chunk; if the model flags low confidence, recursively split around the token that maximizes perplexity drop. This is an online application of **adaptive sampling**.

### Non‑obvious insight
Most people treat chunking as a mechanical cut‑and‑paste operation. The deeper reason to choose a strategy is *the trade‑off between intra‑chunk coherence and inter‑chunk consistency*. Sliding windows preserve the former but risk losing long‑range dependencies; hierarchical methods preserve the latter but introduce an extra summarization error. Selecting a method therefore boils down to which type of dependency (local vs. global) dominates the task at hand—a decision that can be formalized as optimizing mutual information between chunked representations and the target output.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
