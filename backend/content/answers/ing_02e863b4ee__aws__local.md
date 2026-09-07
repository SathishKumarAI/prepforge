---
qid: ing_02e863b4ee__aws__local
question: 'Explain: Functional — Realtime Voice Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 451
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:30:53-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the launch of a **real‑time voice assistant** for a telecom client that needed to answer 30 k calls per day with < 200 ms latency and 99.9% uptime. The goal was to replace a legacy IVR, cut operating costs by 40%, and improve NPS from 68 to > 80.

**Action (Design)**  
1. **Speech‑to‑Text & Text‑to‑Speech** – Amazon Transcribe Streaming & Polly in *Edge* regions for sub‑200 ms turn‑around.  
2. **Intent Routing** – Lex v3 with a custom intent model, backed by DynamoDB Streams to auto‑update FAQs.  
3. **Orchestration** – AWS Lambda (Python 3.9) invoked via Amazon Connect Contact Flow; state persisted in ElastiCache Redis for session continuity.  
4. **Observability** – CloudWatch Metrics + X-Ray tracing, integrated with an OpsGenie alert for SLA breaches.  

**Result**  
- Latency dropped to **145 ms avg** (vs 600 ms legacy).  
- Call abandonment fell from 12% to 3%.  
- Cost per call decreased by **$0.15**, yielding a $1.2M annual saving.  
- NPS rose to **82** in six months.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Built with real‑time feedback loops and continuous A/B testing.  
- **Ownership** – Took full responsibility for end‑to‑end monitoring, incident response, and iterative improvement.  

**Bar‑raiser Takeaways**  
- Demonstrated *deep dive* into latency bottlenecks (profiling Lambda, network edge).  
- Quantified impact with concrete metrics.  
- Learned from a mid‑deployment outage by adding a fallback queue in SQS, turning failure into a permanent resilience feature.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
