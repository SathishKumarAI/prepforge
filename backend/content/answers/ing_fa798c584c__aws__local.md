---
qid: ing_fa798c584c__aws__local
question: 'Explain: Cost Analysis (Dec 2025) — Content Moderation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 450
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:44:43-05:00'
sources: []
---

**Situation & Task**  
In Dec 2025 I led a cross‑functional team at an AI‑driven media platform to cut the monthly content‑moderation spend from **$1.2 M** to under **$600 k** while keeping detection accuracy ≥ 97%. The goal was to align with our *Customer Obsession* and *Deliver Results* principles.

**Action (Dive Deep + Ownership)**  
- **Audit & Data‑driven Baseline:** Collected 4 M flagged items, identified that 65 % of moderation cost came from manual reviews on low‑confidence detections.  
- **Model Re‑training:** Fine‑tuned a transformer on our own labeled corpus (≈ 500 k samples) and introduced a two‑stage cascade: an inexpensive *Content Filter* (AWS SageMaker Linear Learner) followed by a high‑accuracy *Deep Classifier* (SageMaker PyTorch).  
- **Infrastructure Shift:** Migrated from on‑prem GPU clusters to **Amazon SageMaker Endpoint** with spot instances, auto‑scaling, and caching via **ElastiCache for Redis**.  
- **Automation Pipeline:** Implemented a serverless workflow (Step Functions + Lambda) that automatically escalates only items with confidence < 0.7.

**Result**  
- Cost dropped 50 % to **$600 k** per month.  
- Moderation latency improved from 12 s to 3 s, and false‑positive rate fell from 8 % to 4 %.  
- Team size reduced by 30 %, freeing resources for product innovation.

**Learning & Bar‑Raiser Insight**  
The bar‑raiser noted my *ownership* of the entire value chain, *deep dive* into model errors, and quantifiable impact on both cost and user experience. I also documented lessons from an initial mis‑calibrated threshold that caused a 12 % spike in manual reviews—leading to stricter validation before deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
