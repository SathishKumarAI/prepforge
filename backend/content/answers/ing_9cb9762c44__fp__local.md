---
qid: ing_9cb9762c44__fp__local
question: 'Explain: You need to embed millions of text chunks. The embedding service
  takes batches with a max batch size and a max total-token limit. Write the batcher
  and make it fast.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 498
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:38:29-05:00'
sources: []
---

**Why batching matters**

Embedding APIs are *stateless* but charge per token and have a hard ceiling on how many requests you can issue per second. If you naively send one chunk at a time, you waste bandwidth; if you pile all chunks together you exceed the token limit or hit rate limits. The optimal strategy is to **pack** as many chunks as possible into each request without violating two constraints:

1. **Max batch size (B)** – number of chunks per call.  
2. **Max total tokens (T)** – cumulative token count of all chunks in the batch.

This is a classic *bounded knapsack* problem, but because the items (chunks) arrive sequentially and you must finish each batch before starting the next, a greedy strategy suffices: keep adding chunks until either B or T would be exceeded. The key insight is that **token counts are additive**; thus the greedy packing yields an optimal solution for this online variant.

**Fast implementation**

```python
def batch_chunks(chunks, max_batch, max_tokens):
    """Yield batches of (ids, texts) that respect limits."""
    cur_ids, cur_texts, cur_tok = [], [], 0
    for cid, text in chunks:
        tok = len(text.split())          # or a pre‑computed token count
        if cur_tok + tok > max_tokens or len(cur_ids) == max_batch:
            yield cur_ids, cur_texts
            cur_ids, cur_texts, cur_tok = [], [], 0
        cur_ids.append(cid)
        cur_texts.append(text)
        cur_tok += tok
    if cur_ids:                         # final partial batch
        yield cur_ids, cur_texts
```

**Performance tricks**

- **Pre‑compute token counts** once (O(n)).  
- Use a **circular buffer** to avoid reallocating lists on every batch.  
- Parallelize the *embedding* calls with `asyncio` or a thread pool; the batching logic stays single‑threaded.

The non‑obvious insight: because you’re constrained by both count and tokens, the greedy packing automatically adapts to variable chunk sizes without any backtracking—making it both optimal **and** embarrassingly fast.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
