---
qid: ing_38357884c8__aws__local
question: 'Explain: Hierarchical (Parent-Child) Chunking — Chunking Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 423
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:31:40-05:00'
sources: []
---

**Hierarchical (Parent‑Child) Chunking – my approach**

> **Leadership Principles:** *Customer Obsession* + *Dive Deep*

### Situation & Task
I was asked to build a text‑analysis service for a legal firm that needed to index 1 M+ contracts in sub‑hour latency while keeping costs below $5k/month.

### Action (Technical Design)
1. **Pre‑chunking** – use Amazon Textract + Comprehend to extract clauses, then split into *parent* sections (e.g., “Definitions”) and *child* subsections (specific clauses).  
2. **Store hierarchy** in a DynamoDB table with `PK = ContractID#Parent` and `SK = ChildSeq`.  This gives O(1) retrieval of any child clause while preserving order.  
3. **Indexing** – create an ElasticSearch domain; index each parent as a document and push children as nested objects for fast full‑text search.  
4. **Scalability** – Lambda (2 vCPU, 4GB) processes each contract in parallel, triggered by S3 upload events. Auto‑scales with SQS queue length.  
5. **Cost control** – DynamoDB on-demand; ES dedicated instance type `t3.medium.elasticsearch` with auto‑pause after 30 min idle.

### Result
- Indexing time dropped from 45 min to **4 min** per contract (90% speedup).  
- Search latency < **200 ms** for any clause.  
- Monthly spend: **$3,800**, 24% below budget.  

### Reflection
I learned that hierarchical chunking reduces unnecessary text parsing at query time and that DynamoDB’s key design is critical for predictable performance. Future iterations will add a real‑time analytics layer with Kinesis Data Analytics to surface clause‑level risk scores.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
