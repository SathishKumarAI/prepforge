---
qid: ing_c0082dcac8__aws__local
question: 'Explain: Case Study: Enterprise RAG System. — AI Daddy \u00b7 Learn AI
  System Design and Pass the AI Interview'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 491
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:38:05-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team that built an enterprise Retrieval‑Augmented Generation (RAG) platform for a Fortune 500 retailer. The goal was to reduce the time sales reps spent hunting policy documents from **8 h/month per rep** to under **30 min**, while keeping data freshness and regulatory compliance.

**Action**  
- *Ownership & Customer Obsession*: I mapped user pain points, defined success metrics (search latency < 200 ms, accuracy > 92 % F1), and set a 6‑month roadmap.  
- *Dive Deep & Technical Design*: Chose **Amazon Kendra** for semantic search on the policy corpus, paired with **OpenSearch** for full‑text fallback. For generation, I deployed a fine‑tuned **Amazon Bedrock (Claude 3)** model behind an API Gateway, throttling via DynamoDB request counters to enforce rate limits.  
- *Scalability & Availability*: Configured Kendra in multi‑AZ with automated scaling; used S3 EventBridge to trigger re‑indexing on policy updates. The generation layer runs on a Spot‑managed Fargate cluster (cost ≈ $0.05/hr) behind an Application Load Balancer for 99.95 % SLA.  
- *Bias for Action*: Rolled out in **phases**—first a pilot with 20 reps, then full rollout after A/B testing.

**Result**  
- Search latency dropped from 1.2 s to 0.15 s (×8).  
- Rep productivity increased by **62 %**, cutting policy‑lookup time from 8 h/month to 30 min (≈ 97 % reduction).  
- Annual cost savings of $180k (AWS bill) due to spot usage and reduced on‑prem infra.  

**Learning & Bar‑Raiser Insight**  
I learned that “ownership” means owning the end‑to‑end customer journey, not just the code. The bar‑raiser expects evidence of measurable impact, deep technical justification, and a clear reflection on what could have been done better—e.g., earlier integration of real‑time policy feeds to avoid stale docs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
