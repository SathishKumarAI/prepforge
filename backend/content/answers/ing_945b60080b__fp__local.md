---
qid: ing_945b60080b__fp__local
question: Our chatbot gives a different answer every time. How do you test something
  non-deterministic?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 492
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:20:42-05:00'
sources: []
---

**Testing a non‑deterministic chatbot**

1. **State the fundamental problem**  
   The bot’s response is a *random variable* \(R\) drawn from an unknown distribution \(\mathcal{P}\). We cannot test “does it equal X?” because each sample may differ, but we can test properties of \(\mathcal{P}\).

2. **Define invariants (properties)**  
   *Semantic correctness*: every answer must be a coherent sentence in the target language.  
   *Safety constraints*: no profanity or disallowed content.  
   *Coverage*: for each intent \(i\), at least one response per test run should contain a keyword from a pre‑defined set.

3. **Collect a sample**  
   Run the bot \(N\) times on the same prompt, with different random seeds if available. \(N\) should be large enough that \(\sqrt{N}\) is comfortably above the confidence interval you care about (e.g., \(N=10\,000\) for 95 % CI ≈ 1%).

4. **Apply statistical tests**  
   *Chi‑square* or *Kolmogorov–Smirnov* tests compare observed frequencies of words/phrases to expected ones.  
   *Bootstrapping* gives confidence intervals for metrics like average length, sentiment score, etc.

5. **Use property‑based testing frameworks** (e.g., QuickCheck) that automatically generate diverse prompts and assert invariants on every run.

---

### Non‑obvious insight

Rather than treating the bot as a black box, *embed a lightweight language model* that scores each candidate reply for grammaticality and relevance. The score distribution can be compared against the baseline using **entropy**: a higher entropy indicates richer diversity but also more risk of incoherence. By monitoring entropy over time you detect drift before it breaks user experience. This links testing to an information‑theoretic principle—maintaining a target entropy guarantees both variety and quality without enumerating every possible answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
