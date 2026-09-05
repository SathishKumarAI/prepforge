---
qid: ing_1bce9be39f__fp__local
question: What is LLM-as-a-Judge? — Ai Evals Comprehensive Study Guide
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 332
total_tokens: 507
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:05:10-05:00'
sources: []
---

**LLM‑as‑a‑Judge** is a framework that re‑frames evaluation of AI systems as a *probabilistic inference* problem: the large language model (LLM) itself plays the role of an oracle that assigns a probability distribution over “correctness” for each candidate system’s output.  

1. **Fundamental problem** – Human judges are costly, inconsistent, and scale poorly.  
2. **Why it must work this way** – A judge is essentially a *probability‑mass function* over the space of correct answers; if we can approximate that distribution with an LLM, we inherit its generalization ability.  
3. **Deeper principle** – The method exploits *Bayesian decision theory*: given prior knowledge (the model’s training data) and observed evidence (the system’s output), the LLM computes a posterior probability of correctness, which is then thresholded to yield a binary verdict.  
4. **Non‑obvious insight** – Unlike fine‑tuned classifiers, an unmodified LLM can judge multiple modalities simultaneously because it internally represents *joint distributions* over tokens and semantics; thus, a single model can evaluate text, images, or code without separate heads.

In practice, the LLM is prompted to “rate this answer from 0–1” using carefully calibrated prompts. Its output becomes a *continuous* score that can be aggregated into metrics like accuracy or F1, dramatically reducing human labeling effort while preserving statistical rigor.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
