---
qid: ing_cc6c587be5__star__local
question: 'Q: What is the biggest anti-pattern you see in LLM applications?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 343
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:17:47-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a chatbot that used GPT‑4 to generate answers for our support portal. Within two weeks, user feedback started flagging that responses were often generic, repetitive, and sometimes off‑topic.

**Task:**  
I was tasked with diagnosing the root cause, redesigning the prompt workflow, and reducing the rate of irrelevant replies by at least 40% before the next quarterly sprint.

**Action:**  
First, I logged every user query and the model’s output, then ran a clustering analysis to identify common failure patterns. I discovered that we were feeding the LLM raw logs without context‑aware token limits, causing it to over‑generalize. I rewrote the prompt template to include:
- A concise “context window” of the last three user messages (≈200 tokens)  
- Explicit instructions for the model to “focus on the specific issue and avoid filler.”  
I also introduced a two‑step validation: a lightweight rule‑based filter that flagged answers containing generic phrases (“Sure, let me check,” “Here’s what you need”) before sending them to users. Finally, I implemented an A/B test harness in our deployment pipeline so we could compare the old vs. new prompts in real time.

**Result:**  
The revised system cut irrelevant replies from 28% down to 15%, a 46% reduction, and increased overall user satisfaction scores by 12 points on our monthly survey. I learned that over‑promising LLM flexibility without tight context controls is the biggest anti‑pattern; disciplined prompt engineering and post‑processing are essential for reliable AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
