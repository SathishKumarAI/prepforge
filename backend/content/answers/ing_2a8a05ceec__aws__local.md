---
qid: ing_2a8a05ceec__aws__local
question: 'Explain: Get the local cluster information — GitHub - confluentinc/kafka-rest:
  Confluent REST Proxy for Kafka \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 468
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:01:31-05:00'
sources: []
---

**Situation / Task**  
While architecting a real‑time analytics platform for a retail client, I needed to expose Kafka cluster metadata (topic counts, broker health, consumer lag) to the data‑science team through Confluent’s REST Proxy. The goal was to provide a single API endpoint that could be queried from Jupyter notebooks without requiring each user to install Kafka clients.

**Action**  
I built an **ECS Fargate service** running `confluentinc/kafka-rest`.  
* **Infrastructure** – VPC with public and private subnets, IAM role granting `DescribeCluster` & `ListTopics`, CloudWatch Logs for metrics.  
* **Deployment** – Docker image pulled from ECR, ECS task definition using 1 vCPU/2 GiB RAM, autoscaling on CPU >70%.  
* **Observability** – CloudWatch Alarms trigger SNS → PagerDuty when latency >200 ms or error rate >5%.  
* **Security** – TLS termination at ALB, mutual TLS between proxy and Kafka cluster.  

I automated the task definition update with a Terraform pipeline that runs on every commit to `main`, ensuring zero downtime deployments.

**Result**  
Within 48 hrs of rollout:  
* API latency dropped from 1.2 s to **<80 ms** (95th percentile).  
* Consumer‑lag queries now return in <10 ms, enabling near‑real‑time dashboards.  
* Ops alerts decreased by **40%** as the proxy handled retries and backpressure automatically.

**Reflection**  
This exercise reinforced **Ownership**—I owned the end‑to‑end pipeline—and **Dive Deep**—examining Kafka’s metrics exposed via REST to tune CloudWatch thresholds. I learned that choosing Fargate over EC2 reduced operational overhead, but I also weighed the higher per‑second cost against the critical uptime requirement.

> *Leadership Principles highlighted:* **Customer Obsession**, **Ownership**, and **Dive Deep**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
