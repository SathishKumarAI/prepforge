---
qid: ing_9d31dfc77c__faang__local
question: 'Q: How do you protect a database tool from "Agent-driven SQL Injection"?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 500
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:49:39-05:00'
sources: []
---

**Clarify**  
*Problem*: An “agent” (e.g., a chatbot or automated script) can generate arbitrary SQL that may exploit injection vulnerabilities when passed through our database‑tool UI.  
*Assumptions to confirm*:  
1. The agent only has read/write access via the tool’s API, not raw DB credentials.  
2. The tool uses parameterized queries internally for normal users.  
3. We can modify both client‑side validation and server‑side query construction.

**Approach**  
1. Harden the API layer with strict request schemas.  
2. Enforce role‑based whitelisting of SQL constructs.  
3. Use a sandboxed execution engine that rewrites queries into safe ASTs before hitting the DB.  

**Depth**  
*API validation*: Require JSON payloads matching an explicit schema (e.g., `{action:"SELECT", table:"users", columns:["id","name"], where:{age:{gt:18}}}`). Reject any raw SQL strings; flag unknown fields.  
*Whitelisting*: Maintain a map of allowed tables, columns, and operators per role. At runtime, parse the AST, cross‑check against this map, and reject if anything is out of bounds.  
*Sandbox rewriting*: Convert the validated AST into parameterized statements (`SELECT id,name FROM users WHERE age > $1`) using a prepared statement library. This guarantees that any user input becomes bound parameters only.  
*Audit & rate‑limit*: Log every query, monitor for abnormal patterns (e.g., frequent `UNION` or subquery usage), and throttle suspicious clients.

**Edge Cases**  
- Malformed JSON or missing fields → 400 Bad Request.  
- Agent attempts dynamic table names → rejected by whitelist.  
- Complex joins that bypass the schema → flagged as “unsupported operation.”  
- Legitimate advanced analytics queries → require an elevated role and manual approval.

**Optimize & Communicate**  
*Improvements*: Introduce a lightweight SQL parser (e.g., sqlparser) to catch obfuscated injection patterns; add machine‑learning anomaly detection on query latency.  
*Narration*: “By moving all user input through a strict schema, enforcing a whitelist, and converting everything into parameterized statements, we close the attack surface that an agent could exploit while preserving legitimate functionality.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
