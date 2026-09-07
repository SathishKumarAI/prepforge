---
qid: ing_ed7c688813__aws__local
question: 'Explain: Development — GitHub - confluentinc/kafka-rest: Confluent REST
  Proxy for Kafka \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 624
total_tokens: 872
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:15:23-05:00'
sources: []
---

**Context (S)**  
At my previous role I was tasked with enabling a multi‑tenant analytics platform to ingest real‑time sensor data without exposing the underlying Kafka cluster. The requirement was a secure, scalable HTTP endpoint that could translate REST calls into Kafka records and vice versa.

**Task (T)**  
I chose Confluent’s `kafka-rest` (now `confluentinc/kafka-rest`) as the core component because it abstracts the Java client logic, supports OAuth2 token exchange, and is fully compatible with AWS MSK. The goal was to deploy it on ECS Fargate for zero‑maintenance scaling while keeping latency under 200 ms per request.

**Action (A)**  

| Step | Technical Detail | AWS Service |
|------|------------------|-------------|
| 1 | Containerize the Confluent REST Proxy with a custom `Dockerfile`, patching the client to use AWS Secrets Manager for credentials. | ECR, ECS Fargate |
| 2 | Expose the proxy via an Application Load Balancer (ALB) with path‑based routing (`/topics/*`). Enable TLS termination and integrate with ACM certificates. | ALB, ACM |
| 3 | Configure Kafka cluster to use IAM authentication via MSK’s `KafkaAccessControlList` and a custom `SaslPlain` plugin that reads tokens from Secrets Manager. | MSK, IAM |
| 4 | Add CloudWatch Alarms on request latency (>200 ms) and error rates; auto‑scale the Fargate service based on CPU/Memory thresholds. | CloudWatch, ECS Service Auto Scaling |

**Result (R)**  
- **Latency:** Average 95th percentile <180 ms, a 35% improvement over the legacy Netty client.  
- **Throughput:** Sustained 10k messages/sec with zero outages during a production spike.  
- **Cost:** Fargate reduced operational overhead by ~40%, and using IAM tokens eliminated costly credential rotation scripts.

**Leadership Principles Highlighted**

- **Customer Obsession & Ownership** – I engineered a fault‑tolerant ingestion layer that directly addressed our data consumers’ SLA needs.  
- **Dive Deep & Bias for Action** – By containerizing the proxy and automating secrets management, I cut deployment time from days to minutes.

**Bar‑raiser Takeaway**

- Demonstrated ownership by replacing a manual Java client with an automated, secure REST endpoint.  
- Showed depth: detailed trade‑offs (ALB vs NLB, Fargate vs EC2) and quantified impact on latency/cost.  
- Learned from a failed attempt to use a self‑hosted Kafka connector that lacked token support; pivoting to Confluent’s proxy fixed the issue and improved security posture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
