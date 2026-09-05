---
qid: ing_13070019ed__fp__local
question: 'Explain: Code Example — Concurrency vs Parallelism - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 446
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:46:19-05:00'
sources: []
---

### Why the distinction matters

When a program needs to perform many independent tasks, **concurrency** is about *structuring* those tasks so that the system can interleave their progress; **parallelism** is about actually executing them at the same time on multiple cores or machines.  
If you ignore this separation, you’ll either waste CPU cycles (spurious context switches) or starve a task behind I/O.

### A minimal example in Python

```python
import asyncio, concurrent.futures, os, time

# ---------- Concurrency ----------
async def fetch(url):
    await asyncio.sleep(1)          # simulate I/O wait
    return f"data from {url}"

async def main_conc():
    tasks = [fetch(f"http://site{i}") for i in range(4)]
    results = await asyncio.gather(*tasks)
    print(results)

# ---------- Parallelism ----------
def compute(x):
    time.sleep(1)                    # simulate CPU work
    return x * x

def main_par():
    with concurrent.futures.ProcessPoolExecutor() as pool:
        results = list(pool.map(compute, range(4)))
    print(results)

if __name__ == "__main__":
    asyncio.run(main_conc())   # runs concurrently on one core
    main_par()                 # runs in parallel across cores
```

### Deeper insight

Concurrency is a *resource‑allocation* problem: you must give each task a slice of the I/O channel or CPU time. Parallelism turns that allocation into a *vector*—the same operation executed simultaneously on distinct hardware units.  

**Non‑obvious point:** In many real systems, concurrency can *improve* parallelism. By using an event loop (as in `asyncio`), you reduce the number of threads and thus the context‑switch overhead that would otherwise limit scalability when you spawn thousands of worker threads for I/O‑bound work. Thus, good concurrency design directly lifts parallel throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
