---
qid: ing_d67de371b7__faang__local
question: 'Explain: Design the serving stack for a ChatGPT-scale consumer assistant:
  hundreds of millions of weekly users, streaming chat, multiple model tiers.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 565
total_tokens: 815
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:58:09-05:00'
sources: []
---

**Clarify**  
We need a low‑latency, highly available serving architecture that can handle *hundreds of millions* of weekly active users generating continuous, token‑by‑token chat streams from several model tiers (e.g., small, medium, large). Key assumptions:  

- Each user may have concurrent sessions; traffic is bursty.  
- Models are pre‑trained and served via inference APIs; we can scale compute up/down.  
- Latency budget < 200 ms for the first token, < 500 ms overall for a short reply.  

**Approach**  
1. **API gateway + auth** → route requests to regional front‑ends.  
2. **Token‑streaming edge workers** (e.g., gRPC or WebSocket) that buffer and forward tokens to the *model dispatcher*.  
3. **Model dispatcher**: a load‑balancer aware of model tier, GPU pool, and user quota.  
4. **Inference layer**: containerized model instances on GPU servers; autoscale via pod metrics (GPU utilisation, queue depth).  
5. **Cache & pre‑fetching**: store recent prompts/embeddings in Redis for quick warm starts.  
6. **Observability stack**: distributed tracing, per‑token latency dashboards, anomaly alerts.  

**Depth**  
- Use *gRPC* with HTTP/2 multiplexing to keep a single connection open per session, reducing handshake overhead.  
- Dispatch tokens via *SQS/Kafka* topics tagged by model tier; workers poll and batch requests for GPU inference (batched decoding).  
- For streaming, send partial logits back as soon as they’re ready; use *client‑side flow control* to avoid buffer overrun.  
- Autoscaling: trigger on GPU utilisation > 70% or queue length > 1000 tokens.  
- Complexity: O(1) per request routing, but inference latency dominated by model size (≈ O(N)).  

**Edge Cases**  
- Sudden traffic spikes (“flash crowds”) → pre‑warm a pool of idle GPUs.  
- Model drift / failures → fallback to lower tier or cached response.  
- Network partitions → local edge caching for last‑known state.  

**Optimize & Communicate**  
We can reduce tail latency by *predictive batching* (group similar prompts) and *model quantisation*. I’d explain the trade‑off: higher compression → faster inference but slight quality loss, acceptable for lower tiers. Finally, I’d present a diagram in the interview to illustrate data flow and highlight how each component meets scalability, reliability, and latency goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
