---
qid: ing_fbc83313f0__aws__local
question: 'Q: How do you handle the case where a RAG system retrieves irrelevant documents
  but the LLM generates a plausible-sounding answer anyway?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 429
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:47:33-05:00'
sources: []
---

**Situation / Task**  
While building a RAG chatbot for a financial‑services client, the system often returned irrelevant legal documents; yet the LLM still produced confident, plausible answers that misled end users.

**Action**  
1. **Own the pipeline** – created an end‑to‑end monitoring service in *AWS Lambda* triggered by each inference request.  
2. **Dive deep into retrieval quality** – added a relevance scoring layer using *Amazon Kendra*’s semantic search and a custom TF‑IDF model stored in *S3*.  
3. **Bias for action** – deployed an *Amazon SageMaker Endpoint* that re‑ranked the top 10 hits, filtering out documents with cosine similarity < 0.45 to the query.  
4. **Customer Obsession & Deliver Results** – exposed a confidence flag (0–1) to the UI; flagged any answer with < 0.7 confidence for human review.  
5. **Cost‑aware trade‑off** – limited re‑ranking to 10 docs, reducing per‑query compute from 3 s to 0.8 s and cutting Lambda invocations by 60 %, saving ~$1.2k/month.

**Result**  
Accuracy of “relevant” answers rose from **72 % → 94 %** (validated via A/B testing with 5,000 real queries). User satisfaction scores increased from 3.8/5 to **4.6/5** within two weeks of deployment.  

**Bar‑raiser takeaway**  
Showed ownership by fixing a cross‑service flaw, deep technical dive into retrieval scoring, quantified impact on accuracy & cost, and iterative learning from the initial failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
