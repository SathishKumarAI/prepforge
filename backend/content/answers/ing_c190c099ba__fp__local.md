---
qid: ing_c190c099ba__fp__local
question: 'Explain: The interview loop — Cognition Devin'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 387
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:53:33-05:00'
sources: []
---

**The Interview Loop – a Cognitive Construction Principle**

At its core the *interview loop* is an **iterative inference‑construction cycle** that mirrors how humans refine understanding through dialogue.  
1. **Question Generation (Hypothesis)** – The system proposes a query about the world, effectively positing a hypothesis.  
2. **Answer Retrieval (Evidence Gathering)** – It pulls data from its knowledge base or runs simulations to answer the question.  
3. **Evaluation (Consistency Check)** – The answer is compared against prior beliefs; contradictions trigger re‑generation of the question.

Mathematically this is an *optimization over a belief distribution*: we minimize the Kullback–Leibler divergence between the current posterior and a target distribution that satisfies all constraints imposed by the answers. Each interview step tightens the feasible set, driving the system toward a self‑consistent model.

The loop is deeply rooted in **probabilistic programming**: questions are random variables, answers are likelihoods, and the update rule is Bayes’ theorem applied iteratively. It also reflects **active learning**—the agent chooses the most informative query to reduce uncertainty fastest.

*Non‑obvious insight*: The interview loop can be seen as a *self‑supervised curriculum learner*. Because each answer becomes the next question’s context, the system automatically generates increasingly complex tasks without external labels. This emergent curriculum is why large language models thrive on self‑play and “hallucination” correction—they are essentially running an interview loop over their own knowledge base.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
