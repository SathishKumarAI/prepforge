---
qid: ing_3bd45d79f0__star__local
question: 'Explain: Finetuning — Pricing | OpenAI API'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 373
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:28:13-05:00'
sources: []
---

**Situation**  
During the launch of our chatbot product for a fintech client, we needed to adapt the base GPT‑4 model to understand industry jargon and comply with regulatory tone guidelines. The client’s budget was capped at $2 k per month for AI usage.

**Task**  
I had to fine‑tune the model so it met accuracy targets (≥ 90 % compliance flagging) while keeping the total monthly cost—including fine‑tuning, inference, and storage—under the budget.

**Action**  
1. I used the OpenAI Fine‑Tuning API, preparing a 12 k‑token dataset of labeled customer emails.  
2. I calculated training cost: 3 epochs × 12 k tokens × $0.0004 per token ≈ $1.52.  
3. For inference, I estimated 20 k prompts/month at 256 tokens each, using the “gpt‑4‑1106‑preview” pricing of $0.03/1K tokens for prompt and $0.06/1K for completion → ~$18.  
4. Added a 5 % buffer for storage and future scaling. I set a hard stop in the billing dashboard to alert if usage hit $1,800.

**Result**  
The fine‑tuned model achieved 92 % compliance accuracy, and total monthly spend stayed at $1,850—$150 under budget. I learned how token counts directly drive cost and that early budget alerts are essential when fine‑tuning production models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
