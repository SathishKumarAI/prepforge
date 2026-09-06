---
qid: ing_12f5c4186e__think__local
question: How to disable a specific auto-configuration class?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 581
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:00:11-05:00'
sources: []
---

**1️⃣ Clarify the context & assumptions**  
- Assume Spring Boot application (the phrase “auto‑configuration” is most common there).  
- The goal is to prevent *one* particular `@Configuration` class from being applied automatically, while keeping all other auto‑configurations intact.  
- We’ll treat the target as a normal `AutoConfiguration` bean defined in `META-INF/spring.factories`.

**2️⃣ Mental model / framework**  
Spring Boot’s auto‑configuration mechanism works by:  

1. Scanning `spring.factories` for classes that implement `org.springframework.boot.autoconfigure.EnableAutoConfiguration`.  
2. Adding each found class to the application context (unless explicitly excluded).  
3. Excluding is done via annotations (`@EnableAutoConfiguration(exclude = …)`), properties (`spring.autoconfigure.exclude=…`) or programmatic configuration.

**3️⃣ Step‑by‑step reasoning**  

1. Identify the fully qualified name of the auto‑config class you want to disable (e.g., `com.example.MySpecificAutoConfig`).  
2. **Option A – Annotation on a @Configuration class**: add `@EnableAutoConfiguration(exclude = MySpecificAutoConfig.class)` to your main application class or any other `@Configuration` bean.  
3. **Option B – Application‑properties**: set `spring.autoconfigure.exclude=com.example.MySpecificAutoConfig`.  
4. **Option C – Programmatic exclusion** (e.g., in a `SpringBootApplicationBuilder`): call `.exclude(MySpecificAutoConfig.class)`.  
5. Verify that the class is no longer listed among the auto‑configurations when you run the app (use `--debug` or look at logs).  

**4️⃣ Common traps to avoid**  

- Mixing up *auto‑configuration* classes with regular `@Configuration` beans – only those registered in `spring.factories` can be excluded this way.  
- Forgetting that `exclude` is a **class array**, not a string list, when using annotations.  
- Over‑exclusion: putting multiple unrelated classes into the same exclude property can unintentionally disable needed features.  

**5️⃣ Sanity‑check & communicate**  

1. Run the application with `--debug`; check “Auto-configured classes” section to confirm the target is absent.  
2. If you’re using a build tool, ensure the dependency that brings in the auto‑config class is still present (you just prevent its activation, not removal).  
3. Document the exclusion in README or comment next to the annotation so future maintainers know why it’s there.  

By following this structured approach, you can reliably disable a specific auto‑configuration class without affecting the rest of Spring Boot’s automatic setup.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
