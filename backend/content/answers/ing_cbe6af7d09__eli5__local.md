---
qid: ing_cbe6af7d09__eli5__local
question: Can we override or replace the Embedded tomcat server in Spring Boot?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 217
total_tokens: 378
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:58:08-05:00'
sources: []
---

Think of a Spring Boot application as a kitchen that comes pre‑equipped with a built‑in stove (the embedded Tomcat). The stove works out of the box and cooks everything just fine, but you might want a different burner or an oven that’s better suited for your recipes.

You can keep the original stove and simply add another one next to it—this is like adding a separate Tomcat instance in a traditional WAR deployment. You leave the built‑in stove untouched and run your app on the external server instead.  

Alternatively, you can swap the stove entirely: stop using the embedded Tomcat and configure Spring Boot to launch with another servlet container (e.g., Jetty or Undertow). In this case, the kitchen’s plumbing is re‑wired so that all traffic goes through the new burner.

So yes—you either keep the original embedded server and add a new one, or you replace it entirely by telling Spring Boot which container to use.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
