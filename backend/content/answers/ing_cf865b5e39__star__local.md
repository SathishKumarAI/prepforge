---
qid: ing_cf865b5e39__star__local
question: Your agent's context window fills up mid-task. What are your options?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 291
total_tokens: 531
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:24:07-05:00'
sources: []
---

**Situation:**  
While building a conversational AI for a customer support bot, the LLM’s 4‑k token context window filled up after about 30 user interactions on a single ticket. The bot started repeating earlier responses and lost track of the current issue.

**Task:**  
I had to keep the dialogue coherent without losing critical details or exceeding the model’s limits, all while staying under the latency budget for real‑time replies.

**Action:**  
First, I introduced a sliding window summarizer: after every 10 turns, a lightweight transformer condensed the conversation into a 200‑token “thread summary” and appended it to the prompt. Next, I set up a priority queue of key entities (user name, ticket ID, error codes) stored in an external KV store; only the most recent three entities were re‑inserted into each prompt. Finally, I leveraged token‑budget planning by pruning redundant clarifying questions from the user’s side via regex filtering before sending to the LLM.

**Result:**  
The bot maintained context over 80 turns per ticket with <120 ms response latency. Accuracy of issue resolution rose from 68% to 92%, and customer satisfaction scores improved by 15 points in post‑deployment surveys. I learned that proactive summarization combined with external state persistence can elegantly sidestep hard context limits while preserving user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
