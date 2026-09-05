---
qid: vq_f8f8ae98c0__fp__local
question: How multithreading is achieved in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 433
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:04:23-05:00'
sources: []
---

### Multithreading in Python – a first‑principles view

Python’s `threading` module builds on the operating system’s thread primitives (POSIX `pthread`, Win32 `CreateThread`). Each *Python thread* is an instance of `PyThreadState`, which holds its own stack, local variables, and the interpreter state it will execute. When a new thread starts, the CPython runtime creates a C‑level thread that enters the interpreter’s main loop (`_PyEval_EvalFrameDefault`), switching to the new thread’s `PyThreadState`.

The core difficulty is that CPython is **not** truly concurrent: all threads share a single interpreter instance. To keep this shared state safe, CPython uses the **Global Interpreter Lock (GIL)** – a binary semaphore that must be held by exactly one thread before it can execute bytecode. The GIL is released only during blocking I/O or when explicitly called (`_PyThreadState_Swap`). Consequently:

1. **Bytecode execution**: Each instruction acquires the GIL, runs, then releases it after a short quantum (≈5 ms).  
2. **Blocking operations**: Native C extensions that perform long‑running tasks must manually release the GIL to allow other Python threads to run.

This design guarantees memory safety without per‑object locks, but sacrifices parallelism on multicore CPUs for CPU‑bound code. For true parallelism you need either *multiprocessing* (separate interpreter instances) or third‑party libraries that circumvent the GIL (e.g., NumPy’s native releases).

**Non‑obvious insight:**  
The GIL is not a performance bottleneck for I/O‑bound workloads because thread scheduling happens at the OS level; threads blocked on I/O are swapped out by the kernel, and the GIL remains held only briefly when CPU resumes. Thus, multithreading in CPython excels at *cooperative* concurrency, not parallel computation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
