---
qid: ing_1759eedd58__faang__local
question: 'Explain: Cost per Query (Full RAG Triad) — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 487
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:38:44-05:00'
sources: []
---

**Clarify**  
You’re asking how we measure the *cost per query* when a Retrieval‑Augmented Generation (RAG) system uses the full triad: **Retrieve → Rank → Generate**. I’ll assume we’re evaluating an end‑to‑end pipeline that serves user prompts, pulls documents from a vector store, re‑ranks them, and feeds the top‑k to a language model.

---

**Approach**  
1. Identify all cost components (compute, storage, data transfer).  
2. Instrument each stage to record per‑query latency & resource usage.  
3. Convert usage into monetary units using vendor pricing.  
4. Aggregate across the triad and normalize by query count.

---

**Depth**  

| Stage | Cost Drivers | Measurement |
|-------|--------------|-------------|
| **Retrieve (vector search)** | GPU/CPU vCPU‑hours, RAM, index storage | Query latency × compute price + (index size ÷ 1 GB) × storage rate |
| **Rank** | Inference cost of re‑ranking model (e.g., BM25 fine‑tuned BERT) | CPU/GPU time × per‑hour rate |
| **Generate** | Token‑level inference on LLM | #generated tokens × token‑rate + prompt‑tokens × prompt‑rate |

Total Cost/Query = Σ(cost_stage).  
Use *per‑token* billing APIs (AWS Bedrock, Azure OpenAI) for accuracy.  

---

**Edge Cases**  
- **Cold start / cache miss** → higher retrieval latency.  
- **Variable top‑k** → fluctuating compute in rank/generate.  
- **Sparse vs dense indices** → different storage costs.  
Test with a mix of short/long prompts and varying document lengths.

---

**Optimize & Communicate**  
1. Cache frequent queries to cut retrieval cost.  
2. Reduce `top-k` without hurting recall (A/B test).  
3. Choose cheaper embedding models for retrieval if accuracy permits.  
Explain trade‑offs: lower retrieval cost may raise hallucination risk; higher rank compute improves relevance but adds latency. Conclude with a dashboard that visualizes per‑query cost and SLA metrics, enabling continuous optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
