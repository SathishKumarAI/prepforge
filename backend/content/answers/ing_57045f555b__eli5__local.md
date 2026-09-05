---
qid: ing_57045f555b__eli5__local
question: 'We send you a take-home: build a RAG service over this corpus, we say roughly
  six hours. What do you do before writing any code?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 236
total_tokens: 414
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:54:42-05:00'
sources: []
---

Before I even touch a key, I treat the project like a recipe before cooking.  
First, I read the “menu” (the corpus) to know what ingredients—text, size, format—are available. Then I ask: **What dish do we want?** In RAG terms, that means deciding the user’s goal, how fast answers must be, and which retrieval and generation models fit those limits.  
Next, I sketch a simple flowchart (the “cookbook”): fetch relevant passages → feed them into the language model → return an answer. I pick concrete tools—like choosing between a well‑known kitchen appliance—and write quick tests to see they work on a tiny sample.  
Finally, I set up the workspace: install libraries, create a virtual environment, and write a “to‑do” list of steps. Once that plan is in place, coding feels like following an organized recipe rather than guessing while stirring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
