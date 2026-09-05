---
qid: ing_7fc5b22462__eli5__local
question: Why is prompt injection considered fundamentally unsolved?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 258
total_tokens: 414
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:59:26-05:00'
sources: []
---

Think of an AI language model as a super‑helpful chef in a kitchen that follows recipes (the training data).  
A *prompt* is the list of ingredients you give it, and the *output* is the dish it serves.  
Prompt injection is like someone slipping a secret note into your ingredient list that says, “add this extra spice.” The chef will obey because it trusts the list, but the note might change the flavor in ways you didn’t intend—maybe turning a salad into a spicy stew or even making it unsafe to eat.

The problem is *fundamental* because:

1. **Every recipe can be tampered with** – there’s no universal way to guarantee that the chef will reject hidden notes.
2. **The model has no built‑in “chef’s conscience.”** It only sees words, not whether they’re malicious or harmless.
3. **Large models learn from billions of examples**, so a tiny trick can be amplified by patterns it has seen before.

Until we give AI a reliable sense of *intent*—like a chef who can ask, “Why do you want this ingredient?”—prompt injection will remain an open challenge.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
