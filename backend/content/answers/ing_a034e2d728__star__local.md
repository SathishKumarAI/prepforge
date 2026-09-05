---
qid: ing_a034e2d728__star__local
question: 'Explain: Output — Spring Boot - Eureka Server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 384
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:52:48-05:00'
sources: []
---

**Situation** – In my last role I was building an end‑to‑end recommendation engine that ran on Kubernetes. The data pipelines and the model serving layer were split into several Spring Boot microservices (ingestion, feature store, inference). When we spun up the cluster, the first thing that caught our eye was the Eureka dashboard showing a green “UP” status for each service but no real‑time traffic.

**Task** – I had to verify that the registry was correctly publishing service instances and that the client applications were discovering them via REST endpoints, all while keeping latency under 20 ms.

**Action** – I added a custom `/health` actuator endpoint to every microservice and enabled Eureka’s `eureka.client.registerWithEureka=true`. Using Postman I queried `http://<eureka-host>:8761/eureka/apps/` and parsed the XML response with jq to confirm instance IDs, metadata (CPU quota, memory limits) and health status. Then I instrumented a simple Java client that called the inference service through Eureka’s `/infer` path, measuring round‑trip time with Micrometer and pushing metrics to Prometheus.

**Result** – The dashboard now displayed each service with its instance count and latency histogram. We reduced the average inference call latency from 35 ms to 18 ms by adjusting JVM GC settings after spotting a memory pressure spike in the Eureka logs. I learned that a clear, programmatic view of the registry state is essential for troubleshooting microservice health and performance in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
