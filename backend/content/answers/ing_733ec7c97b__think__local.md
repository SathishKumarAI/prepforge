---
qid: ing_733ec7c97b__think__local
question: 'Explain: Web worker - Parallel Processing, Multi-Threading'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 404
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:39:30-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   • Identify what “web worker” means in browsers (isolated JS threads).  
   • Assume the reader knows basic JavaScript but not the threading model.  
   • Decide whether to focus on browser workers, Node.js workers, or both; keep it browser‑centric for ML demos.

**2. Choose a mental framework**  
   – *Concurrency vs parallelism*: explain that web workers enable true parallel execution of JS code.  
   – *Producer–consumer pattern*: worker runs heavy ML inference while main thread handles UI.  
   – *Message passing API*: `postMessage` / `onmessage`.

**3. Step‑by‑step reasoning**  
   1. **Main thread** starts → loads model, prepares data.  
   2. Creates a worker (`new Worker('worker.js')`).  
   3. Sends data via `postMessage`.  
   4. Worker receives, runs TensorFlow.js inference in its own thread.  
   5. Sends back predictions.  
   6. Main thread updates UI.  
   • Highlight that the GPU/WebGL backend can be used inside workers for extra speed.

**4. Common pitfalls to avoid**  
   – Forgetting that workers cannot access DOM; must marshal data.  
   – Passing large tensors by value (copy cost); use `Transferable` objects or shared memory (`SharedArrayBuffer`).  
   – Over‑creating workers → context switch overhead outweighs gains.

**5. Sanity‑check & communicate**  
   • Re‑explain the flow in one sentence: “Workers let you offload heavy ML work to separate threads, keeping the UI responsive.”  
   • Use a simple diagram or code snippet in your answer to illustrate the message passing loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
