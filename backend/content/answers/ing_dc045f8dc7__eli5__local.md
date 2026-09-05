---
qid: ing_dc045f8dc7__eli5__local
question: 'Explain: Why Binary Scores Work Best — Ai Evals Comprehensive Study Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 255
total_tokens: 416
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:22:29-05:00'
sources: []
---

Think of an AI test like a music quiz where students must decide if a song is *good* or *bad*. If you ask them to rate each note on a scale from 1 to 10, they’ll often give similar numbers even when the songs differ wildly, and small changes in the rating can make the whole grade swing unpredictably. A binary “yes/no” answer—“Is this song good?”—cuts out that noise. It forces the model to focus only on whether a piece meets a clear standard, not how close it is to the threshold.

**Binary scores** work best because:

* **Clarity:** The model just says “pass” or “fail,” avoiding ambiguous middle ground.
* **Robustness:** Small errors don’t change the outcome—only a wrong classification flips the result.
* **Easier comparison:** You can stack many binary judgments to build a reliable overall score, like tallying up true/false answers on a test.

So, just as a simple yes/no question gives a straightforward grade, binary scoring lets AI evaluations stay accurate and dependable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
