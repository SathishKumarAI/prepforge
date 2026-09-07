---
qid: ing_2bd793e58a__faang__local
question: 'Explain: Web Servers — Concurrency vs Parallelism - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 510
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:24:48-05:00'
sources: []
---

**Clarify**

The question asks for a concise explanation of *concurrency* and *parallelism* in the context of web servers, as presented by Ashish Pratap Singh.  
Assumptions: we’re discussing request handling (I/O‑bound vs CPU‑bound) on typical multi‑core OSes; the audience knows basic networking but not deep systems theory.

**Approach**

1. Define each term in plain language.  
2. Map to web‑server operations (threads, event loops).  
3. Highlight differences via a simple example.  
4. Touch on performance trade‑offs and typical patterns (e.g., Node.js vs Nginx).

**Depth**

| Concept | What it is | How it manifests in a web server |
|---------|------------|-----------------------------------|
| **Concurrency** | *Multiple* tasks make progress over time, not necessarily simultaneously. | A single thread interleaves I/O reads/writes for many connections; the OS schedules them. |
| **Parallelism** | Tasks run truly *simultaneously* on separate cores or machines. | Multiple worker processes/threads each handle a request in parallel; SIMD vectorization for CPU‑heavy work. |

Example: A 10 ms DB query and a 1 µs static file read.  
- Concurrency: one thread issues the query, yields while waiting, serves the file, then resumes.  
- Parallelism: two threads/processes handle them at once, each on a different core.

**Edge Cases**

- **I/O‑bound workloads** benefit more from concurrency; CPU‑bound tasks need parallelism.
- **Race conditions** arise if shared state is accessed without locks—common in naive parallel designs.
- **Over‑parallelization** can hurt due to context‑switch overhead and cache contention.

**Optimize & Communicate**

To improve throughput:  
1. Use an event‑driven async model for I/O‑bound servers (e.g., Nginx).  
2. For CPU tasks, spawn a thread pool sized to cores, use lock‑free queues.  

Explain reasoning by showing how each design maps to the two concepts and why choosing the right one depends on workload characteristics. This structured explanation aligns with FAANG interview expectations: clear problem restatement, systematic approach, depth of detail, edge‑case awareness, and concise communication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
