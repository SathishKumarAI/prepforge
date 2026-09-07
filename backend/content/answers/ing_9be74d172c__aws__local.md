---
qid: ing_9be74d172c__aws__local
question: What's on your dashboard for an LLM serving platform, and what do you alert
  on?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 460
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:17:26-05:00'
sources: []
---

**Answer (Amazon style)**  

*Leadership Principles:* **Ownership**, **Dive Deep**  
I treated the LLM‑serving stack like a customer‑facing product and owned every metric that could impact latency or cost.

| Metric on Dashboard | Why it matters | Alert threshold |
|---------------------|----------------|-----------------|
| **Avg. Latency (ms)** | Directly affects user experience; > 200 ms degrades satisfaction | ≥ 250 ms (3×σ) for 5 min |
| **Error Rate (%)** | Indicates model or infrastructure failure | > 1% over 10 min |
| **Throughput (inferences/min)** | Shows capacity utilization and billing impact | < 80 % of max after 30 min |
| **GPU/CPU Utilization (%)** | Helps spot under‑/over‑provisioning | GPU > 90 % or CPU > 95 % for >10 min |
| **Cost per inference ($)** | Keeps ROI in view | > $0.005 (twice baseline) |

*Technical design:*  
- **Model hosting** on **Amazon SageMaker Endpoint** with autoscaling and **Elastic Inference** to reduce GPU cost.  
- **Traffic routing** via **API Gateway + Lambda@Edge** for edge‑latency, feeding metrics into **CloudWatch Alarms**.  
- **Observability stack**: CloudWatch Logs → Log Insights queries (e.g., “count(*) where error=true”) and **X-Ray** traces to pinpoint request bottlenecks.

*Result:* After implementing this dashboard, I reduced average latency from 320 ms to 180 ms within two weeks, cut cost per inference by 30%, and eliminated a 5‑minute spike that previously caused a 2% error burst.  

*Bar‑raiser focus:* Ownership (owning the whole stack), Dive Deep (metrics + tracing), Quantified impact (latency & cost), Learning from failure (post‑mortem of the spike).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
