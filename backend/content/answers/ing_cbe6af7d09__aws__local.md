---
qid: ing_cbe6af7d09__aws__local
question: Can we override or replace the Embedded tomcat server in Spring Boot?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 507
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:01:50-05:00'
sources: []
---

**S – Situation**  
At my previous role I led a migration of a monolithic Java app (Spring‑Boot + embedded Tomcat) to a serverless architecture on AWS. The app handled ~3 M requests/day and the embedded container was a bottleneck for scaling during flash sales.

**T – Task**  
I had to determine whether we could replace or override the built‑in Tomcat with a more scalable solution while keeping the existing Spring codebase intact.

**A – Action**  
1. **Dive Deep into Requirements** – I catalogued all lifecycle hooks, health checks, and custom connectors that the app relied on.  
2. **Proposed Design** – Deploy the Spring Boot JAR to an ECS Fargate cluster behind an Application Load Balancer (ALB). The ALB replaces Tomcat’s HTTP listener; we keep the embedded server for local development but disable it in production (`server.servlet.context-parameters.disableEmbedded=true`).  
3. **AWS Services & Trade‑offs** –  
   * **ECS Fargate**: No EC2 management, auto‑scales with CPU/memory, 99.9 % availability.  
   * **ALB + Target Groups**: Handles HTTP/HTTPS termination, sticky sessions if needed, and integrates with WAF for security.  
   * **Cost**: ~$0.15/hr per task vs ~\$2.40/hr for an on‑prem Tomcat server; 70 % cost reduction.  
4. **Bias for Action** – Created a pilot container image, pushed to ECR, and rolled out using Blue/Green deployment in CodeDeploy.  

**R – Result**  
The new architecture handled peak loads of 10× the previous traffic with <1 ms added latency. We cut infrastructure cost by 68 % and reduced mean time to recovery from 45 min to under 5 min during outages. The team adopted this pattern for all future Spring services, creating a reusable “Spring‑Boot on Fargate” library.

**Leadership Principles Highlighted**  
- **Customer Obsession / Deliver Results**: Improved uptime and cost efficiency directly impacted user experience.  
- **Ownership & Dive Deep**: I owned the migration end‑to‑end and dissected every dependency to ensure a smooth transition.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
