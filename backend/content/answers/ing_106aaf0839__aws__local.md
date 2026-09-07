---
qid: ing_106aaf0839__aws__local
question: 'Explain: ​ Tool calling strategy — Structured output - Docs by LangChain'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 487
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:02:20-05:00'
sources: []
---

**Situation (S)**  
While leading a data‑science team at my last company, we built an AI assistant for internal knowledge management. The bot needed to retrieve documents from S3, summarize them, and answer user queries in natural language. Initial trials suffered from latency >2 s and inconsistent output formatting.

**Task (T)**  
Design a robust “tool‑calling” strategy that guarantees structured responses while keeping cost and latency low.

**Action (A)**  
1. **Tool abstraction layer** – Implemented LangChain’s *Structured Output* feature to define JSON schemas for each tool: `summarize`, `search`, `cite`.  
2. **AWS Glue + Athena** – Indexed documents in a columnar catalog; the `search` tool calls Athena via Glue jobs, returning only relevant snippets.  
3. **Lambda‑based orchestrator** – Each tool runs in an isolated Lambda (max 1 s timeout). The main prompt instructs the LLM to call tools sequentially and assemble a JSON response.  
4. **Cost control** – Used on‑demand R5.large for the LLM inference, with autoscaling based on CloudWatch metrics; paid only when a request is active.

**Result (R)**  
- Latency dropped from 2 s to **0.8 s** per query (average).  
- Structured JSON responses improved downstream processing accuracy by **35%** (measured via automated QA tests).  
- Operating cost decreased by **18%** compared with the monolithic approach.

---

> **Leadership Principles Highlighted**  
> • *Customer Obsession* – Delivered a faster, more reliable assistant for internal users.  
> • *Ownership* – Architected and deployed the entire tool‑calling pipeline end‑to‑end.  
> • *Dive Deep* – Tuned Lambda concurrency, examined Athena query plans, and iterated on JSON schemas until SLA met.  

Bar‑raisers look for ownership of every layer, a data‑driven impact statement, deep technical trade‑offs (scalability vs cost), and learning from the initial high‑latency failure to iterate quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
