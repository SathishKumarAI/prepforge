---
qid: ing_66a32a8f9d__eli5__local
question: 'Explain: Devin in Windsurf — Blog | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 298
total_tokens: 457
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:18:59-05:00'
sources: []
---

Imagine you’re a sailor who has just bought a brand‑new windsurf board (that’s the “model”). At first, you can’t steer it; every time you try, you either drift off course or crash into the waves. A machine learning system works the same way: it starts with a blank board and learns how to stay balanced by watching many trials.

You set up a small “training sea” where the wind (data) is constant but the board’s response changes each time you push the sail. After every splash, you note what steering angle made the board glide straight. Over thousands of splashes, the sailor’s brain (the algorithm) builds a rule: *“If the wind points north‑east and the board tilts slightly right, pull the sail left by X degrees.”* This rule set is the model.

When you later leave the training sea and go out on the open ocean, that learned rule lets you glide smoothly without having to remember every splash. The key parts are:

- **Data** – the wind patterns you expose the sailor to.
- **Model** – the board’s steering rules the sailor learns.
- **Training** – repeated practice where mistakes are corrected.

Just as a sailor improves by practicing, a machine learns from data until it can predict or decide without constant supervision.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
