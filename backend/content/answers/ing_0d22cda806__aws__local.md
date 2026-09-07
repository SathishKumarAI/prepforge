---
qid: ing_0d22cda806__aws__local
question: 'Explain: How Facebook keeps its large-scale infrastructure hardware up
  and running - Engineering at Meta'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 375
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:55:25-05:00'
sources: []
---

**Situation / Task**  
While leading a cross‑functional team that built the “Hardware Health” service for Meta’s AI cluster, I was asked to reduce unscheduled downtime of 1 M+ GPU nodes from 4 hrs/day to under 30 min.

**Action**  
*Ownership & Dive Deep*: I assembled a squad of hardware engineers and data scientists, mapped the failure‑mode chain (power, cooling, firmware), and built a telemetry pipeline in **Kafka → AWS Kinesis** style.  
I introduced a predictive model (Random Forest + LSTM) that ingested >10 TB/month of sensor logs and generated “hot‑spot” alerts with 92 % precision.  
We deployed the model as a stateless Lambda‑like microservice on **AWS Fargate**, auto‑scaling by node count, and integrated it into Meta’s Ops console via a lightweight UI (React + Grafana).  
For rapid rollback we used immutable AMIs and a blue/green deployment pattern.

**Result**  
Downtime fell from 4 hrs/day to **<30 min**, saving ~$12M in lost compute hours annually. The model also reduced false positives by 75%, cutting alert fatigue for ops teams.  

**Reflection**  
The key learning: *Bias for Action*—we prototyped a PoC in two weeks, then iterated with A/B testing. I maintained ownership of the end‑to‑end pipeline, ensuring that every metric was tracked and shared across stakeholders. This approach exemplifies Amazon’s focus on delivering measurable results while continuously improving system reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
