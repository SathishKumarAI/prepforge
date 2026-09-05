---
qid: ing_d303a1fb0d__star__local
question: 'Explain: o3 (OpenAI) — Reasoning Effort — Context Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 377
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:31:33-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a customer support chatbot for a SaaS company that had an existing FAQ bot built on GPT‑3. The bot was great at answering simple questions but struggled with complex, multi‑step queries like “What is the status of my subscription renewal after the recent price change?” and it frequently gave vague or incorrect answers.

**Task** – My goal was to improve the bot’s accuracy on these higher‑complexity scenarios without retraining the model from scratch, while keeping latency under 1 s for a smooth user experience.

**Action** – I applied *reasoning effort* context engineering. First, I defined a set of “intent” categories and created a lightweight rule‑based preprocessor that extracted key entities (e.g., subscription ID, renewal date). Then I wrapped the OpenAI prompt with a structured reasoning scaffold:  
1) “Step 1: Identify the intent.”  
2) “Step 2: Retrieve relevant data from our internal API.”  
3) “Step 3: Formulate the response.”  

I also used *few‑shot prompting* to give the model examples of correct step‑by‑step reasoning. Finally, I set up a monitoring pipeline that logged prompt tokens and response quality scores, allowing me to iterate on the scaffold in real time.

**Result** – The new chatbot reduced incorrect responses for complex queries from 38% to 9%, increased user satisfaction scores by 15 points (Net Promoter Score), and maintained latency at ~750 ms. I learned that carefully engineered context can turn a general LLM into a domain‑specific reasoning engine, saving time and resources while delivering measurable business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
