---
qid: ing_70e9bd8e65__think__local
question: 'Q27: How do you evaluate LLM outputs when there is no ground truth?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 462
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:29:12-05:00'
sources: []
---

**1. Clarify the context & set assumptions**  
   *Ask yourself*: What’s the task (e.g., creative writing vs. code generation)? Are we looking for correctness, coherence, usefulness, or novelty? Assume no labeled data but that human judgment is possible and that the output can be checked against known constraints (grammar, logic).

**2. Adopt a mental model of evaluation**  
   *Framework*: Treat evaluation as a multi‑criteria decision problem. Define dimensions such as **accuracy**, **fluency**, **relevance**, **diversity**, and **alignment with user intent**. Think of each dimension as a sub‑scale that can be scored qualitatively or quantitatively.

**3. Step‑by‑step reasoning**  
   1. *Collect samples*: Run the LLM on a representative prompt set.  
   2. *Define rubrics*: Create clear descriptors for each criterion (e.g., “fluent” = no grammatical errors, “relevant” = addresses all parts of the prompt).  
   3. *Human raters*: Have multiple reviewers score each output independently to capture subjectivity.  
   4. *Statistical aggregation*: Compute inter‑rater reliability; average scores per dimension; flag outliers.  
   5. *Iterate*: Refine prompts or model settings based on which dimensions lag.

**4. Avoid common pitfalls**  
   - **Confirmation bias**: Don’t let expectations about the model color ratings.  
   - **Over‑reliance on single raters**: Use multiple judges to mitigate personal style biases.  
   - **Neglecting context**: A “correct” answer may differ across domains; ensure rubric fits the task.

**5. Sanity‑check & communicate**  
   • Verify that scores correlate with intuitive quality (e.g., higher fluency correlates with fewer errors).  
   • Summarize findings in a concise table or dashboard, highlighting which dimensions need improvement.  
   • Explain to stakeholders how each metric was derived and why it matters for the specific application.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
