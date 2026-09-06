---
qid: ing_cbe6af7d09__fp__local
question: Can we override or replace the Embedded tomcat server in Spring Boot?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 365
total_tokens: 538
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:13:44-05:00'
sources: []
---

In a Spring Boot application the web layer is a *pluggable abstraction* over an HTTP container.  
The framework ships with embedded Tomcat because it satisfies three first‑principle constraints:

1. **Self‑contained deployment** – every microservice can run as a single JAR, avoiding external server configuration.
2. **Fast iteration** – the embedded engine starts in milliseconds, making local development trivial.
3. **Uniform API** – Spring’s `ServletWebServerFactory` interface hides container details while still exposing life‑cycle hooks.

Thus, overriding Tomcat is simply swapping one implementation of that abstraction for another.  
```java
@Bean
public ServletWebServerFactory servletContainer() {
    // Use Jetty instead of Tomcat
    return new JettyServletWebServerFactory();
}
```
Spring Boot also bundles Undertow and allows a pure‑Java “Tomcat‑like” server via `org.apache.catalina.startup.Tomcat`.  
If you need custom connectors or protocol support (e.g., HTTP/2, SPDY), you can subclass the chosen factory and inject your own `Connector` configuration.

**Non‑obvious insight:** Because the container is instantiated by Spring’s `ApplicationContext`, *you can replace it at runtime* with a different bean definition that references an external server. This lets you run the same codebase both as a fat JAR (embedded) for CI and locally, and as a WAR on an existing Tomcat or Jetty cluster in production—without touching your controllers or services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
