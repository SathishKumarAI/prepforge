---
qid: ing_9d2e43ca97__aws__local
question: 'Q: When would you use hybrid search over pure dense search?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 422
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:20:21-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a search‑engine revamp for an e‑commerce platform that had to rank millions of product listings while keeping latency under 200 ms. The existing dense‑vector model returned top semantic matches but missed items with misspellings or rare brand names, hurting conversion rates.

**Action**  
I introduced a **hybrid search** pipeline:  
1. *Sparse component* – OpenSearch’s built‑in keyword engine (with custom analyzers for auto‑correct and synonym expansion).  
2. *Dense component* – SageMaker‑hosted Sentence‑Transformer embeddings stored in an ElasticVectorIndex.  
3. A Lambda function merged the top 50 results from each source, weighted by a learnable relevance score trained on click‑through data.

AWS services used: OpenSearch for scalability and near‑real‑time updates; SageMaker for model training; DynamoDB to cache user‑specific weights; CloudWatch for latency metrics.

**Result**  
After A/B testing, hybrid search lifted conversion from 4.2 % to **5.9 %** (≈ 40 % lift) while keeping query latency at 180 ms and total cost down 12 % thanks to efficient caching.  

**Reflection**  
I owned the end‑to‑end experiment, dove deep into error logs to tune the weighting algorithm, and iterated quickly—meeting the *Bias for Action* principle. The bar‑raiser will note my data‑driven impact, depth of analysis, and learning loop that turned a failure (misspelled queries) into a scalable solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
