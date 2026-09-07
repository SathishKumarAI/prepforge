---
qid: ing_cc6c587be5__aws__local
question: 'Q: What is the biggest anti-pattern you see in LLM applications?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 375
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:03:13-05:00'
sources: []
---

**Answer (Amazon‑style)**  

When I built a customer‑service chatbot that leveraged GPT‑4 for multi‑turn support, the biggest anti‑pattern I encountered was *“over‑fitting to training data and ignoring real user intent.”*  

- **Situation:** The model had excellent perplexity on internal logs but users reported irrelevant or repetitive answers.  
- **Task:** Reduce hallucinations and improve response relevance while keeping latency < 1 s for 10k concurrent sessions.  
- **Action:**  
  1. Implemented a *retrieval‑augmented generation* pipeline: store recent FAQ and ticket data in an Amazon OpenSearch index, query with semantic embeddings (Amazon SageMaker Neo).  
  2. Added a lightweight “intent filter” microservice on AWS Lambda that routes ambiguous queries to human agents.  
  3. Deployed the model via Amazon Bedrock, monitoring token usage and latency with CloudWatch dashboards.  
- **Result:** User satisfaction rose from 68 % to 92 % (NPS +30), hallucination rate dropped by 75 %, and cost per request fell from $0.12 to $0.07 due to fewer tokens processed.  

**Leadership Principles:**  
- *Customer Obsession* – focused on real user pain points, not just model metrics.  
- *Ownership & Dive Deep* – dissected logs, quantified hallucination rates, iterated until measurable improvement.  

A bar‑raiser will note my ownership of the problem, deep dive into data, and clear, metric‑driven impact, plus lessons learned: always validate AI outputs against real user intent before scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
