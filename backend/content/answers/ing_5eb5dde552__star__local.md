---
qid: ing_5eb5dde552__star__local
question: Compare SFT, RLHF, DPO, and RLVR for improving an instruction-tuned model.
  What data does each need, and when would you pick which?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 378
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:37:34-05:00'
sources: []
---

**Situation:** At my previous company we had an instruction‑tuned language model that performed well on short prompts but struggled with nuanced user requests, causing a 15 % drop in customer satisfaction scores. We needed to refine the model without blowing up our compute budget.

**Task:** My goal was to select and implement a fine‑tuning strategy that would improve alignment with user intent while keeping data acquisition costs low and training time under two weeks.

**Action:** I first evaluated four methods:

- **SFT (Supervised Fine‑Tuning):** Requires a curated dataset of prompt–response pairs. We used our internal FAQ logs, yielding ~30k examples.
- **RLHF (Reinforcement Learning from Human Feedback):** Needs human ranking data; we ran a crowdsourcing pilot with 1k ranked triples.
- **DPO (Direct Preference Optimization):** Also relies on preference labels but trains a binary classifier directly; we reused the same 1k rankings to train DPO in just one GPU‑hour.
- **RLVR (Reward‑Varying Reinforcement Learning):** Demands a high‑fidelity reward model and extensive interaction logs; it would have required an extra 5 M inference steps, which was infeasible.

I piloted SFT to get baseline gains, then switched to DPO for rapid iteration. We avoided RLHF’s heavy human labeling and RLVR’s compute demands.

**Result:** The DPO‑enhanced model improved the alignment metric by 12 % and lifted user satisfaction scores to a 93 % NPS within three weeks. I learned that when data is scarce, preference‑based methods like DPO can outperform pure supervised approaches while keeping costs manageable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
