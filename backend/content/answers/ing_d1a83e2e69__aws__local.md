---
qid: ing_d1a83e2e69__aws__local
question: 'Explain: Why Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 224
output_tokens: 387
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:14:48-05:00'
sources: []
---

**Why Hybrid Search?**  
*Leadership Principles:* **Customer Obsession** + **Invent & Simplify**.

**Situation:** Our e‑commerce catalog had 12 M SKUs but customers complained that keyword searches returned irrelevant items (CTR on search results dropped 18 % YoY).  

**Task:** Design a system that blends semantic understanding with structured filtering to improve relevance while keeping latency <200 ms.  

**Action:**  
- **Data‑driven model:** Trained a BERT‑based encoder on click logs; mapped queries & product titles into a shared vector space.  
- **Hybrid pipeline:**  
  1. *Semantic tier* – AWS SageMaker endpoints score relevance (top‑10 vectors).  
  2. *Structured tier* – Amazon DynamoDB Global Secondary Indexes enforce price, brand, and inventory filters.  
  3. *Fusion layer* – Lambda aggregates scores, applies business rules, returns ranked list via API Gateway.  
- **Scalability:** Use SageMaker Neo for edge inference; DynamoDB auto‑scales with on‑demand capacity.  
- **Cost & Availability:** Pay‑as‑you‑go model, 99.999 % SLA; cost per search < $0.0005 after caching top queries in ElastiCache.

**Result:** Post‑deployment, CTR rose 27 %, conversion +12 %, and support tickets on “irrelevant results” fell by 35 %.  

*Bar‑raiser focus:* I owned the end‑to‑end solution, dove deep into model bias, quantified impact with A/B testing, and learned that early caching of semantic vectors mitigated inference spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
