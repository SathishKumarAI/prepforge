---
qid: vq_f67364609b__aws__local
question: How does continue, break, and pass work?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 579
total_tokens: 808
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:22:49-05:00'
sources: []
---

**Situation (S)**  
In my last role I built an **ETL Lambda** that parsed millions of log files from S3 every night. The function used a `for line in file:` loop to validate each record before writing it to DynamoDB.

**Task (T)**  
I needed the loop to skip malformed lines, halt on critical errors, and continue processing without crashing, all while keeping the runtime under 5 s per file.

**Action (A)**  
Inside the loop I used:

| Statement | Effect in this context |
|-----------|------------------------|
| `continue` | Skips the rest of the current iteration when a line fails validation; keeps the counter on track. |
| `break` | Stops the entire loop if an unrecoverable error (e.g., file corruption) occurs, allowing me to log and trigger SNS alerts. |
| `pass` | Acts as a no‑op placeholder for future optional logic—used in a stub that later became a validation hook. |

I also instrumented CloudWatch metrics (`MalformedLines`, `ProcessingTime`) and set up an alarm that increased the Lambda timeout by 10 % when `MalformedLines > 1000`. This reduced failures from **12 % to <1 %** over three months.

**Result (R)**  
The pipeline achieved **99.9 % accuracy** with a median processing time of 3.2 s per file, and the CloudWatch alerting cut manual intervention by **70 %**.

---

### AWS Lens

| Requirement | Service(s) | Scalability & Cost |
|-------------|------------|--------------------|
| Stateless line‑by‑line parsing | **AWS Lambda** (Python 3.12) | Auto‑scales; pay per 100 ms. |
| Persistent counters | **Amazon CloudWatch Metrics** | Low cost, high granularity. |
| Alerting & rollback | **SNS + Step Functions** | Orchestrate retries and fallbacks. |

### Bar‑raiser cues

- **Ownership:** I designed end‑to‑end monitoring and auto‑tuning of Lambda timeouts.  
- **Dive Deep:** Tracked per‑line metrics to identify root causes.  
- **Quantified Impact:** Cut error rate from 12 % → <1 %.  
- **Learning:** Initial version ignored malformed lines, leading to downstream failures; the refactor introduced `continue`/`break`, drastically improving reliability.

*Leadership Principles invoked:* **Ownership**, **Dive Deep**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
