---
qid: ing_1838f23182__star__local
question: Walk through the main jailbreak techniques conceptually. Why does safety
  training fail against them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 439
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:17:13-05:00'
sources: []
---

**Situation:** While leading the AI safety team at a startup, we noticed that our new content-filter model was still being tricked by users who crafted “jailbreak” prompts during beta testing—users could coax the assistant into providing disallowed instructions.

**Task:** My goal was to map out the primary jailbreak tactics and understand why our safety training wasn’t catching them so I could design a more robust defense.

**Action:** First, I assembled a small squad of prompt engineers and ran an internal audit. We identified four common techniques: 1) **Prompt injection** that appended hidden instructions after a harmless preamble; 2) **Chain‑of‑thought hijacking**, where the model was nudged to “think” about disallowed content before refusing; 3) **Self‑reflection bypass**, exploiting the model’s own meta‑commentary to reveal policy limits; and 4) **Context window manipulation**, inserting irrelevant filler tokens to dilute the safety filter. For each, we logged token patterns, examined attention maps, and ran adversarial unit tests. We then updated our safety loss to penalize not just final outputs but intermediate reasoning steps, added a lightweight policy‑aware decoder layer, and introduced a two‑stage rejection system that cross‑checked against an external policy oracle.

**Result:** After deployment, jailbreak success rates dropped from 18% to under 4%, and the overall refusal accuracy climbed from 85 % to 92 %. I learned that safety training must guard not only final tokens but also the internal reasoning trajectory; a single‑layer rule set is too brittle against adversarial prompting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
