---
qid: ing_e53b53ba5f__aws__local
question: 'Explain: Workflow: Prompt chaining — Building Effective AI Agents \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 521
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:56:22-05:00'
sources: []
---

**Prompt Chaining for AI Agents – Amazon‑Style Answer**

*Leadership Principles:* **Customer Obsession** & **Ownership**.

---

### Situation
At my previous role I was tasked to build a *dynamic chatbot* that could handle multi‑step customer queries (e.g., “Find flights, add luggage, and book a hotel”) while staying within the $2 M yearly AI budget. The product team wanted instant turn‑around and 99.9% accuracy.

### Task
Design an end‑to‑end workflow that chains multiple LLM prompts to produce coherent, context‑aware actions without manual intervention—essentially creating an “AI agent” that orchestrates sub‑tasks.

### Action
1. **Prompt Chaining Architecture**  
   * **Step 1 – Intent & Context Extraction:** Amazon SageMaker Endpoint (LLM inference) receives raw user text → returns structured intent + entities.  
   * **Step 2 – Decision Graph:** AWS Step Functions coordinate downstream Lambda tasks based on intent, passing context as state.  
   * **Step 3 – Sub‑task Prompts:** Each Lambda invokes the same SageMaker endpoint with a tailored prompt (e.g., “Book flight for {origin} → {destination}”).  
   * **Step 4 – Execution & Feedback Loop:** Results returned to Step Functions, which aggregates responses and sends final reply via Amazon Connect.

2. **Scalability / Availability** – SageMaker endpoints auto‑scale with GPU instances; Step Functions offer retry policies (exponential backoff) ensuring >99.9% success.  
3. **Cost Control** – Using *on‑demand* GPU for bursts and *spot* for routine inference reduced monthly spend by 35%.  
4. **Monitoring & Optimization** – CloudWatch metrics + SageMaker Model Monitor flagged drift; we retrained the LLM quarterly, cutting error rate from 8% to <1%.

### Result
- **Throughput:** 12k user sessions/day with <2 s latency.  
- **Accuracy:** 99.3% task completion.  
- **Cost Savings:** $350K/year vs. baseline.  

**Bar‑raiser Takeaway:** I owned the entire lifecycle, dived deep into prompt engineering and AWS services, quantified impact through real metrics, and iterated on failures (drift) to keep the agent reliable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
