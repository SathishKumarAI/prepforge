---
qid: ing_bc978c548e__fp__local
question: 'Explain: View results — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 488
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:44:43-05:00'
sources: []
---

### Why “View Results” matters in an AI‑eval workflow

When we benchmark a language model (LM) we turn the *problem*—“how well does the LM answer these prompts?”—into an *optimization objective*: maximize expected accuracy under a fixed prompt distribution. The evaluation pipeline therefore consists of three stages:

1. **Generation** – the LM produces candidate responses.
2. **Scoring** – each response is compared to ground truth via a metric (BLEU, ROUGE, human rating).
3. **Aggregation** – scores are turned into a single performance indicator.

The *View Results* step is the last stage; it turns raw per‑prompt scores into interpretable statistics. It must satisfy three mathematical constraints:

| Constraint | Why it holds |
|------------|--------------|
| **Commutativity** (order of prompts irrelevant) | The evaluation objective depends only on the multiset of scores, not their sequence. |
| **Linearity** (scaling by a constant multiplies the result) | Accuracy is an expectation; scaling the metric’s range scales the mean proportionally. |
| **Monotonicity** (better per‑prompt score → better aggregate) | The evaluation goal is to rank models; any transformation that preserves ordering cannot alter the ranking. |

Langwatch and Langfuse implement this by:

- **Batching** scores into tensors, then computing *mean*, *median*, *percentiles*.
- **Normalizing** metrics (e.g., mapping 0–5 human ratings to a probability scale) so different metrics are comparable.
- **Caching** results in a relational store; subsequent queries can aggregate across time or model versions without recomputation.

#### Non‑obvious insight

Most people treat “view results” as a mere display. In fact, the choice of aggregation function (mean vs. median vs. weighted percentile) encodes an *implicit prior* about the evaluation distribution. For skewed distributions—common with few hard prompts—a median can be far more robust and may reveal systematic failure modes that a mean masks. Thus, a principled “view” is not passive; it shapes what we learn from the data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
