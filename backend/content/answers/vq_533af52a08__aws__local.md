---
qid: vq_533af52a08__aws__local
question: What is the difference between call-by-value and call-by-name function parameters?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 384
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:51:36-05:00'
sources: []
---

**Customer Obsession | Dive Deep**

> **Situation:** In a recent data‑pipeline refactor for our real‑time analytics platform, we noticed that an expensive transformation was being executed multiple times per record, hurting latency by ~35 %.  
> **Task:** I had to choose between two parameter passing strategies for the helper function that applied the transformation.  
> **Action:** I evaluated *call‑by‑value* (evaluate argument once) versus *call‑by‑name* (re‑evaluate on each use). In Java, this equates to eager vs lazy evaluation via `Supplier<T>` or a plain value.  
> **Result:** Switching the function signature to accept a `Supplier<ExpensiveObject>` (lazy call‑by‑name) reduced CPU usage from 12 % to 7 % and cut overall query latency from 240 ms to 155 ms, a 35 % improvement—directly impacting user experience on our dashboards.  

**Technical Takeaway:**  
- *Call‑by‑value* copies the argument’s value once; safe when the value is cheap or immutable.  
- *Call‑by‑name* defers evaluation until needed, ideal for expensive computations or side‑effects that may not always be required.  
- In distributed data engines (e.g., AWS Glue, Athena), using lazy evaluation (`Supplier`/Spark `lazy` UDFs) can dramatically cut shuffle size and executor memory pressure.

**Bar‑raiser Cue:** I owned the decision, dug into cost‑benefit metrics, quantified impact, and documented a fallback plan if future workloads changed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
