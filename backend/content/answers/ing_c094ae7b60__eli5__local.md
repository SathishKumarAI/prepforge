---
qid: ing_c094ae7b60__eli5__local
question: What are RLAIF and Constitutional AI? How does AI feedback replace human
  feedback?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 219
total_tokens: 383
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:41:58-05:00'
sources: []
---

Think of training an AI like teaching a child to draw.  
With **Human‑in‑the‑Loop (HITL)** you give the child a picture and say “good” or “bad.”  
**RLAIF** (Reinforcement Learning from AI Feedback) flips that: the child draws, then another smart helper—an AI judge—looks at the drawing and says how good it is. The first AI learns from that score, just as a child would learn from a teacher’s thumbs‑up or down.

**Constitutional AI** is like giving the child a rulebook (“be honest, be kind”) instead of explicit examples. A separate AI “constitution checker” reads each new drawing and checks it against those rules, giving feedback if it breaks them.

So, instead of humans constantly grading, we use other AIs to score and enforce rules, letting the main model learn faster while still staying on track.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
