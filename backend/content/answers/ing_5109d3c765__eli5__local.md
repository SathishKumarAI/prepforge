---
qid: ing_5109d3c765__eli5__local
question: What is the default port of tomcat in spring boot?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 144
total_tokens: 303
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:45:27-05:00'
sources: []
---

Think of a Spring Boot application like a friendly café that automatically sets up its own little kitchen (Tomcat) when you open it. By default, the café’s kitchen doors are at **port 8080**—that’s the number guests use to get in. If you want your café to welcome visitors on a different door, you can simply tell Spring Boot to change that number in `application.properties` (`server.port=9090`, for example). So, unless you explicitly switch it, every new Spring Boot app will listen on port 8080.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
