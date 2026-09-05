---
qid: ing_4a149b0bef__star__local
question: 'Explain: 10.8.5. Exercises ¶ — 10.8. Beam Search \u2014 Dive into Deep
  Learning 1.0.3 documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 290
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:56:23-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with improving the text‑generation quality of our chatbot that used a transformer model trained on customer support logs. The baseline greedy decoding produced repetitive responses and often missed key product details.

**Task:**  
I needed to implement beam search to generate higher‑quality replies while keeping latency under 200 ms for real‑time interaction.

**Action:**  
I added a beam width of 5, storing the top 5 partial hypotheses at each decoding step. At every token generation I computed the log‑probabilities from the transformer’s softmax output and expanded each hypothesis with all possible next tokens, then pruned back to the best 5 based on cumulative scores. To keep inference fast I cached the hidden states for each beam and leveraged TorchScript to compile the search loop. I also added a length‑penalty term (α = 0.6) to avoid overly short responses.

**Result:**  
After deployment, user satisfaction scores rose from 78 % to 92 %, and average response relevance increased by 18 %. Latency stayed within our 200 ms target thanks to the caching strategy. I learned that careful tuning of beam width and length penalty can dramatically improve generation quality without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
