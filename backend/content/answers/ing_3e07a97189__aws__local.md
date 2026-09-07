---
qid: ing_3e07a97189__aws__local
question: 'Explain: Machines — Kafkabenchmarking'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 423
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:46:21-05:00'
sources: []
---

**Situation / Task**  
While leading the data‑science platform at my previous company, we had to prove that a new ML inference pipeline could scale to 10 k requests/sec on AWS. The benchmark required realistic traffic patterns and fault tolerance—something our internal load tools couldn’t simulate.

**Action**  
I built an end‑to‑end Kafka‑based benchmark:
1. **Producer**: A Lambda function publishes 100 k JSON events per minute, each containing a feature vector.
2. **Kafka cluster** (Amazon MSK) with 3 broker nodes and auto‑scaling topic partitions to match throughput.
3. **Consumer**: An EC2 Auto Scaling group running our inference service in Docker containers; each instance pulls from Kafka, runs the ML model via SageMaker Neo, and writes predictions back to a second Kafka topic.
4. I added a *Chaos Monkey* script that injects 5 % broker failures to test resilience.

I used **CloudWatch metrics** (latency, CPU, network) and **AWS X-Ray** for end‑to‑end tracing. The pipeline handled 12 k req/sec with <200 ms latency while maintaining >99.9 % availability. Cost was $0.03 per inference compared to the $0.07 we were paying on a legacy on‑prem cluster.

**Result**  
The benchmark validated our architecture, earning us a $2M budget increase for the ML platform. It also reduced SLA breaches by 40 %. I documented the process in an internal wiki, and the team now reuses this framework for all new model deployments.

> **Leadership Principles:** *Customer Obsession* (meeting latency expectations), *Ownership* (designing a fault‑tolerant system from scratch), *Dive Deep* (analyzing metrics to drive cost savings).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
