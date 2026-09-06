---
qid: ing_8cf6dc71f5__think__local
question: 'Explain: Timeouts — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 473
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:22:58-05:00'
sources: []
---

**1️⃣ Clarify the question & assumptions**  
- Identify that “Timeouts – What is an API?” likely refers to how time‑out handling works in a system‑design interview when exposing functionality via an API.  
- Assume we’re discussing REST/HTTP APIs, but note that RPC or gRPC are similar concepts.

**2️⃣ Adopt a mental model: Request → Service Layer → Timeout Policy**  
- Map the flow of a client request through network layers to the backend service.  
- Separate *client‑side* timeouts (e.g., browser timeout) from *server‑side* timeouts (e.g., HTTP keep‑alive, database query).

**3️⃣ Step‑by‑step reasoning**  
1. **Define “timeout”** – a maximum duration after which an operation is aborted.  
2. **Explain API context** – when a client calls an endpoint, the server may take longer than expected; we need to decide who aborts and how.  
3. **Show where timeouts can be set**:  
   - Network layer (TCP keep‑alive, HTTP read/write).  
   - Load balancer / reverse proxy.  
   - API gateway.  
   - Application code (context deadlines in Go, `async/await` cancellation tokens).  
4. **Illustrate consequences of mis‑configured timeouts** – cascading failures, resource leaks, poor UX.  
5. **Provide best practices** – exponential backoff, idempotent endpoints, circuit breakers.

**4️⃣ Common traps to avoid**  
- Mixing up *client* vs *server* timeout responsibilities.  
- Assuming a single timeout value works for all operations.  
- Ignoring the impact of distributed tracing on perceived latency.

**5️⃣ Sanity‑check & communicate**  
- Verify that each layer’s timeout is independent yet coordinated (e.g., client 2 s, gateway 3 s, service 4 s).  
- Use a diagram to show layers and their timeouts.  
- Summarize: “In an API, a timeout is a guard against indefinite waits; we place it at multiple points—client, gateway, load balancer, and code—to ensure graceful degradation.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
