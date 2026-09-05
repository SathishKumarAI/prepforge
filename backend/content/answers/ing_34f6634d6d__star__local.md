---
qid: ing_34f6634d6d__star__local
question: 'Explain: Prompt Engineering & Context Engineering - Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 371
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:14:12-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a chatbot for our customer support portal that could handle complex product queries. Our initial model, trained on generic data, struggled to keep the conversation relevant: 38 % of user turns were off‑topic or required manual escalation.

**Task** – My goal was to reduce off‑topic responses by at least 25 % while maintaining a fast response time (<200 ms). I had to redesign how we fed information into the LLM and control the flow of dialogue.

**Action** – First, I applied **prompt engineering**: I crafted dynamic prompts that included the user’s exact query, a short system instruction (“You are an expert product advisor”), and a concise summary of relevant knowledge base snippets. I used token‑budget tricks (prefixing with “Relevant facts:” and truncating older turns) to keep context length manageable. Next, for **context engineering**, I built a lightweight retrieval layer that fetched the top 3 most similar FAQ articles using BM25, then injected those passages into the prompt as structured JSON. I also added a “confidence gate” – if the model’s internal confidence score fell below 0.6, it automatically asked clarifying questions instead of guessing.

**Result** – After A/B testing over two weeks, off‑topic responses dropped from 38 % to 20 %, a 47 % improvement. User satisfaction scores rose by 12 points on our NPS survey, and we cut manual escalations by 30 %. I learned that the key is not just throwing data at the model but curating it in real time, balancing detail with token limits, and using confidence signals to steer the conversation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
