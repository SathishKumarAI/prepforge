---
qid: ing_5109d3c765__faang__local
question: What is the default port of tomcat in spring boot?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 402
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:52:41-05:00'
sources: []
---

**Clarify**  
The question asks for *the default HTTP port that an embedded Tomcat server listens on when running a Spring Boot application*.  
Assumptions: we’re talking about the standard, out‑of‑the‑box configuration—no custom `application.yml` or `server.port` property set.

**Approach**  
1. Recall Spring Boot’s auto‑configuration hierarchy for embedded containers.  
2. Identify the default value hardcoded in `TomcatServletWebServerFactory`.  
3. Verify against documentation and typical runtime output.

**Depth**  
Spring Boot’s `EmbeddedServletContainerCustomizer` sets Tomcat’s port to **8080** when no explicit property is supplied. The code path (`org.springframework.boot.web.server.WebServerFactoryCustomizer`) checks `server.port`; if absent, it falls back to `TomcatServletWebServerFactory.DEFAULT_PORT`, which equals 8080. This matches the standard HTTP port used by most Java web applications.

- **Time complexity**: O(1) – a simple property lookup.  
- **Space complexity**: O(1).  
- No external resources or I/O are involved.

**Edge Cases**  
- If `server.port` is set to `0`, Spring Boot picks an available random port (useful for tests).  
- In multi‑module projects, a parent POM might override the default via `<properties>`.  
- Running under a container like Docker may expose a different host port but still use 8080 inside.

**Optimize & Communicate**  
If I were explaining to an interviewer, I’d highlight that while 8080 is the canonical default, developers often change it for production (e.g., 80, 443 with TLS). Emphasize understanding of how Spring Boot’s auto‑configuration layers work and how to override defaults cleanly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
