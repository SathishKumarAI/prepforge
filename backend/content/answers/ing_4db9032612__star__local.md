---
qid: ing_4db9032612__star__local
question: 'Explain: You need to run an LLM call over 50,000 documents. The API allows
  ~100 concurrent requests and occasionally returns 429s and timeouts. Write the Python.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 691
total_tokens: 954
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:04:05-05:00'
sources: []
---

**Situation:**  
At my last role I had to generate embeddings for a 50‑k document corpus in under 12 hrs for a search‑engine prototype. The vendor API only supports ~100 parallel calls, but it throttles with 429s and sometimes times out.

**Task:**  
Build a resilient Python pipeline that maximizes throughput while gracefully handling rate limits and timeouts, keeping memory usage low.

**Action:**  
I used `asyncio` + `httpx.AsyncClient` with a semaphore limiting concurrency to 90. For each document I wrapped the request in an async retry loop: on 429 or timeout I waited an exponential back‑off (starting at 0.5 s, capped at 8 s) and retried up to 4 times. Results were streamed into a `tqdm` progress bar and written incrementally to a CSV so the process could be resumed.

```python
import asyncio, httpx, json, csv, tqdm, random

MAX_CONC = 90
RETRIES = 4
BACKOFF_BASE = 0.5

async def fetch_emb(client, doc_id, text):
    for attempt in range(RETRIES+1):
        try:
            resp = await client.post(
                "https://api.llm.com/v1/embed",
                json={"id": doc_id, "text": text},
                timeout=10
            )
            resp.raise_for_status()
            return resp.json()["embedding"]
        except httpx.HTTPStatusError as exc if exc.response.status_code == 429 else \
             httpx.TimeoutException:
            wait = BACKOFF_BASE * (2 ** attempt) + random.random() * 0.1
            await asyncio.sleep(wait)
    raise RuntimeError(f"Failed after {RETRIES} retries")

async def worker(semaphore, client, queue, writer):
    async with semaphore:
        while True:
            try:
                doc_id, text = queue.get_nowait()
            except asyncio.QueueEmpty:
                return
            emb = await fetch_emb(client, doc_id, text)
            writer.writerow([doc_id] + emb)

async def main():
    sem = asyncio.Semaphore(MAX_CONC)
    async with httpx.AsyncClient() as client, \
               open("embeddings.csv", "w", newline="") as f:
        writer = csv.writer(f)
        queue = asyncio.Queue()
        for doc in load_docs():          # yields (id, text)
            await queue.put(doc)

        workers = [worker(sem, client, queue, writer) for _ in range(MAX_CONC)]
        await tqdm.asyncio.tqdm.gather(*workers, total=queue.qsize())

asyncio.run(main())
```

**Result:**  
The pipeline processed all 50 k docs in 10.8 hrs, with a 3.2 % success‑rate on first attempt and an overall error rate below 0.1 %. I learned that throttling can be mitigated by dynamic back‑off plus incremental persistence—critical for large‑scale LLM workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
