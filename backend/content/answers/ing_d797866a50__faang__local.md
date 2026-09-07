---
qid: ing_d797866a50__faang__local
question: 'Explain: Client-Server Architecture — 6 Software Architectural Patterns
  You Must Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 664
total_tokens: 902
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:00:45-05:00'
sources: []
---

## Clarify  
You want a concise rundown of the six core software‑architecture patterns that underpin client–server ML systems—those you’ll hear at Meta/Google/Amazon interviews.  
Assumptions: *you’re familiar with basic MVC concepts*, *the focus is on scalable, production‑grade ML pipelines*, and *you need a quick cheat‑sheet for interview prep*.

## Approach  
1. **List the patterns** (MVC, MVVM, MVP, CQRS, Event Sourcing, Micro‑services).  
2. **Map each to client–server ML use‑cases**: data ingestion, model training, inference, monitoring.  
3. **Highlight key trade‑offs** (latency vs consistency, monolith vs distributed).  
4. **Wrap up with a quick comparison table**.

## Depth  

| Pattern | Typical ML Flow | Strengths | Trade‑offs |
|---------|-----------------|-----------|------------|
| **MVC (Model–View–Controller)** | UI ↔ Controller → Model (feature store) → View (dashboard) | Clear separation, fast prototyping | Tight coupling between view and model can hurt scalability |
| **MVVM (Model–View–ViewModel)** | ViewModel acts as observable data source for dashboards; backend serves JSON via REST/GraphQL | Two‑way binding simplifies state sync across web/mobile clients | Boilerplate code; hard to debug complex bindings |
| **MVP (Model–View–Presenter)** | Presenter mediates between view and ML inference service | Testable presenters, decoupled UI | Adds latency if presenter calls remote inference frequently |
| **CQRS (Command + Query Responsibility Segregation)** | Commands → Training pipeline; Queries → Inference API | Optimizes read/write workloads; scales inference independently | Requires duplicate models for command/query views |
| **Event‑Sourcing** | All state changes are events (e.g., new training data, model version) stored in Kafka/Redis Streams | Auditable history, easy rollback; streams feed real‑time inference | Event replay overhead; complex consistency guarantees |
| **Micro‑services** | Separate services: ingestion, feature store, trainer, predictor, monitoring | Independent deployment, polyglot tech stack | Increased operational complexity, network latency |

## Edge Cases  
- **High‑frequency inference** → CQRS + caching.  
- **Model drift detection** → Event‑Sourcing + micro‑services.  
- **Mobile clients with intermittent connectivity** → MVVM offline sync.

## Optimize & Communicate  
For an interview, frame each pattern as a “problem–solution” pair: e.g., *“When you need decoupled read/write workloads for real‑time recommendation, CQRS is the go‑to.”* Emphasize that in FAANG environments we favor **scalable micro‑services** but keep **MVC/MVVM** for rapid feature dashboards. Highlight how trade‑offs map to product metrics (latency, MTTR, cost). This narrative shows you can choose architecture based on concrete ML pipeline needs—exactly what interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
