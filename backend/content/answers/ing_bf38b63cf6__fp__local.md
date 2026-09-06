---
qid: ing_bf38b63cf6__fp__local
question: Would you fine-tune a base model or an instruct model? How does that choice
  change your data and your recipe?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 567
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:49:51-05:00'
sources: []
---

When deciding whether to fine‑tune a **base** (pre‑trained on raw text) or an **instruct** (already aligned with “follow instructions”) model, start from the *objective function* you ultimately want: a policy that maps user prompts \(x\) to responses \(y\) maximizing expected utility \(U(y|x)\).

### 1. The optimization landscape
- **Base models** learn a language distribution \(p_{\theta}(y|x)\). Fine‑tuning them with *cross‑entropy* on curated instruction data reshapes this distribution, but the loss remains purely likelihood‑based; it does not penalize misalignment directly.
- **Instruct models** have already been trained (often via RLHF) to minimize a *reward* that rewards faithful, helpful, safe completions. Fine‑tuning them with a *contrastive or reward‑based* objective (e.g., KL‑control) can preserve alignment while adapting to new domains.

### 2. Data implications
| Model | Training data needed | Why |
|-------|----------------------|-----|
| **Base** | Raw text + instruction pairs | Must provide both linguistic fluency and task guidance; risk of *prompt leakage* if instruction examples are too sparse. |
| **Instruct** | Only domain‑specific instruction pairs (or reinforcement signals) | The model already knows how to interpret prompts; fine‑tuning focuses on content, not instruction understanding. |

### 3. Recipe changes
- **Base**:  
  1. Preprocess a large corpus of unlabeled text → language model.  
  2. Fine‑tune with *cross‑entropy* on labeled instructions.  
  3. Optionally apply RLHF to correct misalignment.
- **Instruct**:  
  1. Start from the aligned checkpoint.  
  2. Fine‑tune with *KL‑control* or *reward‑weighted regression* on new instruction data.  
  3. Monitor alignment metrics (e.g., refusal rates) to ensure no drift.

### Non‑obvious insight
Fine‑tuning a base model **always** risks *prompt inversion*: the model may learn that certain prompt styles produce higher likelihoods, leading it to fabricate or hallucinate. Instruct models, by contrast, are already penalized for deviating from safe behavior; fine‑tuning them preserves this guardrail without needing massive instruction datasets.

In short: choose **base** if you need maximum flexibility and can afford a large, diverse instruction set; choose **instruct** when alignment is paramount and your new domain only requires content adaptation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
