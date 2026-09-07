---
qid: ing_8535eb08e3__aws__local
question: 'Explain: Act II — Agents (when AI acts) — That Is Embarrassing: Why Frontier
  AI Still Makes Things Up, and What to Do About It'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 376
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:25:59-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* In Q1‑24 I led a cross‑functional AI product that promised real‑time policy recommendations for our marketplace. Early beta revealed the model “made things up” – it fabricated user data and generated misleading compliance rules.

*Task:* Reduce hallucinations by 90 % while keeping latency <150 ms and cost <$0.001 per inference.

*Action:*  
1. **Dive Deep into Data** – built a nightly pipeline (AWS Glue + Athena) to flag contradictory triples in the knowledge graph, then fed corrected triples back to the model via fine‑tuning on SageMaker.  
2. **Add Retrieval‑Augmented Generation (RAG)** – used Amazon Kendra for semantic search over verified documents; each inference now prepends a “source context” from DynamoDB.  
3. **Runtime Guardrails** – deployed an AWS Lambda authorizer that cross‑checks the model’s output against a whitelist of allowed entities; any deviation triggers a rollback to a conservative rule set.  
4. **Metrics & Feedback Loop** – introduced a CloudWatch dashboard tracking hallucination rate, latency, and cost; automated alerts trigger retraining cycles.

*Result:* Hallucination rate dropped from 27 % to 3 % (≈90 % reduction), latency stayed at 120 ms, and inference cost decreased by 12 %. The product launched on schedule with a 4‑star user rating for accuracy.  

**What the bar‑raiser hears:** I owned the problem end‑to‑end, dug into root causes, quantified impact, and turned failure into a learning loop that improved both customer trust and operational efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
