---
qid: ing_cbe6af7d09__faang__local
question: Can we override or replace the Embedded tomcat server in Spring Boot?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 451
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:33:20-05:00'
sources: []
---

**Clarify**  
We’re asked whether a Spring Boot application can swap out its default embedded Tomcat for another servlet container (e.g., Jetty, Undertow). Assume the app is built with Maven/Gradle, uses `spring‑boot-starter-web`, and we want to keep it runnable via `java -jar`.  

**Approach**  
1. Exclude Tomcat’s starter dependency.  
2. Add the desired container’s starter (e.g., `spring-boot-starter-undertow`).  
3. Ensure no conflicting servlet APIs are on the classpath.  
4. Re‑package with Maven/Gradle; Spring Boot auto‑configures the chosen server.

**Depth**  
Spring Boot uses a “starter” that pulls in Tomcat’s `org.apache.tomcat.embed:tomcat-embed-core` and related libs. By declaring `implementation('org.springframework.boot:spring-boot-starter-undertow')` and omitting `spring-boot-starter-tomcat`, the auto‑configuration picks up Undertow instead of Tomcat. The same pattern works for Jetty (`spring-boot-starter-jetty`). Complexity is O(1) in terms of runtime; memory footprint may differ (~10 % more for Jetty). No code changes are needed beyond dependency tweaks, as Spring Boot’s `ServletWebServerFactory` bean auto‑creates the right container.

**Edge Cases**  
* Mixing starters can cause classpath conflicts.  
* Some Tomcat‑specific features (e.g., certain Valve classes) won’t be available.  
* If you rely on native Tomcat configuration files, you must translate them to Undertow/Jetty equivalents.  

**Optimize & Communicate**  
If performance is critical, benchmark each container under expected load and profile GC behavior; choose the one with lower latency or memory usage. Communicate the change by documenting the new starter in `pom.xml`/`build.gradle` and updating deployment scripts to reference the new jar. This keeps the build pipeline identical while swapping servers seamlessly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
