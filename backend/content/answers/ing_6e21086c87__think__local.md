---
qid: ing_6e21086c87__think__local
question: 'Explain: 1.1.1.1. Non-Negative Least Squares — 1.1. Linear Models \u2014
  scikit-learn 1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 219
output_tokens: 468
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:16:56-05:00'
sources: []
---

We need numbered steps, about clarifying question, assumptions, mental model, step-by-step reasoning, traps, sanity-check. Provide in markdown, 150-220 words.**1. Clarify the request & set assumptions**  
   - The user wants an *explanation* of “Non‑Negative Least Squares” as it appears under **Linear Models – scikit‑learn 1.9.0 documentation**.  
   - Assume they are familiar with basic linear regression but not this particular variant; no code is requested, just a conceptual overview.

**2. Adopt a mental model**  
   - View the problem as a constrained optimization: minimize ‖Ax−b‖² subject to x ≥ 0.  
   - Relate it to ordinary least squares (OLS) and highlight how the non‑negativity constraint changes the feasible set and solution.

**3. Step‑by‑step reasoning toward the answer**  
   1. Define OLS objective and its analytic solution (normal equations).  
   2. Introduce the inequality constraints, turning it into a quadratic programming problem.  
   3. Explain how scikit‑learn solves it: via an active‑set algorithm or projected gradient descent (cite the reference implementation).  
   4. Discuss when NLS is useful (e.g., spectral unmixing, image reconstruction) and its advantages/disadvantages compared to OLS.

**4. Common traps & wrong turns**  
   - Don’t conflate “non‑negative” with “sparse”; mention that the solution can still be dense.  
   - Avoid overloading on code specifics; keep it conceptual unless asked otherwise.  
   - Be careful not to present NLS as a simple OLS tweak—emphasize the algorithmic change.

**5. Sanity‑check & communication**  
   - Verify that each bullet logically follows from the previous one and covers definition, method, implementation, and practical use.  
   - Use plain language: “Non‑negative least squares is just ordinary least squares with a box constraint.”  
   - End by summarizing key takeaways so the reader can recall the main points quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
