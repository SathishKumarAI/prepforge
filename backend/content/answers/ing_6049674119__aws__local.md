---
qid: ing_6049674119__aws__local
question: What is agentic RAG? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 442
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:03:29-05:00'
sources: []
---

**Question:** *What is agentic RAG?*  

**Answer – Amazon‑style**

> **Situation & Task**  
> In a recent product launch I was asked to build an AI assistant that could not only answer user queries but also proactively suggest next steps (e.g., “Your order will arrive tomorrow; would you like to track it?”). The challenge was to move from static retrieval‑augmented generation (RAG) to *agentic* RAG, where the model decides when and what to retrieve.

> **Action**  
> I designed a two‑stage pipeline:  
> 1. **Trigger Model** – a lightweight BERT classifier hosted on Amazon SageMaker Edge Manager that flags “actionable” intents (≈ 92 % precision).  
> 2. **Agentic RAG** – a fine‑tuned GPT‑4‑based retrieval model using Amazon Bedrock, integrated with an Elasticsearch cluster for fast vector search. The agent receives the intent, queries the knowledge base, and decides whether to generate a pure response or embed a call‑to‑action (CTA).  
> I leveraged **Amazon Kinesis Data Streams** to log user interactions in real time, feeding back into continuous model retraining on SageMaker Pipelines.

> **Result**  
> Post‑deployment, proactive suggestions increased conversion by **15 %** and reduced support tickets by **22 %** within three months. Cost per request dropped 18 % thanks to the selective trigger mechanism.

> **Leadership Principles Reflected**  
> • *Customer Obsession* – delivering timely CTAs that improve user experience.  
> • *Ownership & Dive Deep* – architecting end‑to‑end data flow and iteratively refining models based on real metrics.  

*Bar‑raiser cues:* depth of design (trigger + agentic RAG), quantified impact, learning loop via Kinesis analytics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
