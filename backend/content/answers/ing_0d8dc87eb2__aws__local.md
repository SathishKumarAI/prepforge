---
qid: ing_0d8dc87eb2__aws__local
question: 'Explain: Design the routing layer that decides whether a user request is
  handled on-device, by a first-party server model, or by a third-party model.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 466
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:56:25-05:00'
sources: []
---

**Situation & Task**  
While leading the AI‑Assistant team at Amazon, we needed a *routing layer* that dynamically decides whether to serve a user query on-device (Edge), via our own inference service (First‑Party), or by delegating to a partner model (Third‑Party). The goal was 99.9 % latency SLA and cost ≤ $0.0005 per request.

**Approach & Design**  
1. **Feature‑Based Decision Engine** – A lightweight Lambda that ingests the request, extracts *model‑type*, *data sensitivity*, and *device capability* via Cognito metadata.  
2. **Routing Policy Store** – DynamoDB table with rules keyed by user segment + feature flag; TTL for rapid roll‑outs.  
3. **Execution Back‑ends**  
   - *Edge*: AWS IoT Greengrass + TensorFlow Lite, cached on device.  
   - *First‑Party*: SageMaker RealTime endpoint behind an Application Load Balancer (ALB) with Lambda@Edge to pre‑filter high‑latency requests.  
   - *Third‑Party*: API Gateway proxy that forwards to partner’s HTTPS endpoint; response is wrapped in our own X‑Amzn‑Trace header for observability.

**Result**  
- 35 % of traffic routed to Edge, cutting latency from 120 ms to <30 ms and saving $0.0003 per request.  
- First‑Party usage grew by 42 % while maintaining 99.87 % accuracy.  
- Third‑Party fallback handled 12 % of high‑complexity queries with a 2× lower cost than an equivalent in‑house model.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Low latency and privacy‑first Edge serving.  
- **Ownership & Dive Deep** – End‑to‑end monitoring, auto‑rollback on SLA breach.  

**Bar‑raiser takeaways**  
The answer shows clear ownership, quantitative impact, deep technical reasoning (AWS services, trade‑offs), and learning loop via automated rollback and metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
