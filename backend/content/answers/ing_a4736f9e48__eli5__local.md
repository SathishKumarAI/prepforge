---
qid: ing_a4736f9e48__eli5__local
question: Explain self-attention step by step. What exactly are Q, K, and V?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 314
total_tokens: 479
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:59:04-05:00'
sources: []
---

Think of a classroom where every student (a word) wants to talk but can only speak after listening to the others.  
**Self‑attention** is the teacher’s way of letting each student decide how much of what everyone else says matters to its own reply.

1. **Create three lists from the same input** – for each student you make a *Question* (Q), a *Key* (K), and a *Value* (V).  
   - **Q** is what the student asks: “What do I need to know?”  
   - **K** is how every other student describes themselves: “I am talking about this topic.”  
   - **V** is the actual content they share.

2. **Match Q with K** – you multiply each student’s Q by every other student’s K, then scale it. The result tells how relevant that other student’s topic is to your question (a score).

3. **Turn scores into weights** – using a softmax, these scores become percentages that sum to 1.

4. **Weight the V’s** – multiply each value by its weight and add them up. This gives you a new sentence for each student, now informed by the whole class in a balanced way.

So Q, K, and V are simply three different “views” of the same words that let every word look around, pick what matters, and update itself accordingly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
