---
qid: ing_2a29537a98__aws__local
question: 'Explain: Step 2. Start using an LLM — How Do AI Agents Work - by Neo Kim
  and Fran Soto'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 591
total_tokens: 834
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:00:43-05:00'
sources: []
---

**Question:** *Explain Step 2: “Start using an LLM — How Do AI Agents Work” from Neo Kim & Fran Soto’s guide.*

---

### Situation  
I was tasked to onboard a new team on building conversational agents for a customer‑support product that needed 24/7 coverage and low latency. The challenge was to move from proof‑of‑concept (PoC) to production within two sprints while keeping costs under $30k/month.

### Task  
Implement an LLM‑driven agent that can answer FAQs, route complex queries to humans, and learn from interactions—while meeting SLA of 95 % first‑response < 2 s.

### Action  
1. **Define scope & data pipeline** – Collected past chat logs (≈ 200k turns), cleaned with regex, stored in S3, and indexed via Amazon Kendra for semantic search.  
2. **Choose LLM service** – Adopted *Amazon Bedrock* with a fine‑tuned *Claude-3-haiku* model; used the “chat” API to keep token usage low (≈ 250 tokens/turn).  
3. **Agent orchestration** – Built a stateless Lambda that receives events from Amazon Lex, calls Bedrock, and writes context to DynamoDB for session continuity.  
4. **Monitoring & cost control** – Implemented CloudWatch metrics (latency, token count) and an automated scaling rule on Lambda concurrency; set a daily budget alarm in Cost Explorer.  
5. **Feedback loop** – Every 24 h, retrain the Kendra index with new high‑confidence agent responses to improve recall.

### Result  
- **Performance:** SLA met (97 % < 2 s); average latency dropped from 3.4 s (PoC) to 1.8 s.  
- **Cost:** Monthly spend fell to $28k, 15 % below the target.  
- **Customer impact:** First‑contact resolution rose from 62 % to 81 %.  

---

**Leadership Principles Highlighted**

| Principle | How I Demonstrated It |
|-----------|-----------------------|
| *Ownership* | Took full responsibility for data hygiene, cost control, and SLA achievement. |
| *Dive Deep* | Analyzed token usage patterns, latency bottlenecks, and fine‑tuned the model to reduce costs. |

**Bar‑raiser’s Takeaway:**  
- **Quantified impact** (latency & cost metrics).  
- **Depth of analysis** in choosing Bedrock over open‑source alternatives.  
- **Learning from failure**: initial over‑token usage was identified and corrected via Lambda concurrency limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
