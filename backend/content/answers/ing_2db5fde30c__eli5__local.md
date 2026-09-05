---
qid: ing_2db5fde30c__eli5__local
question: 'Q51: Your agent takes 47 LLM calls to complete a task that should take
  5. How do you debug this?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 236
total_tokens: 410
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:48:05-05:00'
sources: []
---

Imagine your AI is like a chef trying to make a five‑minute soup but keeps asking the stove for heat 47 times. First, check the recipe (your prompt) – maybe it’s too vague or contains hidden “extra steps” that trigger extra calls. Next, look at the kitchen layout (the code that sends requests). Are you sending one request for every single ingredient instead of batching them? Then, watch the stove’s behavior (the LLM’s responses). If the model keeps asking for clarification, you’re giving it a confusing question. Finally, use a “debug log” – record each call and its cost so you can spot patterns.

**Unavoidable terms:**  
- **LLM call**: One request sent to the language model that returns an answer.  
- **Prompt**: The text you give to the LLM to ask it something.  

By tightening your prompt, batching calls, and logging each step, you’ll cut those 47 calls down to the five you actually need.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
