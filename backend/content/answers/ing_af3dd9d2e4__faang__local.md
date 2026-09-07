---
qid: ing_af3dd9d2e4__faang__local
question: 'Explain: 3.3 Neither Concurrent Nor Parallel — Concurrency vs Parallelism
  - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 486
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:31:00-05:00'
sources: []
---

**Clarify**  
The interviewee is asked to explain the distinction between *concurrency* and *parallelism*, referencing Ashish Pratap Singh’s “3.3 Neither Concurrent Nor Parallel”. I’ll confirm that we’re discussing CPU‑level execution, ignoring distributed systems or I/O concurrency, and focus on how tasks are scheduled by an OS scheduler.

**Approach**  
1. Define each term with a concise example.  
2. Highlight the key difference: *time slicing* vs *simultaneous execution*.  
3. Show why a system can be concurrent without being parallel (single‑core pre‑emptive multitasking).  
4. Illustrate the reverse: parallel systems that may not appear concurrent to an external observer.

**Depth**  
- **Concurrency** – multiple threads/processes share a single resource over time; the OS context‑switches between them. The system *appears* to progress on many tasks, but only one runs at any instant (on a single core).  
- **Parallelism** – simultaneous execution of independent tasks across multiple cores or processors. Each thread truly runs in real time together.  
Ashish’s point: “neither concurrent nor parallel” applies when a program is *sequential*—no multitasking, no multithreading; it runs one instruction at a time on one core.  
**Complexity** – Concurrency introduces scheduling overhead (O(1) per context switch), while parallelism scales linearly with cores until Amdahl’s law limits gains.

**Edge Cases**  
- A single‑threaded app on a multicore CPU still runs concurrently because the OS can time‑slice it across cores, but no true parallel work occurs.  
- Parallel code that contains shared mutable state may suffer from race conditions, making it effectively concurrent in behavior even if executed in parallel.

**Optimize & Communicate**  
I’d stress that understanding these distinctions is critical for performance tuning: use concurrency to hide I/O latency; use parallelism to accelerate compute‑bound workloads. In a FAANG interview, I would finish by summarizing the practical implication: “If you want real speedup on multicore hardware, design for parallelism; if you just need responsiveness, aim for concurrency.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
