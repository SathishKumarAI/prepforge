---
qid: ing_8813e936b7__eli5__local
question: 'Explain: Pitfall 14: Defending Wrong Answers — Common Pitfalls'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 352
total_tokens: 514
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:12:00-05:00'
sources: []
---

**Pitfall 14 – “Defending Wrong Answers”**

Imagine you’re a detective who, after finding a clue that points to a suspect, insists the suspect is guilty even though the evidence actually points elsewhere. In AI, this happens when a model keeps explaining or justifying an answer that’s factually wrong. It’s like giving a recipe for chocolate cake but insisting it’s actually a pizza—because the system feels “right” about its own logic.

Why does it happen? The model is trained to *continue* what it started, not to check if what it says makes sense. Once it writes a statement, it tends to elaborate on that statement instead of asking “is this true?” or looking for contradictions.

**What to watch out for**

1. **Repetition over correction** – the AI will keep repeating the wrong idea until you stop it.  
2. **Uncertainty masking** – it may add qualifiers (“maybe”) but still lean toward the false claim.  
3. **Confidence illusion** – it sounds sure, even if the facts are off.

**How to avoid it**

- Ask follow‑up questions that probe the *source* or *evidence*.  
- Encourage the model to say “I’m not sure” when it can’t find a reliable reference.  
- Check any claim against an external source before trusting it.

In short, don’t let the AI’s confidence fool you; always double‑check its explanations, just as a detective would verify evidence before declaring guilt.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
