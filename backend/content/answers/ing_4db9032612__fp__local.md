---
qid: ing_4db9032612__fp__local
question: 'Explain: You need to run an LLM call over 50,000 documents. The API allows
  ~100 concurrent requests and occasionally returns 429s and timeouts. Write the Python.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 677
total_tokens: 874
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:50:41-05:00'
sources: []
---

**Why the pattern works**

You have a *fixed* concurrency budget (≈100) and an API that is *stateless but rate‑limited*.  
If you flood it with more than that, the provider issues **429s** or timeouts.  
The optimal strategy therefore:

1. **Bound the number of in‑flight requests** – guarantees you never exceed the quota.  
2. **Exponential back‑off + jitter** – turns every transient failure into a *probabilistic* retry that does not create new bursts.  
3. **Batching the payload** (if the LLM supports it) reduces request/response overhead and improves throughput.

The deeper principle is *Poisson traffic smoothing*: by keeping the arrival rate below the service capacity you keep the queue length bounded, which translates into predictable latency.

```python
import asyncio, httpx, random, time

API_URL = "https://api.example.com/v1/chat/completions"
MAX_CONCURRENCY = 100
RETRY_LIMIT   = 5

async def call_llm(client: httpx.AsyncClient, doc: str):
    payload = {"model":"gpt-4","messages":[{"role":"user","content":doc}]}
    for attempt in range(RETRY_LIMIT):
        try:
            resp = await client.post(API_URL, json=payload, timeout=30.0)
            resp.raise_for_status()
            return resp.json()["choices"][0]["message"]["content"]
        except httpx.HTTPStatusError as exc:
            if exc.response.status_code == 429 or exc.is_timeout():
                wait = (2 ** attempt) * random.uniform(0.5, 1.5)
                await asyncio.sleep(wait)
            else:
                raise
    raise RuntimeError(f"Failed after {RETRY_LIMIT} attempts")

async def main(docs):
    semaphore = asyncio.Semaphore(MAX_CONCURRENCY)
    async with httpx.AsyncClient() as client:
        tasks = []
        for doc in docs:
            async with semaphore:
                task = asyncio.create_task(call_llm(client, doc))
                tasks.append(task)
        results = await asyncio.gather(*tasks, return_exceptions=True)
    return results

# Example usage
if __name__ == "__main__":
    docs = [f"Document {i}" for i in range(50000)]
    start = time.time()
    out = asyncio.run(main(docs))
    print(f"Took {time.time()-start:.1f}s, got {len(out)} results")
```

**Non‑obvious insight:**  
When you cap concurrency *and* use jittered back‑off, the API’s internal rate limiter behaves like a *virtual queue*. Each retry that lands in the “available” window gets processed immediately, so the overall throughput is limited only by the *service capacity*, not by your own request pacing. This turns a chaotic burst of 429s into a smooth, steady stream of completions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
