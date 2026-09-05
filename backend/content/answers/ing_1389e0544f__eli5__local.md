---
qid: ing_1389e0544f__eli5__local
question: When should you split an agent into sub-agents, and what do you pass between
  them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 274
total_tokens: 440
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:06:24-05:00'
sources: []
---

Think of a big kitchen crew preparing a fancy banquet. The head chef (the main agent) decides the menu and overall timing. When dishes get complex—say one is a soufflé that needs constant attention while another is a roast that can simmer—you split the work: you give each cook its own “sub‑agent” with a clear job.

**When to split?**  
- The task has distinct parts that need different skills or priorities.  
- One part would block progress of another if handled by one person alone.  
- You want to keep the system fast and reliable, so each sub‑agent can run in parallel.

**What do you pass between them?**  
- **Observations** (what each sees: ingredients, temperatures).  
- **Goals or priorities** (the chef’s overall plan).  
- **Action plans or partial results** (e.g., “preheat oven to 350°F”).  

Each sub‑agent gets the same big picture (the menu) but focuses on its slice of work. When all slices finish, they’re combined back into a single finished meal—just like your AI system’s final decision.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
