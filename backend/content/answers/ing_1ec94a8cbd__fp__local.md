---
qid: ing_1ec94a8cbd__fp__local
question: 'Explain: Next Steps — BigLaw Bench: Hallucinations | Harvey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 485
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:11:35-05:00'
sources: []
---

### Why “Next Steps” is the *fix* for a Big‑Law benchmark’s hallucination problem  

1. **Fundamental problem**  
   A large language model (LLM) trained on millions of legal documents must *translate* a prompt into an answer that satisfies two constraints:  
   - **Accuracy** – it must reflect factual knowledge in the corpus.  
   - **Safety** – it must not generate misleading or unverified claims (“hallucinations”).  

2. **Why a post‑generation step is necessary**  
   The LLM’s objective (maximizing token likelihood) rewards *fluency* over verifiability; it has no built‑in mechanism to check its own output against source documents.  Therefore, even a state‑of‑the‑art model will occasionally “invent” statutes or case citations.

3. **The “Next Steps” idea**  
   Treat the LLM as a *proposal generator* and then apply a **verification oracle** that:
   - Retrieves the most relevant passages from the training corpus (information retrieval).  
   - Computes a semantic similarity score between each retrieved passage and the generated answer.  
   - Flags any claim whose confidence falls below a threshold, prompting either re‑generation or human review.

4. **Connection to deeper principles**  
   *Bayesian evidence updating*: the oracle supplies likelihoods that the claim is true given the corpus; the LLM’s prior (its raw output) is updated multiplicatively, yielding a posterior that naturally down‑weights hallucinations.  
   This mirrors *information bottleneck* theory: we compress the raw generation into a distilled, verifiable representation.

5. **Non‑obvious insight**  
   The oracle need not be perfect; even a noisy similarity score suffices if it is calibrated to the LLM’s confidence distribution.  By treating hallucination as an *uncertainty quantification* problem rather than a binary filter, we preserve the model’s creative strengths while systematically curbing errors.

In short, “Next Steps” turns the LLM into a **generative‑plus‑verifier** pipeline, grounded in Bayesian evidence and information theory, which is why it is the recommended fix for Hallucinations on the BigLaw Bench.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
