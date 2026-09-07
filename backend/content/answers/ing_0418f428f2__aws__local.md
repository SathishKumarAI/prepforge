---
qid: ing_0418f428f2__aws__local
question: 'Explain: Overview — Event-Driven Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 446
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:33:57-05:00'
sources: []
---

**Situation & Task (Customer Obsession / Ownership)**  
When I joined the data science team at a fintech startup, our ML model served fraud alerts in real time. The existing batch‑processing pipeline delayed decisions by 15 minutes, causing lost revenue and unhappy partners. I owned the redesign to an event‑driven architecture that would deliver predictions within 1 second.

**Action (Dive Deep & Bias for Action)**  
I mapped every data source—transaction logs, user profiles, external risk feeds—and defined a *Kafka* topic per domain. Using **Amazon MSK** we ingested streams at ~10 k events/s with <200 ms latency. For each event I triggered an **AWS Lambda** function that pulled the latest model from **S3**, executed inference via **Amazon SageMaker Runtime** (pre‑built container), and pushed the result to a **Kinesis Data Firehose** stream consumed by our alerting service.

To guarantee high availability, I set up **Multi‑AZ MSK clusters** and enabled **Lambda concurrency limits** with *Provisioned Concurrency* for burst traffic. Cost was controlled by using **SageMaker Neo** to compile the model into a lightweight runtime (≈30 % smaller) and scaling Lambda on demand.

**Result (Deliver Results)**  
The new pipeline reduced prediction latency from 15 min to <1 s, cutting missed fraud cases by 42 % and increasing partner satisfaction scores by 18 points. Monthly operational cost dropped 22 % due to serverless compute and auto‑scaling.

**Learnings & Bar‑raiser cues**  
- Ownership: I drove the end‑to‑end solution, not just a component.  
- Dive Deep: Profiling Lambda cold starts led to the Neo optimization.  
- Quantified Impact: 42 % fraud reduction is a clear metric.  
- Failure analysis: The first iteration missed edge cases; we added a fallback Lambda that queued events for later batch re‑run, improving robustness by 99.9%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
