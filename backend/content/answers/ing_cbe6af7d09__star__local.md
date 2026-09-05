---
qid: ing_cbe6af7d09__star__local
question: Can we override or replace the Embedded tomcat server in Spring Boot?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 381
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:16:33-05:00'
sources: []
---

**Situation:**  
At my previous company we were migrating a legacy banking application from a traditional J2EE stack to Spring Boot. The new deployment needed to integrate with our existing Apache HTTPD reverse proxy and required fine‑tuned Tomcat thread pools for high concurrency, but the default embedded configuration was too aggressive.

**Task:**  
I had to replace the bundled Tomcat with a custom instance that could expose specific JMX metrics and use a different connector (AJP) while keeping Spring Boot’s auto‑configuration intact so we wouldn’t lose any of its convenience features.

**Action:**  
I first disabled the default Tomcat starter by excluding `spring-boot-starter-tomcat` from Maven. Then I added `tomcat-embed-core`, `tomcat-embed-el`, and `tomcat-embed-websocket` as dependencies, and wrote a `TomcatServletWebServerFactory` bean in Java config. In that factory I set the max threads to 200, enabled AJP on port 8009, and exposed JMX attributes via an `EmbeddedServletContainerCustomizer`. To ensure seamless Spring Boot integration, I also wired the factory into the `SpringApplicationBuilder` so all auto‑configured beans were still discovered.

**Result:**  
The new embedded Tomcat met our latency targets—average response time dropped from 350 ms to 210 ms under peak load—and the AJP connector allowed seamless communication with HTTPD. We also gained real‑time thread pool metrics in Prometheus, which reduced incident response times by 30%. I learned that replacing an embedded server is straightforward if you carefully manage dependencies and expose a custom factory bean.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
