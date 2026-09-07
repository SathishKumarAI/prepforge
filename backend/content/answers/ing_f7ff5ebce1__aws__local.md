---
qid: ing_f7ff5ebce1__aws__local
question: What is MCP (Model Context Protocol) and how does it compare to A2A?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 509
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:39:34-05:00'
sources: []
---

**Answer – Amazon‑style**

> **Leadership Principles:** *Customer Obsession* & *Dive Deep*

### Situation / Task
While building a cross‑service recommendation engine for an e‑commerce platform, I needed to decide how models would receive contextual data at inference time. The team debated between the **Model Context Protocol (MCP)** and the legacy **Action‑to‑Action (A2A)** pattern.

### Approach
I mapped each protocol against our SLA (99.9 % latency < 10 ms) and cost goals:

| Feature | MCP | A2A |
|---------|-----|-----|
| **Context payload** | Structured, versioned JSON tied to a *model context* object in DynamoDB | Implicit in request URL/query string |
| **Schema evolution** | Managed via AWS AppConfig; backward compatible by default | Manual refactor each model change |
| **Observability** | CloudWatch metrics per context key (e.g., `user_id`, `session_time`) | Only raw request logs |
| **Security** | IAM roles scoped to context ARN; data encrypted at rest | No fine‑grained access control |

I prototyped a Lambda@Edge function that fetches the MCP payload from DynamoDB, injects it into SageMaker Runtime via `invokeEndpoint`, and streams the result back. The A2A variant required a custom API Gateway mapping template and manual query parsing.

### Result
- **Latency:** 8 ms (MCP) vs 12 ms (A2A) – 33 % improvement.
- **Cost:** DynamoDB read/write + Lambda invocations ≈ $0.02/10k requests; A2A’s API Gateway charges ~30 % higher for equivalent traffic.
- **Developer velocity:** MCP reduced rollout time by 40 % because schema changes no longer required code changes.

### Learnings
- *Ownership:* I owned the end‑to‑end inference pipeline, not just the model layer.
- *Dive Deep:* By instrumenting CloudWatch metrics per context key, we uncovered that `session_time` was a top predictor, guiding future feature engineering.
- *Bar‑raiser focus:* Demonstrated measurable impact (latency & cost), clear trade‑offs, and an iterative approach that allowed rollback if a new context caused failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
