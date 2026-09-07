---
qid: vq_e0b14c5127__faang__local
question: What are the Control Flow activities in the Azure Data Factory?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 598
total_tokens: 833
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:39:20-05:00'
sources: []
---

**Clarify**  
The question asks for the *Control Flow* activities available in **Azure Data Factory (ADF)**—the set of non‑data‑movement actions that orchestrate pipelines (e.g., branching, loops, error handling). I’ll list each activity type and briefly describe its purpose.

---

### 1. Control Flow Activities
| Activity | Purpose |
|---|---|
| **If Condition** | Conditional execution of a sub‑pipeline or set of activities based on an expression. |
| **Switch** | Multi‑branch routing, similar to switch/case statements; selects one branch from many using a key expression. |
| **ForEach** | Iterates over an array (static or dynamic) and executes a contained activity set for each element. |
| **Until** | Loop that runs until a Boolean condition becomes true; useful for polling or retry logic. |
| **Wait** | Pauses pipeline execution for a specified duration (seconds/minutes/hours). |
| **Execute Pipeline** | Invokes another pipeline, optionally passing parameters and retrieving output. |
| **Web** | Calls an external HTTP endpoint; often used for webhooks or API triggers. |
| **Set Variable** | Assigns a value to a pipeline variable; can be used within loops/conditions. |
| **Delete**, **Copy**, **Move** (within Data Flow) | While primarily data‑movement, they’re considered control flow when orchestrating data transformations. |

---

### 2. Depth
- **Expressions** use Azure ADF’s expression language (`@if`, `@switch`, `@foreach`) and support JSON Path, string manipulation, and type conversion.
- **Looping constructs** (ForEach/Until) can be nested; each iteration runs in parallel by default unless `concurrency` is limited.
- **Error handling**: Each control activity supports *Retry*, *Timeout*, and *Continue on Failure* settings.

### 3. Edge Cases
- Deeply nested loops may hit the maximum pipeline depth (currently 200 activities).
- The **Until** loop must guarantee a condition that eventually evaluates to true; otherwise, it can run indefinitely.
- Web activity failures require proper retry logic or circuit breaker patterns.

### 4. Optimize & Communicate
- Use `@activity('name').output` for dynamic branching rather than static if/else.
- Set **concurrency** on ForEach to balance parallelism vs. resource limits.
- Prefer *Switch* over multiple If Condition activities when handling many branches—improves readability and reduces runtime overhead.

By enumerating each activity, explaining its use case, and noting key implementation details, we demonstrate structured problem solving, depth of knowledge, and awareness of practical constraints—hallmarks of a strong FAANG interview answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
