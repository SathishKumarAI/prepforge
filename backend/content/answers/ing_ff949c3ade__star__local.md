---
qid: ing_ff949c3ade__star__local
question: 'Explain: Tips for Example Ordering — Prompt Engineering | Lil''Log'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 353
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:59:49-05:00'
sources: []
---

**Situation**  
During a hackathon I was building a text‑classification model that had to predict user intent from short chat snippets. The initial prompts were just the query followed by “Answer yes or no.” Accuracy hovered around 48 %, so we needed a better way to steer the LLM.

**Task**  
I had to design an example ordering strategy for few‑shot prompting that would improve precision without blowing up token usage, while keeping the prompt human‑readable for future iterations.

**Action**  
First I collected 200 labeled examples and split them into “high‑confidence” (the model’s predictions matched the gold label with > 90 % confidence) and “borderline.” I then arranged the prompt so that the first five examples were high‑confidence, followed by a single “counterexample” that illustrated a common misclassification. After that came three borderline cases sorted by decreasing similarity to the new query (computed via cosine similarity on sentence embeddings). I wrapped each example in a short “Context:” block and used minimal formatting (just a dash) to keep token count low. Finally, I added a soft‑prompt cue: “Given these examples, decide if this user wants to book a flight.”

**Result**  
The accuracy jumped from 48 % to 73 % on the test set—a 25-point lift—while the prompt stayed under 200 tokens. I learned that strategically ordering examples by confidence and similarity, plus including one clear counterexample, can dramatically reduce hallucinations and guide the LLM more effectively than random or uniform ordering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
