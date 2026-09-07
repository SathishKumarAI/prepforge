---
qid: ing_2d41347bdd__aws__local
question: 'Explain: More partitions may increase unavailability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 352
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:07:19-05:00'
sources: []
---

**Situation / Task**  
When redesigning the real‑time fraud detection pipeline for our e‑commerce platform, I noticed that increasing the number of Kafka partitions to boost throughput was inadvertently raising message loss during broker restarts.

**Action**  
I first *dive deep* into the partition‑to‑broker mapping and discovered that more partitions meant a higher chance of a single broker holding many partitions, creating a single point of failure. I proposed moving from 4 to 12 partitions but adding an extra Kafka cluster behind an AWS **MSK** auto‑scaling group, plus a **Kafka Connect** sink that writes each record to **Amazon S3** with *S3 Replication* for durability. I also enabled *broker-level replication factor of 3* and switched to **AWS CloudWatch** alarms on broker CPU/IO metrics to trigger proactive scaling.

**Result**  
After the change, throughput increased from 2 kmsg/s to 12 kmsg/s (600% uplift) while **message loss dropped from 0.8 % to <0.01 %**, meeting our SLAs. Cost grew by only 18 % because we leveraged spot instances for the additional brokers.

**Reflection**  
This experience reinforced *Ownership*—I owned the end‑to‑end pipeline—and *Bias for Action*—I moved quickly from analysis to a deployable solution. I learned that scaling horizontally can backfire if not coupled with redundancy and monitoring, so I now routinely model partition–broker ratios before any capacity change.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
