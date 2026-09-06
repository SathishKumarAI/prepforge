---
qid: ing_728da240b0__fp__local
question: An agent task takes 2-10 minutes. How do you design the API for clients
  kicking off and tracking these jobs?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 516
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:08:03-05:00'
sources: []
---

**Why a “kick‑and‑track” API is needed**

An AI task that runs 2–10 min lives in a *time‑bounded* asynchronous system: the client sends a request, the worker pool does heavy computation, and the result becomes available later.  
If we treat it as a synchronous call we waste network resources; if we treat it as an opaque background job we lose accountability. The API must therefore:

1. **Decouple** submission from completion (the *producer–consumer* principle).  
2. **Guarantee idempotence** so that retries (network glitches, timeouts) do not spawn duplicate jobs.  
3. **Expose a linear state machine** (`PENDING → RUNNING → SUCCEEDED/FAILED`) to avoid the “what is this job doing?” ambiguity.

**Design pattern**

| Endpoint | Purpose |
|----------|---------|
| `POST /jobs` | Accepts payload + optional *client‑id*. Generates a deterministic UUID (e.g., hash of payload + client‑id) and stores it in a durable queue. Returns that UUID immediately. |
| `GET /jobs/{id}` | Reads the job record from a read‑optimized store, returning status, progress %, and result URL if finished. |
| `DELETE /jobs/{id}` | Optional: cancels pending jobs (only allowed before `RUNNING`). |

**Key insights**

- **Deterministic UUID → idempotent submit**: The same payload + client‑id always maps to the same job ID, so a retry simply queries status instead of creating new work.  
- **Progress polling vs webhook**: For 2–10 min jobs polling every few seconds is cheap; pushing a webhook adds complexity and reliability risk (retries, replay).  
- **Eventual consistency**: The status store can be asynchronously updated by workers; the API reads from it as‑is, accepting that a job may appear `RUNNING` for a moment after finishing—this matches the “eventually consistent” principle in distributed systems.

In short, treat each AI task as an immutable *resource* with a linear lifecycle. Use deterministic IDs for idempotence, lightweight polling for tracking, and a simple RESTful contract to keep the system robust and understandable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
