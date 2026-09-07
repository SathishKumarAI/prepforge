---
qid: ing_038a33265e__aws__local
question: 'Explain: Pattern 1: Unified Embedding Space — Multimodal Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 404
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:32:25-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
In my last role I led a project to build an AI‑powered search engine for our e‑commerce platform. The goal was to surface relevant products across text, image, and video queries while keeping latency < 200 ms at peak traffic (≈ 3 M requests/day).

**Action (Dive Deep + Bias for Action)**  
I designed a **Unified Embedding Space**:  
1. **Feature extraction** – ResNet‑50 for images, BERT‑base for text, and a custom CNN for video frames.  
2. **Projection layer** – 512‑dim MLP that maps all modalities into one vector space, trained end‑to‑end with contrastive loss (InfoNCE).  
3. **Retrieval** – ANN index using **Amazon Kendra + Elasticsearch**; embeddings are stored in DynamoDB for persistence and served via a Lambda layer to keep cold‑start low.  

I added an adaptive cache in **Elasticache Redis** for the top 10k most frequent queries, reducing read latency by 70 % and cutting EC2 cost by 35 %. The system achieved **99.7 % recall@5** across modalities and cut page load time from 1.4 s to 0.8 s.

**Result (Deliver Results)**  
Post‑launch, click‑through rate on multimodal search rose 18 %, and revenue per visitor increased $0.12/month for the product line. I documented all failure modes—embedding drift and cache evictions—and instituted monthly re‑training, ensuring continuous ownership of quality.

*Bar‑raiser cue:* demonstrated deep technical chops (design choices & trade‑offs), quantified impact, and a clear learning loop from failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
