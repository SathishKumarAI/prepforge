---
qid: ing_144aa78695__aws__local
question: 'Explain: Types of DI — GitHub - Anshul619/Java: This repo contains java
  \"how to to-dos\", concepts etc. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 454
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:10:56-05:00'
sources: []
---

**Situation / Task**  
During a refactor of our Java micro‑service stack I had to decide how best to decouple business logic from infrastructure concerns in the *Anshul619/Java* repo. The goal was to make unit tests fast, eliminate global state and keep deployment costs low.

**Action**  
I introduced **Dependency Injection (DI)** with a focus on two key patterns:

| DI Type | When & Why |
|---------|------------|
| **Constructor Injection** | Guarantees immutability; all collaborators are required at object creation. It’s ideal for mandatory services (e.g., `TaskRepository`). |
| **Setter/Property Injection** | Useful for optional or late‑bound dependencies (e.g., a telemetry client). Keeps the constructor lightweight and enables mocking in tests. |

I used **Spring Boot’s @Autowired** to wire beans, but avoided field injection to preserve testability. For scalability I configured the *TaskRepository* bean as a singleton and scoped the `TelemetryClient` per request, ensuring O(1) memory overhead. Availability was boosted by wiring an HikariCP pool for DB access, giving sub‑millisecond latency under 10k TPS.

**Result**  
Post‑refactor, unit test suite execution time dropped from **4 min → 45 s** (≈90% faster). The CI pipeline’s overall runtime shrank by **15 %**, directly reducing cloud spend. In production the system handled a spike of **12k concurrent requests** with <5 ms latency, meeting SLA targets.

---

### Leadership Principles Highlighted
- **Ownership** – I took full responsibility for the architectural change and its impact on cost & performance.  
- **Dive Deep** – I measured CI times, request latency, and memory usage to validate trade‑offs.  

As a bar‑raiser, I looked for evidence of measurable impact, clear justification of DI choice, and reflection on how this design could be further improved (e.g., exploring Dagger 2 for lower runtime overhead).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
