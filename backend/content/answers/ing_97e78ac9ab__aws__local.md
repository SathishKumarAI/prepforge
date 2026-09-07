---
qid: ing_97e78ac9ab__aws__local
question: 'Explain: For the most part, use positional arguments'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 416
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:09:10-05:00'
sources: []
---

**Situation / Task**  
I was tasked with refactoring a Python‑based inference pipeline that used dozens of optional keyword arguments, which made unit tests brittle and slowed onboarding for new data scientists.

**Action**  
1. **Identify the core API** – I listed all positional parameters (model path, input tensor, batch size) and grouped them by necessity.  
2. **Redesign the signature** – Replaced the long `**kwargs` dictionary with a clear positional signature:  

```python
def predict(model_path: str, data: np.ndarray,
            batch_size: int = 32, device: str = "cpu") -> np.ndarray:
```

3. **Leverage AWS services** –  
   * Stored models in **S3**; used **AWS Lambda** for lightweight inference and **Amazon SageMaker Endpoint** for heavy‑weight jobs.  
   * Employed **Amazon CloudWatch Logs** to capture input shape & latency, feeding back into a **CloudWatch Dashboard** that shows per‑model inference cost vs. accuracy.

4. **Automated tests** – Wrote property‑based tests with `hypothesis` to cover edge cases (empty tensors, mismatched shapes).  

**Result**  
- Reduced API surface by 70 % and cut onboarding time for new team members from 3 days to 1 day.  
- Lowered average inference latency by 15 % and decreased Lambda cold‑start costs by 20 %.  
- The clear positional contract prevented accidental misuse of optional flags, improving model reliability in production.

**Reflection / Learning**  
I realized that *Ownership* means iterating on interfaces as much as models themselves. By **dive deep** into the signature design and tying it to AWS primitives, I turned a maintenance headache into a scalable, cost‑efficient solution—exactly what Amazon expects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
