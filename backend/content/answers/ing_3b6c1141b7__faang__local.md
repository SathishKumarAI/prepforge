---
qid: ing_3b6c1141b7__faang__local
question: What is the best chunk size for RAG? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 424
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:02:30-05:00'
sources: []
---

**Clarify**  
The question asks for a *chunk size* (token or word window) when using Retrieval‑Augmented Generation (RAG). I’ll assume:  
1. The underlying LLM has a fixed context limit (e.g., 4 k tokens).  
2. Documents are tokenized in the same way as the model’s tokenizer.  
3. We want to maximize recall while keeping each retrieval query short enough for efficient inference.

**Approach**  
1. Determine the model’s usable context after accounting for prompt and output.  
2. Estimate the number of chunks that fit within that space.  
3. Pick a size that balances *semantic granularity* (larger chunks → more overlap) vs *retrieval precision* (smaller chunks → many candidates).  

**Depth**  
- For GPT‑4o (8 k tokens), leaving ~1 k for prompt & answer leaves 7 k for context.  
- If we retrieve 3–5 passages, each chunk ≈ 1.4–2.3 k tokens (~700–1 200 words).  
- Empirically, a 1‑2 k token window yields >90 % recall on Wikipedia QA datasets while keeping retrieval cost low.  
- Use sliding windows with ~50 % overlap to avoid boundary artifacts.

**Edge Cases**  
- Extremely long documents (>10 k tokens): split into multiple chunks and index each separately.  
- Short documents (<500 tokens): pad or merge adjacent docs.  
- Tokenizer variance: always measure in tokens, not words, to match model limits.

**Optimize & Communicate**  
Start with a 1.5 k token chunk, monitor MRR/Recall@K; if recall drops, halve the size and increase the number of retrieved passages. If latency spikes, double the size. This iterative tuning lets us trade off precision vs speed while keeping the solution explainable to stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
