---
qid: vq_72e967fc9a__faang__local
question: What is the best way to identify the data type of a NumPy array?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 492
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:16:45-05:00'
sources: []
---

**Clarify**  
You want to determine whether a given `numpy.ndarray` contains integers, floats, strings, etc., and you also need its element‑wise dtype (`np.int32`, `np.float64`, `object`, etc.). Assume the array is already created and we’re only querying its type.  

**Approach**  
1. Inspect the `.dtype` attribute of the array.  
2. Use NumPy’s type predicates (`issubclass(array.dtype.type, np.integer)` etc.) to map the dtype to a high‑level category.  
3. For object arrays, perform a quick scan (e.g., `np.vectorize(lambda x: isinstance(x, (int,float)))`) if needed.  

**Depth**  
```python
import numpy as np

def array_type(arr):
    dt = arr.dtype
    if np.issubclass(dt.type, np.integer):
        return 'integer'
    elif np.issubclass(dt.type, np.floating):
        return 'float'
    elif np.issubclass(dt.type, np.complexfloating):
        return 'complex'
    elif dt.kind == 'U' or dt.kind == 'S':
        return 'string'
    elif dt.kind == 'O':          # object
        # optional quick sample check
        try:
            sample = arr.flat[0]
            if isinstance(sample, (int, float)):
                return 'mixed numeric/object'
        except IndexError:
            pass
        return 'object'
    else:
        return f'unknown ({dt})'
```
Complexity is **O(1)** for the dtype check; sampling an object array is **O(k)** where *k* is the sample size.  

**Edge cases**  
- Empty arrays (`arr.size == 0`) – return `None` or “empty”.  
- Structured dtypes (records) – `.dtype.names` indicates fields; handle each field separately.  
- Masked arrays – inspect `.data.dtype`.  

**Optimize & communicate**  
For performance‑critical code, cache the result of the dtype check if reused. When explaining to an interviewer, emphasize that `arr.dtype.kind` gives a concise categorization and that NumPy’s type system is robust, so this method is both fast and reliable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
