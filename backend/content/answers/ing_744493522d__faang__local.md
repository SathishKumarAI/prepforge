---
qid: ing_744493522d__faang__local
question: 'Explain: Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 474
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:14:45-05:00'
sources: []
---

**Clarify**  
The interviewer asks how to design a machine‑learning system that can **scale** as data, model complexity, and request volume grow. Key assumptions: (1) real‑time inference is required; (2) batch training happens nightly; (3) the service must handle millions of predictions per second with sub‑100 ms latency.

**Approach**  
1. *Data layer*: sharded, time‑partitioned storage (e.g., BigQuery/Redshift).  
2. *Feature store*: cache pre‑computed features in a low‑latency KV store (Redis/Memcached) and refresh via streaming ETL.  
3. *Model serving*: containerized models behind a load balancer; autoscale based on CPU/RAM usage.  
4. *Batch training*: distributed Spark/TF jobs on Kubernetes, with model registry for versioning.  
5. *Monitoring & rollback*: continuous A/B tests, drift detection, and canary deployments.

**Depth**  
- **Throughput**: Horizontal scaling of inference nodes; use gRPC for efficient serialization.  
- **Latency**: Keep feature lookup < 10 ms; batch model loading into memory (e.g., TorchServe).  
- **Consistency**: Use eventual consistency in feature store; lock‑free reads.  
- **Cost**: Spot instances for training, on‑demand for serving.  
Complexity: \(O(\log N)\) for sharded key lookups, linear with model size for memory footprint.

**Edge Cases**  
- Feature drift → retrain pipeline triggers.  
- Sudden traffic spike → autoscaler lag → pre‑warm nodes.  
- Model failure → fallback to a baseline model. Tests: unit tests on feature extraction, load testing with Locust, chaos engineering for node failures.

**Optimize & Communicate**  
Explain trade‑offs between consistency and latency, justify containerization for reproducibility, and highlight observability pipelines (Prometheus/ELK). Conclude by summarizing the end‑to‑end flow: data ingestion → feature store → model serving → monitoring, stressing that each layer is independently scalable and fault‑tolerant.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
