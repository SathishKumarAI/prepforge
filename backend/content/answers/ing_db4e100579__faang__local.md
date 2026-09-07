---
qid: ing_db4e100579__faang__local
question: 'Explain: Putting it together: a bank support agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 482
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:08:14-05:00'
sources: []
---

**Clarify**  
The question asks for a high‑level design of an *AI‑powered support agent* that banks can deploy for customer service (e.g., inquiries, transactions, compliance). I’ll assume:  
1) The system must handle natural language queries from multiple channels (chat, email, voice).  
2) It should integrate with core banking APIs (balance, transfers, fraud checks).  
3) Regulatory compliance and data privacy are mandatory.  

**Approach**  
1. **Front‑end layer:** Unified channel adapter → NLP intent classification + entity extraction.  
2. **Core service:** Dialogue manager that maps intents to workflow orchestrators calling banking APIs.  
3. **AI engine:** Retrieval‑augmented generation (RAG) for knowledge base answers; reinforcement learning from human‑in‑the‑loop feedback.  
4. **Security & compliance:** End‑to‑end encryption, audit logs, role‑based access, and a “human‑handover” fallback.  

**Depth**  
- *Intent classifier* uses fine‑tuned transformer (BERT/Flan‑T5) with ~95 % accuracy on banking corpus.  
- *Entity extractor* employs span tagging; slots feed into API calls.  
- Dialogue manager maintains state via a finite‑state machine, allowing multi‑turn interactions and context persistence.  
- RAG pulls relevant KB passages (FAQs, policy docs) before generating responses, reducing hallucination risk.  
- All components are stateless microservices in Kubernetes; latency <200 ms for 90th percentile queries.  

**Edge Cases**  
- Ambiguous or malicious inputs → trigger escalation to human.  
- API failures → graceful degradation and retry logic.  
- Data residency limits → local caching with strict TTLs.  

**Optimize & Communicate**  
To improve throughput, cache frequent intent–response pairs in a distributed KV store. For transparency, expose an “explain‑why” endpoint that shows the KB passage used. I would narrate this architecture by walking interviewers through a sample customer query, mapping each step to a component, and highlighting how we balance speed, accuracy, compliance, and scalability—exactly what FAANG teams expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
