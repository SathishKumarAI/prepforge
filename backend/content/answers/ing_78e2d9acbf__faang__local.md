---
qid: ing_78e2d9acbf__faang__local
question: 'Explain: On-site: system design — OpenAI System Design Interview (2026
  Guide) - Exponent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 699
total_tokens: 942
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:25:13-05:00'
sources: []
---

## 1️⃣ Clarify  
We’re asked to **design an on‑site system for OpenAI’s next‑generation model service** (e.g., GPT‑4‑X).  
Key assumptions to confirm:  

| Question | Why it matters |
|----------|----------------|
| Target traffic? | Determines compute, storage, and network scaling. |
| Latency requirement per request? | Drives cache placement & inference pipeline design. |
| Model size & update frequency? | Influences parameter server architecture vs. model‑parallelism. |
| Multi‑tenant use (public API + private customers)? | Affects isolation, billing, and data governance. |
| Security/DR constraints? | Guides encryption, compliance, and failover strategies. |

## 2️⃣ Approach  
1. **Front‑end API gateway** – rate‑limit & auth.  
2. **Routing layer** – selects compute node based on model version, region, load.  
3. **Inference cluster** – GPU/TPU pods with model‑parallel shards + parameter server cache.  
4. **Cache tier** – LRU for token embeddings and frequent prompts.  
5. **Storage** – Object store for training data; KV store for metadata & billing.  
6. **Observability** – distributed tracing, metrics, alerting.  

## 3️⃣ Depth (Core Design)  
- **Model Serving**: Use a *parameter‑sharded* approach with **NVIDIA Triton Inference Server**; each shard runs on a GPU pod and serves a segment of the weight matrix. Shards are replicated for fault tolerance.  
- **Cache**: Deploy an in‑memory, sharded LRU cache (e.g., Redis Cluster) to hold *prompt embeddings* and *common token logits*. This cuts inference time by ~30% on hot requests.  
- **Load Balancer**: Horizontal Pod Autoscaler + Istio Envoy for request routing; uses weighted round‑robin with real‑time health checks.  
- **Data Flow**: Requests → API Gateway → Router → Inference Node(s) → Cache ↔ Parameter Server → Response.  
- **Latency Target**: < 200 ms (average). Achieved by keeping token generation on GPU and minimizing CPU serialization.

## 4️⃣ Edge Cases  
- **Cold start**: Pre‑warm shards; cache misses hit a *fallback* single‑node inference for rare models.  
- **Model update rollouts**: Blue/green deployment with version tags to avoid downtime.  
- **Burst traffic**: Queue (Kafka) and autoscale compute nodes, but cap burst size to protect GPU resources.  

## 5️⃣ Optimize & Communicate  
- **Compute Efficiency**: Fuse token embeddings into a single kernel; use mixed precision (FP16/INT8).  
- **Cost**: Spot instances for non‑critical inference; reserved instances for baseline load.  
- **Narrative**: “We first isolate the API layer to enforce security, then route traffic to a sharded GPU cluster that keeps latency low while scaling linearly with request volume. The cache dramatically reduces repeated computation, and our observability stack ensures we meet SLAs.”  

*Word count: ~190*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
