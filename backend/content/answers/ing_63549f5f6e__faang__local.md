---
qid: ing_63549f5f6e__faang__local
question: 'Q13: How do you implement tool use / function calling?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 517
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:34:28-05:00'
sources: []
---

**Q13 – Implementing Tool Use / Function Calling**

---

### 1️⃣ Clarify  
*Goal*: Enable an LLM to invoke external APIs (e.g., weather, calendar) and incorporate the response into its output.  
Assumptions to confirm:  
- The model can produce a structured “function call” intent.  
- We have a registry of callable functions with schemas (name, parameters).  
- Latency & error handling are acceptable.

### 2️⃣ Approach  
1. **Define Function Schema** – JSON schema per function.  
2. **Prompt Engineering** – instruct model to output either normal text or a JSON object `{name: "...", arguments: {...}}`.  
3. **Post‑processing** – parse the model’s reply; if it matches the schema, invoke the corresponding function.  
4. **Integrate Result** – feed the API response back into the conversation as context and let the LLM generate final output.  

### 3️⃣ Depth (Implementation Sketch)  
```python
def call_function(reply: str):
    try:
        data = json.loads(reply)
        if "name" in data and "arguments" in data:
            func = registry[data["name"]]
            result = func(**data["arguments"])
            return f"[Result] {result}"
    except json.JSONDecodeError:
        pass
    return reply  # normal text

# Conversation loop
for msg in messages:
    response = llm.generate(msg)
    final = call_function(response)
    chat.append(final)
```
- **Complexity**: O(1) per function call; overall O(n) for n turns.  
- **Trade‑offs**: Tight coupling to function schema vs. flexibility of free text.

### 4️⃣ Edge Cases  
- Malformed JSON → fallback to normal text.  
- Missing or extra arguments → validation error → ask user.  
- API failures → retry logic, exponential backoff.  
- Security: sandboxed execution, rate limiting.

### 5️⃣ Optimize & Communicate  
*Improvements*: Use a “function‑calling” prompt prefix (`"You can call the following functions…"`), cache recent API responses, and expose an audit log of calls.  
When explaining to interviewers, emphasize: **clarity → design → implementation → robustness**—the hallmark of FAANG problem solving.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
