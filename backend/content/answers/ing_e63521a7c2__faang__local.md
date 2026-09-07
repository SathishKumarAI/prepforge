---
qid: ing_e63521a7c2__faang__local
question: 'Explain: Your team extended a model from 32k to 256k with YaRN plus a short
  fine-tune. Long-context evals improved, but users say it got worse on ordinary short
  prompts and it''s noticeably more verbose. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 272
output_tokens: 758
total_tokens: 1030
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:33:44-05:00'
sources: []
---

**Clarify**

We have an LLM that was originally trained on a 32 k context window.  
It was recently extended to 256 k using the YaRN technique and a brief fine‑tune.  
Post‑release, benchmark scores for long prompts rose, but users report:  

1. **Short‑prompt performance degraded** (accuracy/fluency).  
2. **Responses became noticeably verbose** (more tokens than before).  

Assumptions to verify:  

- The fine‑tune dataset contains mainly long‑context examples.  
- No change in tokenization or decoding hyper‑parameters.  
- Evaluation metrics for short prompts were unchanged.

---

**Approach**

1. **Baseline comparison** – run the old 32 k model on a representative set of short prompts and record perplexity, BLEU/F1, and average length.  
2. **Inspect fine‑tune data** – check label distribution (short vs long), loss curves, and whether the short‑prompt examples were under‑represented.  
3. **Analyze attention patterns** – in YaRN, verify that short‑context tokens still receive sufficient weight; look for “attention drift” toward the tail of the 256 k window.  
4. **Check decoding settings** – temperature, top‑p, and length penalty may have been inadvertently altered during deployment.  
5. **Run ablation tests** – revert to the original 32 k checkpoint on short prompts; then add back only YaRN (no fine‑tune) to isolate effects.

---

**Depth**

- *Fine‑tune imbalance*: If the fine‑tune loss is dominated by long examples, the model may have learned to over‑generate (“verbosity”) and to rely on longer context cues, hurting short‑prompt precision.  
- *YaRN scaling*: The positional embeddings for 256 k shift token positions; if not properly re‑initialized, early tokens could be under‑weighted, leading to lower confidence in short answers.  
- *Decoding hyper‑parameters*: A higher length penalty or a lower temperature after fine‑tune can make the model produce longer outputs even on simple queries.

**Complexity**: Baseline tests are O(N). Attention inspection is O(L²) but limited to a few examples. Fine‑tune ablations require retraining, which is heavier (O(E·B)).

---

**Edge Cases**

- Extremely short prompts (<5 tokens): model might default to a “safe” verbose completion.  
- Prompts that reference earlier context: the extended window could cause confusion if the relevant token is buried in 256 k.  
- Users with different language styles may trigger over‑generation if the fine‑tune data is skewed.

---

**Optimize & Communicate**

1. **Re‑balance the fine‑tune dataset** – add more short‑prompt examples or weight them higher.  
2. **Adjust attention bias** – enforce a minimum weight for tokens in the first 32 k positions.  
3. **Tune decoding settings** – set temperature ≈0.7, top‑p=0.9, length penalty >1 to curb verbosity.  
4. **Deploy a “short‑prompt mode”** – temporarily route short queries through the original checkpoint until re‑training is complete.

Explain to stakeholders: “We identified that the recent fine‑tune overemphasized long contexts, causing the model to over‑generate on short prompts. By rebalancing data and tweaking decoding, we expect to restore baseline quality while retaining long‑context gains.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
