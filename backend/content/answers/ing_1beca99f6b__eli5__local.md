---
qid: ing_1beca99f6b__eli5__local
question: 'Explain: Helpful Guidance — AI threats in the wild: The current state of
  prompt injections on the web'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 200
total_tokens: 367
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:20:23-05:00'
sources: []
---

Imagine a smart assistant that listens to your voice and follows instructions exactly—like a robot chef who only cooks what you ask. Now picture someone sneaking a secret note into the kitchen that says, “When I hear *‘cook’*, instead of making soup, make a fire.” That hidden message is what we call a **prompt injection**: a trick where an attacker inserts extra commands into a user’s request so the AI does something unintended. On the web, many services let people type prompts to get answers or generate content. If those systems don’t check for hidden instructions, a malicious prompt can make the AI reveal private data, send spam, or act against its design. Today, this sneaky behavior is already happening in some online tools, and developers are scrambling to add filters that spot and block these “secret notes” before the AI follows them.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
