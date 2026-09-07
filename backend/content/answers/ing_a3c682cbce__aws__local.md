---
qid: ing_a3c682cbce__aws__local
question: When would you fine-tune a model instead of using RAG or prompt engineering
  - and if you do fine-tune, LoRA or full fine-tuning?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 446
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:37:40-05:00'
sources: []
---

**Situation & Task**  
I was tasked with building a customer‑support chatbot that needed to recommend product bundles in real time for an e‑commerce platform (10 M users). The baseline LLM had 95 % intent accuracy but only 70 % precision on domain‑specific recommendations.

**Action**  
1. **Dive Deep into data** – I benchmarked RAG, prompt engineering, and fine‑tuning against a held‑out test set (≈500K interactions).  
2. **Cost–benefit analysis** –  
   *RAG* would require 10 TB of indexed product docs → ~US$12k/month on DynamoDB + OpenSearch.  
   *Prompt engineering* improved intent accuracy by 3 % but added 200 ms latency (SageMaker Real‑Time endpoint).  
3. **Fine‑tune** – I chose a **LoRA** adapter on the base model (7B parameters) because it reduced GPU memory to 4 GB, cutting training cost from US$15k to US$2k while maintaining >99 % of baseline performance.  
   *Implementation:* SageMaker Neo for quantization → 30 % latency drop; Lambda orchestrates inference with an API Gateway front‑end.

**Result**  
- Recommendation precision rose from 70 % to **92 %**, boosting conversion by **12 %** (≈$1.5M incremental revenue quarterly).  
- Latency dropped 40 %, keeping user satisfaction above 95 %.  
- Monthly operational cost fell 30 %.

**Reflection**  
The bar‑raiser will note my ownership of the end‑to‑end pipeline, the depth of data analysis, and the quantified impact. I learned that LoRA can deliver near‑full fine‑tuning performance at a fraction of cost—critical when scaling to millions of requests.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
