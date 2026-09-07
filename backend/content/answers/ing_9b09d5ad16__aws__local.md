---
qid: ing_9b09d5ad16__aws__local
question: 'Explain: Prefill and decode disaggregation — Llm Gateway And Serving Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 469
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:15:37-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team that redesigned our on‑prem LLM serving stack to cut inference latency by 40 % while keeping cost under $200k/yr. The bottleneck was the *prefill* (embedding generation) and *decode* (token generation) stages, each running on different GPU nodes.

**Action**  
1. **Disaggregated Architecture** – I split prefill and decode into two stateless services:  
   - `PrefillService` (SageMaker Edge, spot‑GPU instances) pulls the prompt embeddings from S3, runs a lightweight transformer, and streams results to an in‑memory cache (ElastiCache).  
   - `DecodeService` (EKS with GPU nodes) consumes cached embeddings, performs beam‑search decoding, and returns tokens via API Gateway.  
2. **Auto‑Scaling & Cost Control** – Used CloudWatch metrics to trigger spot‑instance scaling for prefill and on‑demand for decode, achieving 30 % cost savings.  
3. **Observability** – Integrated X-Ray traces across services; latency dropped from 750 ms to 450 ms (Δ=35 %).

**Result**  
- *Customer Obsession*: End users saw 35 % faster responses, increasing session length by 12 %.  
- *Deliver Results*: Reduced yearly inference spend from $260k to $200k while scaling throughput from 500 to 1,200 requests/second.  
- *Ownership & Dive Deep*: I maintained end‑to‑end SLAs and iterated on the cache eviction policy after a decoding stall incident—now we log anomalies and auto‑restart the decode pod.

**Bar‑raiser Takeaway**  
Demonstrated ownership by owning both services, deep dive into latency traces, quantified impact (latency & cost), and learned from failure (stalled decode) to harden the system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
