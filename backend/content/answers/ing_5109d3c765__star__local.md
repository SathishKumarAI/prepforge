---
qid: ing_5109d3c765__star__local
question: What is the default port of tomcat in spring boot?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 327
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:10:19-05:00'
sources: []
---

**Situation:** While leading the backend team for our new SaaS product, we hit a snag during the first deployment of the Spring Boot microservice that handled user authentication. The service was up but clients were getting connection errors and no logs appeared in our monitoring dashboard.

**Task:** I had to quickly identify why the API wasn’t reachable, restore traffic, and ensure the port configuration matched the load balancer’s expectations without disrupting other services.

**Action:** I started by inspecting the `application.yml` and the embedded Tomcat settings. In Spring Boot, the default HTTP port for the embedded Tomcat server is **8080**, unless overridden by `server.port`. I verified that our environment variables had no `SERVER_PORT` set, so the service was listening on 8080. The load balancer, however, was routing to port 80. I updated the deployment manifest to expose port 8080 and added a network policy to map it to 80 via a reverse proxy. After redeploying, traffic flowed normally.

**Result:** Within 15 minutes we restored service availability, reduced incident tickets by 70%, and documented the port configuration in our dev‑ops playbook. I learned the importance of confirming default framework settings during early staging to avoid misconfigurations that can cascade into larger outages.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
