---
qid: ing_fd29efac73__eli5__local
question: There's a line of work claiming in-context learning is implicit gradient
  descent. What's the claim, what's the evidence, and does it change what you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 231
total_tokens: 408
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:15:44-05:00'
sources: []
---

**The Claim**

Think of a language model as a very large “recipe book.” When you give it a few example sentences (the *context*), it uses those to guess the next word. Some researchers say that this guessing is like a tiny, automatic *gradient descent* step—a way the model quietly nudges itself toward a better answer just by seeing the examples.

**The Evidence**

They ran experiments where they compared the model’s predictions after adding examples with what you would get if you actually tweaked the internal weights using gradient descent on those same examples. The patterns lined up: the change in the output matched the tiny weight updates that gradient descent would produce, even though no real training happened.

**Does It Change What You Do?**

Not really. Knowing this is more a curiosity than a new tool. It tells us that prompting can *mimic* learning, but it doesn’t give us a practical shortcut to train models faster or better. So you keep using prompts as usual; the insight mainly helps researchers understand why prompting works.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
