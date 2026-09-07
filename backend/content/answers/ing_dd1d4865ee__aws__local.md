---
qid: ing_dd1d4865ee__aws__local
question: What is an Event-Driven Architecture?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 386
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:38:55-05:00'
sources: []
---

**Event‑Driven Architecture (EDA)** is a decoupled, asynchronous pattern where components react to state changes—“events”—rather than direct calls.  

**Situation:** In my last role I led the migration of a legacy batch‑processing system that stalled at 4 hrs per run, hurting our *Customer Obsession* by delaying critical recommendations.  

**Task:** Design an event‑driven pipeline that processes user actions in near real‑time and feeds a recommendation model with <1 s latency.  

**Action:**  
- **Event source:** Kinesis Data Streams capture click events; *Lambda* shards process them into JSON messages.  
- **Orchestration:** Step Functions coordinate data enrichment, validation, and persistence to DynamoDB (event store).  
- **Model inference:** A SageMaker endpoint is invoked by another Lambda triggered on the “ready” event, returning predictions that are written back to a Kinesis Firehose stream for downstream services.  
- **Observability:** CloudWatch metrics & X‑Ray tracing give us 99.9 % availability and <200 ms average latency; cost is $0.03 per 1 M events, 30 % lower than the batch baseline.  

**Result:** Turned a 4‑hour batch into a sub‑second pipeline, boosting recommendation click‑through rate by **12 %** and improving user satisfaction scores (CSAT +2 points).  

*Bar‑raiser notes:* I owned the end‑to‑end solution, dived deep into AWS throttling limits to avoid hot spots, quantified impact with real metrics, and iterated on failure modes by replaying dead‑letter queue events.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
