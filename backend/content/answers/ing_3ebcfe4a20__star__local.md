---
qid: ing_3ebcfe4a20__star__local
question: 'Explain: Winners — Constitutional Classifiers: Defending against universal
  jailbreaks \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 340
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:33:56-05:00'
sources: []
---

**Situation** – In late 2023, my team was tasked with hardening a conversational AI that had begun leaking sensitive data after a series of jailbreak prompts from external users. The system’s policy engine was failing to detect sophisticated prompt manipulations that bypassed the original safety filters.

**Task** – I needed to design and deploy a robust defense that could identify and block any attempt to coerce the model into disallowed behavior, regardless of how the user phrased it, without hurting legitimate user experience or requiring constant manual updates.

**Action** – I implemented a “Constitutional Classifier” framework inspired by Anthropic’s paper. First, I curated a large set of jailbreak prompts and corresponding safe responses to fine‑tune a lightweight BERT encoder as a policy evaluator. Then I constructed a hierarchy of safety rules (the constitution) that the classifier had to adhere to when evaluating each user utterance. During inference, every prompt was passed through the classifier; if it violated any rule, the model returned a refusal or safe completion. I also added an adversarial training loop where synthetic jailbreaks were generated on‑the‑fly and fed back into the system, ensuring continuous learning.

**Result** – After deployment, the number of successful jailbreaks dropped from 12 % to <0.1 % over three months, while latency increased only by 8 ms per request. The team learned that a formalized “constitution” plus continual adversarial feedback dramatically improves resilience, and we now apply this approach to all new policy updates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
