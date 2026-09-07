---
qid: ing_1b443bd750__aws__local
question: 'Explain: Zero-Shot vs. Few-Shot Efficiency — Prompt Engineering Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 618
total_tokens: 852
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:27:57-05:00'
sources: []
---

**Zero‑Shot vs. Few‑Shot Efficiency – Prompt Engineering Fundamentals**

**Situation (S)**  
I led a cross‑functional team at an e‑commerce startup that needed to auto‑tag product images using a large language model (LLM). The goal was to reduce manual labeling by 80 % while keeping latency under 200 ms per image.

**Task (T)**  
Design prompt strategies that maximize inference efficiency and accuracy without retraining the LLM. I had to choose between zero‑shot (no examples) and few‑shot (a handful of labeled samples) approaches, balancing cost on AWS SageMaker and inference speed on Amazon Bedrock.

**Action (A)**  
1. **Requirements & Constraints** – 10 M images, 5 categories, SLA: <200 ms, budget: $0.20/inf.  
2. **Design** –  
   * **Zero‑Shot**: Construct a concise prompt that describes the task (“Classify this image into one of {categories}”). Use Amazon Bedrock’s `anthropic.claude-3-haiku` for its low cost and 200 ms latency.  
   * **Few‑Shot**: Append 3 labeled examples (image URLs + labels) to the prompt, using the same model but increasing token count by ~30 %.  
3. **Evaluation** – Run a pilot on SageMaker Ground Truth. Zero‑shot accuracy: 78 %; few‑shot accuracy: 86 %. Cost per inference: $0.18 (zero‑shot) vs. $0.22 (few‑shot).  
4. **Decision & Rollout** – Adopt a hybrid policy: use zero‑shot for high‑volume “common” categories, and few‑shot only for low‑frequency items where the accuracy gain (>5 %) justifies the extra cost.

**Result (R)**  
- Accuracy improved from 78 % to 86 % on critical SKUs.  
- Manual labeling workload dropped by **82 %**, saving $120K annually.  
- Latency stayed within SLA, and total inference spend decreased by **12 %** after the hybrid rollout.

---

### Leadership Principles Anchored
* **Customer Obsession** – Delivered faster, cheaper tagging for end‑users.  
* **Dive Deep** – Analyzed token budgets, latency curves, and cost per inference to make data‑driven decisions.

### Bar‑Raiser Takeaways
- Demonstrated ownership: owned the entire solution lifecycle from requirement gathering to deployment.  
- Showed depth: quantified trade‑offs (accuracy vs. cost) and iterated on prompt design.  
- Highlighted learning: initially overestimated few‑shot benefits; pivoted after pilot data, illustrating humility and rapid course correction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
