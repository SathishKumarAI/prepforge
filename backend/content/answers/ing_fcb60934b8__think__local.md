---
qid: ing_fcb60934b8__think__local
question: You're adapting a pretrained model to a new task. What do you freeze, what
  do you train, and how do you decide?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 512
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:40:58-05:00'
sources: []
---

**1️⃣ Clarify the scenario & assumptions**  
- *What is “pretrained”* (e.g., BERT, ResNet, GPT‑style)?  
- *What new task* – classification, regression, generation?  
- *Data size* – huge, medium, or scarce?  
- *Computational budget* and *time constraints*.  

**2️⃣ Mental model: transfer‑learning spectrum**  
| Layer | Typical role | Freeze/Train decision | Rationale |
|-------|--------------|----------------------|-----------|
| Embedding / low‑level feature extractor | Generic patterns (edges, n‑grams) | Usually **freeze** | Stable, universal |
| Mid‑level representation | Task‑specific but still shared | Often **fine‑tune** | Balance between generality & adaptation |
| High‑level head | Directly maps to task outputs | **Train from scratch** or **re‑initialize** | Tailored to new labels |

**3️⃣ Step‑by‑step reasoning**  
1. Start with all layers frozen except the final classification/regression head; train only that part.  
2. Evaluate performance on a validation set.  
3. If underfitting: progressively unfreeze deeper layers (e.g., last encoder block).  
4. Monitor overfitting signals (train loss decreasing, val loss increasing).  
5. When fine‑tuning, use a *lower* learning rate for pretrained weights (e.g., 1e‑5) and a higher one for newly added layers (e.g., 1e‑3).  

**4️⃣ Common traps to avoid**  
- Freezing too many layers when data is scarce → model cannot adjust.  
- Unfreezing all layers with a high LR → catastrophic forgetting of useful features.  
- Ignoring the *task domain*: text‑to‑text vs. image classification may need different freezing strategies.  

**5️⃣ Sanity‑check & verbalise**  
- “I’ll freeze the first N layers because they capture universal features; I’ll fine‑tune the rest to adapt to the new labels.”  
- Cross‑validate: run a quick 3‑fold test with the chosen freeze strategy and compare metrics.  

By iterating this cycle—assume, model, reason, avoid pitfalls, validate—you arrive at an informed decision on what to freeze vs. train for any new task.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
