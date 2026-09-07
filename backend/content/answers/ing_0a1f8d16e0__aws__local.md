---
qid: ing_0a1f8d16e0__aws__local
question: How would you evaluate multilingual retrieval quality - a customer's employees
  query in French and Korean over mostly-English documents?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 410
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:48:52-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the launch of a multilingual search feature for an enterprise knowledge‑base used by ~15 000 global employees. A client in France and Korea raised concerns that their French/Korean queries were returning low‑precision results from our mostly English document corpus.

**Action**  
1. **Ownership & Dive Deep** – I formed a cross‑functional squad (NLP, infra, QA). We built an evaluation pipeline:  
   * Crawled 200 K query–document pairs per language.  
   * Used Amazon SageMaker to fine‑tune mBERT for relevance scoring; deployed via SageMaker Endpoint behind API Gateway.  
2. **Bias for Action & Invent** – Implemented a retrieval‑augmented ranking layer:  
   * ElasticSearch clusters (one per region) indexed all docs with language tags.  
   * On query, the system first filters by language, then scores with our fine‑tuned model, and finally re‑orders via a Lambda‑powered fusion algorithm.  
3. **Deliver Results** – Ran A/B tests: precision@10 rose from 0.32 to **0.57** for French (±5 % change) and from 0.29 to **0.55** for Korean, with latency <200 ms. Cost per query dropped 18 % thanks to spot‑enabled SageMaker endpoints.

**Result**  
The client reported a 42 % reduction in support tickets related to search frustration, translating into an estimated $1.2M annual ROI. I documented lessons on continuous language drift monitoring and shared the framework with the Search team, enabling rapid rollout to five additional languages.  

*Leadership Principles highlighted: Customer Obsession, Ownership, Dive Deep, Bias for Action, Deliver Results.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
