---
qid: ing_12f5c4186e__faang__local
question: How to disable a specific auto-configuration class?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 435
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:27:46-05:00'
sources: []
---

**Clarify**  
You’re using Spring Boot and want to prevent a particular `@Configuration` that is automatically pulled in via an *auto‑configuration* (e.g., `DataSourceAutoConfiguration`). Assume the class is discovered through `spring.factories` or the new `META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports`.  

**Approach**  
1. Identify the fully qualified name of the auto‑config class.  
2. Disable it via one of Spring Boot’s mechanisms:  
   * `@SpringBootApplication(exclude = { … })`  
   * `spring.autoconfigure.exclude=…` in `application.properties`/`yaml`.  
3. If you only want to disable a specific bean within that config, use `@ConditionalOnMissingBean` or create a custom `@ConfigurationProperties` override.  

**Depth**  
```java
@SpringBootApplication(exclude = { DataSourceAutoConfiguration.class })
public class DemoApplication { … }
```
or in `application.yml`:
```yaml
spring:
  autoconfigure:
    exclude: org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration
```
Spring Boot will skip scanning that class entirely, so none of its beans are registered.  
If the auto‑config is conditional on a property, you could also set that property to an impossible value (e.g., `spring.datasource.url=none`) but explicit exclusion is cleaner and more maintainable.

**Edge Cases**  
* Multiple classes in one auto‑configuration file – ensure all needed ones are excluded.  
* The class may be imported by another auto‑config; excluding it won’t remove the importer, so you might need to exclude that as well.  
* Verify that other auto‑configs don’t depend on beans from the disabled config.

**Optimize & Communicate**  
Explain why explicit exclusion is preferable over property hacks: it’s declarative, visible in code, and avoids accidental misconfiguration. Mention that this change should be tested with integration tests to confirm no unintended side effects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
