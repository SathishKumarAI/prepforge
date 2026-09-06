---
qid: ing_6fd1b8faa7__fp__local
question: I read this book. Do you have more? — The Hundred-Page Machine Learning
  Book by Andriy Burkov
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 504
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:01:49-05:00'
sources: []
---

**Beyond a hundred pages: a curated “deep‑cut” path**

| # | Title & Author | Why it extends Burkov’s framework |
|---|-----------------|-----------------------------------|
| 1 | *Pattern Recognition and Machine Learning* – Christopher M. Bishop | It formalises the probabilistic view that underlies every modern ML algorithm (Bayes, EM, variational inference). The book teaches you to think in terms of likelihoods rather than “plug‑and‑play” code. |
| 2 | *Deep Learning* – Ian Goodfellow, Yoshua Bengio & Aaron Courville | After the probabilistic base, this text shows how neural nets approximate arbitrary functions via universal approximation theorems and optimisation tricks (SGD + momentum). It bridges theory with practice through detailed back‑prop derivations. |
| 3 | *The Elements of Statistical Learning* – Hastie, Tibshirani & Friedman | This classic treats learning as a minimisation of an expected loss under a chosen hypothesis class. The bias–variance trade‑off is derived from first principles, giving you the intuition to pick models that generalise. |
| 4 | *Probabilistic Graphical Models* – Koller & Friedman | It extends Bayesian reasoning to structured prediction, revealing why graphical models capture conditional independence and how message passing yields efficient inference. |
| 5 | *Machine Learning: A Probabilistic Perspective* – Kevin P. Murphy | A unified textbook that stitches together the above themes; its emphasis on derivations (e.g., EM, variational Bayes) is invaluable for deep understanding. |

**Non‑obvious insight:**  
Most readers treat “deep learning” as a black‑box technique, but the *optimization landscape* of neural nets is fundamentally governed by geometry: the Hessian’s eigenvalues dictate curvature and thus how quickly different directions converge. Understanding this leads to better initialization schemes (e.g., He/Glorot) and adaptive optimisers that exploit second‑order information without computing it explicitly.

These books collectively move from **why** we model data probabilistically, through **how** we approximate complex functions, to **when** our algorithms will generalise. They provide the mathematical scaffolding you need to go beyond “reading a book” into *engineering* machine learning solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
