---
qid: ing_480024b9c4__star__local
question: A one-line system-prompt change is in a PR. What runs before it merges,
  and what blocks it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 274
total_tokens: 522
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:52:27-05:00'
sources: []
---

**Situation**  
I was reviewing a pull request that added a single line to the system prompt for our chatbot. The change was critical because it shifted the AI’s tone from neutral to friendly, but we had just hit our deployment deadline and any regression could break user experience.

**Task**  
Ensure the new prompt doesn’t introduce hallucinations or violate policy before merging, while keeping the PR on schedule.

**Action**  
First I ran the automated unit tests that trigger a full inference cycle with the updated prompt. Then I used our internal sanity‑check script to compare output embeddings against a baseline model—any drift above 0.02 cosine distance flagged it. Next, I spun up a sandbox environment and manually prompted the bot through edge cases (jargon, ambiguous queries) to spot subtle misinterpretations. Finally, I added a gate in CI: if any test fails or the embedding drift exceeds threshold, the PR is blocked; otherwise it auto‑approves.

**Result**  
All checks passed within 15 minutes, so the PR merged without delay. Post‑deployment analytics showed a 12% drop in user complaints about tone. I learned that even one-line changes can ripple through embeddings and policy layers, so automated sanity checks are essential before merge.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
