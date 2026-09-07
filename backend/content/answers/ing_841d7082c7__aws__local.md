---
qid: ing_841d7082c7__aws__local
question: 'Explain: Memory and context management — Agents And Tool Use'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 451
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:23:46-05:00'
sources: []
---

**Situation (S)** – While leading a cross‑functional team to build an AI‑driven customer support chatbot for a retail client, we discovered that the model’s response quality dropped after 8–10 turns because it lost context and repeatedly queried the same knowledge base.

**Task (T)** – My goal was to design a scalable memory & context management layer that preserved dialogue state across sessions, reduced redundant API calls, and improved accuracy by at least 15 %.

**Action (A)**  
1. **Ownership & Dive Deep:** I scoped the problem, measured baseline latency (350 ms per turn) and error rate (22 % of replies contained duplicated facts).  
2. **Design:** Implemented a two‑tier context store:  
   * **Short‑term memory** – Redis‑cluster on AWS ElastiCache for 5 s TTL to hold recent tokens.  
   * **Long‑term memory** – DynamoDB with PartiQL for structured FAQ and policy data, indexed by intent & user ID.  
3. **Tool Use:** Created a Lambda “context‑enrich” microservice that merges Redis snapshots with DynamoDB lookups before passing the prompt to an OpenAI GPT‑4 model via API Gateway.  
4. **Cost & Availability:** Leveraged Spot Instances for Lambda, reserved capacity for ElastiCache, and multi‑AZ DynamoDB to keep 99.9 % uptime while keeping monthly spend < $1k.

**Result (R)** – Within two sprints we saw a **17 % lift in F1 score**, latency dropped to 180 ms, and API calls per session fell from 12 to 4, cutting cloud costs by 30 %. The system now scales to 200K concurrent users with predictable SLAs.  

**Bar‑raiser notes:** Demonstrated *ownership* (led the whole stack), *deep dive* into metrics, quantified impact, and learned from early failures by iterating on the memory tier.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
