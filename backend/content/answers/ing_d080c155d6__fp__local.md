---
qid: ing_d080c155d6__fp__local
question: 'Your traffic is shifting from single-turn chat to agents: 20 to 50 model
  calls per task, tool calls in between, sessions lasting tens of minutes. What does
  that do to your serving design?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 524
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:23:52-05:00'
sources: []
---

### Why the shift forces a new serving paradigm

**Fundamental problem:**  
A *single‑turn* model call is a simple request/response: one prompt → one token stream. The latency budget is dominated by compute (GPU inference) and I/O (network round‑trip).  

When an **agent** orchestrates dozens of sub‑calls interleaved with tool invocations, the problem changes to *workflow orchestration* under tight time constraints. Each sub‑call can be a different model, a database query, or a code execution. The overall latency is no longer linear in the number of calls; it becomes the sum of:

1. **Model startup & context switching** (GPU warm‑up, tokenizer state reset).  
2. **Tool latency** (API round‑trip, I/O wait).  
3. **Back‑pressure propagation** (a slow tool stalls the entire session).

Thus, serving must treat a *session* as an atomic unit with internal pipelining and caching, rather than independent requests.

### Design implications

| Layer | Requirement |
|-------|-------------|
| **Ingestion** | Persist partial transcripts; allow resumption after failures. |
| **Task queue** | Prioritize sub‑tasks by criticality and expected latency (e.g., compute‑heavy vs I/O). |
| **Model pool** | Keep a *warm* cache of GPU contexts per model, with fast context serialization to avoid full reinitialization. |
| **Tool gateway** | Expose a lightweight proxy that aggregates tool calls into batched requests, reducing round‑trips. |
| **Observability** | Fine‑grained metrics per sub‑task (token/sec, I/O wait) to surface bottlenecks early. |

### Non‑obvious insight

The *true* latency driver is not the number of model calls but the **context switching overhead** between them. Each switch forces a GPU scheduler to release and reacquire memory, causing cache misses that dwarf pure inference time. Therefore, a serving system that aggressively reuses a single context across consecutive sub‑tasks (e.g., via *model stitching* or *in‑place prompt augmentation*) can reduce overall latency by **30–50 %** compared to naïve per‑call warm‑ups. This optimization is often overlooked because it requires a departure from the stateless request/response mindset and embraces the agent’s sequential nature as a first‑class concern.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
