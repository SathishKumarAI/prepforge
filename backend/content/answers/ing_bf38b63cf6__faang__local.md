---
qid: ing_bf38b63cf6__faang__local
question: Would you fine-tune a base model or an instruct model? How does that choice
  change your data and your recipe?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 507
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:06:59-05:00'
sources: []
---

**Clarify**  
You’re deciding whether to start from a *base* (pure language) checkpoint or an *instruct* checkpoint for downstream fine‑tuning, and how that choice affects data prep and the training recipe.

Assumptions:  
- You have labeled task data (e.g., classification, summarization).  
- Compute budget allows a few epochs.  
- The target domain is moderately different from the pretraining corpus.

**Approach**  
1. Pick checkpoint type → dictates initial bias.  
2. Prepare training set accordingly.  
3. Define loss and learning‑rate schedule.  
4. Run validation, iterate.

**Depth**  

| Checkpoint | Initial Bias | Data Format | Recipe |
|------------|--------------|-------------|--------|
| **Base** | General LM; no instruction signal | Raw text or paired (input → output) without prompts | Use *supervised fine‑tune* with cross‑entropy. If the task is multi‑label, add a prompt (“Classify: …”) during inference. |
| **Instruct** | Already maps “prompt → answer” patterns | Same raw text but often includes short prompts in the training set (e.g., “Summarize this paragraph”). | Treat as *instruction tuning*: concatenate instruction + context; optionally use LoRA or adapter layers to preserve prompt‑aware weights. |

*Training details:*  
- LR = 1e‑4 for base, 5e‑5 for instruct (to avoid overwriting instruction head).  
- Warm‑up steps: 500; total steps: 2000.  
- Use gradient checkpointing if GPU memory is tight.

**Edge Cases**  
- **Domain shift**: Instruct models may overfit to prompt style → add synthetic prompts from target domain.  
- **Label sparsity**: Base models may need more data for the same accuracy; instruct can generalize better with fewer samples.  

**Optimize & Communicate**  
If early validation shows *prompt drift*, switch to a base checkpoint and add a lightweight instruction head via LoRA. Communicate this trade‑off by showing validation curves per checkpoint type, highlighting that an instruct model reduces data needs but may be brittle to prompt changes. This structured reasoning demonstrates clear decision logic, technical depth, and awareness of practical constraints—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
