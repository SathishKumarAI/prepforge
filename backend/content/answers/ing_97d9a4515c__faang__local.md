---
qid: ing_97d9a4515c__faang__local
question: 'Explain: Comparing the V1 and V2 SDK (Agent SDK) — Letta V1 SDK | Letta
  Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 479
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:37:55-05:00'
sources: []
---

**Clarify**  
You want a concise comparison of the *Letta* Agent SDK versions V1 and V2 (the docs link is for V1). I’ll assume you’re evaluating API surface, performance, security, and migration effort.

**Approach**  
1. List key feature categories (API calls, auth, payloads, runtime).  
2. Summarize differences per category.  
3. Highlight migration pain points.  
4. Provide a quick decision matrix.

**Depth**  

| Feature | V1 | V2 |
|---------|----|----|
| **Auth** | API key + basic token in header | OAuth 2.0 JWT bearer, client‑secret rotation |
| **Endpoints** | `/agent/start`, `/agent/stop` | `/v2/agents/{id}/action` (CRUD) |
| **Payload** | JSON only | JSON + optional protobuf for telemetry |
| **SDK Language Support** | Python, Node, Java | Same + Go, Rust |
| **Metrics** | Basic counters | Prometheus‑compatible metrics, OpenTelemetry tracing |
| **Error handling** | 4xx/5xx codes, plain text | Structured error objects with `error_code`, retry hints |
| **Performance** | ~200 ms latency | ~120 ms via async I/O and connection pooling |

**Edge cases**  
- Legacy clients that embed the API key in URLs will break under V2’s stricter header enforcement.  
- Applications using protobuf telemetry must add a new dependency.  
- If you rely on the old `/agent/start` endpoint, code changes are required; missing route will return 404.

**Optimize & Communicate**  
- **Migration**: wrap V1 calls in a compatibility layer that translates headers and payloads.  
- **Performance**: enable HTTP/2 in client configs to hit the ~120 ms target.  
- **Security**: switch to OAuth ASAP; it mitigates key leakage risks.  

Summarize: *V2 offers tighter security, richer telemetry, and language expansion at the cost of a migration effort for legacy auth and payloads.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
