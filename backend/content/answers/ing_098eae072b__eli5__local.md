---
qid: ing_098eae072b__eli5__local
question: Design the tool schema for a coding agent. How many tools, and how do you
  handle tool errors?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 278
total_tokens: 446
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:50:43-05:00'
sources: []
---

Think of your coding agent like a chef in a kitchen that has a set of specialized tools—pan, whisk, knife, oven—each chosen for a particular task.  
**Tool schema design:**  
1. **Core tools (3‑5)**:  
   * “ReadFile” – fetches code snippets.  
   * “RunTest” – executes unit tests.  
   * “SuggestFix” – proposes changes when a test fails.  
   * Optional extras (e.g., “SearchDocs”, “FormatCode”) can be added as needed, but keep the list small so the chef never gets overwhelmed.  

2. **Handling errors**:  
   * When a tool returns an error (e.g., file not found or test crash), treat it like a burnt dish: log the problem, ask for clarification, and try an alternative tool (maybe “ReadFileFromBackup”).  
   * If all alternatives fail, the chef (agent) stops the current recipe and reports the issue to the user.  

By limiting tools to the most essential ones and giving clear fallback steps, the agent stays focused, learns from mistakes, and keeps cooking up correct code.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
