---
qid: vq_eb88238390__faang__local
question: How do you copy an object in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 455
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:41:12-05:00'
sources: []
---

**Clarify**  
The interviewer asks how to make a *copy* of an object in Python—i.e., create a new object that has the same value but is independent from the original. I’d confirm whether they mean a shallow copy (top‑level only) or a deep copy (recursively), and what kinds of objects (lists, dicts, custom classes).  

**Approach**  
1. Identify the desired depth (shallow vs deep).  
2. For built‑in containers: use slicing (`list[:]`, `dict.copy()`) or the `copy` module’s helpers.  
3. For arbitrary objects: rely on the `copy` module (`copy.copy()` / `copy.deepcopy()`).  

**Depth**  
```python
import copy

# Shallow copy – new container, same inner references
lst_shallow = original_list[:]          # or list(original)
dict_shallow = original_dict.copy()
obj_shallow = copy.copy(custom_obj)

# Deep copy – recursively clone nested objects
lst_deep   = copy.deepcopy(original_list)
dict_deep  = copy.deepcopy(original_dict)
obj_deep   = copy.deepcopy(custom_obj)
```
*Complexity*: shallow copies are O(n) in the size of the container; deep copies traverse the entire object graph, so O(total elements).  
*Trade‑offs*: `deepcopy` is slower and may hit recursion limits for very deep structures.  

**Edge Cases**  
- Objects with custom `__deepcopy__` or `__reduce_ex__` methods override behavior.  
- Mutable defaults inside dataclasses—ensure they’re copied appropriately.  
- Circular references: `deepcopy` handles them via memoization; shallow copies preserve cycles.  

**Optimize & Communicate**  
Explain that for performance‑critical paths where you know the structure, manual copying (e.g., list comprehension) can beat `deepcopy`. Always document the chosen strategy and test with nested mutable objects to verify independence. This demonstrates clear thinking, depth, and awareness of pitfalls—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
