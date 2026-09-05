---
qid: ing_16c71013b4__fp__local
question: 'Explain: Shared Memory — Inter-Process Communication on Linux'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 344
total_tokens: 515
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:54:06-05:00'
sources: []
---

**Shared memory as an optimal IPC primitive**

The core problem of inter‑process communication (IPC) is *how to transfer data with minimal overhead*. Any mechanism that copies payloads between address spaces pays the cost of a system call, cache invalidation, and sometimes page faulting.  
In contrast, shared memory gives two or more processes access to the same physical pages; no copy occurs after the initial mapping. This satisfies an *information‑theoretic* requirement: if both parties can read/write the same bits, they share entropy without extra bandwidth.

Linux implements this via **`mmap()`** of a `shm_open()` object or `/dev/shm`. The kernel allocates a contiguous physical region and updates each process’s page tables with identical virtual addresses (or any chosen ones). Because translation is local to the CPU, the only synchronization needed is a lightweight lock or atomic operations—no context switch.

A subtle but powerful insight: **shared memory turns an IPC problem into a memory‑consistency problem**. The cost of establishing the link is negligible, so the bottleneck becomes *ensuring coherence* (e.g., via `pthread_mutex` or futexes). This means that for high‑throughput pipelines—image processing, neural net inference—the limiting factor is not IPC latency but cache coherence traffic, which can be mitigated by NUMA‑aware placement.

Thus shared memory is optimal when the data volume exceeds a few kilobytes and processes can tolerate explicit consistency control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
