---
qid: ing_7a166f6680__aws__local
question: 'Explain: No results found — Tutorials | Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 533
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:01:21-05:00'
sources: []
---

**Situation & Task**  
While building a public‑facing search feature for a medical knowledge base, my team noticed that *Haystack* – the open‑source ML‑powered search stack – returned “No results found” for many user queries even though data existed in our Elasticsearch index. The product owner demanded 95 % hit‑rate for all health‑related questions within 24 hrs of release.

**Action**  
1. **Dive Deep into Logs** – I pulled the last 10,000 query logs from CloudWatch and found that 62 % of failures were due to *tokenizer mismatch* between Haystack’s default BM25 pipeline and our custom medical stop‑word list.  
2. **Ownership & Experimentation** – I forked the pipeline, re‑trained a SentenceTransformer model on a curated set of 150k clinical Q&A pairs (using SageMaker), and deployed it behind an API Gateway + Lambda layer for inference.  
3. **Scalable Architecture** – The new endpoint sits in a VPC with private EFS storage; autoscaling is driven by CloudWatch metrics (avg latency <120 ms). I replaced the single‑node Elasticsearch cluster with an Amazon OpenSearch Service domain, sharded 12 replicas to guarantee 99.99 % availability.  
4. **Bias for Action & Deliver Results** – Within 48 hrs we saw hit‑rate jump from 73 % to **94 %**, reducing “No results” complaints by **87 %** and lifting daily active users by 12 k (≈3 % lift). Cost increased by only $120/month, a negligible 0.5 % of the overall ops budget.

**Result**  
The new ML pipeline delivered measurable impact: 94 % query success, 87 % drop in negative feedback, and a cost‑effective, highly available architecture that scales to millions of queries per day.  

---

### Bar‑raiser notes
- **Ownership**: Took full responsibility for root cause analysis and end‑to‑end solution.  
- **Dive Deep**: Quantified the tokenizer issue via log analytics; trained domain‑specific model.  
- **Quantified Impact**: 94 % hit‑rate, 87 % complaint drop, cost <1 %.  
- **Learning from Failure**: Recognized that generic models misbehave on niche domains and iterated quickly with SageMaker and OpenSearch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
