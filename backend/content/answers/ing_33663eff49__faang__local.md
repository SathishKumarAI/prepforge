---
qid: ing_33663eff49__faang__local
question: 'Explain: Evals that live inside the trace, not in a tool beside it'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 454
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:44:10-05:00'
sources: []
---

**Clarify**  
The interviewer asks why evaluation functions (“evals”) embedded directly in an execution trace are preferable to separate tooling. I’ll assume we’re dealing with model‑driven workflows (e.g., prompt chains) where each step’s output must be validated or scored before the next step runs.

**Approach**  
1. Identify what “inside the trace” means: a function invoked as part of the same execution graph.  
2. List benefits vs. external tools: latency, consistency, failure isolation, and observability.  
3. Outline trade‑offs (e.g., resource contention).  

**Depth**  
- **Low Latency**: The eval runs in‑process, eliminating inter‑service RPC overhead. In a prompt chain, each token or step can be immediately validated, enabling early bail‑outs.  
- **Stateful Consistency**: The same context (memory, variables) is available; the eval can access hidden fields that an external tool cannot without serialization.  
- **Atomicity & Failure Isolation**: If the eval fails, the entire trace can abort cleanly—no dangling async calls or partial results left in a separate service.  
- **Observability**: Logs and metrics are captured by the tracing system itself, giving a single source of truth for debugging.  
- **Resource Contention**: The downside is that heavy evals (e.g., large LLM scoring) compete with the main model inference, potentially increasing overall latency.

**Edge Cases**  
- Heavy evals causing OOM or CPU spikes.  
- Non‑deterministic evals leading to inconsistent traces.  
- Security concerns if eval exposes sensitive data within the trace context.

**Optimize & Communicate**  
I’d recommend a hybrid: lightweight “in‑trace” evals for fast checks, and offload heavy scoring to an external microservice triggered only when needed. This preserves low latency while preventing resource contention. I’d explain this trade‑off clearly, citing expected time savings (e.g., 5 ms per step) versus potential bottlenecks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
