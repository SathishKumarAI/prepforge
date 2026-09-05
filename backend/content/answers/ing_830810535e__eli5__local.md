---
qid: ing_830810535e__eli5__local
question: 'Explain: Streaming summarisation within token limits'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 187
total_tokens: 342
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:04:28-05:00'
sources: []
---

Imagine you’re reading a long novel in a tiny bookcase that only holds a few pages at once. You can’t keep the whole story in mind, so you read a chunk, jot down its main idea on a sticky note, then move to the next chunk, adding new notes that reference the old ones. After all chapters are processed, you glue the notes together to see the whole plot.

In AI this is **streaming summarization**: the text is split into pieces that fit inside the model’s **token limit** (the “tiny bookcase”). Each piece is summarized and passed along with earlier summaries so later parts can build on what was already captured. The final output stitches these partial summaries together, giving a coherent whole without ever exceeding the token cap.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
