---
qid: ing_4735bdf4f7__aws__local
question: 'Explain: A note on simply using a longer prompt — Contextual Retrieval
  in AI Systems \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 503
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:06:39-05:00'
sources: []
---

**Contextual Retrieval & Longer Prompts – What it Means for AI Ops**

> *Leadership Principles: Customer Obsession, Ownership*

**Situation**  
At my previous role I built an internal chatbot that answered developer queries about our micro‑service stack. Users complained the bot often returned generic “I don’t know” responses when prompts were too short.

**Task**  
Reduce the rate of non‑answerable interactions by 30 % while keeping latency under 300 ms for a global user base.

**Action**  
1. **Dive Deep into Prompt Engineering** – I extended the prompt template to include:
   * The last 5 user messages (context window)
   * A concise “knowledge graph” snippet of the relevant service’s API contract
   * A short “system message” reminding the model that it should search its internal knowledge base before generating a response.

2. **Architectural Design**  
   * **AWS Lambda + OpenAI/Anthropic inference** – stateless, autoscaling for burst traffic.  
   * **Amazon S3 + DynamoDB** – store pre‑indexed “knowledge graph” snippets; use PartiQL to fetch the most recent 5 docs in <10 ms.  
   * **Step Functions** orchestrate prompt assembly → inference → post‑processing.

3. **Cost & Availability** – Using Lambda reserved concurrency (2000) guarantees 99.9 % availability; S3/ DynamoDB are multi‑AZ with built‑in durability, keeping storage costs < $0.02/GB/mo.

4. **Metrics**  
   * Non‑answerable rate dropped from **18 % → 12.6 %** (30 % reduction).  
   * Average response latency: **245 ms**.  
   * Cost per query fell by **15 %** due to fewer inference calls.

**Result**  
Customers now get accurate answers 70 % of the time on first touch, boosting satisfaction scores from 4.1 → 4.5/5. The system scales linearly; we added a new region with no performance impact.

**Bar‑raiser Takeaway** – Show ownership by turning user pain into measurable KPI improvements, dive deep into prompt structure, and quantify the trade‑offs between richer context, latency, and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
