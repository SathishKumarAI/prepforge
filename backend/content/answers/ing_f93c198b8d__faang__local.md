---
qid: ing_f93c198b8d__faang__local
question: 'Explain: The Interview Question — Customer Support Automation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 522
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:19:14-05:00'
sources: []
---

**Clarify**  
We’re asked to explain the “Customer Support Automation” interview question—typically a prompt like *“Design an AI‑powered system that automatically handles common customer queries.”*  
Assumptions:  
1. The product has a high volume of repetitive tickets (billing, password reset).  
2. SLA goals are 90 % first‑reply < 5 min and resolution < 30 min.  
3. The system must integrate with existing ticketing APIs and preserve data privacy.

**Approach**  
1. **Data pipeline** – ingest live chat logs + historical tickets into a vector store.  
2. **Intent classification** – fine‑tune a transformer (e.g., BERT) on labeled intents.  
3. **Response generation** – use retrieval‑augmented generation: retrieve top‑k similar past answers, then generate a concise reply via GPT‑style decoder.  
4. **Fallback & escalation** – if confidence < 0.75 or intent is “complex,” hand off to human agent and log the context.  
5. **Continuous learning** – retrain every 24 h on newly resolved tickets; use reinforcement signals from agent feedback.

**Depth**  
- **Latency**: 200 ms inference using ONNX‑optimized transformer + GPU batch size 64 → meets SLA.  
- **Throughput**: 10k queries/min with auto‑scaling on Kubernetes.  
- **Data privacy**: all embeddings are hashed; no raw text stored beyond the session.  
- **Evaluation**: precision@1 for intent (≥ 92 %) and BLEU score for responses (≥ 0.75) against a held‑out set.

**Edge Cases**  
- *Novel intents*: fallback to human, then add new label.  
- *Noisy input*: apply robust preprocessing (spell‑check, slang mapping).  
- *Privacy violations*: guardrails filter PII before generation.

**Optimize & Communicate**  
I’d iterate on the embedding dimension (reducing from 768 to 256) to cut memory by 50 % without hurting recall. I’d also propose a lightweight rule‑based layer for high‑frequency FAQs, reducing model load. While presenting, I’d walk through the flow diagram, justify each architectural choice with SLA targets, and finish by outlining metrics we’ll monitor post‑deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
