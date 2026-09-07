---
qid: ing_463184ca67__aws__local
question: How do you evaluate the generation side of RAG - faithfulness, relevance,
  and citation quality?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 397
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:04:25-05:00'
sources: []
---

**Situation & Task**  
While leading the AI‑powered RAG (Retrieval‑Augmented Generation) platform for a global e‑commerce search product, I was charged with ensuring that generated answers were **faithful to source documents**, highly relevant to user intent, and correctly cited. The goal: improve user satisfaction scores by 15 % while keeping inference latency under 200 ms.

**Action – Technical Design**  
1. **Faithfulness** – built a *source‑confidence* model that scores each retrieved chunk on factual consistency using BERT‑based entailment. Deployed as an AWS Lambda layer behind Amazon SageMaker endpoint for real‑time scoring.  
2. **Relevance** – added a query‑driven ranking layer (Amazon OpenSearch) that re‑orders RAG outputs based on semantic similarity and click‑through data, with A/B tests run via CloudWatch metrics.  
3. **Citation Quality** – introduced a lightweight citation extractor that tags each token with source metadata; results are stored in DynamoDB for auditability and served via API Gateway.

**Result**  
- Faithfulness score rose from 68 % to **87 %**, relevance hit 92 %.  
- User satisfaction (NPS) increased by **17 points**.  
- Inference latency stayed at 180 ms; cost per request dropped 12 % by leveraging spot SageMaker instances.

**Reflection & Ownership**  
I maintained ownership of the full pipeline, iterated on model thresholds based on real‑world failure cases, and documented a “faithfulness playbook” that reduced onboarding time for new ML engineers. This aligns with *Customer Obsession* (delivering trustworthy answers) and *Dive Deep* (quantitative validation).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
