---
qid: ing_2ca71a6e87__aws__local
question: 'Explain: APIs Are Boundaries — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 469
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:05:50-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession* – APIs are the customer’s contract with our system; *Dive Deep* – we must understand every layer of the interface and its impact on scalability.

### Situation  
At my last role I led a team that exposed an internal ML inference service to external partners. The existing REST endpoint was slow, poorly documented, and caused outages when partner traffic spiked.

### Task  
Redesign the API so it could handle 10 × more concurrent requests, provide clear versioning, and expose real‑time model health without exposing our internal infrastructure.

### Action  
1. **Define a strict contract** – a JSON schema for inputs/outputs plus OpenAPI spec.  
2. **Gateway & throttling** – put an API Gateway in front with per‑client rate limits; enable caching of common inference results (Redis via ElastiCache).  
3. **Versioning strategy** – `v1`, `v2` paths, immutable “deprecation” policy, and automated rollback scripts.  
4. **Observability** – CloudWatch metrics for latency/throughput + X-Ray traces per request; alarms on error rates >5 %.  
5. **Scalable backend** – Lambda@Edge for lightweight inference, backed by an autoscaling SageMaker endpoint for heavy models.

### Result  
- 95 % reduction in latency (from 350 ms to 18 ms).  
- Throughput increased from 200 req/s to 2 500 req/s with zero downtime.  
- Partner satisfaction score rose from 3.8/5 to 4.7/5.

### What a bar‑raiser looks for  
- **Ownership**: I drove the redesign end‑to‑end and set clear SLAs.  
- **Dive Deep**: Detailed metrics, tracing, and cost analysis (AWS Lambda vs SageMaker).  
- **Quantified Impact**: Concrete latency & throughput gains plus customer score.  
- **Learning from Failure**: Early failure tests revealed caching gaps; we iterated to add a warm‑up strategy before launch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
