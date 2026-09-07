---
qid: ing_bcf8534e23__faang__local
question: 'Explain: 3.1 Concurrent, Not Parallel — Concurrency vs Parallelism - by
  Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 512
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:02:03-05:00'
sources: []
---

**Clarify**  
The interview asks you to explain the distinction between *concurrent* and *parallel* execution as described by Ashish Pratap Singh. Clarify that we’re dealing with task scheduling at a logical level (concurrency) versus physical CPU utilization (parallelism). Confirm whether they want examples in Python, Java, or systems like Kubernetes.

**Approach**  
1. Define each term.  
2. Highlight the key difference: *time‑sharing* vs *simultaneous*.  
3. Provide concrete code / system examples.  
4. Summarize trade‑offs and when to choose one over the other.

**Depth**  

| Concept | Definition | How it Happens | Example |
|---------|------------|----------------|---------|
| **Concurrency** | Multiple tasks progress by interleaving execution on a single resource (or logical units). | Scheduler switches contexts; tasks may be blocked/waiting. | `asyncio` coroutines in Python: one event loop runs many I/O‑bound coroutines, yielding on awaits. |
| **Parallelism** | Multiple tasks run truly simultaneously on separate physical resources (cores/threads). | CPU cores or GPUs execute independent instructions concurrently. | Thread pool with 4 workers executing CPU‑heavy matrix multiplications; each thread uses a distinct core. |

- *Concurrency* improves throughput under I/O bound workloads.  
- *Parallelism* boosts performance for compute‑bound jobs.  
- Both can coexist: a web server may spawn parallel worker threads while each handles concurrent requests.

**Edge Cases**  
- **Race conditions** arise when parallel tasks share mutable state; need locks or atomic ops.  
- **Context switch overhead** can negate concurrency benefits if tasks are too fine‑grained.  
- **Deadlocks** appear in poorly designed concurrent systems.  

Test with: a CPU‑heavy benchmark for parallelism, an I/O latency test for concurrency.

**Optimize & Communicate**  
Emphasize that true parallelism requires multiple cores or distributed nodes; concurrency can be achieved on single‑core machines via async or cooperative multitasking. Mention *GIL* in CPython as a limiting factor for CPU threads, and how multiprocessing or C extensions bypass it. Conclude: choose concurrency for I/O latency, parallelism for raw throughput, and combine them judiciously for scalable ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
