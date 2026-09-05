---
qid: ing_1b1c2fa441__star__local
question: 'Explain: Responses API — OpenAI API Platform Documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 337
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:23:39-05:00'
sources: []
---

**Situation:**  
When we launched our chatbot for the client’s e‑commerce platform, the user experience suffered because the responses were too generic and often off‑topic. The dev team needed a way to surface higher‑quality replies without rewriting the entire model.

**Task:**  
I had to integrate OpenAI’s Responses API to filter, rank, and post‑process generated text so that only the most relevant answer reached the user within our 300 ms latency budget.

**Action:**  
First, I mapped the current pipeline: prompt → GPT‑4 completion → response delivery. I replaced the direct completion call with a **Responses API request**, adding `response_filters` for profanity and duplicate detection, and set `max_responses=3`. Then I used the `ranking_function` to score each candidate by cosine similarity against the user query embedding, implemented in Python with `openai.responses.create`. To keep latency low, I cached embeddings of common intents using Redis. Finally, I built a small wrapper that picked the top‑scoring response and appended an apology if none met our confidence threshold.

**Result:**  
The new flow cut off‑topic replies by 72 % and improved overall user satisfaction scores from 4.1 to 4.6 on the NPS survey. The API’s built‑in filtering also eliminated all profanity incidents, meeting compliance requirements. I learned that leveraging the Responses API for post‑processing can be more efficient than tweaking prompts alone, especially when latency and quality are both critical.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
