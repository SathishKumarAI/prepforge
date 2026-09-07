---
qid: ing_ba917ade4f__aws__local
question: 'Explain: Walk me through rendering a streaming LLM response in the browser,
  from HTTP response to pixels.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 413
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:25:23-05:00'
sources: []
---

**Situation / Task**  
I was tasked with adding real‑time LLM responses to a web app that serves millions of users each day. The goal was to deliver low‑latency text streams while keeping costs below $0.02 per user session.

**Action (Technical)**  
1. **Server side** – I used an Amazon SageMaker endpoint for the model and wrapped it in an API Gateway HTTP/2 listener that pushes Server‑Sent Events (SSE).  
2. **Streaming logic** – The model returns tokens via a `multipart/x-mixed-replace` stream; each token is serialized as JSON (`{text:"..."}`) and flushed immediately.  
3. **Front‑end** – A lightweight React component opens an `EventSource`, appends incoming chunks to a virtual DOM, and renders them with `requestAnimationFrame`.  
4. **Scalability / Availability** – The endpoint runs on Spot Instances behind an Application Load Balancer (ALB) with Auto Scaling based on CPU usage; the SSE layer is backed by CloudFront for edge caching of static assets.  
5. **Cost control** – I added a token‑budget guard that stops streaming after 2,000 tokens or 10 s, keeping average spend at $0.012/user.

**Result**  
The feature launched two weeks ahead of schedule and reduced average latency from 1.8 s to 850 ms (a 53% improvement). Traffic rose by 35%, yet the per‑session cost stayed below budget, generating a net profit margin increase of 12%.  

**Learning / Ownership**  
I iterated on failure logs, discovered that SSE header misconfigurations caused intermittent “broken pipe” errors, and fixed them with a retry back‑off policy—an example of owning post‑launch problems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
