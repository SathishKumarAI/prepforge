---
qid: ing_62bb64f464__faang__local
question: 'Explain: Design a serverless inference platform serving 100+ open models
  on a shared GPU fleet.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 561
total_tokens: 803
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:33:19-05:00'
sources: []
---

**Clarify**  
We need a cloud‑native, fully serverless system that can host **>100 distinct ML models** (e.g., vision, NLP) and route inference requests to a shared GPU fleet while maintaining isolation, low latency, and cost efficiency. Key assumptions:  
- Models are pre‑trained and packaged as ONNX/TensorFlow SavedModel.  
- Requests arrive via HTTP/REST or gRPC with JSON payloads.  
- SLA requires <200 ms per inference.  
- Budget constraints favour spot instances; no dedicated GPU servers.

**Approach**  
1. **API Gateway + Event Bus** – expose a single HTTPS endpoint that forwards to an event bus (e.g., Kafka, SQS).  
2. **Model Dispatcher Lambda** – on each request, lookup model metadata (GPU type, size) from DynamoDB and enqueue a job with the target GPU node ID.  
3. **GPU Worker Pods (K8s + Karpenter)** – autoscale GPU nodes in response to queue depth; each pod runs a lightweight inference server (TorchServe/TF Serving).  
4. **Container Image Registry** – store per‑model containers; use immutable tags for versioning.  
5. **Cache & Warm‑up** – keep hot models in memory on workers; evict based on LRU and request volume.  

**Depth**  
- *Latency*: API → Lambda (~10 ms) + broker ack (≈20 ms) + worker dispatch (≤50 ms).  
- *Throughput*: Each GPU pod handles ~2000 RPS; autoscaling keeps utilization ≈70 %.  
- *Cost*: Spot instances + serverless compute (Lambda, API GW) reduce idle capacity.  
- *Security*: VPC‑endpoint for S3/DB, IAM roles per model.

**Edge Cases**  
- Sudden burst: queue back‑pressure triggers Karpenter to spin up new GPU nodes; fallback to CPU inference if GPU unavailable.  
- Model update race: use optimistic locking on metadata; rollbacks via container registry tags.  
- Faulty inference: retry policy with exponential backoff; circuit breaker per model.

**Optimize & Communicate**  
We can further reduce cold‑start latency by pre‑warming a pool of “idle” GPU workers during low load periods. Profiling reveals that the dispatcher Lambda is CPU bound; moving it to an Fargate task improves scalability under high request rates. I’ll present these trade‑offs on a whiteboard, highlighting how cost scales with spot‑price volatility and how SLA compliance is monitored via CloudWatch dashboards.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
