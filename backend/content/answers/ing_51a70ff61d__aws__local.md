---
qid: ing_51a70ff61d__aws__local
question: 'Explain: Resiliency & Scalability — Uber Engineering \u2014 Where the Digital
  World Meets the Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 342
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:29:41-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team at Uber building the *Ride‑Prediction* microservice that feeds real‑time ETA estimates into our dispatch engine. The service had to be resilient to node failures and scale from 10k to 2M concurrent requests during peak city events.

**Action**  
- **Ownership & Dive Deep:** I mapped every failure mode in a fault tree, discovered that the single Kafka consumer cluster was a bottleneck, and redesigned it as an *Amazon MSK* topic with multiple partitions.  
- **Design & AWS Services:** Implemented an autoscaling *AWS Lambda* layer for lightweight inference using *SageMaker Edge* models, backed by a *DynamoDB Global Table* for state replication across regions. Added *AWS CloudWatch* alarms and *Auto Scaling Groups* for the Kafka brokers to react to sudden spikes.  
- **Bias for Action & Invent:** Introduced a circuit‑breaker pattern with *API Gateway* throttling, allowing graceful degradation when downstream services were unhealthy.

**Result**  
The new architecture reduced latency from 350 ms to 120 ms (average) and increased request throughput by 4× during the city marathon event. Failure recovery time dropped from >30 min to <2 min, achieving a 99.999% SLA.  

*What bar‑raisers hear:* clear ownership, deep dive into failure modes, quantified impact, and iterative learning from early outages that guided the final design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
