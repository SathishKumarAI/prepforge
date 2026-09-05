---
qid: ing_13070019ed__star__local
question: 'Explain: Code Example — Concurrency vs Parallelism - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 317
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:06:46-05:00'
sources: []
---

**Situation**  
In a recent recommendation engine project, our nightly training pipeline was stuck at the feature extraction stage: we had to process 2 million user sessions, each requiring heavy NLP tokenization and embedding lookups. The team noticed that adding more CPU cores didn’t reduce wall‑clock time; it only increased memory pressure.

**Task**  
I needed to redesign the data ingestion loop so that the pipeline could scale linearly with available hardware while keeping peak RAM below 32 GB.

**Action**  
First, I distinguished between *concurrency* (handling many sessions in an interleaved fashion) and *parallelism* (executing independent tokenizations simultaneously). I rewrote the extractor to use Python’s `asyncio` for concurrency—each session’s IO‑bound embedding fetch ran as a coroutine. For parallelism, I switched the CPU‑heavy tokenization step to a multiprocessing pool with 8 workers, passing only small batches of text to avoid pickling large tensors. I also introduced a bounded queue that throttled the number of in‑flight sessions, preventing memory spikes.

**Result**  
The new pipeline cut feature extraction time from 9 minutes to 3 minutes—a 66 % speedup—while keeping peak RAM at 28 GB. The exercise reinforced that concurrency handles I/O latency, whereas parallelism accelerates CPU work; mixing both correctly is key for scalable ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
