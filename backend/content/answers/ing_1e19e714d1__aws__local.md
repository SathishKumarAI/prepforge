---
qid: ing_1e19e714d1__aws__local
question: 'Explain: After a routine deploy, P99 TTFT went from ~600 ms to ~4 s. Throughput,
  error rate, GPU utilization and the model version are all unchanged. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 393
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:34:43-05:00'
sources: []
---

**Situation / Task**  
I was notified that after a routine deploy our inference endpoint’s P99 *Time‑to‑First‑Token* (TTFT) spiked from ~600 ms to ~4 s while throughput, error rate, GPU utilization and model version stayed constant. The goal was to identify the root cause quickly and restore performance.

**Action**  
1. **Dive Deep into CloudWatch & X-Ray traces** – I pulled per‑request logs for the last 30 min. A sudden rise in *cold start* counts on the Lambda wrapper (used to serialize/deserialize inputs) matched the latency spike.  
2. **Inspect EFS mount performance** – The wrapper accessed a shared config file stored on EFS. An increase in `latency` and `throughput` metrics indicated the EFS volume was throttling due to a sudden burst of concurrent reads from other services.  
3. **AWS service adjustment** – I increased the EFS throughput mode to *Burst* (from *Standard*) and added an additional mount target for the region. I also set up a CloudWatch alarm to trigger auto‑scaling of the wrapper’s container instances.  
4. **Validate** – After deployment, P99 TTFT returned to 620 ms; GPU utilization remained at 72 %, throughput stable at 350 requests/sec.

**Result**  
Reduced latency by **>90 %**, restoring SLA compliance and preventing a potential outage. The fix cost <$100/month in EFS bandwidth and eliminated manual intervention for future bursts.  

*Leadership Principles:* **Customer Obsession** (ensured fast responses), **Dive Deep** (diagnosed underlying storage issue), **Bias for Action** (immediate service adjustments).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
