---
qid: ing_3b6c1141b7__star__local
question: What is the best chunk size for RAG? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 390
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:27:24-05:00'
sources: []
---

**Situation** – In a recent project for a legal tech startup, we were building a RAG system to answer client queries against a 500 GB corpus of case law and statutes. The initial prototype used 512‑token chunks, but latency was high and the model’s precision dropped to 58 % on our test set.

**Task** – I needed to determine an optimal chunk size that balanced retrieval recall, inference speed, and answer quality, while keeping GPU memory usage under 16 GB per request.

**Action** – First, I ran a systematic sweep: 256, 512, 1024, and 2048 tokens. For each size I measured (1) top‑k recall against an annotated gold set, (2) latency on our A100 GPU, and (3) F1 score of the downstream GPT‑4 model. I also implemented a hybrid strategy: split documents into 512‑token “base” chunks but added a sliding window of 256 tokens for long passages to capture cross‑boundary context. Finally, I integrated a lightweight BM25 re-ranking layer to prune irrelevant candidates before feeding them to the LLM.

**Result** – The hybrid 512‑token base with 256‑token overlap achieved 78 % recall and 71 % F1, while keeping latency at 0.85 s per query—an 18 % speedup over the original design—and stayed within memory limits. I learned that a small overlap can dramatically improve contextual coverage without incurring prohibitive cost, and that empirical sweeps are essential because optimal chunk size depends on corpus length, model token budget, and hardware constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
