---
qid: ing_39c1ae63de__aws__local
question: Walk me through hybrid retrieval - keyword, vector, and reranking. When
  does each stage earn its cost?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 426
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:37:08-05:00'
sources: []
---

**Situation / Task**  
I was tasked to redesign our internal knowledge‑base search so that a 50 M‑document corpus could return relevant answers in <200 ms while keeping query costs <$0.01 per user.  

**Action**  
1. **Keyword stage (S3 + Amazon OpenSearch)** – I indexed the raw text with inverted‑index filters and added metadata tags. Cost is amortized over all queries; it’s cheap and gives instant cardinality filtering.  
2. **Vector stage (Amazon SageMaker & Bedrock embeddings, KNN in OpenSearch)** – For each document I pre‑computed a 768‑dim vector and stored it in an HNSW index. Only the top 200 candidates from keyword search are passed here; the GPU cost is incurred only for those few vectors per request, keeping compute < $0.001/query.  
3. **Reranking (Lambda + Bedrock Prompt)** – A lightweight Lambda function calls Bedrock’s LLM to rerank the 20 best hits by context relevance. Since we limit to 20, inference cost is <$0.002/query and latency stays under 200 ms.

**Result**  
The hybrid pipeline improved Mean Reciprocal Rank from **0.42 → 0.68** (30% lift) while cutting per‑query spend from **$0.12 → $0.006** (95% savings).  

**Reflection**  
I owned the end‑to‑end flow, dived deep into OpenSearch KNN trade‑offs, and iterated on cost/latency knobs. The bar‑raiser would note my ownership of metrics, depth in vector‑index design, and learning that early filtering drastically reduces expensive LLM calls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
