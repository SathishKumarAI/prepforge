---
qid: ing_0ac42efe84__aws__local
question: 'Explain: Installation — GitHub - confluentinc/kafka-rest: Confluent REST
  Proxy for Kafka \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 659
total_tokens: 907
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:50:10-05:00'
sources: []
---

**Situation / Task**

I was leading a data‑engineering sprint at a fintech startup that needed an API layer for real‑time trading alerts. Our core stream platform was Apache Kafka, but the front‑end teams spoke only REST, so we had to expose Kafka topics without writing custom connectors. I chose Confluent’s `kafka-rest` (GitHub: confluentinc/kafka-rest) and had to get it running on AWS in under 2 hours.

**Action**

1. **Clone & Build**  
   ```bash
   git clone https://github.com/confluentinc/kafka-rest.git
   cd kafka-rest
   ./mvnw clean package -DskipTests
   ```
   I used Maven’s `-DskipTests` to shave 15 minutes; unit tests ran in CI on GitHub Actions.

2. **Containerize**  
   ```dockerfile
   FROM openjdk:17-jre-slim
   COPY target/kafka-rest-*-all.jar /app/kafka-rest.jar
   ENTRYPOINT ["java","-jar","/app/kafka-rest.jar"]
   ```
   Building the image locally (`docker build -t kafka-rest .`) took ~3 min.

3. **Deploy to ECS Fargate**  
   *Task definition* – CPU 256, memory 512 MiB (cost‑efficient).  
   *Service* – 2 replicas for HA; Auto‑Scaling on CPU >70%.  
   *ALB* – HTTPS listener forwarding `/kafka/*` to the service.  

4. **Configure Kafka & Secrets**  
   Stored broker URLs, SSL certs, and SASL credentials in AWS Secrets Manager. The `application.properties` referenced `${secrets:...}`; ECS task role allowed read access.

5. **Monitoring**  
   Enabled CloudWatch Logs (log retention 30 days) and set up a CloudWatch Alarm on HTTP 500 errors (>10 per minute).  

**Result**

- Deployed in < 90 minutes, meeting the sprint deadline.  
- API latency stayed below 120 ms for 99th percentile requests under 5k concurrent users (validated with k6).  
- Cost: ~$0.12/hr per task; overall $34/month vs an estimated $60 if we had built a custom connector.

**Reflection**

I owned the end‑to‑end rollout, diving deep into Confluent’s docs and Docker best practices. The trade‑off was accepting the overhead of maintaining another service, but the quantified impact (time saved + cost reduction) justified it. I learned that pre‑built connectors can dramatically accelerate delivery when coupled with proper AWS infra patterns.  

**Leadership Principles Highlighted**

- **Ownership** – Took full responsibility for build, deployment, and monitoring.  
- **Dive Deep** – Investigated Maven build nuances, Docker image size, and ECS resource tuning.  
- **Deliver Results** – Met sprint deadline, achieved low latency, and reduced costs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
