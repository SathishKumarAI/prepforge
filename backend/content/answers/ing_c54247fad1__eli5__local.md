---
qid: ing_c54247fad1__eli5__local
question: What is indirect prompt injection, and why is it more dangerous than direct?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 184
total_tokens: 346
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:48:37-05:00'
sources: []
---

Imagine you’re asking a recipe app for cake instructions. **Direct prompt injection** is like shouting the secret “add chocolate instead of vanilla” straight into the question—easy to spot and easy to block.  
**Indirect prompt injection** works differently: it slips that same instruction into a hidden note (like an invisible watermark) inside another part of your request, or it tricks the app into reading a separate file that contains the instruction. The app thinks it’s just following the user’s normal request, but secretly follows the hidden cue.

Because the hidden cue is tucked away in parts of the input the system normally trusts and doesn’t scrutinize as closely, it can bypass safety filters more easily. That makes indirect injection riskier: it lets attackers sneak instructions that alter behavior without being detected by standard checks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
