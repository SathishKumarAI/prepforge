---
qid: ing_d894ee5998__aws__local
question: 'Q49: How do you optimize latency for real-time LLM applications?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 461
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:29:05-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led the migration of a 200‑user chatbot that relied on an LLM to run in real time for customer support. The SLA demanded <150 ms latency per response; our initial end‑to‑end round trip was 850 ms, causing churn and negative CSAT scores.

**Action**  
1. **Edge inference with SageMaker Edge Manager** – I containerized the model (quantized to int8) and deployed it on AWS IoT Greengrass nodes located in the same region as our customer base, cutting WAN hops by ~70 %.  
2. **Cache & batching via API Gateway + Lambda@Edge** – Frequently used prompts were cached in DynamoDB with TTL 5 min; infrequent ones triggered a batched inference request (batch size 8) to SageMaker Runtime, reducing GPU utilization cost by 40 %.  
3. **Performance monitoring** – I added CloudWatch metrics and X-Ray tracing to isolate latency contributors; this revealed that the main bottleneck was the model warm‑up time.

**Result**  
- Latency dropped from 850 ms to **120 ms average** (95th percentile <200 ms).  
- Cost per inference fell by **35 %** due to reduced GPU usage and efficient caching.  
- CSAT improved from 78 % to **92 %**, and churn decreased by 18 %.

**Learnings**  
I documented the failure modes of cold starts and built an automated “warm‑up” routine that keeps a subset of nodes pre‑loaded, ensuring consistent performance during traffic spikes.

> *Bar‑raiser cues:* Ownership over both engineering and business outcomes; deep dive into latency sources; quantifiable impact on cost & customer satisfaction; proactive learning from failure to build resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
