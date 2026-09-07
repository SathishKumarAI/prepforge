---
qid: ing_d90404079b__faang__local
question: 'Explain: Versioning — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 634
total_tokens: 869
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:03:55-05:00'
sources: []
---

**Clarify**

We’re asked how to implement *model versioning* in a client‑server ML system: clients request predictions, the server must serve the correct model version (e.g., A/B test, rollback).  
Assumptions to confirm:  
- Clients don’t know model internals; they send data + desired version.  
- Multiple models can be live concurrently.  
- Models are large binary artifacts that need efficient storage & hot‑reload.

**Approach**

1. **Metadata Service** – a lightweight API that maps `(client_id, request_type)` → `model_version`.  
2. **Model Registry** – persistent store (e.g., PostgreSQL + S3) holding model metadata and artifact URIs.  
3. **Serving Layer** – a pool of inference workers; each worker loads a specific version into memory. Workers are tagged with their version.  
4. **Routing** – request arrives → metadata service resolves to a worker, load‑balance among replicas.  
5. **Version Lifecycle** – publish → activate → deprecate → delete (with TTL). Use feature flags for gradual rollout.

**Depth**

- *Metadata Service* uses caching (Redis) for O(1) lookups; fallbacks to DB if cache miss.  
- *Serving Workers* use model loading frameworks (e.g., TensorFlow Serving, TorchServe) that support hot‑reload; each worker runs in a Docker container tagged with version.  
- *Routing* leverages a service mesh (Istio/Envoy) to direct traffic based on request header `X-Model-Version`.  
- *Versioning Strategy*: Semantic tags (`v1.2.3`) + hash of artifact for immutability.  
- Complexity: Routing is O(1); loading new version is O(size). Memory overhead scales with number of concurrent versions.

**Edge Cases**

- **Stale Cache** → stale routing; mitigate with TTL and cache invalidation hooks on registry updates.  
- **Model Size > RAM** → spill to disk or use model sharding; test memory limits.  
- **Version Drift** → clients request non‑existent version; return 404 or fallback to default.  
- **Rollback** → ensure rollback path is fast: keep previous worker alive until no traffic.

**Optimize & Communicate**

Improvements:  
- Use *model version pinning* in client configs to avoid accidental upgrades.  
- Adopt *canary releases* by serving a small percentage of traffic to new version, monitoring latency/metrics before full rollout.  
- For large models, integrate *ONNX Runtime* or *TensorRT* for faster inference and smaller footprints.

When explaining: start with the problem statement, outline components, dive into key design choices (caching, routing), then address edge cases and potential optimizations. This demonstrates clear reasoning, technical depth, and awareness of production constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
