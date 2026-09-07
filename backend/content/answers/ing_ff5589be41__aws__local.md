---
qid: ing_ff5589be41__aws__local
question: 'Explain: Gradle  build.gradle — Spring Boot - Eureka Server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 527
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:55:19-05:00'
sources: []
---

**Situation / Task**  
I was tasked to spin up a new **Eureka Discovery Service** in our Spring Boot micro‑service ecosystem while keeping the build pipeline lean and cloud‑native for AWS deployment.

**Action (Technical)**  
*In `build.gradle`* I added:

```groovy
plugins { id 'org.springframework.boot' version '3.2.1' }
dependencies {
    implementation 'org.springframework.cloud:spring-cloud-starter-netflix-eureka-server'
    implementation 'org.springframework.boot:spring-boot-starter-actuator'
}
```

I leveraged **Spring Cloud 2024.x** to auto‑configure Eureka, and enabled the *actuator* for health checks. For AWS deployment I containerised the app (Dockerfile) and pushed it to **Amazon ECR**, then deployed via **ECS Fargate** behind an **ALB** with a target group on port 8761. CloudWatch Logs and Metrics capture Eureka’s registry size, latency, and fail‑over events.

*Scalability & Availability:*  
- Fargate scales automatically to handle bursts of service registrations.  
- The ALB distributes traffic across multiple tasks, ensuring high availability.  
- Using **Eureka’s TTL** (30 s) guarantees stale entries are pruned quickly.

*Cost:*  
Running a single Fargate task (~0.1 USD/hr) for the registry and scaling only during peak registration windows keeps spend minimal versus running an EC2‑based server.

**Result**  
Within two weeks, we reduced **service discovery latency by 40%** (from 120 ms to 72 ms), dropped the Eureka failure rate from 3.5% to <0.1%, and cut infra costs by **$200/month**.

---

### Leadership Principles Highlighted
- **Customer Obsession** – delivering faster, more reliable service discovery directly benefits downstream services.  
- **Ownership & Dive Deep** – I engineered a minimal yet robust solution, troubleshooting latency spikes until root cause was identified in Eureka’s registry pruning logic.

*Bar‑raiser cue:* The candidate shows ownership (designing the Gradle config), dives deep into performance metrics, quantifies impact, and learns from prior latency issues.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
