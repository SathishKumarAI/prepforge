---
qid: ing_d6a2639b85__think__local
question: 'Q: What is "Label Bias" in In-Context Learning?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 509
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:08:17-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**  
   - *What exactly is being asked?*  “Label bias” sounds like a phenomenon where the model’s predictions are skewed by the labels presented in the prompt.  
   - *Assume* we’re dealing with in‑context learning (ICL) in large language models, not fine‑tuning.  
   - *Goal*: explain the concept and why it matters.

**2️⃣ Adopt a mental model: “Prompt–Bias → Output Bias”**  
   - In ICL, the prompt acts as a mini‑dataset; its composition shapes the model’s internal distribution.  
   - Label bias is the systematic shift caused when the label frequencies or positions in the few‑shot examples are unbalanced.

**3️⃣ Step‑by‑step reasoning**  
   1. Identify that each example in ICL consists of *input + label*.  
   2. Recognize that LMs learn a conditional distribution \(P(\text{label}|\text{input}, \text{prompt})\).  
   3. If the prompt contains more examples of one label, the model implicitly assigns higher prior probability to that label.  
   4. This leads to *over‑prediction* for the overrepresented class and under‑prediction for minority classes—label bias.  
   5. Discuss typical manifestations: skewed accuracy, confidence miscalibration, or systematic errors in downstream tasks.

**4️⃣ Common traps to avoid**  
   - Confusing label bias with “class imbalance” in training data; ICL is about *prompt composition*, not dataset size.  
   - Assuming the bias disappears once enough examples are added—balance matters even with many shots.  
   - Overlooking positional effects (e.g., first vs last example) that can amplify bias.

**5️⃣ Sanity‑check & communicate**  
   - Verify by mentally simulating a 2‑shot prompt: “Q1 → A, Q2 → B” → predict more As.  
   - Explain clearly: *Label bias is the tendency of an ICL model to favor labels that appear more frequently or prominently in the few‑shot prompt, skewing its predictions independent of the actual input.*  

This structured reasoning can be reused for other prompt‑bias concepts by swapping “label” with another attribute (e.g., style, domain).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
