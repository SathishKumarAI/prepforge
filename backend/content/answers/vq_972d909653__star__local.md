---
qid: vq_972d909653__star__local
question: Explain counters in MapReduce?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 362
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:10:39-05:00'
sources: []
---

**Situation:**  
At my previous company we were migrating a legacy batch job that aggregated millions of click‑stream events into daily summary tables on HDFS. The original MapReduce program ran for almost four hours and produced an inconsistent record count, which caused downstream BI dashboards to show wrong traffic metrics.

**Task:**  
I had to rewrite the job so it completed within two hours while ensuring we could reliably track how many records were processed, filtered, or dropped at each stage without adding significant overhead.

**Action:**  
I introduced Hadoop counters in both mapper and reducer. In the mapper I incremented a custom counter “VALID_EVENTS” for every parsed event and another “INVALID_EVENTS” for malformed lines, using `context.getCounter("EventStats", "VALID_EVENTS").increment(1);`. I also used built‑in counters like `FileInputFormat.TOTAL_BYTES_READ` to monitor I/O. In the reducer, I added a counter “DUPLICATES_SKIPPED” whenever a key was seen more than once and “OUTPUT_ROWS” for each emitted summary row. I then tuned the job’s memory settings based on the counter outputs, moving some filtering logic into combiner functions to reduce shuffle size.

**Result:**  
The new job finished in 1 hour 15 minutes—over a 70% speedup—and produced exactly 3 245 678 output rows, matching our SQL validation set. The counters exposed that 12 345 events were malformed (0.4% of total), allowing us to clean the source data upstream. I learned how lightweight counter instrumentation can give real‑time insights into job health and guide performance tuning without altering business logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
