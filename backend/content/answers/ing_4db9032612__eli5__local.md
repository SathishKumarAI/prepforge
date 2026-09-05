---
qid: ing_4db9032612__eli5__local
question: 'Explain: You need to run an LLM call over 50,000 documents. The API allows
  ~100 concurrent requests and occasionally returns 429s and timeouts. Write the Python.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 641
total_tokens: 826
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:40:27-05:00'
sources: []
---

Imagine you’re a librarian who has to hand out a book (the LLM answer) to 50 000 visitors. The library can only serve about 100 people at once; if too many ask for the same book, some will be told “wait” (429 error) or their request may hang (timeout).  
To keep everyone moving smoothly, you let up to 100 people in at a time and give each one a polite “try again later” card when they’re denied.  

```python
import asyncio
import aiohttp

API_URL = "https://api.example.com/llm"
MAX_CONCURRENT = 100          # library seats
RETRY_LIMIT   = 3             # how many times to try again

async def ask_llm(session, doc_id):
    """Send one document to the LLM and return its reply."""
    for attempt in range(RETRY_LIMIT):
        try:
            async with session.post(API_URL,
                                    json={"document_id": doc_id},
                                    timeout=30) as resp:

                if resp.status == 200:          # success
                    data = await resp.json()
                    return data["answer"]

                if resp.status == 429:           # too many requests
                    wait_time = int(resp.headers.get("Retry-After", "1"))
                    print(f"429 on doc {doc_id}, waiting {wait_time}s")
                else:
                    print(f"Error {resp.status} on doc {doc_id}")

        except asyncio.TimeoutError:
            print(f"Timeout on doc {doc_id}")

        await asyncio.sleep(2)                 # brief pause before retry

    return None                                 # give up after retries


async def main():
    semaphore = asyncio.Semaphore(MAX_CONCURRENT)
    async with aiohttp.ClientSession() as session:

        async def worker(doc_id):
            async with semaphore:              # only 100 run at once
                answer = await ask_llm(session, doc_id)
                if answer:
                    print(f"Doc {doc_id} → {answer[:30]}…")

        tasks = [asyncio.create_task(worker(i)) for i in range(1, 50001)]
        await asyncio.gather(*tasks)


if __name__ == "__main__":
    asyncio.run(main())
```

**What this does**

* **Semaphore (`MAX_CONCURRENT`)** – keeps only about 100 requests alive at a time, just like the library’s seating limit.  
* **Retry loop** – if the API says “429 Too Many Requests” or the connection times out, we pause briefly and try again (up to `RETRY_LIMIT` times).  
* **Async I/O (`aiohttp`)** – lets many requests be sent without blocking, so the program stays fast even when waiting for responses.  

Run this script, and it will quietly hand out LLM answers for all 50 000 documents while respecting the API’s capacity limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
