---
qid: ing_7b15f54898__faang__local
question: How Does the User Receive the Response? — ChatGPT System Design - by Neo
  Kim and Hayk
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 466
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:30:28-05:00'
sources: []
---

**Clarify**  
We’re designing a *ChatGPT‑style* system: a user sends a prompt, the backend generates text, and that text is returned to the UI. Key assumptions:  
1. Requests come over HTTP/HTTPS.  
2. The model runs in a containerized service (e.g., GPU pod).  
3. Latency < 500 ms for interactive chat; batch responses can be longer.

**Approach**  
1. **Client → API Gateway** – receive the prompt, validate auth, route to request queue.  
2. **Request Queue / Load Balancer** – distribute work across inference workers.  
3. **Inference Worker** – load model, stream tokens via a generator.  
4. **Response Delivery** – send tokens back over HTTP/WS using Server‑Sent Events (SSE) or WebSocket so the UI can display them incrementally.

**Depth**  
- *API Gateway*: uses rate limiting and JWT validation.  
- *Inference*: each worker pulls from a Kafka topic; model inference is batched by token sequence to maximize GPU utilization.  
- *Streaming*: SSE headers (`Content-Type: text/event-stream`) or WS frames; each frame contains a JSON `{token, confidence}`.  
- *Client*: renders tokens as they arrive, buffering a few for smoothness.  
- *Error handling*: retry on transient failures, fallback to cached reply if timeout > 2 s.

**Edge Cases**  
- Long prompts → queue overflow → back‑pressure signals to client.  
- Model crash → health checks trigger failover; client shows “service unavailable”.  
- Network partition → WebSocket disconnect → reconnection logic with exponential backoff.

**Optimize & Communicate**  
- Cache frequent prompts (e.g., FAQ) in Redis to skip inference.  
- Use quantized models for lower latency where acceptable.  
- Monitor token‑per‑second metrics; auto‑scale workers based on queue depth.  

By breaking the flow into clear layers—gateway, queue, worker, stream—we keep responsibilities isolated, simplify debugging, and provide a responsive user experience that scales horizontally.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
