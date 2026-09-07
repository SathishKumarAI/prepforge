---
qid: vq_eb88238390__aws__local
question: How do you copy an object in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 522
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:21:06-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During my tenure at **AWS Solutions Architect**, I was asked how to clone a complex data structure that included nested objects and external resources.  
- **Situation:** A customer’s Lambda workflow used a mutable `Config` object containing API credentials, caching flags, and a reference to an S3 bucket client. They needed to create independent copies for parallel executions without risking cross‑talk or accidental mutation of shared state.  
- **Task:** Implement a safe copy mechanism that preserves immutability where required, while keeping memory footprint low (≤ 5 MB per Lambda invocation).  
- **Action:** I leveraged Python’s `copy` module:  
  ```python
  import copy
  def clone_config(cfg):
      # shallow copy for immutable primitives
      new_cfg = copy.copy(cfg)
      # deep copy only the mutable nested dicts; keep S3 client reference shared
      new_cfg.settings = copy.deepcopy(cfg.settings)
      return new_cfg
  ```
  For larger objects I used `copyreg` to register a custom pickler that serializes only the essential attributes, then deserializes them with `pickle.loads`.  
  In production I wrapped this in a Lambda layer to avoid cold‑start overhead.  
- **Result:** The solution reduced accidental state leakage by 100 % and cut memory usage per invocation from ~12 MB to ~4 MB, allowing the function to scale from 1K to 10K concurrent executions without hitting the AWS Lambda concurrency limit.  

**Leadership Principles Highlighted**

| Principle | How it Shines |
|-----------|---------------|
| **Ownership** | Took full responsibility for the copy logic and its impact on scalability. |
| **Dive Deep** | Analyzed memory profiling, identified hotspots, and engineered a custom pickler. |
| **Customer Obsession** | Delivered a solution that directly increased customer throughput and reliability. |

**Bar‑raiser cues**

- *Ownership:* I documented the trade‑offs in an internal design doc and mentored teammates on using the helper.  
- *Depth:* The answer shows knowledge of `copy.copy`, `deepcopy`, and custom serialization—no surface‑level explanation.  
- *Quantified Impact:* 4 MB memory savings, 10× concurrency lift.  
- *Learning from Failure:* Initial naive deepcopy caused OOM; I iterated to a selective deep copy after profiling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
