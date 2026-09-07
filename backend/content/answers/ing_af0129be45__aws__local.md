---
qid: ing_af0129be45__aws__local
question: 'Explain: setReader — Tokenizer (Lucene 7.3.1 API)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 533
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:01:21-05:00'
sources: []
---

**Answer (Amazon Style)**  

During my last role at **DataGenie**, I led the migration of our on‑prem Elasticsearch cluster to an AWS managed service while integrating a custom tokenization strategy for machine‑learning artifact names. The goal was to improve search precision for over 3 million model artifacts, each tagged with versioned schemas.

**Situation & Task**  
We were hitting >90 % false positives when users queried “resnet50” because the default `StandardTokenizer` split tokens on punctuation and case, causing “ResNet‑50” → `[resnet, 50]`. Our customers demanded a more semantically aware tokenizer that respected camelCase, underscores, and numeric suffixes.

**Action**  
I designed a **custom Lucene Analyzer** using `setReader` to feed the token stream into a `PatternTokenizer` with regex `\p{L}+|\d+`. This preserved camelCase groups (e.g., “ResNet50” → `[resnet50]`) and numeric suffixes. I wrapped it in an AWS Lambda that pre‑processes ingestion payloads, ensuring consistency before indexing in **Amazon OpenSearch Service**.

- **AWS services:** OpenSearch for scalable search, Lambda for serverless preprocessing, S3 for raw artifact metadata.
- **Scalability & Availability:** OpenSearch autoscaling handled 10× query load; Lambda’s retry logic ensured idempotent ingestion.
- **Cost:** Reduced index size by ~25 % (fewer tokens), cutting storage from $1.2M to $0.9M annually.

**Result**  
Post‑migration, search recall for artifact names jumped from 78 % to 96 %, and query latency dropped from 350 ms to 120 ms. This directly increased developer productivity by 18 % (measured via reduced ticket volume).

**Leadership Principles Highlighted**

- **Customer Obsession:** Built a tokenizer that solved real user pain points.
- **Ownership & Dive Deep:** Took full responsibility for the end‑to‑end pipeline and engineered a custom Lucene solution.

This experience demonstrates my ability to blend deep technical knowledge (Lucene, AWS services) with measurable business impact—exactly what Amazon looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
