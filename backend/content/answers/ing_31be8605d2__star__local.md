---
qid: ing_31be8605d2__star__local
question: 'Explain: Run safety checks — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 324
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:07:45-05:00'
sources: []
---

**Situation:**  
During the launch of our conversational AI for the finance platform, we noticed that the model occasionally produced responses with outdated regulatory references. The product manager flagged a compliance risk that could lead to customer confusion and potential legal issues.

**Task:**  
I needed to design and execute a comprehensive safety evaluation pipeline that would catch these inaccuracies before any user interaction, using AI Evals for automated testing, LangWatch for real‑time monitoring, and LangFuse for contextual analysis.

**Action:**  
First, I built an AI Eval suite that injected edge‑case prompts (e.g., “What’s the current interest rate regulation?”) into the model and scored outputs against a curated reference set. Next, I integrated LangWatch to stream live inference logs and trigger alerts when the confidence score dipped below 0.7 or when the answer deviated from the verified policy text by more than two sentence embeddings. Finally, I leveraged LangFuse’s dependency graph to trace any hallucinated references back to their source documents, allowing us to automatically flag and replace them in the training data.

**Result:**  
The safety checks reduced regulatory‑related incidents by 87% within the first month post‑deployment, cutting manual review time from 3 hrs/day to 30 min. I learned that combining automated evaluation with live monitoring and source tracing provides a resilient safety net for mission‑critical AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
