---
qid: ing_50237b8184__star__local
question: 'Explain: Generative Pre-trained Transformers (GPT)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 370
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:08:36-05:00'
sources: []
---

**Situation:**  
During my senior year I was part of a capstone team building an AI‑driven content assistant for a local publisher. Their analytics showed that manually drafting article outlines consumed 40 % of the editorial team's time, slowing publication cycles by about two weeks.

**Task:**  
I had to prototype a system that could automatically generate coherent, topic‑aligned outlines and first‑draft paragraphs within minutes, reducing human effort while keeping quality high enough for editors to edit instead of rewrite.

**Action:**  
I chose OpenAI’s GPT‑3.5 model because its fine‑tuning API let me adapt the language style to the publisher’s brand voice. First, I scraped 1,200 existing articles and extracted metadata (headline, sub‑headings, word counts). Using LangChain, I built a prompt that fed the article topic and requested an outline with three key sections plus a lead paragraph. I then fine‑tuned the model on the scraped dataset, adjusting temperature to 0.7 for balanced creativity. To evaluate coherence, I integrated Cohere’s Embedding API to score semantic similarity against reference outlines. Finally, I wrapped everything in a Flask app that exposed an endpoint editors could hit directly from their CMS.

**Result:**  
The prototype cut outline creation time from ~30 minutes per article to under 5 seconds, boosting editorial throughput by 25 %. User feedback showed a 4.3/5 satisfaction rating on clarity and relevance. I learned how prompt engineering and domain‑specific fine‑tuning can turn a general GPT model into a production‑ready content generator, while balancing speed with the need for human oversight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
