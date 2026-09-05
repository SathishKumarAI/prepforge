---
qid: ing_e855bb1ae5__star__local
question: 'Explain: Write scenarios in Claude Code — AI Agent Testing and Evaluation
  | LangWatch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 353
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:12:51-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we were launching a new personal‑budgeting chatbot built on Claude. The product had to pass strict regulatory compliance and handle sensitive user data, so our QA team needed a robust way to simulate real‑world conversations before production.

**Task:**  
I was tasked with designing an automated scenario suite in Claude Code that could test the agent’s intent recognition, response accuracy, privacy handling, and fallback behavior across thousands of edge cases, all while keeping runtime under 10 minutes per run.

**Action:**  
First, I mapped out high‑level user journeys (e.g., “Create a budget,” “Report a suspicious transaction”) and broke them into granular sub‑scenarios. Using Claude Code’s `@scenario` decorator, I scripted each conversation as a sequence of prompts and expected replies, injecting random data via the built‑in `faker()` library to mimic diverse user profiles. I leveraged the `assert_response_contains()` helper to validate key compliance phrases and added a `timeout` guard to catch hangs. To keep test cycles fast, I grouped scenarios into parallel batches with the `@parallel` directive and integrated them into our CI pipeline via GitHub Actions, so every push triggered a full run.

**Result:**  
The scenario suite covered 4,500 distinct conversation paths and reduced manual QA effort by 70 %. We caught two critical privacy leaks before release, preventing potential regulatory fines. I learned that structuring Claude Code tests with clear intent blocks and data‑driven inputs dramatically boosts both coverage and maintainability in AI agent evaluation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
