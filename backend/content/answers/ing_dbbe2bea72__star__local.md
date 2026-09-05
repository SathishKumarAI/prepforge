---
qid: ing_dbbe2bea72__star__local
question: 'Explain: Optimising prompts — Prompt Engineering And Context'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 338
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:47:20-05:00'
sources: []
---

**Situation:**  
At my previous role as a data scientist at a fintech startup, we built an AI‑driven chatbot to answer customer queries about loan products. Early beta tests showed the bot’s responses were generic and often missed key compliance language, leading to a 30 % drop in user satisfaction scores.

**Task:**  
I was tasked with redesigning the prompt architecture so that the model consistently returned concise, regulation‑compliant answers while maintaining conversational tone, all within our 200‑token limit per response.

**Action:**  
I began by mapping out the most frequent question categories and creating a template library of “prompt skeletons” for each. Using OpenAI’s ChatCompletion API, I incorporated few‑shot examples directly into the prompt to steer the model toward desired phrasing. I also introduced a dynamic context window that appended the latest policy update JSON whenever a compliance keyword appeared. To optimize token usage, I applied a hierarchical prompting strategy: first a lightweight “intent recognizer” classifier narrowed down the domain, then a specialized sub‑model handled the final answer generation. Finally, I automated A/B testing with Google Analytics to compare click‑through and resolution rates.

**Result:**  
Within two weeks, user satisfaction rose from 62 % to 88 %, and compliance‑related incidents dropped by 75 %. The iterative prompt framework also reduced average response time by 0.4 seconds per query. I learned that careful context framing and modular prompting can dramatically improve both accuracy and efficiency in production AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
