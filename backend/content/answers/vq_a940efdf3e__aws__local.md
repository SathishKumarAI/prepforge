---
qid: vq_a940efdf3e__aws__local
question: How do you decide number of executors?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 482
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:07:53-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During a recent migration of our nightly ETL pipeline from on‑prem Spark to **EMR Serverless**, I was tasked with determining the optimal number of executors for a 5 TB data set that needed to finish within 30 minutes.  

- **Situation:** Our legacy cluster had a hard limit of 200 GB memory per node and we were hitting OOM errors, causing SLA violations (≈15% of jobs failed).  
- **Task:** Design an executor sizing strategy that maximizes throughput while staying under budget.  
- **Action:**  
  1. *Dive Deep* into job metrics: I collected `executor_memory`, `executor_cores`, and shuffle read/write times from the last 20 runs.  
  2. Calculated **memory per record** (≈12 bytes) → for 5 TB, ≈400 billion records → ~4.8 GB needed per executor to keep data in‑memory.  
  3. Chose **EMR Serverless with 64‑core, 128‑GB executors** (AWS recommends ≥2× memory per core for Spark).  
  4. Ran a *cost–performance* simulation in the EMR console: 25 executors cost $0.24/hr vs. 15 executors at $0.14/hr but would exceed SLA.  
  5. Implemented an **auto‑scale policy** that adds/removes executors based on real‑time metrics (CPU >80% → +1 executor).  

- **Result:** Execution time dropped from 45 min to 22 min, failure rate fell below 2%, and we saved ~$3k/month by avoiding over‑provisioning.  

**Bar‑raiser cues I hit:**  
- Ownership: drove the whole end‑to‑end improvement.  
- Dive Deep: used raw metrics to inform decisions.  
- Quantified impact: clear SLA & cost savings.  
- Learned from failure: iterated on memory sizing after OOM incidents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
