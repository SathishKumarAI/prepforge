---
qid: ing_55fad08721__fp__local
question: 'Explain: Now note this method does not change — Python Full Course for
  Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 445
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:07:29-05:00'
sources: []
---

In supervised learning we repeatedly **minimise a loss**  
\(L(\theta)=\mathbb{E}_{(x,y)\sim P}[\,\ell(f_\theta(x),y)\,]\)  
by moving the parameters \(\theta\) in the direction of the negative gradient.  
The *shape* of that optimisation landscape is dictated by the loss function and the model class; it does **not** depend on any particular dataset or on how we code the algorithm.

That is why a standard “Python‑full‑course” implementation—gradient descent, stochastic updates, learning‑rate schedules—works unchanged from one data set to another. The update rule

\[
\theta_{t+1} \;=\;\theta_t-\eta\,\nabla_\theta L_{\mathcal{B}_t}(\theta_t)
\]

is a **universal discretisation** of the continuous‑time differential equation
\(\dot{\theta}= -\nabla_\theta L(\theta)\).  
Its correctness follows from basic numerical analysis (Euler’s method) and does not hinge on any special property of the data.

### Non‑obvious insight

While the algorithm itself is invariant, *the **effective step size** \(\eta\) is not*.  
Because each minibatch contains a random sample of the population, the variance of \(\nabla_\theta L_{\mathcal{B}}\) scales as \(1/|\mathcal{B}|\).  Consequently, to keep the expected descent magnitude constant we should scale \(\eta\propto |\mathcal{B}|^{1/2}\).  
This explains why practitioners often halve the learning rate when halving the batch size—an effect that is invisible if one only looks at the update rule’s algebraic form.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
