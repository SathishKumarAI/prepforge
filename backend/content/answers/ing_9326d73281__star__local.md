---
qid: ing_9326d73281__star__local
question: 'Explain: Create an eval for a task — Working with evals | OpenAI API'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 359
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:27:10-05:00'
sources: []
---

**Situation** – In my last role as a product engineer at a fintech startup, we launched an AI-powered loan‑underwriting assistant. Early user feedback showed that the model was giving overly cautious risk scores for certain borrower profiles, hurting conversion rates by 12 %.  

**Task** – I needed to build a reproducible evaluation framework to quantify how well the assistant scored risk across diverse demographics and identify where it deviated from human experts.  

**Action** – First, I defined a benchmark dataset: 5,000 anonymized loan applications with labeled risk scores from senior underwriters. Using OpenAI’s EvalKit, I wrote a custom scoring script that parsed model outputs, mapped them to the same score scale, and computed mean absolute error (MAE) per demographic group. I also added a fairness metric—difference in MAE between groups—to flag bias. The eval was integrated into our CI pipeline so every new model version ran the test automatically. I iterated on the prompt, adding clarifying examples until the MAE dropped below 0.3 for all groups.  

**Result** – After deploying the updated prompts, conversion rates rose by 9 % while bias metrics improved to within 2 %. The eval became a key part of our release process, catching regressions early and giving us confidence that the AI was both accurate and fair. I learned how to translate business goals into concrete evaluation metrics and the power of automated testing for generative models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
