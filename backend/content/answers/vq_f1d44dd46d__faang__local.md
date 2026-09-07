---
qid: vq_f1d44dd46d__faang__local
question: What is the difference between concurrency and parallelism?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 518
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:42:04-05:00'
sources: []
---

**Clarify**  
You’re asking how *concurrency* (the ability of a system to handle multiple tasks “at the same time”) differs from *parallelism* (executing multiple tasks truly simultaneously).  
Assumptions: we’re talking about CPU‑bound vs I/O‑bound workloads, single‑core vs multi‑core environments.

**Approach**  
1. Define each term in plain language.  
2. Explain how they relate to threads/processes and resources.  
3. Contrast their observable effects (latency, throughput).  
4. Provide a quick example that illustrates the distinction.

**Depth**  

| Aspect | Concurrency | Parallelism |
|--------|-------------|-------------|
| **Goal** | Responsiveness; manage many tasks by interleaving them. | Performance; finish more work in less time. |
| **Execution model** | Tasks share CPU, switching context (time‑slice). | Multiple CPUs/cores run distinct tasks simultaneously. |
| **Resource use** | One core can be time‑shared across many threads/processes. | Requires at least as many cores as concurrent tasks to truly overlap. |
| **Typical problems solved** | Avoid blocking I/O; keep UI responsive. | Reduce wall‑clock time for compute‑heavy jobs. |

*Example*: A web server handling 100 requests on a single‑core machine is *concurrent*—it swaps between request handlers, giving the illusion of parallelism but not truly executing two at once. On a quad‑core machine with thread pool size ≥4, those same requests can run in true *parallel* fashion.

**Edge cases**  
- CPU‑bound tasks on a single core: concurrency improves latency but not throughput.  
- I/O‑bound tasks on multi‑core: both concurrency and parallelism help, but I/O waits dominate.  
- Oversubscription (more threads than cores) can degrade performance due to context‑switch overhead.

**Optimize & communicate**  
When designing a data pipeline, first decide if you need *concurrency* (e.g., async I/O for streaming data) or *parallelism* (vectorized processing on Spark). Explain that choosing the right model reduces latency or maximizes throughput. Highlight trade‑offs: more threads → higher memory; true parallelism requires hardware support. This shows you can reason about system resources, a key FAANG skill.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
