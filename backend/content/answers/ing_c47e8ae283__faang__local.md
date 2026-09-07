---
qid: ing_c47e8ae283__faang__local
question: 'Explain: HTTP-based MCP for new servers; sandboxed STDIO for legacy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 436
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:17:54-05:00'
sources: []
---

**Clarify**  
We’re asked how to expose a *Machine‑Learning Control Plane* (MCP) over HTTP on newly provisioned servers while keeping legacy services that use direct STDIO in isolation (“sandboxed”). Clarify assumptions:  
1. New servers run a containerized MCP exposing REST/GraphQL endpoints.  
2. Legacy binaries expect synchronous input/output via pipes.  
3. “Sandboxed” means we must prevent cross‑process interference and enforce resource limits.

**Approach**  
1. Deploy the MCP as a stateless HTTP service (e.g., FastAPI + Uvicorn).  
2. For each legacy process, launch it in a separate OCI container or Docker sandbox with cgroups limiting CPU/memory.  
3. Wire its STDIN/STDOUT to a Unix socket; expose that socket behind an internal gRPC gateway that forwards requests from the HTTP MCP to the sandboxed process.

**Depth**  
- The MCP receives JSON payloads, validates schema (Pydantic), and translates them into command strings for the legacy binary.  
- A lightweight proxy (`proxy.py`) reads from the Unix socket and streams back stdout as a Server‑Sent Events stream or WebSocket.  
- Use `resource.setrlimit` to cap CPU time and memory per sandbox.  
- Complexity: O(1) per request, but each sandbox adds ~10 MB RAM overhead.

**Edge Cases**  
- Process hangs → enforce a timeout on the socket read.  
- Large output → stream with back‑pressure; otherwise buffer overflows.  
- Unauthorized access → authenticate HTTP requests (JWT) before proxying to sandbox.

**Optimize & Communicate**  
We can batch multiple legacy calls per request to amortize container startup cost, or pre‑warm a pool of containers. In discussion, emphasize the separation of concerns: HTTP for new services, socket proxies for legacy, and strict resource limits to maintain isolation. This design scales horizontally (add more MCP instances) while preserving compatibility with existing binaries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
