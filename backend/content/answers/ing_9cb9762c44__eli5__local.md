---
qid: ing_9cb9762c44__eli5__local
question: 'Explain: You need to embed millions of text chunks. The embedding service
  takes batches with a max batch size and a max total-token limit. Write the batcher
  and make it fast.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 258
total_tokens: 442
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:45:52-05:00'
sources: []
---

Think of the embedding service like a post office that only accepts envelopes in two ways: you can send at most **N** envelopes per trip (max batch size), and all the letters inside those envelopes together must not exceed a certain number of pages (max total‑token limit).  
Your job is to pack the millions of text chunks into these trips efficiently, so every letter gets delivered with minimal waiting time.

*Batcher*: a small program that keeps a “current trip” open. As you read each text chunk, it asks: *“Will adding this chunk keep us under both limits?”*  
If yes, add it to the current trip; if no, send the current trip off (call the embedding service) and start a new one with the new chunk.

To make it fast, use a simple queue and process chunks sequentially—no heavy math or sorting. Once a trip is sent, you can immediately start building the next one while the previous request finishes in the background. This way, millions of texts are turned into embeddings in near‑real‑time, just like an efficient mailroom that never lets any envelope pile up too long.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
