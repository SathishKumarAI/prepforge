---
qid: ing_2ef94292bd__faang__local
question: 'Explain: Failure modes & mitigations — Text To Sql Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 549
total_tokens: 783
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:32:35-05:00'
sources: []
---

**Clarify**  
We’re asked to describe the *failure modes* of an automated “Text‑to‑SQL” agent (e.g., a system that turns natural language questions into SQL queries) and the *mitigations* we’d design. Key assumptions: it runs in production against real databases, users expect correct results or safe failures, and the system is built on top of a large language model with fine‑tuned prompting.

**Approach**  
1. Enumerate failure categories (semantic misinterpretation, schema mismatch, safety violations).  
2. For each, list concrete mitigations (validation layers, sandboxing, user confirmation).  
3. Quantify impact and discuss trade‑offs.

**Depth**  

| Failure Mode | Impact | Mitigation |
|--------------|--------|------------|
| **Semantic drift** – model misreads intent → wrong query | Incorrect data or missing rows | Prompt‑level confidence scoring; fallback to human‑review queue when < 0.8 confidence |
| **Schema mismatch** – column names, types unknown | Syntax errors or type errors | Auto‑discover schema via introspection; embed schema metadata in prompt; use a validation oracle that compiles the query before execution |
| **Injection / privilege abuse** – malicious user crafts “drop table” | Data loss or breach | Enforce a whitelist of allowed statements (SELECT, JOIN only); sandbox DB with read‑only credentials; static code analysis on generated SQL |
| **Performance blow‑up** – cartesian joins or unindexed scans | Timeouts, resource exhaustion | Query optimizer feedback loop: run EXPLAIN and flag high cost; auto‑rewrite to use EXISTS/IN with limits |
| **Out‑of‑scope queries** – user asks for non‑existent metric | System crash | Return a “cannot answer” message + suggested clarifications |

**Edge Cases**  
- Ambiguous phrasing (“most recent”) → test against time‑zone and NULL handling.  
- Multi‑table joins where aliasing conflicts → validate with parser.  
- Extremely large result sets → enforce row limits and pagination.

**Optimize & Communicate**  
We can reduce false negatives by integrating a lightweight rule‑based filter before the LLM, lowering latency. For explainability, expose the generated SQL to users in a “preview” step. Narrate the process: *“First we validate intent; then we map schema; finally we sandbox execution.”* This structured flow demonstrates clear problem decomposition and a defensible architecture—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
