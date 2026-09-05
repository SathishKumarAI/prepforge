---
qid: ing_e30cedad09__eli5__local
question: 'Explain: Why is MSE a bad loss for classification, even though it "works"?
  Connect it to the probabilistic view of loss functions.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 270
total_tokens: 446
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:35:14-05:00'
sources: []
---

Think of a student taking a multiple‑choice quiz.  
For each question the student must pick **one** answer out of several options.  
If we let the student write a number (0 to 1) for every option and then use
Mean Squared Error (MSE) – the average squared difference between what was
written and the correct choice – we get a “soft” score: the student can spread
credit over many answers, and tiny mistakes in the wrong places still pull the
overall error down.  

In classification we want **certainty**: one answer should be almost 1,
the others near 0. MSE treats all deviations equally, so it rewards vague guesses
and penalizes sharp ones only slightly.  
The probabilistic view says that cross‑entropy (or log loss) measures how far the
student’s probability distribution is from a perfect spike on the true answer.
It heavily punishes wrong probabilities and strongly encourages the right one,
matching what we actually want in classification.  

So MSE “works” mathematically, but it does not align with the goal of confident,
correct predictions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
