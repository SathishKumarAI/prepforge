---
qid: ing_a348e95254__aws__local
question: 'Explain: Cloud, self-hosted, or hybrid. — AI Agent Testing and Evaluation
  | LangWatch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 497
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:34:25-05:00'
sources: []
---

**Situation & Task**  
At my previous company we launched a new AI‑agent platform that required rigorous testing and continuous evaluation. The core decision was whether to run the test harness on the public cloud, keep it self‑hosted, or adopt a hybrid approach.

**Action (Design)**  
I scoped the requirements:  
- **Scale:** 10 k concurrent test runs per day.  
- **Latency:** ≤ 200 ms for evaluation metrics.  
- **Compliance:** Sensitive data must stay on‑premises.  

I proposed a *hybrid* architecture:

| Layer | AWS Service | On‑Prem Equivalent | Reasoning |
|-------|-------------|-------------------|-----------|
| Ingestion & orchestration | **Amazon EventBridge + Step Functions** | Airflow | Serverless event‑driven scaling, low ops cost. |
| Compute for inference | **AWS Lambda (GPU‑enabled) / EC2 Spot** | Local GPU servers | Auto‑scales with load; spot reduces cost by 70 %. |
| Data storage & analytics | **Amazon S3 + Athena** | NAS + Presto | Cost‑effective, schema‑on‑read for quick reporting. |
| Sensitive data pipeline | **AWS PrivateLink + VPN** | Dedicated LAN | Zero‑trust network boundary. |

The hybrid model let us keep regulated data on‑prem while leveraging cloud elasticity for burst testing.

**Result (Data‑driven)**  
- Reduced test cycle time from 12 hrs to **4 hrs** (≈ 67 % faster).  
- Cut infrastructure cost by **$45k/month** (spot + serverless).  
- Achieved 99.9 % availability during peak load.

**Bar‑raiser takeaways**  
- **Ownership:** I owned the end‑to‑end decision, balancing risk vs. benefit.  
- **Dive Deep:** Quantified trade‑offs with real cost & latency numbers.  
- **Learned from failure:** Early attempts using only cloud caused data leakage; we pivoted to hybrid after a security audit.  

**Leadership Principles highlighted**: *Customer Obsession* (fast, reliable testing for product teams) and *Ownership* (end‑to‑end solution).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
