---
qid: ing_5581963047__faang__local
question: 'Explain: Latency budget (p95, the table interviewers want to see)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 406
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:02:42-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of what a *latency budget* is and why we track the 95th‑percentile (p95) value in an AI inference pipeline. I’ll assume we’re dealing with a production ML model that serves user requests, e.g., a recommendation engine or NLP inference service.

**Approach**  
1. Define latency budget as the maximum acceptable response time for most traffic.  
2. Explain p95: 95 % of requests must finish under this bound; the top 5 % can exceed it but should be rare.  
3. Show how to compute and monitor it in real time.

**Depth**  
- **Latency budget** = target SLA × safety margin (e.g., 200 ms * 1.2).  
- **p95 calculation**: sort all request latencies in a window, pick the value at index ⌊0.95 × N⌋.  
- Use Prometheus/Grafana or Cloud Monitoring with histogram metrics to capture latency buckets.  
- Trigger alerts if p95 > budget for >X minutes; roll back model version or scale resources.

**Edge Cases**  
- Bursty traffic: window size must be large enough (e.g., 5 min) but small enough to react quickly.  
- Cold starts in containers can spike latency; separate “warm” vs. “cold” buckets.  
- Skewed distributions—median may look fine while p95 is high.

**Optimize & Communicate**  
Mention trade‑offs: tighter budgets → higher cost (more replicas), looser budgets → degraded UX. Explain that monitoring p95 gives a realistic view of tail latency, critical for user satisfaction in AI services. Conclude with the importance of iterating on the budget as traffic patterns evolve.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
