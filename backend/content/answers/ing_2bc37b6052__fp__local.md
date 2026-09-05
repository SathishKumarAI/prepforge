---
qid: ing_2bc37b6052__fp__local
question: 'Explain: Pattern 2: Cost-Optimized with Prompt Caching'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 409
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:37:41-05:00'
sources: []
---

**Pattern 2: Cost‑Optimized with Prompt Caching**

The fundamental problem is that every API call to a large language model (LLM) incurs the same fixed token cost regardless of how many *new* tokens it generates. In practice, most production workloads repeatedly ask the LLM to “translate this sentence,” “summarize these paragraphs,” or “generate a response for user X.” The prompt—the context that tells the model what to do—is often identical across calls.

Let \(P\) be the prompt length in tokens and \(G_i\) the number of new tokens generated for request \(i\). The cost per call is proportional to \(C(P+G_i)\), where \(C(\cdot)\) captures token‑pricing. If we cache the *embedding* or *vector representation* of \(P\) once, subsequent calls can be served by appending only \(G_i\) tokens to a pre‑computed context. The effective prompt length becomes negligible, reducing cost from \(O(P+G_i)\) to \(O(G_i)\).

This is an instance of **information reuse**: the model’s internal state after processing \(P\) need not be recomputed. It leverages *caching* as a form of *memoization* in probabilistic inference, akin to caching pre‑computed likelihoods in Bayesian networks.

**Non‑obvious insight:** Prompt caching is only profitable when the *entropy* of the prompt is low—i.e., when it contains little novel information per token. For high‑entropy prompts (e.g., user‑generated text), caching offers minimal savings because each call presents new data that must be encoded afresh. Thus, effective cost optimisation requires profiling prompt entropy and selectively caching only the most repetitive, deterministic contexts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
