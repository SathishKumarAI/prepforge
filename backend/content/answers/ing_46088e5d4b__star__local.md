---
qid: ing_46088e5d4b__star__local
question: 'Explain: Step 1: Generate Diverse Test Queries — Ai Evals Complete Guide
  Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 395
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:48:42-05:00'
sources: []
---

**Situation** – At my previous startup we were launching a new conversational agent for customer support. The internal QA team was skeptical because our automated unit tests only covered a handful of canned FAQs, so we risked missing edge‑case failures when real users asked ambiguous or mixed‑intent questions.

**Task** – I had to build an evaluation pipeline that automatically generated a large, diverse set of test queries, ensuring coverage across intents, sentiment, and phrasing, while integrating with our existing Langwatch monitoring and Langfuse analytics stack.

**Action** – First, I scripted a query generator in Python using the OpenAI Completion API. It sampled from a curated intent list, injected random synonyms via spaCy’s WordNet lemmatizer, and mixed in common misspellings to simulate noisy input. I then wrapped each generated prompt in Langwatch’s “evaluate” endpoint so every request was logged with its metadata (timestamp, user ID placeholder, model used). Next, I pushed the same set of prompts into Langfuse as evaluation cases, attaching golden responses from our human‑annotated corpus. Finally, I scheduled nightly runs that compared model outputs against gold standards and fed the results back to a Grafana dashboard for real‑time anomaly detection.

**Result** – The automated test suite grew from 12 to over 3,000 unique queries per day, uncovering 27 previously unknown failure modes (e.g., mixed‑intent handling). Our average accuracy on live traffic rose from 78 % to 92 %, and the new pipeline cut QA cycle time by 40 %. I learned that coupling a dynamic query generator with real‑time observability tools like Langwatch and Langfuse turns static tests into living, production‑grade safety nets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
