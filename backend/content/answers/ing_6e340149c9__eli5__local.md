---
qid: ing_6e340149c9__eli5__local
question: 'Explain: 1.11.1.1.5. Monotonic Constraints — 1.11. Ensembles: Gradient
  boosting, random forests, bagging, voting, stacking \u2014 scikit-learn 1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 273
total_tokens: 474
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:31:05-05:00'
sources: []
---

Imagine you’re training a group of students to solve math problems.  
**Monotonic constraints** are like telling the teacher “if one student gets more practice, their score should never drop.” In machine‑learning trees, this means that increasing an input feature (e.g., age) can only keep or raise the predicted outcome; it prevents weird flips in prediction.

Now think of **ensembles** as a classroom discussion.  
- **Bagging (Bootstrap Aggregating)**: Each student studies from a random subset of books and then you take a simple vote on the answer.  
- **Random Forests**: Same as bagging, but each student also picks only a few chapters to focus on, so their answers are diverse.  
- **Gradient Boosting**: Students first solve easy problems; later ones learn from the mistakes of earlier students, refining their answers step by step.  
- **Voting**: Combine several different teachers’ grades by majority rule.  
- **Stacking**: Let each teacher give a score, then train a final “meta‑teacher” to decide the best overall grade.

All these ideas are built into scikit‑learn 1.9.0 so you can mix and match them easily.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
