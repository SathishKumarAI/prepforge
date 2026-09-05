---
qid: ing_351038c3ed__star__local
question: What is a token budget and how do you enforce it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 329
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:14:20-05:00'
sources: []
---

**Situation:**  
When I was building a real‑time chatbot for our e‑commerce platform, we had to keep the average response length under 150 tokens so that customers could read answers quickly and we stayed within OpenAI’s pricing limits.

**Task:**  
My goal was to enforce a strict token budget per user query while still delivering helpful, contextually relevant replies.

**Action:**  
I implemented a two‑stage pipeline. First, I used the OpenAI `text-davinci-003` model’s *logprobs* feature to estimate the token count of the prompt plus any retrieved knowledge snippets before sending it to the generation engine. If the combined length exceeded 140 tokens, I truncated or summarized the external context with a lightweight summarization model (t5-small). Second, during generation I set `max_tokens` to 10 and added a custom post‑processing step that counted actual output tokens; if the count hit 150, I trimmed the last sentence and appended an ellipsis. This approach was wrapped in a middleware layer so every request automatically checked against the budget.

**Result:**  
The chatbot consistently stayed within the 150‑token limit—98% of responses were under 140 tokens, and no instance exceeded 160. User satisfaction scores rose by 12%, and we reduced API spend by roughly $1,200 per month. I learned that proactive prompt sizing combined with runtime token checks is far more reliable than relying solely on model parameters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
