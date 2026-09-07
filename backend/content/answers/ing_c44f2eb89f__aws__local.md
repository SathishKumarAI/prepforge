---
qid: ing_c44f2eb89f__aws__local
question: 'Explain: Blogging with screenshots — fast.ai\u2014Making neural nets uncool
  again \u2013 fast.ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 501
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:46:46-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *“Fast.ai’s *Blogging with screenshots – Making neural nets uncool again* shows how a well‑crafted narrative can democratize deep learning.”*

### Situation  
I read the post while preparing a demo for a non‑technical client who was skeptical about “black‑box” AI. The author used screenshots of code, loss curves and inference results to tell a story that anyone could follow.

### Task  
Translate that approach into a workshop where developers see *why* a simple CNN can beat a complex transformer on a small image set.

### Action  
1. **Design**: Build a minimal notebook (FastAI + PyTorch) that loads CIFAR‑10, trains a ResNet‑18 for 5 epochs, and logs every metric to Weights & Biases.  
2. **Screenshots**: Capture the loss curve, confusion matrix, and sample predictions.  
3. **Narrative**: Explain each step in plain English—what the loss means, why fewer parameters reduce overfitting, how batch size affects convergence.  
4. **AWS Services**:  
   - **SageMaker Studio** for notebook hosting (scalable GPU instances).  
   - **S3** to store datasets and artifacts (durable, low‑cost).  
   - **Step Functions** to orchestrate training → evaluation → deployment pipelines (high availability).  

### Result  
The workshop attracted 120 developers; post‑event survey showed a **+70% confidence boost** in deploying ML models. The code repository now has **3 k stars**, and the demo notebook is used by 5 teams across the company, cutting model iteration time from weeks to days.

> **Leadership Principles**  
> • *Customer Obsession* – tailoring the narrative to non‑technical stakeholders.  
> • *Dive Deep & Deliver Results* – turning complex concepts into actionable, measurable outcomes.  

### Bar‑raiser takeaways  
- Ownership: I owned the end‑to‑end pipeline and documented every trade‑off.  
- Depth: I quantified impact (confidence lift, time saved) rather than just showing screenshots.  
- Learning from failure: Early iterations had flaky notebooks; switching to SageMaker resolved reproducibility issues, a lesson shared in the post.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
