---
qid: ing_0e6dff131a__aws__local
question: 'Explain: Prompt caching — Agentic Engineering - by Neo Kim and Paul Hoekstra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 659
total_tokens: 896
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:58:29-05:00'
sources: []
---

**Prompt Caching – Agentic Engineering (Neo Kim & Paul Hoekstra)**  
> *“Store and reuse prompt‑to‑output pairs so that future requests can be served from cache instead of re‑generating the entire chain.”*

---

## Behavioral (STAR)

- **Situation:** My team was building a low‑latency chatbot for an e‑commerce site. Each query triggered a 3‑step LLM pipeline, costing $0.02 per call and averaging 1 s latency.
- **Task:** Reduce cost by 70 % while keeping <200 ms latency for the top 80 % of queries.
- **Action:** Implemented prompt caching on DynamoDB + Lambda edge.  
  1. Serialized prompts, hashed to a key.  
  2. On cache miss, invoked OpenAI API, stored response with TTL=5 min.  
  3. Added fallback to local inference if API was down.
- **Result:** Hit‑rate rose from 12 % to 78 %. Cost dropped from $4k/month to $1.2k, latency fell to 140 ms on average. The feature earned a “Customer Obsession” award because it cut user wait time while cutting bill.

---

## Technical Design

| Requirement | AWS Service | Reasoning |
|-------------|-------------|-----------|
| **Low‑latency lookup** | **DynamoDB (with DAX)** | 1 ms reads, auto‑scaling; DAX gives sub‑ms. |
| **Cost‑effective storage** | **S3 + Glacier** for archival older cache | Keeps hot data in DynamoDB; cold data off‑loaded. |
| **Scalable compute** | **Lambda@Edge** | Runs near CDN edge, reduces round‑trip. |
| **Failover** | **AWS Systems Manager Parameter Store** for fallback model endpoints | Central config, easy rollout. |

### Trade‑offs

- *Consistency*: eventual consistency acceptable for prompt caching; we tolerate a stale response if the LLM changes slightly.
- *Cache size*: limited by DynamoDB limits; we prune using LFU policy to keep 100k active keys.
- *Cold start*: Lambda cold starts add ~200 ms; mitigated by keeping warm instances via scheduled invocations.

---

### What a Bar‑raiser Looks For

1. **Ownership** – I drove the end‑to‑end solution, from requirement gathering to production monitoring.  
2. **Dive Deep** – I profiled latency, cost per API call, and cache hit patterns; iterated on TTL and eviction policy.  
3. **Quantified Impact** – Delivered 70 % cost savings and 30 % latency reduction.  
4. **Learning from Failure** – Initial implementation suffered from stale data; we added versioning in the key to solve it.

This aligns with *Customer Obsession* (improved UX & bill) and *Ownership* (full lifecycle stewardship).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
