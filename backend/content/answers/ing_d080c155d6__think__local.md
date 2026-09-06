---
qid: ing_d080c155d6__think__local
question: 'Your traffic is shifting from single-turn chat to agents: 20 to 50 model
  calls per task, tool calls in between, sessions lasting tens of minutes. What does
  that do to your serving design?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 219
output_tokens: 502
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:43:51-05:00'
sources: []
---

**1️⃣ Clarify the scenario & assumptions**  
- “Traffic shifting” means fewer single‑turn requests but *more* multi‑step interactions per user.  
- Each task ≈ 20–50 model calls + several tool invocations, lasting 10–30 min.  
- Assume: (a) same underlying LLM; (b) existing infrastructure built for short‑lived stateless queries.

**2️⃣ Mental model: State‑ful, long‑running workflow**  
Treat each user session as a *workflow* with:  
- **Session state** (context, tool outputs, partial results).  
- **Task queue** (pending/ongoing calls).  
- **Resource budget** (compute credits per call).

**3️⃣ Step‑by‑step reasoning**

1. **Persist session context** – store conversation history & intermediate data in a fast key/value store or relational DB; avoid recomputing.  
2. **Queue management** – use a task queue (e.g., Celery, Kafka) to serialize model/tool calls and enforce order/parallelism limits.  
3. **Compute scaling** – enable burstable GPU instances or serverless function pools that can spin up on demand for the high‑frequency bursts.  
4. **Caching & memoization** – cache common tool results; reuse them across calls in the same session.  
5. **Timeouts & checkpoints** – after each call, checkpoint state to allow graceful recovery if a worker dies.  
6. **Billing/accounting** – aggregate per‑session usage (model tokens + tool ops) for accurate billing.  

**4️⃣ Common traps**

- *Treating the flow as stateless*: leads to repeated work and higher latency.  
- *Over‑provisioning compute*: unnecessary cost because many calls are short.  
- *Ignoring tool failure*: a single failed tool call can stall an entire session.

**5️⃣ Sanity checks & communication**

- Verify that state checkpoints restore the exact same prompt for re‑runs.  
- Monitor queue depth; if it grows > X, alert on scaling or throttling needs.  
- Explain to stakeholders: “We’re moving from point‑to‑point calls to a stateful workflow engine that tracks each step, so we can handle 20–50 model calls per user without re‑sending the whole context.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
