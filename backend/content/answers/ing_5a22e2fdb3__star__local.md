---
qid: ing_5a22e2fdb3__star__local
question: 'Explain: Q4: Explain chunking strategies and when to use each'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 359
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:27:52-05:00'
sources: []
---

**Situation:**  
When I was building a document‑retrieval pipeline for our legal-tech startup, the API I used (OpenAI’s GPT‑4) capped us at 8 000 tokens per request. Our case files averaged 30 000 tokens, so we had to decide how to break them into chunks that preserved context while staying under limit.

**Task:**  
Design a chunking strategy that maximized retrieval accuracy and minimized latency for the “summarize key points” feature, which users expected to run in under two seconds per file.

**Action:**  
I implemented three strategies: (1) fixed‑size 3 000‑token chunks with overlap of 200 tokens to keep sentence boundaries intact; (2) semantic segmentation using SentencePiece embeddings to split at natural topic boundaries; and (3) a hierarchical approach where the file was first divided into 5 000‑token blocks, each summarized separately, then combined for a final summary. I benchmarked each method on 100 documents, measuring BLEU scores against human summaries and average inference time.

**Result:**  
The semantic segmentation achieved the highest BLEU (0.72 vs. 0.65 for fixed chunks) while keeping latency at 1.8 s per file—well within our SLA. I learned that overlap helps preserve context but adds cost, whereas topic‑aware splitting can reduce token usage without sacrificing quality. This approach now powers our production summarizer and scales as document sizes grow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
