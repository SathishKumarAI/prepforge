---
qid: ing_c47e8ae283__fp__local
question: 'Explain: HTTP-based MCP for new servers; sandboxed STDIO for legacy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 459
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:59:45-05:00'
sources: []
---

**Why an HTTP‑based MCP?**  
When a new server starts, it must discover its role, register with a central orchestrator, and expose a *control plane* that other services can query or command. The fundamental problem is **interoperability over the network**: we need a language that every platform already speaks (HTTP) and a message format that can be parsed without custom drivers. By defining a **Microservice Control Protocol (MCP)** on top of HTTP, we turn the control plane into a *stateless, idempotent API* that any language or library can hit with a single `GET /mcp/v1/health`. The HTTP layer gives us:

- Built‑in caching and content negotiation → fewer round trips for large config blobs.  
- Standard TLS/TLS termination at the edge → no extra encryption plumbing in each service.  

**Why sandboxed STDIO for legacy?**  
Older binaries were written as simple command‑line tools that read from `stdin` and write to `stdout`. Re‑architecting them would cost time, risk regressions, and break backward compatibility. The core problem is *isolating side effects* while preserving the existing I/O contract. By launching each legacy binary in a **sandboxed process** (chroot/namespace + seccomp) and wiring its STDIO to a lightweight proxy that speaks MCP over HTTP, we:

- Keep the binary’s internal logic untouched.  
- Expose a modern, network‑friendly API without modifying source code.  

**Non‑obvious insight:** The sandboxed STDIO proxy acts as a *transparent bridge* that automatically **buffers and compresses** large payloads (e.g., JSON configs) before sending them over HTTP. This means legacy services can handle huge configuration files with minimal latency, even though they were never designed for streaming. In essence, the proxy turns every legacy command into an *asynchronous microservice* without touching its codebase.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
