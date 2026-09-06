---
qid: ing_c57e1350b4__think__local
question: 'Explain: API Reliability — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 439
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:00:43-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
- Identify that the user wants a *thinking process* (metacognitive outline) for explaining “API Reliability” and “What is an API?” in a system‑design context.  
- Assume the audience has basic CS knowledge but may not know API jargon or reliability concerns.

**2️⃣ Choose a mental model / framework**  
- Use the **“Problem → Concept → Design → Evaluation”** flow: first define the problem (why APIs matter), then explain the core concept, then discuss design patterns for reliability, and finally evaluate trade‑offs.  
- Embed the classic system‑design layers: interface, contract, implementation, monitoring.

**3️⃣ Step‑by‑step reasoning**  
1. **Problem framing** – why API reliability matters in distributed systems (client trust, SLA, uptime).  
2. **Concept definition** – “API” as a contract/interface exposing functionality over a network; mention REST/GraphQL/grpc.  
3. **Reliability dimensions** – availability, latency, consistency, fault tolerance.  
4. **Design patterns** – idempotency, circuit breaker, retry logic, versioning, rate limiting, graceful degradation.  
5. **Monitoring & observability** – metrics (latency percentiles, error rates), tracing, alerting.  
6. **Trade‑offs** – complexity vs. resilience; cost of retries vs. latency.

**4️⃣ Common traps to avoid**  
- Mixing “API” with “backend service” or “microservice.”  
- Over‑emphasizing code snippets without context.  
- Forgetting that reliability is a *continuous* property, not a one‑time feature.  
- Neglecting the client’s perspective (e.g., how clients handle failures).

**5️⃣ Sanity‑check & verbalize**  
- Ask: Does each step logically flow?  
- Verify that all key reliability concerns are mentioned.  
- Practice explaining the outline aloud, ensuring clarity and brevity before filling in details.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
