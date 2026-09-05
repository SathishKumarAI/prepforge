---
qid: ing_4fd5bb76f7__star__local
question: 'Explain: Works across languages and platforms — gRPC'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 323
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:07:52-05:00'
sources: []
---

**Situation:**  
At a fintech startup, we had to expose our risk‑scoring service to both the mobile app (iOS/Swift) and the web dashboard (React/Node). The existing REST API was sluggish and required duplicate code for each client.

**Task:**  
Build a single, low‑latency interface that could be consumed by any platform—mobile, web, or even future microservices—without rewriting serializers or data contracts.

**Action:**  
I chose gRPC because its protocol buffers schema is language‑agnostic. I defined the `RiskScore` service in a `.proto` file, specifying request/response messages with optional fields and enums. Using the gRPC tooling, I generated client stubs for Swift, JavaScript (via grpc-web), and Go for the server. On the server side, I implemented streaming endpoints to push real‑time score updates. I also added an interceptor for JWT authentication that works uniformly across languages. To ensure backward compatibility, I versioned the proto package and used field numbers carefully.

**Result:**  
The new gRPC layer cut payload size by 60% and reduced round‑trip latency from ~250 ms to ~70 ms. Both mobile and web clients now share a single codebase for data contracts, cutting maintenance effort by 40%. I learned that early investment in a strong IDL like protobuf pays off when scaling across heterogeneous environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
