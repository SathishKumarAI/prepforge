---
qid: ing_9cabe1e76f__aws__local
question: 'Explain: Encoder-Only (BERT-style) — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 460
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:19:13-05:00'
sources: []
---

**Situation & Task**  
At my previous company I led a team that had to build an in‑house recommendation engine for our e‑commerce platform. We needed a lightweight, low‑latency text encoder that could process millions of product descriptions per day while staying under $0.10/1 M requests on AWS.

**Action**  
I chose an **encoder‑only (BERT‑style) architecture** because it delivers strong contextual embeddings without the heavy decoder cost.  
* Design:*  
- **Pre‑train** a DistilBERT model on our internal corpus using **AWS SageMaker** training jobs, leveraging Spot Instances to cut GPU costs by 60%.  
- **Fine‑tune** on labeled “purchase intent” pairs with **Amazon Comprehend Custom Classification** for quick iteration.  
- Deploy the frozen encoder as a **Lambda Layer** behind an **API Gateway**; each request loads the layer into memory once, achieving ~2 ms inference latency.  
- For scaling, we use **ECS Fargate Spot** pods with auto‑scaling based on CPU usage, keeping 99.9% availability and <10 s cold start time.

**Result**  
The new encoder boosted recommendation relevance by **18% (CTR)** while cutting inference cost from $0.25 to **$0.07 per 1 M requests**, saving ~$120k annually.  

---

### Leadership Principles Anchored
- **Customer Obsession** – higher CTR directly improved shopper experience.  
- **Ownership** – I drove the end‑to‑end pipeline, from data prep to cost‑optimization.

**Bar‑raiser takeaways:**  
- Demonstrated *ownership* by reducing costs and improving metrics.  
- Showed *dive deep* through concrete AWS service choices and trade‑offs.  
- Quantified impact (18% CTR lift, $120k savings).  
- Learned from an initial over‑parameterized model that caused latency spikes; pivoted to DistilBERT after profiling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
