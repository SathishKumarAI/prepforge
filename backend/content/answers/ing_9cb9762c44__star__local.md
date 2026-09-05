---
qid: ing_9cb9762c44__star__local
question: 'Explain: You need to embed millions of text chunks. The embedding service
  takes batches with a max batch size and a max total-token limit. Write the batcher
  and make it fast.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 340
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:45:28-05:00'
sources: []
---

**Situation:**  
At my last gig I was tasked with embedding a 12‑million‑chunk corpus for a semantic search engine. The third‑party embedding API only accepted batches of up to 32 requests and capped the total tokens per batch at 2 000, so naïve batching would take days.

**Task:**  
I had to design a batcher that respected both limits while maximizing throughput on my GPU‑enabled server.

**Action:**  
I built a lightweight Python generator that first tokenized each chunk with HuggingFace’s tokenizer to get exact lengths. It then greedily packed chunks into batches: starting from the largest remaining chunk, it added the next largest that wouldn’t exceed the token cap or the 32‑request limit. I used `asyncio` and an HTTP/2 client (httpx) to fire off up to 8 concurrent requests, each carrying a JSON payload of the batch. To avoid re‑tokenizing, I cached token counts in a LRU dict. The generator yielded batches until all chunks were processed.

**Result:**  
The new batcher reduced API calls from ~400 000 to ~120 000 and cut total run time from 48 hours to under 12 hours—an 80% speed‑up. I also learned that careful packing with token awareness is far more efficient than fixed‑size batching, especially when the underlying model has strict limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
