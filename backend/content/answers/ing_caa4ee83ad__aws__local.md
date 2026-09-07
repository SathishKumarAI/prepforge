---
qid: ing_caa4ee83ad__aws__local
question: 'Explain: The Memory Hierarchy — Agent Memory And State'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 447
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:59:22-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional team that built an AI‑powered customer support agent, we discovered that the bot’s “memory” (past interactions and contextual state) was growing linearly with user base—causing latency spikes and exceeding our $0.03/GB DynamoDB budget.

**Action**  
I re‑architected the memory hierarchy using **AWS Step Functions + Lambda** for transient in‑session context, **Amazon RDS Aurora Serverless** for short‑term state, and **S3 Glacier Deep Archive** for long‑term episodic logs.  
*Key design choices:*  
- *State size*: capped at 256 KB per session; larger history archived automatically.  
- *Consistency*: DynamoDB Global Tables ensured multi‑region read/write with <1 ms latency.  
- *Cost control*: Aurora’s pay‑per‑second billing kept idle time free; S3 lifecycle policies moved data to Glacier after 30 days.

**Result**  
Latency dropped from **350 ms → 80 ms** (average), and the cost of memory storage fell by **45 %**, saving $12K/month. User satisfaction scores rose 8 points (Net Promoter Score).  

**Learning & Bar‑raiser cues**  
- *Ownership*: I owned the end‑to‑end redesign, from requirement gathering to deployment.  
- *Dive Deep*: I profiled every layer—Lambda memory usage, Aurora read/write patterns—to pinpoint bottlenecks.  
- *Quantified Impact*: Clear metrics (latency, cost, NPS) demonstrated success.  
- *Iterative Improvement*: Post‑deployment A/B tests informed further pruning of state size.  

**Leadership Principles Highlighted**: **Ownership**, **Dive Deep**, **Customer Obsession**, and **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
