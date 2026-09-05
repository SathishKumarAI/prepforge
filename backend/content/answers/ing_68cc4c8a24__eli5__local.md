---
qid: ing_68cc4c8a24__eli5__local
question: 'Explain: Why is LLM decode memory-bandwidth-bound rather than compute-bound?
  Walk me through the numbers on an H100.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 206
total_tokens: 379
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:21:52-05:00'
sources: []
---

Imagine a giant library (the LLM) that wants to read one page at a time from an enormous book (the model’s weights). The “book” sits on a super‑fast shelf, but the librarian (GPU) can only pull out pages as fast as the hallway lets them slide through. On NVIDIA’s H100, each of its 80 GB/s memory bandwidth can carry about 10 billion tokens per second if every token needs a single weight lookup. That’s far more than the GPU’s compute engine can finish in that time—so the bottleneck is how quickly data can be moved, not how many arithmetic operations it can perform. In short, the H100’s memory bus is the slowest link; once the tokens reach the processor, the math is done almost instantly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
