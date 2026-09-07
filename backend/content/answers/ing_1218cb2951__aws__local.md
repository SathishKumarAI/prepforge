---
qid: ing_1218cb2951__aws__local
question: What do you monitor in production LLM serving, and what pages someone at
  3 a.m.?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 530
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:06:25-05:00'
sources: []
---

**Situation / Task**  
I was responsible for the on‑prem LLM inference layer that powers our recommendation engine (≈ 4 M requests/day). At 3 a.m., a silent spike in latency and error rate surfaced, threatening our SLA of < 200 ms 99.9 % of the time.

**Action**  
I followed *Customer Obsession* by immediately checking the **CloudWatch Dashboards** I built for the endpoint:  

| Metric | Threshold | Action |
|--------|-----------|--------|
| **Latency (p95)** | > 250 ms | Scale‑up GPU nodes |
| **Error Rate** | > 0.5 % | Route to fallback model |
| **GPU Utilization** | > 90 % | Spin up additional spot instances |
| **Token Throughput** | < 10k tokens/s | Investigate batch size bottleneck |
| **Hallucination Score** (custom metric) | > 0.3 | Trigger manual review |

I also queried the **SageMaker Endpoint logs** for anomalous prompt patterns and checked the **ECS task memory usage**. The spike was due to a sudden surge of long‑tail prompts causing GPU thrashing.

**Result**  
Within 15 minutes I auto‑scaled two GPU nodes (using Spot Instances, saving ~30 % on compute costs) and routed problematic requests to a lightweight fallback model. Latency dropped back below 200 ms, error rate returned to < 0.1 %, and we avoided any SLA breach—earning a “Customer Success” badge for the team.

**Reflection (Bar‑raiser focus)**  
*Ownership*: I owned the incident from detection to resolution.  
*Dive Deep*: I examined custom hallucination metrics and GPU telemetry, not just surface alerts.  
*Quantified Impact*: 30 % cost savings + 99.9 % SLA retention.  
*Learning*: Added a predictive scaling rule for long‑tail prompt patterns, reducing future incidents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
