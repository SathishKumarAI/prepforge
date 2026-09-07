---
qid: ing_45f60ace6d__faang__local
question: 'Explain: Problem statement — Customer Support Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 488
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:26:34-05:00'
sources: []
---

**Clarify**  
*Problem:* Build an AI‑powered customer support agent that can understand user queries, retrieve relevant knowledge base (KB) articles or generate responses, and hand off to a human when needed.  
*Assumptions to confirm:* 1) The KB is structured (FAQs, product docs, logs). 2) We have access to historical chat transcripts for training. 3) Latency budget < 500 ms per user message. 4) SLA: 95 % of interactions resolved without escalation.

**Approach**  
1. **Intent & Entity Extraction** – NLU model (BERT‑based or spaCy pipeline).  
2. **Knowledge Retrieval** – Dense vector search over KB embeddings + keyword fallback.  
3. **Response Generation** – Retrieval‑augmented generation (RAG) with a fine‑tuned GPT‑like decoder; fallback to canned templates for safety.  
4. **Escalation Logic** – Confidence threshold & human‑in‑the‑loop flagging.

**Depth**  
- *NLU:* Fine‑tune RoBERTa on labeled intents (≈ 30 classes). Accuracy ~ 92 %.  
- *Retrieval:* FAISS index over 100k KB docs; latency < 50 ms.  
- *RAG:* Encode query + top‑5 docs, generate up to 150 tokens. Use beam search with length penalty.  
- *Escalation:* If confidence < 0.6 or user repeats after 3 turns → flag.

**Edge Cases**  
- Ambiguous queries → ask clarifying question.  
- Out‑of‑scope topics → direct to human.  
- KB drift → periodic re‑embedding.  
- Privacy: mask PII before generation.

**Optimize & Communicate**  
- Profile each component; replace heavy transformers with distilled models if latency exceeds budget.  
- Cache recent embeddings for hot queries.  
- Document trade‑offs: higher recall ↔ longer responses, stricter thresholds → fewer escalations but risk of errors.  

*Result:* A scalable, low‑latency AI agent that resolves ~ 80 % of tickets autonomously while maintaining a graceful handoff path.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
