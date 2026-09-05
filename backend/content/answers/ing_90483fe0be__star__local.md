---
qid: ing_90483fe0be__star__local
question: 'Explain: Key hyperparameters — Fine Tuning And Alignment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 339
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:21:20-05:00'
sources: []
---

**Situation:** In my last role as a ML engineer at a fintech startup, we had a pre‑trained language model that could generate natural language risk reports but often produced generic or slightly biased outputs for our compliance team.

**Task:** I was tasked with fine‑tuning the model on our proprietary dataset while aligning its responses to strict regulatory guidelines and minimizing hallucinations, all within a 3‑week sprint.

**Action:** I first identified the crucial hyperparameters: learning rate (set to 1e‑5 for stability), batch size (32 to balance GPU memory), weight decay (0.01 to prevent overfitting), and gradient accumulation steps (to simulate larger batches). For alignment, I introduced a temperature parameter of 0.7 during inference to reduce entropy, added a bias penalty term in the loss function weighted by 0.3 to curb risky phrasing, and employed a reinforcement learning with human feedback loop on a small validation set. I also monitored perplexity and ROUGE scores continuously via MLflow.

**Result:** The fine‑tuned model achieved a 15% drop in hallucination rate (from 12% to 10%) and improved compliance accuracy from 84% to 92%. The alignment tweaks reduced risky language incidents by 40%, earning us a “Compliance Champion” award. I learned that careful tuning of learning dynamics combined with targeted bias penalties can dramatically improve both quality and safety in production NLP systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
