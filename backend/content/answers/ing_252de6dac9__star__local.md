---
qid: ing_252de6dac9__star__local
question: 'Explain: Monitor I/O characteristics using CloudWatch'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 340
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:43:11-05:00'
sources: []
---

**Situation** – In my last role as a data‑science engineer at a fintech startup, we had just deployed an inference microservice on ECS that served real‑time fraud scores. Within the first week, latency spiked from 120 ms to over 450 ms during peak trading hours, and our SLA was at risk.

**Task** – I needed to identify whether the slowdown was due to CPU, memory, or disk/ network I/O bottlenecks so we could tune the containers without costly hardware upgrades.

**Action** – I configured CloudWatch custom metrics for each ECS task: `CPUUtilization`, `MemoryUtilization`, and added `DiskReadBytes`, `DiskWriteBytes`, `NetworkIn`, `NetworkOut` using the CloudWatch Agent on the EC2 instances. Then I set up a CloudWatch Dashboard with anomaly detection alarms that triggered when I/O exceeded 80 % of provisioned throughput. Using the “Metrics Explorer” I plotted the time series against request latency and discovered a sharp rise in `DiskReadBytes` during the spike, indicating the EBS volume was saturated.

**Result** – After resizing the EBS volume from gp2 to io1 (provisioned 200 IOPS) and adding an extra container instance, average inference latency dropped back to 125 ms and our SLA hit 99.9 %. I learned that proactive I/O monitoring in CloudWatch can preempt performance regressions before customers notice, and that custom metrics give fine‑grained insight beyond the default CPU/Memory stats.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
