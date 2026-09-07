---
qid: ing_93c35767a3__aws__local
question: 'Explain: Agent orchestrator — Customer Support Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 434
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:59:57-05:00'
sources: []
---

**Situation / Task**  
In my last role I led a project to build an *AI‑powered Customer Support Agent* that could route tickets, auto‑generate responses, and hand off to human agents when needed. The goal was to reduce first‑response time (FRT) by 40 % while keeping SLA compliance above 95 %.

**Action**  
I owned the end‑to‑end architecture:  

| Component | AWS Service | Reasoning |
|-----------|-------------|-----------|
| Intent detection & NLU | Amazon Comprehend, Lex | Low latency, multilingual support |
| Orchestration engine | Step Functions + Lambda | Serverless, auto‑scales to 10k concurrent tickets/day |
| Knowledge base retrieval | DynamoDB (global secondary index) + OpenSearch | Fast, geo‑replicated search with real‑time updates |
| Human handoff & ticketing | Amazon Connect + ServiceNow API | Seamless integration, audit trail |
| Monitoring & telemetry | CloudWatch + X-Ray | Deep tracing for “Dive Deep” and rapid rollback |

I introduced a *bias‑for‑action* policy: every new intent model was deployed in a blue/green Lambda layer with A/B testing on 5 % of traffic. If the confidence dropped below 70 %, the system automatically fell back to the previous version.

**Result**  
Within three months, FRT dropped from 12 min to **7 min** (42 % improvement), and SLA compliance rose to **97 %**. The cost per ticket decreased by **$0.30**, saving $180k annually. Post‑mortems after a brief outage taught me to add a circuit breaker around the OpenSearch index, improving resilience.

*Leadership Principles:* **Customer Obsession** (metrics driven on user experience), **Ownership** (end‑to‑end responsibility), and **Dive Deep** (continuous telemetry and iterative improvement).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
