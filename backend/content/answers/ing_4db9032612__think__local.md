---
qid: ing_4db9032612__think__local
question: 'Explain: You need to run an LLM call over 50,000 documents. The API allows
  ~100 concurrent requests and occasionally returns 429s and timeouts. Write the Python.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 216
output_tokens: 582
total_tokens: 798
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:11:14-05:00'
sources: []
---

**1. Clarify the problem & state assumptions**

- *What we have*: 50 000 documents, an LLM API that can handle ~100 concurrent requests, occasional HTTP 429 (rate‑limit) and timeouts.
- *What we need*: A robust Python script that sends all requests efficiently while handling back‑off and retries.
- *Assumptions*:  
  - Each document is processed independently.  
  - The API key and endpoint are known.  
  - We can use `asyncio` or a thread pool; choose the simplest reliable approach.  
  - We’ll log failures for later inspection.

**2. Mental model / framework**

- **Batching + concurrency control**: Use a semaphore (or async limiter) to cap concurrent calls at ~100.  
- **Retry strategy**: Exponential back‑off with jitter for 429s and timeouts, capped retries.  
- **Error handling**: Capture non‑retryable errors, log them, and continue.  
- **Result aggregation**: Store responses in a thread‑safe structure (e.g., `queue.Queue` or `asyncio.Queue`).  

**3. Step‑by‑step reasoning**

1. Define constants: max concurrency (`MAX_CONCURRENCY = 100`), max retries, base back‑off.  
2. Create an async worker function that:
   - Acquires the semaphore.
   - Sends the request in a `try/except`.
   - On success, puts result into a results queue; on failure, checks status code.  
3. If status is 429 or timeout (`asyncio.TimeoutError`), sleep for back‑off time and retry until max attempts.  
4. Use `asyncio.gather` to launch workers for all documents.  
5. After completion, dump the results (e.g., JSON lines).  

**4. Common traps to avoid**

- **Ignoring semaphore release**: Always use `async with sem:` or a `finally` block.  
- **Infinite retry loops**: Cap retries; otherwise you’ll stall on persistent errors.  
- **Blocking I/O in async code**: Use `aiohttp` (or `httpx.AsyncClient`) instead of synchronous requests.  
- **Data race on shared structures**: Prefer async queues or thread‑safe collections.

**5. Sanity‑check & communicate**

- Run a small test with 10 documents to verify concurrency limits and retry logic.  
- Log timestamps to confirm back‑off behavior.  
- Explain the design: “We cap at 100 concurrent calls, use exponential back‑off for rate limits/timeouts, and process all 50k documents asynchronously while collecting results.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
