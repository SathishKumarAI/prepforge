---
qid: ing_330b785e50__fp__local
question: 'Explain: Using Prompt Caching to reduce the costs of Contextual Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 367
total_tokens: 540
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:53:32-05:00'
sources: []
---

### Why Prompt Caching Matters

When a language model answers a question, it first **embeds** every token in its context window, then performs a massive dot‑product over all embeddings to produce the next token probabilities.  
This “forward pass” costs roughly *O(n²)* compute, where *n* is the number of tokens in the prompt plus history. In production, each user query repeats many of the same background sentences (e.g., company policy, FAQ snippets).  

**Prompt caching** stores the pre‑computed embeddings and intermediate activations for those repeated tokens once per session or cluster. Subsequent queries can then **reuse** these cached tensors instead of recomputing them from scratch. The reduction in FLOPs is proportional to the fraction of prompt overlap: if 70 % of a 2 k‑token context is shared, you cut forward cost by ~70 %.

### Deeper Principle

This technique exploits *contextual locality*—the observation that language models are largely **translation invariant** over identical token sequences. By treating repeated prompts as “static features,” we turn the expensive per‑query inference into a dynamic retrieval of cached embeddings plus a lightweight re‑ranking step. It’s essentially a form of **memoization** applied to neural computation.

### Non‑Obvious Insight

Most people overlook that caching also reduces *latency variance*. When the model must recompute a long prompt, GPU stalls and kernel launch overhead dominate; with a cache hit, the kernel becomes a simple copy operation. Thus, beyond cost savings, prompt caching yields **more predictable response times**, which is critical for real‑time conversational AI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
