---
qid: ing_4d1dd326c0__faang__local
question: 'Explain: Case Study 03: Customer Support Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 493
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:43:48-05:00'
sources: []
---

**Clarify**

We’re asked to explain *Case Study 03: Customer Support Agent* in the context of an AI system.  
Assumptions to confirm:  
1. The agent is a virtual chatbot that handles first‑line support for a SaaS product.  
2. It must triage issues, provide self‑service answers, and hand off to humans when needed.  
3. Success metrics are resolution time, CSAT, and cost per ticket.

**Approach**

1. **Define the workflow** – intake → intent detection → knowledge‑base lookup → response or escalation.  
2. **Select core models** – NLU (BERT/DistilBERT) for intent, slot filling; retrieval‑augmented generation (RAG) for answers.  
3. **Integrate monitoring** – track confidence scores and fallback rates.

**Depth**

- *Intent & Slot Extraction*: fine‑tune a transformer on labeled support logs; use a threshold to decide when the bot is confident.  
- *Answer Generation*: combine a retrieval layer (FAISS over KB) with a lightweight GPT‑2 encoder–decoder; the generator conditions on the retrieved context, yielding factual, concise replies.  
- *Escalation Logic*: if confidence < 0.6 or user says “human,” hand off to live agent via API, preserving conversation history.  
- *Evaluation*: compute average resolution time (Δt), CSAT from post‑ticket surveys, and cost per ticket (bot × $0 + human × hourly rate).  

**Edge Cases**

- Ambiguous user input → ask clarifying questions.  
- KB out‑of‑date → fallback to “I’ll forward this.”  
- Multi‑intent queries → chain intents sequentially.

**Optimize & Communicate**

- **Latency**: cache frequent intent embeddings; serve RAG with GPU acceleration.  
- **Explainability**: log top retrieved documents for audit.  
- **Iterative improvement**: A/B test new model versions, track lift in CSAT and drop in cost.  

Narrate progress as: *“We first scoped the problem… built a baseline… identified bottlenecks… iterated with data‑driven changes—resulting in X% faster resolution and Y% cost savings.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
