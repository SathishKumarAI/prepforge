---
qid: ing_8798f14788__fp__local
question: 'Explain: Q42: Design an evaluation system for comparing two LLMs on open-ended
  tasks.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 558
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:52:53-05:00'
sources: []
---

**Why a new evaluator is needed**

Open‑ended language generation (storytelling, brainstorming, dialogue) is *not* a binary decision problem; it lives in a high‑dimensional semantic space where many outputs are equally plausible. Classical metrics (BLEU, ROUGE) collapse this space into surface overlap and thus reward parroting over creativity. To compare two LLMs fairly we must quantify **semantic quality** while preserving the *distribution* of acceptable answers.

**Principle: Expected Utility under a Learned Preference Model**

Let \(P_\theta(y|x)\) be an LLM’s conditional distribution over responses \(y\) given prompt \(x\). A human or learned preference model \(U(y,x)\in[0,1]\) assigns utility to each response. The *expected utility* of a system is

\[
E_{P_\theta}[\,U(y,x)\,] = \int U(y,x) P_\theta(y|x)\,dy .
\]

Two models are comparable if their expected utilities differ significantly under the same distribution of prompts.

**Designing the evaluator**

1. **Prompt bank:** Curate a large, diverse set of open‑ended prompts (creative writing, problem‑solving, role‑play).  
2. **Reference pool:** For each prompt sample 10–20 high‑quality responses from crowdworkers or GPT‑4 fine‑tuned on expert text.  
3. **Preference model \(U\):** Train a neural ranker that predicts human preference scores by learning to discriminate pairs of responses (pairwise ranking loss). This captures nuanced aspects like coherence, relevance, and novelty without explicit surface metrics.  
4. **Calibration:** Use isotonic regression to map raw scores to the [0,1] utility scale, ensuring comparability across prompts.  
5. **Statistical test:** For each model compute \(E_{P_\theta}[U]\) via Monte Carlo sampling (e.g., 100 generations per prompt). Apply a Bayesian hierarchical model to estimate posterior differences and credible intervals.

**Non‑obvious insight**

The evaluator’s *utility function* can be decomposed into *semantic relevance* and *distributional novelty*. A model that always generates safe, generic responses may score high on relevance but low on novelty. By explicitly weighting these components (e.g., \(U = \lambda R + (1-\lambda) N\)), we expose a trade‑off between correctness and creativity that is invisible to surface metrics. This dual‑criterion design forces model developers to balance the two, mirroring human evaluation of open‑ended content.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
