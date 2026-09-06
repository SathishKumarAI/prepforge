---
qid: ing_65827b7c4f__fp__local
question: 'Explain: Results from automated evaluations — Constitutional Classifiers:
  Defending against universal jailbreaks \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 448
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:41:01-05:00'
sources: []
---

**From the problem of universal jailbreaks to a principled defense**

When a large language model (LLM) is prompted with “jailbreak” instructions—phrases that force it to violate policy—the key challenge is *inference-time safety*: the model must refuse or safe‑complete regardless of any prompt. A naive approach, such as hard‑coding refusal rules, fails because prompts can be rewritten arbitrarily; we need a mechanism that generalises across all adversarial rewrites.

The solution starts from **information‑theoretic sufficiency**: a policy is a function \(P(x)\) mapping user input \(x\) to a safe/unsafe label. If the LLM’s internal representation \(h\) contains enough information about \(P\), any downstream decoder can recover the safe decision. Therefore, we train a **constitutional classifier**—a small network that takes \(h\) and outputs the policy label—by exposing it to a wide range of jailbreak prompts. The training objective is simply cross‑entropy between the classifier’s prediction and the ground truth safety label; no extra supervision about the jailbreak structure is needed.

Why does this work universally? Because the classifier learns to **compress** the model’s knowledge of the policy into a low‑dimensional decision boundary that is invariant under prompt paraphrasing. In geometric terms, it learns a hyperplane in representation space that separates “safe” from “unsafe” prompts regardless of how the unsafe intent is expressed—a form of *invariant subspace learning*.

**Non‑obvious insight:** The classifier’s success hinges on the **richness of the model’s hidden states**, not just its output logits. Even if a jailbreak prompt yields a safe-looking final token, the internal activation patterns still encode the policy violation; a well‑trained classifier can detect it before the decoder commits to an unsafe answer. This explains why simply clipping or post‑processing outputs is insufficient—only by inspecting *intermediate* representations do we gain universal robustness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
