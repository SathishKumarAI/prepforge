---
qid: ing_64e0eb3af1__faang__local
question: 'Explain: Evaluation plan — Text To Sql Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 514
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:38:42-05:00'
sources: []
---

**Evaluation Plan – Text‑to‑SQL Agent**

| Step | What to do | Why it matters |
|------|------------|----------------|
| **Clarify** | • Define the scope: *given natural‑language queries over a known schema, produce correct SQL.*<br>• Confirm assumptions: static schema, single database, no user‑specific permissions, evaluation data available. | Ensures we target the right problem and set realistic expectations. |
| **Approach** | 1. **Data collection** – scrape open benchmarks (Spider, WikiSQL) + synthetic queries.<br>2. **Metric design** – exact match accuracy, execution correctness, BLEU for paraphrases, latency, and user‑study of readability.<br>3. **Baseline comparison** – rule‑based template engine, GPT‑4 fine‑tuned model, and a retrieval‑augmented system.<br>4. **Iterative testing** – unit tests per predicate type, integration test against DB. | Provides a systematic pipeline from data to metrics, enabling reproducible comparisons. |
| **Depth** | • Implement a modular pipeline: tokenization → intent classification → semantic role labeling → SQL template filling. <br>• Use transformer fine‑tuning with schema encoding (e.g., T5‑spider). <br>• Complexity: inference O(L·d) per query; memory ~ 10 GB for a 13B model. <br>• Trade‑offs: larger models improve accuracy but increase latency; caching frequent queries mitigates this. | Gives concrete technical choices and performance expectations. |
| **Edge Cases** | • Ambiguous predicates (e.g., “top” vs “most”).<br>• Nested subqueries, joins across multiple tables.<br>• Out‑of‑scope data types (geography, JSON).<br>• Test by fuzzing random NL inputs and checking for syntax errors or runtime failures. | Highlights potential failure modes and ensures robustness checks. |
| **Optimize & Communicate** | • Profile latency; replace heavy modules with distilled versions if needed.<br>• Add a confidence score to flag low‑certainty predictions for human review.<br>• Present results in dashboards: accuracy heatmaps per predicate, latency curves, error taxonomy. | Shows readiness to iterate and transparently communicate strengths/weaknesses to stakeholders. |

*Word count:* ~190 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
