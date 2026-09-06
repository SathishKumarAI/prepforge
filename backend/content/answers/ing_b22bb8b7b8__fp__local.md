---
qid: ing_b22bb8b7b8__fp__local
question: What are the Spring Boot key components?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 513
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:22:47-05:00'
sources: []
---

**Spring Boot’s Core Components – a “Why‑It‑Works” view**

| Layer | Why it exists | Key artifact |
|-------|---------------|--------------|
| **Application bootstrap** | A program must start, load configuration, and expose an HTTP endpoint. Spring Boot supplies a *single* `main` method that spins the embedded servlet container (Tomcat/Jetty) and triggers component scanning. | `SpringApplication.run()` |
| **Configuration resolution** | Applications vary across environments; we need a single source of truth that overrides defaults cleanly. Spring Boot’s *auto‑configuration* inspects the classpath, reads `application.yml`/`.properties`, then wires beans only when their prerequisites exist. | `@SpringBootApplication`, `spring.factories` |
| **Dependency injection** | To keep code modular and testable we must decouple object creation from use. Spring’s IoC container manages bean lifecycles, scopes, and dependencies as a graph. | `@Component`, `@Bean`, `@Autowired` |
| **Web MVC / Reactive stack** | The RESTful API is the most common surface. Spring MVC maps URLs to controller methods; WebFlux offers non‑blocking I/O for high concurrency. Both are built atop the same bean infrastructure, so swapping between them costs almost nothing. | `@RestController`, `Mono/Flux` |
| **Data access abstraction** | Persisting data should not force us to write boilerplate JDBC. Spring Data JPA/Hibernate or MongoDB repositories expose a repository interface; implementation is generated at runtime. | `JpaRepository`, `MongoRepository` |
| **Actuator & metrics** | Running services must be observable. Actuator exposes health, metrics, and environment endpoints, automatically collecting data from the same bean graph that powers the app. | `/actuator/health`, Micrometer |

> **Non‑obvious insight:**  
> Auto‑configuration is not a *feature* but a *design choice*: it turns the classpath into an implicit contract. By declaring optional dependencies (e.g., `spring-boot-starter-data-jpa`), you tell Spring “if I have these libraries, wire me up automatically.” This removes manual wiring from every project and lets developers focus on business logic—an elegant marriage of *opt‑in* configuration with *dependency inversion*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
