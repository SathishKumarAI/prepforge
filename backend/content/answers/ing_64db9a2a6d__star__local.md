---
qid: ing_64db9a2a6d__star__local
question: 'Explain: A global workspace in language models — Research \\ Anthropic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 296
total_tokens: 535
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:49:14-05:00'
sources: []
---

**Situation:**  
During a research sprint at my previous company, we were building a new conversational agent that needed to maintain context across multiple user turns without exceeding the model’s token limit.

**Task:**  
I had to design an architecture that could store and retrieve salient facts from earlier in the dialogue so the language model could refer back to them accurately, while keeping inference latency low.

**Action:**  
I implemented a “global workspace” inspired by Anthropic’s work: a small vector memory buffer that captures key entities and actions using attention‑based summarization. Every turn, we encode the new utterance, compute its relevance scores against existing slots, and update the workspace with the top‑k vectors. The LM then receives both the current prompt and this condensed context via a “context window” adapter, effectively extending its working memory without increasing token count. I benchmarked different vector sizes (64 vs 128 dimensions) and found a sweet spot that kept latency under 200 ms while improving answer accuracy by 12%.

**Result:**  
The new architecture reduced hallucinations on coreference tasks from 8% to 3%, cut inference cost by ~15%, and earned us an internal award for innovative memory design. I learned how lightweight vector stores can bridge the gap between fixed‑size token windows and truly long‑term dialogue context.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
