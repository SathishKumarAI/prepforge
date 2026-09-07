---
qid: ing_4db9032612__faang__local
question: 'Explain: You need to run an LLM call over 50,000 documents. The API allows
  ~100 concurrent requests and occasionally returns 429s and timeouts. Write the Python.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 956
total_tokens: 1216
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:45:35-05:00'
sources: []
---

**Clarify**  
We must fetch embeddings for **50 k** documents using an LLM‑API that caps us at ≈100 parallel calls. The API is rate‑limited (429) and can timeout. We need a robust, efficient Python script that respects limits, retries intelligently, logs failures, and returns a mapping of doc‑id → embedding.

Assumptions to confirm:  
- Request payload format (JSON with `text`).  
- Max batch size per request is 1.  
- API key stored in env variable `API_KEY`.  
- We want to store results locally (e.g., `embeddings.jsonl`).

**Approach**  
1. Use a thread‑pooled executor (`ThreadPoolExecutor(max_workers=100)`).  
2. Wrap each call in an async retry loop with exponential backoff and jitter, capping retries at 5.  
3. If we hit 429, inspect `Retry-After` header or sleep for a short random interval before retrying.  
4. Collect results as they finish; write to disk incrementally to avoid OOM.

**Depth (code)**  

```python
import os, json, time, random, logging
from concurrent.futures import ThreadPoolExecutor, as_completed
import requests

API_URL = "https://api.llm.com/v1/embeddings"
HEADERS = {"Authorization": f"Bearer {os.getenv('API_KEY')}",
           "Content-Type": "application/json"}

MAX_WORKERS = 100
RETRY_LIMIT = 5
BACKOFF_BASE = 0.5

logging.basicConfig(level=logging.INFO,
                    format="%(asctime)s %(levelname)s [%(threadName)s] %(message)s")

def fetch_embedding(doc_id, text):
    payload = {"text": text}
    for attempt in range(RETRY_LIMIT + 1):
        try:
            resp = requests.post(API_URL, headers=HEADERS,
                                 json=payload, timeout=10)
            if resp.status_code == 200:
                return doc_id, resp.json()["embedding"]
            elif resp.status_code == 429:
                retry_after = int(resp.headers.get("Retry-After", "1"))
                sleep_time = random.uniform(retry_after, retry_after + 1)
                logging.warning(f"429 for {doc_id}, sleeping {sleep_time:.2f}s")
                time.sleep(sleep_time)
            else:
                resp.raise_for_status()
        except requests.RequestException as e:
            logging.error(f"Request error for {doc_id}: {e}")
        backoff = BACKOFF_BASE * (2 ** attempt) + random.uniform(0, 0.1)
        logging.info(f"Retrying {doc_id} in {backoff:.2f}s")
        time.sleep(backoff)
    raise RuntimeError(f"Failed after {RETRY_LIMIT} retries: {doc_id}")

def main(docs):
    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as ex, \
         open("embeddings.jsonl", "w") as out:
        futures = {ex.submit(fetch_embedding, did, txt): did for did, txt in docs.items()}
        for fut in as_completed(futures):
            doc_id = futures[fut]
            try:
                _, emb = fut.result()
                out.write(json.dumps({"id": doc_id, "embedding": emb}) + "\n")
            except Exception as exc:
                logging.error(f"Doc {doc_id} failed: {exc}")

if __name__ == "__main__":
    # Example docs dict: {id: text}
    docs = {"doc1": "text…", ...}  # load from file/DB
    main(docs)
```

**Edge Cases**  
- **All workers busy** → queueing handled by executor.  
- **Unrecoverable 5xx** → after retries we log and skip to keep pipeline moving.  
- **Large payloads** → ensure text length < API limit; pre‑truncate if needed.  

**Optimize & Communicate**  
- We could batch requests if the API supports it, reducing overhead.  
- Use `asyncio` + `aiohttp` for higher concurrency if CPU is idle.  
- For 50 k docs at ~200 ms per call, this script completes in ≈10–12 min (100 workers × 5 s avg).  

Explain trade‑offs: threads avoid GIL issues with I/O, retries keep throughput high despite rate limits, and incremental file writes prevent memory blow‑up.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
