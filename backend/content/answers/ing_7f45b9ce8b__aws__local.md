---
qid: ing_7f45b9ce8b__aws__local
question: 'Explain: Noisy Neighbor Prevention — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 442
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:12:58-05:00'
sources: []
---

**Noisy‑Neighbor Prevention – Production RAG at Scale**

*Situation*: In a multi‑tenant ML inference platform (100+ models per day), one model’s CPU spikes caused 30 % of the cluster to hit 95 % utilization, raising RAG status and SLA breaches.  
*Task*: Design an automated “noisy neighbor” guard that keeps every tenant below 80 % CPU without hurting overall throughput.  
*Action*:  
1. **Metric collection** – instrument each container with CloudWatch Agent; push per‑model CPU/latency to a Kinesis Data Stream.  
2. **Real‑time analysis** – Lambda (Python) aggregates metrics in 30‑s windows, calculates a “CPU‑to‑Latency” ratio. If the ratio exceeds a threshold (derived from historical A/B tests), it tags the model as *noisy*.  
3. **Dynamic throttling** – using ECS Service Auto Scaling with target tracking on CPU utilization; for noisy models, the task count is reduced by 50 % and an App Mesh virtual node routes requests to a “slow‑path” replica (scaled down to 1 vCPU).  
4. **Feedback loop** – alerts sent to SNS → Slack; metrics stored in DynamoDB for audit.  

*Result*: CPU utilization dropped from 95 % to 78 % cluster‑wide, SLA uptime improved from 92 % to 99.5 %, and inference latency increased by only 12 %. Cost impact was < 3 % due to reduced over‑provisioning.

**Leadership Principles**:  
- **Customer Obsession** – ensured uninterrupted service for all tenants.  
- **Ownership & Dive Deep** – I own the end‑to‑end pipeline and dug into metric correlations to set thresholds.  

*Bar‑raiser note*: Look for ownership, data‑driven decisions, quick iteration (Lambda), and learning from the initial SLA dip.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
