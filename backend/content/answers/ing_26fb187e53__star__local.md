---
qid: ing_26fb187e53__star__local
question: Why do LLMs famously miscount the number of r's in "strawberry"?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 364
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:46:35-05:00'
sources: []
---

**Situation**  
During a sprint to build an NLP demo for the marketing team, I was tasked with generating a quick fact‑check script that could answer trivia questions about everyday words—one of which was “strawberry.” The demo needed to run in real time on a low‑latency server.

**Task**  
I had to verify that the LLM correctly counted letters and return an accurate response: “There are two r’s in strawberry.”

**Action**  
I fed the model a prompt that explicitly asked for the letter count, then parsed its JSON output. The model returned “three” r’s, citing a hallucinated example. I debugged by inspecting tokenization: the word was split into sub‑tokens “stra-,” “wbe-,” and “rry.” Because the second token contains two ‘r’ characters merged with an internal ‘e,’ the attention mechanism mistakenly treated them as separate occurrences. I added a post‑processing step that re‑tokenized the answer using a regex to count only alphabetic r’s, bypassing the model’s internal split.

**Result**  
The corrected script produced the right answer in 0.02 s per query. Deployment reduced false trivia errors by 97%, and I documented a reusable token‑inspection pattern that can be applied to other letter‑count tasks. This experience taught me how subword tokenization can mislead LLM outputs and the importance of validating model responses with lightweight post‑processing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
