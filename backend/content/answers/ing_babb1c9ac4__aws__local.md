---
qid: ing_babb1c9ac4__aws__local
question: 'Explain: Cross-modal retrieval and multimodal RAG'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 444
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:25:49-05:00'
sources: []
---

**Situation & Task**  
At my previous company we were tasked to build a search‑to‑answer system that could answer natural‑language queries using both text documents and accompanying images. The goal was to reduce customer support tickets by 30 % within six months.

**Action**  
I led a cross‑functional squad and designed a *cross‑modal retrieval* pipeline followed by *multimodal Retrieval‑Augmented Generation (RAG)*.  

1. **Cross‑Modal Retrieval** – We indexed embeddings from text (SageMaker’s `text-embedding-ada-002`) and images (S3‑hosted ResNet50 features). Using DynamoDB Global Tables for low‑latency lookups, we built a similarity engine that returns the top‑k relevant documents + image captions.  
2. **Multimodal RAG** – The retrieved items are fed into an Amazon Bedrock `anthropic.claude-3-haiku` model fine‑tuned to fuse text and image embeddings, generating concise answers.  
3. **Scalability & Cost** – Auto‑scaling Lambda handles query bursts; we store embeddings in ElasticSearch for 10 k queries/sec with <$0.02 per query.  

**Result**  
Within four months, the system cut support tickets by **32 %**, achieved a mean response latency of 120 ms, and saved ~$15K/month on cloud spend.

**Leadership Principles**  
*Customer Obsession* – directly tackled user pain points. *Ownership* – drove end‑to‑end delivery and continuous monitoring.  

**Bar‑raiser takeaways**  
I demonstrated ownership by owning the full stack, dove deep into embedding similarity trade‑offs, quantified impact with ticket metrics, and learned from an initial false‑positive spike that led to a tighter similarity threshold.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
