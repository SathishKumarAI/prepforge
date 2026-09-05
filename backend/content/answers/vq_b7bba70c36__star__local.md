---
qid: vq_b7bba70c36__star__local
question: Why do we need break and continue?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 323
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:16:10-05:00'
sources: []
---

**Situation** – While building a log‑parsing service for our SaaS platform, we were iterating over millions of JSON entries per day to extract metrics. The raw logs contained malformed lines that caused the parser to throw exceptions and halt the entire batch job.

**Task** – I had to keep the pipeline running at full speed while still filtering out bad records, without adding a separate pre‑validation step or storing all failures for later review.

**Action** – Inside the loop that processed each line, I used `continue` to skip over any entry that failed JSON decoding. For the critical “shutdown” command embedded in the log stream (a single flag that signaled the system should stop accepting new requests), I added a `break`. When that flag was detected, the loop terminated immediately, allowing the service to shut down gracefully while still processing all preceding valid entries.

**Result** – The job ran 30 % faster because we avoided the overhead of exception handling for every bad line. We also reduced memory usage by not buffering failures, and the early `break` cut downtime from 5 minutes to under 20 seconds during peak traffic. I learned that `continue` and `break` are simple yet powerful tools for controlling flow in high‑volume data pipelines, enabling both efficiency and safety without complicating the codebase.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
