---
qid: ing_bc019dcb4e__faang__local
question: 'Explain: So let''s add a key value pair — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 448
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:00:12-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to explain how you would add a key‑value pair (e.g., `"Python Full Course for Beginners": <URL>`) into a data structure that stores machine‑learning course metadata. I’ll assume we’re working with an in‑memory dictionary or JSON‑like store, and the goal is persistence across runs.

**Approach**  
1. Verify the key doesn’t already exist to avoid accidental overwrite.  
2. Insert the pair into the dictionary.  
3. Persist the updated structure (write‑back to disk or a database).  
4. Return success/failure status for downstream consumers.

**Depth**  
```python
def add_course(course_map: dict, title: str, url: str) -> bool:
    if title in course_map:
        return False                     # duplicate key
    course_map[title] = url
    try:
        with open("courses.json", "w") as f:
            json.dump(course_map, f, indent=2)
    except IOError:
        del course_map[title]            # rollback on I/O error
        return False
    return True
```
*Time*: O(1) for lookup/insert; persistence is O(n) over map size.  
*Space*: O(1) extra besides the file write buffer.

**Edge Cases**  
- Duplicate titles → overwrite or reject?  
- Disk full / permission errors during write‑back.  
- Concurrent modifications (multiple threads/processes).  

**Optimize & Communicate**  
If the dataset grows large, switch to a key‑value store like Redis or a lightweight DB; batch writes to amortize I/O. For concurrency, use optimistic locking or a transactional database. Explain trade‑offs: in‑memory is fast but volatile; persistence guarantees durability at the cost of latency.

*Result*: A clear, testable function that safely adds a course entry and persists it, with complexity analysis and error handling ready for production.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
