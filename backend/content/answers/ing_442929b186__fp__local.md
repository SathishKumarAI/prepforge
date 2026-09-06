---
qid: ing_442929b186__fp__local
question: How do you wire evals into CI so that prompt or model changes can't silently
  regress quality?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 617
total_tokens: 795
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:30:52-05:00'
sources: []
---

**Why CI must guard against silent quality loss**

Every prompt‑model tweak changes the *decision surface* that maps inputs to outputs. If we only eyeball a few examples, a small shift can turn a high‑confidence answer into a hallucination, yet still pass manual checks. A principled CI test therefore needs to detect whether the *distribution of performance metrics* has drifted beyond what random noise would allow.

**The core principle – statistical control of evaluation scores**

1. **Collect a representative benchmark set** (inputs, reference outputs).  
2. **Run every model build on this set** and compute a *score vector* (accuracy, BLEU, F1, etc.).  
3. Treat each metric as a random variable; estimate its mean \( \mu \) and variance \( \sigma^2 \) from historical builds.  
4. Use a control‑chart style test: if the new score falls outside a *confidence band* (e.g., \( \mu \pm 3\sigma \)) or triggers a *Bayesian hypothesis test* that the posterior mean has decreased with >95% probability, flag a regression.

**Why this works**

- It converts qualitative quality into quantifiable statistics.  
- It automatically adapts to metric variance; noisier metrics get wider bands.  
- It accounts for *batch effects*: if you change prompts, the benchmark set is updated and the statistical model re‑estimates \( \mu,\sigma^2 \), preventing false positives.

**Non‑obvious insight**

A single “average” score can hide multimodal degradation: a few worst cases may dominate overall loss. By monitoring *score distributions* (e.g., via histogram or kernel density estimates) and checking *percentile shifts* (like the 95th percentile dropping), CI catches subtle regressions that mean‑only tests miss.

**Implementation sketch**

```yaml
# .github/workflows/eval.yml
jobs:
  eval:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: python eval.py --model ${{ github.sha }}
      - name: Post results to artifact
        uses: actions/upload-artifact@v3
        with:
          name: eval-results
          path: results.json
```

`eval.py` runs the benchmark, outputs a JSON of metrics and their confidence bands, and exits non‑zero if any metric fails. The CI pipeline then blocks merges until all tests pass.

By grounding CI in statistical hypothesis testing over evaluation scores, you ensure that prompt or model changes cannot silently degrade quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
