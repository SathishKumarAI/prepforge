---
qid: ing_6aaa661fc4__aws__local
question: What actually happens during supervised fine-tuning? What role do chat templates
  and special tokens play?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 444
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:25:37-05:00'
sources: []
---

**Situation / Task**  
While leading the *AI‑Ops* squad at my last role, we were asked to deploy a custom LLM for an internal help desk. The goal was to reduce ticket resolution time by 30 % while keeping model size under 4 GB.

**Action (Technical)**  
I explained that **supervised fine‑tuning** is a gradient‑descent process that adjusts pre‑trained weights using labeled pairs *(prompt → correct response)*. We built a dataset of 120k QA pairs and used the Hugging Face Trainer with AdamW, a learning rate schedule, and mixed‑precision to keep GPU usage low.  

Chat templates (e.g., “System: …; User: …; Assistant: …”) serve as **contextual scaffolds** that help the model learn conversational structure. By inserting a `[SPECIAL_TOKEN]` before every user utterance, we gave the network a clear delimiter, improving token‑level alignment and reducing hallucinations by 18 %.  

We deployed on **Amazon SageMaker Endpoint** with an `ml.g5dn.2xlarge` instance, autoscaling to 4 instances during peak hours—cost stayed below $1k/month while latency remained <200 ms.

**Result (Data‑driven)**  
After rollout, ticket resolution time dropped from 12 min to **7.8 min** (35 % improvement). The fine‑tuned model’s perplexity fell from 24.3 to **17.1**, confirming higher confidence in responses.

**Reflection / Bar‑raiser Notes**  
I demonstrated *Ownership* by driving the entire pipeline, *Dive Deep* through hyperparameter tuning and token analysis, and quantified impact via latency & ticket metrics. I also documented a failure: an initial template that omitted the system role caused 12 % more irrelevant answers; we learned to enforce a strict prompt hierarchy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
