---
qid: ing_7b89a8b83c__faang__local
question: 'Explain: Vague Instructions — Anti Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 387
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:31:29-05:00'
sources: []
---

**Vague Instructions – An Anti‑Pattern in AI Projects**

| Step | What to do |
|------|------------|
| **Clarify** | Restate the goal: “Develop an NLP model that classifies customer feedback.” Ask for *scope*, *evaluation metric*, *data volume*, *deployment constraints* and *time‑to‑market*. Confirm assumptions (e.g., labeled data exists, privacy rules are known). |
| **Approach** | 1️⃣ Define success criteria. <br>2️⃣ Outline data pipeline & feature set. <br>3️⃣ Choose baseline model (e.g., Logistic Regression). <br>4️⃣ Plan iterative experiments and A/B tests. |
| **Depth** | *Data*: ensure balanced classes, handle missing values, use tokenization + embeddings. *Model*: start with BERT fine‑tuning; track perplexity, F1 score. *Deployment*: containerize, set up CI/CD. Complexity: O(n·d) for embedding lookup; memory ~O(d). Trade‑off between accuracy (BERT) vs latency (fastText). |
| **Edge Cases** | Rare classes, out‑of‑domain text, adversarial inputs. Test with synthetic noise and edge‑case samples. Verify model’s calibration under distribution shift. |
| **Optimize & Communicate** | After baseline, prune or distill the model to meet latency targets. Document findings in a concise deck: problem, assumptions, experiments, results, next steps. Emphasize *continuous monitoring* for drift. |

**Why it matters:** Vague instructions lead to scope creep, wasted cycles, and models that don’t meet business needs. Clear, measurable objectives turn AI initiatives into repeatable, scalable successes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
