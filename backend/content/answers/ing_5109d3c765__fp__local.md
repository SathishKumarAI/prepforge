---
qid: ing_5109d3c765__fp__local
question: What is the default port of tomcat in spring boot?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 268
total_tokens: 439
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:57:23-05:00'
sources: []
---

In Spring Boot, the embedded Tomcat server listens on a **single** network socket whose number is defined by the property `server.port`.  
When you run a Boot application without setting this property, the framework falls back to the default value **8080**.

Why 8080?  
* The HTTP protocol was originally specified to use port 80.  
* Port 80 requires root privileges on Unix‑like systems; developers therefore reserve it for production servers behind reverse proxies.  
* Port 8080 lies just above the well‑known range (1–1023) and is conventionally chosen as a “web‑app” alternative that does not clash with other services while still being easily reachable from a browser (`http://localhost:8080`).  

Thus, Boot’s default is a pragmatic compromise between security (avoiding privileged ports) and usability (a predictable, non‑conflicting port).  
**Non‑obvious insight:** the choice of 8080 is not arbitrary but rooted in early web server practices; many frameworks hard‑code it because it represents the *least surprise* for developers who often run multiple local services that must coexist without privilege escalation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
