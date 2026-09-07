---
qid: ing_45f60ace6d__aws__local
question: 'Explain: Problem statement — Customer Support Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 420
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:03:46-05:00'
sources: []
---

**Situation & Task**  
A mid‑size SaaS company had a 24/7 help desk that answered ~8 k tickets/day. The average first‑response time (FRT) was 4 h and the CSAT score dropped to 78 %. I was tasked with designing an AI‑powered support agent that could reduce FRT below 30 min while keeping costs < $2 per ticket.

**Approach**  
1. **Data pipeline** – Ingested historical tickets into Amazon Kinesis Data Streams, stored in S3 (raw) and indexed in DynamoDB for fast lookup.  
2. **Model** – Fine‑tuned a BERT‑based intent classifier on SageMaker, achieving 92 % accuracy on held‑out data.  
3. **Serving** – Deployed the model as a Lambda edge function behind API Gateway, with request throttling via DynamoDB TTL to cap latency at < 200 ms.  
4. **Fallback** – If confidence < 0.7, routed to a human queue in Amazon Connect; otherwise auto‑generated replies from a templated RAG (retrieval‑augmented generation) pipeline using OpenSearch.

**Result**  
- FRT fell from 240 min to **18 min** (+92 % improvement).  
- CSAT rose from 78 % to **88 %**.  
- Cost per ticket dropped from $3.50 to **$1.80**, saving ~$200k annually.

**Learnings & Bar‑raiser signals**  
I took full ownership of the end‑to‑end pipeline, dove deep into data quality and latency trade‑offs, quantified impact with clear KPIs, and iterated after a failed first deployment that mis‑classified “refund” intents—prompted tighter validation and continuous monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
