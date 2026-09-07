---
qid: ing_13070019ed__faang__local
question: 'Explain: Code Example — Concurrency vs Parallelism - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 508
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:28:03-05:00'
sources: []
---

**Clarify**  
The interview asks for a concise code illustration that distinguishes **concurrency** (interleaving of tasks) from **parallelism** (simultaneous execution). I’ll assume we’re working in Python and the audience knows basic threading/async concepts.

**Approach**  
1. Pick two small, CPU‑bound functions (`fib` & `sum_range`).  
2. Show a *concurrent* version using `threading.Thread`: threads start together but only one runs at a time on CPython (GIL).  
3. Show a *parallel* version using `multiprocessing.Pool`: separate processes bypass the GIL, true simultaneous execution.  
4. Add timing to illustrate difference.

**Depth**  

```python
import time, threading, multiprocessing as mp

def fib(n):          # CPU‑bound
    return sum(1 for i in range(n) if all(i % d for d in range(2,i)))

def sum_range(start, end):
    return sum(range(start, end))

# 1️⃣ Concurrency – threads (interleaved)
t1 = threading.Thread(target=fib, args=(40000,))
t2 = threading.Thread(target=sum_range, args=(0,100000))
start = time.time()
t1.start(); t2.start()
t1.join(); t2.join()
print("Threaded elapsed:", time.time()-start)

# 2️⃣ Parallelism – processes (simultaneous)
pool = mp.Pool(2)
start = time.time()
results = pool.starmap(lambda f,a,b: f(a,b), [(fib,40000,None),(sum_range,0,100000)])
pool.close(); pool.join()
print("Process elapsed:", time.time()-start)
```

**Edge cases**  
- IO‑bound tasks may still benefit from threads; CPU‑bound tasks need processes.  
- Overhead of process creation can dominate for tiny functions.  
- GIL in CPython limits true parallelism with threads.

**Optimize & communicate**  
Explain that concurrency improves *throughput* and responsiveness, while parallelism boosts *performance*. Mention that in JIT or multi‑core runtimes (e.g., PyPy, Java), the distinction blurs because of native threading support. Conclude by highlighting when to choose each pattern based on workload type.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
