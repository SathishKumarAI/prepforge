---
qid: ing_aa2409ffaa__eli5__local
question: 'Explain: Prompt injection and RAG poisoning — MemoryGraft: Persistent Compromise
  of LLM Agents via Poisoned Experience Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 244
total_tokens: 416
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:07:20-05:00'
sources: []
---

Imagine a smart robot that learns by reading stories it’s told every day.  
**Prompt injection** is like someone slipping a hidden note into the story—when the robot reads it, the note tricks the robot into acting on false instructions, even though the note was never part of the original tale.  

**RAG (Retrieval‑Augmented Generation) poisoning** is a subtler trick: the robot’s “memory bank” stores snippets from many stories. A bad actor injects a few misleading snippets into that bank. Later, when the robot searches its memory for answers, it pulls in those poisoned snippets and uses them to generate wrong or harmful responses, as if the whole story were true.

**MemoryGraft** is the name given to this long‑term sabotage: once the poisoned snippets are in the memory bank, every time the robot retrieves information, the compromise sticks around. It’s like a plant that has been grafted with a toxic root—no matter how many fresh stories you feed it, the toxin keeps spreading through its memories.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
