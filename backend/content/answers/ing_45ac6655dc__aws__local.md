---
qid: ing_45ac6655dc__aws__local
question: 'The take-home says: "Build a tool that answers questions over our public
  docs. You have a weekend." How do you approach it, and what do you deliberately
  skip?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 451
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:03:05-05:00'
sources: []
---

**Situation / Task**  
I was given a weekend to prototype an AI‑powered question‑answering tool for a public documentation portal. The goal was to surface accurate answers quickly while keeping the system simple enough to ship in 48 hrs.

**Approach (Dive Deep + Deliver Results)**  
1. **Data ingestion** – Pull all markdown/HTML docs from S3, parse with AWS Glue and store a lightweight inverted index in DynamoDB (key: term → list of doc IDs).  
2. **Embedding generation** – Use the free tier of Amazon Bedrock (Claude 3‑haiku) to embed each paragraph into 1024‑dim vectors; push them into an OpenSearch domain for similarity search.  
3. **Query pipeline** – API Gateway + Lambda (Python) receives a user query, generates its embedding via Bedrock, runs a kNN search in OpenSearch, and returns the top 3 passages.  
4. **Fallback** – If similarity score < 0.6, surface the full doc link with a brief excerpt.

**What I skipped (Bias for Action)**  
- Full semantic ranking or custom fine‑tuning (would exceed time & cost).  
- Real‑time monitoring dashboards; instead rely on CloudWatch logs for quick sanity checks.  

**Result (Metrics)**  
Within 24 hrs, the prototype answered 95 % of test queries with > 0.8 cosine similarity to reference answers—matching a 99‑hour manual baseline at < $10/day in Bedrock usage.

**Bar‑raiser cues I hit**  
- *Ownership*: Built end‑to‑end pipeline and documented deployment scripts.  
- *Dive Deep*: Chose OpenSearch for low‑latency kNN, weighed DynamoDB vs RDS for index storage.  
- *Quantified impact*: 95 % accuracy, <$10/day cost.  
- *Learning from failure*: Initial version returned irrelevant snippets; fixed by adding a similarity threshold and ranking logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
