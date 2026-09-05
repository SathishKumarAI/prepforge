---
qid: ing_ed7c688813__star__local
question: 'Explain: Development — GitHub - confluentinc/kafka-rest: Confluent REST
  Proxy for Kafka \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 369
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:23:45-05:00'
sources: []
---

**Situation**  
At my previous job we had a micro‑service architecture that used Kafka for event streaming, but several of our front‑end teams couldn’t use native clients because they were written in JavaScript and didn’t have a Kafka library. The product owner demanded a unified API so the teams could publish telemetry without writing any Kafka boilerplate.

**Task**  
I was tasked with designing and deploying a lightweight REST proxy that would expose a secure, rate‑limited HTTP endpoint for producing and consuming messages, while keeping latency below 50 ms per request and supporting at least 200 concurrent users.

**Action**  
I chose Confluent’s open‑source `kafka-rest` (confluentinc/kafka-rest) as the core. I cloned the repo, built it with Maven, and packaged it into a Docker image. Using Docker Compose, I spun up a local Kafka cluster, Zookeeper, and the REST proxy, then wrote integration tests in JavaScript using Axios to validate produce/consume flows. To enforce security, I added OAuth2 token exchange via Confluent Control Center and enabled TLS termination on Nginx. For scaling, I configured multiple REST proxy replicas behind an HAProxy load balancer, and used Prometheus metrics to monitor request latency and error rates.

**Result**  
Within two weeks the API was live; front‑end teams could publish events in under 30 ms average latency. We reduced Kafka client code by 4 k lines across the organization, and the proxy handled 350 concurrent requests without degradation. I learned how to balance ease of use with operational overhead, and gained hands‑on experience configuring Confluent components for production workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
