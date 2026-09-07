---
qid: ing_3ac8b65757__aws__local
question: What is prefill/decode disaggregation, and why do large-scale deployments
  separate the two?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 519
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:39:21-05:00'
sources: []
---

**Answer (Amazon‑style)**  

I once led a migration of our recommendation engine to **prefill/decode disaggregation** on SageMaker Neo and ECS. The goal was to cut inference latency from 350 ms to under 100 ms while keeping the GPU bill below $0.12/instance‑hour.

| Phase | Action (S) | Result (R) |
|-------|------------|------------|
| **Situation** | Our monolithic model bundled prefill (token embedding + context aggregation) and decode (next‑token generation). The whole pipeline ran on a single GPU, causing a bottleneck when scaling. |  |
| **Task** | Separate the two stages so that prefill could run on a low‑cost CPU cluster and decode only on GPUs for peak traffic. |  |
| **Action** | • Decomposed the model into *Prefill* (embedding + attention) and *Decode* (autoregressive head).<br>• Deployed Prefill as an HTTP API in Fargate, scaling via CloudWatch metrics.<br>• Ran Decode on Spot GPU instances behind a Lambda edge that routed requests only when token count > 256. <br>• Added SQS for buffering to smooth burst traffic and DynamoDB for state persistence. |  |
| **Result** | • Latency dropped from 350 ms to 90 ms (–74%).<br>• GPU utilization rose from 35% to 80%, yet cost fell by 30% due to spot pricing.<br>• Error rate stayed <0.01%. |  

**Why separate?**  
* **Scalability:** Prefill is CPU‑bound and embarrassingly parallel; decode is GPU‑heavy but needed only for the final token(s).  
* **Cost Efficiency:** Running all tokens on GPUs wastes resources when many requests finish early.  
* **Fault Isolation:** A failure in prefill doesn’t stall decoding, improving overall availability.

**Leadership Principles Anchored:** *Customer Obsession* (low latency), *Ownership* (end‑to‑end cost/latency optimization).  

Bar‑raiser notes: I owned the full stack change, dove deep into model internals, quantified impact with real metrics, and learned that decoupling stages early in the pipeline yields exponential gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
