---
qid: ing_741037a673__star__local
question: 'Explain: Step 2: Label Ground Truth Data — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 374
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:26:29-05:00'
sources: []
---

**Situation:**  
At a fintech startup, we were building an LLM‑powered customer support chatbot. The previous version had a 45 % accuracy rate on intent classification, and our product manager set a goal to lift that to 80 % before the Q3 launch.

**Task:**  
I needed to create a high‑quality labeled dataset for training and evaluating the model—essentially turning raw user transcripts into “ground truth” examples that the system could learn from and be measured against.

**Action:**  
First, I extracted ~10k conversation logs from our live chat archive. Using Langwatch’s annotation interface, I built a labeling schema with intent tags, sentiment flags, and follow‑up action codes. To keep consistency, I drafted a 30‑page style guide and ran a pilot batch where I and two senior engineers annotated the same 200 messages; we resolved disagreements in a review session, tightening our definitions. Then I deployed Langfuse’s evaluation pipeline to automatically score each labeled example against a baseline model, flagging outliers for re‑annotation. Finally, I set up an automated CI job that pulls new logs nightly, runs them through the annotation queue, and updates the training set with a 99 % confidence threshold.

**Result:**  
The refined dataset boosted intent classification accuracy to 83 % in a held‑out test set. Deployment saw customer query resolution times drop by 18 %. I learned that investing time in clear labeling guidelines and continuous audit pipelines pays off faster model improvements than chasing larger raw data volumes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
