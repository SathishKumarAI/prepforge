---
qid: ing_8dc331b075__star__local
question: 'Explain: Live coding: build the prompt for the next turn under a fixed
  token budget. The catch is our prefix cache.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 327
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:16:17-05:00'
sources: []
---

**Situation**  
During my last sprint at a fintech startup, we were rolling out an AI‑powered chatbot for loan applications. The model had a strict 2048‑token limit per turn, and our system stored a growing “prefix cache” of user context that could not be duplicated in the prompt.

**Task**  
I needed to design a live coding solution that dynamically constructed the next prompt: include the most relevant cached prefix without exceeding the token budget, while leaving enough room for the model’s response.

**Action**  
First I parsed the prefix cache into a list of utterance blocks and calculated each block’s token length using the tokenizer. I then implemented a sliding‑window algorithm that starts from the newest block and iteratively adds older ones until adding another would breach the 2048 limit minus an estimated 512 tokens for the reply. If the window exceeded the budget, I truncated the oldest block at sentence boundaries to preserve coherence. Finally, I concatenated the selected cache with the current user input, wrapped everything in a concise system prompt, and passed it to the model via our inference API.

**Result**  
The chatbot maintained 92 % of context fidelity across sessions while never hitting the token ceiling. Response latency dropped by 18 %, and QA coverage improved from 83 % to 97 %. I learned that careful token accounting coupled with smart truncation can turn a hard budget into an opportunity for efficient, high‑quality AI interactions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
