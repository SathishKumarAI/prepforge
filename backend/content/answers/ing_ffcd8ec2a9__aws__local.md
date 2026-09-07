---
qid: ing_ffcd8ec2a9__aws__local
question: For a long-context assistant, when is a 1M-token context window the right
  tool, and when should you use retrieval (RAG) instead?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 440
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:56:08-05:00'
sources: []
---

**Answer – Amazon Way**

> **Leadership Principles:** *Customer Obsession*, *Dive Deep*  
> **Behavioral (STAR):**  
> **S**ituation: In a recent Q4 product launch we had to decide whether our LLM‑powered chatbot should use a 1 M‑token context window or a Retrieval‑Augmented Generation (RAG) pipeline.  
> **T**ask: Deliver an assistant that answers highly technical queries from thousands of engineering docs while keeping latency <200 ms and cost <$0.05/query.  
> **A**ction: I benchmarked the two approaches. With 1 M tokens, inference time rose to 2.5 s and GPU bill hit $3.40 per query—far above SLA targets. Switching to RAG (embedding index in DynamoDB + SageMaker endpoint) cut latency to 120 ms and cost to $0.02/query. I also added a token‑budget monitor that falls back to the full context only when the user’s request exceeds 10 k tokens, ensuring edge cases are still handled.  
> **R**esult: Adoption of RAG reduced operational spend by 94% while maintaining accuracy (BLEU > 0.82). The team now meets SLA and has a scalable model that can grow to 100 M docs without changing the LLM.  

**Technical Takeaway:**  
* Use a **1 M‑token window** only when you need *uninterrupted, end‑to‑end reasoning* on extremely long documents (e.g., legal contracts) and you have dedicated GPU resources that can tolerate high latency.  
* Prefer **RAG** for most use cases: it keeps inference cheap, scales horizontally via index shards, and allows incremental knowledge updates without retraining the LLM.

**Bar‑raiser cues:** ownership of cost/latency trade‑offs, deep dive into metrics, quantifiable impact, learning loop (fallback strategy).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
