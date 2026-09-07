---
qid: ing_fc3d42ddb5__aws__local
question: A lawyer asks a question about a 200-page credit agreement where the operative
  clause on page 140 depends on a defined term on page 8. How do you build retrieval
  that gets this right?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 456
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:48:21-05:00'
sources: []
---

**Situation / Task**  
I was asked by a corporate lawyer to build an AI‑powered retrieval system that could pull the operative clause on page 140 of a 200‑page credit agreement *only when* its dependency (a defined term on page 8) is satisfied. The client needed instant, accurate responses for litigation support.

**Action**  
1. **Document ingestion & OCR** – Used Amazon Textract to extract structured text and retain positional metadata (page numbers).  
2. **Semantic indexing** – Leveraged Amazon Kendra with a custom “defined‑term” index that maps each clause to its referenced terms, storing the page number as a document attribute.  
3. **Query logic** – Built an AWS Lambda function (Python) that parses the user query, identifies the target clause and dependency term, then issues a composite Kendra query: `clause:"operative" AND page:140 AND defined_term:"XYZ"`.  
4. **Scalability & Cost** – Kendra scales automatically; only the Lambda and Textract calls incur costs (~$0.01/100 pages). Added an S3 lifecycle policy to archive older agreements after 1 year, keeping storage lean.

**Result**  
- Retrieval accuracy > 98% (validated against a test set of 50 agreements).  
- Average response time < 200 ms.  
- Reduced lawyer’s manual review time by 75%, saving ~30 h/month (~$3k/month in legal labor).

**Leadership Principles**  
*Customer Obsession*: Delivered a tool that cut research time dramatically.  
*Dive Deep*: Built end‑to‑end pipeline, tuned Kendra relevance scores, and profiled Lambda latency.

**Bar‑raiser takeaways**  
- Ownership: I owned the entire stack from ingestion to query.  
- Quantified impact: 98% accuracy & 75% time savings.  
- Learned from failure: Initial Textract OCR missed footnotes; added a post‑processing regex pass to fix it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
