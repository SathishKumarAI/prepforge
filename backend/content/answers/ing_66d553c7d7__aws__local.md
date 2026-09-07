---
qid: ing_66d553c7d7__aws__local
question: 'Why Spring Boot over Spring? — GitHub - Anshul619/SpringBoot: About This
  repo contains java \"how to to-dos\", concepts in Spring Boot \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 394
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:17:33-05:00'
sources: []
---

**Why I chose Spring Boot over vanilla Spring**

> **Leadership Principles:** *Customer Obsession* – delivering faster, more reliable services; *Ownership* – streamlining my own development cycle.

**Situation (S)**  
I was tasked to prototype a micro‑service that would ingest telemetry data from 50k IoT devices and expose a REST API. The team used plain Spring MVC and struggled with configuration overhead.

**Task (T)**  
Reduce the time to production, lower operational complexity, and guarantee high availability for a 24/7 ingestion pipeline.

**Action (A)**  
1. Switched to **Spring Boot**: removed XML, leveraged auto‑configuration, and used *spring-boot-starter-web* + *spring-boot-starter-actuator*.  
2. Added **Spring Cloud Sleuth** & **Zipkin** for distributed tracing; integrated with **Amazon CloudWatch** via the AWS SDK.  
3. Deployed to an **ECS Fargate** cluster, using *application.yml* profiles for dev/qa/prod, and enabled *health‑check* endpoints that CloudWatch monitors.

**Result (R)**  
- Deployment time dropped from 4 days to <12 hours (85 % reduction).  
- Mean time to recover (MTTR) fell from 1.2 h to 15 min due to auto‑restart and health checks.  
- Operational cost decreased by ~30 % because the container count shrank (boot’s lightweight runtime).

**Reflection**  
I learned that choosing a framework with built‑in opinionated defaults can unlock significant speed‑to‑market without sacrificing reliability—exactly what *Customer Obsession* demands.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
