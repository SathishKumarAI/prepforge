---
qid: ing_13070019ed__think__local
question: 'Explain: Code Example — Concurrency vs Parallelism - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 508
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:59:49-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- *What is being requested?* The user wants a **code example** that contrasts *concurrency* vs *parallelism*, presumably in a ML context, and mentions “Ashish Pratap Singh” (maybe a reference to his article).  
- *Assumptions*: Python is acceptable; the example should be short but illustrative; we’ll use CPU‑bound operations common in ML (e.g., matrix multiplication).  

**2️⃣ Choose a mental framework**  
1. **Define both concepts** – concurrency as interleaving tasks, parallelism as simultaneous execution.  
2. **Select an ML‑relevant operation** that can be split into independent chunks (mini‑batch processing).  
3. **Pick tools** – `concurrent.futures` for thread/process pools (parallelism) and simple async/await or generator loops for concurrency.  

**3️⃣ Step‑by‑step reasoning**  
- Write a dummy “heavy” function (e.g., multiplying a large matrix).  
- For *concurrency*: create an async coroutine that awaits I/O‑like sleeps between CPU bursts, showing interleaving without true parallel speed‑up.  
- For *parallelism*: use `ProcessPoolExecutor` to run the heavy function on separate cores; measure time to demonstrate real acceleration.  
- Wrap both in a small script, print timings and explain what each line achieves.  

**4️⃣ Common pitfalls to avoid**  
- Mixing threads for CPU work (GIL issue).  
- Forgetting to `await` async calls → tasks never run.  
- Using `ThreadPoolExecutor` for parallelism; it won’t bypass the GIL for CPU tasks.  
- Over‑complicating the example; keep the code minimal yet complete.

**5️⃣ Sanity‑check & communicate**  
- Run the script locally to confirm concurrency runs interleaved (timestamps overlapping) while parallelism shows a clear speedup.  
- In the explanation, explicitly state “concurrency here is about *managing* tasks, not speeding them up”, whereas “parallelism actually splits work across cores”.  
- End with a brief note that in real ML pipelines you often combine both: async I/O for data loading (concurrency) + multi‑core GPU/CPU training (parallelism).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
