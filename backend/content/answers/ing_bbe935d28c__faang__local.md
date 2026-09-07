---
qid: ing_bbe935d28c__faang__local
question: What are microservices?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 393
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:00:05-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise definition of *micro‑services* and how they differ from monoliths. Assume the audience knows basic software architecture but not necessarily the trade‑offs.

**Approach**  
1. Define micro‑service in one sentence.  
2. Contrast with monolithic style.  
3. Highlight key attributes: bounded context, independent deployability, loose coupling, polyglot persistence.  
4. Briefly mention orchestration tools and typical patterns (API gateway, service mesh).  

**Depth**  
A micro‑service is a small, autonomous application that implements a single business capability, exposes a well‑defined API, and can be deployed, scaled, and upgraded independently of other services. Unlike monoliths—single codebases bundled together—micro‑services run in isolated processes, communicate over the network (often HTTP/REST or gRPC), and maintain their own data stores. This isolation enables polyglot persistence, team autonomy, and rapid iteration but introduces operational overhead: service discovery, distributed tracing, circuit breaking, and consistent deployment pipelines.

**Edge Cases**  
- *Stateful services*: need external state management (e.g., databases, caches).  
- *High‑throughput latency*: network calls can dominate performance; consider event‑driven or in‑process patterns.  
- *Versioning*: backward compatibility is critical when multiple clients consume a service.

**Optimize & Communicate**  
Explain that while micro‑services reduce coupling and improve scalability, they increase operational complexity. Recommend starting with bounded contexts, using lightweight containers (Docker), orchestrating with Kubernetes, and instrumenting with Prometheus/Jaeger for observability. Conclude by noting that the decision should balance team size, release cadence, and system resilience requirements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
