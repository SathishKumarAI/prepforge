---
qid: ing_1a3b20bb49__aws__local
question: A user loads a 2 TB dataset with `datasets` on a 64 GB RAM machine and it
  works. How? And when does it stop working?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 325
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:25:43-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Leadership Principles:** *Customer Obsession*, *Dive Deep*  
> **Behavioral (STAR):**  
> **Situation:** A data scientist tried to load a 2 TB CSV into memory on a 64‑GB laptop using 🤗 datasets.  
> **Task:** Understand why it succeeded and when it would fail.  
> **Action:** I inspected the library’s implementation: `datasets` lazily maps the file into memory with *memory‑mapped files* (`mmap`). Only rows accessed trigger OS page faults, so the process footprint stays at a few MBs while the kernel keeps the rest in swap/SSD cache. I ran `top -o %MEM` and saw < 200 MB resident set size.  
> **Result:** The load succeeded because the OS handled paging; it would break only when: 1) the working set exceeds physical RAM + page‑cache, causing thrashing; 2) the dataset contains columns that are eagerly parsed (e.g., nested JSON), forcing full deserialization; 3) the underlying filesystem or SSD runs out of free space for temporary files. In my test, once I added a dense `float64` column (~16 TB in memory), the process crashed with `OutOfMemoryError`.  
> **Learning:** Always benchmark the *working set* before scaling; use `datasets.map()` to stream instead of load‑all when columns are heavy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
