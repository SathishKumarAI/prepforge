---
qid: ing_23e1d5a9e1__star__local
question: This coding round is AI-assisted - use Cursor/Claude however you like. How
  do you approach it, and what do you think we're evaluating?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 344
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:40:51-05:00'
sources: []
---

**Situation:**  
When I was preparing for my last technical interview at a fintech startup, the hiring team told us we’d have an AI‑assisted coding round. They wanted to see how we leveraged tools like Cursor and Claude while still writing clean, maintainable code. The challenge involved building a small REST API in Go that performed data validation and persisted results to PostgreSQL.

**Task:**  
I needed to demonstrate rapid development with the AI assistant, keep my own logic clear, and produce code that passed all unit tests within 45 minutes.

**Action:**  
First I opened Cursor, fed it the problem statement, and asked for a skeleton of the API. While the AI generated the basic router and handler stubs, I manually reviewed each line, adding type safety checks and context‑based timeouts. Next, I switched to Claude to draft complex business logic (e.g., currency conversion rules). After Claude’s suggestions, I refactored the code to use Go interfaces so the tests could mock external services. Throughout, I used Cursor’s inline linting to catch style violations and kept a commit log to show incremental progress.

**Result:**  
I finished 12 minutes early, submitted clean code with zero lint errors, and my solution passed all tests with a 99.9% coverage score. The interviewers praised my blend of AI efficiency and human oversight; I learned that the evaluation focused on how effectively you can augment your own skills with AI while maintaining code quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
