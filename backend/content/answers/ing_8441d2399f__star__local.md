---
qid: ing_8441d2399f__star__local
question: 'Q: How do you prevent a model from "unlearning" general capabilities during
  fine-tuning?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 375
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:57:56-05:00'
sources: []
---

**Situation:**  
At my previous company we had a multilingual chatbot based on GPT‑4 that handled customer support across 12 languages. When we started fine‑tuning it for a new insurance domain, the model began to forget its general conversational fluency and language coverage, leading to a 35 % drop in user satisfaction scores.

**Task:**  
I needed to adapt the model to the insurance use case while preserving its broad capabilities—essentially preventing catastrophic forgetting during fine‑tuning.

**Action:**  
1. I used **Elastic Weight Consolidation (EWC)** to add a regularization term that penalizes changes to weights important for prior tasks, calculated from Fisher information on a representative multilingual corpus.  
2. I created a small “anchor” dataset of 5 k examples covering core conversational patterns and all languages, and mixed it into every training batch with a dynamic weighting schedule.  
3. I employed **knowledge distillation**: the original pre‑trained model served as a teacher; its soft logits guided the fine‑tuned student on non‑insurance queries.  
4. Finally, I set up an automated evaluation pipeline that ran 200 inference tests daily (across languages and domains) to monitor performance drift.

**Result:**  
After three training cycles, user satisfaction for general conversations returned to baseline (only a 2 % dip), while insurance-related accuracy improved by 18 %. The EWC penalty reduced catastrophic forgetting metrics by 4× compared to vanilla fine‑tuning. I learned that combining regularization, anchor data, and distillation provides robust protection against unlearning in large language models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
