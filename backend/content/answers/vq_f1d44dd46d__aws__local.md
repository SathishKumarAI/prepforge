---
qid: vq_f1d44dd46d__aws__local
question: What is the difference between concurrency and parallelism?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 436
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:22:07-05:00'
sources: []
---

**Answer (Amazon style)**  

*Leadership Principles:* **Customer Obsession** – we deliver data that powers product decisions; **Ownership** – I own the entire pipeline from ingestion to analytics.  

**Situation:** In my last role I redesigned a nightly ETL for 2 M daily sales records. The team was confused about “concurrency vs parallelism” because we were scaling our Spark jobs.  
**Task:** Clarify the concepts, show how they affect throughput and cost, and decide which to use for each stage of the pipeline.  
**Action:** I ran a micro‑benchmark on EMR:  

| Stage | Concurrency (threads) | Parallelism (tasks per node) | Runtime | Cost |
|-------|----------------------|------------------------------|---------|------|
| Ingest | 4 threads, 1 task/node | – | **12 min** | $0.40 |
| Transform | – | 8 tasks/node | **9 min** | $0.30 |

*Concurrency* means multiple processes share the same resource (e.g., CPU cores). It improves utilization when I/O waits dominate, but can cause contention if CPU‑bound. *Parallelism* splits work into independent tasks that run on separate executors; it scales linearly with resources but requires enough data to avoid overhead.

I chose **concurrency** for the ingest stage (I/O bound) and **parallelism** for transformation (CPU bound). This reduced total runtime from 30 min to 21 min (+30%) while keeping spot‑instance costs below $1.00 per run.  

**Result:** The pipeline now processes nightly data in under 25 minutes, freeing analysts 4 hrs weekly and lowering infra spend by 20%.  
*Bar‑raiser takeaway:* I owned the decision, dived deep into metrics, quantified impact, and learned that mixing concurrency and parallelism can yield the best trade‑off.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
