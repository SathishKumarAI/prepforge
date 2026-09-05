---
qid: ing_5090c488e9__star__local
question: 'Explain: Types of Prompt Injection — Llm Security'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 310
total_tokens: 545
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:09:26-05:00'
sources: []
---

**Situation** – In my last role as a security engineer for an AI‑driven customer support platform, we discovered that our GPT‑based chatbot was leaking confidential ticket data when certain user inputs were sent.

**Task** – I had to identify the attack vectors, mitigate them, and harden our prompt handling so no sensitive information could be exposed through prompt injection.

**Action** – First, I mapped the three main types of prompt injection we faced: (1) *Direct injection* where users append malicious instructions directly to the prompt; (2) *Indirect injection* that manipulates contextual variables like user ID or session tokens; and (3) *Backdoor injection* exploiting hidden prompts in the training data. I implemented a layered defense: input sanitization with a regex whitelist, context‑sanitizing middleware that strips session identifiers from user messages, and a prompt‑guard model that flags suspicious instruction patterns before they hit the LLM. Additionally, I introduced a “prompt template” system to enforce strict boundaries between user content and system instructions.

**Result** – After deployment, we saw a 97 % drop in unintended data leaks, and no security incidents over six months. The exercise also taught me that prompt injection isn’t just about malicious strings; it’s a broader class of attacks that require both input filtering and architectural controls to defend effectively.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
