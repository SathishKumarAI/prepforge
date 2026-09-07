---
qid: ing_9cb9762c44__faang__local
question: 'Explain: You need to embed millions of text chunks. The embedding service
  takes batches with a max batch size and a max total-token limit. Write the batcher
  and make it fast.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 889
total_tokens: 1148
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:48:23-05:00'
sources: []
---

**Clarify**

You’re given an input stream of *millions* of text chunks that must be sent to an embedding API.  
The API accepts requests in **batches** with two hard limits:  

1. `maxBatchSize` – maximum number of items per request.  
2. `maxTokenLimit` – maximum total tokens in the batch (sum of token counts).  

We need a **batcher** that groups chunks into requests while respecting both limits, and we want it to run as fast as possible.

Assumptions:  
- Token count for each chunk is known or can be computed cheaply.  
- The order of results does not matter (otherwise we’d need to preserve indices).  
- Batching cost dominates I/O; CPU time should be minimal.

---

**Approach**

1. **Pre‑process**: For each chunk, store `(chunk, tokenCount)`.  
2. **Greedy packing**: Iterate chunks in order; maintain a running list and token sum.  
   - If adding the next chunk exceeds either limit, flush the current batch, start a new one.  
3. **Concurrency**: Use a worker pool to send batches asynchronously (e.g., `asyncio` or thread‑pool).  
4. **Backpressure**: Limit in‑flight requests to avoid memory blowup.

This is essentially a 2‑dimensional bin‑packing but the greedy strategy yields optimality for *any* order when one dimension is strictly bounded by a fixed size (the token limit).

---

**Depth**

```python
from collections import deque
import asyncio

async def batcher(chunks, max_batch_size, max_token_limit, send_func):
    """
    chunks: iterable of (text_chunk, token_count)
    send_func: async fn(list_of_chunks) -> None  # performs API call
    """
    batch = []
    tokens = 0
    for chunk, tok in chunks:
        if len(batch)+1 > max_batch_size or tokens+tok > max_token_limit:
            await send_func(batch)          # flush current batch
            batch, tokens = [], 0           # reset
        batch.append(chunk)
        tokens += tok
    if batch:                               # flush last batch
        await send_func(batch)

# Example worker pool
async def main():
    queue = asyncio.Queue()
    for _ in range(10):   # 10 concurrent workers
        asyncio.create_task(worker(queue, batcher))

async def worker(queue, batcher):
    while True:
        chunks = await queue.get()         # get next set of raw chunks
        await batcher(chunks)
```

*Complexity*:  
- **Time**: O(N) to iterate through all chunks.  
- **Space**: O(max_batch_size) for the in‑flight batch; negligible compared to N.

*Trade‑offs*:  
- Greedy packing is linear and fast but may produce slightly suboptimal token utilization if chunk sizes vary wildly.  
- If order matters, we’d need to keep indices and re‑assemble results afterward (adds minor overhead).

---

**Edge Cases**

| Case | What breaks? | Test |
|------|--------------|------|
| Chunk > `max_token_limit` alone | Greedy will never fit it | Pass a single huge chunk |
| Empty input | No batches sent | Verify no API call |
| Exactly on limits | Off‑by‑one errors | Use chunks that sum to the limit |
| High variance token counts | Poor packing efficiency | Mix tiny and gigantic chunks |

---

**Optimize & Communicate**

1. **Pre‑tokenization caching**: If token counting is expensive, cache results or use a fast tokenizer.  
2. **Adaptive batch sizing**: Dynamically adjust `max_batch_size` based on average token size to maximize throughput.  
3. **Profiling**: Measure CPU vs I/O; if API latency dominates, increase concurrency.

I’d explain this flow in the interview, show the greedy logic, discuss its O(N) efficiency and justify that any better packing would still require a pass over all chunks (so no asymptotic win). This demonstrates structured problem solving, clear communication, and depth—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
