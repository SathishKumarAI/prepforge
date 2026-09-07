---
qid: ing_f82b1b68d7__aws__local
question: After fine-tuning on a customer's task, target-task accuracy is up but the
  model got worse at everything else. What happened and what do you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 407
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:39:51-05:00'
sources: []
---

**Situation & Task (S)**  
I was fine‑tuning an LLM for a customer’s medical triage chatbot. After 2 epochs the target‑task F1 rose from .68 to .82, but overall perplexity on a held‑out validation set jumped from 15.4 to 22.1—performance dropped across unrelated domains.

**Action (A)**  
*Diagnose:* I inspected gradient norms and discovered that the new data comprised only rare “red‑flag” symptoms; the loss function was heavily weighted toward them, causing catastrophic forgetting of general language patterns.  
*Mitigate:*  
- Rebalanced the training set with a 70/30 mix of customer data + diverse public corpus.  
- Introduced **Elastic Weight Consolidation (EWC)** to protect important weights from drifting.  
- Added a small “regularization” head that predicts generic next‑token probability, ensuring the base language model stays sharp.  
- Adjusted learning rate schedule (warmup → cosine decay) to avoid over‑fitting early epochs.

*Deploy:* Re‑ran 3 epochs on the new mix; target F1 stayed at .81 while perplexity fell back to 15.6—an improvement of 2.8 points versus baseline, saving ~10 % GPU cost per epoch.

**Result (R)**  
- Customer’s triage accuracy remained high (F1 > .80).  
- General language performance recovered; downstream QA systems saw a 12 % lift in recall.  
- Cost‑per‑epoch dropped from $120 to $108, freeing budget for additional experiments.

**Learning & Bar‑raiser cues**  
I owned the issue, dove deep into loss landscapes, quantified impact with clear metrics, and learned that fine‑tuning without continual‑learning safeguards can erode a model’s breadth—an insight I’ll apply in future multi‑domain deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
