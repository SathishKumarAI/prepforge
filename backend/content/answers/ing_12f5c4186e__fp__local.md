---
qid: ing_12f5c4186e__fp__local
question: How to disable a specific auto-configuration class?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 459
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:46:03-05:00'
sources: []
---

**Why an auto‑config can be turned off**

Spring Boot’s auto‑configuration is essentially a *probabilistic* model of the “most likely” application state:  
- It scans the classpath, reads properties, and, if it finds a bean it expects, it registers one for you.  
- The decision rule is “if X is present **and** Y is missing, create bean Z.”  

If you override this rule you’re telling Spring that *your* intent deviates from the most probable state. Because auto‑config uses `@ConditionalOn…` annotations, disabling it is a matter of negating the condition that originally made it fire.

**Deriving the disable mechanism**

1. **Locate the target class** – e.g., `DataSourceAutoConfiguration`.  
2. **Understand its conditions** – it’s annotated with `@ConditionalOnClass(DataSource.class)` and `@ConditionalOnMissingBean(DataSource.class)`.  
3. **Invert the condition** – add a bean of the same type (or a property that breaks the condition).  

The cleanest, most general approach is to use `@SpringBootApplication(exclude = …)` or the `spring.autoconfigure.exclude` property:

```java
@SpringBootApplication(
    exclude = {DataSourceAutoConfiguration.class}
)
public class DemoApp { … }
```

or

```properties
spring.autoconfigure.exclude=org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration
```

This tells Spring to *never* consider that configuration, regardless of the presence of its conditions. It’s equivalent to wrapping the entire auto‑config in a `@ConditionalOnMissingBean(ExcludeMe.class)` that you never provide.

**Non‑obvious insight**

Because exclusions are evaluated **before** any bean creation, they can be used to influence *other* auto‑configs that depend on the excluded one. For instance, disabling `DataSourceAutoConfiguration` also prevents `JpaRepositoriesAutoConfiguration`, even if you haven’t explicitly excluded it. Thus, a single exclusion can cascade through the dependency graph, offering a powerful lever for fine‑grained control over application startup.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
