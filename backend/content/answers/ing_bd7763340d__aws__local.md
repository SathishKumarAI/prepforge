---
qid: ing_bd7763340d__aws__local
question: 'Explain: Why Agents Break the Normal Failure Model'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 480
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:31:46-05:00'
sources: []
---

**Why agents break the “normal failure model”**

*Leadership Principles:* **Customer Obsession & Ownership** – we treat every agent‑based interaction as a customer journey and own its reliability.

---

### Situation  
At my last role I built a multi‑tenant AI assistant platform that served 120,000 daily users. Each “agent” (a stateless Lambda + RAG layer) could call external APIs or internal microservices to answer questions.

### Task  
Ensure high availability while keeping cost under $2 M/month. The naïve model treated each API call as a single point of failure: if an upstream service hiccups, the entire agent fails and the user sees “service unavailable.”

### Action  
1. **Redundancy & graceful degradation** – wrapped every external call in a Circuit Breaker (AWS Step Functions + Lambda) with fallbacks to cached data or a simplified rule‑based response.  
2. **Observability** – instrumented each agent with CloudWatch metrics (`api_fail_rate`, `response_time`) and set up an Anomaly Detection alarm that triggers a *self‑heal* state machine.  
3. **Eventual consistency & retries** – used SQS for idempotent retry of non‑critical calls, limiting retries to 3× with exponential backoff to avoid cascading failures.

### Result  
- *Uptime*: 99.98% (vs the baseline 97%) across all agents.  
- *Cost*: $1.9 M/month – a 10% reduction from the naive failure‑model approach due to fewer Lambda invocations and lower SQS usage.  
- *Customer impact*: Average user‑reported error rate dropped from 4.2% to <0.3%.

---

**Bar‑raiser notes**

* **Ownership:** Took end‑to‑end responsibility for reliability, even when third‑party APIs were outside our control.  
* **Dive Deep:** Quantified failure rates per agent and identified the most fragile call chains.  
* **Quantified Impact:** Delivered measurable uptime gains while staying under budget.  
* **Learning from Failure:** The first iteration had a 30% retry burst that caused downstream throttling; redesigned with back‑off and circuit breakers, turning a failure into an opportunity for resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
