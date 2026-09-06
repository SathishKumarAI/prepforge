---
qid: ing_cbe6af7d09__think__local
question: Can we override or replace the Embedded tomcat server in Spring Boot?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 639
total_tokens: 831
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:24:13-05:00'
sources: []
---

**Metacognitive Road‑Map for Answering “Can we override or replace the embedded Tomcat server in Spring Boot?”**

1. **Clarify & State Assumptions**  
   - Identify the core ask: *“override/replace”* → does it mean swap to another servlet container (Jetty, Undertow) or customise Tomcat?  
   - Assume a standard Spring Boot 2.x/3.x application with default auto‑configuration.  
   - Note that “embedded” refers to the in‑process server bundled by Spring Boot.

2. **Mental Model / Framework**  
   - *Spring Boot Auto‑Configuration* → `spring-boot-starter-web` pulls in Tomcat by default.  
   - *Dependency Override*: Maven/Gradle can exclude the default starter and add another container starter (`jetty`, `undertow`).  
   - *Customization via Beans*: `EmbeddedServletContainerCustomizer` / `WebServerFactoryCustomizer` (Spring Boot 2+) allow programmatic tweaks.

3. **Step‑by‑Step Reasoning**  
   1. Check current `pom.xml/gradle.build`: see if `spring-boot-starter-web` is present.  
   2. To replace Tomcat, add the desired starter (e.g., `spring-boot-starter-undertow`) and exclude Tomcat:  
      ```xml
      <dependency>
          <groupId>org.springframework.boot</groupId>
          <artifactId>spring-boot-starter-web</artifactId>
          <exclusions>
              <exclusion>
                  <groupId>org.apache.tomcat.embed</groupId>
                  <artifactId>tomcat-embed-core</artifactId>
              </exclusion>
          </exclusions>
      </dependency>
      ```  
   3. If only customizing Tomcat (port, connector settings), register a `WebServerFactoryCustomizer<ConfigurableServletWebServerFactory>` bean.  
   4. Verify that no other auto‑configurations conflict and run the app.

4. **Common Traps to Avoid**  
   - Forgetting to exclude *all* Tomcat artifacts (`tomcat-embed-core`, `tomcat-embed-websocket`).  
   - Mixing Spring Boot 1.x and 2.x APIs (e.g., using `EmbeddedServletContainerCustomizer` in Boot 2).  
   - Assuming the replacement container will automatically pick up all Tomcat‑specific configs; each has its own properties.

5. **Sanity Check & Communication**  
   - Run a minimal test: start the app, hit an endpoint, confirm the new server’s port/URL.  
   - Communicate clearly: “Yes, you can replace or override the embedded Tomcat by excluding its starter and adding another container’s starter; for custom tweaks, use `WebServerFactoryCustomizer`.”  

Follow this checklist whenever you encounter a similar question about swapping or customizing components in Spring Boot.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
