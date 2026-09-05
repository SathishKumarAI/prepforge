---
qid: ing_12f5c4186e__star__local
question: How to disable a specific auto-configuration class?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 342
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:06:31-05:00'
sources: []
---

**Situation**  
In the last sprint I was refactoring our recommendation engine microservice built with Spring Boot 3. The default `DataSourceAutoConfiguration` tried to connect to an external PostgreSQL instance, but we were running in a Docker container that only had an embedded H2 database for integration tests. Every test run hung on connection attempts and the CI pipeline failed.

**Task**  
I needed to stop Spring from auto‑configuring the real `DataSource` while still allowing the application context to load normally and use our custom Hikari pool pointing at the test database.

**Action**  
I created a lightweight configuration class annotated with `@Configuration` and added `@ConditionalOnProperty(name = "app.test.enabled", havingValue = "true")`. Inside, I defined a bean for `DataSource` using `HikariConfig` that points to the H2 URL. Then I disabled the auto‑configuration by adding `spring.autoconfigure.exclude=org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration` in `application-test.yml`. Finally, I updated the Dockerfile to set `-Dapp.test.enabled=true` for test builds.

**Result**  
Test execution time dropped from 12 minutes to under 2 minutes. The CI build passed on every run, and we avoided hard‑coding database URLs in code. I learned that fine‑grained control of Spring’s auto‑configuration via `@ConditionalOnProperty` and the `exclude` property is a clean way to swap implementations without scattering conditional logic throughout the codebase.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
