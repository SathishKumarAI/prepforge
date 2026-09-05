---
qid: vq_272556162c__star__local
question: 4 How do iterative prompting strategies help refine LLM outputs?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 337
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:52:29-05:00'
sources: []
---

**Situation:**  
During a prototype phase for an internal customer‑support chatbot at my previous company, the first batch of LLM responses was too generic and often missed the nuance of user queries about billing disputes.

**Task:**  
I had to improve the relevance and accuracy of the bot’s replies within two weeks so that it could pass the QA threshold of 85 % correct intent recognition before launch.

**Action:**  
I implemented an iterative prompting pipeline. First, I fed a base prompt with a concise instruction and a few example Q&A pairs. After reviewing the model output, I identified recurring issues—missing policy references and ambiguous tone. I then crafted a refined prompt that added a “policy‑lookup” sub‑prompt and explicitly asked for a confidence score. Each iteration involved running 200 test queries, logging misclassifications, and tweaking wording or adding constraints (e.g., “use only the last three lines of the policy text”). I also introduced a feedback loop where a small human reviewer flagged off‑topic responses that the system automatically re‑prompted with a corrective cue.

**Result:**  
Within 10 days, the bot’s accuracy jumped from 68 % to 92 %, and user satisfaction surveys increased by 18 %. The exercise taught me that iterative prompting is not just about tweaking words; it’s a systematic feedback loop that turns a static model into a dynamic responder tuned to real‑world data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
