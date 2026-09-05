---
qid: ing_70a3ebe1d9__eli5__local
question: 'Explain: Vibes-Based Evaluation — Anti Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 244
total_tokens: 400
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:35:00-05:00'
sources: []
---

**Vibe‑Based Evaluation – an anti‑pattern**

Think of building a robot that can recognize faces, like training a child to spot their family members. Instead of giving the robot clear rules (e.g., “count the number of eyes, check the shape of the nose”), you let it judge each picture by how *it feels*—the overall “look” or “vibe.” You might say the face looks “friendly” or “uncertain,” and the robot uses that vague feeling to decide if it’s a friend.

In AI this is called **vibe‑based evaluation**. The model learns from noisy, subjective labels instead of precise, objective metrics (accuracy, precision). It ends up performing well on the data you fed it but fails on new images because it never learned what truly defines “friendliness.”  

The anti‑pattern: relying on human intuition or unstructured feedback as a stand‑in for rigorous measurement. It’s like judging a book by its cover—looks good now, but the story might be wrong later.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
