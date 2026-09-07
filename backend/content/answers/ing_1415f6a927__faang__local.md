---
qid: ing_1415f6a927__faang__local
question: 'Explain: Advantages : — System Design: What is Service Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 424
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:29:55-05:00'
sources: []
---

**Clarify**  
*Question*: “Explain the advantages of system design for machine learning and define *service discovery*.”  
Assumptions:  
1. The interview targets a senior ML/infra role.  
2. We should cover why a robust system‑design mindset matters in ML pipelines (scalability, reliability).  
3. Service discovery refers to how microservices locate each other at runtime.

**Approach**  
1. Briefly list key ML infra advantages that good design unlocks.  
2. Define service discovery and its role within that context.  

**Depth**  
- **Scalable data ingestion & model serving**: Decoupled components (data lake, feature store, inference API) allow horizontal scaling; a clear contract between services reduces friction.  
- **Fault isolation**: If the recommendation engine fails, other pipelines keep running.  
- **Observability & governance**: Centralized metrics and versioning of models prevent “model drift” in production.  
- **Continuous deployment**: Blue‑green or canary releases are safe when each service knows its peers.  

*Service discovery* is a dynamic registry that lets services find one another without hard‑coded endpoints. In an ML stack, the inference API registers itself with a discovery server (e.g., Consul, Eureka). A batch training job queries the registry to locate feature store replicas or parameter servers, ensuring load balancing and resilience.

**Edge Cases**  
- Service churn: rapid scaling can flood the registry; need TTLs.  
- Network partitions: fallback to static config if discovery fails.  

**Optimize & Communicate**  
Emphasize that a well‑designed discovery layer reduces operational overhead, speeds experimentation, and keeps ML workloads elastic—critical for FAANG‑scale systems where millions of requests hit inference endpoints daily. Conclude by tying it back: service discovery is the glue that turns modular design into a robust, self‑healing ML platform.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
