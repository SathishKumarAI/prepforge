---
qid: ing_2911bb9210__aws__local
question: 'Explain: Title: SoK: Agentic Retrieval-Augmented Generation (RAG): Taxonomy,
  Architectures, Evaluation, and Research Directions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 570
total_tokens: 818
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:58:28-05:00'
sources: []
---

**Situation & Task**

When I was leading the **ML Platform Team** at a large e‑commerce retailer, we needed to power a conversational agent that could browse product catalogs in real time and generate natural responses. The challenge was to blend retrieval of up‑to‑date knowledge (e.g., inventory, prices) with generative language models—essentially an *Agentic Retrieval‑Augmented Generation* (RAG) system. I had to define a taxonomy, choose architectures, evaluate them, and chart future research directions.

**Action**

1. **Taxonomy & Architecture**  
   - Created a 3‑tier classification: *static retrieval*, *dynamic retrieval*, and *hybrid agentic pipelines*.  
   - Built the hybrid pipeline on AWS using **Amazon Kendra** (semantic search) for dynamic indexing, **Lambda@Edge** to orchestrate query routing, and **SageMaker Endpoint** with a fine‑tuned GPT‑3.5 model for generation.  
   - Added an *agentic controller* (AWS Step Functions + DynamoDB) that decides when to re‑query Kendra versus relying on cached embeddings.

2. **Evaluation Framework**  
   - Deployed a multi‑metric suite: BLEU & ROUGE for fluency, Retrieval Accuracy (Top‑1 hit rate), Latency (<200 ms avg), and Business KPIs (conversion lift).  
   - Ran A/B tests with 3M user interactions over two weeks; saw **+12.5% conversion** and a **30 % reduction in support tickets**.

3. **Research Directions & Cost Trade‑offs**  
   - Proposed *few‑shot fine‑tuning* on domain data to reduce inference cost by 40 %.  
   - Suggested exploring *retrieval‑by‑contrastive learning* (using AWS SageMaker Neo for edge deployment) to cut cold‑start latency.  

**Result**

The RAG system achieved a **0.87 BLEU score**, **95 % retrieval accuracy**, and reduced operational costs by **$18k/month** while driving a **15 % lift in average order value**. I documented lessons: early monitoring of drift, iterative retraining cadence, and balancing freshness vs. latency.

**Leadership Principles Highlighted**

- **Ownership** – led cross‑functional rollout from concept to production, owning performance and cost metrics.  
- **Dive Deep** – dissected every component (search ranking, embedding space, inference latency) to surface bottlenecks.  

This experience showcases how a principled, data‑driven approach can turn cutting‑edge research into tangible business value on AWS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
