---
qid: ing_f7bc8c3616__star__local
question: Exact-match assertions are useless here. What do you actually assert on
  an LLM response?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 378
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:44:17-05:00'
sources: []
---

**Situation:** In a startup building an AI‑driven customer support chatbot, our QA team noticed that the LLM’s generated replies were often factually wrong or off‑topic, even though the overall response length and style seemed fine.

**Task:** I had to devise a testing framework that could reliably catch these semantic errors without relying on exact text matches, ensuring each new model iteration met a 95 % correctness threshold before deployment.

**Action:** I replaced brittle string checks with a multi‑layered assertion strategy:
1. **Semantic similarity:** Used Sentence‑BERT embeddings to compute cosine similarity against a curated set of correct responses, asserting a score > 0.85.
2. **Fact‑checking API calls:** Integrated the OpenAI Fact Check endpoint to verify key claims, requiring all critical facts to receive a “true” confidence ≥ 0.9.
3. **Human‑in‑the‑loop flagging:** For low‑confidence cases (cosine < 0.8), routed the reply through a small pool of domain experts who tagged 97 % as acceptable.
4. **Coverage metrics:** Monitored the proportion of responses that passed all three layers, aiming for ≥ 95 %.

**Result:** After implementing these assertions, our deployment cycle shortened from two weeks to five days, and the chatbot’s error rate dropped from 18 % to under 2 %. I learned that combining embedding similarity with targeted fact checks provides a robust, scalable way to validate LLM outputs beyond exact‑match tests.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
