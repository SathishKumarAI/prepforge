---
qid: vq_7dc43f09a5__aws__local
question: What are negative indexes and why are they used?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 412
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:00:05-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was tasked with refactoring the data‑pipeline that parsed millions of log lines in real time on an **AWS Lambda** function. The original code used many `list.pop(0)` calls to strip headers, causing O(n²) latency and throttling the function past its 3 s limit.

**Action**  
I introduced Python’s *negative indexing* to read from the end of lists instead of popping from the front. I rewrote the parser to use slices like `log_lines[-1]` for the last entry and `log_lines[:-1]` for the rest, eliminating the costly shift operation. I also replaced the in‑memory list with an **Amazon S3** object stream and processed chunks via **Kinesis Data Streams** to keep memory usage low.

**Result**  
After deploying the new Lambda version:

- Execution time dropped from **2.8 s → 0.9 s** (≈ 68% reduction).  
- Throughput increased from **1,200 logs/s → 3,400 logs/s**.  
- Cost per invocation fell by **$0.0004**, saving ~**$30/month** on the account.

**Why negative indexes?**  
Python counts indices from the end when prefixed with `-`, so `list[-1]` is the last element and `list[:-1]` returns everything but it. This eliminates expensive list mutations, improves cache locality, and scales linearly—critical for high‑volume AWS services.

> **Leadership Principles:** *Customer Obsession* (delivering faster logs to downstream analytics) & *Dive Deep* (profiling Lambda cold starts and memory churn).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
