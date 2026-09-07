---
qid: ing_2072bca646__faang__local
question: 'Explain: Scenario 1: Design a customer support chatbot'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 498
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:00:13-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *customer‑support* chatbot that can answer FAQs, handle simple tickets, and hand off to humans when needed. Key assumptions:  

- The bot must support multiple channels (web chat, mobile, email).  
- Response latency < 1 s for 95 % of queries.  
- 90 % of interactions should be resolved without escalation.  
- Data privacy & compliance (GDPR/CCPA) are mandatory.

**Approach**  

1. **Intent & Entity Extraction** – fine‑tuned BERT encoder + CRF layer on labeled support logs.  
2. **Dialogue State Tracker** – RNN with attention to keep context across turns.  
3. **Response Generation** – Retrieval‑based system for deterministic FAQs, fallback to a seq2seq transformer (T5) for open queries.  
4. **Escalation Policy** – rule‑engine + confidence threshold; if confidence < 0.7 or user expresses frustration → handoff to live agent with context bundle.  
5. **Backend** – microservices on Kubernetes, Redis cache for session state, PostgreSQL for ticketing integration.  

**Depth**  

- *Training*: 200k QA pairs, 50k multi‑turn logs; fine‑tune on domain data (≈ 2 h GPU).  
- *Latency*: encoder + decoder < 300 ms per turn; overall < 800 ms with caching.  
- *Scalability*: autoscale horizontally; use gRPC for low‑latency inter‑service calls.  

**Edge Cases**  

- Ambiguous intent → request clarification dialog.  
- Out‑of‑scope queries → route to “unknown” bucket and log for future training.  
- Data breach → automatic logout & audit trail.

**Optimize & Communicate**  

- Continuously A/B test confidence thresholds; adjust to balance resolution vs. escalation.  
- Use reinforcement learning from user feedback to improve intent accuracy.  
- Present metrics (resolution rate, average handle time) in real‑time dashboards for ops.  

This design aligns with FAANG expectations: clear problem framing, systematic architecture, technical rigor, edge‑case handling, and a path for iterative improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
