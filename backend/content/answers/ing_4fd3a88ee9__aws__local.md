---
qid: ing_4fd3a88ee9__aws__local
question: 'Explain: Step 7. Define an agent — How Do AI Agents Work - by Neo Kim and
  Fran Soto'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 514
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:25:25-05:00'
sources: []
---

**Answer (Amazon Style)**  

> *Question:* Explain Step 7—“Define an Agent” from Neo Kim & Fran Soto’s “How Do AI Agents Work?”

### **Situation**
In my last role as a Solutions Architect for a FinTech startup, we were building a conversational bot that could autonomously execute trade orders. The team needed a clear definition of the *agent* to keep the project on track.

### **Task**
I had to translate the abstract concept from Kim & Soto into a concrete architecture: identify what “agent” means in our context, and design its core components so it can observe, decide, and act reliably at scale.

### **Action**  
1. **Customer Obsession + Ownership** – I mapped the agent’s responsibilities to user journeys (order placement, risk checks).  
2. **Dive Deep** – Decomposed the agent into:  
   * **Perception layer** – Amazon Lex for intent & slot filling.  
   * **Decision layer** – AWS Lambda + Amazon SageMaker Endpoint running a reinforcement‑learning policy.  
   * **Actuation layer** – EventBridge → API Gateway → brokered microservice that commits trades to the exchange.  
3. **Bias for Action** – Implemented a CI/CD pipeline with CodePipeline; automated unit & integration tests (95% coverage).  
4. **Invent & Simplify** – Replaced a monolithic policy model with a lightweight, container‑based inference service on ECS Fargate to cut latency by 40 %.  

### **Result**  
Within 8 weeks we had an end‑to‑end agent that processed 1,200 orders/day with < 50 ms response time, achieving a 99.9 % SLA and reducing manual intervention by 70 %. Post‑mortem logs showed the Lambda policy improved trade accuracy by 12 % over rule‑based baseline.

### **Bar‑Raiser Takeaway**  
- Demonstrated *ownership* of end‑to‑end delivery.  
- Showed *depth* by dissecting perception, decision, and actuation layers.  
- Quantified impact (orders/day, latency, SLA).  
- Learned from early failures: initial monolithic model caused 120 ms latency; switching to Fargate resolved it.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
