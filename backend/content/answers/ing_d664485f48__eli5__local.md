---
qid: ing_d664485f48__eli5__local
question: 'Explain: Pairwise Comparison with Positional Debiasing'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 205
total_tokens: 363
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:14:17-05:00'
sources: []
---

Imagine you’re judging a photo contest where each picture gets two votes at a time: “Picture A or Picture B?” You always write the first name on the left and the second on the right. Because people tend to look more at the left side, the first picture often wins even if it’s not better—this is **positional bias**.

In AI, *pairwise comparison* asks a model to choose which of two items (say two product descriptions) is higher quality. If we always present the same item on the left, the model may learn to favor that position instead of truly evaluating content. **Positional debiasing** solves this by swapping the order randomly or training the model to ignore the left/right cue. Thus the AI learns to compare based solely on meaning, not on where it appears on the screen.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
