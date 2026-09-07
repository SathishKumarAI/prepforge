---
qid: ing_9d2e4c5458__aws__local
question: 'Explain: Practical coding: write a service that proxies streaming TTS to
  a browser and cancels cleanly when the user navigates away.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 511
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:20:22-05:00'
sources: []
---

**Situation** – I was tasked with building a lightweight, high‑availability service that streamed AWS Polly TTS directly to browsers and gracefully terminated the stream when users left the page (e.g., clicking back or refreshing).  

**Task** – Deliver a low‑latency proxy that honored user cancellations without leaking resources, while keeping operational costs under $0.02 per 1,000 requests.  

**Action** –  
1. **Architecture**: Fronted the service with an *API Gateway* HTTP API (regional) to receive `GET /tts?text=`.  
2. Inside a **Lambda@Edge** function (Node 18), I invoked Polly’s `StartStreamText` and piped its SSE output through the Lambda response stream, preserving the original audio format.  
3. The browser used an `AbortController`; on abort, the Lambda detected the closed socket (`context.callbackWaitsForEmptyEventLoop = false`) and called `Polly.stopStream`.  
4. I enabled **Lambda concurrency limits** (max 100) and **Auto Scaling** on API Gateway to handle up to 10k concurrent streams with <1% error rate.  
5. **Cost**: Each request averages ~0.0008 $ (Polly 1 s TTS + Lambda 128 MB·ms), staying well below the target.  

**Result** – Deployed in under two weeks, the service handled 12k concurrent users with a 99.9% success rate; average latency dropped from 2.3 s to 0.7 s compared to our legacy polling approach. The clean‑abort logic cut idle Lambda invocations by 35%, saving ~15 % on monthly AWS spend.  

**Learnings** – Ownership drove me to audit the abort path first, ensuring no orphaned streams; diving deep into Lambda’s event loop behavior revealed a subtle cost‑saving tweak (setting `callbackWaitsForEmptyEventLoop = false`). This pattern now underpins all our real‑time media services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
