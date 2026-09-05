---
qid: vq_12af5286ba__eli5__local
question: what types of biases can happen through sampling?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 241
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:03:10-05:00'
sources: []
---

Imagine you’re trying to learn how much ice cream people like by asking a handful of friends at the park. If all your friends are from one corner of the park where it’s always sunny and they love cold treats, you’ll think everyone loves ice cream, even though others in shady spots might not. That’s **selection bias** – the sample isn’t representative.

Other biases can sneak in:

- **Coverage bias**: You only talk to people who are actually at the park, missing those staying home or on a hike.
- **Non‑response bias**: Some friends refuse to answer; if the ones who say “no” tend to dislike ice cream, your estimate is skewed.
- **Measurement bias**: If you ask “Do you like ice cream?” but only offer chocolate flavor, you’ll overestimate overall love for all flavors.

In data engineering, these biases mean the data you build pipelines from can mislead models or decisions. Keeping a balanced, random, and well‑documented sampling process is key to avoiding them.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
