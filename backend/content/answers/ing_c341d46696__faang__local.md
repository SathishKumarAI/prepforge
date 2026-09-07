---
qid: ing_c341d46696__faang__local
question: 'Explain: Spring Cloud Gateway — Spring Cloud: Routing with Zuul and Gateway'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 472
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:14:50-05:00'
sources: []
---

**Clarify**  
You’re asking how *Spring Cloud* performs request routing, specifically comparing the legacy **Zuul** router to the newer **Spring Cloud Gateway**. I’ll assume we’re dealing with micro‑service ingress, dynamic route registration, and fault tolerance.

**Approach**  
1. Summarize Zuul’s architecture (single servlet filter, thread‑blocking).  
2. Outline Gateway’s reactive design (WebFlux, Netty).  
3. Highlight key differences: performance, extensibility, configuration model, and ecosystem support.  

**Depth**  
- **Zuul 1** is a Servlet‑based filter that processes requests synchronously on the Tomcat thread pool. It supports route definitions via `application.yml` or `/routes` endpoint but suffers from blocking I/O and limited scalability.  
- **Gateway** uses Spring WebFlux (Reactor Netty) to handle non‑blocking, back‑pressure–aware streams. Routes are defined in a fluent DSL or YAML; predicates (`Path`, `Host`) and filters (`AddRequestHeader`, `RewritePath`) can be composed declaratively. Gateway integrates with Resilience4j for circuit breakers and provides built‑in load balancing via Spring Cloud LoadBalancer.  
- **Performance**: Gateway handles >10× more concurrent connections than Zuul due to async I/O.  
- **Extensibility**: Custom filters in Gateway are simple `GatewayFilter` beans; Zuul requires implementing `ZuulFilter`.  
- **Observability**: Gateway exposes Micrometer metrics per route, while Zuul relies on external instrumentation.

**Edge Cases**  
- Legacy applications using Servlet filters may break under reactive gateway.  
- Stateful WebSocket upgrades need special handling (`WebsocketHandler`).  
- Mixed TLS/HTTP routes require careful Netty configuration.

**Optimize & Communicate**  
If I were interviewing, I’d frame the answer as: “Zuul is a legacy, blocking router; Gateway replaces it with a non‑blocking, DSL‑driven alternative that scales better and integrates seamlessly with modern Spring Cloud tools.” This signals clear problem framing, deep technical knowledge, and an eye toward future migration paths.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
