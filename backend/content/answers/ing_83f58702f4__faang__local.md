---
qid: ing_83f58702f4__faang__local
question: 'Explain: API Contracts — How to Prepare for System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 495
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:51:38-05:00'
sources: []
---

**Clarify**  
The interviewer asks how to prepare for a *system‑design* interview that focuses on **API contracts** in ML pipelines (e.g., data ingestion → feature store → model serving). Clarify the scope: are we designing end‑to‑end APIs, or just contract specs? Confirm assumptions about load, latency, versioning, and compliance needs.

**Approach**  
1. Map the workflow stages (raw data → preprocessing → feature extraction → model inference → post‑processing).  
2. Identify *boundary* services: each stage should expose a clean REST/GRPC contract with input/output schemas.  
3. Define versioning strategy (`v1`, `v2`) and deprecation policy.  
4. Draft **contract documents** (OpenAPI/Protobuf) that capture:  
   - Endpoints, HTTP methods, payload types.  
   - Required headers (auth, trace‑ids).  
   - Error codes & retry logic.  
5. Review security (OAuth/JWT), rate limits, and observability hooks.

**Depth**  
- Use **OpenAPI 3.0** for REST or **gRPC+Protobuf** for low‑latency inference.  
- Employ *schema validation* (JSON Schema/Protobuf) to enforce data integrity.  
- Leverage *contract testing* frameworks (e.g., Pact, Dredd) to catch mismatches early.  
- For ML, add *metadata tags* (feature names, version, source) in the contract to support feature store lineage.  
- Complexity: O(1) per request for validation; overall system scales with stateless microservices.

**Edge Cases**  
- Schema evolution (backward compatibility).  
- Missing optional fields or nulls.  
- High‑volume bursts—ensure idempotent endpoints.  
- Cross‑service timeouts and circuit breakers.

**Optimize & Communicate**  
Iterate contracts in a *design‑by‑contract* loop: prototype, run integration tests, gather metrics, then refine. Explain trade‑offs (REST vs gRPC latency, strictness vs flexibility). Conclude by stressing that clear API contracts reduce friction for downstream ML teams and enable automated CI/CD pipelines—exactly what FAANG interviewers look for in a well‑structured system design answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
