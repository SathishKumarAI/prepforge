---
qid: vq_95451e341b__aws__local
question: To which timing will this trigger be assigned?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 661
total_tokens: 890
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:04:15-05:00'
sources: []
---

**Situation (S)**  
In a recent migration of our legacy e‑commerce order pipeline to AWS, we were asked to replace the existing “OrderPlaced” event trigger with an EventBridge rule that would fire **exactly 2 minutes after payment confirmation**. The goal was to give downstream services enough time for fraud checks while still keeping the user experience snappy.

**Task (T)**  
I had to design a solution that:  
1. Guarantees the 2‑minute delay without losing events, even under peak traffic (~10k orders/sec).  
2. Minimizes cost and latency.  
3. Provides observability for failure cases.

**Action (A)**  
*Architecture:*  
- **Amazon EventBridge Scheduler** – schedules a rule with a fixed offset of 120 s from the `PaymentConfirmed` event timestamp.  
- **AWS Lambda** – lightweight consumer that pushes the delayed order into an SQS FIFO queue (`order-delayed.fifo`).  
- **SQS FIFO + DLQ** – ensures exactly‑once ordering and graceful retry for failures.  
- **Amazon CloudWatch Alarms** – alert if any message remains in the DLQ beyond 5 min.

*Why this works:*  
- Scheduler guarantees sub‑second precision, so we’re always on the 2‑minute mark.  
- Lambda’s statelessness keeps cold‑start costs low (<$0.00002 per invocation).  
- SQS FIFO scales horizontally and retains order without extra infrastructure.  

**Result (R)**  
After deployment:  
- **99.9 % of orders hit the downstream fraud service within 2 min ± 100 ms**, beating the previous 3‑minute manual queue by 33%.  
- Cost dropped from $0.12/hr (EC2 + SQS) to <$$0.02/hr**.  
- The CloudWatch alarm never tripped during a month of peak traffic, proving reliability.

---

### Amazon Leadership Principles  

| Principle | How I Demonstrated It |
|-----------|-----------------------|
| **Ownership** | Took full responsibility for the end‑to‑end flow, from design to monitoring. |
| **Dive Deep** | Analyzed EventBridge Scheduler’s precision limits and SQS FIFO guarantees; chose services based on empirical metrics. |
| **Deliver Results** | Delivered measurable latency reduction and cost savings while maintaining 99.9 % SLA compliance. |

---

### What a bar‑raiser looks for  

1. **Quantified Impact:** I presented exact latency, throughput, and cost numbers.  
2. **Depth & Trade‑offs:** Discussed why EventBridge Scheduler beats Lambda timers, and the trade‑off of using FIFO queues vs. standard ones.  
3. **Learning from Failure:** Built a DLQ path and alarms to surface issues early; after a brief outage we tweaked retry logic based on observed patterns.  

This approach showcases ownership, deep technical insight, and a clear focus on customer impact—exactly what Amazon looks for in an interview answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
