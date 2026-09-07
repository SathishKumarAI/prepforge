---
qid: ing_97ee169c43__aws__local
question: 'Explain: Known Biases and Mitigations — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 490
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:09:10-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team at AWS to launch an AI‑driven Retrieval‑Augmented Generation (RAG) service that powers customer support bots. The key challenge was the *known bias* in retrieval models—over‑representation of certain document types and language styles—which could skew responses and hurt user trust.

**Action**  
- **Bias audit**: I built a custom evaluation pipeline using Amazon SageMaker Ground Truth to label 20 k query–document pairs for factuality, sentiment, and demographic coverage.  
- **Mitigation design**: Introduced a *diversity‑aware retrieval scorer* that blends BM25 with a learned embedding similarity (Amazon Titan‑Embedding). The scorer assigns higher weight to under‑represented categories based on the audit metadata.  
- **RAG evaluation pattern**: Implemented an end‑to‑end test harness in AWS Step Functions, orchestrating SageMaker endpoints for retrieval, LLM inference (Amazon Bedrock), and a post‑processing validator that flags hallucinations. Results are stored in Amazon DynamoDB and visualized via QuickSight dashboards.  
- **Scalability & cost**: Leveraged spot instances for the retrieval cluster, auto‑scaling based on query volume, cutting monthly spend by 35 % while maintaining <200 ms latency.

**Result**  
After deployment, bias scores dropped from 0.42 to 0.18 (normalized entropy metric), and customer satisfaction with bot responses rose by **12 pp** (NPS). The solution now serves >1M queries/day across 15 regions.

---

### Leadership Principles Anchored
- **Customer Obsession** – ensuring unbiased, trustworthy answers for users.  
- **Ownership & Dive Deep** – conducting a full bias audit and iterating on the retrieval scorer until metrics improved.  

### What a Bar‑raiser Hears
- Quantified impact (bias score reduction, NPS lift).  
- Deep technical dive (audit pipeline, scoring algorithm, AWS services chosen).  
- Learning from failure: initial over‑reliance on BM25 revealed bias; pivot to diversity scorer fixed it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
