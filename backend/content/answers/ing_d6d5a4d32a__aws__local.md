---
qid: ing_d6d5a4d32a__aws__local
question: 'Explain: Cost estimate — Enterprise Rag Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 487
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:25:03-05:00'
sources: []
---

**Customer Obsession & Deliver Results**

*Situation:* A Fortune‑500 retailer wanted an on‑premises “RAG Assistant” (Retrieval‑Augmented Generation) to answer product‑spec queries across 1 M SKUs while keeping data private.

*Task:* Build a cost‑effective, highly available solution that processes ~10k requests/second with <200 ms latency and stays under $50K/month.

*Action:*  
- **Data layer:** Store embeddings in *Amazon DynamoDB* (100 GB) – 0.25 $/month per GB + read/write capacity for 10k RPS → ~$4,000.  
- **Retrieval:** Use *Amazon Kendra* (1 Index, 200 GB docs) – $0.01/query × 10k/s × 3600 s ≈ $3,600/hr → $86K/month (over budget). Instead switch to *OpenSearch* on *EC2 t3.large* (auto‑scaling), 3 nodes → ~$1,200/mo.  
- **Inference:** Deploy *SageMaker Endpoint* (ml.g5dn.12xlarge) for Llama‑2‑7B + retrieval logic – $4.8 /hr × 24h × 30d ≈ $3,456/mo.  
- **Orchestration:** *Lambda* + *API Gateway* (10M calls/month) → ~$200/mo.  
- **Storage & Backup:** *S3* (200 GB) → <$5/mo.

*Result:* Total estimated cost ~**$8–9K/month**, 99.99% availability, <250 ms latency, and a 30‑day pilot with 95% query accuracy. Learned that Kendra’s per‑query pricing can balloon; OpenSearch + SageMaker yields better scalability at lower cost.

*Bar‑raiser check:* Ownership of end‑to‑end pipeline, deep dive into pricing models, quantified savings vs. alternatives, and iterative learning from the failed Kendra trial.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
