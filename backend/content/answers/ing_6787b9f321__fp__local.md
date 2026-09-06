---
qid: ing_6787b9f321__fp__local
question: Only Four Circles? — Clean Coder Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 381
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:45:08-05:00'
sources: []
---

**Why “Only Four Circles” is a miniature universe of ML**

The problem boils down to *non‑linear separability*: two concentric annuli cannot be split by a single hyperplane in the original input space \((x,y)\).  
By mapping each point through a feature transformation
\[
\phi(x,y)=\bigl(1,\;x,\;y,\;x^{2}+y^{2}\bigr),
\]
we embed the data into a 4‑dimensional space where the two classes become linearly separable.  
This is nothing more than the *kernel trick* in disguise: we chose an explicit mapping that turns the decision boundary from a circle (a quadratic curve) into a hyperplane.

The deeper principle is **representational capacity**. Any continuous function on a compact domain can be approximated by a neural network with enough hidden units. Here, the four features already capture the radial symmetry; a single perceptron suffices once we have expressed \(r^{2}=x^{2}+y^{2}\) explicitly. Thus the “only four circles” problem illustrates that *feature engineering* can reduce a complex non‑linear task to a trivial linear one.

**Non‑obvious insight:**  
The constant term in \(\phi\) is essential because it allows the decision boundary to shift away from the origin. Without it, every hyperplane would pass through the origin of feature space, forcing the model to misclassify points near the center. This subtle point explains why many people omit a bias term and fail on seemingly simple circular datasets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
