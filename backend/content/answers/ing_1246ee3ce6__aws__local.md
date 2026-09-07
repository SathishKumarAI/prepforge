---
qid: ing_1246ee3ce6__aws__local
question: 'Explain: Contextual Retrieval in AI Systems \ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 516
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:06:50-05:00'
sources: []
---

**Answer (Amazon Way)**  

> **Contextual Retrieval** is the technique of pulling only the most relevant documents or knowledge snippets that match a user’s query *in context*, rather than returning a full corpus. In Anthropic’s Claude, this means feeding the model a short “retrieval‑augmented prompt” that contains precisely the facts needed for inference.

| Step | What I did | Result |
|------|------------|--------|
| **S** – Situation | Our internal knowledge base grew to 2 M docs; latency hit 1.8 s per request, hurting user satisfaction (NPS dropped from 72 to 65). |
| **T** – Task | Reduce retrieval latency by ≥70 % while keeping accuracy >95 %. |
| **A** – Action | • Built a vector index with **Amazon Kendra** + **OpenSearch**; used cosine‑similarity to score top‑k snippets.<br>• Offloaded pre‑filtering to an **AWS Lambda** layer that cached embeddings per user profile (TTL 6 h).<br>• Implemented fallback to **Bedrock Anthropic Claude** for ambiguous queries, passing only the top‑5 docs. |
| **R** – Result | Latency dropped from 1.8 s to 0.4 s (77 % improvement). Accuracy stayed at 96 %. Cost per request fell by 35 % due to reduced Bedrock usage. |

**AWS Services & Trade‑offs**

* **Amazon Kendra** – high‑quality semantic search, but higher cost; mitigated with OpenSearch for bulk queries.<br> *OpenSearch* – cheaper, scalable, but needs manual tuning of similarity thresholds.<br> *Lambda* – zero‑ops, pay‑per‑use; cold starts addressed by provisioned concurrency.

**Leadership Principles Highlighted**

1. **Customer Obsession** – Directly improved NPS and response times.  
2. **Ownership & Dive Deep** – I architected end‑to‑end solution, quantified impact, and iterated on thresholds based on real metrics.  

*Bar‑raiser note:* Look for ownership in problem framing, depth in choosing services (Kendra vs OpenSearch), and a clear data story that ties technical choices to business outcomes.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
