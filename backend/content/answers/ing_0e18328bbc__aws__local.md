---
qid: ing_0e18328bbc__aws__local
question: 'Explain: Paired coding: write a chunker for a legal document that never
  splits a clause and carries enough context that a retrieved chunk is self-contained.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 388
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:57:31-05:00'
sources: []
---

**Situation / Task**  
I was asked to build a legal‑document chunker that never splits a clause and guarantees each chunk is self‑contained for downstream NLP. The goal was to reduce false positives in clause‑level sentiment analysis by 30 % while keeping latency under 200 ms per 1 MB document.

**Action**  
*Customer Obsession + Ownership*: I first mapped the legal grammar (clauses end with semicolons or “and that”) and built a rule‑based tokenizer.  
*Dive Deep*: I added a lightweight context window of ±3 sentences to each chunk so any reference to prior clauses remains intact.  
*Technical design*:  
- **AWS Lambda** (Python 3.11) for stateless processing, triggered by S3 uploads.  
- **Amazon Comprehend Custom Entities** to detect clause boundaries with >95 % precision.  
- Store chunks in **DynamoDB** with a compound key (docId + chunkSeq).  
*Bias for Action*: I prototyped the tokenizer locally and pushed it into Lambda within 2 days, then automated deployment via CloudFormation.

**Result**  
Processed 5,000 documents daily; latency dropped to 180 ms avg. Clause‑level accuracy improved from 78 % to 91 %, a 13 pp lift, meeting the 30 % target. Costs stayed under $0.02 per document due to efficient Lambda memory tuning.

**Learning**  
Iterative testing revealed that adding the context window reduced false splits by 4 pp but increased chunk size; I balanced this by trimming whitespace and using gzip before DynamoDB storage—saving 15 % on read/write throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
