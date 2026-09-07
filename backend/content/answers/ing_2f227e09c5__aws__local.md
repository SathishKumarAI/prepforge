---
qid: ing_2f227e09c5__aws__local
question: 'Explain: Pattern 4: Multi-Vector Query — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 437
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:11:51-05:00'
sources: []
---

**Situation / Task**  
When launching a recommendation engine for our e‑commerce catalog, I noticed that users were returning to the same product page after a few clicks—our click‑through rate (CTR) was only 1.2 %. The problem was that we relied on keyword matching; semantic similarity was missing.

**Action**  
I introduced *Pattern 4: Multi‑Vector Query* using Amazon Kendra’s vector search combined with an open‑source vector DB (Pinecone). I:

1. **Embedded** product titles, descriptions, and user reviews into 768‑dimensional vectors via a fine‑tuned Sentence‑BERT model hosted on SageMaker.
2. **Indexed** the embeddings in Pinecone for sub‑millisecond similarity lookup, while storing raw metadata in DynamoDB.
3. Built an API Gateway + Lambda layer that accepts a query vector and returns top‑k results from both vector DB (semantic) *and* keyword DB (exact), merging scores with a weighted cosine similarity.

**Result**  
Within 4 weeks of deployment, CTR rose to **4.8 %** (+300 %) and session depth increased by 22 %. The hybrid approach reduced serverless cold‑starts by 40 % and kept monthly spend under $2k, leveraging Spot instances for SageMaker training.

**Reflection (Bar‑raiser cues)**  
*Ownership*: I took full responsibility from data ingestion to production monitoring.  
*Dive Deep*: I profiled latency across vector vs keyword queries, tuning Pinecone’s index parameters.  
*Quantified Impact*: 300 % CTR lift directly translated into $120k incremental revenue per month.  
*Learning from Failure*: Early tests with a single‑vector approach failed due to high false positives; the multi‑vector fusion corrected that.

**Leadership Principles Anchored**: *Customer Obsession*, *Invent & Simplify*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
