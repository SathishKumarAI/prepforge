---
qid: ing_32612c389a__eli5__local
question: 'Explain: The threat of indirect prompt injection — AI threats in the wild:
  The current state of prompt injections on the web'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 270
total_tokens: 441
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:55:42-05:00'
sources: []
---

Imagine a smart assistant as a helpful chef who follows your recipe. A *prompt* is that recipe: the instructions you give.  
An *indirect prompt injection* happens when someone slips a secret ingredient into another dish—say, a spice mix hidden in a salad—that the chef later uses to cook your main meal without noticing. In AI terms, an attacker injects malicious text into a seemingly harmless part of a website or app (like a comment box). The AI, thinking it’s just reading user input, incorporates that hidden instruction into its responses or decisions.  

This threat is already showing up online: attackers embed harmful prompts in social‑media posts, forum replies, or even search queries. When the AI processes these inputs, it can produce disallowed content, reveal private data, or act on instructions it shouldn’t have followed. The problem grows because most AI systems treat every user text as a potential command, so any hidden prompt can slip through unnoticed.  

The current state? Many public platforms are patching their input handling, but the sheer volume of user‑generated content means indirect injections remain a real risk in the wild.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
