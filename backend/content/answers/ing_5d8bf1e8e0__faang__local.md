---
qid: ing_5d8bf1e8e0__faang__local
question: 'Explain: How it works: — System Design: What is Service Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 522
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:21:25-05:00'
sources: []
---

**1️⃣ Clarify**  
*Question*: “What is service discovery in a machine‑learning system?”  
We’ll assume an architecture with multiple micro‑services (data ingestion, model training, inference) that must locate each other at runtime without hard‑coded IPs.

**2️⃣ Approach**  
Explain the purpose → dynamic location of services. Then describe common patterns: *client‑side* vs *server‑side* discovery and typical tooling (Consul, Eureka, Kubernetes DNS). Finally touch on how it fits into ML pipelines (e.g., model registry ↔ inference API).

**3️⃣ Depth**  
- **Service Registry**: A key–value store where each instance registers its address/metadata.  
- **Health Checks**: Periodic liveness probes remove stale entries.  
- **Client‑Side Discovery**: The caller queries the registry, receives a list of healthy endpoints, and applies load balancing (round‑robin, weighted).  
- **Server‑Side Discovery**: A proxy or API gateway forwards requests after consulting the registry.  
- **Integration with ML**:  
  *Model Registry* (MLflow, SageMaker) registers model artifacts; inference services query the registry to fetch the latest version.  
  *Feature Store* and *Data Pipeline* services register endpoints for data ingestion/feature retrieval.

Complexity: O(1) lookup in a distributed hash table; latency added only by an extra DNS/HTTP call (~1–5 ms). Trade‑offs: tighter consistency vs. higher availability (eventual consistency is often acceptable).

**4️⃣ Edge Cases**  
- *Network partitions*: stale entries can cause failed requests—handled by health checks or retry logic.  
- *Rapid scaling*: many registrations/deregistrations may overload the registry; use sharding or rate‑limit.  
- *Version drift*: services may register different API versions; tag with semantic versioning.

**5️⃣ Optimize & Communicate**  
Future improvements: cache discovery results locally, use gRPC service‑mesh (Istio) for zero‑config routing, and embed observability (metrics, tracing). In an interview I’d narrate by first mapping the problem to a real ML pipeline, then walking through registry operations, highlighting why dynamic resolution is critical when models or data sources change on‑the‑fly. This showcases both architectural insight and practical trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
