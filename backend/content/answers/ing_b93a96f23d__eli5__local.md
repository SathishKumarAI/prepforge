---
qid: ing_b93a96f23d__eli5__local
question: What is WER, and why is it a misleading metric for a voice product?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 255
total_tokens: 419
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:30:53-05:00'
sources: []
---

**WER – Word Error Rate**

Imagine you’re listening to someone read a sentence aloud while you write down what they say. If the person says “The quick brown fox jumps,” but you jot down “The quik brown foks jumps,” your mistakes are counted as *errors*. WER is just that: the percentage of words you got wrong (insertions, deletions, substitutions) compared to the correct transcript.

**Why it can mislead for a voice product**

Think of a customer using a voice‑assistant app. Even if 95 % of the words are right (WER = 5 %), that still means half a sentence is garbled—enough to change intent or make the assistant refuse the command. Conversely, a high WER might hide the fact that the mistakes are in filler words (“uh”, “um”) that don’t affect understanding. So WER tells you *how many* words were wrong but not *which* ones matter for real‑world use. That’s why developers look at higher‑level metrics like task success or user satisfaction instead of relying solely on WER.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
