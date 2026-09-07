---
qid: ing_aa95a2d4bc__faang__local
question: 'Explain: Design an agent that can take actions in a spreadsheet ("insert
  a pivot table of Q3 sales by region") - orchestration, tools, and failure handling.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 513
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:21:01-05:00'
sources: []
---

**Clarify**  
You’re asked to design an autonomous agent that can execute spreadsheet commands (e.g., “insert a pivot table of Q3 sales by region”). I’ll assume the agent has read/write access to the workbook, knows the schema (sheet names, column types), and can invoke Office APIs or a library like `openpyxl`/`pandas`. The goal is reliability: successful execution or graceful failure.

**Approach**  
1. **Orchestration layer** – a dispatcher that receives natural‑language intents, parses them into structured actions, and queues them.  
2. **Tool layer** – separate modules for each spreadsheet operation (pivot creation, formatting, data extraction). Each tool wraps the underlying API and returns a success flag + result metadata.  
3. **Failure handling** – a retry manager with exponential backoff, fallback to alternative APIs if one fails, and an audit log of every attempt.

**Depth**  
- *Parsing*: Use a lightweight intent recognizer (e.g., spaCy or a small fine‑tuned LLM) that outputs `{action: "create_pivot", source_range: "...", rows: ["Region"], values: ["Sales"]}`.  
- *Pivot Tool*: Call the spreadsheet’s pivot API, validate the resulting table by checking row/column counts and data types. Return `{"status":"ok","pivot_id":123}`.  
- *Complexity*: Each operation is O(n) over the source range; retries add a constant factor.  
- *Trade‑offs*: A fully LLM‑based parser is flexible but slower; rule‑based parsing is faster but brittle.

**Edge Cases**  
- Empty or malformed source ranges → return informative error.  
- Duplicate pivot names → auto‑rename.  
- API rate limits → backoff and queue.  
- Concurrent edits → use optimistic locking (check file hash before writing).

**Optimize & Communicate**  
Iterate by adding a validation step that cross‑checks the generated pivot against the source data, ensuring no loss of rows. Document each module’s contract clearly so downstream teams can unit test independently. Finally, expose an API endpoint (`/execute`) with idempotent semantics, allowing callers to poll for status or receive a webhook on completion. This design balances robustness, clarity, and scalability—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
