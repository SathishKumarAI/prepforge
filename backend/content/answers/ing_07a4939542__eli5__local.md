---
qid: ing_07a4939542__eli5__local
question: 'Explain: Implementing k-fold cross-validation without stratified sampling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 265
total_tokens: 425
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:47:35-05:00'
sources: []
---

Imagine you have a big box of mixed‑colored marbles and you want to know how good your marble‑sorting robot is at picking the right color each time.  
**k‑fold cross‑validation** is like splitting that box into *k* equal piles, one for testing and the rest for training the robot. The robot trains on 9 piles (in a 10‑fold example) and then tries to sort the remaining pile. You repeat this so every pile gets used as a test set once, and you average the success scores.

**Without stratified sampling**, the piles are just random cuts of the whole box. If the original mix has 90% blue marbles and only 10% red, one random pile might end up with almost all blue and no red. The robot’s performance on that pile will be misleading because it never saw many reds during training.

So, k‑fold cross‑validation lets you test your model fairly by cycling through different data splits, but if the splits aren’t “stratified” (kept proportional to each class), some piles may not represent the whole population well.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
