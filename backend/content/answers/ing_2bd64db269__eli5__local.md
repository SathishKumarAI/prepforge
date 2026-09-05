---
qid: ing_2bd64db269__eli5__local
question: How should tool errors be surfaced to the model?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 190
total_tokens: 347
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:44:48-05:00'
sources: []
---

Think of the AI as a chef in a busy kitchen.  
When the chef uses a knife (a “tool”), it usually works fine, but sometimes the blade slips or breaks—this is a *tool error*.  
Instead of letting the chef keep cooking blind, we give him a clear warning: “Hey, that knife’s dull! Use the new one.” The warning is like a *surface‑error signal* that tells the AI exactly which tool failed and what happened.  

The chef can then decide whether to try again with the same knife (retry), switch to another knife (fallback), or stop cooking altogether.  
So, surface errors are short, honest messages from the tool back to the model—just like a kitchen assistant telling the chef when something goes wrong so he can act immediately.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
