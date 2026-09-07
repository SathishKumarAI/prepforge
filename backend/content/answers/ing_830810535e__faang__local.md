---
qid: ing_830810535e__faang__local
question: 'Explain: Streaming summarisation within token limits'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 452
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:49:24-05:00'
sources: []
---

**Clarify**

We need a method that takes an arbitrarily long text stream and produces a summary that never exceeds a given token budget (e.g., 200 tokens). Assume we have an LLM capable of summarising any chunk, but the overall input may be thousands of tokens.

**Approach**

1. **Chunking** – split the stream into overlapping windows that fit comfortably within the model’s context size (e.g., 4 k tokens).
2. **Local Summaries** – run the LLM on each window to produce a concise “local” summary.
3. **Hierarchical Merging** – iteratively merge adjacent summaries, re‑summarising them until the final token count is below the limit.

This is essentially a recursive summarisation tree that respects the token budget at every step.

**Depth**

- *Chunking*: use a sliding window with 50 % overlap to preserve cross‑sentence coherence.
- *Local Summaries*: prompt: “Summarise this passage in ≤ 50 tokens.” Complexity O(n) where n is number of chunks.
- *Merging*: at each level, pair summaries and re‑summarise with a tighter token limit (e.g., half the remaining budget). This guarantees logarithmic depth, so overall time ≈ O(n log n).
- *Memory*: only keep current and previous layer summaries; peak memory is proportional to the largest chunk size.

**Edge Cases**

- Extremely short input: skip summarisation.
- Repetitive content: local summaries may be redundant—use a deduplication step before merging.
- Token estimation errors: validate final token count with a tokenizer before returning.

**Optimize & Communicate**

Explain that this pipeline ensures each LLM call stays well within context limits, keeps the overall summary size predictable, and scales linearly with input length. Highlight trade‑offs: more overlap yields better coherence but higher compute; deeper merging improves conciseness at the cost of additional calls. Conclude by noting how the hierarchical strategy aligns with production constraints (latency, cost) while delivering a bounded‑size output.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
