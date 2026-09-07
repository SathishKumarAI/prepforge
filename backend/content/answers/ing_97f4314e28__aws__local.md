---
qid: ing_97f4314e28__aws__local
question: 'Mid-round I tell you your answer is wrong: I think you should fine-tune
  here, not use retrieval. You disagree with me. What do you do?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 378
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:09:17-05:00'
sources: []
---

**Situation / Task**  
During a mid‑round technical discussion on building an AI recommendation engine, the interviewer insisted we should fine‑tune a transformer model instead of using retrieval‑augmented generation (RAG). I disagreed because my data showed RAG reduces hallucination and scales better for our user base.

**Action**  
1. **Customer Obsession & Dive Deep** – I first asked clarifying questions about latency, cost, and the volume of queries per day to ground the debate in real customer metrics.  
2. **Bias for Action** – I quickly sketched a hybrid architecture: a lightweight Amazon SageMaker endpoint for fine‑tuned inference (≈$0.10/1k requests) coupled with an OpenSearch index for retrieval, all orchestrated by AWS Lambda and Step Functions.  
3. **Invent & Simplify** – I proposed using Amazon Bedrock for the base model, caching top 5 documents in DynamoDB to keep cold‑start latency <200 ms.  
4. **Deliver Results** – I presented a cost comparison: RAG (SageMaker + OpenSearch) ≈$0.15/1k requests vs fine‑tune alone $0.25/1k, with projected 20% higher accuracy on our A/B test.

**Result**  
The interviewer accepted the hybrid plan; we later deployed it in production and saw a 12% lift in click‑through rate while cutting inference cost by 30%.  

**Bar‑raiser takeaways** – I demonstrated ownership (owning the end‑to‑end solution), deep technical dive, quantified impact, and willingness to pivot after learning from data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
