---
qid: ing_039a9ec74e__aws__local
question: 'Explain: The Transport Layer — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 491
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:32:44-05:00'
sources: []
---

**Situation**  
I was tasked with redesigning the telemetry ingestion pipeline for a fleet‑management platform that streamed vehicle data in real time. The existing UDP‑based stream suffered from packet loss during peak traffic, causing downstream analytics to miss up to 12 % of events—directly hurting our *Customer Obsession* goal.

**Task**  
Choose a transport protocol and design an architecture on AWS that guarantees high throughput, low latency, and data integrity while keeping costs predictable.

**Action**  
I benchmarked TCP vs UDP using **Apache JMeter** under simulated 10 k vehicle streams. UDP dropped ~18 % of packets at 200 kbps per stream; TCP recovered all data but added ~30 ms latency due to retransmissions. To balance, I adopted a *Hybrid* approach:

1. **Edge Layer** – Amazon Kinesis Data Streams (shards tuned for 5 M events/day) receives UDP bursts via **AWS IoT Greengrass**, which buffers locally and re‑transmits over TCP when congestion is detected.
2. **Processing Layer** – AWS Lambda (Python, <200 ms timeout) pulls from the stream, performs idempotent deduplication, and writes to Amazon DynamoDB with a *time‑to‑live* policy.
3. **Analytics Layer** – Data lands in Amazon Redshift Spectrum for batch queries; real‑time dashboards use Amazon QuickSight.

I added CloudWatch metrics (packet loss %, latency) and Auto Scaling on Greengrass devices. The hybrid design reduced data loss to <1 % and cut operational costs by 18 % versus a pure TCP solution.

**Result**  
Customer‑reported incidents dropped from 12 % to 0.8 %. Revenue impact estimated at +$4M/year in avoided SLA penalties, satisfying *Deliver Results*. I documented the trade‑offs (extra Greengrass overhead vs. lower latency) and built a playbook for future protocol choices—showing ownership and *Dive Deep*.

**Bar‑raiser notes**  
- Clear ownership of metrics & cost analysis.  
- Quantified impact tied to business outcomes.  
- Learned from failure by iterating on hybrid buffering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
