---
qid: ing_9f19394dc9__aws__local
question: 'Explain: Q12: Explain the ReAct pattern — Question Bank'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 379
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:24:24-05:00'
sources: []
---

**ReAct Pattern (React + Act)**  
*Leadership Principles:* **Customer Obsession**, **Ownership**

**Situation** – While building a voice‑assistant for an e‑commerce platform, we needed the model to answer factual questions *and* take actions (e.g., add items to cart).  

**Task** – Implement a system that lets the LLM both reason and execute safely without manual oversight.  

**Action** – I designed a **ReAct** pipeline:  
1. **React** phase: the model generates a natural‑language *reason* followed by an *action* token (e.g., `ADD_TO_CART(product_id)`).  
2. **Act** phase: an action executor validates the intent, calls the appropriate AWS service (Amazon DynamoDB for cart state, Amazon Lex for dialog flow), and returns the outcome to the model as new context.  
3. The loop repeats until a terminal response is produced.  

I wrapped this in a **Step Functions** state machine to guarantee idempotency, auditability, and retry logic. Metrics: latency < 200 ms per turn (95th percentile) and 99.9% success rate on cart actions—up from 82% before ReAct.  

**Result** – Customer satisfaction scores rose by **12 points**, and manual intervention dropped to zero.  
**Learnings** – The key was treating the LLM as a *reasoner* rather than an oracle; by separating reasoning from execution we gained control, auditability, and measurable performance—exactly what Amazon expects from an owner‑driven engineer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
