---
qid: ing_9b454c4abd__faang__local
question: 'Explain: How Engineers Use an API — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 513
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:45:20-05:00'
sources: []
---

**Clarify**  
The interview asks for a concise, system‑design style explanation of what an API is and how engineers consume it in production systems. I’ll assume the audience knows basic networking but not the deeper design trade‑offs.

**Approach**  
1. Define “API” at two levels: interface contract & runtime service.  
2. Show typical usage patterns (request/response, event streams).  
3. Highlight key engineering concerns: versioning, latency, fault tolerance, security, observability, and scaling.

**Depth**  

| Layer | What engineers do | Typical tech |
|-------|-------------------|--------------|
| **Contract** | Define endpoints, payload schemas, auth rules in OpenAPI/GraphQL spec. | Swagger UI, GraphQL introspection |
| **Client** | Generate stubs or use SDKs; handle retries & back‑off. | gRPC stubs, Retrofit, Axios |
| **Server** | Expose stateless services behind load balancers; route via API gateway. | Envoy, Kong, AWS API Gateway |
| **Observability** | Instrument latency, error rates, usage quotas. | Prometheus + Grafana, OpenTelemetry |
| **Scaling** | Horizontal pod autoscaling, rate limiting per client key. | Kubernetes HPA, Istio circuit breakers |

Complexity: request‑time O(1) for stateless APIs; overall throughput limited by network and DB ops.

**Edge Cases**  
- **Version drift**: clients breaking on schema changes → use semantic versioning or deprecation windows.  
- **Burst traffic**: sudden spikes cause 429s unless throttling is tuned.  
- **Security gaps**: missing auth leads to data leaks; enforce OAuth/JWT and TLS.

**Optimize & Communicate**  
To improve, adopt *contract‑first* design, automated contract tests (e.g., Pact), and rate‑limit per API key with exponential back‑off. When explaining, start with the “what” (interface), move to “how” (clients/server plumbing), then cover “why” (performance & reliability). End by summarizing trade‑offs: tighter contracts reduce runtime errors but increase CI overhead; aggressive caching boosts latency but risks stale data. This structure demonstrates clear problem framing, thoughtful engineering choices, and a balanced view of constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
