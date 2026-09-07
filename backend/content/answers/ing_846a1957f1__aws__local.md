---
qid: ing_846a1957f1__aws__local
question: 'Explain: Event-Driven Architecture and Microservices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 416
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:24:27-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a data‑science team tasked with delivering real‑time fraud alerts for a fintech client. The legacy monolith couldn’t ingest the 10 k events per second spike during peak trading hours, and any downtime meant lost revenue.

**Action (Design)**  
I proposed an **event‑driven microservices architecture** built on Amazon EventBridge + Lambda + DynamoDB:

1. **Event Producers** – API Gateway forwards transaction records to EventBridge.
2. **Microservice “FraudScore”** – a Lambda function triggered by specific event patterns, loads a pre‑trained XGBoost model from S3, scores the event, and writes results to DynamoDB.
3. **Orchestration** – Step Functions coordinate downstream actions (flagging, notifying, logging) with retry logic.

This decoupled pipeline lets each service scale independently; Lambda auto‑scales to 1 k concurrent invocations, while DynamoDB’s on‑demand mode handles burst writes without provisioning overhead.

**Result**  
We reduced alert latency from 8 s (monolith) to <300 ms, handled 15× the peak traffic with zero outages, and cut operational cost by 30% (from $12k/month to $8.4k). Customer satisfaction scores rose from 78 to 94.

**Reflection / Bar‑raiser focus**  
I owned the transition, performed a deep dive into cold‑start mitigations (pre‑warmed Lambda containers), and iterated on failure paths by simulating 10 % of events failing—learning that a 1 s retry window was optimal. This experience reinforced **Customer Obsession** (faster alerts mean less fraud loss) and **Ownership** (I drove the end‑to‑end migration).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
