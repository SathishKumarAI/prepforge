---
qid: ing_317b6e7452__star__local
question: 'Explain: Your Copilot summarises incoming email. An attacker emails a target
  user with hidden instructions addressed to the model. Walk me through the attack
  and your defence.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 360
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:07:15-05:00'
sources: []
---

**Situation** – In my last role I built an AI‑powered Copilot that automatically parses incoming emails and generates concise bullet‑point summaries for a sales team. One day we noticed an odd spike in the number of “summary” requests flagged as suspicious by our internal audit tool.

**Task** – I had to investigate whether someone was abusing the Copilot’s natural language interface to inject malicious instructions into the model, and then design safeguards that would let legitimate users keep getting useful summaries without exposing us to this kind of prompt injection attack.

**Action** – First, I replayed the flagged emails through the same preprocessing pipeline used in production. The hidden instructions were embedded after a “From:” header trick: the attacker inserted a line like `# Run malicious code` that the Copilot’s tokenizer mistakenly treated as part of the user query. To defend against this, I added three layers: (1) a strict regex filter that removes any lines starting with `#` or other comment symbols; (2) a content‑policy model that classifies prompts for dangerous intent before they reach the generation engine; and (3) an audit log that records raw email headers so we can trace back to the original sender. I also updated our user training to warn about “spoofed” email formats.

**Result** – After deploying these filters, the false‑positive rate dropped from 12% to under 1%, and no further injection attempts succeeded in a six‑month monitoring period. I learned that even seemingly innocuous comment syntax can be weaponized against generative models, so rigorous pre‑processing and intent detection are essential when exposing AI services to external text inputs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
