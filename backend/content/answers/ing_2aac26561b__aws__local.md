---
qid: ing_2aac26561b__aws__local
question: 'Q: Your LLM bill doubled month over month with flat traffic. How do you
  find and fix it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 382
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:01:48-05:00'
sources: []
---

**Situation & Task**  
While managing an on‑prem LLM inference service, my cost bill surged from $120K to $240K / month despite traffic staying flat at ~10M requests/day. I needed to pinpoint the cause and bring costs back under control.

**Action**  
1. **Dive Deep into Billing** – enabled *AWS Cost Explorer* + *AWS Budgets* to break down spend by service, region, and instance type.  
2. **Instrument Runtime Metrics** – added CloudWatch custom metrics (`model_latency`, `cpu_utilization`, `memory_usage`) and enabled *X-Ray* tracing for each inference request.  
3. **Analyze Workload Patterns** – discovered that a newly introduced “high‑accuracy” mode was automatically scaling to 96 vCPU instances during peak hours, even though traffic had not increased.  
4. **Implement Cost Controls** –  
   - Replaced on‑demand 96 vCPU nodes with spot fleets (average 40% savings).  
   - Added an Auto Scaling policy tied to `model_latency` thresholds instead of raw request count.  
   - Enabled *AWS Savings Plans* for the 24/7 inference tier.

**Result**  
- Cost dropped from $240K to **$135K/month** (44 % reduction) within two weeks.  
- Latency stayed <200 ms, SLA maintained.  
- Learned that “feature‑driven” scaling without traffic correlation can double spend; future releases will include a *cost impact review* in the PR process.

> **Leadership Principles:** *Customer Obsession* (ensuring low latency), *Dive Deep*, and *Bias for Action*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
