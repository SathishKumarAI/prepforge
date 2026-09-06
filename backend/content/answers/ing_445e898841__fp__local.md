---
qid: ing_445e898841__fp__local
question: 'Explain: Web Browsers — Concurrency vs Parallelism - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 412
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:31:16-05:00'
sources: []
---

**Concurrency vs Parallelism in Web Browsers (Ashish Pratap Singh)**  

At the core of every browser is a *single logical thread* that must satisfy two conflicting goals:  
1) **Responsiveness** – the user interface should never block, even while downloading or rendering pages.  
2) **Throughput** – the browser should exploit multiple CPU cores to process network I/O, JavaScript execution, and layout calculations.

Concurrency is the *temporal multiplexing* of these goals. By representing each task (network fetch, script parse, paint) as a lightweight “task” and scheduling them on an event loop, the browser can interleave work so that no single operation stalls the UI. This follows the principle of *sequential consistency*: from the user’s perspective, operations appear ordered even though they are interleaved.

Parallelism is the *spatial* exploitation of hardware: distinct tasks run simultaneously on separate cores (e.g., a worker thread parses CSS while the main thread renders). Parallelism yields speed‑up only when tasks are independent; otherwise contention for shared resources (memory, GPU) can negate gains—an illustration of Amdahl’s Law.

**Non‑obvious insight:**  
Modern browsers treat *network I/O* as a *concurrency problem*, not a parallel one. The TCP stack already handles multiple connections in parallel at the OS level; the browser merely orchestrates callbacks. Therefore, the real bottleneck is the **event loop scheduling**—a combinatorial optimization problem where the cost of context switching outweighs raw parallelism if mismanaged.

In short, browsers use concurrency to keep the UI alive and parallelism to accelerate independent workloads, both guided by the same underlying optimization: *maximizing perceived performance while respecting limited resources.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
