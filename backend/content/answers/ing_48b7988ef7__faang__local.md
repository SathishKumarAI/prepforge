---
qid: ing_48b7988ef7__faang__local
question: 'You''re splitting a research agent into an orchestrator and subagents.
  Design the interface: what exactly crosses the boundary in each direction?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 569
total_tokens: 817
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:32:48-05:00'
sources: []
---

**Clarify**

We’re refactoring a monolithic research agent into an **Orchestrator** that delegates to multiple **Subagents** (e.g., literature‑searcher, data‑processor, summarizer).  
Assumptions:  
1. All agents run on the same runtime (or at least share a message bus).  
2. Subagents are stateless or maintain only short‑term context.  
3. The orchestrator must guarantee correct sequencing and error handling.

**Approach**

Define two bounded interfaces:

| Direction | Payload | Purpose |
|-----------|---------|---------|
| **Orchestrator → Subagent** | `TaskRequest{taskId, payload, metadata}` | *Tell* the subagent what to do. The payload is a minimal JSON that can be parsed without side‑effects; metadata carries tracing IDs and deadlines. |
| **Subagent → Orchestrator** | `TaskResult{taskId, status, output, diagnostics}` | *Report* completion or failure. Status = `{SUCCESS, FAILURE, RETRYABLE}`. Output is opaque blob (string/bytes). Diagnostics aid debugging. |

Both sides expose a single RPC method (`process(Task*)`) over gRPC/HTTP‑JSON.

**Depth**

- **Orchestrator logic:**  
  *Validate* request → *dispatch* to subagent via load‑balancer → *await* result with timeout → *aggregate* outputs.  
  Use context objects for correlation IDs and cancellation tokens.  

- **Subagent logic:**  
  *Deserialize* `TaskRequest` → perform domain logic → *serialize* `TaskResult`.  
  Handle partial failures by emitting a `status=FAILURE` with error code.

Complexity: O(1) per message; network latency dominates. Memory overhead is bounded to the size of payloads.

**Edge Cases**

- **Missing taskId:** reject with `400 Bad Request`.  
- **Timeouts:** orchestrator retries or marks as failed.  
- **Large outputs:** stream them instead of bundling in a single message.  
- **Concurrent same‑taskId:** idempotency enforced by subagents.

**Optimize & Communicate**

To reduce round‑trips, batch multiple `TaskRequest`s into one multiplexed call if the protocol supports it. Add back‑pressure signals so subagents can advertise capacity. In interviews I’d emphasize that clear, minimal payloads keep both sides loosely coupled and facilitate independent scaling. This design satisfies FAANG’s preference for clean boundaries, observability, and fault tolerance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
