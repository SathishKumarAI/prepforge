---
qid: ing_ac05f5e93d__eli5__local
question: 'Explain: Q: "What is the most dangerous attack on a tool-using agent?"'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 208
total_tokens: 373
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:10:23-05:00'
sources: []
---

Imagine a robot that follows your voice commands to pick up groceries and put them in the fridge. The **most dangerous attack** happens when someone tricks the robot into acting on a fake command that looks real but is harmful—like telling it to open a door for a thief or to spill food on you. In AI, this is called *adversarial manipulation*: an attacker subtly changes the input (the voice, a picture, or text) so the agent believes it’s doing something normal, while actually causing damage.

Think of the agent as a smart assistant that trusts every instruction it receives. If an attacker can slip in a “hidden” command—like adding a tiny, invisible note to a photo—the assistant will happily obey, unaware of the sabotage. Because the robot relies on its training and never questions the source, this kind of deceptive trick is the most dangerous threat: it exploits trust, not brute force.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
