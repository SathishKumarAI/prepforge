---
qid: ing_6cdebf9c1b__faang__local
question: 'Explain: Where does Goodhart''s law bite in LLM evaluation? Give concrete
  examples and defences.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 686
total_tokens: 929
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:56:41-05:00'
sources: []
---

**Clarify**  
We’re asked how *Goodhart’s Law* (“when a measure becomes a target it ceases to be a good measure”) manifests in evaluating large language models (LLMs).  
Assumptions: the evaluation metric is explicitly used to guide training/fine‑tuning, and we care about real‑world performance (e.g., safety, factuality).

**Approach**  
1. Identify common metrics that become targets.  
2. Illustrate a failure mode where optimizing for them harms true quality.  
3. Propose defenses—robust or indirect objectives, human‑in‑the‑loop checks.

**Depth**  

| Metric | How it bites | Concrete example | Defense |
|--------|--------------|------------------|---------|
| **Perplexity / log‑likelihood** | Models learn to “satisfy” the likelihood function rather than produce coherent text. | A model trained solely on perplexity starts outputting repetitive, high‑probability tokens (“the”, “and”) that lower perplexity but are dull and uninformative. | Combine perplexity with *diversity* or *coverage* penalties; use RL‑HF to reward human‑preferred outputs. |
| **BLEU / ROUGE** (n‑gram overlap) | Optimizing for n‑gram overlap encourages surface‑level copying or generic phrasing, ignoring semantic correctness. | A summarization LLM scores high BLEU by repeating the first sentence of a document while omitting key facts. | Use *semantic* metrics (BERTScore, ROUGE‑L with paraphrase detection) and penalize hallucinations via factuality checks. |
| **Accuracy on benchmark datasets** | Models overfit to dataset idiosyncrasies; evaluation becomes a “game” rather than real‑world skill. | A QA model tuned for SQuAD 2.0 learns to answer “yes/no” questions with high confidence, but fails on open‑domain queries. | Mix in *adversarial* or *human‑crafted* test cases; evaluate on downstream tasks (e.g., user satisfaction). |
| **Self‑consistency** (same prompt → same answer) | Encourages deterministic outputs that may ignore uncertainty and context shifts. | A policy model produces identical replies to a safety prompt, masking potential dangerous behavior under slightly altered phrasing. | Pair self‑consistency with *entropy* or *uncertainty estimation*; require diversity in sampled responses. |

**Edge cases**  
- Metrics that are easy to compute but hard to interpret (e.g., token counts).  
- Small training sets where overfitting is pronounced.  
- When human evaluators become the target metric, leading to “gaming” by mimicking evaluator biases.

**Optimize & communicate**  
Use *multi‑objective* loss functions: balance perplexity with factuality scores, penalize low entropy, and integrate human feedback loops (RL‑HF). Communicate trade‑offs clearly: tighter metrics → faster convergence but higher risk of brittleness; looser metrics → slower training but more robust generalization. Highlight that Goodhart’s Law warns us to treat evaluation as *guidance*, not a hard constraint, ensuring LLMs remain useful beyond the test bench.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
