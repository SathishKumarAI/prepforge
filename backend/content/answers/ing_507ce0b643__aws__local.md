---
qid: ing_507ce0b643__aws__local
question: 'Walk me through the latency budget of a query: query understanding → retrieval
  → rerank → LLM answer. Where do you spend and where do you cut?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 508
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:27:08-05:00'
sources: []
---

**Situation (S)**  
I led the latency‑budget redesign for a conversational AI product that serves ~50 M daily queries. The pipeline was: query understanding → retrieval → rerank → LLM answer. Each step had to stay under 200 ms to keep user satisfaction above 95 % (A/B test).  

**Task (T)**  
Reduce end‑to‑end latency by 35 % while keeping cost <10 % of current spend.

**Action (A)**  

| Step | Current Latency | Optimized Approach | AWS Services |
|------|-----------------|--------------------|--------------|
| Query understanding | 45 ms | Replace heavy NLP model with a distilled BERT + **Amazon SageMaker Edge** inference on local GPUs. | SageMaker, Inferentia |
| Retrieval | 70 ms | Switch from ElasticSearch to **DynamoDB Accelerator (DAX)** + pre‑populated inverted index; batch fetch 5 docs per request. | DynamoDB, DAX |
| Rerank | 30 ms | Offload to a lightweight Lambda@Edge function that uses a tiny ranker; cache top‑10 scores in **Redis** (Amazon ElastiCache). | Lambda@Edge, ElastiCache |
| LLM answer | 55 ms | Use **Amazon Bedrock** with a custom fine‑tuned model, limiting token generation to 200 tokens. Cache identical prompts in S3 Glacier Deep Archive for cold starts. | Bedrock, S3 |

- **Cut:** Removed synchronous GPU inference for retrieval and replaced it with serverless cache lookups.
- **Spend:** Added DAX (≈$0.12/instance‑hr) but saved $0.04 per query on GPU cost; overall monthly savings of ~$120k.

**Result (R)**  
Latency dropped from 200 ms to 130 mp (35 % improvement). Throughput increased by 40 %, and the A/B test showed a 3 pp lift in user satisfaction.  

*Leadership Principles:* **Customer Obsession** – we measured impact on UX; **Ownership** – I drove cross‑team alignment and risk mitigation; **Dive Deep** – the trade‑off analysis between cost, latency, and model quality guided decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
